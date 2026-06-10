(function () {
  if (window.__ueFounderSharePanelInitialized) return;
  window.__ueFounderSharePanelInitialized = true;
  if (window.self !== window.top) return;

  var ACCESS_KEY = "ue_founder_share_panel_access_v1";
  var SESSION_TTL_HOURS = 12;
  var DEFAULT_PUBLIC_ORIGIN = "https://unityenergy.com";
  var FOUNDER_ACCESS_ID_HASHES = new Set([
    "64b4d0f47c93ce23d157e68a58767356283dc9b63c459d45d0e0e39b3a64b9b9",
    "ec4f2dbb3b140095550c9afbbb69b5d6fd9e814b9da82fad0b34e9fcbe56f1cb",
    "a5790b06f63b7c1646f0de34b44fc108377a02fb07aa60b83aaff44deed06398",
    "1d9f88d73499fc756000e175df064a2b5bdd07bc23618126ad53a7d9ba23148b",
    "a9f9b8651f70c7a1b0c3e8ac702b67c5b12bf6b29f0bfe5364b3c725ffc0016e",
    "b3c21cef87a8720d12c1014cc5f4fff4c070361b7ba3d056418a189d7891e41c"
  ]);
  var SHARE_TYPES = [
    { key: "update", label: "Update", defaultTitle: "Foster Farms Executive Communications" },
    { key: "brief", label: "Brief", defaultTitle: "Foster Farms Executive Brief" },
    { key: "memo", label: "Memo", defaultTitle: "Foster Farms Executive Memo" },
    { key: "monthly", label: "Monthly", defaultTitle: "Foster Farms Monthly Update" },
    { key: "maxwellian", label: "Maxwellian", defaultTitle: "Foster Farms Maxwellian Brief" },
    { key: "private", label: "Private", defaultTitle: "Foster Farms Private Executive Brief" },
    { key: "alert", label: "Alert", defaultTitle: "Foster Farms Executive Alert" }
  ];
  var TITLE_TO_TYPE_KEY = SHARE_TYPES.reduce(function (map, entry) {
    if (entry && entry.defaultTitle) {
      map[String(entry.defaultTitle).trim()] = entry.key;
    }
    return map;
  }, {});

  function nowMs() {
    return Date.now();
  }

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function formatUeStamp(dateObj, revisionCounter) {
    var mm = pad2(dateObj.getMonth() + 1);
    var dd = pad2(dateObj.getDate());
    var parsedRevision = Number.parseInt(revisionCounter, 10);
    var normalizedRevision = Number.isFinite(parsedRevision) && parsedRevision > 0 ? parsedRevision : 1;
    var rr = pad2(normalizedRevision);
    return "UE." + mm + dd + "." + rr;
  }

  function normalizeAccessId(value) {
    var raw = String(value || "").trim().toLowerCase();
    var localPart = raw.includes("@") ? raw.split("@")[0] : raw;
    return localPart.replace(/[^a-z0-9]/g, "");
  }

  async function sha256Hex(value) {
    var bytes = new TextEncoder().encode(String(value || ""));
    var digest = await window.crypto.subtle.digest("SHA-256", bytes);
    var arr = Array.from(new Uint8Array(digest));
    return arr.map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
  }

  async function hasFounderAccessId(value) {
    var normalized = normalizeAccessId(value);
    if (!normalized) return false;
    var hash = await sha256Hex(normalized);
    return FOUNDER_ACCESS_ID_HASHES.has(hash);
  }

  function safeReadSession() {
    try {
      var raw = window.localStorage.getItem(ACCESS_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_err) {
      return null;
    }
  }

  function writeSession() {
    try {
      window.localStorage.setItem(ACCESS_KEY, JSON.stringify({
        authorized: true,
        grantedAt: new Date().toISOString(),
        expiresAt: nowMs() + (SESSION_TTL_HOURS * 60 * 60 * 1000)
      }));
    } catch (_err) {}
  }

  function clearSession() {
    try {
      window.localStorage.removeItem(ACCESS_KEY);
    } catch (_err) {}
  }

  function isAuthorized() {
    var payload = safeReadSession();
    if (!payload || payload.authorized !== true) return false;
    if (typeof payload.expiresAt !== "number") return false;
    return payload.expiresAt > nowMs();
  }

  function resolveShareTarget(targetValue) {
    var raw = String(targetValue || "").trim();
    if (!raw) raw = window.location.href;
    if (raw.startsWith("/")) return raw;
    try {
      var url = new URL(raw, window.location.href);
      var host = String(url.hostname || "").toLowerCase();
      if (host === "localhost" || host === "127.0.0.1" || host === "::1") {
        return "" + url.pathname + url.search + url.hash;
      }
      if (host === "unityenergy.com") {
        return "" + url.pathname + url.search + url.hash;
      }
      return url.toString();
    } catch (_err) {
      return raw;
    }
  }

  function getShareOrigin() {
    try {
      var currentUrl = new URL(window.location.href);
      var host = String(currentUrl.hostname || "").toLowerCase();
      if (host === "unityenergy.com" || host.endsWith(".unityenergy.com")) {
        return currentUrl.origin;
      }
    } catch (_err) {}
    return DEFAULT_PUBLIC_ORIGIN;
  }

  function buildShareUrl(typeKey, targetValue, titleOverride) {
    var selected = SHARE_TYPES.find(function (entry) { return entry.key === typeKey; }) || SHARE_TYPES[0];
    var selectedTitle = String(titleOverride || "").trim() || selected.defaultTitle;
    var stampCode = formatUeStamp(new Date(), 1);
    var shareUrl = new URL("/UnityEnergy/customer-portal/foster-farms/executive/share/" + selected.key + ".html", getShareOrigin());
    shareUrl.searchParams.set("ue_doc", stampCode);
    shareUrl.searchParams.set("ue_kind", selected.key);
    shareUrl.searchParams.set("ue_share", String(nowMs()));
    shareUrl.searchParams.set("ue_status", "published");
    shareUrl.searchParams.set("ue_rev", "UE-PANEL-" + stampCode);
    shareUrl.searchParams.set("ue_target", resolveShareTarget(targetValue));
    if (selectedTitle) {
      shareUrl.searchParams.set("ue_title", selectedTitle);
    }
    return {
      type: selected,
      stampCode: stampCode,
      title: selectedTitle,
      url: shareUrl.toString()
    };
  }

  async function copyToClipboard(text) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
        return true;
      }
    } catch (_err) {}

    try {
      var temp = document.createElement("textarea");
      temp.value = text;
      temp.setAttribute("readonly", "");
      temp.style.position = "absolute";
      temp.style.left = "-9999px";
      document.body.appendChild(temp);
      temp.select();
      var copied = document.execCommand("copy");
      document.body.removeChild(temp);
      return !!copied;
    } catch (_err2) {
      return false;
    }
  }

  function injectStyles() {
    if (document.getElementById("ueFounderSharePanelStyles")) return;
    var style = document.createElement("style");
    style.id = "ueFounderSharePanelStyles";
    style.textContent = ""
      + "#ueFounderShareLauncher{position:fixed;right:22px;bottom:24px;z-index:99998;border:1px solid rgba(65,92,44,.68);border-radius:999px;background:linear-gradient(180deg,rgba(87,123,54,.98) 0%,rgba(53,83,33,.98) 100%);color:#f7f2e5;font-size:12px;font-weight:700;letter-spacing:.04em;padding:11px 16px;cursor:pointer;box-shadow:0 10px 28px rgba(21,35,14,.28);text-transform:uppercase;}"
      + "#ueFounderSharePanel{position:fixed;right:22px;bottom:76px;z-index:99999;width:min(92vw,420px);background:rgba(248,246,238,.98);border:1px solid rgba(126,128,96,.62);border-radius:16px;box-shadow:0 18px 44px rgba(20,30,12,.28);display:none;color:#26301f;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}"
      + "#ueFounderSharePanel.is-open{display:block;}"
      + ".uefsp-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid rgba(164,164,132,.45);}"
      + ".uefsp-title{margin:0;font-size:13px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;color:#34452a;}"
      + ".uefsp-close{border:0;background:transparent;color:#4b523f;font-size:18px;cursor:pointer;line-height:1;padding:0 2px;}"
      + ".uefsp-body{padding:12px 14px 14px;display:grid;gap:10px;}"
      + ".uefsp-row{display:grid;gap:6px;}"
      + ".uefsp-label{font-size:11px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;color:#4e5845;}"
      + ".uefsp-input,.uefsp-select{width:100%;border:1px solid rgba(137,141,111,.72);border-radius:10px;background:#fff;padding:8px 10px;font-size:13px;color:#2c3624;}"
      + ".uefsp-status{font-size:12px;line-height:1.35;color:#4b523f;background:rgba(242,238,225,.92);border:1px solid rgba(188,178,144,.7);border-radius:10px;padding:8px 10px;}"
      + ".uefsp-actions{display:flex;flex-wrap:wrap;gap:8px;}"
      + ".uefsp-btn{border:1px solid rgba(112,129,81,.74);background:linear-gradient(180deg,rgba(236,242,226,.98) 0%,rgba(208,222,184,.98) 100%);color:#31442a;font-size:12px;font-weight:700;border-radius:999px;padding:8px 12px;cursor:pointer;}"
      + ".uefsp-btn.primary{border-color:rgba(63,90,39,.82);background:linear-gradient(180deg,rgba(88,123,48,.97) 0%,rgba(53,79,32,.97) 100%);color:#f7f2e5;}"
      + ".uefsp-foot{font-size:11px;color:#5b6451;line-height:1.35;}";
    document.head.appendChild(style);
  }

  function buildSmsMessage(toneValue, customLabel, titleText, shareUrl) {
    var labelMap = {
      information: "Information",
      project_update: "Project Update",
      maxwellian_brief: "Maxwellian Brief",
      custom: String(customLabel || "").trim() || "Share Update"
    };
    var toneLabel = labelMap[toneValue] || "Share Update";
    var title = String(titleText || "").trim() || document.title || "Foster Farms Executive Communications";
    return toneLabel + ": " + title + "\n" + shareUrl;
  }

  function mountPanel() {
    if (document.getElementById("ueFounderSharePanel")) return;
    injectStyles();

    var launcher = document.createElement("button");
    launcher.type = "button";
    launcher.id = "ueFounderShareLauncher";
    launcher.textContent = "Founder Share";

    var panel = document.createElement("section");
    panel.id = "ueFounderSharePanel";
    panel.innerHTML = ""
      + "<div class=\"uefsp-head\">"
      + "  <p class=\"uefsp-title\">Founder Share Panel</p>"
      + "  <button type=\"button\" class=\"uefsp-close\" id=\"uefspCloseBtn\" aria-label=\"Close share panel\">×</button>"
      + "</div>"
      + "<div class=\"uefsp-body\">"
      + "  <div class=\"uefsp-status\" id=\"uefspStatus\">Enter your Unity Access ID to unlock share controls.</div>"
      + "  <div class=\"uefsp-row\" id=\"uefspAccessRow\">"
      + "    <label class=\"uefsp-label\" for=\"uefspAccessInput\">Unity Access ID</label>"
      + "    <input class=\"uefsp-input\" id=\"uefspAccessInput\" type=\"password\" autocomplete=\"off\" placeholder=\"Unity Access ID\"/>"
      + "  </div>"
      + "  <div class=\"uefsp-actions\" id=\"uefspAccessActions\">"
      + "    <button type=\"button\" class=\"uefsp-btn primary\" id=\"uefspUnlockBtn\">Unlock</button>"
      + "    <button type=\"button\" class=\"uefsp-btn\" id=\"uefspLockBtn\">Lock</button>"
      + "  </div>"
      + "  <div class=\"uefsp-row\">"
      + "    <label class=\"uefsp-label\" for=\"uefspTypeSelect\">Share card type</label>"
      + "    <select class=\"uefsp-select\" id=\"uefspTypeSelect\"></select>"
      + "  </div>"
      + "  <div class=\"uefsp-row\">"
      + "    <label class=\"uefsp-label\" for=\"uefspTargetInput\">Target link</label>"
      + "    <input class=\"uefsp-input\" id=\"uefspTargetInput\" type=\"text\"/>"
      + "  </div>"
      + "  <div class=\"uefsp-actions\">"
      + "    <button type=\"button\" class=\"uefsp-btn\" id=\"uefspUseCurrentBtn\">Use current page</button>"
      + "  </div>"
      + "  <div class=\"uefsp-row\">"
      + "    <label class=\"uefsp-label\" for=\"uefspTitlePresetSelect\">Title preset</label>"
      + "    <select class=\"uefsp-select\" id=\"uefspTitlePresetSelect\"></select>"
      + "  </div>"
      + "  <div class=\"uefsp-row\">"
      + "    <label class=\"uefsp-label\" for=\"uefspTitleInput\">Message title</label>"
      + "    <input class=\"uefsp-input\" id=\"uefspTitleInput\" type=\"text\"/>"
      + "  </div>"
      + "  <div class=\"uefsp-row\">"
      + "    <label class=\"uefsp-label\" for=\"uefspToneSelect\">Message kind</label>"
      + "    <select class=\"uefsp-select\" id=\"uefspToneSelect\">"
      + "      <option value=\"information\">Information</option>"
      + "      <option value=\"project_update\">Project Update</option>"
      + "      <option value=\"maxwellian_brief\">Maxwellian Brief</option>"
      + "      <option value=\"custom\">Custom</option>"
      + "    </select>"
      + "  </div>"
      + "  <div class=\"uefsp-row\">"
      + "    <label class=\"uefsp-label\" for=\"uefspCustomLabelInput\">Custom kind label</label>"
      + "    <input class=\"uefsp-input\" id=\"uefspCustomLabelInput\" type=\"text\" placeholder=\"Optional custom label\"/>"
      + "  </div>"
      + "  <div class=\"uefsp-actions\">"
      + "    <button type=\"button\" class=\"uefsp-btn primary\" id=\"uefspCopySmsBtn\">Copy SMS Message + Link</button>"
      + "    <button type=\"button\" class=\"uefsp-btn\" id=\"uefspCopyLinkBtn\">Copy Link Only</button>"
      + "  </div>"
      + "  <p class=\"uefsp-foot\">Uses Unity executive share cards and attaches your selected target URL as the destination.</p>"
      + "</div>";

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    var closeBtn = document.getElementById("uefspCloseBtn");
    var statusNode = document.getElementById("uefspStatus");
    var accessRow = document.getElementById("uefspAccessRow");
    var accessInput = document.getElementById("uefspAccessInput");
    var unlockBtn = document.getElementById("uefspUnlockBtn");
    var lockBtn = document.getElementById("uefspLockBtn");
    var typeSelect = document.getElementById("uefspTypeSelect");
    var targetInput = document.getElementById("uefspTargetInput");
    var useCurrentBtn = document.getElementById("uefspUseCurrentBtn");
    var titlePresetSelect = document.getElementById("uefspTitlePresetSelect");
    var titleInput = document.getElementById("uefspTitleInput");
    var toneSelect = document.getElementById("uefspToneSelect");
    var customLabelInput = document.getElementById("uefspCustomLabelInput");
    var copySmsBtn = document.getElementById("uefspCopySmsBtn");
    var copyLinkBtn = document.getElementById("uefspCopyLinkBtn");

    SHARE_TYPES.forEach(function (entry) {
      var opt = document.createElement("option");
      opt.value = entry.key;
      opt.textContent = entry.label;
      typeSelect.appendChild(opt);
    });
    var titlePresetOptions = [];
    function appendTitlePreset(value) {
      var normalized = String(value || "").trim();
      if (!normalized || titlePresetOptions.indexOf(normalized) !== -1) return;
      titlePresetOptions.push(normalized);
      var opt = document.createElement("option");
      opt.value = normalized;
      opt.textContent = normalized;
      titlePresetSelect.appendChild(opt);
    }
    var customTitlePresetOpt = document.createElement("option");
    customTitlePresetOpt.value = "__custom__";
    customTitlePresetOpt.textContent = "Custom (editable)";
    titlePresetSelect.appendChild(customTitlePresetOpt);
    SHARE_TYPES.forEach(function (entry) {
      appendTitlePreset(entry.defaultTitle);
    });
    appendTitlePreset("Foster Farms Project Update");

    targetInput.value = window.location.href;
    typeSelect.value = "update";
    titlePresetSelect.value = "Foster Farms Executive Communications";
    titleInput.value = "Foster Farms Executive Communications";

    function setStatus(message) {
      statusNode.textContent = message;
    }

    function refreshUiState() {
      var unlocked = isAuthorized();
      accessRow.style.display = unlocked ? "none" : "grid";
      unlockBtn.style.display = unlocked ? "none" : "inline-flex";
      lockBtn.style.display = unlocked ? "inline-flex" : "none";
      typeSelect.disabled = !unlocked;
      targetInput.disabled = !unlocked;
      useCurrentBtn.disabled = !unlocked;
      titlePresetSelect.disabled = !unlocked;
      titleInput.disabled = !unlocked;
      toneSelect.disabled = !unlocked;
      customLabelInput.disabled = !unlocked;
      copySmsBtn.disabled = !unlocked;
      copyLinkBtn.disabled = !unlocked;
      if (unlocked) {
        setStatus("Founder access unlocked. Choose type, set target link, then copy your message.");
      } else {
        setStatus("Enter your Unity Access ID to unlock share controls.");
      }
    }
    function closePanelAndLock() {
      panel.classList.remove("is-open");
      clearSession();
      accessInput.value = "";
      refreshUiState();
    }

    launcher.addEventListener("click", function () {
      panel.classList.toggle("is-open");
      if (panel.classList.contains("is-open")) {
        refreshUiState();
        if (!isAuthorized()) {
          window.setTimeout(function () { accessInput.focus(); }, 30);
        }
      } else {
        closePanelAndLock();
      }
    });

    closeBtn.addEventListener("click", function () {
      closePanelAndLock();
    });

    window.addEventListener("keydown", function (event) {
      if (!event || event.key !== "Escape") return;
      if (!panel.classList.contains("is-open")) return;
      closePanelAndLock();
    });

    unlockBtn.addEventListener("click", async function () {
      var rawValue = String(accessInput.value || "").trim();
      if (!rawValue) {
        setStatus("Unity Access ID is required.");
        return;
      }
      setStatus("Checking Unity Access ID…");
      var ok = await hasFounderAccessId(rawValue);
      if (!ok) {
        setStatus("Unity Access ID not recognized.");
        return;
      }
      writeSession();
      accessInput.value = "";
      refreshUiState();
    });

    lockBtn.addEventListener("click", function () {
      clearSession();
      refreshUiState();
    });

    useCurrentBtn.addEventListener("click", function () {
      targetInput.value = window.location.href;
      setStatus("Target set to current page.");
    });
    typeSelect.addEventListener("change", function () {
      var selected = SHARE_TYPES.find(function (entry) { return entry.key === typeSelect.value; });
      if (!selected || !selected.defaultTitle) return;
      titleInput.value = selected.defaultTitle;
      if (titlePresetSelect) {
        titlePresetSelect.value = selected.defaultTitle;
      }
      setStatus("Title preset applied for " + selected.label + ".");
    });
    titlePresetSelect.addEventListener("change", function () {
      var selectedValue = String(titlePresetSelect.value || "");
      if (!selectedValue || selectedValue === "__custom__") return;
      titleInput.value = selectedValue;
      var matchedType = TITLE_TO_TYPE_KEY[selectedValue];
      if (matchedType && typeSelect.value !== matchedType) {
        typeSelect.value = matchedType;
      }
      setStatus("Preset title loaded. You can still edit it before copying.");
    });
    titleInput.addEventListener("input", function () {
      var rawTitle = String(titleInput.value || "").trim();
      if (!rawTitle || titlePresetOptions.indexOf(rawTitle) === -1) {
        titlePresetSelect.value = "__custom__";
      } else {
        titlePresetSelect.value = rawTitle;
      }
      var matchedType = TITLE_TO_TYPE_KEY[rawTitle];
      if (matchedType) {
        typeSelect.value = matchedType;
      }
    });

    copyLinkBtn.addEventListener("click", async function () {
      if (!isAuthorized()) {
        refreshUiState();
        return;
      }
      var payload = buildShareUrl(typeSelect.value, targetInput.value, titleInput.value);
      var ok = await copyToClipboard(payload.url);
      setStatus(ok ? (payload.type.label + " link copied · " + payload.stampCode + " · " + payload.title) : "Copy failed.");
    });

    copySmsBtn.addEventListener("click", async function () {
      if (!isAuthorized()) {
        refreshUiState();
        return;
      }
      var payload = buildShareUrl(typeSelect.value, targetInput.value, titleInput.value);
      var smsMessage = buildSmsMessage(
        toneSelect.value,
        customLabelInput.value,
        titleInput.value,
        payload.url
      );
      var ok = await copyToClipboard(smsMessage);
      setStatus(ok ? ("SMS message + " + payload.type.label + " link copied.") : "Copy failed.");
    });

    refreshUiState();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountPanel);
  } else {
    mountPanel();
  }
})();
