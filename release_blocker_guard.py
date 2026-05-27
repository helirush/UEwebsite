#!/usr/bin/env python3
"""Pre-release guard for website pushes.

Checks release-candidate changes (ahead-of-remote commits + working-tree changes)
for common push blockers:
1) Oversized files that can fail GitHub push limits
2) Changed narration TXT files without a same-name MP3 in the repo
"""

from __future__ import annotations

import argparse
import subprocess
import sys
from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class CandidateFile:
    relpath: str
    abspath: Path


def run_git(repo: Path, *args: str) -> str:
    result = subprocess.run(
        ["git", "-C", str(repo), *args],
        check=False,
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise RuntimeError(
            f"git {' '.join(args)} failed:\nstdout:\n{result.stdout}\nstderr:\n{result.stderr}"
        )
    return result.stdout


def parse_status_paths(porcelain: str) -> set[str]:
    paths: set[str] = set()
    for raw in porcelain.splitlines():
        if not raw.strip():
            continue
        # porcelain format: XY<space>PATH (or XY<space>OLD -> NEW)
        payload = raw[3:]
        if " -> " in payload:
            payload = payload.split(" -> ", 1)[1]
        if payload:
            paths.add(payload)
    return paths


def collect_release_candidate_files(repo: Path, base_ref: str) -> list[CandidateFile]:
    candidate_paths: set[str] = set()

    ahead = run_git(
        repo,
        "--no-pager",
        "diff",
        "--name-only",
        "--diff-filter=ACMRTUXB",
        f"{base_ref}..HEAD",
    )
    candidate_paths.update(p.strip() for p in ahead.splitlines() if p.strip())

    status = run_git(repo, "--no-pager", "status", "--porcelain")
    candidate_paths.update(parse_status_paths(status))

    files: list[CandidateFile] = []
    for relpath in sorted(candidate_paths):
        abspath = repo / relpath
        if abspath.exists() and abspath.is_file():
            files.append(CandidateFile(relpath=relpath, abspath=abspath))
    return files


def build_mp3_index(repo: Path) -> dict[str, list[Path]]:
    index: dict[str, list[Path]] = {}
    for path in repo.rglob("*.mp3"):
        index.setdefault(path.name.lower(), []).append(path)
    return index


def requires_mp3_pair(relpath: str) -> bool:
    lower = relpath.lower()
    return lower.endswith(".txt") and (
        "/patterns/" in lower
        or "/audiotxt/" in lower
        or lower.endswith("site_overview.txt")
    )


def bytes_to_mib(size_bytes: int) -> float:
    return size_bytes / (1024 * 1024)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Flag release blockers before pushing website updates."
    )
    parser.add_argument(
        "--repo",
        default="/Users/mdhowell/uewebsite",
        help="Path to the website git repository to audit.",
    )
    parser.add_argument(
        "--base-ref",
        default="origin/main",
        help="Base ref used to detect committed changes ahead of remote.",
    )
    parser.add_argument(
        "--warn-mb",
        type=float,
        default=90.0,
        help="Warn when file size is greater than this threshold in MiB.",
    )
    parser.add_argument(
        "--block-mb",
        type=float,
        default=100.0,
        help="Block when file size is greater than this threshold in MiB.",
    )
    args = parser.parse_args()

    repo = Path(args.repo).resolve()
    if not repo.exists():
        print(f"ERROR: repo path does not exist: {repo}")
        return 2

    try:
        candidates = collect_release_candidate_files(repo, args.base_ref)
    except RuntimeError as exc:
        print(f"ERROR: {exc}")
        return 2

    warn_bytes = int(args.warn_mb * 1024 * 1024)
    block_bytes = int(args.block_mb * 1024 * 1024)

    size_blockers: list[tuple[str, int]] = []
    size_warnings: list[tuple[str, int]] = []
    for file in candidates:
        size = file.abspath.stat().st_size
        if size > block_bytes:
            size_blockers.append((file.relpath, size))
        elif size > warn_bytes:
            size_warnings.append((file.relpath, size))

    mp3_index = build_mp3_index(repo)
    missing_pairs: list[tuple[str, str]] = []
    for file in candidates:
        if not requires_mp3_pair(file.relpath):
            continue
        expected_name = file.abspath.with_suffix(".mp3").name.lower()
        if expected_name not in mp3_index:
            missing_pairs.append((file.relpath, expected_name))

    print("=== Release Blocker Guard ===")
    print(f"Repo: {repo}")
    print(f"Base ref: {args.base_ref}")
    print(f"Release-candidate files scanned: {len(candidates)}")
    print(
        f"Size thresholds: warn>{args.warn_mb:.1f} MiB | block>{args.block_mb:.1f} MiB"
    )

    if size_blockers:
        print("\nBLOCKERS: files exceeding block threshold")
        for relpath, size in sorted(size_blockers, key=lambda x: x[1], reverse=True):
            print(f"- {relpath} ({bytes_to_mib(size):.2f} MiB)")

    if missing_pairs:
        print("\nBLOCKERS: changed TXT files missing same-name MP3")
        for relpath, expected in missing_pairs:
            print(f"- {relpath} (expected MP3 name: {expected})")

    if size_warnings:
        print("\nWARNINGS: files near push limit")
        for relpath, size in sorted(size_warnings, key=lambda x: x[1], reverse=True):
            print(f"- {relpath} ({bytes_to_mib(size):.2f} MiB)")

    blocker_count = len(size_blockers) + len(missing_pairs)
    if blocker_count:
        print(f"\nRESULT: BLOCKED ({blocker_count} blockers found)")
        return 1

    print("\nRESULT: PASS (no blocking issues found)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
