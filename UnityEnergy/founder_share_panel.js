(function () {
  if (window.__ueFounderSharePanelInitialized) return;
  window.__ueFounderSharePanelInitialized = true;
  if (window.self !== window.top) return;

  var ACCESS_KEY = "ue_founder_share_panel_access_v1";
  var PANEL_OPEN_KEY = "ue_founder_share_panel_open_v1";
  var SESSION_TTL_HOURS = 12;
  var DEFAULT_PUBLIC_ORIGIN = "https://unityenergy.com";
  var DAILY_STAMP_COUNTER_KEY = "ue_exec_share_daily_counter_v1";
  var TITLE_PRESET_STORAGE_KEY = "ue_founder_share_panel_title_presets_v1";
  var TITLE_PRESET_STORAGE_LIMIT = 24;
  var FOUNDER_ACCESS_ID_HASHES = new Set([
    "64b4d0f47c93ce23d157e68a58767356283dc9b63c459d45d0e0e39b3a64b9b9",
    "ec4f2dbb3b140095550c9afbbb69b5d6fd9e814b9da82fad0b34e9fcbe56f1cb",
    "a5790b06f63b7c1646f0de34b44fc108377a02fb07aa60b83aaff44deed06398",
    "1d9f88d73499fc756000e175df064a2b5bdd07bc23618126ad53a7d9ba23148b",
    "a9f9b8651f70c7a1b0c3e8ac702b67c5b12bf6b29f0bfe5364b3c725ffc0016e",
    "b3c21cef87a8720d12c1014cc5f4fff4c070361b7ba3d056418a189d7891e41c"
  ]);
  var DEFAULT_PROVIDER_NAME = "Unity Energy";
  var DEFAULT_TITLE_PRESETS = Object.freeze([
    "Unity Energy Electrical Intelligence",
    "Maxwellian Intelligence"
  ]);
  var ELECTRICAL_TITLE_VARIANTS = [
    "Electrical Intelligence",
    "Electrical Visibility",
    "Electrical Condition",
    "Electrical Behavior",
    "Electrical Exposure",
    "Electrical Consequence",
    "Electrical Optimization",
    "Energy Field Intelligence",
    "Electrical Infrastructure Review",
    "Operational Energy Review"
  ];
  var CUSTOMER_NAME_OVERRIDES = Object.freeze({
    "foster-farms": "Foster Farms",
    "fosterfarms": "Foster Farms",
    "tyson": "Tyson",
    "tyson-foods": "Tyson",
    "tysonfoods": "Tyson",
    "mid": "MID",
    "aep": "AEP",
    "unity-energy": "Unity Energy",
    "unityenergy": "Unity Energy"
  });
  var CUSTOMER_ROUTE_DEFAULTS = Object.freeze({
    "foster-farms": Object.freeze({
      customerKey: "foster-farms",
      recipientKey: "team",
      senderAddress: "sharemail@unityenergy.com",
      recipientAddress: "team@fosterfarms.com"
    }),
    "fosterfarms": Object.freeze({
      customerKey: "foster-farms",
      recipientKey: "team",
      senderAddress: "sharemail@unityenergy.com",
      recipientAddress: "team@fosterfarms.com"
    })
  });
  // Master share-card set (authoritative, 8 cards):
  // WelcomeWebsite, ProjectUpdate, ProjectMemo, ProjectReport,
  // MonthlyReport, MaxwellianNews, PrivateConfidential, SpecialAlert.
  var SHARE_TYPES = [
    { key: "website", label: "WelcomeWebsite" },
    { key: "project-update", label: "ProjectUpdate" },
    { key: "project-memo", label: "ProjectMemo" },
    { key: "project-report", label: "ProjectReport" },
    { key: "monthly-report", label: "MonthlyReport" },
    { key: "maxwellian-news", label: "MaxwellianNews" },
    { key: "private-confidential", label: "PrivateConfidential" },
    { key: "special-alert", label: "SpecialAlert" }
  ];
  var SHARE_TEMPLATE_SLUG_BY_KEY = Object.freeze({
    website: "alert",
    "project-update": "update",
    "project-memo": "memo",
    "project-report": "report",
    "monthly-report": "monthly",
    "maxwellian-news": "maxwellian",
    "private-confidential": "private",
    "special-alert": "special-alert",
    update: "update",
    brief: "brief",
    memo: "memo",
    report: "report",
    monthly: "monthly",
    maxwellian: "maxwellian",
    private: "private",
    specialalert: "special-alert",
    alert: "alert"
  });
  var WEBSITE_PRESET_TEMPLATE_SLUG_BY_VARIANT = Object.freeze({
    "Electrical Intelligence": "website",
    "Electrical Visibility": "website-electrical-visibility",
    "Electrical Condition": "website-electrical-condition",
    "Electrical Behavior": "website-electrical-behavior",
    "Electrical Exposure": "website-electrical-exposure",
    "Electrical Consequence": "website-electrical-consequence",
    "Electrical Optimization": "website-electrical-optimization",
    "Energy Field Intelligence": "website-energy-field-intelligence",
    "Electrical Infrastructure Review": "website-electrical-infrastructure-review",
    "Operational Energy Review": "website-operational-energy-review"
  });
  var PROJECT_UPDATE_PRESET_TEMPLATE_SLUG_BY_VARIANT = Object.freeze({
    "Electrical Intelligence": "update",
    "Electrical Visibility": "update-electrical-visibility",
    "Electrical Condition": "update-electrical-condition",
    "Electrical Behavior": "update-electrical-behavior",
    "Electrical Exposure": "update-electrical-exposure",
    "Electrical Consequence": "update-electrical-consequence",
    "Electrical Optimization": "update-electrical-optimization",
    "Energy Field Intelligence": "update-energy-field-intelligence",
    "Electrical Infrastructure Review": "update-electrical-infrastructure-review",
    "Operational Energy Review": "update-operational-energy-review"
  });
  var MAXWELLIAN_PRESET_TEMPLATE_SLUG_BY_TITLE = Object.freeze({
    "Foster Farms Electrical Intelligence": "maxwellian",
    "Unity Energy Electrical Intelligence": "maxwellian-unity-energy-electrical-intelligence",
    "Maxwellian Intelligence": "maxwellian-maxwellian-intelligence",
    "Cognition Partner Intelligence": "maxwellian-cognition-partner-intelligence",
    "AvCo Building Electrical Intelligence": "maxwellian-avco-building-electrical-intelligence"
  });
  var MONTHLY_PRESET_TEMPLATE_SLUG_BY_TITLE = Object.freeze({
    "Foster Farms Electrical Intelligence": "monthly",
    "Foster Farms June 2026 Data": "monthly-report",
    "Foster Farms June2026 Data": "monthly-report",
    "Foster Farms June2026 Electrical Data": "monthly-report",
    "Foster Farms June 2026 Electrical Data": "monthly-report"
  });
  // Maps runtime kind keys to master base-card assets in:
  // UnityEnergy/assets/images/share-card-bases/
  var SHARE_CARD_IMAGE_FILENAME_BY_KEY = Object.freeze({
    website: "WelcomeWebsite.png",
    "project-update": "ProjectUpdate.png",
    "project-memo": "ProjectMemo.png",
    "project-report": "ProjectReport.png",
    "monthly-report": "MonthlyReport.png",
    "maxwellian-news": "MaxwellianNews.png",
    "private-confidential": "PrivateConfidential.png",
    "special-alert": "SpecialAlert.png"
  });
  var CUSTOMER_PORTAL_PATH_SEGMENT = "/customer-portal/";
  var HOMEPAGE_HOTSPOT_SELECTOR = ".hero.hero-raster-rebuild";
  var HOMEPAGE_HOTSPOT_ID = "ueFounderShareDotHotspot";
  var GLOBAL_HOTSPOT_ID = "ueFounderShareGlobalHotspot";
  var HOMEPAGE_HOTSPOT = Object.freeze({
    left: "calc(52.5% + 400px)",
    top: "calc(22.5% - 0px)",
    sizeDesktopPx: 25,
    sizeMobilePx: 40
  });
  var GLOBAL_HOTSPOT = Object.freeze({
    top: "18px",
    right: "20px",
    sizeDesktopPx: 24,
    sizeMobilePx: 40
  });

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

  function parseUeStamp(rawValue) {
    var value = String(rawValue || "").trim().toUpperCase();
    if (/^UE\.\d{2}\.\d{4}$/.test(value)) return value;
    if (/^UE\.\d{4}\.\d{2}$/.test(value)) return value;
    return null;
  }

  function extractRevisionFromStamp(stampCode) {
    var revisionedMatch = /^UE\.\d{4}\.(\d{2})$/.exec(String(stampCode || ""));
    if (!revisionedMatch) return 1;
    var parsedRevision = Number.parseInt(revisionedMatch[1], 10);
    return Number.isFinite(parsedRevision) && parsedRevision > 0 ? parsedRevision : 1;
  }

  function stampToDate(stampCode) {
    var legacyMatch = /^UE\.(\d{2})\.(\d{2})(\d{2})$/.exec(stampCode || "");
    var revisionedMatch = /^UE\.(\d{2})(\d{2})\.(\d{2})$/.exec(stampCode || "");
    var year;
    var month;
    var day;
    if (legacyMatch) {
      year = Number("20" + legacyMatch[1]);
      month = Number(legacyMatch[2]);
      day = Number(legacyMatch[3]);
    } else if (revisionedMatch) {
      year = new Date().getFullYear();
      month = Number(revisionedMatch[1]);
      day = Number(revisionedMatch[2]);
    } else {
      return null;
    }
    var dateObj = new Date(year, month - 1, day);
    if (
      dateObj.getFullYear() !== year ||
      dateObj.getMonth() !== month - 1 ||
      dateObj.getDate() !== day
    ) {
      return null;
    }
    return dateObj;
  }

  function buildDailyStampKey(dateObj) {
    if (!(dateObj instanceof Date) || Number.isNaN(dateObj.getTime())) return "";
    var yyyy = String(dateObj.getFullYear());
    var mm = pad2(dateObj.getMonth() + 1);
    var dd = pad2(dateObj.getDate());
    return yyyy + "-" + mm + "-" + dd;
  }

  function readDailyStampCounterState() {
    try {
      var raw = window.localStorage.getItem(DAILY_STAMP_COUNTER_KEY);
      if (!raw) return null;
      var parsed = JSON.parse(raw);
      var dayKey = String((parsed && parsed.dayKey) || "").trim();
      var lastRevision = Number.parseInt(parsed && parsed.lastRevision, 10);
      if (!dayKey) return null;
      if (!Number.isFinite(lastRevision) || lastRevision < 1) return null;
      return { dayKey: dayKey, lastRevision: lastRevision };
    } catch (_err) {
      return null;
    }
  }

  function writeDailyStampCounterState(dayKey, lastRevision) {
    if (!dayKey) return;
    var parsedRevision = Number.parseInt(lastRevision, 10);
    if (!Number.isFinite(parsedRevision) || parsedRevision < 1) return;
    try {
      window.localStorage.setItem(DAILY_STAMP_COUNTER_KEY, JSON.stringify({
        dayKey: dayKey,
        lastRevision: parsedRevision,
        updatedAt: new Date().toISOString()
      }));
    } catch (_err) {}
  }

  function seedDailyStampCounterFromStamp(stampCode) {
    var normalizedStamp = parseUeStamp(stampCode);
    if (!normalizedStamp) return;
    var stampDate = stampToDate(normalizedStamp);
    if (!stampDate) return;
    var dayKey = buildDailyStampKey(stampDate);
    if (!dayKey) return;
    var stampRevision = extractRevisionFromStamp(normalizedStamp);
    var state = readDailyStampCounterState();
    if (state && state.dayKey === dayKey && state.lastRevision >= stampRevision) return;
    writeDailyStampCounterState(dayKey, stampRevision);
  }

  function allocateNextDailyStampCode(dateObj, minimumRevision) {
    var safeDate = (dateObj instanceof Date && !Number.isNaN(dateObj.getTime())) ? dateObj : new Date();
    var dayKey = buildDailyStampKey(safeDate);
    var parsedMinimum = Number.parseInt(minimumRevision, 10);
    var minRevision = Number.isFinite(parsedMinimum) && parsedMinimum > 0 ? parsedMinimum : 1;
    var state = readDailyStampCounterState();
    var nextRevision = minRevision;
    if (state && state.dayKey === dayKey) {
      nextRevision = Math.max(minRevision, state.lastRevision + 1);
    }
    writeDailyStampCounterState(dayKey, nextRevision);
    return formatUeStamp(safeDate, nextRevision);
  }

  function seedDailyCounterFromCurrentPage() {
    try {
      var pageUrl = new URL(window.location.href);
      seedDailyStampCounterFromStamp(pageUrl.searchParams.get("ue_doc"));
    } catch (_err) {}
  }

  function normalizeCustomerToken(value) {
    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function canonicalizeCustomerKey(value) {
    var normalized = normalizeCustomerToken(value);
    if (normalized === "fosterfarms") return "foster-farms";
    return normalized;
  }

  function normalizeRecipientKey(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
  }

  function normalizeRouteAddress(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9@._+-]/g, "");
  }

  function extractCustomerKeyFromPathname(pathname) {
    var customerPortalMatch = /\/customer-portal\/([^\/?#]+)/i.exec(pathname || "");
    if (customerPortalMatch && customerPortalMatch[1]) {
      return canonicalizeCustomerKey(customerPortalMatch[1]);
    }
    var customerDirectoryMatch = /\/Customers\/([^\/?#]+)/i.exec(pathname || "");
    if (customerDirectoryMatch && customerDirectoryMatch[1]) {
      return canonicalizeCustomerKey(customerDirectoryMatch[1]);
    }
    return "";
  }

  function parseRouteContextFromUrl(urlObj) {
    if (!urlObj) {
      return {
        recipientKey: "",
        customerKey: "",
        senderAddress: "",
        recipientAddress: ""
      };
    }
    var customerKeyFromQuery = canonicalizeCustomerKey(urlObj.searchParams.get("ue_customer"));
    return {
      recipientKey: normalizeRecipientKey(urlObj.searchParams.get("ue_recipient")),
      customerKey: customerKeyFromQuery || extractCustomerKeyFromPathname(urlObj.pathname),
      senderAddress: normalizeRouteAddress(urlObj.searchParams.get("ue_from")),
      recipientAddress: normalizeRouteAddress(urlObj.searchParams.get("ue_to"))
    };
  }

  function resolveRouteDefaults(customerKey) {
    var normalized = canonicalizeCustomerKey(customerKey);
    if (!normalized) return null;
    return CUSTOMER_ROUTE_DEFAULTS[normalized] || null;
  }

  function extractShareRouteContext(rawTargetValue) {
    var targetUrl = null;
    var currentUrl = null;
    try {
      targetUrl = new URL(String(rawTargetValue || "").trim() || window.location.href, window.location.href);
    } catch (_err) {}
    try {
      currentUrl = new URL(window.location.href);
    } catch (_err2) {}
    var targetContext = parseRouteContextFromUrl(targetUrl);
    var currentContext = parseRouteContextFromUrl(currentUrl);
    var customerKey =
      canonicalizeCustomerKey(targetContext.customerKey) ||
      canonicalizeCustomerKey(currentContext.customerKey) ||
      "foster-farms";
    var defaults = resolveRouteDefaults(customerKey);
    var defaultCustomerKey = defaults ? canonicalizeCustomerKey(defaults.customerKey) : "";
    return {
      recipientKey:
        targetContext.recipientKey ||
        currentContext.recipientKey ||
        (defaults ? normalizeRecipientKey(defaults.recipientKey) : ""),
      customerKey: customerKey || defaultCustomerKey,
      senderAddress:
        targetContext.senderAddress ||
        currentContext.senderAddress ||
        (defaults ? normalizeRouteAddress(defaults.senderAddress) : ""),
      recipientAddress:
        targetContext.recipientAddress ||
        currentContext.recipientAddress ||
        (defaults ? normalizeRouteAddress(defaults.recipientAddress) : "")
    };
  }

  function formatCustomerDisplayNameFromToken(token) {
    var normalized = normalizeCustomerToken(token);
    if (!normalized) return "";
    if (CUSTOMER_NAME_OVERRIDES[normalized]) return CUSTOMER_NAME_OVERRIDES[normalized];
    return normalized
      .split("-")
      .filter(Boolean)
      .map(function (part) {
        if (part.length <= 3) return part.toUpperCase();
        return part.charAt(0).toUpperCase() + part.slice(1);
      })
      .join(" ");
  }

  function resolveCustomerDisplayName(rawTargetValue) {
    var sourceValue = String(rawTargetValue || "").trim();
    var candidates = [];
    try {
      var parsed = new URL(sourceValue || window.location.href, window.location.href);
      candidates.push(parsed.searchParams.get("ue_customer"));
      var customerPortalMatch = /\/customer-portal\/([^\/?#]+)/i.exec(parsed.pathname);
      if (customerPortalMatch && customerPortalMatch[1]) {
        candidates.push(customerPortalMatch[1]);
      }
      var customerDirectoryMatch = /\/Customers\/([^\/?#]+)/i.exec(parsed.pathname);
      if (customerDirectoryMatch && customerDirectoryMatch[1]) {
        candidates.push(customerDirectoryMatch[1]);
      }
    } catch (_err) {}
    for (var i = 0; i < candidates.length; i += 1) {
      var displayName = formatCustomerDisplayNameFromToken(candidates[i]);
      if (displayName) return displayName;
    }
    return "";
  }

  function buildElectricalCategoryTitle(customerName, categoryLabel) {
    var normalizedCustomerName = String(customerName || "").trim() || DEFAULT_PROVIDER_NAME;
    var normalizedCategory = String(categoryLabel || "").trim() || ELECTRICAL_TITLE_VARIANTS[0];
    return normalizedCustomerName + " " + normalizedCategory;
  }

  function normalizeTitlePreset(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }
  function buildTemplateRoutingTitleKey(value) {
    return normalizeTitlePreset(value).toLowerCase().replace(/[^a-z0-9]+/g, "");
  }

  function titlePresetKey(value) {
    return normalizeTitlePreset(value).toLowerCase();
  }

  function readSavedTitlePresets() {
    try {
      var raw = window.localStorage.getItem(TITLE_PRESET_STORAGE_KEY);
      if (!raw) return [];
      var parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      var deduped = [];
      var seen = new Set();
      for (var i = 0; i < parsed.length; i += 1) {
        var normalized = normalizeTitlePreset(parsed[i]);
        var key = titlePresetKey(normalized);
        if (!normalized || !key || seen.has(key)) continue;
        seen.add(key);
        deduped.push(normalized);
        if (deduped.length >= TITLE_PRESET_STORAGE_LIMIT) break;
      }
      return deduped;
    } catch (_err) {
      return [];
    }
  }

  function writeSavedTitlePresets(values) {
    if (!Array.isArray(values)) return;
    var deduped = [];
    var seen = new Set();
    for (var i = 0; i < values.length; i += 1) {
      var normalized = normalizeTitlePreset(values[i]);
      var key = titlePresetKey(normalized);
      if (!normalized || !key || seen.has(key)) continue;
      seen.add(key);
      deduped.push(normalized);
      if (deduped.length >= TITLE_PRESET_STORAGE_LIMIT) break;
    }
    try {
      window.localStorage.setItem(TITLE_PRESET_STORAGE_KEY, JSON.stringify(deduped));
    } catch (_err) {}
  }

  function getConfiguredTitlePresets() {
    var presets = [];
    var seen = new Set();
    function appendPreset(value) {
      var normalized = normalizeTitlePreset(value);
      var key = titlePresetKey(normalized);
      if (!normalized || !key || seen.has(key)) return;
      seen.add(key);
      presets.push(normalized);
    }
    DEFAULT_TITLE_PRESETS.forEach(appendPreset);
    readSavedTitlePresets().forEach(appendPreset);
    return presets;
  }

  function rememberTitlePreset(value) {
    var normalized = normalizeTitlePreset(value);
    var key = titlePresetKey(normalized);
    if (!normalized || !key) return false;
    var isDefaultPreset = DEFAULT_TITLE_PRESETS.some(function (item) {
      return titlePresetKey(item) === key;
    });
    if (isDefaultPreset) return false;
    var saved = readSavedTitlePresets().filter(function (item) {
      return titlePresetKey(item) !== key;
    });
    saved.unshift(normalized);
    writeSavedTitlePresets(saved);
    return true;
  }


  function resolveWebsiteTemplateSlugForTitle(titleText) {
    var normalizedTitle = String(titleText || "").trim().toLowerCase();
    if (!normalizedTitle) return "website";
    for (var i = 0; i < ELECTRICAL_TITLE_VARIANTS.length; i += 1) {
      var variant = String(ELECTRICAL_TITLE_VARIANTS[i] || "").trim();
      if (!variant) continue;
      var normalizedVariant = variant.toLowerCase();
      if (normalizedTitle === normalizedVariant || normalizedTitle.endsWith(" " + normalizedVariant)) {
        return WEBSITE_PRESET_TEMPLATE_SLUG_BY_VARIANT[variant] || "website";
      }
    }
    return "alert";
  }
  function resolveProjectUpdateTemplateSlugForTitle(titleText) {
    var normalizedTitle = String(titleText || "").trim().toLowerCase();
    if (!normalizedTitle) return "update";
    for (var i = 0; i < ELECTRICAL_TITLE_VARIANTS.length; i += 1) {
      var variant = String(ELECTRICAL_TITLE_VARIANTS[i] || "").trim();
      if (!variant) continue;
      var normalizedVariant = variant.toLowerCase();
      if (normalizedTitle === normalizedVariant || normalizedTitle.endsWith(" " + normalizedVariant)) {
        return PROJECT_UPDATE_PRESET_TEMPLATE_SLUG_BY_VARIANT[variant] || "update";
      }
    }
    return "update";
  }
  function resolveMaxwellianTemplateSlugForTitle(titleText) {
    var normalizedTitle = normalizeTitlePreset(titleText).toLowerCase();
    if (!normalizedTitle) return "maxwellian";
    var titleKeys = Object.keys(MAXWELLIAN_PRESET_TEMPLATE_SLUG_BY_TITLE);
    for (var i = 0; i < titleKeys.length; i += 1) {
      var titleKey = normalizeTitlePreset(titleKeys[i]);
      if (!titleKey) continue;
      if (normalizedTitle === titleKey.toLowerCase()) {
        return MAXWELLIAN_PRESET_TEMPLATE_SLUG_BY_TITLE[titleKey] || "maxwellian";
      }
    }
    return "maxwellian";
  }
  function resolveMonthlyTemplateSlugForTitle(titleText) {
    var normalizedTitle = normalizeTitlePreset(titleText).toLowerCase();
    if (!normalizedTitle) return "monthly";
    var normalizedTitleKey = buildTemplateRoutingTitleKey(normalizedTitle);
    var titleKeys = Object.keys(MONTHLY_PRESET_TEMPLATE_SLUG_BY_TITLE);
    for (var i = 0; i < titleKeys.length; i += 1) {
      var titleKey = normalizeTitlePreset(titleKeys[i]);
      if (!titleKey) continue;
      if (
        normalizedTitle === titleKey.toLowerCase() ||
        normalizedTitleKey === buildTemplateRoutingTitleKey(titleKey)
      ) {
        return MONTHLY_PRESET_TEMPLATE_SLUG_BY_TITLE[titleKey] || "monthly";
      }
    }
    if (
      normalizedTitleKey.indexOf("fosterfarms") !== -1 &&
      normalizedTitleKey.indexOf("june2026") !== -1 &&
      normalizedTitleKey.indexOf("data") !== -1
    ) {
      return "monthly-report";
    }
    return "monthly";
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

  function readPanelOpenState() {
    try {
      return window.localStorage.getItem(PANEL_OPEN_KEY) === "1";
    } catch (_err) {
      return false;
    }
  }

  function writePanelOpenState(isOpen) {
    try {
      if (isOpen) {
        window.localStorage.setItem(PANEL_OPEN_KEY, "1");
      } else {
        window.localStorage.removeItem(PANEL_OPEN_KEY);
      }
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
      return new URL(raw, window.location.href).toString();
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
    var routeContext = extractShareRouteContext(targetValue);
    var fallbackTitle =
      normalizeTitlePreset(DEFAULT_TITLE_PRESETS[0]) ||
      buildElectricalCategoryTitle(DEFAULT_PROVIDER_NAME, ELECTRICAL_TITLE_VARIANTS[0]);
    var selectedTitle = String(titleOverride || "").trim() || fallbackTitle;
    var templateSlug = SHARE_TEMPLATE_SLUG_BY_KEY[selected.key] || selected.key;
    if (selected.key === "website") {
      templateSlug = resolveWebsiteTemplateSlugForTitle(selectedTitle);
    } else if (selected.key === "project-update") {
      templateSlug = resolveProjectUpdateTemplateSlugForTitle(selectedTitle);
    } else if (selected.key === "monthly-report") {
      templateSlug = resolveMonthlyTemplateSlugForTitle(selectedTitle);
    } else if (selected.key === "maxwellian-news") {
      templateSlug = resolveMaxwellianTemplateSlugForTitle(selectedTitle);
    }
    var shareOrigin = getShareOrigin();
    if (
      selected.key === "maxwellian-news" &&
      shareOrigin === DEFAULT_PUBLIC_ORIGIN &&
      templateSlug !== "maxwellian"
    ) {
      templateSlug = "maxwellian";
    }
    var cardImageFilename = SHARE_CARD_IMAGE_FILENAME_BY_KEY[selected.key] || "";
    var stampCode = allocateNextDailyStampCode(new Date(), 1);
    var shareUrl = new URL("/UnityEnergy/customer-portal/foster-farms/executive/share/" + templateSlug + ".html", shareOrigin);
    shareUrl.searchParams.set("ue_doc", stampCode);
    shareUrl.searchParams.set("ue_kind", selected.key);
    shareUrl.searchParams.set("ue_share", String(nowMs()));
    shareUrl.searchParams.set("ue_status", "published");
    shareUrl.searchParams.set("ue_rev", "UE-PANEL-" + stampCode);
    shareUrl.searchParams.set("ue_target", resolveShareTarget(targetValue));
    if (cardImageFilename) {
      shareUrl.searchParams.set("ue_card_image", cardImageFilename);
    }
    if (routeContext.recipientKey) {
      shareUrl.searchParams.set("ue_recipient", routeContext.recipientKey);
    }
    if (routeContext.customerKey) {
      shareUrl.searchParams.set("ue_customer", routeContext.customerKey);
    }
    if (routeContext.senderAddress) {
      shareUrl.searchParams.set("ue_from", routeContext.senderAddress);
    }
    if (routeContext.recipientAddress) {
      shareUrl.searchParams.set("ue_to", routeContext.recipientAddress);
    }
    if (selectedTitle) {
      shareUrl.searchParams.set("ue_title", selectedTitle);
    }
    return {
      type: selected,
      stampCode: stampCode,
      title: selectedTitle,
      cardImageFilename: cardImageFilename,
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
      + "#ueFounderSharePanel{position:fixed;right:22px;bottom:24px;z-index:99999;width:min(92vw,420px);background:rgba(248,246,238,.98);border:1px solid rgba(126,128,96,.62);border-radius:16px;box-shadow:0 18px 44px rgba(20,30,12,.28);display:none;color:#26301f;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;}"
      + "#ueFounderSharePanel.is-open{display:block;}"
      + ".uefsp-head{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-bottom:1px solid rgba(164,164,132,.45);cursor:move;user-select:none;touch-action:none;}"
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
      + ".uefsp-btn.align-right{margin-left:auto;}"
      + ".uefsp-foot{font-size:11px;color:#5b6451;line-height:1.35;}";
    document.head.appendChild(style);
  }


  function normalizePathname(pathname) {
    var raw = String(pathname || "/").trim().toLowerCase();
    return raw || "/";
  }

  function isCustomerPortalPage(pathname) {
    return normalizePathname(pathname).indexOf(CUSTOMER_PORTAL_PATH_SEGMENT) !== -1;
  }

  function createHomepageFounderHotspot() {
    var existing = document.getElementById(HOMEPAGE_HOTSPOT_ID);
    if (existing) return existing;
    var hero = document.querySelector(HOMEPAGE_HOTSPOT_SELECTOR);
    if (!hero) return null;
    try {
      var computed = window.getComputedStyle(hero);
      if (computed && computed.position === "static") {
        hero.style.position = "relative";
      }
    } catch (_err) {}
    var hotspot = document.createElement("button");
    hotspot.type = "button";
    hotspot.id = HOMEPAGE_HOTSPOT_ID;
    hotspot.setAttribute("aria-label", "Founder access hotspot");
    hotspot.style.position = "absolute";
    hotspot.style.left = HOMEPAGE_HOTSPOT.left;
    hotspot.style.top = HOMEPAGE_HOTSPOT.top;
    hotspot.style.width = HOMEPAGE_HOTSPOT.sizeDesktopPx + "px";
    hotspot.style.height = HOMEPAGE_HOTSPOT.sizeDesktopPx + "px";
    hotspot.style.transform = "translate(-50%, -50%)";
    hotspot.style.borderRadius = "999px";
    hotspot.style.border = "0";
    hotspot.style.padding = "0";
    hotspot.style.margin = "0";
    hotspot.style.background = "transparent";
    hotspot.style.opacity = "0";
    hotspot.style.cursor = "pointer";
    hotspot.style.zIndex = "40";
    hotspot.style.outline = "none";
    hotspot.style.webkitTapHighlightColor = "transparent";
    hotspot.tabIndex = -1;
    if (window.matchMedia && window.matchMedia("(max-width: 900px)").matches) {
      hotspot.style.width = HOMEPAGE_HOTSPOT.sizeMobilePx + "px";
      hotspot.style.height = HOMEPAGE_HOTSPOT.sizeMobilePx + "px";
    }
    hero.appendChild(hotspot);
    return hotspot;
  }
  function createGlobalFounderHotspot() {
    var existing = document.getElementById(GLOBAL_HOTSPOT_ID);
    if (existing) return existing;
    var hotspot = document.createElement("button");
    hotspot.type = "button";
    hotspot.id = GLOBAL_HOTSPOT_ID;
    hotspot.setAttribute("aria-label", "Founder access hotspot");
    hotspot.style.position = "fixed";
    hotspot.style.right = GLOBAL_HOTSPOT.right;
    hotspot.style.top = GLOBAL_HOTSPOT.top;
    hotspot.style.width = GLOBAL_HOTSPOT.sizeDesktopPx + "px";
    hotspot.style.height = GLOBAL_HOTSPOT.sizeDesktopPx + "px";
    hotspot.style.borderRadius = "999px";
    hotspot.style.border = "0";
    hotspot.style.padding = "0";
    hotspot.style.margin = "0";
    hotspot.style.background = "transparent";
    hotspot.style.opacity = "0";
    hotspot.style.cursor = "pointer";
    hotspot.style.zIndex = "99997";
    hotspot.style.outline = "none";
    hotspot.style.webkitTapHighlightColor = "transparent";
    hotspot.tabIndex = -1;
    if (window.matchMedia && window.matchMedia("(max-width: 900px)").matches) {
      hotspot.style.width = GLOBAL_HOTSPOT.sizeMobilePx + "px";
      hotspot.style.height = GLOBAL_HOTSPOT.sizeMobilePx + "px";
    }
    document.body.appendChild(hotspot);
    return hotspot;
  }

  function mountPanel() {
    if (document.getElementById("ueFounderSharePanel")) return;
    injectStyles();
    var persistedPanelOpen = readPanelOpenState();
    var requireStealthUnlock = true;
    var canRestorePersistedPanel = persistedPanelOpen && isAuthorized();
    var hotspotActivated = canRestorePersistedPanel || !requireStealthUnlock;
    function isStealthHotspotTarget(target) {
      if (!target) return false;
      var homepageHotspot = document.getElementById(HOMEPAGE_HOTSPOT_ID);
      if (homepageHotspot && homepageHotspot.contains(target)) return true;
      var globalHotspot = document.getElementById(GLOBAL_HOTSPOT_ID);
      if (globalHotspot && globalHotspot.contains(target)) return true;
      return false;
    }


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
      + "  <div class=\"uefsp-actions\">"
      + "    <button type=\"button\" class=\"uefsp-btn\" id=\"uefspCopyLinkBtn\">Copy Link</button>"
      + "    <button type=\"button\" class=\"uefsp-btn align-right\" id=\"uefspCloseActionBtn\">Close</button>"
      + "  </div>"
      + "  <p class=\"uefsp-foot\">Uses Unity executive share cards and attaches your selected target URL as the destination.</p>"
      + "</div>";

    document.body.appendChild(panel);
    var panelHead = panel.querySelector(".uefsp-head");

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
    var copyLinkBtn = document.getElementById("uefspCopyLinkBtn");
    var closeActionBtn = document.getElementById("uefspCloseActionBtn");

    SHARE_TYPES.forEach(function (entry) {
      var opt = document.createElement("option");
      opt.value = entry.key;
      opt.textContent = entry.label;
      typeSelect.appendChild(opt);
    });
    var titlePresetOptions = [];
    var defaultPanelTitle =
      normalizeTitlePreset(DEFAULT_TITLE_PRESETS[0]) ||
      buildElectricalCategoryTitle(DEFAULT_PROVIDER_NAME, ELECTRICAL_TITLE_VARIANTS[0]);
    function appendTitlePreset(value) {
      var normalized = normalizeTitlePreset(value);
      var normalizedKey = titlePresetKey(normalized);
      if (!normalized || !normalizedKey) return;
      for (var i = 0; i < titlePresetOptions.length; i += 1) {
        if (titlePresetKey(titlePresetOptions[i]) === normalizedKey) return;
      }
      titlePresetOptions.push(normalized);
      var opt = document.createElement("option");
      opt.value = normalized;
      opt.textContent = normalized;
      titlePresetSelect.appendChild(opt);
    }
    function findMatchingTitlePreset(value) {
      var normalizedKey = titlePresetKey(value);
      if (!normalizedKey) return "";
      for (var i = 0; i < titlePresetOptions.length; i += 1) {
        if (titlePresetKey(titlePresetOptions[i]) === normalizedKey) {
          return titlePresetOptions[i];
        }
      }
      return "";
    }

    function rebuildTitlePresetOptions(preferredTitle) {
      titlePresetOptions = [];
      titlePresetSelect.innerHTML = "";
      var customTitlePresetOpt = document.createElement("option");
      customTitlePresetOpt.value = "__custom__";
      customTitlePresetOpt.textContent = "Custom (editable)";
      titlePresetSelect.appendChild(customTitlePresetOpt);
      getConfiguredTitlePresets().forEach(appendTitlePreset);
      var preferred = normalizeTitlePreset(preferredTitle);
      if (preferred && !findMatchingTitlePreset(preferred)) {
        appendTitlePreset(preferred);
      }
      return titlePresetOptions[0] || defaultPanelTitle;
    }

    function syncPresetStateFromTarget(options) {
      var opts = options && typeof options === "object" ? options : {};
      var preserveCurrentTitle = opts.preserveCurrentTitle !== false;
      var currentTitle = normalizeTitlePreset(titleInput.value);
      var defaultTitle = rebuildTitlePresetOptions(currentTitle);
      if (!preserveCurrentTitle || !currentTitle) {
        titleInput.value = defaultTitle;
        titlePresetSelect.value = findMatchingTitlePreset(defaultTitle) || "__custom__";
        return;
      }
      var matched = findMatchingTitlePreset(currentTitle);
      if (matched) {
        titleInput.value = matched;
        titlePresetSelect.value = matched;
        return;
      }
      titleInput.value = currentTitle;
      titlePresetSelect.value = "__custom__";
    }

    function saveTitlePresetAndRefresh(rawTitle) {
      var normalizedTitle = normalizeTitlePreset(rawTitle);
      if (!normalizedTitle) return false;
      var didSave = rememberTitlePreset(normalizedTitle);
      syncPresetStateFromTarget({ preserveCurrentTitle: true });
      var matched = findMatchingTitlePreset(normalizedTitle);
      titleInput.value = normalizedTitle;
      titlePresetSelect.value = matched || "__custom__";
      return didSave;
    }

    targetInput.value = window.location.href;
    typeSelect.value = "website";
    syncPresetStateFromTarget({ preserveCurrentTitle: false });
    seedDailyCounterFromCurrentPage();

    function setStatus(message) {
      statusNode.textContent = message;
    }
    function clamp(value, min, max) {
      return Math.min(Math.max(value, min), max);
    }
    var dragPointerId = null;
    var dragOffsetX = 0;
    var dragOffsetY = 0;
    function startPanelDrag(event) {
      if (!event || !panel.classList.contains("is-open")) return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (closeBtn && (event.target === closeBtn || closeBtn.contains(event.target))) return;
      dragPointerId = event.pointerId;
      var rect = panel.getBoundingClientRect();
      dragOffsetX = event.clientX - rect.left;
      dragOffsetY = event.clientY - rect.top;
      panel.style.left = rect.left + "px";
      panel.style.top = rect.top + "px";
      panel.style.right = "auto";
      panel.style.bottom = "auto";
      if (panelHead && panelHead.setPointerCapture) {
        try {
          panelHead.setPointerCapture(event.pointerId);
        } catch (_err) {}
      }
      event.preventDefault();
    }
    function movePanelDrag(event) {
      if (dragPointerId === null || !event || event.pointerId !== dragPointerId) return;
      var rect = panel.getBoundingClientRect();
      var maxLeft = Math.max(8, window.innerWidth - rect.width - 8);
      var maxTop = Math.max(8, window.innerHeight - rect.height - 8);
      var nextLeft = clamp(event.clientX - dragOffsetX, 8, maxLeft);
      var nextTop = clamp(event.clientY - dragOffsetY, 8, maxTop);
      panel.style.left = nextLeft + "px";
      panel.style.top = nextTop + "px";
      panel.style.right = "auto";
      panel.style.bottom = "auto";
      event.preventDefault();
    }
    function endPanelDrag(event) {
      if (dragPointerId === null) return;
      if (event && event.pointerId !== undefined && event.pointerId !== dragPointerId) return;
      if (panelHead && panelHead.releasePointerCapture) {
        try {
          panelHead.releasePointerCapture(dragPointerId);
        } catch (_err) {}
      }
      dragPointerId = null;
    }
    if (panelHead) panelHead.addEventListener("pointerdown", startPanelDrag);
    window.addEventListener("pointermove", movePanelDrag);
    window.addEventListener("pointerup", endPanelDrag);
    window.addEventListener("pointercancel", endPanelDrag);

    function openPanelFromHiddenHotspot() {
      hotspotActivated = true;
      panel.classList.add("is-open");
      seedDailyCounterFromCurrentPage();
      refreshUiState();
      if (!isAuthorized()) {
        setStatus("Founder access point detected. Enter your Unity Access ID.");
        window.setTimeout(function () { accessInput.focus(); }, 30);
      }
    }

    function refreshUiState() {
      var unlocked = isAuthorized();
      var panelIsOpen = panel.classList.contains("is-open");
      writePanelOpenState(panelIsOpen && unlocked);
      accessRow.style.display = unlocked ? "none" : "grid";
      unlockBtn.style.display = unlocked ? "none" : "inline-flex";
      lockBtn.style.display = unlocked ? "inline-flex" : "none";
      typeSelect.disabled = !unlocked;
      targetInput.disabled = !unlocked;
      useCurrentBtn.disabled = !unlocked;
      titlePresetSelect.disabled = !unlocked;
      titleInput.disabled = !unlocked;
      copyLinkBtn.disabled = !unlocked;
      if (closeActionBtn) {
        closeActionBtn.style.display = unlocked ? "inline-flex" : "none";
        closeActionBtn.disabled = !unlocked;
      }
      if (unlocked) {
        setStatus("Founder access unlocked. Choose type, set target link, then copy your link.");
      } else {
        setStatus("Enter your Unity Access ID to unlock share controls.");
      }
    }
    function closePanelAndLock() {
      panel.classList.remove("is-open");
      writePanelOpenState(false);
      clearSession();
      if (requireStealthUnlock) {
        hotspotActivated = false;
      }
      accessInput.value = "";
      refreshUiState();
    }

    titleInput.addEventListener("change", function () {
      var rawTitle = normalizeTitlePreset(titleInput.value);
      if (!rawTitle) return;
      var didSave = saveTitlePresetAndRefresh(rawTitle);
      if (didSave) {
        setStatus("Custom title saved to presets.");
      }
    });

    closeBtn.addEventListener("click", function () {
      closePanelAndLock();
    });
    if (closeActionBtn) {
      closeActionBtn.addEventListener("click", function () {
        closePanelAndLock();
      });
    }

    window.addEventListener("keydown", function (event) {
      if (!event || event.key !== "Escape") return;
      if (!panel.classList.contains("is-open")) return;
      closePanelAndLock();
    });
    window.addEventListener("pointerdown", function (event) {
      if (!panel.classList.contains("is-open")) return;
      if (isAuthorized()) return;
      var target = event && event.target;
      if (!target) return;
      if (panel.contains(target)) return;
      if (isStealthHotspotTarget(target)) return;
      panel.classList.remove("is-open");
      if (requireStealthUnlock) {
        hotspotActivated = false;
      }
      accessInput.value = "";
      refreshUiState();
    });
    window.addEventListener("pagehide", function () {
      if (!panel.classList.contains("is-open")) return;
      if (!isAuthorized()) return;
      writePanelOpenState(true);
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
      if (panel.classList.contains("is-open")) {
        writePanelOpenState(true);
      }
      refreshUiState();
    });

    lockBtn.addEventListener("click", function () {
      clearSession();
      writePanelOpenState(false);
      refreshUiState();
    });

    useCurrentBtn.addEventListener("click", function () {
      targetInput.value = window.location.href;
      seedDailyCounterFromCurrentPage();
      syncPresetStateFromTarget({ preserveCurrentTitle: true });
      setStatus("Target set to current page.");
    });

    targetInput.addEventListener("change", function () {
      syncPresetStateFromTarget({ preserveCurrentTitle: true });
    });
    typeSelect.addEventListener("change", function () {
      var selected = SHARE_TYPES.find(function (entry) { return entry.key === typeSelect.value; });
      if (!selected) return;
      var selectedCardImageFilename = SHARE_CARD_IMAGE_FILENAME_BY_KEY[selected.key] || "";
      if (!String(titleInput.value || "").trim()) {
        var fallbackTitle = titlePresetOptions[0] || defaultPanelTitle;
        titleInput.value = fallbackTitle;
        titlePresetSelect.value = findMatchingTitlePreset(fallbackTitle) || "__custom__";
      }
      setStatus(
        "Share card type set to " + selected.label +
        (selectedCardImageFilename ? (" · " + selectedCardImageFilename) : "") +
        "."
      );
    });
    titlePresetSelect.addEventListener("change", function () {
      var selectedValue = String(titlePresetSelect.value || "");
      if (!selectedValue || selectedValue === "__custom__") return;
      titleInput.value = selectedValue;
      setStatus("Preset title loaded. You can still edit it before copying.");
    });
    titleInput.addEventListener("input", function () {
      var rawTitle = normalizeTitlePreset(titleInput.value);
      var matched = findMatchingTitlePreset(rawTitle);
      if (!rawTitle || !matched) {
        titlePresetSelect.value = "__custom__";
      } else {
        titlePresetSelect.value = matched;
      }
    });

    copyLinkBtn.addEventListener("click", async function () {
      if (!isAuthorized()) {
        refreshUiState();
        return;
      }
      var payload = buildShareUrl(typeSelect.value, targetInput.value, titleInput.value);
      var ok = await copyToClipboard(payload.url);
      if (ok) {
        saveTitlePresetAndRefresh(payload.title);
      }
      setStatus(ok ? (payload.type.label + " link copied · " + payload.stampCode + " · " + payload.title) : "Copy failed.");
    });

    function bindStealthHotspotTrigger(hotspot) {
      if (!hotspot) return;
      hotspot.addEventListener("click", function (event) {
        if (event) event.preventDefault();
        openPanelFromHiddenHotspot();
      });
      hotspot.addEventListener("keydown", function (event) {
        if (!event) return;
        if (event.key !== "Enter" && event.key !== " ") return;
        event.preventDefault();
        openPanelFromHiddenHotspot();
      });
    }
    if (requireStealthUnlock) {
      var homepageHotspot = createHomepageFounderHotspot();
      if (homepageHotspot) {
        bindStealthHotspotTrigger(homepageHotspot);
      } else {
        bindStealthHotspotTrigger(createGlobalFounderHotspot());
      }
    }

    if (canRestorePersistedPanel) {
      panel.classList.add("is-open");
      seedDailyCounterFromCurrentPage();
    }
    refreshUiState();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mountPanel);
  } else {
    mountPanel();
  }
})();
