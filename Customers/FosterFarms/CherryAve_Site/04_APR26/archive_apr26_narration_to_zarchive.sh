#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SHARED_HELPER="${SCRIPT_DIR}/../../../../archive_narration_to_zarchive.sh"
SUMMARYBOARD="${SCRIPT_DIR}/SITE-FosterFarms-Summaryboard_FosterFarms-4_1minRES_260401-260430_30d.html"

if [[ ! -f "${SHARED_HELPER}" ]]; then
  echo "Shared helper not found: ${SHARED_HELPER}"
  exit 1
fi

exec bash "${SHARED_HELPER}" \
  --root-dir "${SCRIPT_DIR}" \
  --summaryboard "${SUMMARYBOARD}" \
  "$@"