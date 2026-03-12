# AudioTXT — e-Insights Source Scripts

This directory holds the **source text scripts** for every e-Insights audio file.

## Convention

- One `.txt` file per MP3 — named to match its companion audio file
- Speaker tags: `[Unity]` for Unity Faraday, `[Clerk]` for Clerk Maxwell (single-voice scripts use prose format)
- To re-generate any audio: run the generation script with this file as input

## Generation Engine

**Multi-voice (Unity × Clerk):** `eMultiVoiceTTS.py`
- Unity Faraday → OpenAI TTS-1-HD, voice: `shimmer`
- Clerk Maxwell → OpenAI TTS-1-HD, voice: `onyx`

**Single-voice (Unity only):** `eSingleVoiceTTS.py` or `eeAUDIO.py`
- Unity Faraday → OpenAI TTS-1-HD, voice: `shimmer`

## Quick Re-generate EP4

```bash
cd /Users/mdhowell/eestream/eAudio
python3 generate_ep4_insights.py
```

Output: `../eWebmaster/UnityEnergy/maxwellian/insights/EP04_eInsights_260312.mp3`

## Files

| Script | Audio | Voices | Status |
|--------|-------|--------|--------|
| EP01_eInsights_251017_TheElectrogram.txt | EP01_eInsights_251017.mp3 | Unity × Clerk | Script not preserved |
| EP02_eInsights_251024_TheFieldAnswers.txt | EP02_eInsights_251024.mp3 | Unity × Clerk | Script not preserved |
| EP03_eInsights_251103_TheHarmonicStory.txt | EP03_eInsights_251103.mp3 | Unity only | Script not preserved |
| EP03a_eInsights_251103_HarmonicROI.txt | EP03a_eInsights_251103.mp3 | Unity only | Script archived |
| EP04_eInsights_260312_NobodyTaughtMachines.txt | EP04_eInsights_260312.mp3 | Unity × Clerk | **Live** |

## This Pattern Applies System-Wide

Future audio packages (transformer briefs, site overviews, education modules) should
follow the same convention: an `AudioTXT/` directory alongside every set of MP3 files,
with a matching `.txt` source file for each audio output.
