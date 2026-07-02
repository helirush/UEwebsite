(() => {
  if (window.__unityHowToToggleEnhancerLoadedV2) return;
  window.__unityHowToToggleEnhancerLoadedV2 = true;
  window.__unityHowToToggleEnhancerLoaded = true;

  const STYLE_ID = "unity-howto-toggle-style";
  const BASELINE_HOW_TO_LABEL = "🎧 How to Read the Baseline";
  const TUNED_ENERGY_HOW_TO_LABEL = "🎧 Understanding the Tuned Energy Field";
  const OBSERVER_MARKER = "__unityHowToToggleObserved";
  const STATE_ON_TEXT = "ON";
  const STATE_OFF_TEXT = "OFF";
  const RESET_TEXT = "RESET";

  let buttonObserver = null;
  let buttonObserverTarget = null;
  let howToPaused = false;

  function isElementVisible(el) {
    if (!el) return false;
    if (el.style && el.style.display === "none") return false;
    const computed = window.getComputedStyle ? window.getComputedStyle(el) : null;
    if (!computed) return true;
    return computed.display !== "none" && computed.visibility !== "hidden";
  }

  function getHowToButton() {
    return document.getElementById("unityHowToBtn");
  }

  function normalizeTunedEnergyCopy() {
    const titleEl = document.getElementById("patternModalTitle");
    if (titleEl && typeof titleEl.textContent === "string" && /\bHarmonized\b/i.test(titleEl.textContent)) {
      titleEl.textContent = titleEl.textContent.replace(/\bHarmonized\b/gi, "Tuned Energy");
    }
  }

  function detectHowToMode(button) {
    const path = String(window.currentHowToPath || "").toLowerCase();
    const text = String(window.currentHowToText || "").toLowerCase();
    const title = String((document.getElementById("patternModalTitle") || {}).textContent || "").toLowerCase();
    const buttonText = String(button && button.textContent ? button.textContent : "").toLowerCase();
    const chartMode = String(button && button.dataset && button.dataset.chartMode ? button.dataset.chartMode : "").toLowerCase();
    if (title.includes("baseline")) {
      return "baseline";
    }
    if (title.includes("tuned energy") || title.includes("harmonized")) {
      return "tuned";
    }

    if (chartMode === "waste") {
      return "baseline";
    }
    if (chartMode === "savings") {
      return "tuned";
    }

    if (
      path.includes("_savings_howto") ||
      path.includes("how-to-read-savings-chart.mp3") ||
      buttonText.includes("how to read savings") ||
      buttonText.includes("understanding the tuned energy field")
    ) {
      return "tuned";
    }

    if (
      path.includes("_waste_howto") ||
      path.includes("unity_baseline_results.mp3") ||
      buttonText.includes("how to read the baseline") ||
      text.includes("baseline")
    ) {
      return "baseline";
    }

    return "";
  }

  function deriveButtonLabel(button, mode) {
    if (mode === "tuned") return TUNED_ENERGY_HOW_TO_LABEL;
    if (mode === "baseline") return BASELINE_HOW_TO_LABEL;
    if (!button) return "🎧 How to Read Chart";
    const renderedLabel = button.querySelector(".unity-howto-toggle-label");
    if (renderedLabel && renderedLabel.textContent.trim()) {
      return renderedLabel.textContent.trim();
    }
    const raw = (button.textContent || "").trim();
    if (!raw) return "🎧 How to Read Chart";
    return raw
      .replace(/\s+ON$/i, "")
      .replace(/\s+OFF$/i, "")
      .replace(/\s+RESET$/i, "")
      .trim();
  }

  function getHowToPlaybackState() {
    const audio = window.currentAudioElement;
    const audioPlaying = !!(audio && typeof audio.pause === "function" && !audio.paused && !audio.ended);
    const audioPaused = !!(
      audio &&
      typeof audio.pause === "function" &&
      audio.paused &&
      !audio.ended &&
      Number(audio.currentTime || 0) > 0
    );
    const synth = window.speechSynthesis;
    const speechPlaying = !!(synth && synth.speaking && !synth.paused);
    const speechPaused = !!(synth && synth.paused);

    if (audioPlaying || speechPlaying) return "playing";
    if (audioPaused || speechPaused || howToPaused) return "paused";
    return "idle";
  }

  function clearPauseState() {
    howToPaused = false;
  }

  function scheduleHowToButtonRefresh() {
    window.setTimeout(updateHowToButtonMarkup, 0);
    window.setTimeout(updateHowToButtonMarkup, 80);
  }

  function pauseHowToPlayback() {
    let paused = false;
    const audio = window.currentAudioElement;
    if (audio && typeof audio.pause === "function" && !audio.paused && !audio.ended) {
      try {
        audio.pause();
        paused = true;
      } catch (_err) {}
    }
    const synth = window.speechSynthesis;
    if (synth && synth.speaking && !synth.paused && typeof synth.pause === "function") {
      try {
        synth.pause();
        paused = true;
      } catch (_err) {}
    }
    if (paused) {
      howToPaused = true;
      if (typeof window.isSpeaking !== "undefined") {
        window.isSpeaking = false;
      }
    }
    return paused;
  }

  function resumeHowToPlayback() {
    let resumed = false;
    const synth = window.speechSynthesis;
    if (synth && synth.paused && typeof synth.resume === "function") {
      try {
        synth.resume();
        resumed = true;
      } catch (_err) {}
    }
    const audio = window.currentAudioElement;
    if (
      audio &&
      typeof audio.play === "function" &&
      audio.paused &&
      !audio.ended &&
      Number(audio.currentTime || 0) > 0
    ) {
      try {
        const playPromise = audio.play();
        resumed = true;
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(() => {
            scheduleHowToButtonRefresh();
          });
        }
      } catch (_err) {}
    }
    if (resumed) {
      clearPauseState();
      if (typeof window.isSpeaking !== "undefined") {
        window.isSpeaking = true;
      }
    }
    return resumed;
  }

  function hardStopHowToPlayback() {
    try {
      if (typeof window.stopCurrentPlayback === "function") {
        window.stopCurrentPlayback();
        clearPauseState();
        return;
      }
    } catch (_err) {}

    try {
      const synth = window.speechSynthesis;
      if (synth && typeof synth.cancel === "function") {
        synth.cancel();
      }
    } catch (_err) {}

    try {
      const audio = window.currentAudioElement;
      if (audio && typeof audio.pause === "function") {
        audio.pause();
        audio.currentTime = 0;
      }
    } catch (_err) {}

    if (typeof window.isSpeaking !== "undefined") {
      window.isSpeaking = false;
    }
    clearPauseState();
  }

  function toggleHowToPlaybackFromControl() {
    const state = getHowToPlaybackState();
    if (state === "playing") {
      pauseHowToPlayback();
      scheduleHowToButtonRefresh();
      return;
    }
    if (state === "paused") {
      if (resumeHowToPlayback()) {
        scheduleHowToButtonRefresh();
        return;
      }
    }
    clearPauseState();
    if (typeof window.playHowToAudio === "function") {
      try {
        window.playHowToAudio();
      } catch (_err) {}
    }
    scheduleHowToButtonRefresh();
  }

  function resetHowToPlaybackFromControl() {
    hardStopHowToPlayback();
    if (typeof window.playHowToAudio === "function") {
      window.setTimeout(() => {
        try {
          window.playHowToAudio();
        } catch (_err) {}
        scheduleHowToButtonRefresh();
      }, 0);
      return;
    }
    scheduleHowToButtonRefresh();
  }

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement("style");
    style.id = STYLE_ID;
    style.textContent = `
#unityHowToBtn.unity-howto-toggle-ready {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-width: 330px !important;
  white-space: nowrap;
}
#unityHowToBtn .unity-howto-toggle-label {
  display: inline-flex;
  align-items: center;
  flex: 1 1 auto;
}
#unityHowToBtn .unity-howto-control-group {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-left: 10px;
}
#unityHowToBtn .unity-howto-voice-state,
#unityHowToBtn .unity-howto-reset-state {
  padding: 2px 9px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.62);
  font-size: 9pt;
  font-weight: 900;
  line-height: 1.05;
  letter-spacing: 0.35px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 44px;
  cursor: pointer;
  user-select: none;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.18);
  transition: transform 0.14s ease, filter 0.14s ease, background 0.14s ease, border-color 0.14s ease;
}
#unityHowToBtn .unity-howto-voice-state.is-on {
  color: #ecf7c2;
  background: linear-gradient(135deg, rgba(106, 159, 25, 0.54), rgba(142, 194, 46, 0.62));
  border-color: rgba(226, 255, 143, 0.86);
}
#unityHowToBtn .unity-howto-voice-state.is-off {
  color: #ffe0ce;
  background: linear-gradient(135deg, rgba(102, 57, 43, 0.62), rgba(132, 72, 55, 0.66));
  border-color: rgba(255, 188, 160, 0.84);
}
#unityHowToBtn .unity-howto-reset-state {
  color: #fff2cf;
  background: linear-gradient(135deg, rgba(77, 83, 94, 0.56), rgba(94, 102, 116, 0.62));
  border-color: rgba(242, 245, 255, 0.68);
}
#unityHowToBtn .unity-howto-voice-state:hover,
#unityHowToBtn .unity-howto-reset-state:hover {
  transform: translateY(-1px);
  filter: brightness(1.08);
}
`;
    document.head.appendChild(style);
  }

  function updateHowToButtonMarkup() {
    normalizeTunedEnergyCopy();
    const button = getHowToButton();
    if (!button || !isElementVisible(button)) return;

    const mode = detectHowToMode(button);
    const label = deriveButtonLabel(button, mode);
    const playbackState = getHowToPlaybackState();
    const isOn = playbackState === "playing";
    const stateText = isOn ? STATE_ON_TEXT : STATE_OFF_TEXT;
    const stateTitle = isOn
      ? "Pause Unity narration"
      : playbackState === "paused"
      ? "Resume Unity narration"
      : "Start Unity narration";

    if (button.dataset) {
      if (mode === "tuned") button.dataset.chartMode = "savings";
      if (mode === "baseline") button.dataset.chartMode = "waste";
    }

    button.classList.add("unity-howto-toggle-ready");

    const currentLabel = button.querySelector(".unity-howto-toggle-label");
    const currentState = button.querySelector(".unity-howto-voice-state");
    const currentReset = button.querySelector(".unity-howto-reset-state");
    if (currentLabel && currentState && currentReset) {
      currentLabel.textContent = label;
      currentState.textContent = stateText;
      currentState.classList.toggle("is-on", isOn);
      currentState.classList.toggle("is-off", !isOn);
      currentState.title = stateTitle;
      currentReset.textContent = RESET_TEXT;
      currentReset.title = "Restart Unity narration from the beginning";
      return;
    }

    while (button.firstChild) {
      button.removeChild(button.firstChild);
    }

    const labelEl = document.createElement("span");
    labelEl.className = "unity-howto-toggle-label";
    labelEl.textContent = label;

    const controlsEl = document.createElement("span");
    controlsEl.className = "unity-howto-control-group";

    const stateEl = document.createElement("span");
    stateEl.className = `unity-howto-voice-state ${isOn ? "is-on" : "is-off"}`;
    stateEl.textContent = stateText;
    stateEl.title = stateTitle;

    const resetEl = document.createElement("span");
    resetEl.className = "unity-howto-reset-state";
    resetEl.textContent = RESET_TEXT;
    resetEl.title = "Restart Unity narration from the beginning";

    controlsEl.appendChild(stateEl);
    controlsEl.appendChild(resetEl);
    button.appendChild(labelEl);
    button.appendChild(controlsEl);
  }

  function patchNarrationFunctions() {
    const patchState = window.__unityHowToTogglePatchState || {
      playHowTo: false,
      autoStart: false,
      viewPattern: false,
      showPatternModal: false,
      openHowToFullscreen: false,
      stopPlayback: false,
      closePatternModal: false
    };
    window.__unityHowToTogglePatchState = patchState;

    const originalPlayHowToAudio = (!patchState.playHowTo && typeof window.playHowToAudio === "function")
      ? window.playHowToAudio
      : null;
    if (originalPlayHowToAudio) {
      window.playHowToAudio = function patchedPlayHowToAudio() {
        const state = getHowToPlaybackState();
        if (state === "playing" && pauseHowToPlayback()) {
          scheduleHowToButtonRefresh();
          return;
        }
        if (state === "paused" && resumeHowToPlayback()) {
          scheduleHowToButtonRefresh();
          return;
        }
        clearPauseState();
        const result = originalPlayHowToAudio.apply(this, arguments);
        scheduleHowToButtonRefresh();
        return result;
      };
      patchState.playHowTo = true;
    }

    const originalAutoStartVoiceForSelection = (!patchState.autoStart && typeof window.autoStartVoiceForSelection === "function")
      ? window.autoStartVoiceForSelection
      : null;
    if (originalAutoStartVoiceForSelection) {
      window.autoStartVoiceForSelection = function patchedAutoStartVoiceForSelection() {
        clearPauseState();
        const result = originalAutoStartVoiceForSelection.apply(this, arguments);
        scheduleHowToButtonRefresh();
        return result;
      };
      patchState.autoStart = true;
    }

    const originalViewPattern = (!patchState.viewPattern && typeof window.viewPattern === "function")
      ? window.viewPattern
      : null;
    if (originalViewPattern) {
      window.viewPattern = function patchedViewPattern() {
        const result = originalViewPattern.apply(this, arguments);
        normalizeTunedEnergyCopy();
        scheduleHowToButtonRefresh();
        return result;
      };
      patchState.viewPattern = true;
    }

    const originalShowPatternModal = (!patchState.showPatternModal && typeof window.showPatternModal === "function")
      ? window.showPatternModal
      : null;
    if (originalShowPatternModal) {
      window.showPatternModal = async function patchedShowPatternModal() {
        const result = await originalShowPatternModal.apply(this, arguments);
        normalizeTunedEnergyCopy();
        scheduleHowToButtonRefresh();
        return result;
      };
      patchState.showPatternModal = true;
    }

    const originalStopCurrentPlayback = (!patchState.stopPlayback && typeof window.stopCurrentPlayback === "function")
      ? window.stopCurrentPlayback
      : null;
    if (originalStopCurrentPlayback) {
      window.stopCurrentPlayback = function patchedStopCurrentPlayback() {
        const result = originalStopCurrentPlayback.apply(this, arguments);
        clearPauseState();
        scheduleHowToButtonRefresh();
        return result;
      };
      patchState.stopPlayback = true;
    }

    const originalClosePatternModal = (!patchState.closePatternModal && typeof window.closePatternModal === "function")
      ? window.closePatternModal
      : null;
    if (originalClosePatternModal) {
      window.closePatternModal = function patchedClosePatternModal() {
        const result = originalClosePatternModal.apply(this, arguments);
        clearPauseState();
        scheduleHowToButtonRefresh();
        return result;
      };
      patchState.closePatternModal = true;
    }

    const originalOpenHowToFullscreenFromCurrentView = (!patchState.openHowToFullscreen && typeof window.openHowToFullscreenFromCurrentView === "function")
      ? window.openHowToFullscreenFromCurrentView
      : null;
    if (originalOpenHowToFullscreenFromCurrentView) {
      window.openHowToFullscreenFromCurrentView = function patchedOpenHowToFullscreenFromCurrentView() {
        return;
      };
      patchState.openHowToFullscreen = true;
    }
  }

  function onButtonCaptureClick(event) {
    if (!event || !event.target || typeof event.target.closest !== "function") return;

    const resetToggle = event.target.closest(".unity-howto-reset-state");
    const stateToggle = event.target.closest(".unity-howto-voice-state");
    if (!stateToggle && !resetToggle) return;

    event.preventDefault();
    event.stopPropagation();
    if (typeof event.stopImmediatePropagation === "function") {
      event.stopImmediatePropagation();
    }

    if (resetToggle) {
      resetHowToPlaybackFromControl();
      return;
    }
    toggleHowToPlaybackFromControl();
  }

  function ensureButtonObserver() {
    const button = getHowToButton();
    if (!button) return;

    if (!button[OBSERVER_MARKER]) {
      button[OBSERVER_MARKER] = true;
      button.addEventListener("click", onButtonCaptureClick, true);
    }

    if (!buttonObserver || buttonObserverTarget !== button) {
      if (buttonObserver) buttonObserver.disconnect();
      buttonObserver = new MutationObserver(() => {
        window.requestAnimationFrame(updateHowToButtonMarkup);
      });
      buttonObserver.observe(button, {
        attributes: true,
        attributeFilter: ["style", "class"],
        childList: true
      });
      buttonObserverTarget = button;
    }
  }

  function init() {
    injectStyles();
    patchNarrationFunctions();
    ensureButtonObserver();
    normalizeTunedEnergyCopy();
    updateHowToButtonMarkup();

    window.toggleHowToNarration = toggleHowToPlaybackFromControl;
    window.resetHowToNarration = resetHowToPlaybackFromControl;

    const syncInterval = window.setInterval(() => {
      patchNarrationFunctions();
      ensureButtonObserver();
      updateHowToButtonMarkup();
    }, 900);
    window.setTimeout(() => window.clearInterval(syncInterval), 12000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
