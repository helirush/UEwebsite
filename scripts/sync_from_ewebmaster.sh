#!/usr/bin/env bash

set -euo pipefail

SOURCE_DIR="/Users/mdhowell/eestream/eWebmaster/"
TARGET_DIR="/Users/mdhowell/uewebsite/"

if [[ ! -d "$SOURCE_DIR" ]]; then
  echo "Source directory not found: $SOURCE_DIR" >&2
  exit 1
fi

if [[ ! -d "$TARGET_DIR/.git" ]]; then
  echo "Target is not a git repo (missing .git): $TARGET_DIR" >&2
  exit 1
fi

echo "Syncing from:"
echo "  $SOURCE_DIR"
echo "to:"
echo "  $TARGET_DIR"

rsync -a --delete \
  --exclude ".git" \
  --exclude ".DS_Store" \
  --exclude "scripts/" \
  "$SOURCE_DIR" "$TARGET_DIR"

# Clean any stray macOS metadata files that may already exist
find "$TARGET_DIR" -name ".DS_Store" -type f -delete

echo
echo "Sync complete. Current uewebsite status:"
git -C "$TARGET_DIR" --no-pager status --short
