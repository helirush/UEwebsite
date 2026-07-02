(() => {
  window.__UNITY_NARRATION_ARCHIVED__ = false;
  window.__UNITY_NARRATION_AUDIO_ARCHIVED__ = false;
  window.__UNITY_NARRATION_RETENTION_POLICY__ = Object.assign({
    retentionMonths: 2,
    includeCurrentMonth: false,
    reportMonthCode: null,
    activeMonthCodes: [2605, 2604],
    forceArchive: false
  }, window.__UNITY_NARRATION_RETENTION_POLICY__ || {});

  const policy = window.__UNITY_NARRATION_RETENTION_POLICY__ || {};

  function parseMonthCodeFromDateToken(token) {
    const clean = String(token || '').trim();
    if (!/^\d{6}$/.test(clean)) return null;
    const yy = clean.slice(0, 2);
    const mm = clean.slice(2, 4);
    const code = Number(yy + mm);
    return Number.isFinite(code) ? code : null;
  }

  function parseMonthCodeFromPath(pathText) {
    const path = String(pathText || '');
    const dateRangeMatch = path.match(/_(\d{6})-(\d{6})_/);
    if (dateRangeMatch) {
      const fromDateRange = parseMonthCodeFromDateToken(dateRangeMatch[1]);
      if (fromDateRange !== null) return fromDateRange;
    }
    const folderMatch = path.match(/\/(\d{2})_[A-Z]{3}(\d{2})\//i);
    if (folderMatch) {
      const mm = folderMatch[1];
      const yy = folderMatch[2];
      const folderCode = Number(yy + mm);
      if (Number.isFinite(folderCode)) return folderCode;
    }
    return null;
  }

  function parseMonthCodeFromLabel() {
    const monthMap = {
      jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
      jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12'
    };
    const periodEl = document.querySelector('.period-value');
    let labelText = (periodEl && periodEl.textContent) ? periodEl.textContent : '';
    if (!labelText) labelText = document.title || '';
    const m = String(labelText).match(/(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)[a-z]*\s+(\d{4})/i);
    if (!m) return null;
    const monthCode = monthMap[(m[1] || '').toLowerCase()];
    const year = String(m[2] || '');
    if (!monthCode || year.length !== 4) return null;
    const labelCode = Number(year.slice(2) + monthCode);
    return Number.isFinite(labelCode) ? labelCode : null;
  }

  function monthCodeFromDate(dateObj) {
    if (!(dateObj instanceof Date)) return null;
    const yy = String(dateObj.getFullYear() % 100).padStart(2, '0');
    const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
    const code = Number(yy + mm);
    return Number.isFinite(code) ? code : null;
  }

  function normalizeMonthCode(value) {
    if (value === null || value === undefined) return null;
    const asText = String(value).trim();
    if (!asText) return null;
    if (!/^\d+$/.test(asText)) return null;
    const numeric = Number(asText);
    if (!Number.isFinite(numeric)) return null;
    const code = Math.floor(numeric);
    const month = code % 100;
    if (code < 1000 || month < 1 || month > 12) return null;
    return code;
  }

  function resolveRetentionMonths() {
    let maxMonths = Number(policy.retentionMonths || 2);
    if (!Number.isFinite(maxMonths) || maxMonths < 1) maxMonths = 2;
    return Math.floor(maxMonths);
  }

  function resolveActiveMonthCodes() {
    const raw = Array.isArray(policy.activeMonthCodes) ? policy.activeMonthCodes : [2605, 2604];
    const out = [];
    const seen = new Set();
    raw.forEach((value) => {
      const code = Number(value);
      if (!Number.isFinite(code)) return;
      const normalized = Math.floor(code);
      if (seen.has(normalized)) return;
      seen.add(normalized);
      out.push(normalized);
    });
    return out;
  }

  function isExplicitlyActiveMonth(reportCode) {
    if (!Number.isFinite(reportCode)) return false;
    const code = Math.floor(reportCode);
    const activeCodes = resolveActiveMonthCodes();
    return activeCodes.includes(code);
  }

  function isWithinRetentionWindow(reportCode) {
    if (!Number.isFinite(reportCode)) return false;
    const now = new Date();
    const cursor = new Date(now.getFullYear(), now.getMonth(), 1);
    if (!(policy.includeCurrentMonth === true)) {
      cursor.setMonth(cursor.getMonth() - 1);
    }
    const maxMonths = resolveRetentionMonths();
    for (let i = 0; i < maxMonths; i++) {
      const code = monthCodeFromDate(cursor);
      if (Number.isFinite(code) && code === reportCode) return true;
      cursor.setMonth(cursor.getMonth() - 1);
    }
    return false;
  }

  function describeRetentionWindow() {
    const labels = [];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();
    const cursor = new Date(now.getFullYear(), now.getMonth(), 1);
    if (!(policy.includeCurrentMonth === true)) {
      cursor.setMonth(cursor.getMonth() - 1);
    }
    const maxMonths = resolveRetentionMonths();
    for (let i = 0; i < maxMonths; i++) {
      labels.push(monthNames[cursor.getMonth()] + ' ' + cursor.getFullYear());
      cursor.setMonth(cursor.getMonth() - 1);
    }
    return labels.join(' and ');
  }

  function resolvePreferredVoice() {
    if (typeof window.getPreferredSpeechVoice === 'function') {
      try {
        return window.getPreferredSpeechVoice() || null;
      } catch (_e) {}
    }
    const voices = (window.speechSynthesis && typeof window.speechSynthesis.getVoices === 'function')
      ? window.speechSynthesis.getVoices()
      : [];
    let preferred = voices.find((v) => v && v.name && v.name.toLowerCase().includes('unity faraday'));
    if (!preferred) {
      preferred = voices.find((v) => v && v.lang === 'en-US');
    }
    return preferred || null;
  }

  function buildHowToOpeningText() {
    const btn = document.getElementById('unityHowToBtn');
    const label = btn && btn.textContent ? String(btn.textContent).toLowerCase() : '';
    if (label.includes('waste')) {
      return 'How to read the baseline view: first orient to layout and operating window, then focus on trend direction, then connect drift to operational strain before planning correction.';
    }
    if (label.includes('savings')) {
      return 'How to read the M P T S savings view: first orient to the harmonized chart, then compare before and after field behavior, then focus on recovery and reliability signals before planning rollout.';
    }
    return 'How to read this view: first orient to layout, then review trend direction, then connect that pattern to operational impact.';
  }

  function installHowToVoicePrimer() {
    if (window.__UNITY_HOWTO_PRIMER_INSTALLED__ === true) return;
    const originalPlayHowToAudio = window.playHowToAudio;
    if (typeof originalPlayHowToAudio !== 'function') return;
    const originalSource = String(originalPlayHowToAudio);
    if (originalSource.includes('stageHowToOpeningThenPlay')) return;
    window.__UNITY_HOWTO_PRIMER_INSTALLED__ = true;
    window.playHowToAudio = function() {
      const args = arguments;
      const runOriginal = () => originalPlayHowToAudio.apply(this, args);
      if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') {
        runOriginal();
        return;
      }
      const openingText = buildHowToOpeningText();
      if (!openingText) {
        runOriginal();
        return;
      }
      let primer;
      try {
        primer = new SpeechSynthesisUtterance(openingText);
      } catch (_e) {
        runOriginal();
        return;
      }
      const preferredVoice = resolvePreferredVoice();
      if (preferredVoice) primer.voice = preferredVoice;
      primer.rate = 0.95;
      primer.pitch = 1.0;
      primer.volume = 1.0;
      primer.onend = runOriginal;
      primer.onerror = runOriginal;
      try {
        window.speechSynthesis.cancel();
      } catch (_e) {}
      try {
        window.speechSynthesis.speak(primer);
      } catch (_e) {
        runOriginal();
      }
    };
  }

  function isArchiveAlertStub(fn) {
    if (typeof fn !== 'function') return false;
    const source = String(fn);
    return source.includes('alert(audioMsg)') || source.includes('Audio is maintained only for the last two months');
  }

  function playCandidateAudio(candidates, onExhausted) {
    const list = Array.isArray(candidates)
      ? candidates.filter((v) => typeof v === 'string' && v.trim().length > 0)
      : [];
    if (!list.length) {
      if (typeof onExhausted === 'function') onExhausted();
      return;
    }
    if (typeof window.playAudioCandidateList === 'function' && !isArchiveAlertStub(window.playAudioCandidateList)) {
      window.playAudioCandidateList(
        list,
        (audio, _src, tryNextCandidate) => {
          audio.onended = function() { window.isSpeaking = false; };
          audio.onerror = function() {
            window.isSpeaking = false;
            tryNextCandidate();
          };
          window.isSpeaking = true;
          const playPromise = audio.play();
          if (playPromise && typeof playPromise.then === 'function') {
            playPromise.catch(() => {
              window.isSpeaking = false;
              tryNextCandidate();
            });
          }
        },
        () => {
          window.isSpeaking = false;
          if (typeof onExhausted === 'function') onExhausted();
        }
      );
      return;
    }
    let index = 0;
    const tryNext = () => {
      if (index >= list.length) {
        window.isSpeaking = false;
        if (typeof onExhausted === 'function') onExhausted();
        return;
      }
      const src = list[index++];
      const audio = new Audio(src);
      window.currentAudioElement = audio;
      audio.onended = function() { window.isSpeaking = false; };
      audio.onerror = function() {
        window.isSpeaking = false;
        tryNext();
      };
      window.isSpeaking = true;
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.catch(() => {
          window.isSpeaking = false;
          tryNext();
        });
      }
    };
    tryNext();
  }

  function speakWithPreferredVoiceFallback(text) {
    const message = String(text || '').trim();
    if (!message) return false;
    if (!window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') return false;
    let utterance;
    try {
      utterance = new SpeechSynthesisUtterance(message);
    } catch (_e) {
      return false;
    }
    const preferredVoice = resolvePreferredVoice();
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    utterance.onend = function() { window.isSpeaking = false; };
    utterance.onerror = function() { window.isSpeaking = false; };
    try {
      window.isSpeaking = true;
      window.speechSynthesis.speak(utterance);
      return true;
    } catch (_e) {
      window.isSpeaking = false;
      return false;
    }
  }

  function buildAudioCandidatesFromStems(suffix, fallbackTransformerId) {
    const out = [];
    const seen = new Set();
    const stems = Array.isArray(window.currentAudioStemCandidates) ? window.currentAudioStemCandidates : [];
    stems.forEach((stem) => {
      const s = String(stem || '').trim();
      if (!s) return;
      const path = `Patterns/${s}${suffix}`;
      if (seen.has(path)) return;
      seen.add(path);
      out.push(path);
    });
    const fallbackId = String(fallbackTransformerId || '').trim();
    if (fallbackId) {
      const fallbackPath = `Patterns/${fallbackId}${suffix}`;
      if (!seen.has(fallbackPath)) {
        seen.add(fallbackPath);
        out.push(fallbackPath);
      }
    }
    return out;
  }

  function installActiveMonthAudioRecovery() {
    if (window.__UNITY_ACTIVE_MONTH_AUDIO_RECOVERY__ === true) return;
    window.__UNITY_ACTIVE_MONTH_AUDIO_RECOVERY__ = true;

    if (window.__UNITY_DIRECT_HOWTO_AUDIO__ !== true) {
      window.__UNITY_DIRECT_HOWTO_AUDIO__ = true;
      window.playHowToAudio = function() {
        if (typeof window.isPlaybackActive === 'function' && window.isPlaybackActive()) {
          if (typeof window.stopCurrentPlayback === 'function') window.stopCurrentPlayback();
          return;
        }

        const mp3Candidates = Array.isArray(window.currentHowToCandidates) && window.currentHowToCandidates.length
          ? window.currentHowToCandidates
          : (window.currentHowToPath ? [window.currentHowToPath] : []);

        if (typeof window.openHowToFullscreenFromCurrentView === 'function') {
          try { window.openHowToFullscreenFromCurrentView(); } catch (_e) {}
        }

        const fallbackText = String(window.currentHowToText || '').trim() || `Welcome. I'm Unity. How to Read audio is not available for this view at this time.`;
        playCandidateAudio(mp3Candidates, () => {
          if (!speakWithPreferredVoiceFallback(fallbackText)) {
            alert('How to Read audio is not available for this view.');
          }
        });
      };

      if (typeof window.playUnityHowToChart === 'function') {
        window.playUnityHowToChart = function() {
          if (typeof window.playHowToAudio === 'function') return window.playHowToAudio();
        };
      }
    }

    if (isArchiveAlertStub(window.playHowToAudio)) {
      window.playHowToAudio = function() {
        if (typeof window.isPlaybackActive === 'function' && window.isPlaybackActive()) {
          if (typeof window.stopCurrentPlayback === 'function') window.stopCurrentPlayback();
          return;
        }
        const mp3Candidates = Array.isArray(window.currentHowToCandidates) && window.currentHowToCandidates.length
          ? window.currentHowToCandidates
          : (window.currentHowToPath ? [window.currentHowToPath] : []);
        if (typeof window.openHowToFullscreenFromCurrentView === 'function') {
          try { window.openHowToFullscreenFromCurrentView(); } catch (_e) {}
        }
        const primaryPath = mp3Candidates[0] || '';
        const openingText = (typeof window.getHowToOpeningText === 'function')
          ? window.getHowToOpeningText(primaryPath)
          : buildHowToOpeningText();
        const fallbackText = String(window.currentHowToText || '').trim() || `Welcome. I'm Unity. How to Read audio is not available for this view at this time.`;
        const startMainPlayback = () => {
          playCandidateAudio(mp3Candidates, () => {
            if (!speakWithPreferredVoiceFallback(fallbackText)) {
              alert('How to Read audio is not available for this view.');
            }
          });
        };
        if (typeof window.stageHowToOpeningThenPlay === 'function' && !isArchiveAlertStub(window.stageHowToOpeningThenPlay)) {
          try {
            window.stageHowToOpeningThenPlay(openingText, startMainPlayback);
            return;
          } catch (_e) {}
        }
        startMainPlayback();
      };
    }

    if (isArchiveAlertStub(window.playUnityBrief)) {
      window.playUnityBrief = function() {
        if (typeof window.isPlaybackActive === 'function' && window.isPlaybackActive()) {
          if (typeof window.stopCurrentPlayback === 'function') window.stopCurrentPlayback();
          return;
        }
        const fallbackId = window.currentTransformerId || '';
        const candidates = buildAudioCandidatesFromStems('_brief.mp3', fallbackId);
        const briefText = String(window.currentBriefText || window.currentNarrativeText || '').trim();
        playCandidateAudio(candidates, () => {
          if (!speakWithPreferredVoiceFallback(briefText || 'Unity Brief audio is not available for this transformer.')) {
            alert('Unity Brief audio is not available for this transformer.');
          }
        });
      };
    }

    if (isArchiveAlertStub(window.speakNarrative)) {
      window.speakNarrative = function() {
        if (typeof window.isPlaybackActive === 'function' && window.isPlaybackActive()) {
          if (typeof window.stopCurrentPlayback === 'function') window.stopCurrentPlayback();
          return;
        }
        const fallbackId = window.currentTransformerId || '';
        const candidates = buildAudioCandidatesFromStems('_narrative.mp3', fallbackId);
        const narrativeText = String(window.currentNarrativeText || '').trim();
        playCandidateAudio(candidates, () => {
          if (!speakWithPreferredVoiceFallback(narrativeText || 'Unity narrative audio is not available for this transformer.')) {
            alert('Unity narrative audio is not available for this transformer.');
          }
        });
      };
    }

    if (isArchiveAlertStub(window.playUnityHowToChart)) {
      window.playUnityHowToChart = function() {
        if (typeof window.playHowToAudio === 'function') return window.playHowToAudio();
      };
    }
  }

  let reportMonthCode = normalizeMonthCode(policy.reportMonthCode);
  if (!Number.isFinite(reportMonthCode)) {
    reportMonthCode =
      parseMonthCodeFromPath(window.location.pathname) ||
      parseMonthCodeFromPath(window.location.href) ||
      parseMonthCodeFromLabel();
  }

  if (isExplicitlyActiveMonth(reportMonthCode)) {
    window.__UNITY_NARRATION_ARCHIVED__ = false;
    window.__UNITY_NARRATION_AUDIO_ARCHIVED__ = false;
    installHowToVoicePrimer();
    installActiveMonthAudioRecovery();
    return;
  }

  const forcedArchived = (policy.forceArchive === true);
  let shouldArchive = forcedArchived;
  if (!shouldArchive) {
    if (!Number.isFinite(reportMonthCode)) {
      installHowToVoicePrimer();
      installActiveMonthAudioRecovery();
      return;
    }
    shouldArchive = !isWithinRetentionWindow(reportMonthCode);
  }
  if (!shouldArchive) {
    window.__UNITY_NARRATION_ARCHIVED__ = false;
    window.__UNITY_NARRATION_AUDIO_ARCHIVED__ = false;
    installHowToVoicePrimer();
    installActiveMonthAudioRecovery();
    return;
  }

  window.__UNITY_NARRATION_AUDIO_ARCHIVED__ = true;

  const textMsg = 'Pattern text is archived for this report period (retention policy).';
  const retentionLabel = describeRetentionWindow();
  const audioMsg = retentionLabel
    ? `Audio is maintained only for the last two months (${retentionLabel}).`
    : 'Audio is maintained only for the last two months (retention policy).';

  function hideNarrativeAudioButtons() {
    ['unityBriefBtn', 'unityExplainsBtn', 'unityHowToBtn', 'narrativeAudioBtn'].forEach((id) => {
      const btn = document.getElementById(id);
      if (btn) btn.style.display = 'none';
    });
  }

  function showArchivedNarrativeModal(transformerId) {
    const xfmrNum = String(transformerId || '').replace('xfmr', '');
    const nameEl = document.getElementById(`xfmr${xfmrNum}-name`);
    const transformerName = nameEl ? (nameEl.textContent || '').trim() : '';
    const modal = document.getElementById('patternModal');
    const titleEl = document.getElementById('patternModalTitle');
    const bodyEl = document.getElementById('patternModalBody');
    if (titleEl) titleEl.textContent = `${transformerName || 'Transformer'} - Detailed Narrative`;
    if (bodyEl) {
      bodyEl.innerHTML = `<div style="text-align:left;"><p>${textMsg}</p></div>`;
      if (bodyEl.classList) bodyEl.classList.remove('unity-summary-mode');
      if (bodyEl.style && typeof bodyEl.style.removeProperty === 'function') {
        bodyEl.style.removeProperty('--unity-field-backdrop');
      }
    }
    hideNarrativeAudioButtons();
    if (modal) modal.style.display = 'block';
  }

  const originalShowPatternModal = window.showPatternModal;
  if (typeof originalShowPatternModal === 'function') {
    window.showPatternModal = function(transformerId, type) {
      if (type === 'narrative') {
        if (typeof window.stopCurrentPlayback === 'function') {
          try { window.stopCurrentPlayback(); } catch (_e) {}
        } else if (window.speechSynthesis && typeof window.speechSynthesis.cancel === 'function') {
          try { window.speechSynthesis.cancel(); } catch (_e) {}
        }
        window.currentNarrativeText = '';
        window.currentBriefText = '';
        window.currentTransformerId = '';
        showArchivedNarrativeModal(transformerId);
        return;
      }
      return originalShowPatternModal.apply(this, arguments);
    };
  }

  window.speakNarrative = function() { hideNarrativeAudioButtons(); alert(audioMsg); };
  window.playUnityBrief = function() { hideNarrativeAudioButtons(); alert(audioMsg); };
  window.playHowToAudio = function() { hideNarrativeAudioButtons(); alert(audioMsg); };
  window.playUnityHowToChart = function() { hideNarrativeAudioButtons(); alert(audioMsg); };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hideNarrativeAudioButtons, { once: true });
  } else {
    hideNarrativeAudioButtons();
  }
})();
