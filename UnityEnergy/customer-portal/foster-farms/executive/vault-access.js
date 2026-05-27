(function () {
  const ACCESS_KEY = "ue_ff_exec_vault_access_v1";
  const ACCESS_HASH = "1833f14bb64967ab765e85ad65b649d034f33e42e89d1a38378a46ce55850a1b";
  const SESSION_TTL_HOURS = 12;
  const FOUNDER_PROMPT_EVENT = "ffExecVaultRequestFounderAccessPrompt";
  const FOUNDER_ACCESS_ID_HASHES = new Set([
    "64b4d0f47c93ce23d157e68a58767356283dc9b63c459d45d0e0e39b3a64b9b9",
    "ec4f2dbb3b140095550c9afbbb69b5d6fd9e814b9da82fad0b34e9fcbe56f1cb",
    "a5790b06f63b7c1646f0de34b44fc108377a02fb07aa60b83aaff44deed06398",
    "1d9f88d73499fc756000e175df064a2b5bdd07bc23618126ad53a7d9ba23148b",
    "a9f9b8651f70c7a1b0c3e8ac702b67c5b12bf6b29f0bfe5364b3c725ffc0016e",
    "b3c21cef87a8720d12c1014cc5f4fff4c070361b7ba3d056418a189d7891e41c"
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
    const raw = String(value || "").trim().toLowerCase();
    const localPart = raw.includes("@") ? raw.split("@")[0] : raw;
    return localPart.replace(/[^a-z0-9]/g, "");
  }

  async function hasFounderAccessId(value) {
    const normalized = normalizeAccessId(value);
    if (!normalized) return false;
    const hash = await sha256Hex(normalized);
    return FOUNDER_ACCESS_ID_HASHES.has(hash);
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
    const cancelBtn = config.cancelId ? document.getElementById(config.cancelId) : null;

    if (!overlay || !content || !form || !input || !error) return;
    let founderPromptActive = false;
    input.setAttribute("type", "password");
    if (founderIdInput) {
      founderIdInput.setAttribute("type", "password");
    }

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

    function handleCancelAction() {
      const cancelHref = typeof config.cancelHref === "string" ? config.cancelHref.trim() : "";
      if (cancelHref) {
        window.location.href = cancelHref;
        return;
      }
      if (window.history.length > 1) {
        window.history.back();
        return;
      }
      window.location.href = "/";
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
      const founderAccess = founderIdInput ? await hasFounderAccessId(founderIdInput.value) : false;
      if (founderAccess) {
        writeAuthorizedSession(true);
        unlockView();
        return;
      }
      if (founderPromptActive && isAuthorized()) {
        error.textContent = "Unity Access ID not recognized. Please try again.";
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

    if (cancelBtn) {
      cancelBtn.addEventListener("click", function (event) {
        event.preventDefault();
        handleCancelAction();
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