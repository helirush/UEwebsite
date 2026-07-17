(() => {
  if (window.__unitySideMetricsEnhancerLoaded) return;
  window.__unitySideMetricsEnhancerLoaded = true;

  const STYLE_ID = 'unity-side-metrics-style';
  const dashboardDataPromiseCache = new Map();
  const dashboardDataResolvedCache = new Map();
  const energyMarkdownPromiseCache = new Map();
  const energyMarkdownResolvedCache = new Map();
  const voltAmpMarkdownPromiseCache = new Map();
  const voltAmpMarkdownResolvedCache = new Map();
  const latestPatternDataState = { data: null, promise: null };
  const btFrontCardMetricsState = { data: null, promise: null };
  const SITE_OVERVIEW_BTN_ID = 'siteOverviewBtn';
  const HOWTO_TOGGLE_SCRIPT_NAME = 'unity-howto-toggle.js';
  const HOWTO_TOGGLE_SCRIPT_VERSION = '20260713b';
  const siteOverviewControlState = {
    narrationTextCache: '',
    playbackToken: 0,
    channelActive: false,
    autoplayAttempted: false,
    pulseIntervalId: null
  };

  function injectStyles() {
    if (document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
.gauge-side-metric {
  position: absolute;
  top: calc(50% + 0.5in + 10px);
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
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
  white-space: normal;
}
.gauge-side-label span {
  display: block;
  white-space: nowrap;
}
.gauge-side-value {
  font-size: 12pt;
  font-weight: 700;
  color: rgb(250, 240, 160);
  line-height: 1.2;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
  white-space: nowrap;
  width: 100%;
  text-align: center;
  border-top: 1.5px solid rgba(255, 255, 255, 0.78);
  padding-top: 6px;
}
.gauge-container.converted-classic-gauge {
  width: 131px !important;
  height: 131px !important;
  transition: transform 0.1s ease, filter 0.1s ease !important;
}
.gauge-container.converted-classic-gauge:active {
  transform: scale(0.95) !important;
  filter: brightness(0.7) !important;
}
.gauge-container.converted-classic-gauge .gauge-svg {
  width: 100%;
  height: 100%;
  transform: rotate(-90deg) !important;
  transition: filter 0.1s ease !important;
}
.gauge-container.converted-classic-gauge .gauge-bg {
  fill: none;
  stroke: var(--unity-orange);
  stroke-width: 8;
  transition: stroke-width 0.1s ease;
}
.gauge-container.converted-classic-gauge:active .gauge-bg { stroke-width: 6; }
.gauge-container.converted-classic-gauge .gauge-background {
  transition: opacity 0.1s ease;
}
.gauge-container.converted-classic-gauge:active .gauge-background { opacity: 0.8; }
.gauge-container.converted-classic-gauge .tick {
  stroke: var(--unity-ltgreen);
  stroke-width: 1.5;
  opacity: 0.6;
  transition: all 0.15s ease;
}
.gauge-container.converted-classic-gauge .tick-major {
  stroke-width: 2.5;
  stroke: var(--unity-ltgreen);
  opacity: 0.9;
  transition: all 0.15s ease;
}
.gauge-container.converted-classic-gauge .gauge-value {
  top: 50% !important;
  left: 50% !important;
  transform: translate(-50%, -50%) !important;
  font-size: 31px !important;
  font-weight: 700;
  color: rgba(255, 255, 255, 1) !important;
  text-shadow: 0 2px 4px rgba(0,0,0,0.5) !important;
  background: transparent !important;
  border: none !important;
  border-radius: 0 !important;
  box-shadow: none !important;
  padding: 0 !important;
  min-width: 0 !important;
  z-index: 6;
}
.gauge-container.converted-classic-gauge .gauge-label {
  top: 41px !important;
  left: 50%;
  transform: translate(-50%, -50%) !important;
  font-size: 5.4pt !important;
  font-family: "Trebuchet MS", "Segoe UI", sans-serif !important;
  color: rgba(255, 255, 255, 1) !important;
  text-transform: lowercase;
  letter-spacing: 1px;
  white-space: nowrap;
  opacity: 0.9;
}
.gauge-container.converted-classic-gauge .gauge-unit {
  bottom: 35% !important;
  left: 50%;
  transform: translate(-50%, 50%) !important;
  font-size: 10pt !important;
  color: rgba(255, 255, 255, 1) !important;
}
.gauge-container.converted-classic-gauge .gauge-side-metric {
  top: calc(50% + 40px) !important;
  min-width: 126px !important;
  max-width: 126px !important;
}
.gauge-container.converted-classic-gauge .gauge-side-left { left: -118px !important; }
.gauge-container.converted-classic-gauge .gauge-side-right { right: -118px !important; }
.dashboard-grid.layout-4 .gauge-container.converted-classic-gauge {
  width: 118px !important;
  height: 118px !important;
}
.dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-value { font-size: 21px !important; }
.dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-label {
  top: 38px !important;
  font-size: 4.86pt !important;
}
.dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-unit {
  bottom: 32% !important;
  font-size: 9pt !important;
}
.dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-metric {
  top: calc(50% + 38px) !important;
  min-width: 100px !important;
  max-width: 100px !important;
}
.dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-left { left: -96px !important; }
.dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-right { right: -96px !important; }
.dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-label { font-size: 7.2pt !important; }
.dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-value { font-size: 9.8pt !important; }
body.is-cherry-summaryboard .dashboard-grid.layout-4 .gauge-container.converted-classic-gauge {
  width: 112px !important;
  height: 112px !important;
}
body.is-cherry-summaryboard .dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-value {
  font-size: 22.4px !important;
}
body.is-cherry-summaryboard .dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-label {
  top: 36px !important;
  font-size: 4.5pt !important;
}
body.is-cherry-summaryboard .dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-unit {
  bottom: 31% !important;
  font-size: 8.2pt !important;
}
body.is-cherry-summaryboard .dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-metric {
  top: calc(50% + 44px) !important;
  min-width: 92px !important;
  max-width: 92px !important;
}
body.is-cherry-summaryboard .dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-left {
  left: -86px !important;
}
body.is-cherry-summaryboard .dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-right {
  right: -86px !important;
}
body.is-cherry-summaryboard .dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-label {
  font-size: 6.7pt !important;
  letter-spacing: 0.2px !important;
}
body.is-cherry-summaryboard .dashboard-grid.layout-4 .gauge-container.converted-classic-gauge .gauge-side-value {
  font-size: 9pt !important;
}
.gauge-container.has-pf-dial .gauge-side-metric {
  top: calc(50% + 52px) !important;
  min-width: 126px !important;
  max-width: 126px !important;
  gap: 4px !important;
}
.gauge-container.has-pf-dial .gauge-side-left { left: -126px !important; }
.gauge-container.has-pf-dial .gauge-side-right { right: -126px !important; }
.gauge-container.has-pf-dial .gauge-side-label {
  font-size: 8.2pt !important;
  letter-spacing: 0.35px !important;
  line-height: 1.02 !important;
  white-space: normal !important;
  text-align: center !important;
}
.gauge-container.has-pf-dial .gauge-side-label span {
  display: block;
  white-space: nowrap;
}
.gauge-container.has-pf-dial .gauge-side-value {
  font-size: 11pt !important;
}
.dashboard-grid.layout-1 .gauge-side-metric { min-width: 120px; }
.dashboard-grid.layout-1 .gauge-side-left { left: -145px; }
.dashboard-grid.layout-1 .gauge-side-right { right: -145px; }
.dashboard-grid.layout-1 .gauge-side-label { font-size: 10pt; }
.dashboard-grid.layout-1 .gauge-side-value { font-size: 14pt; }
.dashboard-grid.layout-1 .gauge-container.has-pf-dial .gauge-side-metric {
  top: calc(50% + 70px) !important;
  min-width: 170px !important;
  max-width: 170px !important;
}
.dashboard-grid.layout-1 .gauge-container.has-pf-dial .gauge-side-left { left: -205px !important; }
.dashboard-grid.layout-1 .gauge-container.has-pf-dial .gauge-side-right { right: -205px !important; }
.dashboard-grid.layout-4 .gauge-container.has-pf-dial .gauge-side-metric {
  top: calc(50% + 52px) !important;
  min-width: 114px !important;
  max-width: 114px !important;
}
.dashboard-grid.layout-4 .gauge-container.has-pf-dial .gauge-side-left { left: -108px !important; }
.dashboard-grid.layout-4 .gauge-container.has-pf-dial .gauge-side-right { right: -108px !important; }
.dashboard-grid.layout-4 .gauge-container.has-pf-dial .gauge-side-label { font-size: 7.8pt !important; }
.dashboard-grid.layout-4 .gauge-container.has-pf-dial .gauge-side-value { font-size: 10.2pt !important; }
.header-buttons .unity-site-overview-btn {
  min-width: 390px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  white-space: nowrap;
}
.header-buttons .unity-site-overview-label {
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 700;
}
.header-buttons .unity-site-overview-controls {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;
}
.header-buttons .unity-site-overview-state {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 54px;
  padding: 2px 8px;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 0.6px;
  text-transform: uppercase;
}
.header-buttons .unity-site-overview-power-state.is-on {
  background: rgba(247, 225, 67, 0.98);
  color: rgba(20, 24, 14, 0.98);
  border-color: rgba(255, 242, 140, 0.95);
  box-shadow: 0 0 0 1px rgba(138, 116, 0, 0.45) inset, 0 0 10px rgba(255, 225, 55, 0.65);
  animation: unitySiteOverviewOnFlash 0.82s ease-in-out infinite;
}
.header-buttons .unity-site-overview-power-state.is-off {
  background: rgba(27, 78, 41, 0.92);
  color: rgba(232, 247, 224, 0.95);
  border-color: rgba(142, 214, 142, 0.65);
  box-shadow: 0 0 0 1px rgba(9, 42, 21, 0.45) inset;
}
.header-buttons .unity-site-overview-reset-state {
  background: rgba(30, 48, 70, 0.85);
  color: rgba(225, 236, 255, 0.95);
}
@keyframes unitySiteOverviewOnFlash {
  0% {
    background: rgba(248, 230, 82, 0.98);
    border-color: rgba(255, 244, 156, 0.95);
    box-shadow: 0 0 0 1px rgba(138, 116, 0, 0.42) inset, 0 0 6px rgba(255, 228, 72, 0.55);
  }
  50% {
    background: rgba(214, 186, 38, 0.94);
    border-color: rgba(234, 205, 92, 0.92);
    box-shadow: 0 0 0 1px rgba(112, 88, 0, 0.42) inset, 0 0 14px rgba(255, 210, 41, 0.78);
  }
  100% {
    background: rgba(248, 230, 82, 0.98);
    border-color: rgba(255, 244, 156, 0.95);
    box-shadow: 0 0 0 1px rgba(138, 116, 0, 0.42) inset, 0 0 6px rgba(255, 228, 72, 0.55);
  }
}
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

  function isCherrySummaryboard() {
    const path = String(window.location.pathname || '');
    if (/CherryAve_Site/i.test(path)) return true;
    const siteLabel = String(document.getElementById('site-facility-name')?.textContent || '');
    return /CHERRY\s*AVE/i.test(siteLabel);
  }

  function ensureClassicGaugeTicks(xfmrId) {
    const ticksContainer = document.getElementById(`xfmr${xfmrId}-ticks`);
    if (!ticksContainer || ticksContainer.childNodes.length > 0) return;
    const centerX = 100;
    const centerY = 100;
    const radius = 92;
    const tickLengthMinor = 7;
    const tickLengthMajor = 10;
    const tickCount = 60;

    for (let idx = 0; idx < tickCount; idx += 1) {
      const angle = (idx * 360 / tickCount);
      const radians = angle * (Math.PI / 180);
      const major = (idx % 5) === 0;
      const tickLength = major ? tickLengthMajor : tickLengthMinor;
      const x1 = centerX + (radius * Math.cos(radians));
      const y1 = centerY + (radius * Math.sin(radians));
      const x2 = centerX + ((radius - tickLength) * Math.cos(radians));
      const y2 = centerY + ((radius - tickLength) * Math.sin(radians));
      const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
      line.setAttribute('class', major ? 'tick-major' : 'tick');
      line.setAttribute('x1', x1);
      line.setAttribute('y1', y1);
      line.setAttribute('x2', x2);
      line.setAttribute('y2', y2);
      ticksContainer.appendChild(line);
    }
  }

  function convertCherryPfDialToClassicGauge(xfmrId, gaugeContainer) {
    if (!gaugeContainer || !isCherrySummaryboard()) return false;
    if (gaugeContainer.classList.contains('converted-classic-gauge')) return true;
    if (!gaugeContainer.querySelector('svg[id$="-pf-dial"]')) return false;

    const pfText = String(document.getElementById(`xfmr${xfmrId}-metric-pf`)?.textContent || '').trim();
    const safePfText = pfText || '—';
    const gradientId = `blueGradient-xfmr${xfmrId}`;
    gaugeContainer.innerHTML = `
<svg class="gauge-svg" id="xfmr${xfmrId}-pf-dial" viewBox="0 0 200 200">
  <defs>
    <radialGradient id="${gradientId}" cx="35%" cy="35%" r="85%">
      <stop offset="0%" stop-color="#5ca3b8" stop-opacity="1.0" />
      <stop offset="60%" stop-color="#3d8599" stop-opacity="0.95" />
      <stop offset="100%" stop-color="#2a6d7f" stop-opacity="0.9" />
    </radialGradient>
  </defs>
  <circle class="gauge-background" cx="100" cy="100" r="80" fill="url(#${gradientId})"></circle>
  <circle class="gauge-bg" cx="100" cy="100" r="92"></circle>
  <g class="tick-marks" id="xfmr${xfmrId}-ticks"></g>
</svg>
<div class="gauge-label">Power Factor</div>
<div class="gauge-value" id="xfmr${xfmrId}-metric-pf">${safePfText}</div>
<div class="gauge-unit">efficiency</div>
    `;
    gaugeContainer.classList.add('converted-classic-gauge');
    gaugeContainer.classList.remove('has-pf-dial');
    ensureClassicGaugeTicks(xfmrId);
    return true;
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
      `dashboard_data_${compact}.json`,
      `volt_dashboard_data_${underscored}.json`,
      `volt_dashboard_data_${safe}.json`,
      `volt_dashboard_data_${compact}.json`,
      `energy_dashboard_data_${underscored}.json`,
      `energy_dashboard_data_${safe}.json`,
      `energy_dashboard_data_${compact}.json`
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

  function buildVoltAmpHealthMarkdownCandidatePaths(transformerName, dashboardData) {
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
      candidates.push(`FIELDp2-VoltAmpHealth_${namePart}_${meterId}-${resolution}_${period}.md`);
      candidates.push(`FIELDp2-VoltAmpHealth_${namePart}_${meterId}-${period}.md`);
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
      /annual\s+all-?in\s+waste[^$]{0,80}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /all-?in\s+annual\s+waste[^$]{0,80}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /all-?in[^$]{0,50}waste[^$]{0,80}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)\s*(?:\/?\s*(?:yr|year|annually))/i,
      /ANNUAL_WASTE(?:_VALIDATED)?\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /ANNUAL_WASTE_VALIDATED_TOTAL\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /ANNUAL_TOTAL_WASTED_VALIDATED\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i
    ];

    for (const pattern of patterns) {
      const parsed = maxMatchForPattern(pattern);
      if (parsed !== null) return parsed;
    }

    return null;
  }

  function extractImageWasteConsequenceFromCrossCheck(text) {
    const raw = String(text || '').trim();
    if (!raw) return null;

    const segments = raw
      .split(/\r?\n|[.;]/)
      .map((part) => part.trim())
      .filter(Boolean);

    let best = null;
    for (const segment of segments) {
      const lower = segment.toLowerCase();
      if (!lower.includes('image')) continue;
      if (!lower.includes('waste') && !lower.includes('savings')) continue;

      const imageLeading = segment.match(/image[^$0-9]{0,30}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i);
      if (imageLeading) {
        const parsed = parseCurrencyValue(imageLeading[1]);
        if (parsed !== null && parsed >= 1000 && (best === null || parsed > best)) {
          best = parsed;
        }
      }

      const imageTrailing = segment.match(/\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)[^\n]{0,30}\(?(?:image|img)\)?/i);
      if (imageTrailing) {
        const parsed = parseCurrencyValue(imageTrailing[1]);
        if (parsed !== null && parsed >= 1000 && (best === null || parsed > best)) {
          best = parsed;
        }
      }

      const amountRegex = /\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/g;
      let match;
      while ((match = amountRegex.exec(segment)) !== null) {
        const parsed = parseCurrencyValue(match[1]);
        if (parsed !== null && parsed >= 1000 && (best === null || parsed > best)) {
          best = parsed;
        }
      }
    }

    return best;
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

  function loadVoltAmpMarkdownVoltageForTransformer(transformerName, dashboardData) {
    const key = getDashboardCacheKey(transformerName);
    if (!key || !dashboardData) return Promise.resolve(null);

    if (voltAmpMarkdownResolvedCache.has(key)) {
      return Promise.resolve(voltAmpMarkdownResolvedCache.get(key));
    }

    if (voltAmpMarkdownPromiseCache.has(key)) {
      return voltAmpMarkdownPromiseCache.get(key);
    }

    const paths = buildVoltAmpHealthMarkdownCandidatePaths(transformerName, dashboardData);
    if (!paths.length) {
      voltAmpMarkdownResolvedCache.set(key, null);
      return Promise.resolve(null);
    }

    const promise = fetchFirstAvailableText(paths)
      .then((text) => {
        const voltage = extractVoltageFromText(text);
        voltAmpMarkdownResolvedCache.set(key, voltage !== null ? voltage : null);
        voltAmpMarkdownPromiseCache.delete(key);
        return voltAmpMarkdownResolvedCache.get(key);
      })
      .catch(() => {
        voltAmpMarkdownResolvedCache.set(key, null);
        voltAmpMarkdownPromiseCache.delete(key);
        return null;
      });

    voltAmpMarkdownPromiseCache.set(key, promise);
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

  function getVoltAmpMarkdownVoltageForTransformer(transformerName) {
    const key = getDashboardCacheKey(transformerName);
    if (!key || !voltAmpMarkdownResolvedCache.has(key)) return null;
    return voltAmpMarkdownResolvedCache.get(key);
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

  function prefetchVoltAmpMarkdownForVisibleTransformers() {
    for (let i = 1; i <= 4; i++) {
      const nameEl = document.getElementById(`xfmr${i}-name`);
      const transformerName = (nameEl?.textContent || '').trim();
      if (!transformerName) continue;

      const key = getDashboardCacheKey(transformerName);
      if (!key) continue;
      if (voltAmpMarkdownResolvedCache.has(key) || voltAmpMarkdownPromiseCache.has(key)) continue;

      const dashboardData = getDashboardDataForTransformer(transformerName);
      if (!dashboardData) continue;

      loadVoltAmpMarkdownVoltageForTransformer(transformerName, dashboardData)
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
      'nominal_voltage',
      'voltage_nominal',
      'field_voltage_nominal',
      'nominal_voltage_v',
      'voltage_nominal_v',
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
      /annual\s+all-?in\s+waste[^$]{0,80}\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /all-?in[^$]{0,40}annual[^$]{0,30}waste[^$]{0,40}\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /\|\s*annual\s+waste\s*\|[^|]*\|\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /ANNUAL_WASTE(?:_VALIDATED)?\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /ANNUAL_WASTE_VALIDATED_TOTAL\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /ANNUAL_TOTAL_WASTED_VALIDATED\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /ANNUAL_SAVINGS_VALIDATED\s*:\s*\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /annual(?:ized)?[^$]{0,80}(?:total\s+)?waste[^$]{0,30}\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
      /\$\s*([0-9][0-9,]*(?:\.[0-9]+)?)[^.\n]{0,80}annual(?:ized)?[^.\n]{0,20}(?:total\s+)?waste/i,
      /annual[^$]{0,80}savings[^$]{0,40}\$?\s*([0-9][0-9,]*(?:\.[0-9]+)?)/i,
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
      data.nominal_voltage,
      data.voltage_nominal,
      data.field_voltage_nominal,
      data.nominal_voltage_v,
      data.voltage_nominal_v,
      data.voltage_avg,
      data.avg_voltage,
      data.average_voltage,
      data.field_voltage,
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
      'pattern_interpretation',
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
    const cherryContext = isCherrySummaryboard();

    if (cherryContext) {
      const imageWasteConsequence = extractImageWasteConsequenceFromCrossCheck(entry.cross_check);
      if (imageWasteConsequence !== null) return imageWasteConsequence;
    }

    const explicitTotalCandidates = [
      entry.total_wasted_annual,
      entry.annual_total_wasted,
      entry.total_wasted_all_in,
      entry.all_in_annual_waste,
      entry.annual_all_in_waste,
      entry.total_wasted_validated,
      entry.annual_waste_validated_total,
      entry.annual_total_wasted_validated,
      entry.all_in_total_wasted_validated,
      entry.site_overview_state?.metrics?.total_wasted_annual,
      entry.site_overview_state?.metrics?.all_in_annual_waste,
      entry.site_overview_state?.metrics?.annual_all_in_waste,
      entry.site_overview_state?.metrics?.annual_waste_validated_total
    ];
    for (const candidate of explicitTotalCandidates) {
      const n = toNumber(candidate);
      if (isFinite(n) && n >= 1000) return n;
    }

    const annualFallbackCandidates = cherryContext
      ? [
          entry.annual_savings_validated,
          entry.annual_savings,
          entry.site_overview_state?.metrics?.annual_savings_validated,
          entry.site_overview_state?.metrics?.annual_savings,
          entry.annual_waste_validated,
          entry.annual_waste,
          entry.site_overview_state?.metrics?.annual_waste,
          entry.site_overview_state?.metrics?.annual_waste_validated,
          entry.site_overview_state?.metrics?.annual_waste_validated_total
        ]
      : [
          entry.annual_waste_validated,
          entry.annual_waste,
          entry.site_overview_state?.metrics?.annual_waste,
          entry.site_overview_state?.metrics?.annual_waste_validated,
          entry.site_overview_state?.metrics?.annual_waste_validated_total,
          entry.annual_savings_validated,
          entry.annual_savings,
          entry.site_overview_state?.metrics?.annual_savings,
          entry.site_overview_state?.metrics?.annual_savings_validated
        ];
    for (const candidate of annualFallbackCandidates) {
      const n = toNumber(candidate);
      if (isFinite(n) && n >= 1000) return n;
    }

    const monthlyFallbackCandidates = [
      entry.monthly_savings_validated,
      entry.site_overview_state?.metrics?.monthly_savings_validated,
      entry.monthly_waste_validated_total,
      entry.monthly_waste,
      entry.site_overview_state?.metrics?.monthly_waste_validated_total,
      entry.site_overview_state?.metrics?.monthly_waste
    ];
    for (const candidate of monthlyFallbackCandidates) {
      const n = toNumber(candidate);
      if (isFinite(n) && n >= 100) return n * 12;
    }
    const strictTextCandidates = [];
    const strictTextFields = [
      'cross_check',
      'field_condition_summary',
      'energy_field_summary_brief',
      'narration_ready_text',
      'pattern_part1',
      'pattern_part2',
      'pattern_brief',
      'pattern_text',
      'pattern_interpretation',
      'pattern_summary',
      'simulated_mpts_outcome',
      'executive_summary_short'
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
    const dashboardData = getDashboardDataForTransformer(normalizedName);

    const queueVoltAmpMarkdownLoad = () => {
      if (!dashboardData) return;
      const key = getDashboardCacheKey(normalizedName);
      if (
        key &&
        !voltAmpMarkdownResolvedCache.has(key) &&
        !voltAmpMarkdownPromiseCache.has(key)
      ) {
        loadVoltAmpMarkdownVoltageForTransformer(normalizedName, dashboardData)
          .then(() => refreshBindings())
          .catch(() => {});
      }
    };

    if (isCherrySummaryboard()) {
      const markdownVoltage = getVoltAmpMarkdownVoltageForTransformer(normalizedName);
      if (markdownVoltage !== null) return markdownVoltage;
      queueVoltAmpMarkdownLoad();

      const dashboardVoltage = resolveFieldVoltageFromDashboardData(dashboardData);
      if (dashboardVoltage !== null) return dashboardVoltage;

      const entry = findPatternEntryForTransformer(normalizedName);
      const patternVoltage = resolveFieldVoltageFromPatternEntry(entry);
      if (patternVoltage !== null) return patternVoltage;

      return null;
    }

    const entry = findPatternEntryForTransformer(normalizedName);
    const patternVoltage = resolveFieldVoltageFromPatternEntry(entry);
    if (patternVoltage !== null) return patternVoltage;
    const dashboardVoltage = resolveFieldVoltageFromDashboardData(dashboardData);
    if (dashboardVoltage !== null) return dashboardVoltage;

    const markdownVoltage = getVoltAmpMarkdownVoltageForTransformer(normalizedName);
    if (markdownVoltage !== null) return markdownVoltage;
    queueVoltAmpMarkdownLoad();

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
    let hasPfDial = !!gaugeContainer.querySelector('svg[id$="-pf-dial"]');
    if (hasPfDial) {
      const converted = convertCherryPfDialToClassicGauge(xfmrId, gaugeContainer);
      if (converted) hasPfDial = false;
    }
    gaugeContainer.classList.toggle('has-pf-dial', hasPfDial);

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
        <div class="gauge-side-label"><span>Energy Field</span><span>Costs</span></div>
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

  function setGlobalSpeakingState(value) {
    try {
      if (typeof isSpeaking !== 'undefined') {
        isSpeaking = !!value;
      }
    } catch (_) {}
    window.isSpeaking = !!value;
  }

  function getGlobalSpeakingState() {
    try {
      if (typeof isSpeaking !== 'undefined') return !!isSpeaking;
    } catch (_) {}
    return !!window.isSpeaking;
  }

  function setGlobalCurrentAudioElement(audio) {
    try {
      if (typeof currentAudioElement !== 'undefined') {
        currentAudioElement = audio;
      }
    } catch (_) {}
    window.currentAudioElement = audio || null;
  }

  function getGlobalCurrentAudioElement() {
    try {
      if (typeof currentAudioElement !== 'undefined') return currentAudioElement;
    } catch (_) {}
    return window.currentAudioElement || null;
  }

  function isAnyPlaybackActive() {
    try {
      if (typeof isPlaybackActive === 'function') return !!isPlaybackActive();
    } catch (_) {}
    const speechActive = !!(window.speechSynthesis && (window.speechSynthesis.speaking || window.speechSynthesis.pending));
    const audio = getGlobalCurrentAudioElement();
    const audioActive = !!(audio && !audio.paused && !audio.ended);
    return getGlobalSpeakingState() || speechActive || audioActive;
  }

  function stopAnyPlayback() {
    try {
      if (typeof stopCurrentPlayback === 'function') {
        stopCurrentPlayback();
      }
    } catch (_) {}
    if (window.speechSynthesis) {
      try { window.speechSynthesis.cancel(); } catch (_) {}
    }
    const audio = getGlobalCurrentAudioElement();
    if (audio) {
      try {
        audio.pause();
        audio.currentTime = 0;
      } catch (_) {}
    }
    try {
      const winAudio = window.currentAudioElement;
      if (winAudio && winAudio !== audio) {
        winAudio.pause();
        winAudio.currentTime = 0;
      }
    } catch (_) {}
    setGlobalCurrentAudioElement(null);
    try { window.currentAudioElement = null; } catch (_) {}
    setGlobalSpeakingState(false);
    siteOverviewControlState.channelActive = false;
  }

  function getSiteOverviewButton() {
    const byId = document.getElementById(SITE_OVERVIEW_BTN_ID);
    if (byId) return byId;
    const candidates = Array.from(document.querySelectorAll('.header-buttons .header-info-btn, .header-buttons button'));
    return candidates.find((button) => /GROUP\s+SITE\s+OVERVIEW/i.test(String(button.textContent || '')));
  }

  function ensureSiteOverviewButtonPresentation() {
    const button = getSiteOverviewButton();
    if (!button) return null;
    if (!button.id) button.id = SITE_OVERVIEW_BTN_ID;
    button.classList.add('unity-site-overview-btn');
    const group = button.closest('.header-buttons');
    if (group) {
      group.style.gap = '28px';
      group.style.flexWrap = 'wrap';
    }
    if (!button.querySelector('.unity-site-overview-label')) {
      button.innerHTML = `
        <span class="unity-site-overview-label">🔊 LISTEN: GROUP SITE OVERVIEW</span>
        <span class="unity-site-overview-controls" aria-hidden="true">
          <span class="unity-site-overview-state unity-site-overview-power-state is-off">OFF</span>
          <span class="unity-site-overview-state unity-site-overview-reset-state">RESET</span>
        </span>
      `;
    }
    return button;
  }

  function isSiteOverviewPlaybackActive() {
    return !!(siteOverviewControlState.channelActive || isAnyPlaybackActive());
  }

  function updateSiteOverviewButtonUi() {
    const button = ensureSiteOverviewButtonPresentation();
    if (!button) return;
    const powerStateEl = button.querySelector('.unity-site-overview-power-state');
    if (!powerStateEl) return;
    const active = isSiteOverviewPlaybackActive();
    powerStateEl.textContent = active ? 'ON' : 'OFF';
    powerStateEl.classList.toggle('is-on', active);
    powerStateEl.classList.toggle('is-off', !active);
    button.classList.toggle('is-speaking', active);
  }

  async function getPatternDataForSiteOverview() {
    try {
      if (typeof window.ensurePatternDataReady === 'function') {
        const maybe = window.ensurePatternDataReady();
        const resolved = (maybe && typeof maybe.then === 'function') ? await maybe : maybe;
        if (resolved && typeof resolved === 'object') return resolved;
      }
    } catch (_) {}
    try {
      const latest = await fetchLatestPatternData();
      if (latest && typeof latest === 'object') return latest;
    } catch (_) {}
    try {
      if (typeof PATTERN_DATA !== 'undefined' && PATTERN_DATA && typeof PATTERN_DATA === 'object') {
        return PATTERN_DATA;
      }
    } catch (_) {}
    return null;
  }

  function getSiteLabelForNarration() {
    const raw = (document.getElementById('site-facility-name')?.textContent || '').trim();
    return raw || 'this facility';
  }

  function getPeriodLabelForNarration() {
    const periodRaw = (document.getElementById('param-period')?.textContent || '').trim();
    return periodRaw ? `for ${periodRaw}` : 'for this reporting period';
  }

  function extractTransformerRowsFromPatternData(data) {
    if (!data || typeof data !== 'object') return [];
    const rows = [];
    const transformers = data.transformers;
    if (!transformers || typeof transformers !== 'object') return rows;

    const pushRow = (key, value) => {
      if (!value || typeof value !== 'object') return;
      const name = String(
        value.transformer_name ||
        value.name ||
        value.display_name ||
        key ||
        ''
      ).trim();
      if (!name) return;
      const pf = normalizePfPercent(
        value.power_factor ??
        value.pf ??
        value.powerFactor ??
        value.avg_power_factor ??
        value.site_overview_state?.metrics?.power_factor
      );
      rows.push({ name, pf });
    };

    if (Array.isArray(transformers)) {
      transformers.forEach((value, index) => pushRow(`xfmr${index + 1}`, value));
    } else {
      Object.entries(transformers).forEach(([key, value]) => pushRow(key, value));
    }
    return rows;
  }

  function buildSiteOverviewNarrationFromPatternData(data) {
    const siteName = getSiteLabelForNarration();
    const periodLabel = getPeriodLabelForNarration();
    const narrativeCandidates = [
      data?.group_overview?.narrative,
      data?.group_overview?.summary,
      data?.site_overview_state?.narrative,
      data?.site_overview_text
    ];
    const directNarrative = narrativeCandidates
      .map((value) => String(value || '').trim())
      .find(Boolean);
    if (directNarrative) {
      return `Welcome. I'm Unity. Here is your group site overview at ${siteName} ${periodLabel}. ${directNarrative}`.replace(/\s+/g, ' ').trim();
    }

    const rows = extractTransformerRowsFromPatternData(data).filter((row) => row.pf !== null);
    if (rows.length >= 2) {
      const sorted = [...rows].sort((a, b) => (b.pf || 0) - (a.pf || 0));
      const best = sorted[0];
      const worst = sorted[sorted.length - 1];
      return `Welcome. I'm Unity. Here is your group site overview at ${siteName} ${periodLabel}. ${best.name} is currently strongest at ${best.pf.toFixed(1)} percent power factor, while ${worst.name} needs the most attention at ${worst.pf.toFixed(1)} percent. Focus on reactive waste reduction and field stability to raise group efficiency.`;
    }

    return '';
  }

  async function loadSiteOverviewTextFile() {
    const candidates = ['Audio/site_overview.txt', 'audio/site_overview.txt'];
    const cacheBust = `v=${Date.now()}`;
    for (const candidate of candidates) {
      try {
        const separator = candidate.includes('?') ? '&' : '?';
        const response = await fetch(`${candidate}${separator}${cacheBust}`, { cache: 'no-store' });
        if (!response.ok) continue;
        const text = (await response.text()).trim();
        if (text) return text;
      } catch (_) {}
    }
    return '';
  }

  async function resolveSiteOverviewNarrationText() {
    if (siteOverviewControlState.narrationTextCache) return siteOverviewControlState.narrationTextCache;

    const fromTextFile = await loadSiteOverviewTextFile();
    if (fromTextFile) {
      siteOverviewControlState.narrationTextCache = fromTextFile;
      return fromTextFile;
    }

    const patternData = await getPatternDataForSiteOverview();
    const fromPatternData = buildSiteOverviewNarrationFromPatternData(patternData);
    if (fromPatternData) {
      siteOverviewControlState.narrationTextCache = fromPatternData;
      return fromPatternData;
    }

    const fallback = `Welcome. I'm Unity. Group site overview is still being finalized for ${getSiteLabelForNarration()}. Please review baseline and Unity system summaries while overview narration is prepared.`;
    siteOverviewControlState.narrationTextCache = fallback;
    return fallback;
  }

  function getPreferredNarrationVoice() {
    if (!window.speechSynthesis || typeof window.speechSynthesis.getVoices !== 'function') return null;
    const voices = window.speechSynthesis.getVoices() || [];
    if (!voices.length) return null;
    let preferred = voices.find((voice) => String(voice.name || '').toLowerCase().includes('unity faraday'));
    if (!preferred) {
      preferred = voices.find((voice) => {
        const name = String(voice.name || '');
        return name.includes('Samantha') || name.includes('Female') || voice.lang === 'en-US';
      });
    }
    return preferred || null;
  }

  function startSiteOverviewTextSpeech(text, playbackToken) {
    if (!text || !window.speechSynthesis || typeof SpeechSynthesisUtterance === 'undefined') return false;
    try { window.speechSynthesis.cancel(); } catch (_) {}
    const utterance = new SpeechSynthesisUtterance(text);
    const preferredVoice = getPreferredNarrationVoice();
    if (preferredVoice) utterance.voice = preferredVoice;
    utterance.rate = 0.95;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;
    utterance.onend = () => {
      if (playbackToken !== siteOverviewControlState.playbackToken) return;
      setGlobalSpeakingState(false);
      siteOverviewControlState.channelActive = false;
      updateSiteOverviewButtonUi();
    };
    utterance.onerror = () => {
      if (playbackToken !== siteOverviewControlState.playbackToken) return;
      setGlobalSpeakingState(false);
      siteOverviewControlState.channelActive = false;
      updateSiteOverviewButtonUi();
    };
    setGlobalSpeakingState(true);
    window.speechSynthesis.speak(utterance);
    return true;
  }

  function tryPlaySiteOverviewAudioCandidate(src, playbackToken) {
    return new Promise((resolve) => {
      const audio = new Audio(src);
      let settled = false;
      const settle = (ok) => {
        if (settled) return;
        settled = true;
        resolve(ok);
      };
      const fail = () => {
        try {
          audio.pause();
          audio.currentTime = 0;
        } catch (_) {}
        if (getGlobalCurrentAudioElement() === audio) setGlobalCurrentAudioElement(null);
        setGlobalSpeakingState(false);
        settle(false);
      };
      audio.onended = () => {
        if (playbackToken !== siteOverviewControlState.playbackToken) return;
        if (getGlobalCurrentAudioElement() === audio) setGlobalCurrentAudioElement(null);
        setGlobalSpeakingState(false);
        siteOverviewControlState.channelActive = false;
        updateSiteOverviewButtonUi();
      };
      audio.onerror = () => fail();
      setGlobalCurrentAudioElement(audio);
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.then === 'function') {
        playPromise.then(() => {
          if (playbackToken !== siteOverviewControlState.playbackToken) {
            fail();
            return;
          }
          setGlobalSpeakingState(true);
          settle(true);
        }).catch(() => fail());
      } else {
        setGlobalSpeakingState(true);
        settle(true);
      }
    });
  }

  async function playSiteOverviewEnhanced(options = {}) {
    const forceRestart = !!options.forceRestart;
    const autoStart = !!options.autoStart;
    if (isAnyPlaybackActive() && !forceRestart) {
      siteOverviewControlState.playbackToken += 1;
      stopAnyPlayback();
      siteOverviewControlState.channelActive = false;
      updateSiteOverviewButtonUi();
      return false;
    }

    siteOverviewControlState.playbackToken += 1;
    const playbackToken = siteOverviewControlState.playbackToken;
    stopAnyPlayback();
    siteOverviewControlState.channelActive = true;
    updateSiteOverviewButtonUi();

    const audioCandidates = ['Audio/site_overview.mp3', 'audio/site_overview.mp3'];
    for (const candidate of audioCandidates) {
      const played = await tryPlaySiteOverviewAudioCandidate(candidate, playbackToken);
      if (playbackToken !== siteOverviewControlState.playbackToken) return false;
      if (played) {
        updateSiteOverviewButtonUi();
        return true;
      }
    }

    const narrationText = await resolveSiteOverviewNarrationText();
    if (playbackToken !== siteOverviewControlState.playbackToken) return false;
    if (autoStart) {
      siteOverviewControlState.channelActive = false;
      setGlobalSpeakingState(false);
      updateSiteOverviewButtonUi();
      return false;
    }
    const startedTts = startSiteOverviewTextSpeech(narrationText, playbackToken);
    if (!startedTts) {
      siteOverviewControlState.channelActive = false;
      setGlobalSpeakingState(false);
    }
    updateSiteOverviewButtonUi();
    return startedTts;
  }

  function bindSiteOverviewButtonClick(button) {
    if (!button || button.dataset.unitySiteOverviewBound === '1') return;
    button.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
      const resetClicked = !!event.target.closest('.unity-site-overview-reset-state');
      playSiteOverviewEnhanced({ forceRestart: resetClicked }).catch(() => {});
    }, true);
    button.dataset.unitySiteOverviewBound = '1';
  }

  function attemptSiteOverviewAutoplay() {
    if (siteOverviewControlState.autoplayAttempted) return;
    siteOverviewControlState.autoplayAttempted = true;
    window.setTimeout(() => {
      playSiteOverviewEnhanced({ forceRestart: true, autoStart: true }).catch(() => {});
    }, 1200);
  }

  function ensureSiteOverviewController() {
    const button = ensureSiteOverviewButtonPresentation();
    if (!button) return;
    bindSiteOverviewButtonClick(button);
    window.playSiteOverview = function patchedPlaySiteOverview(options) {
      return playSiteOverviewEnhanced(options || {});
    };
    updateSiteOverviewButtonUi();
    attemptSiteOverviewAutoplay();
  }
  function resolveSummaryboardSideMetricsScriptUrl() {
    try {
      const scripts = Array.from(document.getElementsByTagName('script'));
      for (let index = scripts.length - 1; index >= 0; index -= 1) {
        const src = String(scripts[index].getAttribute('src') || '');
        if (src.includes('summaryboard-side-metrics.js')) {
          return new URL(src, window.location.href);
        }
      }
    } catch (_) {}
    return null;
  }
  function ensureHowToToggleEnhancerLoaded() {
    if (window.__unityHowToToggleEnhancerLoadedV2 || window.__unityHowToToggleEnhancerLoaded) return;
    if (window.__unityHowToToggleLoaderInjectedFromSideMetrics) return;
    if (!document.getElementById('unityHowToBtn')) return;

    const existingLoader = Array.from(document.getElementsByTagName('script')).find((script) =>
      String(script.getAttribute('src') || '').includes(HOWTO_TOGGLE_SCRIPT_NAME)
    );
    if (existingLoader) {
      window.__unityHowToToggleLoaderInjectedFromSideMetrics = true;
      return;
    }

    const head = document.head || document.getElementsByTagName('head')[0];
    if (!head) return;

    let src = '';
    try {
      const sideMetricsUrl = resolveSummaryboardSideMetricsScriptUrl();
      if (sideMetricsUrl) {
        src = new URL(HOWTO_TOGGLE_SCRIPT_NAME, sideMetricsUrl).toString();
      }
    } catch (_) {}
    if (!src) src = `assets/js/${HOWTO_TOGGLE_SCRIPT_NAME}`;

    const separator = src.includes('?') ? '&' : '?';
    const script = document.createElement('script');
    script.src = `${src}${separator}v=${encodeURIComponent(HOWTO_TOGGLE_SCRIPT_VERSION)}`;
    script.async = false;
    script.onload = () => {
      window.__unityHowToToggleLoaderInjectedFromSideMetrics = true;
    };
    script.onerror = () => {
      script.remove();
      window.__unityHowToToggleLoaderInjectedFromSideMetrics = false;
    };
    window.__unityHowToToggleLoaderInjectedFromSideMetrics = true;
    head.appendChild(script);
  }

  function refreshBindings() {
    ensureHowToToggleEnhancerLoaded();
    loadBtFrontCardMetrics()
      .then(() => bindAllGaugeSideMetrics())
      .catch(() => {});
    prefetchDashboardDataForVisibleTransformers();
    prefetchEnergyHealthMarkdownForVisibleTransformers();
    prefetchVoltAmpMarkdownForVisibleTransformers();
    bindAllGaugeSideMetrics();
    ensureSiteOverviewController();
  }
  function applySummaryboardContextClasses() {
    const body = document.body;
    if (!body) return;
    body.classList.toggle('is-cherry-summaryboard', isCherrySummaryboard());
  }

  function init() {
    applySummaryboardContextClasses();
    injectStyles();
    ensureHowToToggleEnhancerLoaded();
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

    if (!siteOverviewControlState.pulseIntervalId) {
      siteOverviewControlState.pulseIntervalId = window.setInterval(() => {
        ensureSiteOverviewController();
        updateSiteOverviewButtonUi();
      }, 350);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
