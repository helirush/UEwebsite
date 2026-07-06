(() => {
  if (window.__unitySideMetricsEnhancerLoaded) return;
  window.__unitySideMetricsEnhancerLoaded = true;

  const STYLE_ID = 'unity-side-metrics-style';
  const dashboardDataPromiseCache = new Map();
  const dashboardDataResolvedCache = new Map();
  const energyMarkdownPromiseCache = new Map();
  const energyMarkdownResolvedCache = new Map();
  const latestPatternDataState = { data: null, promise: null };
  const btFrontCardMetricsState = { data: null, promise: null };

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
.gauge-side-metric {
  position: absolute;
  top: calc(50% + 0.5in);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  pointer-events: none;
  z-index: 3;
  min-width: 102px;
  text-align: center;
}
.gauge-side-left { left: -118px; }
.gauge-side-right { right: -118px; }
.gauge-side-label {
  font-size: 9pt;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.85);
  text-transform: uppercase;
  line-height: 1.1;
  white-space: nowrap;
}
.gauge-side-value {
  font-size: 12pt;
  font-weight: 700;
  color: rgb(250, 240, 160);
  line-height: 1.2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
}
.dashboard-grid.layout-1 .gauge-side-metric { min-width: 120px; }
.dashboard-grid.layout-1 .gauge-side-left { left: -145px; }
.dashboard-grid.layout-1 .gauge-side-right { right: -145px; }
.dashboard-grid.layout-1 .gauge-side-label { font-size: 10pt; }
.dashboard-grid.layout-1 .gauge-side-value { font-size: 14pt; }
`;
    document.head.appendChild(style);
  }

  function parseCurrencyValue(value) {
    const n = parseFloat(String(value || '').replace(/[^0-9.]/g, ''));
    return isFinite(n) ? n : null;
  }

  function parseNumberValue(value) {
    const n = parseFloat(String(value || '').replace(/[^0-9.]/g, ''));
    return isFinite(n) ? n : null;
  }

  function normalizePfPercent(value) {
    const n = Number(value);
    if (!isFinite(n) || n <= 0) return null;
    const pct = n <= 1 ? (n * 100) : n;
    return Math.max(0, Math.min(100, pct));
  }

  function formatCurrencyWhole(value) {
    const n = Number(value);
    if (!isFinite(n) || n <= 0) return '—';
    return `$${Math.round(n).toLocaleString('en-US')}`;
  }

  function formatVoltageValue(value) {
    const n = Number(value);
    if (!isFinite(n) || n <= 0) return '—';
    const rounded = Math.round(n * 10) / 10;
    return `${rounded.toFixed(1)}V`;
  }

  function formatTargetPatternKva(value) {
    const n = Number(value);
    if (!isFinite(n) || n <= 0) return null;
    return `${Math.round(n)}kVA STD DAILY PATTERN`;
  }

  function collectTextFragments(out, value) {
    if (value == null) return;
    if (Array.isArray(value)) {
      value.forEach((v) => collectTextFragments(out, v));
      return;
    }
    if (typeof value === 'object') {
      Object.values(value).forEach((v) => collectTextFragments(out, v));
      return;
    }
    const text = String(value).trim();
    if (text) out.push(text);
  }

  function normalizeKey(value) {
    return String(value || '').toUpperCase().replace(/[^A-Z0-9]/g, '');
  }

  function uniqueStrings(values) {
    const out = [];
    const seen = new Set();
    values.forEach((value) => {
      const v = String(value || '').trim();
      if (!v || seen.has(v)) return;
      seen.add(v);
      out.push(v);
    });
    return out;
  }

  function getDashboardCacheKey(transformerName) {
    return normalizeKey(transformerName || '');
  }

  function buildDashboardDataCandidatePaths(transformerName) {
    const raw = String(transformerName || '').trim();
    if (!raw) return [];

    const safe = raw.replace(/[\\/]/g, '_');
    const underscored = safe.replace(/\s+/g, '_');
    const compact = safe.replace(/\s+/g, '');

    return uniqueStrings([
      `dashboard_data_${underscored}.json`,
      `dashboard_data_${safe}.json`,
      `dashboard_data_${compact}.json`
    ]);
  }

  function normalizeEnergyHealthTransformerSegment(transformerName) {
    return String(transformerName || '')
      .trim()
      .replace(/[\\\/]/g, '-')
      .replace(/\s+/g, '-')
      .replace(/[^A-Za-z0-9_-]/g, '')
      .replace(/-+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function buildEnergyHealthMarkdownCandidatePaths(transformerName, dashboardData) {
    const raw = String(transformerName || '').trim();
    if (!raw || !dashboardData || typeof dashboardData !== 'object') return [];
    const metadataTokens = uniqueStrings([
      String(dashboardData.file_name || '').trim(),
      String(dashboardData.csv_file_path || '').trim(),
      String(dashboardData.analysis_period || '').trim()
    ]).filter(Boolean);

    let meterId = '';
    let period = '';
    for (const token of metadataTokens) {
      if (!meterId) {
        const meterMatch = token.match(/\b(AN\d{5,})\b/i);
        if (meterMatch) meterId = meterMatch[1].toUpperCase();
      }
      if (!period) {
        const periodMatch = token.match(/(\d{6}-\d{6})(?!\d)/);
        if (periodMatch) period = periodMatch[1];
      }
      if (meterId && period) break;
    }
    if (!meterId || !period) return [];

    const resolution = String(dashboardData.data_resolution || '').trim() || '1minRES';
    const variants = uniqueStrings([
      normalizeEnergyHealthTransformerSegment(raw),
      normalizeEnergyHealthTransformerSegment(raw.replace(/\s+/g, '_')),
      normalizeEnergyHealthTransformerSegment(raw.replace(/\s+/g, '')),
      normalizeEnergyHealthTransformerSegment(raw.replace(/_/g, '-'))
    ]).filter(Boolean);

    const candidates = [];
    variants.forEach((namePart) => {
      candidates.push(`FIELDp1-EnergyHealth_${namePart}_${meterId}-${resolution}_${period}.md`);
      candidates.push(`FIELDp1-EnergyHealth_${namePart}_${meterId}-${period}.md`);
    });
    return uniqueStrings(candidates);
  }

  async function fetchFirstAvailableJson(paths) {
    for (const path of paths) {
      try {
        const response = await fetch(encodeURI(path), { cache: 'no-store' });
        if (!response || !response.ok) continue;
        const data = await response.json();
        if (data && typeof data === 'object') return data;
      } catch (_) {}
    }
    return null;
  }

  async function fetchFirstAvailableText(paths) {
    for (const path of paths) {
      try {
        const response = await fetch(encodeURI(path), { cache: 'no-store' });
        if (!response || !response.ok) continue;
        const text = await response.text();
        if (typeof text === 'string' && text.trim()) return text;
      } catch (_) {}
    }
    return null;
  }

  function extractConsequenceFromEnergyHealthMarkdown(text) {
    const raw = String(text || '').replace(/\s+/g, ' ').trim();
    if (!raw) return null;
    const maxMatchForPattern = (pattern) => {
      const flags = pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`;
      const regex = new RegExp(pattern.source, flags);
      let match;
      let best = null;
      while ((match = regex.exec(raw)) !== null) {
        const parsed = parseCurrencyValue(match[1]);
        if (parsed !== null && parsed >= 1000 && (best === null || parsed > best)) {
          best = parsed;
        }
      }
      return best;
    };

    const preferredPatterns = [
      /annual\s+all-?in\s+waste[^$]{0,120}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /all-?in\s+annual\s+waste[^$]{0,120}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /total\s+wasted(?:\s+figure)?[^$]{0,120}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)(?:\s*\/?\s*(?:yr|year|annually))?/i,
      /\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)\s*(?:\/?\s*(?:yr|year|annually))[^.\n]{0,120}(?:total\s+wasted|all-?in\s+annual\s+waste)/i
    ];
    for (const pattern of preferredPatterns) {
      const parsed = maxMatchForPattern(pattern);
      if (parsed !== null) return parsed;
    }

    const fallbackPatterns = [
      /-\s*\*\*Per\s+Year:\*\*\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /annual\s+offset\s+savings[^$]{0,80}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /annual\s+cooling\s+savings[^$]{0,80}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /annual\s+co2e\s+value[^$]{0,80}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i
    ];
    for (const pattern of fallbackPatterns) {
      const parsed = maxMatchForPattern(pattern);
      if (parsed !== null) return parsed;
    }

    return null;
  }

  function extractStrictAllInAnnualConsequenceFromText(text) {
    const raw = String(text || '').replace(/\s+/g, ' ').trim();
    if (!raw) return null;
    const maxMatchForPattern = (pattern) => {
      const flags = pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`;
      const regex = new RegExp(pattern.source, flags);
      let match;
      let best = null;
      while ((match = regex.exec(raw)) !== null) {
        const parsed = parseCurrencyValue(match[1]);
        if (parsed !== null && parsed >= 1000 && (best === null || parsed > best)) {
          best = parsed;
        }
      }
      return best;
    };

    const patterns = [
      /\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)\s*(?:\/?\s*(?:yr|year|annually))?\s*(?:in\s+)?(?:total\s+wasted|all-?in\s+annual\s+waste)/i,
      /total\s+wasted(?:\s+figure)?(?:\s*\(all-?in\))?[^$]{0,80}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /all-?in\s+annual\s+waste[^$]{0,80}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /all-?in[^$]{0,50}waste[^$]{0,80}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)\s*(?:\/?\s*(?:yr|year|annually))/i,
      /ANNUAL_WASTE_VALIDATED\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /ANNUAL_SAVINGS_VALIDATED\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i
    ];

    for (const pattern of patterns) {
      const parsed = maxMatchForPattern(pattern);
      if (parsed !== null) return parsed;
    }

    return null;
  }

  function loadDashboardDataForTransformer(transformerName) {
    const key = getDashboardCacheKey(transformerName);
    if (!key) return Promise.resolve(null);

    if (dashboardDataResolvedCache.has(key)) {
      return Promise.resolve(dashboardDataResolvedCache.get(key));
    }

    if (dashboardDataPromiseCache.has(key)) {
      return dashboardDataPromiseCache.get(key);
    }

    const paths = buildDashboardDataCandidatePaths(transformerName);
    const promise = fetchFirstAvailableJson(paths)
      .then((data) => {
        dashboardDataResolvedCache.set(key, data || null);
        dashboardDataPromiseCache.delete(key);
        return dashboardDataResolvedCache.get(key);
      })
      .catch(() => {
        dashboardDataResolvedCache.set(key, null);
        dashboardDataPromiseCache.delete(key);
        return null;
      });

    dashboardDataPromiseCache.set(key, promise);
    return promise;
  }

  function loadEnergyHealthMarkdownConsequenceForTransformer(transformerName, dashboardData) {
    const key = getDashboardCacheKey(transformerName);
    if (!key || !dashboardData) return Promise.resolve(null);

    if (energyMarkdownResolvedCache.has(key)) {
      return Promise.resolve(energyMarkdownResolvedCache.get(key));
    }

    if (energyMarkdownPromiseCache.has(key)) {
      return energyMarkdownPromiseCache.get(key);
    }

    const paths = buildEnergyHealthMarkdownCandidatePaths(transformerName, dashboardData);
    if (!paths.length) {
      energyMarkdownResolvedCache.set(key, null);
      return Promise.resolve(null);
    }

    const promise = fetchFirstAvailableText(paths)
      .then((text) => {
        const consequence = extractConsequenceFromEnergyHealthMarkdown(text);
        energyMarkdownResolvedCache.set(key, consequence !== null ? consequence : null);
        energyMarkdownPromiseCache.delete(key);
        return energyMarkdownResolvedCache.get(key);
      })
      .catch(() => {
        energyMarkdownResolvedCache.set(key, null);
        energyMarkdownPromiseCache.delete(key);
        return null;
      });

    energyMarkdownPromiseCache.set(key, promise);
    return promise;
  }

  function getDashboardDataForTransformer(transformerName) {
    const key = getDashboardCacheKey(transformerName);
    if (!key || !dashboardDataResolvedCache.has(key)) return null;
    return dashboardDataResolvedCache.get(key);
  }

  function getEnergyHealthMarkdownConsequenceForTransformer(transformerName) {
    const key = getDashboardCacheKey(transformerName);
    if (!key || !energyMarkdownResolvedCache.has(key)) return null;
    return energyMarkdownResolvedCache.get(key);
  }

  function prefetchDashboardDataForVisibleTransformers() {
    for (let i = 1; i <= 4; i++) {
      const nameEl = document.getElementById(`xfmr${i}-name`);
      const transformerName = (nameEl?.textContent || '').trim();
      if (!transformerName) continue;

      const key = getDashboardCacheKey(transformerName);
      if (!key) continue;
      if (dashboardDataResolvedCache.has(key) || dashboardDataPromiseCache.has(key)) continue;

      loadDashboardDataForTransformer(transformerName)
        .then(() => refreshBindings())
        .catch(() => {});
    }
  }

  function prefetchEnergyHealthMarkdownForVisibleTransformers() {
    for (let i = 1; i <= 4; i++) {
      const nameEl = document.getElementById(`xfmr${i}-name`);
      const transformerName = (nameEl?.textContent || '').trim();
      if (!transformerName) continue;

      const key = getDashboardCacheKey(transformerName);
      if (!key) continue;
      if (energyMarkdownResolvedCache.has(key) || energyMarkdownPromiseCache.has(key)) continue;

      const dashboardData = getDashboardDataForTransformer(transformerName);
      if (!dashboardData) continue;

      loadEnergyHealthMarkdownConsequenceForTransformer(transformerName, dashboardData)
        .then(() => refreshBindings())
        .catch(() => {});
    }
  }

  function fetchLatestPatternData() {
    if (latestPatternDataState.data) return Promise.resolve(latestPatternDataState.data);
    if (latestPatternDataState.promise) return latestPatternDataState.promise;

    latestPatternDataState.promise = fetch('SET1_PatternAnalysisData.json', { cache: 'no-store' })
      .then((response) => {
        if (!response || !response.ok) return null;
        return response.json();
      })
      .then((data) => {
        if (data && typeof data === 'object' && data.transformers && typeof data.transformers === 'object') {
          latestPatternDataState.data = data;
        }
        latestPatternDataState.promise = null;
        return latestPatternDataState.data;
      })
      .catch(() => {
        latestPatternDataState.promise = null;
        return null;
      });

    return latestPatternDataState.promise;
  }

  function getPatternData() {
    if (latestPatternDataState.data && typeof latestPatternDataState.data === 'object') {
      return latestPatternDataState.data;
    }
    try {
      if (window.PATTERN_DATA && typeof window.PATTERN_DATA === 'object') return window.PATTERN_DATA;
    } catch (_) {}
    try {
      if (typeof PATTERN_DATA !== 'undefined' && PATTERN_DATA && typeof PATTERN_DATA === 'object') return PATTERN_DATA;
    } catch (_) {}
    return null;
  }

  function getPatternTransformers() {
    const data = getPatternData();
    const transformers = data && typeof data === 'object' ? data.transformers : null;
    return transformers && typeof transformers === 'object' ? transformers : null;
  }

  function buildBtFrontCardMetricCandidatePaths() {
    return uniqueStrings([
      'BT_front_card_metrics.json',
      'bt_front_card_metrics.json',
      'Patterns/BT_front_card_metrics.json',
      'patterns/BT_front_card_metrics.json'
    ]);
  }

  function getBtFrontCardMetricSourceMap() {
    const localData = btFrontCardMetricsState.data;
    if (localData && typeof localData === 'object') {
      const map = localData.transformers && typeof localData.transformers === 'object'
        ? localData.transformers
        : localData;
      if (map && typeof map === 'object') return map;
    }

    try {
      const winData = window.__unityBtFrontCardMetrics;
      if (winData && typeof winData === 'object') {
        const map = winData.transformers && typeof winData.transformers === 'object'
          ? winData.transformers
          : winData;
        if (map && typeof map === 'object') return map;
      }
    } catch (_) {}

    return null;
  }

  function loadBtFrontCardMetrics() {
    const map = getBtFrontCardMetricSourceMap();
    if (map && Object.keys(map).length) return Promise.resolve(map);

    if (btFrontCardMetricsState.promise) return btFrontCardMetricsState.promise;

    btFrontCardMetricsState.promise = fetchFirstAvailableJson(buildBtFrontCardMetricCandidatePaths())
      .then((data) => {
        btFrontCardMetricsState.data = data && typeof data === 'object' ? data : null;
        btFrontCardMetricsState.promise = null;
        return getBtFrontCardMetricSourceMap();
      })
      .catch(() => {
        btFrontCardMetricsState.promise = null;
        return getBtFrontCardMetricSourceMap();
      });

    return btFrontCardMetricsState.promise;
  }

  function getBtFrontCardMetricEntry(transformerName) {
    const map = getBtFrontCardMetricSourceMap();
    if (!map || typeof map !== 'object') return null;

    const routingKeys = getRoutingKeys(transformerName || '');
    const candidateKeys = uniqueStrings([
      transformerName,
      ...routingKeys,
      ...(routingKeys.map((key) => normalizeKey(key)))
    ]);

    for (const key of candidateKeys) {
      if (map[key]) return map[key];
      const upper = String(key || '').toUpperCase();
      if (upper && map[upper]) return map[upper];
      const lower = String(key || '').toLowerCase();
      if (lower && map[lower]) return map[lower];
    }

    const normalizedTargets = new Set(
      candidateKeys.map((key) => normalizeKey(key)).filter(Boolean)
    );
    if (!normalizedTargets.size) return null;

    for (const [key, value] of Object.entries(map)) {
      if (normalizedTargets.has(normalizeKey(key))) return value;
    }

    return null;
  }

  function readBtFrontCardMetricNumber(entry, keys) {
    if (!entry || typeof entry !== 'object' || !Array.isArray(keys)) return null;
    for (const key of keys) {
      const parsed = parseNumberValue(entry[key]);
      if (parsed !== null && isFinite(parsed)) return parsed;
    }
    return null;
  }

  function resolveBtFrontCardVoltage(transformerName) {
    const entry = getBtFrontCardMetricEntry(transformerName || '');
    const value = readBtFrontCardMetricNumber(entry, [
      'field_voltage',
      'field_voltage_v',
      'voltage',
      'voltage_v',
      'bt_voltage',
      'bt_voltage_v',
      'voltage_value'
    ]);
    if (value === null) return null;
    if (value < 100 || value > 1000) return null;
    return value;
  }

  function resolveBtFrontCardConsequence(transformerName) {
    const entry = getBtFrontCardMetricEntry(transformerName || '');
    const value = readBtFrontCardMetricNumber(entry, [
      'field_consequence',
      'field_consequence_annual',
      'annual_total_wasted',
      'total_wasted_annual',
      'total_wasted',
      'all_in_annual_waste'
    ]);
    if (value === null) return null;
    if (value < 1000) return null;
    return value;
  }

  function resolveBtFrontCardPfPercent(transformerName) {
    const entry = getBtFrontCardMetricEntry(transformerName || '');
    const value = readBtFrontCardMetricNumber(entry, [
      'power_factor_percent',
      'pf_percent',
      'power_factor',
      'pf'
    ]);
    return normalizePfPercent(value);
  }
  function buildRoutingKeyVariants(transformerName) {
    const raw = String(transformerName || '').trim();
    if (!raw) return [];

    const compact = raw.replace(/\s+/g, '');
    const compactUpper = compact.toUpperCase();
    const cleanAlnum = compact.replace(/[^A-Za-z0-9]/g, '');
    const cleanAlnumUpper = cleanAlnum.toUpperCase();

    const variants = [raw, compact, compactUpper, cleanAlnum, cleanAlnumUpper];

    const tMatch = compactUpper.match(/^(T\d+)/);
    if (tMatch) variants.push(tMatch[1], tMatch[1].toLowerCase());

    const renderingMatch = compactUpper.match(/^RENDERING-?(\d+)/);
    if (renderingMatch) {
      const n = renderingMatch[1];
      variants.push(
        `REND${n}`,
        `RENDERING${n}`,
        `RENDERING-${n}`,
        `Rend${n}`,
        `rend${n}`
      );
    }

    const ncdcMatch = compactUpper.match(/^(NCDC\d+)/);
    if (ncdcMatch) {
      const ncdc = ncdcMatch[1];
      const ncnd = ncdc.replace('NCDC', 'NCND');
      variants.push(ncdc, ncdc.toLowerCase(), ncnd, ncnd.toLowerCase());
    }

    const baseMatch = compactUpper.match(/^([A-Z]+\d+)/);
    if (baseMatch) {
      const base = baseMatch[1];
      variants.push(base, base.toLowerCase());
    }

    return uniqueStrings(variants);
  }

  function getRoutingKeys(transformerName) {
    const localKeys = buildRoutingKeyVariants(transformerName);
    if (typeof window.getTransformerRoutingInfo === 'function') {
      try {
        const info = window.getTransformerRoutingInfo(transformerName || '');
        if (info && Array.isArray(info.keys) && info.keys.length) {
          return uniqueStrings([...(info.keys || []), ...localKeys]);
        }
      } catch (_) {}
    }
    return localKeys;
  }

  function findPatternEntryForTransformer(transformerName) {
    const tData = getPatternTransformers();
    if (!tData || typeof tData !== 'object') return null;

    const routingKeys = getRoutingKeys(transformerName || '');
    const targetKeys = new Set(
      routingKeys
        .map((value) => normalizeKey(value))
        .filter(Boolean)
    );
    const directTarget = normalizeKey(transformerName);
    if (directTarget) targetKeys.add(directTarget);
    for (const key of routingKeys) {
      if (tData[key]) return tData[key];
      const lower = String(key).toLowerCase();
      if (tData[lower]) return tData[lower];
      const upper = String(key).toUpperCase();
      if (tData[upper]) return tData[upper];
    }
    if (!targetKeys.size) return null;

    for (const [key, entry] of Object.entries(tData)) {
      const candidates = [
        key,
        entry?.transformer_name,
        entry?.display_name,
        entry?.source_transformer_id,
        entry?.site_overview_state?.transformer_name
      ];
      const expandedCandidates = [];
      candidates.forEach((candidate) => {
        expandedCandidates.push(candidate);
        buildRoutingKeyVariants(candidate).forEach((variant) => expandedCandidates.push(variant));
      });

      for (const candidate of expandedCandidates) {
        const normalized = normalizeKey(candidate);
        if (normalized && targetKeys.has(normalized)) return entry;
      }
    }

    return null;
  }

  function findPatternEntryByCardIndex(xfmrId) {
    const tData = getPatternTransformers();
    const idx = parseInt(String(xfmrId || ''), 10);
    if (!tData || !Number.isFinite(idx) || idx < 1) return null;
    const entries = Object.values(tData);
    return entries[idx - 1] || null;
  }

  function extractVoltageFromText(text) {
    const raw = String(text || '').replace(/\s+/g, ' ').trim();
    if (!raw) return null;

    const patterns = [
      /voltage\s+nominal[^0-9]{0,20}([0-9]{2,4}(?:\.[0-9]+)?)\s*(?:v|volts?)/i,
      /(?:average|avg)\s+voltage[^0-9]{0,20}([0-9]{2,4}(?:\.[0-9]+)?)\s*(?:v|volts?)/i,
      /voltage[^0-9]{0,20}([0-9]{2,4}(?:\.[0-9]+)?)\s*(?:v|volts?)\s*(?:avg|average|nominal)/i
    ];

    for (const pattern of patterns) {
      const m = raw.match(pattern);
      if (!m) continue;
      const parsed = parseFloat(m[1]);
      if (isFinite(parsed) && parsed >= 100 && parsed <= 1000) return parsed;
    }

    // Fallback: choose voltage nearest nominal 480V from explicit voltage tokens.
    const voltageRegex = /([0-9]{2,4}(?:\.[0-9]+)?)\s*(?:v|volts?)/ig;
    const candidates = [];
    let m;
    while ((m = voltageRegex.exec(raw)) !== null) {
      const parsed = parseFloat(m[1]);
      if (isFinite(parsed) && parsed >= 100 && parsed <= 1000) {
        candidates.push(parsed);
      }
    }
    if (candidates.length) {
      candidates.sort((a, b) => Math.abs(a - 480) - Math.abs(b - 480));
      return candidates[0];
    }

    return null;
  }

  function extractPfPercentFromText(text) {
    const raw = String(text || '').replace(/\s+/g, ' ').trim();
    if (!raw) return null;

    const patterns = [
      /([0-9]+(?:\.[0-9]+)?)\s*%\s*power\s*factor/i,
      /([0-9]+(?:\.[0-9]+)?)\s*percent\s*power\s*factor/i,
      /\bpf\b\s*(?:is|=|:|at)?\s*([0-9]+(?:\.[0-9]+)?)\s*(?:%|percent)?/i,
      /power\s*factor(?:\s*\(avg\))?\s*(?:is|=|:|at|of|sits at|sitting at|operating at)?\s*([0-9]+(?:\.[0-9]+)?)\s*(?:%|percent)?/i
    ];

    for (const pattern of patterns) {
      const m = raw.match(pattern);
      if (!m) continue;
      const parsed = normalizePfPercent(parseFloat(m[1]));
      if (parsed !== null) return parsed;
    }

    return null;
  }

  function extractAnnualConsequenceFromText(text) {
    const raw = String(text || '').replace(/\s+/g, ' ').trim();
    if (!raw) return null;
    const maxMatchForPattern = (pattern) => {
      const flags = pattern.flags.includes('g') ? pattern.flags : `${pattern.flags}g`;
      const regex = new RegExp(pattern.source, flags);
      let match;
      let best = null;
      while ((match = regex.exec(raw)) !== null) {
        const parsed = parseCurrencyValue(match[1]);
        if (parsed !== null && parsed >= 1000 && (best === null || parsed > best)) {
          best = parsed;
        }
      }
      return best;
    };

    const patterns = [
      /\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)\s*(?:\/?\s*(?:yr|year|annually))?[^.\n]{0,60}(?:total\s+wasted|all-?in\s+annual\s+waste)/i,
      /total\s+wasted(?:\s*\(all-?in\))?[^$]{0,40}\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /all-?in[^$]{0,40}annual[^$]{0,30}waste[^$]{0,40}\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /\|\s*annual\s+waste\s*\|[^|]*\|\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /ANNUAL_WASTE(?:_VALIDATED)?\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /annual(?:ized)?[^$]{0,80}(?:total\s+)?waste[^$]{0,30}\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)[^.\n]{0,80}annual(?:ized)?[^.\n]{0,20}(?:total\s+)?waste/i,
      /ANNUAL_SAVINGS_VALIDATED\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /annual[^$]{0,80}savings[^$]{0,30}\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)[^.\n]{0,40}(?:annually|per\s*year|\/yr)/i
    ];

    for (const pattern of patterns) {
      const parsed = maxMatchForPattern(pattern);
      if (parsed !== null) return parsed;
    }

    return null;
  }

  function extractTargetPatternKvaFromText(text) {
    const raw = String(text || '').replace(/\s+/g, ' ').trim();
    if (!raw) return null;

    const patterns = [
      /bt_target_kva\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /target_kva_image\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /target_validated\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /daily\s+supply\s+target[^0-9]{0,20}([0-9][0-9,]*(?:\.[0-9]+)?)\s*kva/i,
      /supply\s+target[^0-9]{0,20}([0-9][0-9,]*(?:\.[0-9]+)?)\s*kva/i
    ];

    for (const pattern of patterns) {
      const m = raw.match(pattern);
      if (!m) continue;
      const parsed = parseNumberValue(m[1]);
      if (parsed !== null && parsed > 0) return parsed;
    }

    return null;
  }

  function resolveFieldVoltageFromDashboardData(data) {
    if (!data || typeof data !== 'object') return null;

    const candidates = [
      data.voltage_avg,
      data.avg_voltage,
      data.nominal_voltage,
      data.voltage_nominal,
      data.voltage
    ];
    for (const candidate of candidates) {
      const n = Number(candidate);
      if (isFinite(n) && n >= 100 && n <= 1000) return n;
    }

    return null;
  }

  function resolvePfPercentFromDashboardData(data) {
    if (!data || typeof data !== 'object') return null;

    const candidates = [
      data.power_factor,
      data.pf,
      data.powerFactor,
      data.power_factor_avg,
      data.avg_power_factor
    ];
    for (const candidate of candidates) {
      const normalized = normalizePfPercent(candidate);
      if (normalized !== null) return normalized;
    }

    return null;
  }

  function resolveFieldVoltageFromPatternEntry(entry) {
    if (!entry || typeof entry !== 'object') return null;

    const directCandidates = [
      entry.nominal_voltage,
      entry.voltage_nominal,
      entry.voltage_avg,
      entry.average_voltage,
      entry.avg_voltage,
      entry.voltage,
      entry.site_overview_state?.metrics?.nominal_voltage,
      entry.site_overview_state?.metrics?.voltage_nominal,
      entry.site_overview_state?.metrics?.voltage_avg,
      entry.site_overview_state?.metrics?.avg_voltage,
      entry.site_overview_state?.metrics?.average_voltage
    ];
    for (const candidate of directCandidates) {
      const n = Number(candidate);
      if (isFinite(n) && n >= 100 && n <= 1000) return n;
    }

    const textCandidates = [];
    const prioritizedFields = [
      'cross_check',
      'voltage_stability_findings',
      'voltage_baseline_notes',
      'narration_ready_text',
      'field_condition_summary',
      'energy_field_summary_brief',
      'pattern_part1',
      'pattern_text',
      'pattern_brief'
    ];
    prioritizedFields.forEach((field) => collectTextFragments(textCandidates, entry[field]));
    if (!textCandidates.length) collectTextFragments(textCandidates, entry);

    for (const text of textCandidates) {
      const parsed = extractVoltageFromText(text);
      if (parsed !== null) return parsed;
    }

    return null;
  }

  function resolvePfPercentFromPatternEntry(entry) {
    if (!entry || typeof entry !== 'object') return null;

    const directCandidates = [
      entry.power_factor,
      entry.pf,
      entry.site_overview_state?.metrics?.power_factor
    ];
    for (const candidate of directCandidates) {
      const normalized = normalizePfPercent(candidate);
      if (normalized !== null) return normalized;
    }

    const textCandidates = [];
    const prioritizedFields = [
      'cross_check',
      'field_condition_summary',
      'energy_field_summary_brief',
      'narration_ready_text',
      'pattern_part1',
      'pattern_text',
      'pattern_brief',
      'pattern_part2',
      'pattern_part3',
      'pattern_summary'
    ];
    prioritizedFields.forEach((field) => collectTextFragments(textCandidates, entry[field]));
    if (!textCandidates.length) collectTextFragments(textCandidates, entry);

    for (const text of textCandidates) {
      const parsed = extractPfPercentFromText(text);
      if (parsed !== null) return parsed;
    }

    return null;
  }

  function resolveFieldConsequenceFromPatternEntry(entry) {
    if (!entry || typeof entry !== 'object') return null;
    const toNumber = (value) => {
      const n = Number(value);
      if (isFinite(n)) return n;
      return parseNumberValue(value);
    };

    const explicitTotalCandidates = [
      entry.total_wasted_annual,
      entry.annual_total_wasted,
      entry.total_wasted_all_in,
      entry.all_in_annual_waste,
      entry.annual_all_in_waste,
      entry.total_wasted_validated,
      entry.all_in_total_wasted_validated,
      entry.site_overview_state?.metrics?.total_wasted_annual,
      entry.site_overview_state?.metrics?.all_in_annual_waste,
      entry.site_overview_state?.metrics?.annual_all_in_waste
    ];
    for (const candidate of explicitTotalCandidates) {
      const n = toNumber(candidate);
      if (isFinite(n) && n >= 1000) return n;
    }

    const annualFallbackCandidates = [
      entry.annual_waste_validated_total,
      entry.annual_savings_validated_total,
      entry.annual_waste_validated,
      entry.annual_waste,
      entry.annual_savings_validated,
      entry.annual_savings,
      entry.site_overview_state?.metrics?.annual_waste,
      entry.site_overview_state?.metrics?.annual_savings,
      entry.site_overview_state?.metrics?.annual_waste_validated,
      entry.site_overview_state?.metrics?.annual_savings_validated
    ];
    for (const candidate of annualFallbackCandidates) {
      const n = toNumber(candidate);
      if (isFinite(n) && n >= 1000) return n;
    }
    const strictTextCandidates = [];
    const strictTextFields = [
      'cross_check',
      'field_condition_summary',
      'energy_field_summary_brief',
      'narration_ready_text',
      'pattern_part1',
      'pattern_part2',
      'pattern_brief'
    ];
    strictTextFields.forEach((field) => collectTextFragments(strictTextCandidates, entry[field]));
    collectTextFragments(strictTextCandidates, entry.site_overview_state?.story_blocks?.baseline_notes);
    collectTextFragments(strictTextCandidates, entry.site_overview_state?.story_blocks?.brief);
    collectTextFragments(strictTextCandidates, entry.site_overview_state?.story_blocks?.part1);
    collectTextFragments(strictTextCandidates, entry.site_overview_state?.story_blocks?.part2);

    for (const text of strictTextCandidates) {
      const parsed = extractStrictAllInAnnualConsequenceFromText(text);
      if (parsed !== null) return parsed;
    }
    for (const text of strictTextCandidates) {
      const parsed = extractAnnualConsequenceFromText(text);
      if (parsed !== null) return parsed;
    }

    return null;
  }

  function resolveTargetPatternKvaFromPatternEntry(entry) {
    if (!entry || typeof entry !== 'object') return null;

    const directCandidates = [
      entry.bt_target_kva,
      entry.target_kva_image,
      entry.target_validated,
      entry.target_kva,
      entry.daily_target_kva,
      entry.site_overview_state?.metrics?.bt_target_kva,
      entry.site_overview_state?.metrics?.target_kva_image,
      entry.site_overview_state?.metrics?.target_validated
    ];
    for (const candidate of directCandidates) {
      const n = Number(candidate);
      if (isFinite(n) && n > 0) return n;
    }

    const textCandidates = [];
    const prioritizedFields = [
      'cross_check',
      'voltage_baseline_notes',
      'field_condition_summary',
      'pattern_part1',
      'pattern_text'
    ];
    prioritizedFields.forEach((field) => collectTextFragments(textCandidates, entry[field]));
    if (!textCandidates.length) collectTextFragments(textCandidates, entry);

    for (const text of textCandidates) {
      const parsed = extractTargetPatternKvaFromText(text);
      if (parsed !== null) return parsed;
    }

    return null;
  }

  function resolveFieldConsequenceFromDom(xfmrId) {
    const wasteCostHourEl = document.getElementById(`xfmr${xfmrId}-xfmr-waste-cost-hour`);
    if (!wasteCostHourEl) return null;
    const hourly = parseCurrencyValue(wasteCostHourEl.textContent || '');
    if (hourly === null || hourly <= 0) return null;
    return hourly * 8760;
  }

  function resolveFieldVoltageForTransformer(xfmrId, transformerName) {
    const normalizedName = transformerName || '';
    const btVoltage = resolveBtFrontCardVoltage(normalizedName);
    if (btVoltage !== null) return btVoltage;

    const entry = findPatternEntryForTransformer(normalizedName);
    const patternVoltage = resolveFieldVoltageFromPatternEntry(entry);
    if (patternVoltage !== null) return patternVoltage;

    const dashboardData = getDashboardDataForTransformer(normalizedName);
    const dashboardVoltage = resolveFieldVoltageFromDashboardData(dashboardData);
    if (dashboardVoltage !== null) return dashboardVoltage;

    return null;
  }

  function resolvePfPercentForTransformer(xfmrId, transformerName) {
    const normalizedName = transformerName || '';
    const btPf = resolveBtFrontCardPfPercent(normalizedName);
    if (btPf !== null) return btPf;

    const dashboardData = getDashboardDataForTransformer(normalizedName);
    const dashboardPf = resolvePfPercentFromDashboardData(dashboardData);
    if (dashboardPf !== null) return dashboardPf;
    const entry = findPatternEntryForTransformer(normalizedName);
    const patternPf = resolvePfPercentFromPatternEntry(entry);
    if (patternPf !== null) return patternPf;

    return null;
  }

  function resolveFieldConsequenceForTransformer(xfmrId, transformerName) {
    const normalizedName = transformerName || '';
    const btConsequence = resolveBtFrontCardConsequence(normalizedName);
    if (btConsequence !== null) return btConsequence;

    const entry = findPatternEntryForTransformer(normalizedName);
    const patternConsequence = resolveFieldConsequenceFromPatternEntry(entry);
    if (patternConsequence !== null) return patternConsequence;

    const markdownConsequence = getEnergyHealthMarkdownConsequenceForTransformer(normalizedName);
    if (markdownConsequence !== null) return markdownConsequence;

    const dashboardData = getDashboardDataForTransformer(normalizedName);
    if (dashboardData) {
      const key = getDashboardCacheKey(normalizedName);
      if (
        key &&
        !energyMarkdownResolvedCache.has(key) &&
        !energyMarkdownPromiseCache.has(key)
      ) {
        loadEnergyHealthMarkdownConsequenceForTransformer(normalizedName, dashboardData)
          .then(() => refreshBindings())
          .catch(() => {});
      }
    }

    return resolveFieldConsequenceFromDom(xfmrId);
  }

  function resolveTargetPatternKvaForTransformer(xfmrId, transformerName) {
    const entry = findPatternEntryForTransformer(transformerName || '');
    return resolveTargetPatternKvaFromPatternEntry(entry);
  }

  function ensureGaugeSideMetrics(xfmrId) {
    const gaugeContainer = document.querySelector(`#xfmr${xfmrId}-card .gauge-container`);
    if (!gaugeContainer) return false;

    const voltageId = `xfmr${xfmrId}-field-voltage`;
    if (!document.getElementById(voltageId)) {
      const leftMetric = document.createElement('div');
      leftMetric.className = 'gauge-side-metric gauge-side-left';
      leftMetric.innerHTML = `
        <div class="gauge-side-label"><span>Energy Field</span><span>Voltage</span></div>
        <div class="gauge-side-value" id="${voltageId}">—</div>
      `;
      gaugeContainer.appendChild(leftMetric);
    }

    const consequenceId = `xfmr${xfmrId}-field-consequence`;
    if (!document.getElementById(consequenceId)) {
      const rightMetric = document.createElement('div');
      rightMetric.className = 'gauge-side-metric gauge-side-right';
      rightMetric.innerHTML = `
        <div class="gauge-side-label"><span>Energy Field</span><span>Consequence</span></div>
        <div class="gauge-side-value" id="${consequenceId}">—</div>
      `;
      gaugeContainer.appendChild(rightMetric);
    }

    return true;
  }

  function bindGaugeSideMetrics(xfmrId, transformerName) {
    const ensured = ensureGaugeSideMetrics(xfmrId);
    if (!ensured) return;

    const voltageEl = document.getElementById(`xfmr${xfmrId}-field-voltage`);
    const consequenceEl = document.getElementById(`xfmr${xfmrId}-field-consequence`);
    if (!voltageEl || !consequenceEl) return;

    const voltage = resolveFieldVoltageForTransformer(xfmrId, transformerName || '');
    const consequence = resolveFieldConsequenceForTransformer(xfmrId, transformerName || '');
    voltageEl.textContent = formatVoltageValue(voltage);
    consequenceEl.textContent = consequence !== null ? `${formatCurrencyWhole(consequence)}/yr` : '—';
  }

  function bindPfMetric(xfmrId, transformerName) {
    const pfEl = document.getElementById(`xfmr${xfmrId}-metric-pf`);
    if (!pfEl) return;

    const pfPercent = resolvePfPercentForTransformer(xfmrId, transformerName || '');
    if (pfPercent === null) return;

    pfEl.textContent = `${pfPercent.toFixed(1)}%`;
    if (typeof window.initializePowerFactorDial === 'function') {
      try { window.initializePowerFactorDial(xfmrId); } catch (_) {}
    }
  }

  function bindTargetPatternMetric(xfmrId, transformerName) {
    const targetPatternEl = document.getElementById(`xfmr${xfmrId}-target-pattern`);
    if (!targetPatternEl) return;
    const targetKva = resolveTargetPatternKvaForTransformer(xfmrId, transformerName || '');
    const formatted = formatTargetPatternKva(targetKva);
    if (formatted) targetPatternEl.textContent = formatted;
  }

  function bindAllGaugeSideMetrics() {
    for (let i = 1; i <= 4; i++) {
      const nameEl = document.getElementById(`xfmr${i}-name`);
      const transformerName = (nameEl?.textContent || '').trim();
      if (!transformerName) continue;
      bindPfMetric(i, transformerName);
      bindGaugeSideMetrics(i, transformerName);
      bindTargetPatternMetric(i, transformerName);
    }

    if (typeof window.applyEfsiColors === 'function') {
      try { window.applyEfsiColors(); } catch (_) {}
    }
  }

  function refreshBindings() {
    loadBtFrontCardMetrics()
      .then(() => bindAllGaugeSideMetrics())
      .catch(() => {});
    prefetchDashboardDataForVisibleTransformers();
    prefetchEnergyHealthMarkdownForVisibleTransformers();
    bindAllGaugeSideMetrics();
  }

  function init() {
    injectStyles();
    loadBtFrontCardMetrics()
      .then(() => refreshBindings())
      .catch(() => {});
    prefetchDashboardDataForVisibleTransformers();
    refreshBindings();

    fetchLatestPatternData()
      .then((data) => {
        if (data) refreshBindings();
      })
      .catch(() => {});

    if (typeof window.ensurePatternDataReady === 'function') {
      try {
        const result = window.ensurePatternDataReady();
        if (result && typeof result.then === 'function') {
          result.then(() => refreshBindings()).catch(() => {});
        }
      } catch (_) {}
    }

    [250, 1000, 2500, 5000].forEach((delay) => {
      setTimeout(refreshBindings, delay);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
