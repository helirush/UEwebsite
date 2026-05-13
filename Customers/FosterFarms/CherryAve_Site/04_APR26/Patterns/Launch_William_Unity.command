#!/bin/zsh
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
python3 "/Users/mdhowell/eestream/eBehavior/william_unity_handoff.py" --pattern-dir "$SCRIPT_DIR" --mode scripts-only
exit_code=$?
if [ $exit_code -eq 0 ]; then
  printf "\nWilliam/Unity handoff completed successfully.\n"
else
  printf "\nWilliam/Unity handoff finished with exit code %s.\n" "$exit_code"
fi
printf "Press Enter to close..."
read -r _
exit $exit_code
