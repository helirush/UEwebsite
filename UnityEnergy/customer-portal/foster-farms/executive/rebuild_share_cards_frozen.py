#!/usr/bin/env python3
import os
import re
import shutil
from datetime import datetime
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

BASE_DIR = Path(__file__).resolve().parent
ASSETS_DIR = BASE_DIR.parents[2] / "assets" / "images"
BASE_CARD_DIR = ASSETS_DIR / "share-card-bases"
STAMP_REGEX = re.compile(r"^UE\.\d{2}\.\d{4}$")

CARD_OUTPUTS = {
    "update": "ue-update-logo-preview.jpg",
    "brief": "ue-brief-logo-preview.jpg",
    "memo": "ue-memo-logo-preview.jpg",
    "monthly": "ue-monthly-logo-preview.jpg",
    "maxwellian": "ue-maxwellian-logo-preview.jpg",
    "private": "ue-private-logo-preview.jpg",
    "alert": "ue-alert-logo-preview.jpg",
}
REPORT_ALIAS_TARGET = "ue-report-logo-preview.jpg"
REPORT_ALIAS_SOURCE = "memo"

SHARE_META_TARGETS = [
    ("share/update.html", "update", "ue-update-logo-preview.jpg"),
    ("share/brief.html", "brief", "ue-brief-logo-preview.jpg"),
    ("share/memo.html", "memo", "ue-memo-logo-preview.jpg"),
    ("share/report.html", "report", "ue-report-logo-preview.jpg"),
    ("share/monthly.html", "monthly", "ue-monthly-logo-preview.jpg"),
    ("share/maxwellian.html", "maxwellian", "ue-maxwellian-logo-preview.jpg"),
    ("share/private.html", "private", "ue-private-logo-preview.jpg"),
    ("share/alert.html", "alert", "ue-alert-logo-preview.jpg"),
]

PROOF_CARD_DEFS = [
    ("Update", "ue-update-logo-preview.jpg"),
    ("Brief", "ue-brief-logo-preview.jpg"),
    ("Memo", "ue-memo-logo-preview.jpg"),
    ("Monthly", "ue-monthly-logo-preview.jpg"),
    ("Maxwellian", "ue-maxwellian-logo-preview.jpg"),
    ("Private", "ue-private-logo-preview.jpg"),
    ("Alert", "ue-alert-logo-preview.jpg"),
]

DATE_FONT_SIZE = 30
DATE_RIGHT_MARGIN = 28
DATE_TOP_MARGIN = 22
DATE_TEXT_COLOR = (94, 114, 45)
DATE_STROKE_WIDTH = 0
DATE_STROKE_COLOR = None

DATE_FONT_CANDIDATES = [
    "/Library/Fonts/Calibri Bold.ttf",
    "/Library/Fonts/Calibri.ttf",
    "/Library/Fonts/Calibre-Regular.otf",
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/System/Library/Fonts/Supplemental/Helvetica.ttc",
]


def pick_date_font(size: int):
    for path in DATE_FONT_CANDIDATES:
        try:
            return ImageFont.truetype(path, size)
        except Exception:
            continue
    return ImageFont.load_default()


def resolve_stamp() -> str:
    env_stamp = os.environ.get("UE_DOC_STAMP", "").strip().upper()
    if env_stamp:
        if not STAMP_REGEX.match(env_stamp):
            raise ValueError(
                f"UE_DOC_STAMP must match UE.YY.MMDD (received: {env_stamp})"
            )
        return env_stamp
    now = datetime.now()
    return f"UE.{now:%y.%m%d}"


def resolve_base_card_path(kind: str) -> Path:
    for ext in (".png", ".jpg", ".jpeg", ".webp"):
        path = BASE_CARD_DIR / f"{kind}{ext}"
        if path.exists():
            return path
    raise FileNotFoundError(
        f"Missing base share card for '{kind}' in {BASE_CARD_DIR}. "
        f"Expected one of: {kind}.png/.jpg/.jpeg/.webp"
    )


def rebuild_cards_from_bases():
    for kind, output_name in CARD_OUTPUTS.items():
        source_path = resolve_base_card_path(kind)
        output_path = BASE_DIR / output_name
        with Image.open(source_path).convert("RGBA") as source_img:
            source_img.convert("RGB").save(output_path, quality=95)

    shutil.copy2(
        BASE_DIR / CARD_OUTPUTS[REPORT_ALIAS_SOURCE],
        BASE_DIR / REPORT_ALIAS_TARGET,
    )


def paint_date_stamp(card_path: Path, stamp: str):
    img = Image.open(card_path).convert("RGBA")
    draw = ImageDraw.Draw(img, "RGBA")
    font = pick_date_font(DATE_FONT_SIZE)

    bbox = draw.textbbox((0, 0), stamp, font=font)
    text_w = bbox[2] - bbox[0]
    tx = max(0, img.width - DATE_RIGHT_MARGIN - text_w)
    ty = DATE_TOP_MARGIN

    draw.text(
        (tx, ty),
        stamp,
        fill=DATE_TEXT_COLOR,
        font=font,
        stroke_width=DATE_STROKE_WIDTH,
        stroke_fill=DATE_STROKE_COLOR,
    )
    img.convert("RGB").save(card_path, quality=95)


def repaint_date_stamp_on_all(stamp: str):
    targets = list(CARD_OUTPUTS.values()) + [REPORT_ALIAS_TARGET]
    for filename in targets:
        paint_date_stamp(BASE_DIR / filename, stamp)


def refresh_share_endpoint_meta(stamp: str):
    base_url = "https://unityenergy.com/UnityEnergy/customer-portal/foster-farms/executive/"
    for rel_path, share_key, image_name in SHARE_META_TARGETS:
        html_path = BASE_DIR / rel_path
        text = html_path.read_text(encoding="utf-8")

        og_url_pattern = (
            r'(<meta property="og:url" content="'
            + re.escape(base_url + f"share/{share_key}.html")
            + r')(?:\?ue_doc=UE\.\d{2}\.\d{4})?(" />)'
        )
        text = re.sub(
            og_url_pattern,
            lambda m: f'{m.group(1)}?ue_doc={stamp}{m.group(2)}',
            text,
        )

        for prop in ("og:image", "twitter:image"):
            img_pattern = (
                r'(<meta property="'
                + re.escape(prop)
                + r'" content="'
                + re.escape(base_url + image_name)
                + r')(?:\?ue_doc=UE\.\d{2}\.\d{4})?(" />)'
            )
            text = re.sub(
                img_pattern,
                lambda m: f'{m.group(1)}?ue_doc={stamp}{m.group(2)}',
                text,
            )

        html_path.write_text(text, encoding="utf-8")


def build_proof_sheet():
    sample_path = BASE_DIR / PROOF_CARD_DEFS[0][1]
    with Image.open(sample_path).convert("RGB") as sample:
        sample_w, sample_h = sample.size
    thumb_w = 600
    thumb_h = int(round(thumb_w * (sample_h / sample_w)))
    cols = 2
    rows = (len(PROOF_CARD_DEFS) + cols - 1) // cols
    pad = 24
    label_h = 42
    bg = (243, 241, 236)
    fg = (42, 48, 38)

    sheet_w = cols * thumb_w + (cols + 1) * pad
    sheet_h = rows * (thumb_h + label_h) + (rows + 1) * pad
    sheet = Image.new("RGB", (sheet_w, sheet_h), bg)
    draw = ImageDraw.Draw(sheet)
    try:
        font = ImageFont.truetype("/System/Library/Fonts/Supplemental/Arial Bold.ttf", 24)
    except Exception:
        font = ImageFont.load_default()

    for i, (label, filename) in enumerate(PROOF_CARD_DEFS):
        img = Image.open(BASE_DIR / filename).convert("RGB")
        r = i // cols
        c = i % cols
        x = pad + c * (thumb_w + pad)
        y = pad + r * (thumb_h + label_h + pad)
        sheet.paste(img.resize((thumb_w, thumb_h), Image.Resampling.LANCZOS), (x, y))
        draw.text((x, y + thumb_h + 7), label, fill=fg, font=font)

    proof_path = BASE_DIR / "executive-share-card-proof.jpg"
    sheet.save(proof_path, quality=95)
    return proof_path


def main():
    stamp = resolve_stamp()
    rebuild_cards_from_bases()
    repaint_date_stamp_on_all(stamp)
    refresh_share_endpoint_meta(stamp)
    proof = build_proof_sheet()
    print("Share card base profile applied.")
    print("DATE_STAMP:", stamp)
    print("BASE_CARD_DIR:", BASE_CARD_DIR)
    print("Proof sheet:", proof)


if __name__ == "__main__":
    main()