(function () {
  const ACCESS_KEY = "ue_ff_exec_vault_access_v1";
  const DEFAULT_ACCESS_PASSWORD = "FosterFarms!";
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
  function normalizeRecipientKey(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
  }
  function normalizeRouteAddress(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9@._+-]/g, "");
  }
  function extractDomainValue(value) {
    const normalized = normalizeRouteAddress(value);
    if (!normalized) return "";
    if (normalized.includes("@")) {
      return normalized.split("@").pop().replace(/[^a-z0-9.-]/g, "");
    }
    return normalized.replace(/^@+/, "").replace(/[^a-z0-9.-]/g, "");
  }
  function buildRecipientAllowlist(values) {
    const allowlist = new Set();
    if (!Array.isArray(values)) return allowlist;
    values.forEach((value) => {
      const normalized = normalizeRecipientKey(value);
      if (normalized) {
        allowlist.add(normalized);
      }
    });
    return allowlist;
  }
  function buildDomainAllowlist(values) {
    const allowlist = new Set();
    if (!Array.isArray(values)) return allowlist;
    values.forEach((value) => {
      const normalized = extractDomainValue(value);
      if (normalized) {
        allowlist.add(normalized);
      }
    });
    return allowlist;
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
    const requiredPassword = String((options && options.accessPassword) || DEFAULT_ACCESS_PASSWORD).trim();
    if (!requiredPassword || entered !== requiredPassword) return false;
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
    const clearAccessSelector = String((config && config.clearAccessSelector) || "").trim();

    if (!overlay || !content || !form || !input || !error) return;
    let founderPromptActive = false;
    const accessPassword = String(config && config.accessPassword ? config.accessPassword : DEFAULT_ACCESS_PASSWORD).trim();
    const requirePassword = !!(config && config.requirePassword === true);
    const recipientParam = String((config && config.recipientParam) || "ue_recipient").trim() || "ue_recipient";
    const recipientAllowlist = buildRecipientAllowlist(config && config.recipientAllowlist);
    const customerParam = String((config && config.customerParam) || "ue_customer").trim() || "ue_customer";
    const requiredCustomerKey = normalizeRecipientKey(config && config.requiredCustomerKey);
    const senderParam = String((config && config.senderParam) || "ue_from").trim() || "ue_from";
    const senderDomainAllowlist = buildDomainAllowlist(config && config.senderDomainAllowlist);
    const recipientEmailParam = String((config && config.recipientEmailParam) || "ue_to").trim() || "ue_to";
    const recipientDomainAllowlist = buildDomainAllowlist(config && config.recipientDomainAllowlist);
    const currentUrl = new URL(window.location.href);
    const customerKey = normalizeRecipientKey(currentUrl.searchParams.get(customerParam));
    const recipientCandidate = normalizeRecipientKey(currentUrl.searchParams.get(recipientParam));
    const senderDomain = extractDomainValue(currentUrl.searchParams.get(senderParam));
    const recipientDomain = extractDomainValue(currentUrl.searchParams.get(recipientEmailParam));
    const hasAllowlistedRecipientAccess = !!(recipientCandidate && recipientAllowlist.has(recipientCandidate));
    const hasTrustedEmailRouteAccess = !!(
      senderDomain &&
      recipientDomain &&
      senderDomainAllowlist.size > 0 &&
      recipientDomainAllowlist.size > 0 &&
      senderDomainAllowlist.has(senderDomain) &&
      recipientDomainAllowlist.has(recipientDomain) &&
      (!requiredCustomerKey || customerKey === requiredCustomerKey)
    );
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
      clearAuthorization();
      notifyAccessChange();
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

    function handleClearAccessNavigation() {
      clearAuthorization();
      notifyAccessChange();
    }

    function handleFounderPromptRequest(event) {
      const detail = event && event.detail ? event.detail : null;
      const targetOverlayId = detail && typeof detail.overlayId === "string" ? detail.overlayId : "";
      if (targetOverlayId && targetOverlayId !== config.overlayId) return;
      if (!isAuthorized()) {
        if (hasAllowlistedRecipientAccess || hasTrustedEmailRouteAccess) {
          writeAuthorizedSession(false);
        }
        if (requirePassword && !isAuthorized()) {
          lockView();
          return;
        }
      }
      lockView({ founderPrompt: true });
    }

    window.addEventListener(FOUNDER_PROMPT_EVENT, handleFounderPromptRequest);

    if (isAuthorized()) {
      unlockView();
    } else if (hasAllowlistedRecipientAccess || hasTrustedEmailRouteAccess) {
      writeAuthorizedSession(false);
      unlockView();
    } else if (requirePassword) {
      lockView();
    } else {
      writeAuthorizedSession(false);
      unlockView();
    }

    form.addEventListener("submit", async function (event) {
      event.preventDefault();
      const enteredPassword = String(input.value || "").trim();
      const enteredFounderId = founderIdInput ? String(founderIdInput.value || "").trim() : "";
      const shouldAttemptFounderAccess =
        !!founderIdInput &&
        !!enteredFounderId &&
        (founderPromptActive || !enteredPassword);

      if (shouldAttemptFounderAccess) {
        const founderAccess = await hasFounderAccessId(enteredFounderId);
        if (founderAccess) {
          writeAuthorizedSession(true);
          unlockView();
          return;
        }
        if (founderPromptActive || !enteredPassword) {
          error.textContent = "Unity Access ID not recognized. Please try again.";
          return;
        }
      }

      if (founderPromptActive && isAuthorized()) {
        error.textContent = "Enter your Unity Access ID to unlock secure link sharing.";
        return;
      }
      if (!requirePassword) {
        error.textContent = "Password entry is disabled for this development release.";
        return;
      }

      const ok = await authorizePassword(enteredPassword, {
        founderAccess: false,
        accessPassword
      });
      if (!ok) {
        error.textContent = "Password not recognized. Please try again.";
        return;
      }
      unlockView();
    });

    if (logoutBtn) {
      logoutBtn.addEventListener("click", function () {
        clearAuthorization();
        if (requirePassword) {
          lockView();
          return;
        }
        writeAuthorizedSession(false);
        unlockView();
      });
    }

    if (cancelBtn) {
      cancelBtn.addEventListener("click", function (event) {
        event.preventDefault();
        handleCancelAction();
      });
    }

    if (clearAccessSelector) {
      const clearAccessNodes = document.querySelectorAll(clearAccessSelector);
      clearAccessNodes.forEach(function (node) {
        if (!node) return;
        node.addEventListener("click", handleClearAccessNavigation);
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