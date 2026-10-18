#!/bin/zsh
# Clerk Speak-with-Clerk local Live server (Vesper / gpt-live-1)
# Do NOT use: python3 -m http.server  (returns 501 on POST)
cd "$(dirname "$0")"
PORT="${1:-8600}"
echo "Starting Clerk Live server on http://127.0.0.1:${PORT}"
echo "Open: http://127.0.0.1:${PORT}/UnityEnergy/contact-us.html"
echo "API:  POST /api/openai/live/session"
exec python3 -u openai_realtime_server.py --host 127.0.0.1 --port "$PORT"
