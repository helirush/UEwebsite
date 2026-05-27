(function () {
  const ACCESS_KEY = "ue_ff_exec_vault_access_v1";
  const ACCESS_HASH = "1833f14bb64967ab765e85ad65b649d034f33e42e89d1a38378a46ce55850a1b";
  const SESSION_TTL_HOURS = 12;
  const FOUNDER_PROMPT_EVENT = "ffExecVaultRequestFounderAccessPrompt";
  const FOUNDER_ACCESS_IDS = new Set([
    "mike",
    "dan",
    "unity",
    "accents",
    "accentsinc",
    "831829"
  ]);

  function nowMs() {
    return Date.now();
  }

  function safeRead() {
    try {
      const raw = window.sessionStorage.getItem(ACCESS_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_err) {
      return null;
    }
  }

  function normalizeAccessId(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9]/g, "");
  }

  function hasFounderAccessId(value) {
    return FOUNDER_ACCESS_IDS.has(normalizeAccessId(value));
  }

  function isAuthorized() {
    const payload = safeRead();
    if (!payload || payload.authorized !== true) return false;
    if (typeof payload.expiresAt !== "number") return false;
    return payload.expiresAt > nowMs();
  }

  function canShareSecureLinks() {
    if (!isAuthorized()) return false;
    const payload = safeRead();
    return !!(payload && payload.canShareSecureLinks === true);
  }

  function writeAuthorizedSession(canShare) {
    try {
      const payload = {
        authorized: true,
        canShareSecureLinks: canShare === true,
        grantedAt: new Date().toISOString(),
        expiresAt: nowMs() + (SESSION_TTL_HOURS * 60 * 60 * 1000)
      };
      window.sessionStorage.setItem(ACCESS_KEY, JSON.stringify(payload));
    } catch (_err) {}
  }

  async function sha256Hex(value) {
    const bytes = new TextEncoder().encode(String(value || ""));
    const digest = await window.crypto.subtle.digest("SHA-256", bytes);
    const arr = Array.from(new Uint8Array(digest));
    return arr.map((b) => b.toString(16).padStart(2, "0")).join("");
  }

  async function authorizePassword(passwordInput, options) {
    const entered = String(passwordInput || "").trim();
    if (!entered) return false;
    const hash = await sha256Hex(entered);
    if (hash !== ACCESS_HASH) return false;
    const founderAccess = !!(options && options.founderAccess === true);
    writeAuthorizedSession(founderAccess);
    return true;
  }

  function clearAuthorization() {
    try {
      window.sessionStorage.removeItem(ACCESS_KEY);
    } catch (_err) {}
  }

  function requestFounderAccessPrompt(options) {
    const detail = options && typeof options === "object" ? options : {};
    window.dispatchEvent(new CustomEvent(FOUNDER_PROMPT_EVENT, { detail }));
  }

  function lockBody() {
    document.body.classList.add("locked");
  }

  function unlockBody() {
    document.body.classList.remove("locked");
  }

  function notifyAccessChange() {
    window.dispatchEvent(new CustomEvent("ffExecVaultAccessChange", {
      detail: {
        authorized: isAuthorized(),
        canShareSecureLinks: canShareSecureLinks()
      }
    }));
  }

  function attachGate(config) {
    const overlay = document.getElementById(config.overlayId);
    const content = document.getElementById(config.contentId);
    const form = document.getElementById(config.formId);
    const input = document.getElementById(config.inputId);
    const founderIdInput = config.founderIdInputId ? document.getElementById(config.founderIdInputId) : null;
    const error = document.getElementById(config.errorId);
    const logoutBtn = config.logoutId ? document.getElementById(config.logoutId) : null;

    if (!overlay || !content || !form || !input || !error) return;
    let founderPromptActive = false;

    function unlockView() {
      founderPromptActive = false;
      overlay.classList.remove("active");
      content.classList.remove("is-locked");
      unlockBody();
      notifyAccessChange();
    }

    function lockView(options) {
      const founderPrompt = !!(options && options.founderPrompt === true && founderIdInput);
      founderPromptActive = founderPrompt;
      overlay.classList.add("active");
      content.classList.add("is-locked");
      lockBody();
      error.textContent = founderPrompt ? "Enter your Unity Access ID to unlock secure link sharing." : "";
      input.value = "";
      if (founderIdInput) founderIdInput.value = "";
      notifyAccessChange();
      window.setTimeout(() => {
        if (founderPrompt && founderIdInput) {
          founderIdInput.focus();
        } else {
          input.focus();
        }
      }, 20);
    }

    function handleFounderPromptRequest(event) {
      const detail = event && event.detail ? event.detail : null;
      const targetOverlayId = detail && typeof detail.overlayId === "string" ? detail.overlayId : "";
      if (targetOverlayId && targetOverlayId !== config.overlayId) return;
      if (!isAuthorized()) {
        lockView();
        return;
      }
      lockView({ founderPrompt: true });
    }

    window.addEventListener(FOUNDER_PROMPT_EVENT, handleFounderPromptRequest);

    if (isAuthorized()) {
      unlockView();
    } else {
      lockView();
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const founderAccess = founderIdInput ? hasFounderAccessId(founderIdInput.value) : false;
      if (founderPromptActive && isAuthorized()) {
        if (!founderAccess) {
          error.textContent = "Unity Access ID not recognized. Please try again.";
          return;
        }
        writeAuthorizedSession(true);
        unlockView();
        return;
      }
      const ok = await authorizePassword(input.value, { founderAccess });
      if (!ok) {
        error.textContent = "Password not recognized. Please try again.";
        return;
      }
      unlockView();
    });

    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        clearAuthorization();
        lockView();
      });
    }
  }

  window.ffExecVaultAccess = {
    isAuthorized,
    canShareSecureLinks,
    hasFounderAccessId,
    authorizePassword,
    clearAuthorization,
    requestFounderAccessPrompt,
    attachGate
  };
})();