(function () {
  const ACCESS_KEY = "ue_ff_exec_vault_access_v1";
  const ACCESS_HASH = "1833f14bb64967ab765e85ad65b649d034f33e42e89d1a38378a46ce55850a1b";
  const SESSION_TTL_HOURS = 12;

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

  function isAuthorized() {
    const payload = safeRead();
    if (!payload || payload.authorized !== true) return false;
    if (typeof payload.expiresAt !== "number") return false;
    return payload.expiresAt > nowMs();
  }

  function writeAuthorizedSession() {
    try {
      const payload = {
        authorized: true,
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

  async function authorizePassword(passwordInput) {
    const entered = String(passwordInput || "").trim();
    if (!entered) return false;
    const hash = await sha256Hex(entered);
    if (hash !== ACCESS_HASH) return false;
    writeAuthorizedSession();
    return true;
  }

  function clearAuthorization() {
    try {
      window.sessionStorage.removeItem(ACCESS_KEY);
    } catch (_err) {}
  }

  function lockBody() {
    document.body.classList.add("locked");
  }

  function unlockBody() {
    document.body.classList.remove("locked");
  }

  function attachGate(config) {
    const overlay = document.getElementById(config.overlayId);
    const content = document.getElementById(config.contentId);
    const form = document.getElementById(config.formId);
    const input = document.getElementById(config.inputId);
    const error = document.getElementById(config.errorId);
    const logoutBtn = config.logoutId ? document.getElementById(config.logoutId) : null;

    if (!overlay || !content || !form || !input || !error) return;

    function unlockView() {
      overlay.classList.remove("active");
      content.classList.remove("is-locked");
      unlockBody();
    }

    function lockView() {
      overlay.classList.add("active");
      content.classList.add("is-locked");
      lockBody();
      error.textContent = "";
      input.value = "";
      window.setTimeout(() => input.focus(), 20);
    }

    if (isAuthorized()) {
      unlockView();
    } else {
      lockView();
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const ok = await authorizePassword(input.value);
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
    authorizePassword,
    clearAuthorization,
    attachGate
  };
})();
