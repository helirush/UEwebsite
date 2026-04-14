(function () {
  let frameLoadTimer = null;
  let frameMessagingBound = false;
  let activeFrameOrigin = "";
  let pendingLaunchSession = null;
  let panelMode = "centered";
  let footerQuestionTimer = null;
  let footerQuestionIndex = 0;
  let footerQuestionSignature = "";
  let widgetReady = false;
  let hasConversationStarted = false;
  let currentVisitorName = "";
  let visitorQuestionCount = 0;
  let questionNotesActivated = false;
  let visitorQuestionLog = [];
  let lastVisitorQuestionFingerprint = "";
  let questionNotesStatusTimer = null;
  let founderModeActive = false;
  let founderModeIdentity = "";
  let guardrailSessionStartedAt = 0;
  let guardrailLastActivityAt = 0;
  let guardrailQuestionCount = 0;
  let guardrailLowRelevanceStreak = 0;
  let guardrailOffboarded = false;
  let guardrailIdleTimer = null;
  let guardrailSessionToken = "";
  let lifecycleCleanupBound = false;
  let activeLaunchSignature = "";
  const runtimeAuthStorageKey = "MAXWELLIAN_HUME_RUNTIME_AUTH";
  function normalizeRuntimeAuthType(value) {
    if (typeof value !== "string") return "";
    const normalized = value.trim().toLowerCase();
    if (!normalized) return "";
    if (
      normalized === "accesstoken" ||
      normalized === "access_token" ||
      normalized === "access-token" ||
      normalized === "token"
    ) {
      return "accessToken";
    }
    if (
      normalized === "apikey" ||
      normalized === "api_key" ||
      normalized === "api-key" ||
      normalized === "key"
    ) {
      return "apiKey";
    }
    return "";
  }

  function readTrimmedAuthString(source, keys) {
    if (!source || typeof source !== "object" || !Array.isArray(keys)) return "";
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (!key) continue;
      const value = source[key];
      if (typeof value === "string") {
        const trimmed = value.trim();
        if (trimmed) return trimmed;
      }
    }
    return "";
  }

  function normalizeRuntimeAuthCandidate(candidate) {
    if (!candidate) return null;
    if (typeof candidate === "string") {
      const tokenCandidate = candidate.trim();
      return tokenCandidate ? { type: "accessToken", value: tokenCandidate } : null;
    }
    if (typeof candidate !== "object") return null;
    const explicitType = normalizeRuntimeAuthType(candidate.type);
    const explicitValue = readTrimmedAuthString(candidate, ["value"]);
    const accessToken = readTrimmedAuthString(candidate, [
      "accessToken",
      "access_token",
      "access-token",
      "token",
    ]);
    const apiKey = readTrimmedAuthString(candidate, [
      "apiKey",
      "apikey",
      "api_key",
      "api-key",
      "key",
    ]);
    let type = explicitType;
    let value = explicitValue;
    if (!type) {
      if (accessToken) {
        type = "accessToken";
      } else if (apiKey) {
        type = "apiKey";
      }
    }
    if (!value) {
      value = type === "accessToken" ? accessToken : type === "apiKey" ? apiKey : "";
    }
    if (!type || !value) return null;
    return { type: type, value: value };
  }

  function readRuntimeAuthFromStorage() {
    if (typeof window === "undefined" || !window.localStorage) return null;
    try {
      const raw = window.localStorage.getItem(runtimeAuthStorageKey);
      if (!raw) return null;
      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch (_err) {
        parsed = raw;
      }
      return normalizeRuntimeAuthCandidate(parsed);
    } catch (_err) {
      return null;
    }
  }

  function writeRuntimeAuthToStorage(auth) {
    if (typeof window === "undefined" || !window.localStorage) return false;
    const normalized = normalizeRuntimeAuthCandidate(auth);
    if (!normalized) return false;
    try {
      window.localStorage.setItem(runtimeAuthStorageKey, JSON.stringify(normalized));
      return true;
    } catch (_err) {
      return false;
    }
  }

  function clearRuntimeAuthStorage() {
    if (typeof window === "undefined" || !window.localStorage) return;
    try {
      window.localStorage.removeItem(runtimeAuthStorageKey);
    } catch (_err) {}
  }

  function readRuntimeAuthFromWindow() {
    if (typeof window === "undefined") return null;
    const objectCandidate =
      window.MAXWELLIAN_HUME_RUNTIME_AUTH && typeof window.MAXWELLIAN_HUME_RUNTIME_AUTH === "object"
        ? window.MAXWELLIAN_HUME_RUNTIME_AUTH
        : window.MAXWELLIAN_HUME_AUTH && typeof window.MAXWELLIAN_HUME_AUTH === "object"
          ? window.MAXWELLIAN_HUME_AUTH
          : null;
    const objectAuth = normalizeRuntimeAuthCandidate(objectCandidate);
    if (objectAuth) return objectAuth;
    const accessToken =
      typeof window.MAXWELLIAN_HUME_ACCESS_TOKEN === "string"
        ? window.MAXWELLIAN_HUME_ACCESS_TOKEN.trim()
        : "";
    if (accessToken) return { type: "accessToken", value: accessToken };
    const apiKey =
      typeof window.MAXWELLIAN_HUME_API_KEY === "string" ? window.MAXWELLIAN_HUME_API_KEY.trim() : "";
    if (apiKey) return { type: "apiKey", value: apiKey };
    return null;
  }

  function applyRuntimeAuthToWindow(auth) {
    if (typeof window === "undefined") return;
    const normalized = normalizeRuntimeAuthCandidate(auth);
    if (!normalized) return;
    window.MAXWELLIAN_HUME_RUNTIME_AUTH = {
      type: normalized.type,
      value: normalized.value,
    };
    if (normalized.type === "accessToken") {
      window.MAXWELLIAN_HUME_ACCESS_TOKEN = normalized.value;
    } else if (normalized.type === "apiKey") {
      window.MAXWELLIAN_HUME_API_KEY = normalized.value;
    }
  }

  function getRuntimeAuthCandidate() {
    const fromWindow = readRuntimeAuthFromWindow();
    if (fromWindow) return fromWindow;
    const fromStorage = readRuntimeAuthFromStorage();
    if (fromStorage) {
      applyRuntimeAuthToWindow(fromStorage);
      return fromStorage;
    }
    return null;
  }

  function exposeRuntimeAuthHelpers() {
    if (typeof window === "undefined") return;
    window.setMaxwellianHumeAuth = function (typeOrObject, value, options) {
      let candidate = null;
      if (typeOrObject && typeof typeOrObject === "object") {
        candidate = normalizeRuntimeAuthCandidate(typeOrObject);
      } else if (typeof typeOrObject === "string") {
        candidate = normalizeRuntimeAuthCandidate({
          type: typeOrObject,
          value: typeof value === "string" ? value : "",
        });
      }
      if (!candidate) return false;
      applyRuntimeAuthToWindow(candidate);
      const shouldPersist = !(options && typeof options === "object" && options.persist === false);
      if (shouldPersist) writeRuntimeAuthToStorage(candidate);
      return true;
    };
    window.clearMaxwellianHumeAuth = function () {
      clearRuntimeAuthStorage();
      if (window.MAXWELLIAN_HUME_RUNTIME_AUTH && typeof window.MAXWELLIAN_HUME_RUNTIME_AUTH === "object") {
        window.MAXWELLIAN_HUME_RUNTIME_AUTH.type = "";
        window.MAXWELLIAN_HUME_RUNTIME_AUTH.value = "";
      }
      if (typeof window.MAXWELLIAN_HUME_ACCESS_TOKEN === "string") {
        window.MAXWELLIAN_HUME_ACCESS_TOKEN = "";
      }
      if (typeof window.MAXWELLIAN_HUME_API_KEY === "string") {
        window.MAXWELLIAN_HUME_API_KEY = "";
      }
      return true;
    };
  }

  exposeRuntimeAuthHelpers();
  const bootstrapRuntimeAuth = getRuntimeAuthCandidate();
  if (bootstrapRuntimeAuth) {
    applyRuntimeAuthToWindow(bootstrapRuntimeAuth);
  }

  function getVoiceConfig() {
    const defaults = {
      character_name: "Clerk Maxwell",
      character_id: "clerk-maxwell",
      default_character_id: "clerk-maxwell",
      lock_character_to_default: true,
      default_context_source: "general",
      default_ui_mode: "modal",
      enable_character_switcher: false,
      use_unity_start_gate: false,
      unity_launch_ring_image_url: "assets/images/unity-icon-ring-white-2048.png",
      show_session_diagnostics: false,
      show_unity_footer_message: false,
      unity_footer_message: "",
      unity_footer_questions: [],
      unity_footer_rotate_seconds: 15,
      floating_launcher_enabled: true,
      floating_launcher_tooltip: "Speak with Clerk",
      floating_launcher_icon_url: "assets/images/unity-maxwell-button.png",
      floating_launcher_context_mode: "technical-follow-up",
      floating_launcher_response_style_hint: "",
      engagement_protocol: "",
      response_precedence_guidance: "",
      voltage_unit_speech_rule: "",
      maxwellian_knowledge_seed: "",
      knowledge_reference_spine: "",
      context_policy_enabled: false,
      context_policy_default_action: "allow",
      context_policy_fallback_context_source: "general",
      context_policy_block_message: "This Clerk launch context is currently unavailable.",
      context_policy_ask_message: "Clerk is preparing contextual awareness for this view.",
      context_policy_rules: [],
      skill_packs_enabled: false,
      skill_packs_max_selected: 3,
      skill_pack_excerpt_char_limit: 2400,
      skill_packs_fallback_ids: [],
      skill_pack_selection_rules: [],
      skill_packs: [],
      intelligence_routing_enabled: false,
      intelligence_default_profile_id: "",
      intelligence_profiles: {},
      intelligence_routing_rules: [],
      session_context_char_limit: 3600,
      syntax_awareness_context: "",
      syntax_awareness_glossary: [],
      page_context_profiles: {},
      question_notes_threshold: 2,
      question_notes_hold_line: "Please hold while I go back and get my notes.",
      question_notes_library: [],
      founder_detection_enabled: true,
      founder_identity_name: "Mike Howell",
      founder_identity_aliases: ["mike howell", "mike", "mr howell", "michael howell"],
      founder_mode_guidance: "",
      founder_notes_hold_line: "Founder mode active. Please hold while I capture your direction and notes.",
      guardrails_enabled: false,
      guardrails_founder_bypass: true,
      guardrails_max_questions_per_session: 8,
      guardrails_free_questions: 2,
      guardrails_max_session_minutes: 12,
      guardrails_idle_timeout_seconds: 90,
      guardrails_low_relevance_limit: 2,
      guardrails_min_relevance_score: 1,
      guardrails_max_sessions_per_day: 6,
      guardrails_enable_daily_metering: true,
      guardrails_contact_email: "sales@unityenergy.com",
      guardrails_contact_url: "https://unityenergy.com/contact-us",
      guardrails_offboard_message:
        "Thanks for your interest in Clerk. For deeper support, please contact Unity Energy Sales at sales@unityenergy.com or visit unityenergy.com/contact-us.",
      guardrails_relevance_keywords: [
        "unity",
        "unity energy",
        "mpts",
        "power factor",
        "reactive",
        "harmonic",
        "kvar",
        "kva",
        "kw",
        "transformer",
        "voltage",
        "current",
        "thermal",
        "cooling",
        "facility",
        "site",
        "savings",
        "demand",
        "co2",
        "electrical field",
        "measure",
        "manage",
        "exchange",
      ],
      character_avatar_url: "JamesClerkMaxwell.gif",
      character_background_url: "",
      embed_url: "",
      config_id: "",
      voice_id: "",
      auth: { type: "", value: "" },
      session_context: "",
      session_variables: {},
      system_prompt_text: "",
      characters: {},
    };

    if (!window.MAXWELLIAN_HUME || typeof window.MAXWELLIAN_HUME !== "object") {
      return defaults;
    }

    const merged = Object.assign({}, defaults, window.MAXWELLIAN_HUME);
    if (!merged.auth || typeof merged.auth !== "object") {
      merged.auth = { type: "", value: "" };
    }
    if (!merged.session_variables || typeof merged.session_variables !== "object") {
      merged.session_variables = {};
    }
    if (!merged.characters || typeof merged.characters !== "object") {
      merged.characters = {};
    }
    if (!Array.isArray(merged.founder_identity_aliases)) {
      merged.founder_identity_aliases = defaults.founder_identity_aliases.slice();
    }
    if (!Array.isArray(merged.guardrails_relevance_keywords)) {
      merged.guardrails_relevance_keywords = defaults.guardrails_relevance_keywords.slice();
    }
    if (typeof merged.unity_footer_message !== "string") {
      merged.unity_footer_message = "";
    }
    if (!Array.isArray(merged.unity_footer_questions)) {
      merged.unity_footer_questions = [];
    }
    if (typeof merged.unity_launch_ring_image_url !== "string") {
      merged.unity_launch_ring_image_url = defaults.unity_launch_ring_image_url;
    }
    if (typeof merged.floating_launcher_tooltip !== "string") {
      merged.floating_launcher_tooltip = defaults.floating_launcher_tooltip;
    }
    if (typeof merged.floating_launcher_icon_url !== "string") {
      merged.floating_launcher_icon_url = defaults.floating_launcher_icon_url;
    }
    if (typeof merged.floating_launcher_context_mode !== "string") {
      merged.floating_launcher_context_mode = defaults.floating_launcher_context_mode;
    }
    if (typeof merged.floating_launcher_response_style_hint !== "string") {
      merged.floating_launcher_response_style_hint = defaults.floating_launcher_response_style_hint;
    }
    if (typeof merged.voltage_unit_speech_rule !== "string") {
      merged.voltage_unit_speech_rule = defaults.voltage_unit_speech_rule;
    }
    if (!Array.isArray(merged.context_policy_rules)) {
      merged.context_policy_rules = [];
    }
    if (!Array.isArray(merged.skill_packs_fallback_ids)) {
      merged.skill_packs_fallback_ids = [];
    }
    if (!Array.isArray(merged.skill_pack_selection_rules)) {
      merged.skill_pack_selection_rules = [];
    }
    if (!Array.isArray(merged.skill_packs)) {
      merged.skill_packs = [];
    }
    if (!merged.intelligence_profiles || typeof merged.intelligence_profiles !== "object") {
      merged.intelligence_profiles = {};
    }
    if (!Array.isArray(merged.intelligence_routing_rules)) {
      merged.intelligence_routing_rules = [];
    }
    if (!Array.isArray(merged.syntax_awareness_glossary) && (!merged.syntax_awareness_glossary || typeof merged.syntax_awareness_glossary !== "object")) {
      merged.syntax_awareness_glossary = [];
    }
    if (!merged.page_context_profiles || typeof merged.page_context_profiles !== "object") {
      merged.page_context_profiles = {};
    }
    if (!Number.isFinite(Number(merged.session_context_char_limit))) {
      merged.session_context_char_limit = defaults.session_context_char_limit;
    }
    merged.lock_character_to_default = merged.lock_character_to_default !== false;
    merged.floating_launcher_enabled = merged.floating_launcher_enabled !== false;
    return merged;
  }

  function getEmbedOrigin(url) {
    try {
      return new URL(url, window.location.href).origin;
    } catch (_err) {
      return "";
    }
  }

  function normalizeAuthConfig(cfg) {
    if (!cfg || typeof cfg !== "object") return null;
    const auth = cfg.auth && typeof cfg.auth === "object" ? cfg.auth : {};
    const runtimeAuth = getRuntimeAuthCandidate();
    const mergedAuth = Object.assign({}, auth);
    if (runtimeAuth) {
      if (!mergedAuth.type) mergedAuth.type = runtimeAuth.type;
      if (!mergedAuth.value) mergedAuth.value = runtimeAuth.value;
      if (runtimeAuth.type === "accessToken" && !mergedAuth.accessToken) {
        mergedAuth.accessToken = runtimeAuth.value;
      }
      if (runtimeAuth.type === "apiKey" && !mergedAuth.apiKey) {
        mergedAuth.apiKey = runtimeAuth.value;
      }
    }
    return normalizeRuntimeAuthCandidate(mergedAuth);
  }

  function normalizeSessionVariables(cfg) {
    const source = cfg && typeof cfg.session_variables === "object" ? cfg.session_variables : null;
    if (!source) return null;
    const result = {};
    Object.entries(source).forEach(function ([key, value]) {
      if (!key) return;
      if (value === null || value === undefined) return;
      result[key] = String(value);
    });
    return Object.keys(result).length > 0 ? result : null;
  }

  function normalizeVoiceId(cfg) {
    if (!cfg || typeof cfg !== "object") return "";
    const voiceId = typeof cfg.voice_id === "string" ? cfg.voice_id.trim() : "";
    return voiceId || "";
  }
  function resolveConfigId(cfg) {
    if (!cfg || typeof cfg !== "object") return "";
    const directConfigId = typeof cfg.config_id === "string" ? cfg.config_id.trim() : "";
    if (directConfigId) return directConfigId;
    const voiceId = normalizeVoiceId(cfg);
    return voiceId || "";
  }

  function coerceText(value) {
    return typeof value === "string" ? value.trim() : "";
  }

  function normalizeVoltageSpeechText(value) {
    const text = coerceText(value);
    if (!text) return text;
    const resolveVoltageUnit = function (prefix) {
      const normalizedPrefix = coerceText(prefix);
      if (normalizedPrefix === "k" || normalizedPrefix === "K") return "kilovolts";
      if (normalizedPrefix === "m") return "millivolts";
      if (normalizedPrefix === "M") return "megavolts";
      return "volts";
    };
    let normalized = text;
    normalized = normalized.replace(
      /\b(\d+(?:\.\d+)?)\s*([kKmM]?)\s*VAC\b/gi,
      function (_match, magnitude, prefix) {
        return `${magnitude} ${resolveVoltageUnit(prefix)} AC`;
      }
    );
    normalized = normalized.replace(
      /\b(\d+(?:\.\d+)?)\s*([kKmM]?)\s*VDC\b/gi,
      function (_match, magnitude, prefix) {
        return `${magnitude} ${resolveVoltageUnit(prefix)} DC`;
      }
    );
    normalized = normalized.replace(
      /\b(\d+(?:\.\d+)?)\s*([kKmM]?)\s*V\b/gi,
      function (_match, magnitude, prefix) {
        return `${magnitude} ${resolveVoltageUnit(prefix)}`;
      }
    );
    return normalized;
  }

  function normalizeVoltageSpeechValue(value, depth) {
    const level = Number.isFinite(depth) ? depth : 0;
    if (value === null || value === undefined) return value;
    if (typeof value === "string") return normalizeVoltageSpeechText(value);
    if (typeof value === "number" || typeof value === "boolean") return value;
    if (Array.isArray(value)) {
      if (level >= 5) return value.slice(0, 64);
      return value.slice(0, 64).map(function (entry) {
        return normalizeVoltageSpeechValue(entry, level + 1);
      });
    }
    if (typeof value === "object") {
      if (level >= 5) return value;
      const normalizedObject = {};
      Object.entries(value).forEach(function ([key, entry]) {
        normalizedObject[key] = normalizeVoltageSpeechValue(entry, level + 1);
      });
      return normalizedObject;
    }
    return value;
  }

  function getVoltageUnitSpeechRule(cfg) {
    const configured = coerceText(cfg && cfg.voltage_unit_speech_rule);
    if (configured) return configured;
    return "Before finalizing each spoken response, rewrite voltage abbreviations into spoken units: '480V' or '480 V' becomes '480 volts'; '13.8kV' becomes '13.8 kilovolts'; '24VDC' becomes '24 volts DC'.";
  }

  function getDefaultCharacterId(cfg) {
    const explicit = coerceText((cfg && cfg.default_character_id) || (cfg && cfg.character_id));
    if (explicit) return explicit;
    const fallbackName = coerceText(cfg && cfg.character_name);
    return fallbackName || "clerk-maxwell";
  }

  function normalizeUiMode(value, cfg) {
    const candidate = coerceText(value || (cfg && cfg.default_ui_mode)).toLowerCase();
    if (candidate === "panel" || candidate === "inline" || candidate === "modal") return candidate;
    return "modal";
  }

  function normalizeContextSource(value, cfg) {
    const candidate = coerceText(value || (cfg && cfg.default_context_source));
    return candidate || "general";
  }
  function normalizeStringArray(value, maxItems) {
    if (typeof value === "string") {
      const single = coerceText(value);
      return single ? [single] : [];
    }
    if (!Array.isArray(value)) return [];
    const limit = Number.isFinite(maxItems) ? Math.max(1, Math.floor(maxItems)) : 24;
    const result = [];
    value.forEach(function (item) {
      const text = coerceText(item);
      if (!text || result.includes(text)) return;
      result.push(text);
    });
    return result.slice(0, limit);
  }

  function normalizeStringArrayLower(value, maxItems) {
    return normalizeStringArray(value, maxItems)
      .map(function (entry) { return entry.toLowerCase(); })
      .filter(Boolean);
  }

  function matchesPattern(candidate, pattern) {
    const normalizedCandidate = coerceText(candidate).toLowerCase();
    const normalizedPattern = coerceText(pattern).toLowerCase();
    if (!normalizedPattern) return false;
    if (normalizedPattern === "*") return true;
    if (!normalizedCandidate) return false;
    if (!normalizedPattern.includes("*")) return normalizedCandidate === normalizedPattern;
    const escaped = normalizedPattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
    try {
      return new RegExp(`^${escaped}$`, "i").test(normalizedCandidate);
    } catch (_err) {
      return normalizedCandidate === normalizedPattern;
    }
  }

  function matchesAnyPattern(candidate, patterns) {
    if (!Array.isArray(patterns) || patterns.length === 0) return true;
    return patterns.some(function (pattern) { return matchesPattern(candidate, pattern); });
  }

  function collectLaunchModes(launchSession) {
    const payload = launchSession && typeof launchSession.contextPayload === "object" ? launchSession.contextPayload : {};
    const result = [];
    const collect = function (value) {
      const mode = coerceText(value).toLowerCase();
      if (!mode || result.includes(mode)) return;
      result.push(mode);
    };
    collect(payload.mode);
    collect(payload.conversation_mode);
    collect(launchSession && launchSession.uiMode);
    return result;
  }

  function collectLaunchContextSources(launchSession) {
    const payload = launchSession && typeof launchSession.contextPayload === "object" ? launchSession.contextPayload : {};
    const result = [];
    const collect = function (value) {
      const source = coerceText(value).toLowerCase();
      if (!source || result.includes(source)) return;
      result.push(source);
    };
    collect(launchSession && launchSession.contextSource);
    collect(launchSession && launchSession.legacyContext);
    collect(payload.context_source);
    collect(payload.context);
    return result;
  }

  function normalizeTokenBudgetProfile(entry) {
    const source =
      entry && typeof entry === "object" && entry.token_budget && typeof entry.token_budget === "object"
        ? entry.token_budget
        : entry && typeof entry === "object" && entry.tokenBudget && typeof entry.tokenBudget === "object"
          ? entry.tokenBudget
          : {};
    const normalized = {};
    const readBudget = function (key, legacyKey) {
      const raw = source[key] !== undefined ? source[key] : source[legacyKey];
      if (!Number.isFinite(Number(raw))) return;
      normalized[key] = Math.max(1, Math.floor(Number(raw)));
    };
    readBudget("input_tokens_soft", "inputTokensSoft");
    readBudget("input_tokens_hard", "inputTokensHard");
    readBudget("output_tokens_soft", "outputTokensSoft");
    readBudget("output_tokens_hard", "outputTokensHard");
    return normalized;
  }

  function normalizeIntelligenceProfiles(cfg) {
    const source = cfg && cfg.intelligence_profiles;
    const profiles = {};
    const normalizeProfile = function (profileId, entry) {
      if (!entry || typeof entry !== "object") return;
      const id = coerceText(profileId || entry.id || entry.profile_id || entry.profileId).toLowerCase();
      if (!id) return;
      const contextLimitRaw =
        entry.session_context_char_limit !== undefined
          ? entry.session_context_char_limit
          : entry.sessionContextCharLimit;
      const skillExcerptRaw =
        entry.skill_pack_excerpt_char_limit !== undefined
          ? entry.skill_pack_excerpt_char_limit
          : entry.skillPackExcerptCharLimit;
      const maxPacksRaw =
        entry.skill_packs_max_selected !== undefined
          ? entry.skill_packs_max_selected
          : entry.skillPacksMaxSelected;
      profiles[id] = {
        id: id,
        label: coerceText(entry.label || entry.name) || id,
        description: coerceText(entry.description || entry.summary),
        configId: coerceText(entry.config_id || entry.configId),
        voiceId: coerceText(entry.voice_id || entry.voiceId),
        responseStyle: coerceText(entry.response_style || entry.responseStyle),
        sessionContextCharLimit: Number.isFinite(Number(contextLimitRaw))
          ? clampNumber(contextLimitRaw, 800, 8000, 3600)
          : null,
        skillPackExcerptCharLimit: Number.isFinite(Number(skillExcerptRaw))
          ? clampNumber(skillExcerptRaw, 600, 6000, 2400)
          : null,
        skillPacksMaxSelected: Number.isFinite(Number(maxPacksRaw))
          ? clampNumber(maxPacksRaw, 1, 8, 3)
          : null,
        tokenBudget: normalizeTokenBudgetProfile(entry),
      };
    };

    if (Array.isArray(source)) {
      source.forEach(function (entry) {
        normalizeProfile("", entry);
      });
    } else if (source && typeof source === "object") {
      Object.entries(source).forEach(function ([profileId, entry]) {
        normalizeProfile(profileId, entry);
      });
    }
    return profiles;
  }

  function normalizeIntelligenceRoutingRules(cfg) {
    const source = Array.isArray(cfg && cfg.intelligence_routing_rules) ? cfg.intelligence_routing_rules : [];
    return source
      .map(function (rule, index) {
        if (!rule || typeof rule !== "object") return null;
        const profileId = coerceText(rule.profile_id || rule.profileId).toLowerCase();
        if (!profileId) return null;
        return {
          id: coerceText(rule.id) || `intelligence-routing-${index + 1}`,
          profileId: profileId,
          contextSources: normalizeStringArrayLower(
            rule.context_sources !== undefined ? rule.context_sources : rule.contextSources,
            24
          ),
          modes: normalizeStringArrayLower(
            rule.modes !== undefined ? rule.modes : rule.conversation_modes,
            16
          ),
          entryPoints: normalizeStringArrayLower(
            rule.entry_points !== undefined ? rule.entry_points : rule.entryPoints,
            16
          ),
          uiModes: normalizeStringArrayLower(
            rule.ui_modes !== undefined ? rule.ui_modes : rule.uiModes,
            8
          ),
          requireFields: normalizeStringArray(
            rule.require_fields !== undefined ? rule.require_fields : rule.requireFields,
            12
          ),
        };
      })
      .filter(Boolean);
  }

  function getIntelligenceRoutingConfig(cfg) {
    const profiles = normalizeIntelligenceProfiles(cfg);
    const profileIds = Object.keys(profiles);
    const configuredDefault = coerceText(cfg && cfg.intelligence_default_profile_id).toLowerCase();
    const fallbackDefaultId = configuredDefault && profiles[configuredDefault]
      ? configuredDefault
      : profiles["standard-guidance"]
        ? "standard-guidance"
        : profileIds[0] || "";
    const rules = normalizeIntelligenceRoutingRules(cfg).filter(function (rule) {
      return Boolean(rule && rule.profileId && profiles[rule.profileId]);
    });
    const enabled = (Boolean(cfg && cfg.intelligence_routing_enabled) || rules.length > 0) && profileIds.length > 0;
    return {
      enabled: enabled,
      profiles: profiles,
      rules: rules,
      defaultProfileId: fallbackDefaultId,
    };
  }

  function evaluateIntelligenceProfile(launchSession, cfg) {
    const routing = getIntelligenceRoutingConfig(cfg);
    if (!routing.enabled) return null;
    const payload = launchSession && typeof launchSession.contextPayload === "object" ? launchSession.contextPayload : {};
    const contextSources = collectLaunchContextSources(launchSession);
    const modes = collectLaunchModes(launchSession);
    const entryPoint = coerceText(payload.entry_point || payload.entryPoint).toLowerCase();
    const uiMode = coerceText(launchSession && launchSession.uiMode).toLowerCase();

    const requestedProfileId = coerceText(
      payload.intelligence_profile_id ||
      payload.intelligence_profile ||
      payload.model_profile_id ||
      payload.model_profile
    ).toLowerCase();
    if (requestedProfileId && routing.profiles[requestedProfileId]) {
      return {
        profileId: requestedProfileId,
        profile: routing.profiles[requestedProfileId],
        source: "explicit-request",
        ruleId: "",
        contextSources: contextSources,
        modes: modes,
        entryPoint: entryPoint,
      };
    }

    let matchedRule = null;
    for (let i = 0; i < routing.rules.length; i += 1) {
      const rule = routing.rules[i];
      const sourceMatch =
        rule.contextSources.length === 0 ||
        contextSources.some(function (source) { return matchesAnyPattern(source, rule.contextSources); });
      if (!sourceMatch) continue;
      const modeMatch =
        rule.modes.length === 0 || modes.some(function (mode) { return matchesAnyPattern(mode, rule.modes); });
      if (!modeMatch) continue;
      const entryPointMatch = rule.entryPoints.length === 0 || matchesAnyPattern(entryPoint, rule.entryPoints);
      if (!entryPointMatch) continue;
      const uiModeMatch = rule.uiModes.length === 0 || matchesAnyPattern(uiMode, rule.uiModes);
      if (!uiModeMatch) continue;
      const missingFields = getMissingContextFields(payload, rule.requireFields);
      if (missingFields.length > 0) continue;
      matchedRule = rule;
      break;
    }

    const profileId = matchedRule ? matchedRule.profileId : routing.defaultProfileId;
    if (!profileId || !routing.profiles[profileId]) return null;
    return {
      profileId: profileId,
      profile: routing.profiles[profileId],
      source: matchedRule ? "rule" : "default",
      ruleId: matchedRule ? matchedRule.id : "",
      contextSources: contextSources,
      modes: modes,
      entryPoint: entryPoint,
    };
  }

  function applyIntelligenceProfile(launchSession, cfg) {
    if (!launchSession || typeof launchSession !== "object") return null;
    if (!launchSession.contextPayload || typeof launchSession.contextPayload !== "object") {
      launchSession.contextPayload = {};
    }
    const decision = evaluateIntelligenceProfile(launchSession, cfg);
    if (!decision || !decision.profile) return null;
    const profile = decision.profile;
    const payload = launchSession.contextPayload;
    launchSession.intelligenceProfile = {
      id: decision.profileId,
      label: profile.label || decision.profileId,
      description: profile.description || "",
      configId: profile.configId || "",
      voiceId: profile.voiceId || "",
      responseStyle: profile.responseStyle || "",
      sessionContextCharLimit: profile.sessionContextCharLimit,
      skillPackExcerptCharLimit: profile.skillPackExcerptCharLimit,
      skillPacksMaxSelected: profile.skillPacksMaxSelected,
      tokenBudget: profile.tokenBudget || {},
    };

    payload.intelligence_profile_id = decision.profileId;
    assignContextValueIfMissing(payload, "intelligence_profile_label", launchSession.intelligenceProfile.label);
    assignContextValueIfMissing(payload, "intelligence_profile_source", decision.source);
    assignContextValueIfMissing(payload, "intelligence_profile_rule_id", decision.ruleId);
    assignContextValueIfMissing(payload, "response_style_hint", launchSession.intelligenceProfile.responseStyle);
    if (profile.sessionContextCharLimit !== null) {
      assignContextValueIfMissing(payload, "session_context_char_limit", profile.sessionContextCharLimit);
    }
    if (profile.skillPackExcerptCharLimit !== null) {
      assignContextValueIfMissing(payload, "skill_pack_excerpt_char_limit", profile.skillPackExcerptCharLimit);
    }
    if (profile.skillPacksMaxSelected !== null) {
      assignContextValueIfMissing(payload, "skill_packs_max_selected", profile.skillPacksMaxSelected);
    }
    if (profile.tokenBudget && Object.keys(profile.tokenBudget).length > 0) {
      assignContextValueIfMissing(payload, "token_budget_profile", profile.tokenBudget);
      assignContextValueIfMissing(payload, "token_budget_profile_id", decision.profileId);
    }

    appendSessionDecision(launchSession, "intelligence-profile-selected", {
      profile_id: decision.profileId,
      profile_label: launchSession.intelligenceProfile.label,
      source: decision.source,
      rule_id: decision.ruleId,
      context_sources: decision.contextSources,
      modes: decision.modes,
      entry_point: decision.entryPoint,
      token_budget: profile.tokenBudget || {},
    });
    return launchSession.intelligenceProfile;
  }

  function getObjectPathValue(source, path) {
    if (!source || typeof source !== "object") return undefined;
    const normalizedPath = coerceText(path);
    if (!normalizedPath) return undefined;
    const segments = normalizedPath.split(".").map(function (seg) { return coerceText(seg); }).filter(Boolean);
    if (segments.length === 0) return undefined;
    let cursor = source;
    for (let i = 0; i < segments.length; i += 1) {
      const key = segments[i];
      if (!cursor || typeof cursor !== "object" || !(key in cursor)) return undefined;
      cursor = cursor[key];
    }
    return cursor;
  }

  function hasMeaningfulValue(value) {
    if (value === null || value === undefined) return false;
    if (typeof value === "string") return Boolean(value.trim());
    if (typeof value === "number") return Number.isFinite(value);
    if (typeof value === "boolean") return true;
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === "object") return Object.keys(value).length > 0;
    return false;
  }

  function getMissingContextFields(payload, requiredFields) {
    if (!Array.isArray(requiredFields) || requiredFields.length === 0) return [];
    const missing = [];
    requiredFields.forEach(function (fieldPath) {
      const normalizedFieldPath = coerceText(fieldPath);
      if (!normalizedFieldPath) return;
      if (hasMeaningfulValue(getObjectPathValue(payload, normalizedFieldPath))) return;
      missing.push(normalizedFieldPath);
    });
    return missing;
  }

  function summarizeDecisionValue(value, depth) {
    const level = Number.isFinite(depth) ? depth : 0;
    if (value === null || value === undefined) return "";
    if (typeof value === "string") {
      const text = value.trim();
      if (!text) return "";
      return text.length > 220 ? `${text.slice(0, 220)}…` : text;
    }
    if (typeof value === "number" || typeof value === "boolean") return value;
    if (Array.isArray(value)) {
      if (level >= 2) return [];
      return value
        .slice(0, 8)
        .map(function (item) { return summarizeDecisionValue(item, level + 1); })
        .filter(function (item) { return hasMeaningfulValue(item); });
    }
    if (typeof value === "object") {
      if (level >= 2) return "[object]";
      const normalized = {};
      Object.entries(value)
        .slice(0, 10)
        .forEach(function ([key, item]) {
          const normalizedKey = coerceText(key);
          if (!normalizedKey) return;
          const summarized = summarizeDecisionValue(item, level + 1);
          if (!hasMeaningfulValue(summarized)) return;
          normalized[normalizedKey] = summarized;
        });
      return normalized;
    }
    return coerceText(String(value));
  }

  function ensureSessionDecisionLog(session) {
    if (!session || typeof session !== "object") return [];
    if (!Array.isArray(session.decisionLog)) {
      session.decisionLog = [];
    }
    return session.decisionLog;
  }

  function syncSessionDecisionLogToPayload(session) {
    if (!session || typeof session !== "object") return;
    if (!session.contextPayload || typeof session.contextPayload !== "object") {
      session.contextPayload = {};
    }
    const compactLog = Array.isArray(session.decisionLog) ? session.decisionLog.slice(-16) : [];
    session.contextPayload.session_decision_log = compactLog;
    session.contextPayload.session_decision_count = compactLog.length;
  }

  function appendSessionDecision(session, type, details) {
    if (!session || typeof session !== "object") return;
    const log = ensureSessionDecisionLog(session);
    const normalizedType = coerceText(type) || "event";
    const entry = {
      idx: log.length + 1,
      type: normalizedType,
      at: new Date().toISOString(),
      details: summarizeDecisionValue(details, 0),
    };
    log.push(entry);
    if (log.length > 24) {
      session.decisionLog = log.slice(-24);
    }
    syncSessionDecisionLogToPayload(session);
  }

  function assignContextValueIfMissing(payload, key, value) {
    if (!payload || typeof payload !== "object") return;
    const normalizedKey = coerceText(key);
    if (!normalizedKey || value === null || value === undefined) return;
    if (hasMeaningfulValue(payload[normalizedKey])) return;
    payload[normalizedKey] = value;
  }

  function coerceLaunchContextPayload(value) {
    if (value === null || value === undefined) return {};
    if (typeof value === "string") {
      const trimmed = value.trim();
      if (!trimmed) return {};
      return { context: normalizeVoltageSpeechText(trimmed) };
    }
    if (Array.isArray(value)) {
      return normalizeVoltageSpeechValue({ items: value.slice(0, 32) }, 0);
    }
    if (typeof value !== "object") {
      return { value: normalizeVoltageSpeechText(String(value)) };
    }
    const result = {};
    Object.entries(value).forEach(function ([key, item]) {
      const normalizedKey = coerceText(key);
      if (!normalizedKey) return;
      if (item === null || item === undefined) return;
      if (typeof item === "string") {
        const str = item.trim();
        if (str) result[normalizedKey] = normalizeVoltageSpeechText(str);
        return;
      }
      if (typeof item === "number" || typeof item === "boolean") {
        result[normalizedKey] = item;
        return;
      }
      if (Array.isArray(item)) {
        result[normalizedKey] = item.slice(0, 32);
        return;
      }
      if (typeof item === "object") {
        result[normalizedKey] = item;
      }
    });
    return normalizeVoltageSpeechValue(result, 0);
  }

  function resolveLegacyContext(contextSource, contextPayload) {
    const fromPayload = coerceText(
      contextPayload &&
        typeof contextPayload === "object" &&
        typeof contextPayload.context === "string"
        ? contextPayload.context
        : ""
    );
    if (fromPayload) return fromPayload;
    return coerceText(contextSource) || "general";
  }

  function buildLaunchSessionSignature(session) {
    if (!session || typeof session !== "object") return "";
    const payload = session && typeof session.contextPayload === "object" ? session.contextPayload : {};
    const fields = [
      coerceText(session.characterId).toLowerCase(),
      coerceText(session.contextSource).toLowerCase(),
      coerceText(session.uiMode).toLowerCase(),
      coerceText(payload.context).toLowerCase(),
      coerceText(payload.mode).toLowerCase(),
      coerceText(payload.source_page).toLowerCase(),
      coerceText(payload.entry_point).toLowerCase(),
      coerceText(payload.intelligence_profile_id).toLowerCase(),
    ];
    return fields.join("|");
  }

  function combineContextBlocks(blocks, maxChars) {
    if (!Array.isArray(blocks)) return "";
    const unique = [];
    blocks.forEach(function (block) {
      const text = coerceText(block);
      if (!text || unique.includes(text)) return;
      unique.push(text);
    });
    if (unique.length === 0) return "";
    const limit = Number.isFinite(maxChars) ? Math.max(800, Math.floor(maxChars)) : 3600;
    const combined = unique.join("\n\n");
    return combined.length > limit ? `${combined.slice(0, limit)}…` : combined;
  }

  function normalizeSyntaxAwarenessGlossary(cfg) {
    const source = cfg && cfg.syntax_awareness_glossary;
    const entries = [];
    if (Array.isArray(source)) {
      source.forEach(function (entry) {
        if (typeof entry === "string") {
          const text = coerceText(entry);
          if (!text) return;
          const parts = text.split(":");
          const term = coerceText(parts[0]);
          const definition = coerceText(parts.slice(1).join(":"));
          if (!term || !definition) return;
          entries.push({ term: term, definition: definition });
          return;
        }
        if (!entry || typeof entry !== "object") return;
        const term = coerceText(entry.term || entry.name || entry.key);
        const definition = coerceText(entry.definition || entry.value || entry.notes);
        if (!term || !definition) return;
        entries.push({ term: term, definition: definition });
      });
    } else if (source && typeof source === "object") {
      Object.entries(source).forEach(function ([term, definition]) {
        const normalizedTerm = coerceText(term);
        const normalizedDefinition = coerceText(definition);
        if (!normalizedTerm || !normalizedDefinition) return;
        entries.push({ term: normalizedTerm, definition: normalizedDefinition });
      });
    }
    return entries.slice(0, 24);
  }

  function buildSyntaxAwarenessContext(cfg) {
    const framing = coerceText(cfg && cfg.syntax_awareness_context);
    const glossary = normalizeSyntaxAwarenessGlossary(cfg);
    const glossaryBlock =
      glossary.length > 0
        ? `Core definitions:\n- ${glossary
            .map(function (entry) { return `${entry.term}: ${entry.definition}`; })
            .join("\n- ")}`
        : "";
    return combineContextBlocks([framing, glossaryBlock], 2200);
  }

  function normalizePageContextProfiles(cfg) {
    const source = cfg && cfg.page_context_profiles && typeof cfg.page_context_profiles === "object"
      ? cfg.page_context_profiles
      : {};
    const profiles = {};
    Object.entries(source).forEach(function ([id, entry]) {
      const normalizedId = coerceText(id).toLowerCase();
      if (!normalizedId || !entry || typeof entry !== "object") return;
      const keyPoints = normalizeStringArray(
        entry.key_points !== undefined ? entry.key_points : entry.keyPoints,
        12
      );
      profiles[normalizedId] = {
        id: normalizedId,
        title: coerceText(entry.title || entry.name),
        summary: coerceText(entry.summary || entry.description),
        sessionContext: coerceText(entry.session_context || entry.sessionContext),
        keyPoints: keyPoints,
        contextSources: normalizeStringArrayLower(
          entry.context_sources !== undefined ? entry.context_sources : entry.contextSources,
          16
        ),
        skillPackIds: normalizeStringArrayLower(
          entry.skill_pack_ids !== undefined ? entry.skill_pack_ids : entry.skillPackIds,
          10
        ),
      };
    });
    return profiles;
  }

  function getCurrentPageSlug() {
    try {
      const pathname = window.location && typeof window.location.pathname === "string" ? window.location.pathname : "";
      const filename = pathname.split("/").filter(Boolean).pop() || "index";
      const slug = filename.replace(/\.[^/.]+$/, "").toLowerCase();
      return slug || "index";
    } catch (_err) {
      return "index";
    }
  }

  function normalizeLaunchToken(value, fallback) {
    const normalized = coerceText(value)
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return normalized || coerceText(fallback) || "clerk-launch";
  }

  function buildPageAwareLaunchOptions(rawInput, fallbackInput) {
    const fallback = fallbackInput && typeof fallbackInput === "object" ? fallbackInput : {};
    const fallbackSourcePage = coerceText(fallback.sourcePage || fallback.source_page) || getCurrentPageSlug();
    const fallbackContextSource =
      coerceText(fallback.contextSource || fallback.context_source || fallbackSourcePage) || fallbackSourcePage;
    const fallbackContext = coerceText(fallback.context || fallback.mode) || "technical-follow-up";
    const fallbackMode = coerceText(fallback.mode) || fallbackContext;
    const fallbackConversationMode =
      coerceText(fallback.conversationMode || fallback.conversation_mode) || "followup";
    const fallbackEntryPoint =
      coerceText(fallback.entryPoint || fallback.entry_point) || `${fallbackSourcePage}-clerk-launch`;
    const source = rawInput && typeof rawInput === "object" ? Object.assign({}, rawInput) : {};
    const sourceString = typeof rawInput === "string" ? coerceText(rawInput) : "";

    const resolvedContextSource = coerceText(
      source.contextSource ||
        source.context_source ||
        source.source ||
        sourceString ||
        fallbackContextSource
    ) || fallbackContextSource;
    const resolvedContext = coerceText(
      source.context ||
        source.mode ||
        source.contextMode ||
        source.context_mode ||
        sourceString ||
        fallbackContext
    ) || fallbackContext;
    const resolvedMode = coerceText(source.mode) || resolvedContext || fallbackMode;
    const resolvedSourcePage =
      coerceText(source.sourcePage || source.source_page || fallbackSourcePage) || fallbackSourcePage;
    const resolvedEntryPoint =
      coerceText(source.entryPoint || source.entry_point || fallbackEntryPoint) || fallbackEntryPoint;
    const resolvedConversationMode = coerceText(
      source.conversationMode || source.conversation_mode || fallbackConversationMode
    ) || "followup";
    const normalizedUiMode = normalizeUiMode(
      source.uiMode || source.ui_mode || fallback.uiMode || fallback.ui_mode || "modal",
      getVoiceConfig()
    );

    return Object.assign({}, fallback, source, {
      contextSource: resolvedContextSource,
      context: resolvedContext,
      mode: resolvedMode,
      sourcePage: resolvedSourcePage,
      entryPoint: resolvedEntryPoint,
      conversationMode: resolvedConversationMode,
      uiMode: normalizedUiMode,
    });
  }

  function openClerkFromLaunchInput(rawInput, fallbackInput) {
    if (!isClerkVoiceFeatureEnabled()) return false;
    const launchOptions = buildPageAwareLaunchOptions(rawInput, fallbackInput);
    return openClerkWithPageContext(launchOptions);
  }
  function isHomePageClerkDisabled() {
    const pageSlug = coerceText(getCurrentPageSlug()).toLowerCase();
    return pageSlug === "index" || pageSlug === "home";
  }

  function isFloatingLauncherEnabled(cfg) {
    if (!cfg || cfg.floating_launcher_enabled === false) return false;
    if (isHomePageClerkDisabled()) return false;
    return isClerkVoiceFeatureEnabled();
  }

  function getFloatingLauncherTooltip(cfg) {
    const configured = coerceText(cfg && cfg.floating_launcher_tooltip);
    return configured || "Speak with Clerk";
  }

  function getFloatingLauncherIconCandidates(cfg) {
    const candidates = [
      coerceText(cfg && cfg.floating_launcher_icon_url),
      "assets/images/unity-maxwell-button.png",
      "assets/images/Maxwell_lineARTr01.png",
      "unity-icon-circle-512.png",
      "unity-icon-circle-192.png",
      "apple-touch-icon.png",
      coerceText(cfg && cfg.character_avatar_url),
      coerceText(cfg && cfg.unity_launch_ring_image_url),
      "ClerkMaxwell_251207.png",
      "unity-icon-ring-white-512.png",
    ].filter(Boolean);
    return Array.from(new Set(candidates));
  }

  function syncFloatingLauncherIcon(cfg) {
    const image = document.getElementById("clerkFloatingLauncherImg");
    if (!image) return;
    const candidates = getFloatingLauncherIconCandidates(cfg);
    if (candidates.length === 0) {
      image.hidden = true;
      image.removeAttribute("src");
      return;
    }
    image.hidden = false;
    image.dataset.fallbackIndex = "0";
    image.onerror = function () {
      const currentIndex = Number(image.dataset.fallbackIndex || "0");
      const nextIndex = currentIndex + 1;
      if (nextIndex >= candidates.length) {
        image.onerror = null;
        image.hidden = true;
        return;
      }
      image.dataset.fallbackIndex = String(nextIndex);
      image.src = candidates[nextIndex];
    };
    image.src = candidates[0];
  }

  function setFloatingLauncherVisible(visible) {
    const launcher = document.getElementById("clerkFloatingLauncherWrap");
    if (!launcher) return;
    if (!visible) {
      launcher.hidden = true;
      return;
    }
    const cfg = getVoiceConfig();
    launcher.hidden = !isFloatingLauncherEnabled(cfg);
  }

  function buildFloatingLauncherLaunchOptions(cfg) {
    const pageSlug = getCurrentPageSlug();
    const mode = coerceText(cfg && cfg.floating_launcher_context_mode) || "technical-follow-up";
    return {
      contextSource: pageSlug,
      context: mode,
      mode: mode,
      conversationMode: "followup",
      sourcePage: pageSlug,
      entryPoint: `${pageSlug}-floating-clerk-bubble`,
      likelyUserIntent: "visitor initiated Clerk from the persistent floating launcher",
      responseStyleHint: coerceText(cfg && cfg.floating_launcher_response_style_hint),
      uiMode: "modal",
    };
  }

  function openClerkFromFloatingLauncher() {
    const cfg = getVoiceConfig();
    if (!isFloatingLauncherEnabled(cfg)) return false;
    const launchOptions = buildFloatingLauncherLaunchOptions(cfg);
    return openClerkWithPageContext(launchOptions);
  }

  function ensureFloatingLauncher() {
    injectModalStyles();
    if (!document.body) return null;
    const cfg = getVoiceConfig();
    const tooltipText = getFloatingLauncherTooltip(cfg);
    const existing = document.getElementById("clerkFloatingLauncherWrap");
    if (existing) {
      existing.hidden = !isFloatingLauncherEnabled(cfg);
      const tooltip = document.getElementById("clerkFloatingLauncherTooltip");
      if (tooltip) tooltip.textContent = tooltipText;
      const button = document.getElementById("clerkFloatingLauncherBtn");
      if (button) {
        button.setAttribute("aria-label", tooltipText);
      }
      syncFloatingLauncherIcon(cfg);
      return existing;
    }

    const launcher = document.createElement("div");
    launcher.id = "clerkFloatingLauncherWrap";
    launcher.className = "clerk-floating-launcher-wrap";
    launcher.hidden = !isFloatingLauncherEnabled(cfg);
    launcher.innerHTML = `
      <button id="clerkFloatingLauncherBtn" class="clerk-floating-launcher-btn" type="button" aria-label="${tooltipText}">
        <img id="clerkFloatingLauncherImg" class="clerk-floating-launcher-img" alt="Clerk launcher icon" />
        <span class="clerk-floating-launcher-pulse" aria-hidden="true"></span>
      </button>
      <span id="clerkFloatingLauncherTooltip" class="clerk-floating-launcher-tooltip">${tooltipText}</span>
    `;
    document.body.appendChild(launcher);

    const button = document.getElementById("clerkFloatingLauncherBtn");
    if (button) {
      button.addEventListener("click", function () {
        openClerkFromFloatingLauncher();
      });
    }
    syncFloatingLauncherIcon(cfg);
    return launcher;
  }

  function resolveLaunchPageKey(launchSession) {
    const payload = launchSession && typeof launchSession.contextPayload === "object" ? launchSession.contextPayload : {};
    const candidates = [
      payload.source_page,
      payload.page_slug,
      payload.page,
      payload.context_page,
      launchSession && launchSession.contextSource,
      launchSession && launchSession.legacyContext,
      getCurrentPageSlug(),
    ];
    for (let i = 0; i < candidates.length; i += 1) {
      const key = coerceText(candidates[i]).toLowerCase();
      if (key) return key;
    }
    return "index";
  }

  function resolvePageContextProfile(launchSession, cfg) {
    const profiles = normalizePageContextProfiles(cfg);
    const values = Object.values(profiles);
    if (values.length === 0) return null;
    const directKey = resolveLaunchPageKey(launchSession);
    if (directKey && profiles[directKey]) return profiles[directKey];

    const contextSources = collectLaunchContextSources(launchSession);
    for (let i = 0; i < values.length; i += 1) {
      const profile = values[i];
      if (!profile || !Array.isArray(profile.contextSources) || profile.contextSources.length === 0) continue;
      const matched = contextSources.some(function (source) {
        return matchesAnyPattern(source, profile.contextSources);
      });
      if (matched) return profile;
    }
    return null;
  }

  function mergeRequestedSkillPackIds(payload, additionalIds) {
    if (!payload || typeof payload !== "object") return;
    if (!Array.isArray(additionalIds) || additionalIds.length === 0) return;
    const merged = getRequestedSkillPackIds(payload);
    additionalIds.forEach(function (id) {
      const normalized = coerceText(id).toLowerCase();
      if (!normalized || merged.includes(normalized)) return;
      merged.push(normalized);
    });
    if (merged.length > 0) {
      payload.requested_skill_pack_ids = merged.slice(0, 12);
    }
  }

  function applySharedContextAwareness(launchSession, cfg) {
    if (!launchSession || typeof launchSession !== "object") return;
    if (!launchSession.contextPayload || typeof launchSession.contextPayload !== "object") {
      launchSession.contextPayload = {};
    }
    const payload = launchSession.contextPayload;
    const configuredSessionContext = coerceText(cfg && cfg.session_context);
    const launchSessionContext = coerceText(payload.session_context);
    const responsePrecedenceGuidance = coerceText(
      payload.response_precedence_guidance ||
      (cfg && cfg.response_precedence_guidance)
    );
    const knowledgeReferenceSpine = coerceText(
      payload.knowledge_reference_spine ||
      (cfg && cfg.knowledge_reference_spine)
    );
    const syntaxContext = buildSyntaxAwarenessContext(cfg);
    const responseStyleHint = coerceText(payload.response_style_hint);
    const tokenBudgetProfile =
      payload.token_budget_profile && typeof payload.token_budget_profile === "object"
        ? payload.token_budget_profile
        : null;
    const tokenBudgetHint = tokenBudgetProfile
      ? `Token budget guidance: ${Object.entries(tokenBudgetProfile)
          .map(function ([key, value]) {
            const normalizedKey = coerceText(key).replace(/_/g, " ");
            const normalizedValue = Number.isFinite(Number(value)) ? Math.floor(Number(value)) : "";
            if (!normalizedKey || !normalizedValue) return "";
            return `${normalizedKey} ${normalizedValue}`;
          })
          .filter(Boolean)
          .join(", ")}.`
      : "";
    const profile = resolvePageContextProfile(launchSession, cfg);

    let pageContextBlock = "";
    if (profile) {
      assignContextValueIfMissing(payload, "source_page", profile.id);
      assignContextValueIfMissing(payload, "page_context_title", profile.title);
      assignContextValueIfMissing(payload, "page_context_summary", profile.summary);
      if (Array.isArray(profile.keyPoints) && profile.keyPoints.length > 0) {
        assignContextValueIfMissing(payload, "page_context_key_points", profile.keyPoints);
      }
      if (Array.isArray(profile.skillPackIds) && profile.skillPackIds.length > 0) {
        mergeRequestedSkillPackIds(payload, profile.skillPackIds);
      }
      const keyPointBlock =
        Array.isArray(profile.keyPoints) && profile.keyPoints.length > 0
          ? `Active page points:\n- ${profile.keyPoints.join("\n- ")}`
          : "";
      pageContextBlock = combineContextBlocks(
        [
          profile.sessionContext,
          profile.summary ? `Active page context: ${profile.summary}` : "",
          keyPointBlock,
        ],
        1800
      );
      appendSessionDecision(launchSession, "page-context-applied", {
        profile_id: profile.id,
        skill_pack_ids: profile.skillPackIds || [],
      });
    } else {
      assignContextValueIfMissing(payload, "source_page", getCurrentPageSlug());
    }
    if (responsePrecedenceGuidance) {
      assignContextValueIfMissing(payload, "response_precedence_guidance", responsePrecedenceGuidance);
    }
    if (knowledgeReferenceSpine) {
      assignContextValueIfMissing(payload, "knowledge_reference_spine", knowledgeReferenceSpine);
    }

    const sessionContextCharLimitRaw =
      payload.session_context_char_limit !== undefined
        ? payload.session_context_char_limit
        : cfg && cfg.session_context_char_limit;
    const mergedSessionContext = combineContextBlocks(
      [
        configuredSessionContext,
        responsePrecedenceGuidance ? `Response precedence: ${responsePrecedenceGuidance}` : "",
        knowledgeReferenceSpine ? `Canonical reference spine: ${knowledgeReferenceSpine}` : "",
        launchSessionContext,
        responseStyleHint ? `Response style guidance: ${responseStyleHint}` : "",
        tokenBudgetHint,
        syntaxContext,
        pageContextBlock
      ],
      clampNumber(sessionContextCharLimitRaw, 800, 8000, 3600)
    );
    if (mergedSessionContext) {
      payload.session_context = mergedSessionContext;
    }
    if (syntaxContext) {
      payload.syntax_awareness_active = true;
    }
  }

  function getTrimmedConfigText(cfg, key) {
    if (!cfg || typeof cfg !== "object") return "";
    return typeof cfg[key] === "string" ? cfg[key].trim() : "";
  }

  function normalizeVisitorName(rawName) {
    const text = coerceText(rawName).replace(/[^A-Za-z' -]/g, " ").replace(/\s+/g, " ");
    if (!text) return "";
    const words = text
      .split(" ")
      .filter(Boolean)
      .slice(0, 3)
      .map(function (word) {
        if (!word) return "";
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .filter(Boolean);
    if (words.length === 0) return "";
    const candidate = words.join(" ");
    if (!/^[A-Za-z][A-Za-z' -]{0,46}$/.test(candidate)) return "";
    return candidate;
  }

  function parseVisitorNameFromText(text) {
    const sample = coerceText(text);
    if (!sample) return "";
    const patterns = [
      /\b(?:my name is|i am|i'm|this is|call me)\s+([A-Za-z][A-Za-z' -]{0,50})/i,
      /\b(?:name's)\s+([A-Za-z][A-Za-z' -]{0,50})/i,
    ];
    for (let i = 0; i < patterns.length; i += 1) {
      const match = sample.match(patterns[i]);
      if (!match || !match[1]) continue;
      const normalized = normalizeVisitorName(match[1]);
      if (/\b(founder|ceo|president|manager|director|engineer|operator|unity|energy)\b/i.test(normalized)) {
        continue;
      }
      if (normalized) return normalized;
    }
    return "";
  }

  function getFounderIdentityAliases(cfg) {
    const defaults = ["mike howell", "mike", "mr howell", "michael howell"];
    const configured = Array.isArray(cfg && cfg.founder_identity_aliases)
      ? cfg.founder_identity_aliases
          .map(function (value) { return coerceText(value).toLowerCase(); })
          .filter(Boolean)
      : [];
    const all = configured.concat(defaults);
    const unique = [];
    all.forEach(function (value) {
      if (!value || unique.includes(value)) return;
      unique.push(value);
    });
    return unique;
  }

  function detectFounderSignal(text, cfg) {
    if (!cfg || cfg.founder_detection_enabled === false) {
      return { active: false, identity: "" };
    }
    const sample = coerceText(text).toLowerCase();
    if (!sample) return { active: false, identity: "" };
    const hasIntroPhrase = /\b(this is|i am|i'm|my name is)\b/i.test(sample);
    const hasFounderClaim = /\b(founder|founder of unity energy|unity founder)\b/i.test(sample);
    const hasUnityRef = /\bunity energy\b/i.test(sample);
    const aliases = getFounderIdentityAliases(cfg);
    const aliasHit = aliases.some(function (alias) {
      return alias && sample.includes(alias);
    });
    if (!(hasIntroPhrase && hasFounderClaim && (aliasHit || hasUnityRef))) {
      return { active: false, identity: "" };
    }
    const configuredName = coerceText(cfg && cfg.founder_identity_name);
    if (sample.includes("mike howell") || sample.includes("michael howell")) {
      return { active: true, identity: "Mike Howell" };
    }
    if (configuredName) return { active: true, identity: configuredName };
    if (currentVisitorName) return { active: true, identity: currentVisitorName };
    return { active: true, identity: "Founder" };
  }

  function clampNumber(value, min, max, fallback) {
    const num = Number(value);
    if (!Number.isFinite(num)) return fallback;
    return Math.max(min, Math.min(max, Math.floor(num)));
  }

  function getGuardrailSettings(cfg) {
    return {
      enabled: Boolean(cfg && cfg.guardrails_enabled),
      founderBypass: cfg && cfg.guardrails_founder_bypass !== false,
      maxQuestions: clampNumber(cfg && cfg.guardrails_max_questions_per_session, 3, 50, 8),
      freeQuestions: clampNumber(cfg && cfg.guardrails_free_questions, 0, 10, 2),
      maxMinutes: clampNumber(cfg && cfg.guardrails_max_session_minutes, 2, 120, 12),
      idleSeconds: clampNumber(cfg && cfg.guardrails_idle_timeout_seconds, 15, 1800, 90),
      lowRelevanceLimit: clampNumber(cfg && cfg.guardrails_low_relevance_limit, 1, 6, 2),
      minRelevanceScore: clampNumber(cfg && cfg.guardrails_min_relevance_score, 1, 8, 1),
      maxSessionsPerDay: clampNumber(cfg && cfg.guardrails_max_sessions_per_day, 1, 100, 6),
      dailyMeteringEnabled: !cfg || cfg.guardrails_enable_daily_metering !== false,
      offboardMessage: coerceText(cfg && cfg.guardrails_offboard_message),
      contactEmail: coerceText(cfg && cfg.guardrails_contact_email) || "sales@unityenergy.com",
      contactUrl: coerceText(cfg && cfg.guardrails_contact_url) || "https://unityenergy.com/contact-us",
      relevanceKeywords: Array.isArray(cfg && cfg.guardrails_relevance_keywords)
        ? cfg.guardrails_relevance_keywords
            .map(function (kw) { return coerceText(kw).toLowerCase(); })
            .filter(Boolean)
        : [],
    };
  }

  function shouldBypassGuardrails(settings) {
    return Boolean(settings && settings.founderBypass && founderModeActive);
  }

  function getGuardrailStorageKey() {
    return "maxwellian_clerk_guardrail_meter_v1";
  }

  function getTodayKey() {
    const now = new Date();
    const yyyy = String(now.getFullYear());
    const mm = String(now.getMonth() + 1).padStart(2, "0");
    const dd = String(now.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  }

  function readDailyMeter() {
    const base = { date: getTodayKey(), sessions_started: 0 };
    try {
      const raw = window.localStorage.getItem(getGuardrailStorageKey());
      if (!raw) return base;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return base;
      if (parsed.date !== base.date) return base;
      const sessions = clampNumber(parsed.sessions_started, 0, 10000, 0);
      return { date: base.date, sessions_started: sessions };
    } catch (_err) {
      return base;
    }
  }

  function writeDailyMeter(state) {
    if (!state || typeof state !== "object") return;
    try {
      window.localStorage.setItem(getGuardrailStorageKey(), JSON.stringify(state));
    } catch (_err) {}
  }

  function clearDailyMeter() {
    try {
      window.localStorage.removeItem(getGuardrailStorageKey());
    } catch (_err) {}
  }

  function buildGuardrailOffboardMessage(settings, reason) {
    const reasonLabel = coerceText(reason).replace(/-/g, " ");
    const core =
      settings && settings.offboardMessage
        ? settings.offboardMessage
        : "Thanks for your interest in Clerk. For deeper support, please contact Unity Energy Sales.";
    if (!reasonLabel) return core;
    return `${core} (${reasonLabel})`;
  }

  function clearGuardrailIdleTimer() {
    if (!guardrailIdleTimer) return;
    window.clearTimeout(guardrailIdleTimer);
    guardrailIdleTimer = null;
  }

  function scoreRelevance(text, settings) {
    const sample = coerceText(text).toLowerCase();
    if (!sample) return 0;
    const normalized = sample.replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
    if (!normalized) return 0;
    const keywords = Array.isArray(settings && settings.relevanceKeywords) ? settings.relevanceKeywords : [];
    let score = 0;
    keywords.forEach(function (keyword) {
      if (!keyword) return;
      if (normalized.includes(keyword)) score += 1;
    });
    if (/\b(power|energy|electrical|facility|plant|site)\b/i.test(normalized)) score += 1;
    if (/\?/.test(sample)) score += 1;
    return score;
  }

  function resetGuardrailState() {
    clearGuardrailIdleTimer();
    guardrailSessionStartedAt = 0;
    guardrailLastActivityAt = 0;
    guardrailQuestionCount = 0;
    guardrailLowRelevanceStreak = 0;
    guardrailOffboarded = false;
    guardrailSessionToken = "";
  }

  function markGuardrailActivity() {
    guardrailLastActivityAt = Date.now();
  }

  function scheduleGuardrailIdleTimer(settings, cfg) {
    clearGuardrailIdleTimer();
    if (!settings || !settings.enabled || shouldBypassGuardrails(settings)) return;
    if (!hasConversationStarted) return;
    const timeoutMs = Math.max(15000, settings.idleSeconds * 1000);
    guardrailIdleTimer = window.setTimeout(function () {
      const modal = document.getElementById("clerkVoiceModal");
      if (!modal || !modal.classList.contains("active")) return;
      if (guardrailOffboarded) return;
      triggerGuardrailOffboarding("idle-timeout", settings, cfg);
    }, timeoutMs);
  }

  function initializeGuardrailSession(settings, cfg) {
    resetGuardrailState();
    guardrailSessionStartedAt = Date.now();
    guardrailLastActivityAt = guardrailSessionStartedAt;
    guardrailSessionToken = `gr_${guardrailSessionStartedAt.toString(36)}_${Math.random().toString(36).slice(2, 8)}`;

    if (!pendingLaunchSession || typeof pendingLaunchSession !== "object") {
      return { allowed: true };
    }
    if (!pendingLaunchSession.contextPayload || typeof pendingLaunchSession.contextPayload !== "object") {
      pendingLaunchSession.contextPayload = {};
    }

    pendingLaunchSession.contextPayload.guardrails_enabled = Boolean(settings && settings.enabled);
    pendingLaunchSession.contextPayload.guardrail_session_token = guardrailSessionToken;
    pendingLaunchSession.contextPayload.conversation_mode = pendingLaunchSession.contextPayload.conversation_mode || "customer";
    appendSessionDecision(pendingLaunchSession, "guardrail-initialized", {
      enabled: Boolean(settings && settings.enabled),
      founder_bypass: shouldBypassGuardrails(settings),
      token: guardrailSessionToken,
    });

    if (!settings || !settings.enabled || shouldBypassGuardrails(settings)) {
      return { allowed: true };
    }

    if (settings.dailyMeteringEnabled) {
      const meter = readDailyMeter();
      if (meter.sessions_started >= settings.maxSessionsPerDay) {
        const message = buildGuardrailOffboardMessage(settings, "daily-session-limit");
        appendSessionDecision(pendingLaunchSession, "guardrail-blocked", {
          reason: "daily-session-limit",
          sessions_started: meter.sessions_started,
          max_sessions_per_day: settings.maxSessionsPerDay,
        });
        return { allowed: false, message: message };
      }
      meter.sessions_started += 1;
      writeDailyMeter(meter);
      pendingLaunchSession.contextPayload.guardrail_daily_sessions_started = meter.sessions_started;
    }

    pendingLaunchSession.contextPayload.guardrail_limits = {
      max_questions: settings.maxQuestions,
      free_questions: settings.freeQuestions,
      max_minutes: settings.maxMinutes,
      idle_seconds: settings.idleSeconds,
      low_relevance_limit: settings.lowRelevanceLimit,
      min_relevance_score: settings.minRelevanceScore,
    };
    appendSessionDecision(pendingLaunchSession, "guardrail-limits-applied", pendingLaunchSession.contextPayload.guardrail_limits);
    return { allowed: true };
  }

  function evaluateGuardrailQuestion(text, settings) {
    if (!settings || !settings.enabled || shouldBypassGuardrails(settings)) {
      return { allow: true };
    }
    if (guardrailOffboarded) return { allow: false, reason: "offboarded" };
    const elapsedMinutes = (Date.now() - guardrailSessionStartedAt) / 60000;
    if (elapsedMinutes > settings.maxMinutes) {
      return { allow: false, reason: "session-time-limit" };
    }

    guardrailQuestionCount += 1;
    if (guardrailQuestionCount > settings.maxQuestions) {
      return { allow: false, reason: "question-limit" };
    }

    if (guardrailQuestionCount > settings.freeQuestions) {
      const relevanceScore = scoreRelevance(text, settings);
      if (relevanceScore < settings.minRelevanceScore) {
        guardrailLowRelevanceStreak += 1;
      } else {
        guardrailLowRelevanceStreak = 0;
      }
      if (guardrailLowRelevanceStreak >= settings.lowRelevanceLimit) {
        return { allow: false, reason: "low-relevance-streak" };
      }
    }
    return { allow: true };
  }

  function enforceGuardrailHeartbeat(settings) {
    if (!settings || !settings.enabled || shouldBypassGuardrails(settings) || guardrailOffboarded) return { allow: true };
    const elapsedMinutes = (Date.now() - guardrailSessionStartedAt) / 60000;
    if (elapsedMinutes > settings.maxMinutes) {
      return { allow: false, reason: "session-time-limit" };
    }
    return { allow: true };
  }

  function triggerGuardrailOffboarding(reason, settings, cfg) {
    if (guardrailOffboarded) return;
    guardrailOffboarded = true;
    clearGuardrailIdleTimer();
    const message = buildGuardrailOffboardMessage(settings, reason);
    setStatus(message, false, true);
    setStartButtonVisible(false);

    if (pendingLaunchSession && typeof pendingLaunchSession === "object") {
      if (!pendingLaunchSession.contextPayload || typeof pendingLaunchSession.contextPayload !== "object") {
        pendingLaunchSession.contextPayload = {};
      }
      Object.assign(pendingLaunchSession.contextPayload, {
        guardrail_offboarded: true,
        guardrail_offboard_reason: reason,
        guardrail_contact_email: settings.contactEmail,
        guardrail_contact_url: settings.contactUrl,
      });
      appendSessionDecision(pendingLaunchSession, "guardrail-offboarded", {
        reason: reason,
        contact_email: settings.contactEmail,
      });
      postToWidgetFrame({ type: "maxwellian_session_launch", payload: pendingLaunchSession });
    }
    postToWidgetFrame({ type: "cancel" });
  }

  function extractTranscriptText(payload) {
    if (typeof payload === "string") return payload.trim();
    if (!payload || typeof payload !== "object") return "";
    const direct = coerceText(
      payload.text ||
        payload.message ||
        payload.content ||
        payload.utterance ||
        payload.transcript ||
        payload.partial
    );
    if (direct) return direct;
    if (payload.transcript && typeof payload.transcript === "object") {
      const nested = coerceText(
        payload.transcript.text || payload.transcript.message || payload.transcript.content
      );
      if (nested) return nested;
    }
    if (Array.isArray(payload.segments)) {
      const joined = payload.segments
        .map(function (segment) {
          if (typeof segment === "string") return segment;
          if (!segment || typeof segment !== "object") return "";
          return coerceText(segment.text || segment.message || segment.content);
        })
        .filter(Boolean)
        .join(" ");
      return coerceText(joined);
    }
    return "";
  }

  function extractTranscriptRole(payload) {
    if (!payload || typeof payload !== "object") return "";
    return coerceText(
      payload.role || payload.speaker || payload.author || payload.source || payload.sender || payload.actor
    ).toLowerCase();
  }

  function isLikelyAssistantRole(role) {
    return /(assistant|agent|model|ai|bot|clerk)/i.test(role || "");
  }

  function clearQuestionNotesStatusTimer() {
    if (!questionNotesStatusTimer) return;
    window.clearTimeout(questionNotesStatusTimer);
    questionNotesStatusTimer = null;
  }

  function getQuestionNotesThreshold(cfg) {
    if (founderModeActive) return 1;
    const raw = Number(cfg && cfg.question_notes_threshold);
    if (!Number.isFinite(raw)) return 2;
    return Math.max(1, Math.min(6, Math.floor(raw)));
  }

  function getQuestionNotesHoldLine(cfg) {
    if (founderModeActive) {
      const founderHoldLine = coerceText(cfg && cfg.founder_notes_hold_line);
      if (founderHoldLine) return founderHoldLine;
    }
    const configured = coerceText(cfg && cfg.question_notes_hold_line);
    return configured || "Please hold while I go back and get my notes.";
  }

  function buildQuestionFingerprint(text) {
    return coerceText(text).toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  function isLikelyQuestionText(text) {
    const sample = coerceText(text);
    if (!sample || sample.length < 8) return false;
    if (sample.includes("?")) return true;
    return /^(what|how|why|when|where|who|can|could|would|should|do|does|did|is|are|may)\b/i.test(sample);
  }

  function registerVisitorQuestion(text) {
    const sample = coerceText(text);
    if (!isLikelyQuestionText(sample)) return false;
    const fingerprint = buildQuestionFingerprint(sample);
    if (!fingerprint) return false;
    if (
      lastVisitorQuestionFingerprint &&
      (fingerprint === lastVisitorQuestionFingerprint ||
        fingerprint.includes(lastVisitorQuestionFingerprint) ||
        lastVisitorQuestionFingerprint.includes(fingerprint))
    ) {
      return false;
    }
    lastVisitorQuestionFingerprint = fingerprint;
    visitorQuestionCount += 1;
    const compact = sample.length > 260 ? `${sample.slice(0, 260)}…` : sample;
    visitorQuestionLog.push(compact);
    if (visitorQuestionLog.length > 6) {
      visitorQuestionLog = visitorQuestionLog.slice(-6);
    }
    return true;
  }

  function normalizeQuestionNotesLibrary(cfg) {
    const source = Array.isArray(cfg && cfg.question_notes_library) ? cfg.question_notes_library : [];
    return source
      .map(function (entry, index) {
        if (!entry || typeof entry !== "object") return null;
        const id = coerceText(entry.id) || `note-${index + 1}`;
        const title = coerceText(entry.title) || id;
        const notes = coerceText(entry.notes || entry.note || entry.summary);
        if (!notes) return null;
        const keywords = Array.isArray(entry.keywords)
          ? entry.keywords.map(function (kw) { return coerceText(kw).toLowerCase(); }).filter(Boolean)
          : [];
        const sourceDocs = Array.isArray(entry.source_docs)
          ? entry.source_docs.map(function (doc) { return coerceText(doc); }).filter(Boolean)
          : [];
        return {
          id: id,
          title: title,
          notes: notes,
          keywords: keywords,
          source_docs: sourceDocs,
        };
      })
      .filter(Boolean);
  }

  function selectQuestionNotes(cfg, recentQuestions) {
    const library = normalizeQuestionNotesLibrary(cfg);
    if (library.length === 0) {
      return { notes: "", sourceDocs: [] };
    }
    const combined = coerceText((recentQuestions || []).join(" ").toLowerCase());
    const scored = library
      .map(function (entry) {
        let score = 0;
        entry.keywords.forEach(function (kw) {
          if (kw && combined.includes(kw)) score += 1;
        });
        return { entry: entry, score: score };
      })
      .sort(function (a, b) { return b.score - a.score; });
    const picked = scored.filter(function (row) { return row.score > 0; }).slice(0, 3);
    const fallback = picked.length > 0 ? picked : scored.slice(0, 2);
    const notes = fallback.map(function (row) { return `${row.entry.title}: ${row.entry.notes}`; }).join("\n\n");
    const sourceDocs = [];
    fallback.forEach(function (row) {
      row.entry.source_docs.forEach(function (doc) {
        if (doc && !sourceDocs.includes(doc)) sourceDocs.push(doc);
      });
    });
    return { notes: notes, sourceDocs: sourceDocs };
  }

  function buildQuestionNotesContext(cfg) {
    const selected = selectQuestionNotes(cfg, visitorQuestionLog);
    return normalizeVoltageSpeechValue({
      question_notes_active: true,
      question_notes_threshold: getQuestionNotesThreshold(cfg),
      question_notes_questions_seen: visitorQuestionCount,
      question_notes_hold_line: getQuestionNotesHoldLine(cfg),
      question_notes_recent_questions: visitorQuestionLog.slice(-4),
      question_notes_excerpt: selected.notes,
      question_notes_source_docs: selected.sourceDocs,
      question_notes_refreshed_at: new Date().toISOString(),
    }, 0);
  }

  function syncQuestionNotesToSession(cfg) {
    if (!pendingLaunchSession || typeof pendingLaunchSession !== "object") return;
    if (!pendingLaunchSession.contextPayload || typeof pendingLaunchSession.contextPayload !== "object") {
      pendingLaunchSession.contextPayload = {};
    }
    Object.assign(pendingLaunchSession.contextPayload, buildQuestionNotesContext(cfg));
    pendingLaunchSession.contextPayload = normalizeVoltageSpeechValue(pendingLaunchSession.contextPayload, 0);
    appendSessionDecision(pendingLaunchSession, "question-notes-synced", {
      threshold: getQuestionNotesThreshold(cfg),
      questions_seen: visitorQuestionCount,
      source_docs: pendingLaunchSession.contextPayload.question_notes_source_docs || [],
    });
    postToWidgetFrame({ type: "maxwellian_session_launch", payload: pendingLaunchSession });
  }

  function normalizeContextPolicyRules(cfg) {
    const source = Array.isArray(cfg && cfg.context_policy_rules) ? cfg.context_policy_rules : [];
    return source
      .map(function (rule, index) {
        if (!rule || typeof rule !== "object") return null;
        const id = coerceText(rule.id) || `context-policy-${index + 1}`;
        const actionRaw = coerceText(rule.action || rule.decision).toLowerCase();
        const action = actionRaw === "deny" || actionRaw === "ask" || actionRaw === "allow" ? actionRaw : "allow";
        const contextSources = normalizeStringArrayLower(
          rule.context_sources !== undefined ? rule.context_sources : rule.contextSources,
          24
        );
        const modes = normalizeStringArrayLower(
          rule.modes !== undefined ? rule.modes : rule.conversation_modes,
          12
        );
        const uiModes = normalizeStringArrayLower(
          rule.ui_modes !== undefined ? rule.ui_modes : rule.uiModes,
          8
        );
        const requireFields = normalizeStringArray(
          rule.require_fields !== undefined ? rule.require_fields : rule.requireFields,
          12
        );
        const message = coerceText(rule.message || rule.status_message || rule.prompt);
        const rewriteContextSource = coerceText(rule.rewrite_context_source || rule.rewriteContextSource).toLowerCase();
        return {
          id: id,
          action: action,
          contextSources: contextSources,
          modes: modes,
          uiModes: uiModes,
          requireFields: requireFields,
          message: message,
          rewriteContextSource: rewriteContextSource,
        };
      })
      .filter(Boolean);
  }

  function getContextPolicyConfig(cfg) {
    const defaultActionRaw = coerceText(cfg && cfg.context_policy_default_action).toLowerCase();
    const defaultAction =
      defaultActionRaw === "allow" || defaultActionRaw === "deny" || defaultActionRaw === "ask"
        ? defaultActionRaw
        : "allow";
    const rules = normalizeContextPolicyRules(cfg);
    return {
      enabled: Boolean(cfg && cfg.context_policy_enabled) || rules.length > 0,
      defaultAction: defaultAction,
      fallbackContextSource: coerceText(cfg && cfg.context_policy_fallback_context_source) || "general",
      blockMessage:
        coerceText(cfg && cfg.context_policy_block_message) ||
        "This Clerk launch context is currently unavailable.",
      askMessage:
        coerceText(cfg && cfg.context_policy_ask_message) ||
        "Clerk is preparing contextual awareness for this view.",
      rules: rules,
    };
  }

  function evaluateLaunchContextPolicy(launchSession, cfg) {
    const policy = getContextPolicyConfig(cfg);
    if (!policy.enabled) return null;

    const payload = launchSession && typeof launchSession.contextPayload === "object" ? launchSession.contextPayload : {};
    const contextSources = collectLaunchContextSources(launchSession);
    if (contextSources.length === 0) {
      contextSources.push(coerceText(policy.fallbackContextSource).toLowerCase() || "general");
    }
    const modes = collectLaunchModes(launchSession);
    const uiMode = coerceText(launchSession && launchSession.uiMode).toLowerCase();

    let matchedRule = null;
    let missingFields = [];

    for (let i = 0; i < policy.rules.length; i += 1) {
      const rule = policy.rules[i];
      const sourceMatch =
        rule.contextSources.length === 0 ||
        contextSources.some(function (source) { return matchesAnyPattern(source, rule.contextSources); });
      if (!sourceMatch) continue;

      const modeMatch =
        rule.modes.length === 0 ||
        modes.some(function (mode) { return matchesAnyPattern(mode, rule.modes); });
      if (!modeMatch) continue;

      const uiModeMatch = rule.uiModes.length === 0 || matchesAnyPattern(uiMode, rule.uiModes);
      if (!uiModeMatch) continue;

      matchedRule = rule;
      missingFields = getMissingContextFields(payload, rule.requireFields);
      break;
    }

    let action = policy.defaultAction;
    let source = "default";
    let message = "";
    let rewriteContextSource = "";

    if (matchedRule) {
      action = matchedRule.action;
      source = "rule";
      message = matchedRule.message;
      rewriteContextSource = matchedRule.rewriteContextSource;
    }
    if (missingFields.length > 0 && action !== "deny") {
      action = "ask";
      source = "rule-missing-context";
      if (!message) {
        message = "Additional context is needed to run this Clerk mode cleanly.";
      }
    }
    if (!message) {
      if (action === "deny") message = policy.blockMessage;
      if (action === "ask") message = policy.askMessage;
    }

    return {
      enabled: true,
      action: action,
      source: source,
      ruleId: matchedRule ? matchedRule.id : "",
      message: message,
      rewriteContextSource: rewriteContextSource,
      contextSources: contextSources,
      modes: modes,
      missingFields: missingFields,
    };
  }

  function applyLaunchContextPolicy(launchSession, cfg) {
    const decision = evaluateLaunchContextPolicy(launchSession, cfg);
    if (!decision || !launchSession || typeof launchSession !== "object") return null;
    if (!launchSession.contextPayload || typeof launchSession.contextPayload !== "object") {
      launchSession.contextPayload = {};
    }
    launchSession.policyDecision = decision;
    launchSession.contextPayload.context_policy = {
      enabled: true,
      action: decision.action,
      source: decision.source,
      rule_id: decision.ruleId || "",
      context_sources: decision.contextSources.slice(0, 6),
      modes: decision.modes.slice(0, 6),
      missing_fields: decision.missingFields.slice(0, 8),
      evaluated_at: new Date().toISOString(),
    };
    launchSession.contextPayload.context_policy_action = decision.action;
    if (decision.message) {
      launchSession.contextPayload.context_policy_message = decision.message;
    }
    if (decision.action === "ask") {
      launchSession.contextPayload.context_policy_requires_confirmation = true;
    }
    if (decision.action === "deny") {
      launchSession.contextPayload.context_policy_blocked = true;
    }
    if (decision.rewriteContextSource && decision.action !== "deny") {
      launchSession.contextSource = decision.rewriteContextSource;
      launchSession.legacyContext = decision.rewriteContextSource;
      launchSession.contextPayload.context = decision.rewriteContextSource;
    }
    appendSessionDecision(launchSession, "context-policy-evaluated", {
      action: decision.action,
      source: decision.source,
      rule_id: decision.ruleId || "",
      missing_fields: decision.missingFields || [],
    });
    return decision;
  }

  function normalizeSkillPackLibrary(cfg) {
    const source = Array.isArray(cfg && cfg.skill_packs) ? cfg.skill_packs : [];
    return source
      .map(function (entry, index) {
        if (!entry || typeof entry !== "object") return null;
        const id = coerceText(entry.id || entry.key || entry.slug || `skill-pack-${index + 1}`).toLowerCase();
        if (!id) return null;
        const title = coerceText(entry.title || entry.name) || id;
        const summary = coerceText(entry.summary || entry.description);
        const content = coerceText(entry.content || entry.notes || summary);
        if (!content && !summary) return null;
        const keywords = normalizeStringArrayLower(entry.keywords, 28);
        const contextSources = normalizeStringArrayLower(
          entry.context_sources !== undefined ? entry.context_sources : entry.contextSources,
          16
        );
        const modes = normalizeStringArrayLower(
          entry.modes !== undefined ? entry.modes : entry.conversation_modes,
          10
        );
        const sourceDocs = normalizeStringArray(
          entry.source_docs !== undefined ? entry.source_docs : entry.sourceDocs,
          16
        );
        return {
          id: id,
          title: title,
          summary: summary || content,
          content: content || summary,
          keywords: keywords,
          contextSources: contextSources,
          modes: modes,
          sourceDocs: sourceDocs,
          priority: clampNumber(entry.priority, -10, 30, 0),
          alwaysInclude: Boolean(entry.always_include || entry.alwaysInclude),
        };
      })
      .filter(Boolean);
  }

  function normalizeSkillPackSelectionRules(cfg) {
    const source = Array.isArray(cfg && cfg.skill_pack_selection_rules) ? cfg.skill_pack_selection_rules : [];
    return source
      .map(function (rule, index) {
        if (!rule || typeof rule !== "object") return null;
        const id = coerceText(rule.id) || `skill-rule-${index + 1}`;
        const contextSources = normalizeStringArrayLower(
          rule.context_sources !== undefined ? rule.context_sources : rule.contextSources,
          16
        );
        const modes = normalizeStringArrayLower(
          rule.modes !== undefined ? rule.modes : rule.conversation_modes,
          10
        );
        const includeIds = normalizeStringArrayLower(
          rule.include_ids !== undefined ? rule.include_ids : rule.includeIds,
          16
        );
        const excludeIds = normalizeStringArrayLower(
          rule.exclude_ids !== undefined ? rule.exclude_ids : rule.excludeIds,
          16
        );
        return {
          id: id,
          contextSources: contextSources,
          modes: modes,
          includeIds: includeIds,
          excludeIds: excludeIds,
          maxPacks: clampNumber(rule.max_packs !== undefined ? rule.max_packs : rule.maxPacks, 1, 8, 3),
        };
      })
      .filter(Boolean);
  }

  function getRequestedSkillPackIds(payload) {
    if (!payload || typeof payload !== "object") return [];
    const ids = [];
    [
      payload.skill_pack_ids,
      payload.skill_packs,
      payload.requested_skill_pack_ids,
      payload.requested_skill_packs,
    ].forEach(function (value) {
      normalizeStringArray(value, 12).forEach(function (entry) {
        const normalized = entry.toLowerCase();
        if (!normalized || ids.includes(normalized)) return;
        ids.push(normalized);
      });
    });
    return ids;
  }

  function buildSkillPackSelectionText(launchSession) {
    const payload = launchSession && typeof launchSession.contextPayload === "object" ? launchSession.contextPayload : {};
    const fragments = [
      launchSession && launchSession.contextSource,
      launchSession && launchSession.legacyContext,
      payload.context,
      payload.mode,
      payload.conversation_mode,
      payload.customer,
      payload.site,
      payload.board,
      payload.transformer_focus,
      payload.session_context,
      payload.system_prompt_text,
      payload.likely_user_intent,
      payload.william_summary,
    ];
    if (Array.isArray(payload.anomalies) && payload.anomalies.length > 0) {
      fragments.push(payload.anomalies.join(" "));
    }
    return coerceText(fragments.join(" ").toLowerCase());
  }

  function countSkillPackKeywordHits(text, keywords) {
    if (!text || !Array.isArray(keywords) || keywords.length === 0) return 0;
    let hits = 0;
    keywords.forEach(function (keyword) {
      const normalized = coerceText(keyword).toLowerCase();
      if (!normalized) return;
      if (text.includes(normalized)) hits += 1;
    });
    return hits;
  }

  function selectSkillPacksForLaunch(cfg, launchSession) {
    const library = normalizeSkillPackLibrary(cfg);
    const payload = launchSession && typeof launchSession.contextPayload === "object" ? launchSession.contextPayload : {};
    if (library.length === 0) {
      return { selected: [], mode: "none", reasons: {} };
    }

    const maxSelectedRaw =
      payload.skill_packs_max_selected !== undefined
        ? payload.skill_packs_max_selected
        : cfg && cfg.skill_packs_max_selected;
    const maxSelected = clampNumber(maxSelectedRaw, 1, 8, 3);
    const selectionRules = normalizeSkillPackSelectionRules(cfg);
    const contextSources = collectLaunchContextSources(launchSession);
    const modes = collectLaunchModes(launchSession);
    const requestedIds = getRequestedSkillPackIds(payload);
    const fallbackIds = normalizeStringArrayLower(cfg && cfg.skill_packs_fallback_ids, 8);
    const selectionText = buildSkillPackSelectionText(launchSession);
    const includeByRule = [];
    const excludeByRule = [];
    let maxByRule = maxSelected;

    selectionRules.forEach(function (rule) {
      const sourceMatch =
        rule.contextSources.length === 0 ||
        contextSources.some(function (source) { return matchesAnyPattern(source, rule.contextSources); });
      if (!sourceMatch) return;
      const modeMatch =
        rule.modes.length === 0 ||
        modes.some(function (mode) { return matchesAnyPattern(mode, rule.modes); });
      if (!modeMatch) return;

      rule.includeIds.forEach(function (id) {
        if (!id || includeByRule.includes(id)) return;
        includeByRule.push(id);
      });
      rule.excludeIds.forEach(function (id) {
        if (!id || excludeByRule.includes(id)) return;
        excludeByRule.push(id);
      });
      maxByRule = Math.min(maxByRule, rule.maxPacks);
    });

    const candidates = library
      .filter(function (pack) { return !excludeByRule.includes(pack.id); })
      .map(function (pack) {
        let score = pack.priority;
        const reasons = [];
        if (requestedIds.includes(pack.id)) {
          score += 100;
          reasons.push("explicit-request");
        }
        if (pack.alwaysInclude) {
          score += 60;
          reasons.push("always-include");
        }
        if (
          pack.contextSources.length > 0 &&
          contextSources.some(function (source) { return matchesAnyPattern(source, pack.contextSources); })
        ) {
          score += 20;
          reasons.push("context-source-match");
        }
        if (
          pack.modes.length > 0 &&
          modes.some(function (mode) { return matchesAnyPattern(mode, pack.modes); })
        ) {
          score += 14;
          reasons.push("mode-match");
        }
        const keywordHits = countSkillPackKeywordHits(selectionText, pack.keywords);
        if (keywordHits > 0) {
          score += keywordHits * 3;
          reasons.push(`keyword-hit:${keywordHits}`);
        }
        if (includeByRule.includes(pack.id)) {
          score += 80;
          reasons.push("rule-include");
        }
        return { pack: pack, score: score, reasons: reasons };
      })
      .sort(function (a, b) {
        if (b.score !== a.score) return b.score - a.score;
        return a.pack.id.localeCompare(b.pack.id);
      });

    const selected = [];
    const reasonsById = {};
    const limit = Math.max(1, Math.min(maxByRule, maxSelected));
    const addPack = function (pack, reasons) {
      if (!pack || selected.length >= limit) return;
      if (selected.some(function (entry) { return entry.id === pack.id; })) return;
      selected.push(pack);
      reasonsById[pack.id] = Array.isArray(reasons) ? reasons.slice(0, 4) : [];
    };

    requestedIds.forEach(function (id) {
      const found = candidates.find(function (candidate) { return candidate.pack.id === id; });
      if (found) addPack(found.pack, found.reasons.concat(["requested"]));
    });
    includeByRule.forEach(function (id) {
      const found = candidates.find(function (candidate) { return candidate.pack.id === id; });
      if (found) addPack(found.pack, found.reasons.concat(["selection-rule"]));
    });
    candidates.forEach(function (candidate) {
      if (selected.length >= limit) return;
      if (candidate.score <= 0 && selected.length > 0) return;
      addPack(candidate.pack, candidate.reasons);
    });
    if (selected.length === 0) {
      fallbackIds.forEach(function (id) {
        const found = candidates.find(function (candidate) { return candidate.pack.id === id; });
        if (found) addPack(found.pack, found.reasons.concat(["fallback"]));
      });
    }

    return {
      selected: selected.slice(0, limit),
      mode:
        requestedIds.length > 0
          ? "explicit"
          : includeByRule.length > 0
            ? "rule"
            : selected.length > 0
              ? "scored"
              : "none",
      reasons: reasonsById,
      contextSources: contextSources,
      modes: modes,
    };
  }

  function buildSkillPackContext(cfg, launchSession) {
    const skillPacksEnabled = cfg && cfg.skill_packs_enabled !== false;
    const payload = launchSession && typeof launchSession.contextPayload === "object" ? launchSession.contextPayload : {};
    if (!skillPacksEnabled) {
      return { active: false, payload: {}, selection: { selected: [], mode: "disabled", reasons: {} } };
    }
    const selection = selectSkillPacksForLaunch(cfg, launchSession);
    if (!selection.selected || selection.selected.length === 0) {
      return { active: false, payload: {}, selection: selection };
    }

    const sourceDocs = [];
    const excerpts = [];
    selection.selected.forEach(function (pack) {
      const body = coerceText(pack.content || pack.summary);
      if (body) excerpts.push(`${pack.title}: ${body}`);
      pack.sourceDocs.forEach(function (doc) {
        if (!doc || sourceDocs.includes(doc)) return;
        sourceDocs.push(doc);
      });
    });
    const excerptLimitRaw =
      payload.skill_pack_excerpt_char_limit !== undefined
        ? payload.skill_pack_excerpt_char_limit
        : cfg && cfg.skill_pack_excerpt_char_limit;
    const excerptLimit = clampNumber(excerptLimitRaw, 600, 6000, 2400);
    let excerptText = excerpts.join("\n\n");
    if (excerptText.length > excerptLimit) {
      excerptText = `${excerptText.slice(0, excerptLimit)}…`;
    }

    return {
      active: true,
      selection: selection,
      payload: {
        skill_packs_active: true,
        skill_pack_count: selection.selected.length,
        skill_pack_ids: selection.selected.map(function (pack) { return pack.id; }),
        skill_pack_titles: selection.selected.map(function (pack) { return pack.title; }),
        skill_pack_excerpt: excerptText,
        skill_pack_source_docs: sourceDocs,
        skill_pack_selection_mode: selection.mode,
        skill_pack_reasons: selection.reasons,
        skill_pack_selected_at: new Date().toISOString(),
      },
    };
  }

  function applySkillPackContext(launchSession, cfg) {
    if (!launchSession || typeof launchSession !== "object") return null;
    if (!launchSession.contextPayload || typeof launchSession.contextPayload !== "object") {
      launchSession.contextPayload = {};
    }
    const built = buildSkillPackContext(cfg, launchSession);
    if (!built || !built.active) {
      appendSessionDecision(launchSession, "skill-packs-selected", {
        active: false,
        selection_mode: built && built.selection ? built.selection.mode : "none",
      });
      return built;
    }
    Object.entries(built.payload).forEach(function ([key, value]) {
      assignContextValueIfMissing(launchSession.contextPayload, key, value);
    });
    appendSessionDecision(launchSession, "skill-packs-selected", {
      active: true,
      selection_mode: built.selection.mode,
      skill_pack_ids: built.payload.skill_pack_ids || [],
    });
    return built;
  }

  function normalizeLaunchPayload(launchInput, cfg) {
    const base = {
      characterId: getDefaultCharacterId(cfg),
      contextSource: normalizeContextSource("", cfg),
      contextPayload: {},
      uiMode: normalizeUiMode("", cfg),
      legacyContext: "general",
      decisionLog: [],
    };

    if (typeof launchInput === "string") {
      const context = coerceText(launchInput) || "general";
      base.contextSource = context;
      base.contextPayload = { context: context };
      base.legacyContext = context;
    } else if (launchInput && typeof launchInput === "object") {
      const candidateCharacterId = coerceText(launchInput.characterId || launchInput.character_id);
      if (candidateCharacterId && !shouldLockCharacterSelection(cfg)) {
        base.characterId = candidateCharacterId;
      }

      const sourceCandidate = launchInput.contextSource || launchInput.context_source || launchInput.source;
      const payloadCandidate =
        launchInput.contextPayload !== undefined
          ? launchInput.contextPayload
          : launchInput.context_payload !== undefined
            ? launchInput.context_payload
            : launchInput.payload;
      const legacyContext = coerceText(launchInput.context || launchInput.launchContext);

      base.contextSource = normalizeContextSource(sourceCandidate || legacyContext, cfg);
      base.contextPayload = coerceLaunchContextPayload(
        payloadCandidate !== undefined ? payloadCandidate : legacyContext || sourceCandidate || ""
      );
      base.uiMode = normalizeUiMode(launchInput.uiMode || launchInput.ui_mode || launchInput.mode, cfg);
      base.legacyContext = resolveLegacyContext(base.contextSource, base.contextPayload);
    } else {
      base.contextPayload = { context: base.contextSource };
      base.legacyContext = resolveLegacyContext(base.contextSource, base.contextPayload);
    }

    base.characterId = resolveCharacterId(base.characterId, cfg);
    applyLaunchContextPolicy(base, cfg);
    applyIntelligenceProfile(base, cfg);
    applySharedContextAwareness(base, cfg);
    const engagementProtocol = getTrimmedConfigText(cfg, "engagement_protocol");
    if (engagementProtocol) {
      base.contextPayload.engagement_protocol = engagementProtocol;
    }
    const maxwellianKnowledgeSeed = getTrimmedConfigText(cfg, "maxwellian_knowledge_seed");
    if (maxwellianKnowledgeSeed) {
      base.contextPayload.maxwellian_knowledge_seed = maxwellianKnowledgeSeed;
    }
    const responsePrecedenceGuidance = getTrimmedConfigText(cfg, "response_precedence_guidance");
    if (responsePrecedenceGuidance && !coerceText(base.contextPayload.response_precedence_guidance)) {
      base.contextPayload.response_precedence_guidance = responsePrecedenceGuidance;
    }
    const voltageUnitSpeechRule = getVoltageUnitSpeechRule(cfg);
    if (voltageUnitSpeechRule && !coerceText(base.contextPayload.voltage_unit_speech_rule)) {
      base.contextPayload.voltage_unit_speech_rule = voltageUnitSpeechRule;
    }
    const knowledgeReferenceSpine = getTrimmedConfigText(cfg, "knowledge_reference_spine");
    if (knowledgeReferenceSpine && !coerceText(base.contextPayload.knowledge_reference_spine)) {
      base.contextPayload.knowledge_reference_spine = knowledgeReferenceSpine;
    }
    const systemPromptText = getTrimmedConfigText(cfg, "system_prompt_text");
    if (systemPromptText && !coerceText(base.contextPayload.system_prompt_text)) {
      base.contextPayload.system_prompt_text = systemPromptText;
    }
    const sessionVariables = normalizeSessionVariables(cfg);
    if (sessionVariables) {
      [
        "opening_line",
        "name_request_line",
        "identity_line",
        "engagement_order",
        "mpts_core_definition",
        "character_name",
        "character_role",
        "character_style",
      ].forEach(function (key) {
        const value = coerceText(sessionVariables[key]);
        if (value && !base.contextPayload[key]) {
          base.contextPayload[key] = value;
        }
      });
    }
    base.contextPayload.question_notes_threshold = getQuestionNotesThreshold(cfg);
    base.contextPayload.question_notes_hold_line = getQuestionNotesHoldLine(cfg);
    if (currentVisitorName && !base.contextPayload.visitor_name) {
      base.contextPayload.visitor_name = currentVisitorName;
      base.contextPayload.visitor_name_known = true;
    }
    if (base.characterId && !base.contextPayload.character_id) {
      base.contextPayload.character_id = base.characterId;
    }
    if (!base.contextPayload.context) {
      base.contextPayload.context = base.legacyContext;
    }
    base.legacyContext = normalizeVoltageSpeechText(base.legacyContext);
    base.contextPayload = normalizeVoltageSpeechValue(base.contextPayload, 0);
    appendSessionDecision(base, "launch-normalized", {
      character_id: base.characterId,
      context_source: base.contextSource,
      ui_mode: base.uiMode,
      context_keys: Object.keys(base.contextPayload || {}).slice(0, 30),
    });
    applySkillPackContext(base, cfg);
    base.contextPayload = normalizeVoltageSpeechValue(base.contextPayload, 0);
    appendSessionDecision(base, "launch-ready", {
      policy_action:
        base.policyDecision && typeof base.policyDecision === "object" ? base.policyDecision.action : "none",
      skill_pack_count: Array.isArray(base.contextPayload && base.contextPayload.skill_pack_ids)
        ? base.contextPayload.skill_pack_ids.length
        : 0,
    });
    return base;
  }

  function parseLaunchInput(rawValue) {
    if (rawValue && typeof rawValue === "object") return rawValue;
    const raw = coerceText(rawValue);
    if (!raw) return "general";
    if (!(raw.startsWith("{") || raw.startsWith("["))) {
      return raw;
    }
    try {
      return JSON.parse(raw);
    } catch (_err) {
      return raw;
    }
  }

  function cleanReinterpretationText(value, maxLength) {
    const text = coerceText(value);
    if (!text) return "";
    const capped = Number.isFinite(maxLength) ? Math.max(120, Math.floor(maxLength)) : 1200;
    return text.length > capped ? `${text.slice(0, capped)}…` : text;
  }

  function buildReinterpretationContext(input) {
    const source = input && typeof input === "object" ? input : {};
    const context = {
      mode: "reinterpretation",
      transformer_id: cleanReinterpretationText(source.transformerId || source.transformer_id, 120),
      transformer_name: cleanReinterpretationText(source.transformerName || source.transformer_name, 180),
      study_id: cleanReinterpretationText(source.studyId || source.study_id, 140),
      ask: cleanReinterpretationText(source.ask || source.prompt || "Reinterpret this transformer in simple business terms.", 420),
      pattern_summary: cleanReinterpretationText(source.patternSummary || source.pattern_summary, 1600),
      pattern_part1: cleanReinterpretationText(source.patternPart1 || source.pattern_part1, 1400),
      pattern_part2: cleanReinterpretationText(source.patternPart2 || source.pattern_part2, 1400),
      pattern_part3: cleanReinterpretationText(source.patternPart3 || source.pattern_part3, 1400),
      baseline_snapshot: source.baselineSnapshot && typeof source.baselineSnapshot === "object" ? source.baselineSnapshot : null,
      requested_at: new Date().toISOString(),
    };
    Object.keys(context).forEach(function (key) {
      if (context[key] === null || context[key] === undefined || context[key] === "") {
        delete context[key];
      }
    });
    return normalizeVoltageSpeechValue(context, 0);
  }

  function buildReinterpretationLaunch(input) {
    const cfg = getVoiceConfig();
    const source = input && typeof input === "object" ? input : {};
    return {
      characterId: resolveCharacterId(source.characterId || source.character_id || "clerk-maxwell", cfg),
      contextSource: "reinterpretation",
      contextPayload: buildReinterpretationContext(source),
      uiMode: "modal",
    };
  }

  function buildClerkPageLaunchPayload(input) {
    const cfg = getVoiceConfig();
    const source = input && typeof input === "object" ? input : {};
    const sourcePage = coerceText(source.sourcePage || source.source_page) || getCurrentPageSlug();
    const contextSource = normalizeContextSource(
      source.contextSource || source.context_source || sourcePage,
      cfg
    );
    const contextValue =
      coerceText(source.context) ||
      coerceText(source.mode) ||
      coerceText(source.contextMode || source.context_mode) ||
      "technical-follow-up";
    const modeValue = coerceText(source.mode) || contextValue;
    const conversationMode =
      coerceText(source.conversationMode || source.conversation_mode) || "followup";
    const entryPoint =
      coerceText(source.entryPoint || source.entry_point) || `${sourcePage}-clerk-launch`;
    const payload = {
      context: contextValue,
      mode: modeValue,
      conversation_mode: conversationMode,
      source_page: sourcePage,
      entry_point: entryPoint,
    };
    assignContextValueIfMissing(payload, "source_media", coerceText(source.sourceMedia || source.source_media));
    if (Number.isFinite(Number(source.sourceMediaSeconds || source.source_media_seconds))) {
      payload.source_media_seconds = Math.max(
        0,
        Math.floor(Number(source.sourceMediaSeconds || source.source_media_seconds))
      );
    }
    assignContextValueIfMissing(payload, "opening_line", coerceText(source.openingLine || source.opening_line));
    assignContextValueIfMissing(
      payload,
      "name_request_line",
      coerceText(source.nameRequestLine || source.name_request_line)
    );
    assignContextValueIfMissing(
      payload,
      "likely_user_intent",
      coerceText(source.likelyUserIntent || source.likely_user_intent)
    );
    assignContextValueIfMissing(
      payload,
      "response_style_hint",
      coerceText(source.responseStyleHint || source.response_style_hint)
    );
    assignContextValueIfMissing(
      payload,
      "speech_mode",
      coerceText(source.speechMode || source.speech_mode)
    );
    assignContextValueIfMissing(
      payload,
      "session_context",
      coerceText(source.sessionContext || source.session_context)
    );
    assignContextValueIfMissing(
      payload,
      "selected_story_type",
      coerceText(source.selectedStoryType || source.selected_story_type)
    );
    assignContextValueIfMissing(
      payload,
      "selected_story_title",
      coerceText(source.selectedStoryTitle || source.selected_story_title)
    );
    assignContextValueIfMissing(
      payload,
      "selected_story_id",
      coerceText(source.selectedStoryId || source.selected_story_id)
    );
    assignContextValueIfMissing(
      payload,
      "selected_story_summary",
      coerceText(source.selectedStorySummary || source.selected_story_summary)
    );
    assignContextValueIfMissing(
      payload,
      "selected_story_url",
      coerceText(source.selectedStoryUrl || source.selected_story_url)
    );

    const extraPayload = coerceLaunchContextPayload(
      source.extraPayload !== undefined
        ? source.extraPayload
        : source.extra_payload !== undefined
          ? source.extra_payload
          : source.contextPayload !== undefined
            ? source.contextPayload
            : source.context_payload
    );
    Object.entries(extraPayload).forEach(function ([key, value]) {
      if (!key) return;
      payload[key] = value;
    });

    const requestedSkillPackIds = normalizeStringArrayLower(
      source.requestedSkillPackIds !== undefined
        ? source.requestedSkillPackIds
        : source.requested_skill_pack_ids,
      12
    );
    if (requestedSkillPackIds.length > 0) {
      payload.requested_skill_pack_ids = requestedSkillPackIds;
    }

    return {
      contextSource: contextSource,
      contextPayload: payload,
      uiMode: normalizeUiMode(source.uiMode || source.ui_mode || "modal", cfg),
    };
  }

  function openClerkWithPageContext(input) {
    if (!isClerkVoiceFeatureEnabled()) return false;
    if (isHomePageClerkDisabled()) return false;
    const source = input && typeof input === "object" ? input : {};
    const launchPayload = buildClerkPageLaunchPayload(source);
    try {
      if (source.closeExistingSession !== false && typeof closeClerkVoiceModal === "function") {
        closeClerkVoiceModal();
      }
      openClerkVoiceModal(launchPayload);
      const modal = document.getElementById("clerkVoiceModal");
      return Boolean(modal && modal.classList.contains("active"));
    } catch (_err) {
      return false;
    }
  }

  function openClerkReinterpretation(input) {
    openClerkVoiceModal(buildReinterpretationLaunch(input));
  }

  function buildSessionDiagnostics(session, cfg, url, phase) {
    if (!session || typeof session !== "object") return "";
    const contextPayload = session && typeof session.contextPayload === "object" ? session.contextPayload : {};
    const intelligenceProfileId = coerceText(contextPayload.intelligence_profile_id);
    const tokenBudgetProfile =
      contextPayload.token_budget_profile && typeof contextPayload.token_budget_profile === "object"
        ? contextPayload.token_budget_profile
        : {};
    const policyAction =
      session.policyDecision && typeof session.policyDecision === "object"
        ? session.policyDecision.action
        : coerceText(contextPayload.context_policy_action);
    const skillPackIds = Array.isArray(contextPayload.skill_pack_ids) ? contextPayload.skill_pack_ids.slice(0, 6) : [];
    const diagnostics = {
      phase: phase || "launch",
      characterId: session.characterId || getDefaultCharacterId(cfg),
      uiMode: session.uiMode || normalizeUiMode("", cfg),
      contextSource: session.contextSource || normalizeContextSource("", cfg),
      contextKeys: Object.keys(contextPayload || {}),
      legacyContext: session.legacyContext || "general",
      intelligenceProfileId: intelligenceProfileId || "default",
      tokenBudgetProfile: hasMeaningfulValue(tokenBudgetProfile) ? tokenBudgetProfile : {},
      policyAction: policyAction || "none",
      skillPackIds: skillPackIds,
      decisionCount: Array.isArray(session.decisionLog) ? session.decisionLog.length : 0,
      embedOrigin: getEmbedOrigin(url || ""),
      timestamp: new Date().toISOString(),
    };
    return JSON.stringify(diagnostics, null, 2);
  }

  function shouldShowDiagnostics(cfg) {
    return Boolean(cfg && (cfg.show_session_diagnostics || cfg.debug));
  }

  function shouldEnableCharacterSwitcher(cfg) {
    return Boolean(cfg && cfg.enable_character_switcher);
  }
  function shouldLockCharacterSelection(cfg) {
    return !cfg || cfg.lock_character_to_default !== false;
  }
  function isAppleMobileWebKitBrowser() {
    const ua = typeof navigator !== "undefined" && typeof navigator.userAgent === "string" ? navigator.userAgent : "";
    const platform =
      typeof navigator !== "undefined" && typeof navigator.platform === "string" ? navigator.platform : "";
    const maxTouchPoints =
      typeof navigator !== "undefined" && Number.isFinite(navigator.maxTouchPoints)
        ? Number(navigator.maxTouchPoints)
        : 0;
    const isIOSDevice = /iPhone|iPad|iPod/i.test(ua) || (platform === "MacIntel" && maxTouchPoints > 1);
    if (!isIOSDevice) return false;
    const isAppleWebKit = /AppleWebKit/i.test(ua);
    const isCriOS = /CriOS/i.test(ua);
    const isFxiOS = /FxiOS/i.test(ua);
    return isAppleWebKit && !isCriOS && !isFxiOS;
  }

  function shouldUseUnityStartGate(cfg) {
    if (cfg && typeof cfg.force_unity_start_gate === "boolean") {
      return cfg.force_unity_start_gate;
    }
    return isAppleMobileWebKitBrowser();
  }

  function isClerkVoiceFeatureEnabled() {
    const flags = window.UNITY_PUBLIC_RELEASE_FLAGS;
    if (!flags || typeof flags !== "object") return true;
    const features = flags.features && typeof flags.features === "object" ? flags.features : {};
    if (typeof features.clerk_voice === "boolean") {
      return features.clerk_voice;
    }
    if (typeof window.isUnityFeatureEnabled === "function") {
      try {
        return Boolean(window.isUnityFeatureEnabled("clerk_voice"));
      } catch (_err) {
        return true;
      }
    }
    return true;
  }

  function cloneAuth(auth) {
    if (!auth || typeof auth !== "object") return { type: "", value: "" };
    return {
      type: typeof auth.type === "string" ? auth.type : "",
      value: typeof auth.value === "string" ? auth.value : "",
    };
  }

  function cloneSessionVariables(vars) {
    if (!vars || typeof vars !== "object") return {};
    return Object.assign({}, vars);
  }

  function getCharacterRegistry(cfg) {
    const registry = {};
    const source = cfg && cfg.characters && typeof cfg.characters === "object" ? cfg.characters : {};

    Object.entries(source).forEach(function ([id, value]) {
      const normalizedId = coerceText(id);
      if (!normalizedId || !value || typeof value !== "object") return;
      registry[normalizedId] = value;
    });

    const defaultId = coerceText((cfg && cfg.default_character_id) || (cfg && cfg.character_id) || "clerk-maxwell");
    if (!registry[defaultId]) {
      registry[defaultId] = {
        character_name: cfg && cfg.character_name ? cfg.character_name : "Clerk Maxwell",
        character_avatar_url: cfg && cfg.character_avatar_url ? cfg.character_avatar_url : "",
        character_background_url: cfg && cfg.character_background_url ? cfg.character_background_url : "",
        embed_url: cfg && cfg.embed_url ? cfg.embed_url : "",
        config_id: cfg && cfg.config_id ? cfg.config_id : "",
        voice_id: cfg && cfg.voice_id ? cfg.voice_id : "",
      };
    }
    return registry;
  }

  function resolveCharacterId(characterId, cfg) {
    const registry = getCharacterRegistry(cfg);
    if (shouldLockCharacterSelection(cfg)) {
      const lockedId = coerceText((cfg && cfg.default_character_id) || (cfg && cfg.character_id) || "clerk-maxwell");
      if (lockedId && registry[lockedId]) return lockedId;
    }
    const candidate = coerceText(characterId);
    if (candidate && registry[candidate]) return candidate;
    const fallback = coerceText((cfg && cfg.default_character_id) || (cfg && cfg.character_id) || "clerk-maxwell");
    if (fallback && registry[fallback]) return fallback;
    const keys = Object.keys(registry);
    return keys.length > 0 ? keys[0] : "clerk-maxwell";
  }

  function resolveActiveCharacterConfig(cfg, launchSession) {
    const registry = getCharacterRegistry(cfg);
    const resolvedCharacterId = resolveCharacterId(launchSession && launchSession.characterId, cfg);
    const characterConfig =
      registry && typeof registry === "object" && registry[resolvedCharacterId] && typeof registry[resolvedCharacterId] === "object"
        ? registry[resolvedCharacterId]
        : {};
    const merged = Object.assign({}, cfg, characterConfig);
    merged.character_id = resolvedCharacterId;
    merged.character_name = coerceText(merged.character_name) || resolvedCharacterId;
    merged.auth = cloneAuth(characterConfig.auth || cfg.auth);
    merged.session_variables = Object.assign(
      {},
      cloneSessionVariables(cfg.session_variables),
      cloneSessionVariables(characterConfig.session_variables)
    );
    const intelligenceProfile =
      launchSession && launchSession.intelligenceProfile && typeof launchSession.intelligenceProfile === "object"
        ? launchSession.intelligenceProfile
        : null;
    if (intelligenceProfile) {
      const profileConfigId = coerceText(intelligenceProfile.configId);
      const profileVoiceId = coerceText(intelligenceProfile.voiceId);
      if (profileConfigId) merged.config_id = profileConfigId;
      if (profileVoiceId) merged.voice_id = profileVoiceId;
      const profileId = coerceText(intelligenceProfile.id);
      const profileLabel = coerceText(intelligenceProfile.label);
      const responseStyle = coerceText(intelligenceProfile.responseStyle);
      if (profileId && !coerceText(merged.session_variables.intelligence_profile_id)) {
        merged.session_variables.intelligence_profile_id = profileId;
      }
      if (profileLabel && !coerceText(merged.session_variables.intelligence_profile_label)) {
        merged.session_variables.intelligence_profile_label = profileLabel;
      }
      if (responseStyle && !coerceText(merged.session_variables.response_style_hint)) {
        merged.session_variables.response_style_hint = responseStyle;
      }
      if (
        intelligenceProfile.tokenBudget &&
        typeof intelligenceProfile.tokenBudget === "object" &&
        !coerceText(merged.session_variables.token_budget_profile)
      ) {
        try {
          merged.session_variables.token_budget_profile = JSON.stringify(intelligenceProfile.tokenBudget);
        } catch (_err) {}
      }
    }
    if (!coerceText(merged.embed_url)) merged.embed_url = coerceText(cfg.embed_url);
    if (!coerceText(merged.config_id)) merged.config_id = coerceText(cfg.config_id);
    if (!coerceText(merged.voice_id)) merged.voice_id = coerceText(cfg.voice_id);
    if (!coerceText(merged.session_context)) merged.session_context = coerceText(cfg.session_context);
    return merged;
  }

  function getRuntimeVoiceConfig() {
    return resolveActiveCharacterConfig(getVoiceConfig(), pendingLaunchSession);
  }
  function getUnityFooterMessage(cfg) {
    const configured = coerceText(cfg && cfg.unity_footer_message);
    if (configured) return configured;
    return "Ask Clerk how Unity makes the invisible field visible.";
  }

  function getUnityLaunchTitle(cfg) {
    const characterName = coerceText(cfg && cfg.character_name) || "Clerk";
    return `Speak with ${characterName}`;
  }

  function getUnityLaunchRingCandidates(cfg) {
    const configured = coerceText(cfg && cfg.unity_launch_ring_image_url);
    const options = [
      configured,
      "assets/images/unity-icon-ring-white-2048.png",
      "unity-icon-ring-white-2048.png",
      "assets/images/unity-icon-ring-white-512.png",
      "unity-icon-ring-white-512.png",
      "assets/images/unity-icon-ring-white-192.png",
      "unity-icon-ring-white-192.png",
    ].filter(Boolean);
    return Array.from(new Set(options));
  }

  function syncUnityLaunchEmblem(cfg) {
    const title = document.getElementById("clerkVoiceLaunchTitle");
    const ring = document.getElementById("clerkVoiceLaunchRing");
    if (title) {
      title.textContent = getUnityLaunchTitle(cfg);
    }
    if (!ring) return;
    const candidates = getUnityLaunchRingCandidates(cfg);
    if (candidates.length === 0) {
      ring.removeAttribute("src");
      ring.hidden = true;
      return;
    }
    ring.hidden = false;
    ring.dataset.fallbackIndex = "0";
    ring.onerror = function () {
      const currentIndex = Number(ring.dataset.fallbackIndex || "0");
      const nextIndex = currentIndex + 1;
      if (nextIndex >= candidates.length) {
        ring.onerror = null;
        return;
      }
      ring.dataset.fallbackIndex = String(nextIndex);
      ring.src = candidates[nextIndex];
    };
    ring.src = candidates[0];
  }
  function getUnityFooterQuestions(cfg) {
    const questions = Array.isArray(cfg && cfg.unity_footer_questions)
      ? cfg.unity_footer_questions
          .map(function (value) {
            return coerceText(value);
          })
          .filter(Boolean)
      : [];
    if (questions.length > 0) return questions.slice(0, 12);
    return [getUnityFooterMessage(cfg)];
  }

  function getUnityFooterRotateSeconds(cfg) {
    const raw = Number(cfg && cfg.unity_footer_rotate_seconds);
    if (!Number.isFinite(raw)) return 15;
    return Math.max(6, Math.min(60, Math.floor(raw)));
  }

  function formatUnityFooterQuestion(question) {
    const text = coerceText(question);
    if (!text) return "Ask Clerk this: How does Unity reduce hidden electrical waste?";
    if (/^ask\s+clerk/i.test(text)) return text;
    return `Ask Clerk this: ${text}`;
  }

  function getFooterQuestionSignature(questions, rotateSeconds) {
    return `${rotateSeconds}|${questions.join("|")}`;
  }

  function stopUnityFooterRotation() {
    if (!footerQuestionTimer) return;
    window.clearInterval(footerQuestionTimer);
    footerQuestionTimer = null;
  }

  function setUnityBottomMaskVisible(visible) {
    const mask = document.getElementById("clerkVoiceBottomMask");
    if (!mask) return;
    mask.hidden = !visible;
  }

  function setUnityOverlayVisible(visible) {
    const overlay = document.getElementById("clerkVoiceUnityOverlay");
    if (!overlay) return;
    overlay.hidden = !visible;
  }

  function setLaunchEmblemVisible(visible) {
    const emblem = document.getElementById("clerkVoiceLaunchEmblem");
    if (!emblem) return;
    emblem.hidden = true;
  }

  function setUnityOverlayMessage(message) {
    const label = document.getElementById("clerkVoiceUnityMessage");
    if (!label) return;
    label.textContent = message;
  }
  function syncUnityFooterQuestion(questions) {
    if (!Array.isArray(questions) || questions.length === 0) return;
    const normalizedIndex = footerQuestionIndex % questions.length;
    setUnityOverlayMessage(formatUnityFooterQuestion(questions[normalizedIndex]));
  }


  function syncUnityOverlayState() {
    stopUnityFooterRotation();
    setUnityBottomMaskVisible(false);
    setUnityOverlayVisible(false);
  }


  function buildWidgetConnectConfig(cfg, launchSession) {
    const auth = normalizeAuthConfig(cfg);
    if (!auth) return null;
    const connectConfig = { auth: auth, hostname: "api.hume.ai" };
    const configId = resolveConfigId(cfg);
    if (configId) {
      connectConfig.configId = configId;
    }
    const configVersion =
      cfg && Number.isFinite(cfg.config_version) ? Math.max(0, Math.floor(cfg.config_version)) : null;
    if (configVersion !== null) {
      connectConfig.configVersion = configVersion;
    }
    const resumedChatGroupId =
      cfg && typeof cfg.resumed_chat_group_id === "string" ? cfg.resumed_chat_group_id.trim() : "";
    if (resumedChatGroupId) connectConfig.resumedChatGroupId = resumedChatGroupId;
    const debug = Boolean(cfg && cfg.debug);
    if (debug) connectConfig.debug = true;
    const reconnectAttempts =
      cfg && Number.isFinite(cfg.reconnect_attempts) ? Math.max(1, Math.floor(cfg.reconnect_attempts)) : null;
    if (reconnectAttempts) connectConfig.reconnectAttempts = reconnectAttempts;

    return connectConfig;
  }

  function getViewportDimensions() {
    const width = (window.screen && window.screen.availWidth) || window.innerWidth || 1200;
    const height = (window.screen && window.screen.availHeight) || window.innerHeight || 800;
    return { width: width, height: height };
  }

  function postToWidgetFrame(action) {
    const frame = document.getElementById("clerkVoiceFrame");
    if (!frame || !frame.contentWindow || !activeFrameOrigin) return false;
    frame.contentWindow.postMessage(action, activeFrameOrigin);
    return true;
  }

  function sendWidgetConfig(cfg, launchSession) {
    const payload = buildWidgetConnectConfig(cfg, launchSession);
    if (!payload) return false;

    const dims = getViewportDimensions();
    if (launchSession && typeof launchSession === "object") {
      postToWidgetFrame({ type: "maxwellian_session_launch", payload: launchSession });
    }
    postToWidgetFrame({ type: "update_config", payload: payload });
    postToWidgetFrame({ type: "send_window_size", payload: dims });
    postToWidgetFrame({ type: "expand_widget_from_client", payload: dims });
    return true;
  }

  function syncVisitorIdentityToSession(visitorName) {
    if (!visitorName) return;
    if (!pendingLaunchSession || typeof pendingLaunchSession !== "object") return;
    if (!pendingLaunchSession.contextPayload || typeof pendingLaunchSession.contextPayload !== "object") {
      pendingLaunchSession.contextPayload = {};
    }
    pendingLaunchSession.contextPayload.visitor_name = visitorName;
    pendingLaunchSession.contextPayload.visitor_name_known = true;
    appendSessionDecision(pendingLaunchSession, "visitor-identity-captured", {
      visitor_name: visitorName,
    });
    postToWidgetFrame({ type: "maxwellian_session_launch", payload: pendingLaunchSession });
  }

  function syncFounderModeToSession(cfg, triggerText) {
    if (!pendingLaunchSession || typeof pendingLaunchSession !== "object") return;
    if (!pendingLaunchSession.contextPayload || typeof pendingLaunchSession.contextPayload !== "object") {
      pendingLaunchSession.contextPayload = {};
    }
    const founderName = founderModeIdentity || coerceText(cfg && cfg.founder_identity_name) || "Founder";
    const founderGuidance =
      coerceText(cfg && cfg.founder_mode_guidance) ||
      "Founder identified. Prioritize attentive listening, concise note capture, and adapt response dialect to founder tone while preserving technical precision.";
    Object.assign(pendingLaunchSession.contextPayload, {
      founder_mode_active: true,
      conversation_mode: "founder",
      founder_identity_name: founderName,
      founder_role: "Founder",
      founder_note_capture: true,
      founder_dialect_tuning: true,
      founder_mode_guidance: founderGuidance,
      founder_trigger_utterance: cleanReinterpretationText(triggerText, 360),
      question_notes_active: true,
      question_notes_threshold: 1,
      question_notes_hold_line: getQuestionNotesHoldLine(cfg),
    });
    if (founderName && founderName !== "Founder") {
      pendingLaunchSession.contextPayload.visitor_name = founderName;
      pendingLaunchSession.contextPayload.visitor_name_known = true;
    }
    pendingLaunchSession.contextPayload = normalizeVoltageSpeechValue(pendingLaunchSession.contextPayload, 0);
    appendSessionDecision(pendingLaunchSession, "founder-mode-activated", {
      founder_identity_name: founderName,
      trigger: cleanReinterpretationText(triggerText, 200),
    });
    postToWidgetFrame({ type: "maxwellian_session_launch", payload: pendingLaunchSession });
  }

  function expandWidgetFromClient() {
    const dims = getViewportDimensions();
    postToWidgetFrame({ type: "send_window_size", payload: dims });
    postToWidgetFrame({ type: "expand_widget_from_client", payload: dims });
  }

  async function requestTopLevelMicAccess() {
    if (!navigator.mediaDevices || typeof navigator.mediaDevices.getUserMedia !== "function") {
      throw new Error("Microphone API not available in this browser.");
    }
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    stream.getTracks().forEach(function (track) {
      try {
        track.stop();
      } catch (_err) {}
    });
  }
  function isLikelyMicrophoneError(payloadOrMessage) {
    if (!payloadOrMessage) return false;
    if (typeof payloadOrMessage === "string") {
      const normalizedMessage = payloadOrMessage.toLowerCase();
      return /(mic|microphone|notallowederror|permission denied|audio input|unable to connect)/.test(
        normalizedMessage
      );
    }
    if (typeof payloadOrMessage !== "object") return false;
    const errorType = coerceText(
      payloadOrMessage.type ||
        payloadOrMessage.error_type ||
        payloadOrMessage.errorType ||
        payloadOrMessage.code
    ).toLowerCase();
    const errorMessage = coerceText(
      payloadOrMessage.message || payloadOrMessage.detail || payloadOrMessage.reason
    ).toLowerCase();
    if (/mic|microphone/.test(errorType)) return true;
    return /(mic|microphone|notallowederror|permission denied|audio input|unable to connect)/.test(
      `${errorType} ${errorMessage}`
    );
  }

  function bindFrameMessaging() {
    if (frameMessagingBound) return;
    frameMessagingBound = true;

    window.addEventListener("message", function (event) {
      if (!activeFrameOrigin || event.origin !== activeFrameOrigin) return;
      const data = event.data;
      if (!data || typeof data !== "object" || typeof data.type !== "string") return;

      if (data.type === "widget_iframe_is_ready") {
        widgetReady = true;
        clearFrameLoadTimer();
        const cfg = getRuntimeVoiceConfig();
        if (shouldUseUnityStartGate(cfg)) {
          setStatus(
            `Tap Start speaking with ${cfg.character_name} to allow microphone access on this device.`,
            false,
            true
          );
          setStartButtonVisible(true);
          setLaunchEmblemVisible(false);
          setWidgetFrameSize(72, 72);
          setPanelMode("centered");
          setSessionDiagnostics(
            buildSessionDiagnostics(
              pendingLaunchSession,
              cfg,
              document.getElementById("clerkVoiceFrame")?.src || "",
              "awaiting-microphone"
            ),
            false
          );
          return;
        }
        const configured = sendWidgetConfig(cfg, pendingLaunchSession);
        if (!configured) {
          setStatus(
            "Voice auth is missing. Set MAXWELLIAN_HUME_RUNTIME_AUTH/MAXWELLIAN_HUME.auth, or run setMaxwellianHumeAuth('apiKey'|'accessToken', '...') once in browser console.",
            true
          );
          setHelpLink(document.getElementById("clerkVoiceFrame")?.src || "", true);
          return;
        }
        setStatus(`${cfg.character_name} is ready. Use Start Conversation in the voice panel to begin.`, false);
        setStartButtonVisible(false);
        setLaunchEmblemVisible(false);
        setWidgetFrameSize(72, 72);
        setPanelMode("centered");
        setSessionDiagnostics(
          buildSessionDiagnostics(pendingLaunchSession, cfg, document.getElementById("clerkVoiceFrame")?.src || "", "ready"),
          false
        );
        return;
      }
      if (data.type === "resize_frame" && data.payload) {
        setWidgetFrameSize(data.payload.width, data.payload.height);
        return;
      }
      if (data.type === "expand_widget") {
        setStartButtonVisible(false);
        setLaunchEmblemVisible(false);
        setPanelMode("centered");
        return;
      }
      if (data.type === "collapse_widget" || data.type === "minimize_widget") {
        setStartButtonVisible(false);
        setLaunchEmblemVisible(false);
        setPanelMode("docked");
        return;
      }

      if (data.type === "transcript_message") {
        hasConversationStarted = true;
        const transcriptPayload = data && data.payload ? data.payload : null;
        const transcriptRole = extractTranscriptRole(transcriptPayload);
        const transcriptText = extractTranscriptText(transcriptPayload);
        const canCaptureName = !isLikelyAssistantRole(transcriptRole);
        const cfg = getRuntimeVoiceConfig();
        const guardrailSettings = getGuardrailSettings(cfg);
        markGuardrailActivity();
        scheduleGuardrailIdleTimer(guardrailSettings, cfg);
        const heartbeatState = enforceGuardrailHeartbeat(guardrailSettings);
        if (!heartbeatState.allow) {
          triggerGuardrailOffboarding(heartbeatState.reason || "session-time-limit", guardrailSettings, cfg);
          return;
        }
        let shouldHoldForNotes = false;
        if (canCaptureName) {
          const detectedVisitorName = parseVisitorNameFromText(transcriptText);
          if (detectedVisitorName && detectedVisitorName !== currentVisitorName) {
            currentVisitorName = detectedVisitorName;
            syncVisitorIdentityToSession(currentVisitorName);
          }
          const founderSignal = detectFounderSignal(transcriptText, cfg);
          if (founderSignal.active && !founderModeActive) {
            founderModeActive = true;
            founderModeIdentity = founderSignal.identity || currentVisitorName || "Founder";
            if (founderModeIdentity && founderModeIdentity !== "Founder") {
              currentVisitorName = founderModeIdentity;
              syncVisitorIdentityToSession(currentVisitorName);
            }
            questionNotesActivated = true;
            syncFounderModeToSession(cfg, transcriptText);
            shouldHoldForNotes = true;
          }
          const questionLogged = registerVisitorQuestion(transcriptText);
          if (questionLogged) {
            const guardrailDecision = evaluateGuardrailQuestion(transcriptText, guardrailSettings);
            if (!guardrailDecision.allow) {
              triggerGuardrailOffboarding(guardrailDecision.reason || "question-limit", guardrailSettings, cfg);
              return;
            }
            if (!questionNotesActivated && visitorQuestionCount >= getQuestionNotesThreshold(cfg)) {
              questionNotesActivated = true;
              shouldHoldForNotes = true;
              syncQuestionNotesToSession(cfg);
            } else if (questionNotesActivated) {
              syncQuestionNotesToSession(cfg);
            }
          }
        }
        if (shouldHoldForNotes) {
          clearQuestionNotesStatusTimer();
      setStatus(getQuestionNotesHoldLine(cfg), false, true);
          questionNotesStatusTimer = window.setTimeout(function () {
            setStatus("", false);
          }, 1200);
        } else {
          setStatus("", false);
        }
        setStartButtonVisible(false);
        setLaunchEmblemVisible(false);
        setPanelMode("centered");
        return;
      }
      if (data.type === "audio_output") {
        hasConversationStarted = true;
        const cfg = getRuntimeVoiceConfig();
        const guardrailSettings = getGuardrailSettings(cfg);
        markGuardrailActivity();
        scheduleGuardrailIdleTimer(guardrailSettings, cfg);
        const heartbeatState = enforceGuardrailHeartbeat(guardrailSettings);
        if (!heartbeatState.allow) {
          triggerGuardrailOffboarding(heartbeatState.reason || "session-time-limit", guardrailSettings, cfg);
          return;
        }
        setStartButtonVisible(false);
        setLaunchEmblemVisible(false);
        setPanelMode("centered");
        return;
      }
      if (data.type === "error") {
        const payload = data && data.payload && typeof data.payload === "object" ? data.payload : {};
        const detail = typeof payload.message === "string" ? payload.message : "Unknown voice session error.";
        const cfg = getRuntimeVoiceConfig();
        if (isLikelyMicrophoneError(payload) || isLikelyMicrophoneError(detail)) {
          setStatus(
            `Microphone access is blocked. Tap Start speaking with ${cfg.character_name} and allow microphone access for this site, then try again.`,
            true,
            true
          );
          if (shouldUseUnityStartGate(cfg)) {
            setStartButtonVisible(true);
          }
          setLaunchEmblemVisible(false);
          setHelpLink(document.getElementById("clerkVoiceFrame")?.src || "", true);
          setPanelMode("centered");
          return;
        }
        setStatus(`Voice session error: ${detail}`, true, true);
        setStartButtonVisible(false);
        setLaunchEmblemVisible(false);
      }
    });
  }

  function composeEmbedUrl(cfg, launchSession) {
    const rawUrl = (cfg.embed_url || "").trim();
    if (!rawUrl) return "";
    let url;
    try {
      url = new URL(rawUrl, window.location.href);
    } catch (_err) {
      return "";
    }

    const params = url.searchParams;
    const auth = normalizeAuthConfig(cfg);
    if (auth) {
      if (auth.type === "apiKey") params.set("apiKey", auth.value);
      if (auth.type === "accessToken") params.set("accessToken", auth.value);
    }
    const configId = resolveConfigId(cfg);
    if (configId) {
      params.set("config_id", configId);
      params.set("configId", configId);
    }
    const configVersion =
      cfg && Number.isFinite(cfg.config_version) ? Math.max(0, Math.floor(cfg.config_version)) : null;
    if (configVersion !== null) params.set("config_version", String(configVersion));
    const resumedChatGroupId =
      cfg && typeof cfg.resumed_chat_group_id === "string" ? cfg.resumed_chat_group_id.trim() : "";
    if (resumedChatGroupId) params.set("resumed_chat_group_id", resumedChatGroupId);
    const voiceId = normalizeVoiceId(cfg);
    if (voiceId) {
      params.set("voice_id", voiceId);
      params.set("voiceId", voiceId);
    }
    const characterName = coerceText(cfg && cfg.character_name);
    if (characterName) params.set("character_name", characterName);
    if (launchSession && typeof launchSession === "object") {
      const legacyContext = cleanReinterpretationText(launchSession.legacyContext, 240);
      if (legacyContext) params.set("context", legacyContext);
      if (launchSession.characterId) params.set("character_id", launchSession.characterId);
      if (launchSession.contextSource) params.set("context_source", launchSession.contextSource);
      if (launchSession.uiMode) params.set("ui_mode", launchSession.uiMode);
      if (launchSession.intelligenceProfile && launchSession.intelligenceProfile.id) {
        params.set("intelligence_profile_id", launchSession.intelligenceProfile.id);
      }
    } else if (typeof launchSession === "string" && launchSession.trim()) {
      params.set("context", launchSession.trim());
    }
    return url.toString();
  }

  function injectModalStyles() {
    if (document.getElementById("clerkVoiceModalStyles")) return;

    const style = document.createElement("style");
    style.id = "clerkVoiceModalStyles";
    style.textContent = `
      .clerk-voice-modal {
        display: none;
        position: fixed;
        right: 18px;
        bottom: 118px;
        z-index: 12000;
        background: transparent;
        padding: 0;
      }
      .clerk-voice-modal.active { display: block; }
      .clerk-voice-modal-content {
        width: min(460px, calc(100vw - 24px));
        height: min(620px, calc(100vh - 24px));
        background: #ffffff;
        border-radius: 14px;
        border: 2px solid rgba(129, 163, 43, 0.55);
        box-shadow: 0 18px 55px rgba(0, 0, 0, 0.45);
        display: flex;
        flex-direction: column;
        overflow: hidden;
      }
      .clerk-voice-modal-header {
        background: linear-gradient(135deg, rgba(49, 65, 0, 1) 0%, rgba(90, 122, 42, 1) 100%);
        color: rgba(250, 240, 160, 1);
        padding: 14px 18px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 2px solid rgba(129, 163, 43, 1);
      }
      .clerk-voice-header-actions {
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }
      .clerk-voice-modal-title-row {
        display: flex;
        align-items: center;
        gap: 12px;
      }
      .clerk-voice-character-wrap {
        display: none !important;
        align-items: center;
        gap: 8px;
        margin-left: 12px;
      }
      .clerk-voice-character-label {
        font-size: 0.76em;
        font-weight: 700;
        color: rgba(245, 240, 190, 0.95);
        letter-spacing: 0.2px;
      }
      .clerk-voice-character-select {
        min-width: 150px;
        max-width: 220px;
        background: rgba(25, 35, 0, 0.85);
        color: rgba(245, 240, 190, 1);
        border: 1px solid rgba(180, 210, 120, 0.75);
        border-radius: 8px;
        padding: 4px 8px;
        font-size: 0.8em;
        font-weight: 600;
      }
      .clerk-voice-avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid rgba(250, 240, 160, 0.8);
        object-fit: cover;
        background: rgba(25, 35, 0, 0.8);
        flex-shrink: 0;
      }
      .clerk-voice-modal-title {
        font-size: 1.0em;
        font-weight: 700;
        margin: 0;
        letter-spacing: 0.4px;
      }
      .clerk-voice-close {
        background: transparent;
        color: rgba(255, 248, 200, 1);
        border: none;
        font-size: 1.8em;
        line-height: 1;
        cursor: pointer;
        opacity: 0.85;
      }
      .clerk-voice-close:hover { opacity: 1; }
      .clerk-voice-toggle {
        display: none;
        background: rgba(20, 28, 0, 0.65);
        color: rgba(250, 240, 180, 1);
        border: 1px solid rgba(190, 220, 120, 0.8);
        border-radius: 999px;
        padding: 6px 12px;
        font-size: 0.74em;
        font-weight: 700;
        letter-spacing: 0.2px;
        cursor: pointer;
      }
      .clerk-voice-toggle:hover { filter: brightness(1.08); }
      .clerk-voice-status {
        margin: 0;
        padding: 10px 14px;
        min-height: 40px;
        font-size: 0.86em;
        color: rgba(90, 60, 15, 1);
        background: rgba(255, 248, 225, 1);
        border-bottom: 1px solid rgba(220, 180, 100, 0.6);
      }
      .clerk-voice-status.error {
        color: rgba(120, 35, 35, 1);
        background: rgba(255, 235, 235, 1);
        border-bottom-color: rgba(210, 120, 120, 0.6);
      }
      .clerk-voice-help {
        margin: 0;
        padding: 10px 14px;
        font-size: 0.84em;
        color: rgba(49, 65, 0, 1);
        background: rgba(242, 248, 232, 1);
        border-bottom: 1px solid rgba(180, 210, 120, 0.7);
      }
      .clerk-voice-help[hidden] { display: none; }
      .clerk-voice-help a {
        color: rgba(49, 65, 0, 1);
        font-weight: 700;
        text-decoration: underline;
      }
      .clerk-voice-diagnostics {
        margin: 0;
        padding: 10px 14px;
        font-size: 0.76em;
        line-height: 1.45;
        font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
        color: rgba(225, 240, 170, 1);
        background: rgba(25, 35, 0, 0.82);
        border-bottom: 1px solid rgba(129, 163, 43, 0.6);
        white-space: pre-wrap;
        word-break: break-word;
      }
      .clerk-voice-diagnostics.error {
        color: rgba(255, 220, 220, 1);
        background: rgba(65, 20, 20, 0.9);
        border-bottom-color: rgba(210, 120, 120, 0.7);
      }
      .clerk-voice-diagnostics[hidden] { display: none; }
      .clerk-voice-frame-wrap {
        position: relative;
        width: 100%;
        flex: 1;
        background: rgba(18, 20, 24, 1);
        overflow: hidden;
      }
      .clerk-voice-backdrop {
        display: none;
      }
      .clerk-voice-watermark {
        position: absolute;
        right: 12px;
        top: 12px;
        z-index: 2;
        width: 96px;
        height: 96px;
        border-radius: 14px;
        overflow: hidden;
        border: 1px solid rgba(170, 205, 80, 0.55);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.35);
        opacity: 0.55;
        pointer-events: none;
      }
      .clerk-voice-watermark img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .clerk-voice-presence-chip {
        position: absolute;
        top: 12px;
        left: 12px;
        z-index: 2;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 10px;
        border-radius: 999px;
        border: 1px solid rgba(170, 205, 80, 0.6);
        background: rgba(18, 35, 0, 0.72);
        color: rgba(235, 245, 180, 1);
        font-size: 0.78em;
        letter-spacing: 0.3px;
        pointer-events: none;
      }
      .clerk-voice-presence-chip img {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        object-fit: cover;
        border: 1px solid rgba(220, 240, 140, 0.8);
        background: rgba(10, 14, 20, 1);
      }
      .clerk-voice-unity-overlay {
        position: absolute;
        left: 50%;
        bottom: 74px;
        transform: translateX(-50%);
        z-index: 4;
        width: min(96%, 980px);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 8px;
        pointer-events: none;
      }
      .clerk-voice-unity-bottom-mask {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        height: 118px;
        z-index: 3;
        pointer-events: none;
        background: linear-gradient(
          180deg,
          rgba(8, 12, 18, 0) 0%,
          rgba(8, 12, 18, 0.58) 42%,
          rgba(8, 12, 18, 0.94) 82%,
          rgba(8, 12, 18, 0.98) 100%
        );
      }
      .clerk-voice-unity-overlay.docked { display: none; }
      .clerk-voice-unity-bottom-mask.docked { display: none; }
      .clerk-voice-unity-message {
        width: 100%;
        padding: 4px 12px;
        border: none;
        background: transparent;
        color: rgba(250, 247, 220, 0.98);
        text-align: center;
        font-size: 1.34em;
        font-family: "Times New Roman", Times, serif;
        font-style: italic;
        font-weight: 700;
        line-height: 1.35;
        letter-spacing: 0.2px;
        text-shadow: 0 2px 8px rgba(0, 0, 0, 0.78);
      }
      .clerk-voice-frame {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;
        width: 50px;
        height: 50px;
        border: none;
        background: transparent;
        border-radius: 18px;
        overflow: hidden;
        transition: all 220ms ease;
      }
      .clerk-voice-frame.docked {
        left: auto;
        top: auto;
        right: 18px;
        bottom: 18px;
        transform: none;
      }
      .clerk-voice-start-btn {
        position: absolute;
        left: 50%;
        bottom: 18px;
        transform: translateX(-50%);
        z-index: 3;
        background: linear-gradient(135deg, rgba(178, 210, 53, 1) 0%, rgba(129, 163, 43, 1) 100%);
        color: rgba(38, 52, 0, 1);
        border: 2px solid rgba(220, 240, 140, 0.8);
        border-radius: 999px;
        padding: 10px 20px;
        font-weight: 800;
        font-size: 0.9em;
        letter-spacing: 0.3px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
        cursor: pointer;
      }
      .clerk-voice-start-btn:hover {
        filter: brightness(1.05);
      }
      .clerk-voice-start-btn[hidden] {
        display: none;
      }
      .clerk-voice-launch-emblem {
        position: absolute;
        inset: 0;
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        pointer-events: none;
      }
      .clerk-voice-launch-ring-wrap {
        position: relative;
        width: min(44vw, 340px);
        max-width: 340px;
        min-width: 170px;
        aspect-ratio: 1 / 1;
      }
      .clerk-voice-launch-ring {
        width: 100%;
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0 14px 34px rgba(0, 0, 0, 0.35));
      }
      .clerk-voice-launch-title {
        position: absolute;
        top: 16%;
        left: 50%;
        transform: translateX(-50%);
        color: rgba(255, 255, 255, 0.98);
        text-shadow: 0 3px 10px rgba(0, 0, 0, 0.75);
        font-family: "Times New Roman", Times, serif;
        font-size: clamp(18px, 2.6vw, 32px);
        font-weight: 700;
        letter-spacing: 0.4px;
        white-space: nowrap;
      }
      .clerk-voice-launch-emblem[hidden] {
        display: none;
      }
      .clerk-floating-launcher-wrap {
        position: fixed;
        right: 18px;
        bottom: 18px;
        z-index: 11950;
        display: inline-flex;
        align-items: center;
        gap: 10px;
      }
      .clerk-floating-launcher-wrap[hidden] {
        display: none;
      }
      .clerk-floating-launcher-btn {
        position: relative;
        width: 106px;
        height: 106px;
        border-radius: 50%;
        border: none;
        background: transparent;
        box-shadow: 0 12px 26px rgba(0, 0, 0, 0.42);
        cursor: pointer;
        padding: 0;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: visible;
        transition: transform 160ms ease, box-shadow 160ms ease, filter 160ms ease;
      }
      .clerk-floating-launcher-btn:hover,
      .clerk-floating-launcher-btn:focus-visible {
        transform: translateY(-2px) scale(1.01);
        box-shadow: 0 18px 36px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(178, 210, 53, 0.7);
        filter: brightness(1.03);
      }
      .clerk-floating-launcher-btn:focus-visible {
        outline: 2px solid rgba(246, 233, 162, 0.95);
        outline-offset: 2px;
      }
      .clerk-floating-launcher-img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        object-position: center;
        border: none;
        background: transparent;
      }
      .clerk-floating-launcher-pulse {
        display: none;
      }
      @keyframes clerkFloatingPulse {
        0% {
          transform: scale(0.94);
          opacity: 0.72;
        }
        70% {
          transform: scale(1.12);
          opacity: 0;
        }
        100% {
          opacity: 0;
        }
      }
      .clerk-floating-launcher-tooltip {
        opacity: 0;
        transform: translateX(8px);
        transition: opacity 140ms ease, transform 140ms ease;
        pointer-events: none;
        padding: 8px 12px;
        border-radius: 999px;
        border: 1px solid rgba(198, 225, 120, 0.7);
        background: rgba(16, 24, 0, 0.92);
        color: rgba(247, 239, 183, 1);
        font-size: 0.78em;
        font-weight: 700;
        letter-spacing: 0.2px;
        white-space: nowrap;
      }
      .clerk-floating-launcher-wrap:hover .clerk-floating-launcher-tooltip,
      .clerk-floating-launcher-wrap:focus-within .clerk-floating-launcher-tooltip {
        opacity: 1;
        transform: translateX(0);
      }
      @media (max-width: 820px) {
        .clerk-voice-modal {
          right: 10px;
          bottom: 92px;
        }
        .clerk-voice-modal-content {
          width: min(420px, calc(100vw - 14px));
          height: min(560px, calc(100vh - 14px));
        }
        .clerk-floating-launcher-wrap {
          right: 14px;
          bottom: 14px;
        }
        .clerk-floating-launcher-btn {
          width: 86px;
          height: 86px;
        }
        .clerk-floating-launcher-img {
          width: 100%;
          height: 100%;
        }
      }
      @media (max-width: 520px) {
        .clerk-voice-modal {
          left: 8px;
          right: 8px;
          bottom: 84px;
        }
        .clerk-voice-modal-content {
          width: min(340px, calc(100vw - 16px));
          max-width: calc(100vw - 16px);
          height: min(520px, calc(100vh - 16px));
          margin: 0 auto;
        }
        .clerk-voice-modal-header {
          padding: 10px 12px;
        }
        .clerk-voice-modal-title {
          font-size: 0.92em;
        }
        .clerk-voice-status {
          padding: 8px 10px;
          min-height: 34px;
          font-size: 0.8em;
        }
        .clerk-voice-help {
          padding: 8px 10px;
          font-size: 0.78em;
        }
        .clerk-floating-launcher-wrap {
          right: 10px;
          bottom: 10px;
        }
        .clerk-floating-launcher-btn {
          width: 74px;
          height: 74px;
        }
      }
    `;
    document.head.appendChild(style);
  }

  function setPresence(cfg) {
    const avatarUrl = typeof cfg.character_avatar_url === "string" ? cfg.character_avatar_url.trim() : "";
    const backgroundUrl =
      typeof cfg.character_background_url === "string" ? cfg.character_background_url.trim() : "";
    const headerAvatar = document.getElementById("clerkVoiceHeaderAvatar");
    const backdrop = document.getElementById("clerkVoiceBackdrop");
    const watermark = document.getElementById("clerkVoiceWatermark");
    const watermarkImg = document.getElementById("clerkVoiceWatermarkImg");
    const primaryBackgroundUrl = backgroundUrl || avatarUrl;
    if (headerAvatar) {
      if (avatarUrl) {
        headerAvatar.src = avatarUrl;
        headerAvatar.hidden = false;
      } else {
        headerAvatar.removeAttribute("src");
        headerAvatar.hidden = true;
      }
    }
    if (backdrop && primaryBackgroundUrl) {
      backdrop.style.backgroundImage = `url('${primaryBackgroundUrl}')`;
    } else if (backdrop) {
      backdrop.style.backgroundImage = "";
    }
    if (watermarkImg) {
      watermarkImg.removeAttribute("src");
    }
    if (watermark) {
      watermark.hidden = true;
    }
    syncFloatingLauncherIcon(cfg);
    syncUnityLaunchEmblem(cfg);
  }

  function bindPageTransitionCleanup() {
    if (lifecycleCleanupBound) return;
    lifecycleCleanupBound = true;
    const handlePageTransition = function () {
      const modal = document.getElementById("clerkVoiceModal");
      if (!modal || !modal.classList.contains("active")) return;
      try {
        closeClerkVoiceModal();
      } catch (_err) {}
    };
    window.addEventListener("pagehide", handlePageTransition);
    window.addEventListener("beforeunload", handlePageTransition);
  }

  function ensureModal() {
    injectModalStyles();
    ensureFloatingLauncher();
    if (document.getElementById("clerkVoiceModal")) return;
    bindFrameMessaging();
    bindPageTransitionCleanup();

    const modal = document.createElement("div");
    modal.id = "clerkVoiceModal";
    modal.className = "clerk-voice-modal";
    modal.innerHTML = `
      <div class="clerk-voice-modal-content" role="dialog" aria-modal="false" aria-label="Speak with Clerk">
        <div class="clerk-voice-modal-header">
          <div class="clerk-voice-modal-title-row">
            <h2 class="clerk-voice-modal-title" id="clerkVoiceTitle">Speak with Clerk</h2>
            <div id="clerkVoiceCharacterWrap" class="clerk-voice-character-wrap" hidden>
              <span class="clerk-voice-character-label">Character</span>
              <select id="clerkVoiceCharacterSelect" class="clerk-voice-character-select" aria-label="Select voice character"></select>
            </div>
          </div>
          <div class="clerk-voice-header-actions">
            <button class="clerk-voice-toggle" id="clerkVoicePanelToggleBtn" type="button">Dock Panel</button>
            <button class="clerk-voice-close" id="clerkVoiceCloseBtn" aria-label="Close">&times;</button>
          </div>
        </div>
        <p class="clerk-voice-status" id="clerkVoiceStatus" aria-live="polite"></p>
        <p class="clerk-voice-help" id="clerkVoiceHelp" hidden>
          <a id="clerkVoiceHelpLink" href="#" target="_blank" rel="noopener noreferrer">Open voice session in a new tab</a>
        </p>
        <pre class="clerk-voice-diagnostics" id="clerkVoiceDiagnostics" hidden></pre>
        <div class="clerk-voice-frame-wrap">
          <div id="clerkVoiceBackdrop" class="clerk-voice-backdrop"></div>
          <div id="clerkVoiceWatermark" class="clerk-voice-watermark" hidden>
            <img id="clerkVoiceWatermarkImg" alt="Clerk Watermark" />
          </div>
          <div id="clerkVoiceBottomMask" class="clerk-voice-unity-bottom-mask" hidden></div>
          <div id="clerkVoiceUnityOverlay" class="clerk-voice-unity-overlay" hidden>
            <div id="clerkVoiceUnityMessage" class="clerk-voice-unity-message"></div>
          </div>
          <div id="clerkVoiceLaunchEmblem" class="clerk-voice-launch-emblem" hidden>
            <div class="clerk-voice-launch-ring-wrap">
              <img id="clerkVoiceLaunchRing" class="clerk-voice-launch-ring" alt="Unity Energy launch emblem" />
              <div id="clerkVoiceLaunchTitle" class="clerk-voice-launch-title">Speak with Clerk</div>
            </div>
          </div>
          <button id="clerkVoiceStartBtn" class="clerk-voice-start-btn" type="button" hidden>Start speaking with Clerk</button>
          <iframe
            id="clerkVoiceFrame"
            class="clerk-voice-frame"
            title="Speak with Clerk"
            loading="lazy"
            allow="microphone *; autoplay *; clipboard-read *; clipboard-write *"
            referrerpolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
    setPanelMode("docked");

    modal.addEventListener("click", function (event) {
      if (event.target === modal) closeClerkVoiceModal();
    });

    document.getElementById("clerkVoiceCloseBtn").addEventListener("click", closeClerkVoiceModal);
    document.getElementById("clerkVoicePanelToggleBtn").addEventListener("click", function () {
      setPanelMode(panelMode === "docked" ? "centered" : "docked");
    });
    document.getElementById("clerkVoiceStartBtn").addEventListener("click", async function () {
      const cfg = getRuntimeVoiceConfig();
      if (!shouldUseUnityStartGate(cfg)) return;
      setLaunchEmblemVisible(false);
      setStatus("Requesting microphone access…", false, true);
      try {
        await requestTopLevelMicAccess();
      } catch (err) {
        const reason =
          err && typeof err === "object" && "name" in err ? String(err.name) : "Microphone access denied.";
        setStatus(`Microphone permission failed (${reason}). Allow microphone access in browser settings.`, true);
        setLaunchEmblemVisible(false);
        return;
      }

      sendWidgetConfig(cfg, pendingLaunchSession);
      setWidgetFrameSize(72, 72);
      expandWidgetFromClient();
      setStatus(
        `${cfg.character_name}: “Nice to meet you. How can I help you learn about Unity Energy?”`,
        false
      );
      setStartButtonVisible(false);
      window.setTimeout(function () {
        const modalEl = document.getElementById("clerkVoiceModal");
        if (!modalEl || !modalEl.classList.contains("active")) return;
        if (hasConversationStarted) return;
        sendWidgetConfig(cfg, pendingLaunchSession);
        expandWidgetFromClient();
      }, 1500);
      window.setTimeout(function () {
        const modalEl = document.getElementById("clerkVoiceModal");
        if (!modalEl || !modalEl.classList.contains("active")) return;
        if (hasConversationStarted) return;
        setStatus(
          "If audio still does not start, click the small Clerk panel in the lower-right once to activate it.",
          true
        );
      }, 5000);
    });
    document.getElementById("clerkVoiceCharacterSelect").addEventListener("change", function (event) {
      const selectedCharacterId =
        event && event.target && typeof event.target.value === "string" ? event.target.value : "";
      const cfg = getVoiceConfig();
      const nextCharacterId = resolveCharacterId(selectedCharacterId, cfg);
      if (!pendingLaunchSession || pendingLaunchSession.characterId === nextCharacterId) return;
      const nextSession = Object.assign({}, pendingLaunchSession, { characterId: nextCharacterId });
      openClerkVoiceModal(nextSession);
    });
    const frame = document.getElementById("clerkVoiceFrame");
    frame.addEventListener("load", function () {
      const modalEl = document.getElementById("clerkVoiceModal");
      if (!modalEl || !modalEl.classList.contains("active")) return;
      applyFrameTransparencyOverrides(frame);
      if (!widgetReady) {
        setStatus("Voice widget loaded. Initializing Clerk session…", false);
      }
    });

    frame.addEventListener("error", function () {
      clearFrameLoadTimer();
      setStatus("The voice widget could not be loaded in this modal. Try opening the session in a new tab.", true);
      setHelpLink(frame.src, true);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeClerkVoiceModal();
    });
  }

  function getCharacterLabel(characterId, characterConfig) {
    const explicitLabel =
      characterConfig && typeof characterConfig.label === "string" ? characterConfig.label.trim() : "";
    if (explicitLabel) return explicitLabel;
    const name =
      characterConfig && typeof characterConfig.character_name === "string"
        ? characterConfig.character_name.trim()
        : "";
    if (name) return name;
    return characterId;
  }

  function syncCharacterSelector(cfg, selectedCharacterId) {
    const wrap = document.getElementById("clerkVoiceCharacterWrap");
    if (!wrap) return;
    wrap.hidden = true;
  }

  function setPanelMode(mode) {
    const frame = document.getElementById("clerkVoiceFrame");
    const toggleBtn = document.getElementById("clerkVoicePanelToggleBtn");
    const overlay = document.getElementById("clerkVoiceUnityOverlay");
    const bottomMask = document.getElementById("clerkVoiceBottomMask");
    panelMode = mode === "docked" ? "docked" : "centered";
    if (frame) {
      frame.classList.toggle("docked", panelMode === "docked");
    }
    if (overlay) {
      overlay.classList.toggle("docked", panelMode === "docked");
    }
    if (bottomMask) {
      bottomMask.classList.toggle("docked", panelMode === "docked");
    }
    if (toggleBtn) {
      toggleBtn.textContent = panelMode === "docked" ? "Center Panel" : "Dock Panel";
    }
    syncUnityOverlayState();
  }

  function setStatus(message, isError, allowInfo) {
    const status = document.getElementById("clerkVoiceStatus");
    if (!status) return;
    const safeMessage = coerceText(message);
    if (!isError && !allowInfo) {
      status.textContent = "";
      status.classList.remove("error");
      return;
    }
    status.textContent = safeMessage;
    status.classList.toggle("error", Boolean(isError));
  }

  function setHelpLink(url, visible) {
    const help = document.getElementById("clerkVoiceHelp");
    const link = document.getElementById("clerkVoiceHelpLink");
    if (!help || !link) return;
    if (!visible || !url) {
      help.hidden = true;
      link.removeAttribute("href");
      return;
    }
    link.href = url;
    help.hidden = false;
  }

  function setSessionDiagnostics(message, isError) {
    const cfg = getRuntimeVoiceConfig();
    const diagnostics = document.getElementById("clerkVoiceDiagnostics");
    if (!diagnostics) return;
    if (!shouldShowDiagnostics(cfg) || !message) {
      diagnostics.hidden = true;
      diagnostics.textContent = "";
      diagnostics.classList.remove("error");
      return;
    }
    diagnostics.textContent = message;
    diagnostics.hidden = false;
    diagnostics.classList.toggle("error", Boolean(isError));
  }

  function setStartButtonVisible(visible) {
    const btn = document.getElementById("clerkVoiceStartBtn");
    if (!btn) return;
    btn.hidden = !visible;
  }

  function setWidgetFrameSize(width, height) {
    const frame = document.getElementById("clerkVoiceFrame");
    if (!frame) return;
    const safeW = Number.isFinite(width) ? Math.max(50, Math.min(900, Math.floor(width))) : 50;
    const safeH = Number.isFinite(height) ? Math.max(50, Math.min(760, Math.floor(height))) : 50;
    frame.style.width = `${safeW}px`;
    frame.style.height = `${safeH}px`;
  }

  function applyFrameTransparencyOverrides(frame) {
    if (!frame) return;
    try {
      const doc = frame.contentDocument || (frame.contentWindow && frame.contentWindow.document);
      if (!doc) return;
      const styleId = "clerkVoiceTransparencyOverride";
      let style = doc.getElementById(styleId);
      if (!style) {
        style = doc.createElement("style");
        style.id = styleId;
        (doc.head || doc.documentElement).appendChild(style);
      }
      style.textContent = `
        html, body, #root {
          background: transparent !important;
        }
      `;
    } catch (_err) {}
  }


  function clearFrameLoadTimer() {
    if (!frameLoadTimer) return;
    window.clearTimeout(frameLoadTimer);
    frameLoadTimer = null;
  }

  function openClerkVoiceModal(launchInput) {
    ensureModal();
    setFloatingLauncherVisible(false);
    const modal = document.getElementById("clerkVoiceModal");
    const frame = document.getElementById("clerkVoiceFrame");
    if (isHomePageClerkDisabled()) {
      if (modal) modal.classList.remove("active");
      if (frame) frame.removeAttribute("src");
      setFloatingLauncherVisible(false);
      return;
    }
    if (!isClerkVoiceFeatureEnabled()) {
      if (modal) modal.classList.add("active");
      if (frame) frame.removeAttribute("src");
      setHelpLink("", false);
      setStartButtonVisible(false);
      setLaunchEmblemVisible(false);
      setSessionDiagnostics("", false);
      setStatus("Speak with Clerk is currently unavailable in this release.", false, true);
      return;
    }
    clearQuestionNotesStatusTimer();
    resetGuardrailState();
    currentVisitorName = "";
    visitorQuestionCount = 0;
    questionNotesActivated = false;
    visitorQuestionLog = [];
    lastVisitorQuestionFingerprint = "";
    founderModeActive = false;
    founderModeIdentity = "";
    const previousLaunchSignature = activeLaunchSignature;
    const hadExistingSession = Boolean(
      widgetReady || hasConversationStarted || (frame && coerceText(frame.getAttribute("src")))
    );
    const baseCfg = getVoiceConfig();
    pendingLaunchSession = normalizeLaunchPayload(parseLaunchInput(launchInput), baseCfg);
    const nextLaunchSignature = buildLaunchSessionSignature(pendingLaunchSession);
    if (hadExistingSession && previousLaunchSignature && previousLaunchSignature !== nextLaunchSignature) {
      postToWidgetFrame({ type: "cancel" });
      widgetReady = false;
      hasConversationStarted = false;
    }
    activeLaunchSignature = nextLaunchSignature;
    const cfg = resolveActiveCharacterConfig(baseCfg, pendingLaunchSession);
    const policyDecision =
      pendingLaunchSession && typeof pendingLaunchSession.policyDecision === "object"
        ? pendingLaunchSession.policyDecision
        : null;
    const guardrailSettings = getGuardrailSettings(cfg);
    let guardrailInit = { allowed: true };
    const title = document.getElementById("clerkVoiceTitle");
    const startBtn = document.getElementById("clerkVoiceStartBtn");

    if (title) title.textContent = `Speak with ${cfg.character_name}`;
    if (startBtn) startBtn.textContent = `Start speaking with ${cfg.character_name}`;
    syncCharacterSelector(baseCfg, pendingLaunchSession.characterId);
    setPresence(cfg);
    modal.classList.add("active");
    clearFrameLoadTimer();
    setHelpLink("", false);
    setStartButtonVisible(false);
    setLaunchEmblemVisible(false);
    hasConversationStarted = false;
    setWidgetFrameSize(72, 72);
    widgetReady = false;
    setPanelMode("centered");
    setSessionDiagnostics(buildSessionDiagnostics(pendingLaunchSession, cfg, "", "prepared"), false);
    if (policyDecision && policyDecision.action === "deny") {
      frame.removeAttribute("src");
      setStatus(policyDecision.message || "This Clerk launch context is currently unavailable.", false, true);
      setStartButtonVisible(false);
      setLaunchEmblemVisible(false);
      appendSessionDecision(pendingLaunchSession, "launch-blocked", {
        reason: "context-policy-deny",
        rule_id: policyDecision.ruleId || "",
      });
      clearGuardrailIdleTimer();
      return;
    }
    if (policyDecision && policyDecision.action === "ask") {
      appendSessionDecision(pendingLaunchSession, "launch-policy-ask", {
        rule_id: policyDecision.ruleId || "",
      });
      setStatus(policyDecision.message || "Clerk is preparing contextual awareness for this view.", false, true);
    }
    guardrailInit = initializeGuardrailSession(guardrailSettings, cfg);
    scheduleGuardrailIdleTimer(guardrailSettings, cfg);

    if (!guardrailInit.allowed) {
      frame.removeAttribute("src");
      setStatus(guardrailInit.message || buildGuardrailOffboardMessage(guardrailSettings, "guardrail-block"), false, true);
      setStartButtonVisible(false);
      setLaunchEmblemVisible(false);
      guardrailOffboarded = true;
      clearGuardrailIdleTimer();
      return;
    }

    if (!window.isSecureContext) {
      frame.removeAttribute("src");
      setStatus(
        "Microphone requires a secure page. Open this site via https:// or localhost and try Speak with Clerk again.",
        true
      );
      return;
    }

    const url = composeEmbedUrl(cfg, pendingLaunchSession);
    if (!url) {
      frame.removeAttribute("src");
      setStatus(
        "Voice session URL is not configured. Set embed_url in hume_character_config.js to activate Speak with Clerk.",
        true
      );
      return;
    }

    const auth = normalizeAuthConfig(cfg);
    const configId = resolveConfigId(cfg);
    const voiceId = normalizeVoiceId(cfg);
    if (!auth) {
      frame.removeAttribute("src");
      setStatus(
        "Voice auth is not configured. Set MAXWELLIAN_HUME_RUNTIME_AUTH/MAXWELLIAN_HUME.auth, or run setMaxwellianHumeAuth('apiKey'|'accessToken', '...') once in browser console.",
        true
      );
      return;
    }
    if (!configId) {
      setStatus(
        `${cfg.character_name} is connecting with default Hume config (config_id not set).`,
        false
      );
    } else if (voiceId && configId === voiceId) {
      setStatus(
        `${cfg.character_name} is connecting with your specified voice profile id.`,
        false
      );
    }

    activeFrameOrigin = getEmbedOrigin(url);
    frame.src = url;
    setStatus(`${cfg.character_name} is connecting. Preparing voice panel…`, false);
    setSessionDiagnostics(buildSessionDiagnostics(pendingLaunchSession, cfg, url, "connecting"), false);

    frameLoadTimer = window.setTimeout(function () {
      const modalEl = document.getElementById("clerkVoiceModal");
      if (!modalEl || !modalEl.classList.contains("active")) return;
      setStatus(
        "Voice widget loaded but session did not initialize. Check auth/config_id, then retry.",
        true
      );
      setHelpLink(url, true);
      setSessionDiagnostics(buildSessionDiagnostics(pendingLaunchSession, cfg, url, "timeout"), true);
    }, 12000);
  }

  function closeClerkVoiceModal() {
    const modal = document.getElementById("clerkVoiceModal");
    const frame = document.getElementById("clerkVoiceFrame");
    if (!modal) return;
    clearFrameLoadTimer();
    clearQuestionNotesStatusTimer();
    resetGuardrailState();
    postToWidgetFrame({ type: "cancel" });
    modal.classList.remove("active");
    if (frame) frame.removeAttribute("src");
    activeFrameOrigin = "";
    widgetReady = false;
    currentVisitorName = "";
    visitorQuestionCount = 0;
    questionNotesActivated = false;
    visitorQuestionLog = [];
    lastVisitorQuestionFingerprint = "";
    founderModeActive = false;
    founderModeIdentity = "";
    pendingLaunchSession = null;
    activeLaunchSignature = "";
    setHelpLink("", false);
    setSessionDiagnostics("", false);
    setStartButtonVisible(false);
    setLaunchEmblemVisible(false);
    setWidgetFrameSize(50, 50);
    setPanelMode("docked");
    clearDailyMeter();
    setFloatingLauncherVisible(true);
    try {
      window.dispatchEvent(new CustomEvent("clerkVoiceModalClosed"));
    } catch (_) {}
  }

  function bindLaunchButtons() {
    document.querySelectorAll("[data-clerk-voice]").forEach(function (button) {
      if (button.dataset.clerkVoiceBound === "1") return;
      button.dataset.clerkVoiceBound = "1";
      button.addEventListener("click", function (event) {
        if (event && typeof event.preventDefault === "function") {
          event.preventDefault();
        }
        const pageSlug = getCurrentPageSlug();
        const explicitEntryPoint = coerceText(button.getAttribute("data-clerk-entry-point"));
        const triggerToken = normalizeLaunchToken(
          button.id ||
            button.getAttribute("name") ||
            button.getAttribute("aria-label") ||
            button.textContent,
          "launch-button"
        );
        const fallbackLaunch = {
          contextSource: coerceText(button.getAttribute("data-clerk-context-source")) || pageSlug,
          context: coerceText(button.getAttribute("data-clerk-context")) || "technical-follow-up",
          mode:
            coerceText(button.getAttribute("data-clerk-mode")) ||
            coerceText(button.getAttribute("data-clerk-context")) ||
            "technical-follow-up",
          sourcePage: coerceText(button.getAttribute("data-clerk-source-page")) || pageSlug,
          sourceMedia: coerceText(button.getAttribute("data-clerk-source-media")),
          entryPoint: explicitEntryPoint ? normalizeLaunchToken(explicitEntryPoint, triggerToken) : `${pageSlug}-${triggerToken}`,
          likelyUserIntent: coerceText(button.getAttribute("data-clerk-likely-intent")),
          responseStyleHint: coerceText(button.getAttribute("data-clerk-response-style-hint")),
          uiMode: "modal",
        };
        const sourceMediaSeconds = Number(button.getAttribute("data-clerk-source-media-seconds"));
        if (Number.isFinite(sourceMediaSeconds)) {
          fallbackLaunch.sourceMediaSeconds = Math.max(0, Math.floor(sourceMediaSeconds));
        }
        const launchInput = parseLaunchInput(button.getAttribute("data-clerk-voice") || "");
        openClerkFromLaunchInput(launchInput, fallbackLaunch);
      });
    });
  }

  window.openClerkVoiceModal = openClerkVoiceModal;
  window.closeClerkVoiceModal = closeClerkVoiceModal;
  window.openClerkReinterpretation = openClerkReinterpretation;
  window.buildClerkReinterpretationLaunch = buildReinterpretationLaunch;
  window.buildClerkPageLaunchPayload = buildClerkPageLaunchPayload;
  window.openClerkWithPageContext = openClerkWithPageContext;

  document.addEventListener("DOMContentLoaded", function () {
    ensureModal();
    ensureFloatingLauncher();
    bindLaunchButtons();
  });
})();
