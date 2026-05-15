#!/usr/bin/env python3
import argparse
import csv
import hmac
import json
import os
import smtplib
from datetime import datetime, timezone
from email.message import EmailMessage
from http import HTTPStatus
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any, Dict, Iterable
from urllib import error as urllib_error
from urllib import parse as urllib_parse
from urllib import request as urllib_request

DEFAULT_MODEL = "gpt-4o-realtime-preview"
DEFAULT_VOICE = "ash"
DEFAULT_TRANSCRIPTION_MODEL = "gpt-4o-mini-transcribe"
HUME_RUNTIME_AUTH_ENDPOINT = "/api/hume/runtime-auth"
LEAD_CAPTURE_ENDPOINT = "/api/maxwellian/lead-capture"
LEAD_EXPORT_STATUS_ENDPOINT = "/api/maxwellian/leads/status"
LEAD_EXPORT_ENDPOINT = "/api/maxwellian/leads/export"
BUILDER_LEAD_EXPORT_STATUS_ENDPOINT = "/api/builder/leads/status"
BUILDER_LEAD_EXPORT_ENDPOINT = "/api/builder/leads/export"
LEAD_CAPTURE_JSONL_FILENAME = "maxwellian_leads.jsonl"
LEAD_CAPTURE_CSV_FILENAME = "maxwellian_leads.csv"
LEAD_CAPTURE_CSV_HEADERS = [
    "received_at",
    "submitted_at",
    "visitor_name",
    "visitor_company",
    "visitor_email",
    "visitor_intent",
    "likely_user_intent",
    "confirmation_email_consent",
    "newsletter_opt_in",
    "text_notifications_interest",
    "sales_outreach_consent",
    "source_page",
    "context_source",
    "entry_point",
    "lead_capture_reason",
    "guardrail_session_token",
    "user_agent",
]


def _coerce_text(value: Any) -> str:
    return value.strip() if isinstance(value, str) else ""


def _read_dotenv_file(path: Path) -> Dict[str, str]:
    parsed: Dict[str, str] = {}
    if not path.is_file():
        return parsed
    try:
        for raw_line in path.read_text(encoding="utf-8").splitlines():
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            key = key.strip()
            value = value.strip().strip('"').strip("'")
            if not key:
                continue
            parsed[key] = value
    except Exception:
        return {}
    return parsed


def _find_env_candidates(root_dir: Path) -> Iterable[Path]:
    home = Path.home()
    return [
        Path.cwd() / ".env",
        root_dir / ".env",
        root_dir.parent / ".env",
        home / ".env",
        home / "eestream.env" / ".env",
        home / ".eestream.env" / ".env",
        root_dir.parent / "eestream.env" / ".env",
    ]


def resolve_openai_api_key(root_dir: Path) -> str:
    existing = _coerce_text(os.environ.get("OPENAI_API_KEY"))
    if existing:
        return existing
    for candidate in _find_env_candidates(root_dir):
        values = _read_dotenv_file(candidate)
        key = _coerce_text(values.get("OPENAI_API_KEY"))
        if key:
            os.environ["OPENAI_API_KEY"] = key
            return key
    return ""


def resolve_hume_runtime_auth(root_dir: Path) -> Dict[str, str]:
    access_token = _coerce_text(
        os.environ.get("HUME_ACCESS_TOKEN") or os.environ.get("HUME_RUNTIME_ACCESS_TOKEN")
    )
    if access_token:
        os.environ["HUME_ACCESS_TOKEN"] = access_token
        return {"type": "accessToken", "value": access_token}

    api_key = _coerce_text(
        os.environ.get("HUME_API_KEY") or os.environ.get("HUME_RUNTIME_API_KEY")
    )
    if api_key:
        os.environ["HUME_API_KEY"] = api_key
        return {"type": "apiKey", "value": api_key}

    for candidate in _find_env_candidates(root_dir):
        values = _read_dotenv_file(candidate)
        access_token = _coerce_text(
            values.get("HUME_ACCESS_TOKEN") or values.get("HUME_RUNTIME_ACCESS_TOKEN")
        )
        if access_token:
            os.environ["HUME_ACCESS_TOKEN"] = access_token
            return {"type": "accessToken", "value": access_token}
        api_key = _coerce_text(values.get("HUME_API_KEY") or values.get("HUME_RUNTIME_API_KEY"))
        if api_key:
            os.environ["HUME_API_KEY"] = api_key
            return {"type": "apiKey", "value": api_key}
    return {"type": "", "value": ""}


def build_session_payload(raw_payload: Dict[str, Any]) -> Dict[str, Any]:
    payload: Dict[str, Any] = {}
    passthrough_keys = {
        "model",
        "voice",
        "instructions",
        "modalities",
        "temperature",
        "turn_detection",
        "input_audio_format",
        "output_audio_format",
        "input_audio_transcription",
        "tools",
        "tool_choice",
        "max_response_output_tokens",
    }
    for key in passthrough_keys:
        if key in raw_payload:
            payload[key] = raw_payload[key]

    payload["model"] = _coerce_text(payload.get("model")) or DEFAULT_MODEL
    payload["voice"] = _coerce_text(payload.get("voice")) or DEFAULT_VOICE
    payload["modalities"] = payload.get("modalities") or ["text", "audio"]
    if not isinstance(payload["modalities"], list):
        payload["modalities"] = ["text", "audio"]

    instructions = _coerce_text(payload.get("instructions"))
    if instructions:
        payload["instructions"] = instructions
    elif "instructions" in payload:
        del payload["instructions"]

    turn_detection = payload.get("turn_detection")
    if not isinstance(turn_detection, dict):
        turn_detection = {
            "type": "server_vad",
            "create_response": True,
            "interrupt_response": True,
        }
    payload["turn_detection"] = turn_detection

    input_audio_transcription = payload.get("input_audio_transcription")
    if not isinstance(input_audio_transcription, dict):
        input_audio_transcription = {"model": DEFAULT_TRANSCRIPTION_MODEL}
    input_audio_transcription["model"] = _coerce_text(
        input_audio_transcription.get("model")
    ) or DEFAULT_TRANSCRIPTION_MODEL
    payload["input_audio_transcription"] = input_audio_transcription

    return payload


def _coerce_bool(value: Any) -> bool:
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return value != 0
    text = _coerce_text(value).lower()
    if not text:
        return False
    return text in {"1", "true", "yes", "y", "on", "enabled", "opted-in", "opt_in"}


def _normalize_email(value: Any) -> str:
    candidate = _coerce_text(value).lower().strip(" <>\"'()[]{}.,;:")
    if "@" not in candidate or "." not in candidate:
        return ""
    local, _, domain = candidate.partition("@")
    if not local or not domain or "." not in domain:
        return ""
    return candidate


def _truncate_text(value: Any, max_length: int) -> str:
    text = _coerce_text(value)
    if not text:
        return ""
    return text[:max_length]


def _utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def _serialize_csv_scalar(value: Any) -> str:
    if value is None:
        return ""
    if isinstance(value, bool):
        return "true" if value else "false"
    if isinstance(value, (int, float)):
        return str(value)
    if isinstance(value, (dict, list)):
        try:
            return json.dumps(value, ensure_ascii=False)
        except Exception:
            return ""
    return _coerce_text(value)

def resolve_lead_capture_storage_dir(root_dir: Path) -> Path:
    configured = _coerce_text(os.environ.get("MAXWELLIAN_LEAD_STORAGE_DIR"))
    if configured:
        return Path(configured).expanduser().resolve()
    return (root_dir.parent / "nonpublic_runtime" / "maxwellian_leads").resolve()


def _default_lead_capture_log_path(root_dir: Path) -> Path:
    return (resolve_lead_capture_storage_dir(root_dir) / LEAD_CAPTURE_JSONL_FILENAME).resolve()


def _default_lead_capture_csv_path(root_dir: Path) -> Path:
    return (resolve_lead_capture_storage_dir(root_dir) / LEAD_CAPTURE_CSV_FILENAME).resolve()


def _legacy_lead_capture_path(root_dir: Path, filename: str) -> Path:
    return (root_dir / "UnityEnergy" / filename).resolve()


def _migrate_legacy_lead_file(root_dir: Path, target_path: Path, legacy_filename: str) -> None:
    legacy_path = _legacy_lead_capture_path(root_dir, legacy_filename)
    if target_path.exists() or not legacy_path.exists() or not legacy_path.is_file():
        return
    target_path.parent.mkdir(parents=True, exist_ok=True)
    try:
        legacy_path.replace(target_path)
        return
    except Exception:
        pass
    try:
        target_path.write_bytes(legacy_path.read_bytes())
        legacy_path.unlink()
    except Exception:
        return


def ensure_lead_capture_storage_paths(root_dir: Path) -> Dict[str, Path]:
    jsonl_path = _default_lead_capture_log_path(root_dir)
    csv_path = _default_lead_capture_csv_path(root_dir)
    _migrate_legacy_lead_file(root_dir, jsonl_path, LEAD_CAPTURE_JSONL_FILENAME)
    _migrate_legacy_lead_file(root_dir, csv_path, LEAD_CAPTURE_CSV_FILENAME)
    return {
        "jsonl": jsonl_path,
        "csv": csv_path,
    }


def resolve_lead_capture_log_path(root_dir: Path) -> Path:
    configured = _coerce_text(os.environ.get("MAXWELLIAN_LEAD_LOG_PATH"))
    if configured:
        return Path(configured).expanduser().resolve()
    return ensure_lead_capture_storage_paths(root_dir)["jsonl"]


def resolve_lead_capture_csv_path(root_dir: Path) -> Path:
    configured = _coerce_text(os.environ.get("MAXWELLIAN_LEAD_CSV_PATH"))
    if configured:
        return Path(configured).expanduser().resolve()
    return ensure_lead_capture_storage_paths(root_dir)["csv"]


def resolve_lead_export_token() -> str:
    return _coerce_text(
        os.environ.get("MAXWELLIAN_LEAD_EXPORT_TOKEN")
        or os.environ.get("MAXWELLIAN_EXPORT_TOKEN")
    )


def _extract_export_token(headers: Any) -> str:
    if headers is None:
        return ""
    bearer_value = _coerce_text(headers.get("Authorization", ""))
    if bearer_value.lower().startswith("bearer "):
        token = bearer_value[7:].strip()
        if token:
            return token
    return _coerce_text(
        headers.get("X-Maxwellian-Export-Token", "")
        or headers.get("x-maxwellian-export-token", "")
    )


def _build_storage_file_stat(path: Path) -> Dict[str, Any]:
    exists = path.exists() and path.is_file()
    payload: Dict[str, Any] = {
        "filename": path.name,
        "exists": exists,
        "bytes": 0,
        "updated_at": "",
    }
    if not exists:
        return payload
    try:
        stats = path.stat()
        payload["bytes"] = int(stats.st_size)
        payload["updated_at"] = datetime.fromtimestamp(
            stats.st_mtime, tz=timezone.utc
        ).isoformat()
    except Exception:
        pass
    return payload


def build_lead_capture_storage_status(root_dir: Path) -> Dict[str, Any]:
    paths = ensure_lead_capture_storage_paths(root_dir)
    return {
        "jsonl": _build_storage_file_stat(paths["jsonl"]),
        "csv": _build_storage_file_stat(paths["csv"]),
    }


def resolve_lead_export_format(query_params: Dict[str, Any]) -> str:
    raw_value = ""
    if isinstance(query_params, dict):
        query_value = query_params.get("format")
        if isinstance(query_value, list) and query_value:
            raw_value = _coerce_text(query_value[0]).lower()
        elif isinstance(query_value, str):
            raw_value = _coerce_text(query_value).lower()
    return "csv" if raw_value == "csv" else "jsonl"


def build_lead_capture_record(raw_payload: Dict[str, Any], user_agent: str = "") -> Dict[str, Any]:
    payload = raw_payload if isinstance(raw_payload, dict) else {}
    submitted_at = _truncate_text(payload.get("submitted_at"), 60) or _utc_now_iso()
    visitor_intent = _truncate_text(
        payload.get("visitor_intent") or payload.get("lead_capture_intent"), 500
    )
    likely_user_intent = _truncate_text(
        payload.get("likely_user_intent") or visitor_intent, 500
    )
    return {
        "received_at": _utc_now_iso(),
        "submitted_at": submitted_at,
        "visitor_name": _truncate_text(payload.get("visitor_name"), 80),
        "visitor_company": _truncate_text(payload.get("visitor_company"), 120),
        "visitor_email": _normalize_email(payload.get("visitor_email")),
        "visitor_intent": visitor_intent,
        "likely_user_intent": likely_user_intent,
        "confirmation_email_consent": _coerce_bool(payload.get("confirmation_email_consent")),
        "newsletter_opt_in": _coerce_bool(payload.get("newsletter_opt_in")),
        "text_notifications_interest": _coerce_bool(payload.get("text_notifications_interest")),
        "sales_outreach_consent": _coerce_bool(payload.get("sales_outreach_consent")),
        "source_page": _truncate_text(payload.get("source_page"), 80),
        "context_source": _truncate_text(payload.get("context_source"), 120),
        "entry_point": _truncate_text(payload.get("entry_point"), 120),
        "lead_capture_reason": _truncate_text(payload.get("lead_capture_reason"), 120),
        "guardrail_session_token": _truncate_text(payload.get("guardrail_session_token"), 120),
        "user_agent": _truncate_text(user_agent, 300),
    }

def _persist_lead_capture_jsonl(log_path: Path, record: Dict[str, Any]) -> Dict[str, Any]:
    try:
        log_path.parent.mkdir(parents=True, exist_ok=True)
        with log_path.open("a", encoding="utf-8") as handle:
            handle.write(json.dumps(record, ensure_ascii=False))
            handle.write("\n")
        return {"ok": True, "path": str(log_path)}
    except Exception as exc:
        return {"ok": False, "path": str(log_path), "error": str(exc)}


def _persist_lead_capture_csv(csv_path: Path, record: Dict[str, Any]) -> Dict[str, Any]:
    try:
        csv_path.parent.mkdir(parents=True, exist_ok=True)
        should_write_header = (not csv_path.exists()) or csv_path.stat().st_size == 0
        with csv_path.open("a", encoding="utf-8", newline="") as handle:
            writer = csv.DictWriter(handle, fieldnames=LEAD_CAPTURE_CSV_HEADERS)
            if should_write_header:
                writer.writeheader()
            writer.writerow(
                {
                    field: _serialize_csv_scalar(record.get(field, ""))
                    for field in LEAD_CAPTURE_CSV_HEADERS
                }
            )
        return {"ok": True, "path": str(csv_path)}
    except Exception as exc:
        return {"ok": False, "path": str(csv_path), "error": str(exc)}


def persist_lead_capture_record(root_dir: Path, record: Dict[str, Any]) -> Dict[str, Any]:
    jsonl_result = _persist_lead_capture_jsonl(resolve_lead_capture_log_path(root_dir), record)
    csv_result = _persist_lead_capture_csv(resolve_lead_capture_csv_path(root_dir), record)
    return {
        "ok": bool(jsonl_result.get("ok")) and bool(csv_result.get("ok")),
        "path": jsonl_result.get("path", ""),
        "error": jsonl_result.get("error", ""),
        "jsonl": jsonl_result,
        "csv": csv_result,
    }


def resolve_confirmation_email_settings() -> Dict[str, Any]:
    host = _coerce_text(
        os.environ.get("MAXWELLIAN_SMTP_HOST") or os.environ.get("SMTP_HOST")
    )
    port_raw = _coerce_text(
        os.environ.get("MAXWELLIAN_SMTP_PORT") or os.environ.get("SMTP_PORT")
    )
    use_tls = _coerce_bool(
        os.environ.get("MAXWELLIAN_SMTP_USE_TLS")
        if os.environ.get("MAXWELLIAN_SMTP_USE_TLS") is not None
        else "true"
    )
    use_ssl = _coerce_bool(
        os.environ.get("MAXWELLIAN_SMTP_USE_SSL")
        if os.environ.get("MAXWELLIAN_SMTP_USE_SSL") is not None
        else "false"
    )
    default_port = 465 if use_ssl else 587
    try:
        port = int(port_raw) if port_raw else default_port
    except ValueError:
        port = default_port
    return {
        "host": host,
        "port": port,
        "use_tls": use_tls,
        "use_ssl": use_ssl,
        "username": _coerce_text(
            os.environ.get("MAXWELLIAN_SMTP_USERNAME") or os.environ.get("SMTP_USERNAME")
        ),
        "password": _coerce_text(
            os.environ.get("MAXWELLIAN_SMTP_PASSWORD") or os.environ.get("SMTP_PASSWORD")
        ),
        "from_email": _coerce_text(
            os.environ.get("MAXWELLIAN_CONFIRMATION_FROM_EMAIL")
            or os.environ.get("SMTP_FROM_EMAIL")
        ),
        "reply_to": _coerce_text(
            os.environ.get("MAXWELLIAN_CONFIRMATION_REPLY_TO")
            or os.environ.get("SMTP_REPLY_TO")
        ),
        "subject": _coerce_text(os.environ.get("MAXWELLIAN_CONFIRMATION_EMAIL_SUBJECT"))
        or "Welcome to Maxwellian News Brief",
    }


def send_confirmation_email(record: Dict[str, Any]) -> Dict[str, Any]:
    recipient = _normalize_email(record.get("visitor_email"))
    if not recipient:
        return {
            "sent": False,
            "status": "missing-email",
            "error": "visitor_email is required to send confirmation email.",
        }
    if not _coerce_bool(record.get("confirmation_email_consent")):
        return {
            "sent": False,
            "status": "missing-consent",
            "error": "confirmation_email_consent must be true before sending email.",
        }

    settings = resolve_confirmation_email_settings()
    if not settings["host"] or not settings["from_email"]:
        return {
            "sent": False,
            "status": "smtp-not-configured",
            "error": "SMTP host/from email is not configured.",
        }

    name = _truncate_text(record.get("visitor_name"), 80) or "there"
    company = _truncate_text(record.get("visitor_company"), 120)
    newsletter_opt_in = _coerce_bool(record.get("newsletter_opt_in"))
    text_interest = _coerce_bool(record.get("text_notifications_interest"))
    lines = [
        f"Hi {name},",
        "",
        "Thanks for connecting with Unity Energy and Clerk Maxwell.",
        "This note confirms that we received your request for follow-up.",
    ]
    if company:
        lines.append(f"Company: {company}")
    lines.extend(
        [
            "",
            "Maxwellian News Brief:",
            (
                "You are marked as subscribed for weekly Maxwellian intelligence updates."
                if newsletter_opt_in
                else "You are not yet subscribed. Reply anytime if you want to join."
            ),
            (
                "Text-notification interest is noted for future rollout."
                if text_interest
                else "Text-notification preference is currently set to no."
            ),
            "",
            "If any details need correction, reply to this message and we will update your profile.",
            "",
            "— Unity Energy / Maxwellian Team",
        ]
    )

    message = EmailMessage()
    message["Subject"] = settings["subject"]
    message["From"] = settings["from_email"]
    message["To"] = recipient
    if settings["reply_to"]:
        message["Reply-To"] = settings["reply_to"]
    message.set_content("\n".join(lines))

    try:
        if settings["use_ssl"]:
            with smtplib.SMTP_SSL(
                settings["host"], settings["port"], timeout=30
            ) as smtp:
                if settings["username"] and settings["password"]:
                    smtp.login(settings["username"], settings["password"])
                smtp.send_message(message)
        else:
            with smtplib.SMTP(settings["host"], settings["port"], timeout=30) as smtp:
                smtp.ehlo()
                if settings["use_tls"]:
                    smtp.starttls()
                    smtp.ehlo()
                if settings["username"] and settings["password"]:
                    smtp.login(settings["username"], settings["password"])
                smtp.send_message(message)
        return {"sent": True, "status": "sent", "error": ""}
    except Exception as exc:
        return {"sent": False, "status": "send-failed", "error": str(exc)}


def resolve_telegram_alert_log_path(root_dir: Path) -> Path:
    configured = _coerce_text(os.environ.get("MAXWELLIAN_TELEGRAM_ALERT_LOG_PATH"))
    if configured:
        return Path(configured).expanduser().resolve()
    return (root_dir / "UnityEnergy" / "maxwellian_telegram_alerts.jsonl").resolve()


def resolve_telegram_settings() -> Dict[str, Any]:
    disabled = _coerce_bool(
        os.environ.get("OLIVER_TELEGRAM_DISABLE")
        if os.environ.get("OLIVER_TELEGRAM_DISABLE") is not None
        else os.environ.get("MAXWELLIAN_TELEGRAM_DISABLE")
    )
    bot_token = _coerce_text(
        os.environ.get("MAXWELLIAN_TELEGRAM_BOT_TOKEN")
        or os.environ.get("TELEGRAM_BOT_TOKEN")
        or os.environ.get("OLIVER_TELEGRAM_BOT_TOKEN")
    )
    chat_id = _coerce_text(
        os.environ.get("MAXWELLIAN_TELEGRAM_CHAT_ID")
        or os.environ.get("TELEGRAM_CHAT_ID")
        or os.environ.get("OLIVER_TELEGRAM_CHAT_ID")
    )
    return {
        "disabled": disabled,
        "bot_token": bot_token,
        "chat_id": chat_id,
        "configured": bool(bot_token and chat_id),
    }


def _is_qualified_lead(record: Dict[str, Any]) -> bool:
    return bool(
        _coerce_text(record.get("visitor_name"))
        and _coerce_text(record.get("visitor_company"))
        and _normalize_email(record.get("visitor_email"))
    )


def _build_qualified_lead_key(record: Dict[str, Any]) -> str:
    name = _coerce_text(record.get("visitor_name")).lower()
    company = _coerce_text(record.get("visitor_company")).lower()
    email = _normalize_email(record.get("visitor_email")).lower()
    if not name or not company or not email:
        return ""
    return f"{name}|{company}|{email}"


def _load_existing_telegram_alert_keys(log_path: Path) -> set[str]:
    keys: set[str] = set()
    if not log_path.is_file():
        return keys
    try:
        with log_path.open("r", encoding="utf-8") as handle:
            for line in handle:
                row = _coerce_text(line)
                if not row:
                    continue
                try:
                    payload = json.loads(row)
                except Exception:
                    continue
                key = _coerce_text(payload.get("qualified_lead_key"))
                if key:
                    keys.add(key)
    except Exception:
        return keys
    return keys


def _persist_telegram_alert_record(log_path: Path, alert_record: Dict[str, Any]) -> Dict[str, Any]:
    try:
        log_path.parent.mkdir(parents=True, exist_ok=True)
        with log_path.open("a", encoding="utf-8") as handle:
            handle.write(json.dumps(alert_record, ensure_ascii=False))
            handle.write("\n")
        return {"ok": True, "path": str(log_path), "error": ""}
    except Exception as exc:
        return {"ok": False, "path": str(log_path), "error": str(exc)}


def send_qualified_lead_telegram_alert(root_dir: Path, record: Dict[str, Any]) -> Dict[str, Any]:
    qualified = _is_qualified_lead(record)
    settings = resolve_telegram_settings()
    base_result = {
        "sent": False,
        "status": "not-qualified",
        "error": "",
        "qualified": qualified,
        "deduped": False,
        "configured": bool(settings.get("configured")),
        "disabled": bool(settings.get("disabled")),
    }
    if not qualified:
        return base_result
    if settings.get("disabled"):
        base_result["status"] = "disabled"
        return base_result
    if not settings.get("configured"):
        base_result["status"] = "not-configured"
        base_result["error"] = "Telegram bot token/chat ID is not configured."
        return base_result

    qualified_key = _build_qualified_lead_key(record)
    if not qualified_key:
        return base_result
    alert_log_path = resolve_telegram_alert_log_path(root_dir)
    existing_keys = _load_existing_telegram_alert_keys(alert_log_path)
    if qualified_key in existing_keys:
        base_result["status"] = "duplicate"
        base_result["deduped"] = True
        return base_result

    message_lines = [
        "Unity Energy qualified lead captured",
        f"Name: {_coerce_text(record.get('visitor_name'))}",
        f"Company: {_coerce_text(record.get('visitor_company'))}",
        f"Email: {_normalize_email(record.get('visitor_email'))}",
    ]
    if _coerce_text(record.get("visitor_intent")):
        message_lines.append(f"Intent: {_coerce_text(record.get('visitor_intent'))}")
    if _coerce_text(record.get("source_page")):
        message_lines.append(f"Page: {_coerce_text(record.get('source_page'))}")
    if _coerce_text(record.get("entry_point")):
        message_lines.append(f"Entry: {_coerce_text(record.get('entry_point'))}")
    if _coerce_text(record.get("guardrail_session_token")):
        message_lines.append(
            f"Session: {_coerce_text(record.get('guardrail_session_token'))}"
        )
    message_lines.append(f"Received: {_coerce_text(record.get('received_at')) or _utc_now_iso()}")
    telegram_body = {
        "chat_id": settings.get("chat_id"),
        "text": "\n".join(message_lines),
        "disable_web_page_preview": True,
    }
    request_obj = urllib_request.Request(
        f"https://api.telegram.org/bot{settings.get('bot_token')}/sendMessage",
        data=json.dumps(telegram_body).encode("utf-8"),
        headers={"Content-Type": "application/json"},
        method="POST",
    )
    try:
        with urllib_request.urlopen(request_obj, timeout=20) as response:
            response_payload: Dict[str, Any] = {}
            try:
                response_payload = json.loads((response.read() or b"{}").decode("utf-8"))
            except Exception:
                response_payload = {}
            if not bool(response_payload.get("ok")):
                error_text = _coerce_text(
                    response_payload.get("description") or "Telegram API returned not-ok response."
                )
                return {
                    **base_result,
                    "status": "send-failed",
                    "error": error_text,
                }
    except urllib_error.HTTPError as exc:
        body = exc.read() or b"{}"
        error_text = ""
        try:
            parsed = json.loads(body.decode("utf-8"))
            error_text = _coerce_text(parsed.get("description"))
        except Exception:
            error_text = ""
        return {
            **base_result,
            "status": "send-failed",
            "error": error_text or f"HTTP {exc.code} while sending Telegram alert.",
        }
    except Exception as exc:
        return {
            **base_result,
            "status": "send-failed",
            "error": str(exc),
        }

    persist_result = _persist_telegram_alert_record(
        alert_log_path,
        {
            "sent_at": _utc_now_iso(),
            "qualified_lead_key": qualified_key,
            "visitor_name": _coerce_text(record.get("visitor_name")),
            "visitor_company": _coerce_text(record.get("visitor_company")),
            "visitor_email": _normalize_email(record.get("visitor_email")),
            "source_page": _coerce_text(record.get("source_page")),
            "entry_point": _coerce_text(record.get("entry_point")),
            "guardrail_session_token": _coerce_text(record.get("guardrail_session_token")),
        },
    )
    if not persist_result.get("ok"):
        return {
            **base_result,
            "sent": True,
            "status": "sent-log-failed",
            "error": _coerce_text(persist_result.get("error")),
        }
    return {
        **base_result,
        "sent": True,
        "status": "sent",
        "error": "",
    }


class RealtimeHandler(SimpleHTTPRequestHandler):
    root_dir = Path("/")

    def end_headers(self) -> None:
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header(
            "Access-Control-Allow-Headers",
            "Content-Type, Authorization, X-Maxwellian-Export-Token",
        )
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        super().end_headers()

    def translate_path(self, path: str) -> str:
        translated = super().translate_path(path)
        translated_path = Path(translated)
        # Replace cwd base with configured root to keep static serving scoped.
        try:
            relative = translated_path.relative_to(Path.cwd())
        except ValueError:
            return str(self.root_dir)
        return str(self.root_dir / relative)

    def do_OPTIONS(self) -> None:
        self.send_response(HTTPStatus.NO_CONTENT)
        self.end_headers()

    def _send_json(self, status: int, payload: Dict[str, Any]) -> None:
        encoded = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(encoded)))
        self.end_headers()
        self.wfile.write(encoded)

    def _read_json_body(self) -> Dict[str, Any]:
        length = int(self.headers.get("Content-Length", "0") or "0")
        if length <= 0:
            return {}
        raw = self.rfile.read(length)
        if not raw:
            return {}
        try:
            decoded = json.loads(raw.decode("utf-8"))
        except Exception:
            return {}
        return decoded if isinstance(decoded, dict) else {}
    def _send_file_download(self, file_path: Path, content_type: str, download_name: str) -> None:
        try:
            payload = file_path.read_bytes()
        except Exception as exc:
            self._send_json(
                HTTPStatus.INTERNAL_SERVER_ERROR,
                {
                    "ok": False,
                    "error": {
                        "message": f"Unable to read export file: {exc}",
                    },
                },
            )
            return
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(payload)))
        self.send_header(
            "Content-Disposition", f'attachment; filename="{download_name}"'
        )
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(payload)

    def do_GET(self) -> None:
        parsed_request = urllib_parse.urlsplit(self.path)
        path = parsed_request.path.rstrip("/") or "/"
        query_params = urllib_parse.parse_qs(parsed_request.query)

        if path == HUME_RUNTIME_AUTH_ENDPOINT:
            runtime_auth = resolve_hume_runtime_auth(self.root_dir)
            self._send_json(
                HTTPStatus.OK,
                {
                    "ok": bool(runtime_auth.get("value")),
                    "auth": runtime_auth,
                },
            )
            return
        if path == LEAD_CAPTURE_ENDPOINT:
            smtp_settings = resolve_confirmation_email_settings()
            telegram_settings = resolve_telegram_settings()
            self._send_json(
                HTTPStatus.OK,
                {
                    "ok": True,
                    "lead_capture_endpoint": LEAD_CAPTURE_ENDPOINT,
                    "lead_capture_storage": build_lead_capture_storage_status(
                        self.root_dir
                    ),
                    "smtp_configured": bool(
                        smtp_settings.get("host") and smtp_settings.get("from_email")
                    ),
                    "telegram_configured": bool(telegram_settings.get("configured")),
                    "telegram_disabled": bool(telegram_settings.get("disabled")),
                    "lead_export_status_endpoint": LEAD_EXPORT_STATUS_ENDPOINT,
                    "lead_export_endpoint": LEAD_EXPORT_ENDPOINT,
                    "builder_lead_export_status_endpoint": BUILDER_LEAD_EXPORT_STATUS_ENDPOINT,
                    "builder_lead_export_endpoint": BUILDER_LEAD_EXPORT_ENDPOINT,
                    "lead_export_token_configured": bool(resolve_lead_export_token()),
                },
            )
            return
        if path in {LEAD_EXPORT_STATUS_ENDPOINT, BUILDER_LEAD_EXPORT_STATUS_ENDPOINT}:
            self._send_json(
                HTTPStatus.OK,
                {
                    "ok": True,
                    "lead_capture_storage": build_lead_capture_storage_status(
                        self.root_dir
                    ),
                    "lead_export_endpoint": LEAD_EXPORT_ENDPOINT,
                    "builder_lead_export_endpoint": BUILDER_LEAD_EXPORT_ENDPOINT,
                    "lead_export_token_configured": bool(resolve_lead_export_token()),
                },
            )
            return
        if path in {LEAD_EXPORT_ENDPOINT, BUILDER_LEAD_EXPORT_ENDPOINT}:
            expected_token = resolve_lead_export_token()
            if not expected_token:
                self._send_json(
                    HTTPStatus.SERVICE_UNAVAILABLE,
                    {
                        "ok": False,
                        "error": {
                            "message": "Lead export token is not configured.",
                        },
                    },
                )
                return
            provided_token = _extract_export_token(self.headers)
            if not provided_token or not hmac.compare_digest(
                provided_token, expected_token
            ):
                self._send_json(
                    HTTPStatus.UNAUTHORIZED,
                    {
                        "ok": False,
                        "error": {
                            "message": "Unauthorized lead export request.",
                        },
                    },
                )
                return
            export_format = resolve_lead_export_format(query_params)
            export_path = (
                resolve_lead_capture_csv_path(self.root_dir)
                if export_format == "csv"
                else resolve_lead_capture_log_path(self.root_dir)
            )
            if not export_path.exists() or not export_path.is_file():
                self._send_json(
                    HTTPStatus.NOT_FOUND,
                    {
                        "ok": False,
                        "error": {
                            "message": f"No {export_format.upper()} lead file exists yet.",
                        },
                    },
                )
                return
            timestamp = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
            download_name = f"maxwellian_leads_{timestamp}.{export_format}"
            content_type = (
                "text/csv; charset=utf-8"
                if export_format == "csv"
                else "application/x-ndjson; charset=utf-8"
            )
            self._send_file_download(export_path, content_type, download_name)
            return
        if path == "/api/openai/realtime/health":
            api_key_present = bool(resolve_openai_api_key(self.root_dir))
            hume_auth_present = bool(resolve_hume_runtime_auth(self.root_dir).get("value"))
            smtp_settings = resolve_confirmation_email_settings()
            telegram_settings = resolve_telegram_settings()
            self._send_json(
                HTTPStatus.OK,
                {
                    "ok": True,
                    "api_key_loaded": api_key_present,
                    "hume_runtime_auth_loaded": hume_auth_present,
                    "session_endpoint": "/api/openai/realtime/session",
                    "hume_runtime_auth_endpoint": HUME_RUNTIME_AUTH_ENDPOINT,
                    "lead_capture_endpoint": LEAD_CAPTURE_ENDPOINT,
                    "lead_confirmation_email_configured": bool(
                        smtp_settings.get("host") and smtp_settings.get("from_email")
                    ),
                    "lead_telegram_configured": bool(telegram_settings.get("configured")),
                    "lead_telegram_disabled": bool(telegram_settings.get("disabled")),
                    "lead_export_status_endpoint": LEAD_EXPORT_STATUS_ENDPOINT,
                    "lead_export_endpoint": LEAD_EXPORT_ENDPOINT,
                    "builder_lead_export_status_endpoint": BUILDER_LEAD_EXPORT_STATUS_ENDPOINT,
                    "builder_lead_export_endpoint": BUILDER_LEAD_EXPORT_ENDPOINT,
                    "lead_export_token_configured": bool(resolve_lead_export_token()),
                },
            )
            return
        super().do_GET()

    def do_POST(self) -> None:
        parsed_request = urllib_parse.urlsplit(self.path)
        path = parsed_request.path.rstrip("/") or "/"
        if path == LEAD_CAPTURE_ENDPOINT:
            raw_payload = self._read_json_body()
            record = build_lead_capture_record(
                raw_payload, user_agent=self.headers.get("User-Agent", "")
            )

            persistence = persist_lead_capture_record(self.root_dir, record)
            should_send_confirmation_email = bool(
                record.get("visitor_email")
                and _coerce_bool(record.get("confirmation_email_consent"))
            )
            email_result = (
                send_confirmation_email(record)
                if should_send_confirmation_email
                else {"sent": False, "status": "not-requested", "error": ""}
            )
            telegram_result = send_qualified_lead_telegram_alert(self.root_dir, record)
            self._send_json(
                HTTPStatus.OK,
                {
                    "ok": True,
                    "stored": bool(persistence.get("ok")),
                    "storage_error": persistence.get("error", ""),
                    "jsonl_stored": bool(persistence.get("jsonl", {}).get("ok")),
                    "jsonl_storage_error": persistence.get("jsonl", {}).get("error", ""),
                    "csv_stored": bool(persistence.get("csv", {}).get("ok")),
                    "csv_storage_error": persistence.get("csv", {}).get("error", ""),
                    "lead_capture_storage": build_lead_capture_storage_status(
                        self.root_dir
                    ),
                    "confirmation_email_sent": bool(email_result.get("sent")),
                    "confirmation_email_status": email_result.get("status", ""),
                    "confirmation_email_error": email_result.get("error", ""),
                    "visitor_intent": record.get("visitor_intent", ""),
                    "likely_user_intent": record.get("likely_user_intent", ""),
                    "newsletter_opt_in": record.get("newsletter_opt_in", False),
                    "text_notifications_interest": record.get(
                        "text_notifications_interest", False
                    ),
                    "sales_outreach_consent": record.get(
                        "sales_outreach_consent", False
                    ),
                    "qualified_lead": bool(telegram_result.get("qualified")),
                    "telegram_alert_sent": bool(telegram_result.get("sent")),
                    "telegram_alert_status": telegram_result.get("status", ""),
                    "telegram_alert_error": telegram_result.get("error", ""),
                    "telegram_alert_deduped": bool(telegram_result.get("deduped")),
                    "telegram_configured": bool(telegram_result.get("configured")),
                    "telegram_disabled": bool(telegram_result.get("disabled")),
                },
            )
            return

        if path != "/api/openai/realtime/session":
            self._send_json(HTTPStatus.NOT_FOUND, {"error": {"message": "Unknown endpoint."}})
            return

        api_key = resolve_openai_api_key(self.root_dir)
        if not api_key:
            self._send_json(
                HTTPStatus.INTERNAL_SERVER_ERROR,
                {
                    "error": {
                        "message": "OPENAI_API_KEY is not set. Add it to your environment or .env file."
                    }
                },
            )
            return

        request_payload = build_session_payload(self._read_json_body())
        upstream_body = json.dumps(request_payload).encode("utf-8")
        upstream_request = urllib_request.Request(
            "https://api.openai.com/v1/realtime/sessions",
            data=upstream_body,
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
            },
            method="POST",
        )

        try:
            with urllib_request.urlopen(upstream_request, timeout=30) as response:
                status_code = response.getcode()
                response_body = response.read()
                content_type = response.headers.get("Content-Type", "application/json")
                self.send_response(status_code)
                self.send_header("Content-Type", content_type)
                self.send_header("Content-Length", str(len(response_body)))
                self.end_headers()
                self.wfile.write(response_body)
        except urllib_error.HTTPError as exc:
            body = exc.read() or b"{}"
            self.send_response(exc.code)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self.end_headers()
            self.wfile.write(body)
        except Exception as exc:
            self._send_json(
                HTTPStatus.BAD_GATEWAY,
                {"error": {"message": f"Failed to create realtime session: {exc}"}},
            )


def main() -> None:
    default_root = Path(__file__).resolve().parents[1]
    parser = argparse.ArgumentParser(
        description="Serve eWebmaster static files with an OpenAI realtime session endpoint."
    )
    parser.add_argument("--host", default="127.0.0.1", help="Host interface to bind.")
    parser.add_argument("--port", type=int, default=8600, help="Port to serve on.")
    parser.add_argument(
        "--root",
        default=str(default_root),
        help="Static web root to serve (default: eWebmaster directory).",
    )
    args = parser.parse_args()

    root_dir = Path(args.root).expanduser().resolve()
    if not root_dir.is_dir():
        raise SystemExit(f"Root directory does not exist: {root_dir}")

    RealtimeHandler.root_dir = root_dir
    resolve_openai_api_key(root_dir)
    ensure_lead_capture_storage_paths(root_dir)
    server = ThreadingHTTPServer((args.host, args.port), RealtimeHandler)
    print(f"Serving {root_dir} on http://{args.host}:{args.port}")
    print("Realtime session endpoint: /api/openai/realtime/session")
    print(f"Hume runtime auth endpoint: {HUME_RUNTIME_AUTH_ENDPOINT}")
    print(f"Lead capture endpoint: {LEAD_CAPTURE_ENDPOINT}")
    print(f"Lead export status endpoint: {LEAD_EXPORT_STATUS_ENDPOINT}")
    print(f"Lead export endpoint (token required): {LEAD_EXPORT_ENDPOINT}")
    print(f"Builder lead status endpoint: {BUILDER_LEAD_EXPORT_STATUS_ENDPOINT}")
    print(f"Builder lead export endpoint (token required): {BUILDER_LEAD_EXPORT_ENDPOINT}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
