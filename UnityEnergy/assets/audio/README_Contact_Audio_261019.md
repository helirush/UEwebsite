# Unity Contact Us — Narration Asset
Date: 2026-10-19  
Source: CLERK_COM_261019r0_Unity_Contact_Audio_Deployment  
Voice correction: r1 — Shimmer (TTS-1-HD)

## What happened (r0 mistake)
Contact intro was first generated with OpenAI `gpt-4o-mini-tts` / voice **`nova`**.  
That was **not** the Unity established pipeline.

## Correct Unity voice (locked)
Unity Speak / marketing intros use:
- **Model:** `tts-1-hd`
- **Voice:** `shimmer`
- Reference generators:
  - `eAudio/UnitySpeak/generate_cove_unity_voice.py`
  - `eAudio/UnitySpeak/regenerate_all_unity_audio.py`

## Assets (current)
- Script: `assets/audio/unity-contact-intro-script.txt`
- Audio: `assets/audio/unity-contact-intro.mp3` (regenerated Shimmer, 24 kHz mono 160 kb/s)
- Page: `contact-us.html` → `#uePageUnityAudio` (`?v=20261019-contact-audio-shimmer-1`)

## Behavior
- Autoplay attempt + gesture fallback
- Start toggle / Reset rewind
- Stop on Meet with Clerk handoff and page leave
