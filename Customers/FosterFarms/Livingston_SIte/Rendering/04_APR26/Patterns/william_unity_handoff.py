#!/usr/bin/env python3
"""
william_unity_handoff.py

Purpose:
- Run from a pattern directory after manual screenshot capture is complete.
- Validate captured pattern images and write a readiness packet.
- Initialize William/Unity processing by launching eeWILLIAM with a selected mode.
"""

from __future__ import annotations

import argparse
import json
import re
import subprocess
import sys
from datetime import datetime, timezone
from pathlib import Path


IMAGE_EXTENSIONS = {'.png', '.jpg', '.jpeg', '.webp', '.heic'}
PATTERN_MATCHER = re.compile(r'^(?P<prefix>[a-z0-9]+?)(?P<ptype>bt|b|s|v|m)\d*(?:_|$)', re.IGNORECASE)
BASELINE_PATTERN_TYPES = {'bt', 'b'}


def _utc_now_iso() -> str:
    return datetime.now(timezone.utc).isoformat()


def discover_pattern_inventory(pattern_dir: Path) -> dict:
    """
    Scan a pattern directory and summarize image coverage by transformer prefix.
    """
    coverage_by_prefix: dict[str, set[str]] = {}
    files_by_prefix: dict[str, list[str]] = {}
    unmatched_files: list[str] = []
    all_images: list[str] = []

    for entry in sorted(pattern_dir.iterdir()):
        if not entry.is_file() or entry.suffix.lower() not in IMAGE_EXTENSIONS:
            continue

        all_images.append(entry.name)
        match = PATTERN_MATCHER.match(entry.stem.lower())
        if not match:
            unmatched_files.append(entry.name)
            continue

        prefix = match.group('prefix').upper()
        pattern_type = match.group('ptype').lower()
        coverage_by_prefix.setdefault(prefix, set()).add(pattern_type)
        files_by_prefix.setdefault(prefix, []).append(entry.name)

    coverage_serializable = {
        prefix: sorted(list(pattern_types))
        for prefix, pattern_types in sorted(coverage_by_prefix.items(), key=lambda item: item[0])
    }
    files_serializable = {
        prefix: sorted(file_list)
        for prefix, file_list in sorted(files_by_prefix.items(), key=lambda item: item[0])
    }
    baseline_ready_prefixes = sorted([
        prefix for prefix, pattern_types in coverage_by_prefix.items()
        if pattern_types.intersection(BASELINE_PATTERN_TYPES)
    ])

    return {
        'image_count': len(all_images),
        'all_images': all_images,
        'transformer_count': len(coverage_by_prefix),
        'coverage_by_transformer': coverage_serializable,
        'files_by_transformer': files_serializable,
        'baseline_ready_transformers': baseline_ready_prefixes,
        'unmatched_files': sorted(unmatched_files),
    }


def build_william_command(pattern_dir: Path, mode: str, force: bool, no_review: bool, use_mercury: bool) -> list[str]:
    william_script = Path(__file__).resolve().with_name('eeWILLIAM.py')
    command = [sys.executable, str(william_script), str(pattern_dir)]

    if mode == 'scripts-only':
        command.append('--scripts-only')
    elif mode == 'render-only':
        command.append('--render-only')

    if force:
        command.append('--force')
    if use_mercury:
        command.append('--use-mercury')
    if mode == 'full' and no_review:
        command.append('--no-review')

    return command


def write_handoff_packet(packet_path: Path, payload: dict) -> None:
    packet_path.write_text(json.dumps(payload, indent=2), encoding='utf-8')


def run_handoff(
    pattern_dir: Path,
    mode: str,
    force: bool,
    no_review: bool,
    use_mercury: bool,
    packet_name: str,
) -> int:
    inventory = discover_pattern_inventory(pattern_dir)
    baseline_ready = bool(inventory.get('baseline_ready_transformers'))
    has_images = inventory.get('image_count', 0) > 0
    ready_for_william = has_images and baseline_ready

    packet_path = pattern_dir / packet_name
    payload = {
        'generated_at_utc': _utc_now_iso(),
        'status': 'ready' if ready_for_william else 'blocked',
        'pattern_dir': str(pattern_dir),
        'mode': mode,
        'inventory': inventory,
        'notes': {
            'baseline_required': "At least one baseline-style image per transformer (bt/b) is required for William analysis.",
            'program': str(Path(__file__).resolve()),
        },
    }

    if mode != 'notify-only' and not ready_for_william:
        payload['error'] = (
            "Pattern directory is not ready for William. "
            "Capture baseline pattern images (bt/b naming) and retry."
        )
        write_handoff_packet(packet_path, payload)
        print(f"❌ {payload['error']}")
        print(f"📄 Handoff packet written: {packet_path}")
        return 1

    command = []
    return_code = 0
    if mode != 'notify-only':
        william_script = Path(__file__).resolve().with_name('eeWILLIAM.py')
        if not william_script.exists():
            payload['status'] = 'blocked'
            payload['error'] = f"eeWILLIAM.py not found: {william_script}"
            write_handoff_packet(packet_path, payload)
            print(f"❌ {payload['error']}")
            print(f"📄 Handoff packet written: {packet_path}")
            return 1

        command = build_william_command(
            pattern_dir=pattern_dir,
            mode=mode,
            force=force,
            no_review=no_review,
            use_mercury=use_mercury,
        )
        print("🚀 Starting William/Unity handoff...")
        print(" ".join(command))
        return_code = subprocess.run(command).returncode

    payload['william_command'] = command
    payload['william_exit_code'] = return_code
    payload['completed_at_utc'] = _utc_now_iso()
    payload['status'] = 'completed' if return_code == 0 else 'failed'
    write_handoff_packet(packet_path, payload)

    if return_code == 0:
        print(f"✅ William/Unity handoff complete. Packet: {packet_path}")
    else:
        print(f"❌ William/Unity handoff failed (exit {return_code}). Packet: {packet_path}")
    return return_code


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Initialize William/Unity processing from a pattern directory.",
    )
    parser.add_argument(
        '--pattern-dir',
        default='.',
        help="Pattern directory containing captured screenshots (default: current directory).",
    )
    parser.add_argument(
        '--mode',
        choices=['notify-only', 'scripts-only', 'full', 'render-only'],
        default='scripts-only',
        help="Handoff mode: notify-only writes readiness packet; others launch eeWILLIAM.",
    )
    parser.add_argument('--force', action='store_true', help="Pass --force to eeWILLIAM.")
    parser.add_argument(
        '--no-review',
        action='store_true',
        help="Pass --no-review to eeWILLIAM when mode=full.",
    )
    parser.add_argument(
        '--use-mercury',
        action='store_true',
        help="Pass --use-mercury to eeWILLIAM for Step 1 data memo.",
    )
    parser.add_argument(
        '--packet-name',
        default='WILLIAM_UNITY_READY.json',
        help="Filename for the readiness/status packet written into the pattern directory.",
    )
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    pattern_dir = Path(args.pattern_dir).expanduser().resolve()

    if not pattern_dir.exists() or not pattern_dir.is_dir():
        print(f"❌ Pattern directory not found: {pattern_dir}")
        return 1

    return run_handoff(
        pattern_dir=pattern_dir,
        mode=args.mode,
        force=args.force,
        no_review=args.no_review,
        use_mercury=args.use_mercury,
        packet_name=args.packet_name,
    )


if __name__ == '__main__':
    raise SystemExit(main())
