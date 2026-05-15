#!/usr/bin/env bash

set -u
set -o pipefail

SCRIPT_NAME="$(basename "$0")"
DRY_RUN=0
ROOT_DIR=""
SUMMARYBOARD=""
ARCHIVE_DIR=""
MARKER_FILE_NAME="NARRATION_ARCHIVED.flag"
MOVED_COUNT=0

usage() {
  cat <<'USAGE'
Usage:
  archive_narration_to_zarchive.sh --summaryboard <path> [options]

Required:
  --summaryboard <path>   Summaryboard HTML file whose archive flag should be flipped.

Options:
  --root-dir <path>       Root directory containing Audio/ and Patterns/ (default: summaryboard directory).
  --archive-dir <path>    Archive directory (default: <root-dir>/zARCHIVE).
  --marker-file <name>    Marker filename created in archive dir (default: NARRATION_ARCHIVED.flag).
  --dry-run               Print actions without moving files or editing summaryboard.
  -h, --help              Show this help message.
USAGE
}

to_abs_path() {
  local input="$1"
  if [[ "${input}" = /* ]]; then
    printf '%s\n' "${input}"
  else
    printf '%s/%s\n' "${PWD}" "${input#./}"
  fi
}

ensure_dir() {
  local target="$1"
  if [[ "${DRY_RUN}" -eq 1 ]]; then
    echo "[dry-run] mkdir -p \"${target}\""
  else
    mkdir -p "${target}"
  fi
}

timestamped_destination() {
  local dest="$1"
  if [[ ! -e "${dest}" ]]; then
    printf '%s\n' "${dest}"
    return
  fi

  local dir base name ext stamp
  dir="$(dirname "${dest}")"
  base="$(basename "${dest}")"
  stamp="$(date +%Y%m%d_%H%M%S)"

  if [[ "${base}" == *.* ]]; then
    name="${base%.*}"
    ext=".${base##*.}"
  else
    name="${base}"
    ext=""
  fi

  printf '%s/%s_%s%s\n' "${dir}" "${name}" "${stamp}" "${ext}"
}

move_assets() {
  local asset_roots=()
  [[ -d "${ROOT_DIR}/Audio" ]] && asset_roots+=("${ROOT_DIR}/Audio")
  [[ -d "${ROOT_DIR}/Patterns" ]] && asset_roots+=("${ROOT_DIR}/Patterns")

  if [[ ${#asset_roots[@]} -eq 0 ]]; then
    echo "No Audio/ or Patterns/ directories found under: ${ROOT_DIR}"
    return
  fi

  local src rel dest final_dest
  while IFS= read -r -d '' src; do
    rel="${src#${ROOT_DIR}/}"
    dest="${ARCHIVE_DIR}/${rel}"
    ensure_dir "$(dirname "${dest}")"
    final_dest="$(timestamped_destination "${dest}")"
    if [[ "${DRY_RUN}" -eq 1 ]]; then
      echo "[dry-run] mv \"${src}\" \"${final_dest}\""
    else
      mv "${src}" "${final_dest}"
    fi
    MOVED_COUNT=$((MOVED_COUNT + 1))
  done < <(find "${asset_roots[@]}" -type f \( -iname "*.txt" -o -iname "*.mp3" \) -print0 2>/dev/null)
}

toggle_archive_flag() {
  if [[ ! -f "${SUMMARYBOARD}" ]]; then
    echo "Summaryboard not found: ${SUMMARYBOARD}"
    return 1
  fi

  if grep -q 'window.__UNITY_NARRATION_ARCHIVED__ = true;' "${SUMMARYBOARD}"; then
    echo "Narration archive flag is already true."
    return 0
  fi

  if grep -q 'window.__UNITY_NARRATION_ARCHIVED__ = false;' "${SUMMARYBOARD}"; then
    if [[ "${DRY_RUN}" -eq 1 ]]; then
      echo "[dry-run] set window.__UNITY_NARRATION_ARCHIVED__ = true;"
    else
      perl -0pi -e 's/window\.__UNITY_NARRATION_ARCHIVED__ = false;/window.__UNITY_NARRATION_ARCHIVED__ = true;/' "${SUMMARYBOARD}"
      echo "Set window.__UNITY_NARRATION_ARCHIVED__ = true."
    fi
    return 0
  fi

  if grep -q 'window.__UNITY_NARRATION_ARCHIVED__ = (window.__UNITY_NARRATION_ARCHIVED__ === true);' "${SUMMARYBOARD}"; then
    if [[ "${DRY_RUN}" -eq 1 ]]; then
      echo "[dry-run] set normalized UNITY narration archive expression to true"
    else
      perl -0pi -e 's/window\.__UNITY_NARRATION_ARCHIVED__ = \(window\.__UNITY_NARRATION_ARCHIVED__ === true\);/window.__UNITY_NARRATION_ARCHIVED__ = true;/' "${SUMMARYBOARD}"
      echo "Set window.__UNITY_NARRATION_ARCHIVED__ = true."
    fi
    return 0
  fi

  if grep -q 'window.__APR26_NARRATION_ARCHIVED__ = false;' "${SUMMARYBOARD}"; then
    if [[ "${DRY_RUN}" -eq 1 ]]; then
      echo "[dry-run] migrate legacy APR26 flag and set window.__UNITY_NARRATION_ARCHIVED__ = true;"
    else
      perl -0pi -e 's/window\.__APR26_NARRATION_ARCHIVED__ = false;/window.__UNITY_NARRATION_ARCHIVED__ = true;/' "${SUMMARYBOARD}"
      echo "Migrated legacy APR26 archive flag to UNITY archive flag (true)."
    fi
    return 0
  fi

  if grep -q 'window.__APR26_NARRATION_ARCHIVED__ = true;' "${SUMMARYBOARD}"; then
    if [[ "${DRY_RUN}" -eq 1 ]]; then
      echo "[dry-run] migrate legacy APR26 true flag to UNITY true flag"
    else
      perl -0pi -e 's/window\.__APR26_NARRATION_ARCHIVED__ = true;/window.__UNITY_NARRATION_ARCHIVED__ = true;/' "${SUMMARYBOARD}"
      echo "Migrated legacy APR26 archive flag to UNITY archive flag (true)."
    fi
    return 0
  fi

  echo "No supported narration archive flag assignment found in summaryboard."
  return 1
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --summaryboard)
      SUMMARYBOARD="${2:-}"
      shift 2
      ;;
    --root-dir)
      ROOT_DIR="${2:-}"
      shift 2
      ;;
    --archive-dir)
      ARCHIVE_DIR="${2:-}"
      shift 2
      ;;
    --marker-file)
      MARKER_FILE_NAME="${2:-}"
      shift 2
      ;;
    --dry-run)
      DRY_RUN=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1"
      usage
      exit 1
      ;;
  esac
done

if [[ -z "${SUMMARYBOARD}" ]]; then
  echo "--summaryboard is required."
  usage
  exit 1
fi

SUMMARYBOARD="$(to_abs_path "${SUMMARYBOARD}")"

if [[ -z "${ROOT_DIR}" ]]; then
  ROOT_DIR="$(cd "$(dirname "${SUMMARYBOARD}")" && pwd)"
else
  ROOT_DIR="$(to_abs_path "${ROOT_DIR}")"
fi

if [[ -z "${ARCHIVE_DIR}" ]]; then
  ARCHIVE_DIR="${ROOT_DIR}/zARCHIVE"
else
  ARCHIVE_DIR="$(to_abs_path "${ARCHIVE_DIR}")"
fi

if [[ -z "${MARKER_FILE_NAME}" ]]; then
  MARKER_FILE_NAME="NARRATION_ARCHIVED.flag"
fi

MARKER_FILE="${ARCHIVE_DIR}/${MARKER_FILE_NAME}"

echo "${SCRIPT_NAME}: root_dir=${ROOT_DIR}"
echo "${SCRIPT_NAME}: summaryboard=${SUMMARYBOARD}"
echo "${SCRIPT_NAME}: archive_dir=${ARCHIVE_DIR}"

ensure_dir "${ARCHIVE_DIR}"
ensure_dir "${ARCHIVE_DIR}/Audio"
ensure_dir "${ARCHIVE_DIR}/Patterns"

move_assets

if [[ "${DRY_RUN}" -eq 1 ]]; then
  echo "[dry-run] touch \"${MARKER_FILE}\""
else
  touch "${MARKER_FILE}"
fi

toggle_archive_flag

echo "Narration assets queued for zARCHIVE: ${MOVED_COUNT}"
if [[ "${DRY_RUN}" -eq 1 ]]; then
  echo "Dry-run complete. No files were moved."
else
  echo "Archive complete."
fi
