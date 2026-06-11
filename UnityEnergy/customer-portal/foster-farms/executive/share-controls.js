(function () {
  const DEFAULT_PUBLIC_SHARE_ORIGIN = "https://unityenergy.com";
  const DEFAULT_DESCRIPTION_PREFIX = "Foster Farms · Electrical Visibility & Intelligence Progress Report";
  const DAILY_STAMP_COUNTER_KEY = "ue_exec_share_daily_counter_v1";
  const DOCUMENT_STATUS = Object.freeze({
    REVIEW: "review",
    TEST: "test",
    PUBLISHED: "published"
  });
  const SHARE_KIND_ALIASES = Object.freeze({
    update: "project-update",
    brief: "project-update",
    memo: "project-memo",
    report: "project-memo",
    monthly: "monthly-report",
    maxwellian: "website",
    private: "website",
    alert: "website"
  });
  const DEFAULT_SHARE_KIND_CONFIG = Object.freeze({
    website: {
      key: "website",
      label: "Website",
      title: "Website",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/website.html?ue_card=clean1",
      imagePath: "/UnityEnergy/assets/images/share-card-bases/website.png",
      theme: "default"
    },
    "project-update": {
      key: "project-update",
      label: "Project-Update",
      title: "Project-Update",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/project-update.html?ue_card=clean1",
      imagePath: "/UnityEnergy/assets/images/share-card-bases/project-update.png",
      theme: "default"
    },
    "project-memo": {
      key: "project-memo",
      label: "Project-Memo",
      title: "Project-Memo",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/project-memo.html?ue_card=clean1",
      imagePath: "/UnityEnergy/assets/images/share-card-bases/project-memo.png",
      theme: "default"
    },
    "monthly-report": {
      key: "monthly-report",
      label: "Monthly-Report",
      title: "Monthly-Report",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/monthly-report.html?ue_card=clean1",
      imagePath: "/UnityEnergy/assets/images/share-card-bases/monthly-report.png",
      theme: "monthly"
    }
  });

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function formatUeStamp(dateObj, revisionCounter) {
    const mm = pad2(dateObj.getMonth() + 1);
    const dd = pad2(dateObj.getDate());
    const parsedRevision = Number.parseInt(revisionCounter, 10);
    const normalizedRevision =
      Number.isFinite(parsedRevision) && parsedRevision > 0 ? parsedRevision : 1;
    const rr = pad2(normalizedRevision);
    return `UE.${mm}${dd}.${rr}`;
  }

  function parseUeStamp(rawValue) {
    const value = String(rawValue || "").trim().toUpperCase();
    if (/^UE\.\d{2}\.\d{4}$/.test(value)) return value;
    if (/^UE\.\d{4}\.\d{2}$/.test(value)) return value;
    return null;
  }
  function extractRevisionFromStamp(stampCode) {
    const revisionedMatch = /^UE\.\d{4}\.(\d{2})$/.exec(String(stampCode || ""));
    if (!revisionedMatch) return 1;
    const parsedRevision = Number.parseInt(revisionedMatch[1], 10);
    return Number.isFinite(parsedRevision) && parsedRevision > 0 ? parsedRevision : 1;
  }

  function stampToDate(stampCode) {
    const legacyMatch = /^UE\.(\d{2})\.(\d{2})(\d{2})$/.exec(stampCode || "");
    const revisionedMatch = /^UE\.(\d{2})(\d{2})\.(\d{2})$/.exec(stampCode || "");
    let year;
    let month;
    let day;
    if (legacyMatch) {
      year = Number(`20${legacyMatch[1]}`);
      month = Number(legacyMatch[2]);
      day = Number(legacyMatch[3]);
    } else if (revisionedMatch) {
      year = new Date().getFullYear();
      month = Number(revisionedMatch[1]);
      day = Number(revisionedMatch[2]);
    } else {
      return null;
    }
    const dateObj = new Date(year, month - 1, day);
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
    const yyyy = String(dateObj.getFullYear());
    const mm = pad2(dateObj.getMonth() + 1);
    const dd = pad2(dateObj.getDate());
    return `${yyyy}-${mm}-${dd}`;
  }

  function readDailyStampCounterState() {
    try {
      const raw = window.localStorage.getItem(DAILY_STAMP_COUNTER_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      const dayKey = String(parsed?.dayKey || "").trim();
      const lastRevision = Number.parseInt(parsed?.lastRevision, 10);
      if (!dayKey) return null;
      if (!Number.isFinite(lastRevision) || lastRevision < 1) return null;
      return { dayKey, lastRevision };
    } catch (_err) {
      return null;
    }
  }

  function writeDailyStampCounterState(dayKey, lastRevision) {
    if (!dayKey) return;
    const parsedRevision = Number.parseInt(lastRevision, 10);
    if (!Number.isFinite(parsedRevision) || parsedRevision < 1) return;
    try {
      window.localStorage.setItem(
        DAILY_STAMP_COUNTER_KEY,
        JSON.stringify({
          dayKey,
          lastRevision: parsedRevision,
          updatedAt: new Date().toISOString()
        })
      );
    } catch (_err) {}
  }

  function seedDailyStampCounterFromStamp(stampCode) {
    const normalizedStamp = parseUeStamp(stampCode);
    if (!normalizedStamp) return;
    const stampDate = stampToDate(normalizedStamp);
    if (!stampDate) return;
    const dayKey = buildDailyStampKey(stampDate);
    if (!dayKey) return;
    const stampRevision = extractRevisionFromStamp(normalizedStamp);
    const state = readDailyStampCounterState();
    if (state && state.dayKey === dayKey && state.lastRevision >= stampRevision) return;
    writeDailyStampCounterState(dayKey, stampRevision);
  }

  function allocateNextDailyStampCode(dateObj, minimumRevision) {
    const safeDate = dateObj instanceof Date && !Number.isNaN(dateObj.getTime()) ? dateObj : new Date();
    const dayKey = buildDailyStampKey(safeDate);
    const parsedMinimum = Number.parseInt(minimumRevision, 10);
    const minRevision = Number.isFinite(parsedMinimum) && parsedMinimum > 0 ? parsedMinimum : 1;
    const state = readDailyStampCounterState();
    let nextRevision = minRevision;
    if (state && state.dayKey === dayKey) {
      nextRevision = Math.max(minRevision, state.lastRevision + 1);
    }
    writeDailyStampCounterState(dayKey, nextRevision);
    return formatUeStamp(safeDate, nextRevision);
  }

  function cloneKindConfig(config) {
    const source = config && typeof config === "object" ? config : {};
    const merged = {};
    Object.keys(DEFAULT_SHARE_KIND_CONFIG).forEach(function (key) {
      merged[key] = Object.assign({}, DEFAULT_SHARE_KIND_CONFIG[key], source[key] || {});
    });
    Object.keys(source).forEach(function (key) {
      if (merged[key]) return;
      const raw = source[key];
      if (raw && typeof raw === "object") {
        merged[key] = Object.assign({}, raw);
      }
    });
    return merged;
  }

  function normalizeDocumentStatus(rawValue) {
    const value = String(rawValue || "").trim().toLowerCase();
    if (value === DOCUMENT_STATUS.PUBLISHED) return DOCUMENT_STATUS.PUBLISHED;
    if (value === DOCUMENT_STATUS.TEST) return DOCUMENT_STATUS.TEST;
    return DOCUMENT_STATUS.REVIEW;
  }
  function normalizeRecipientKey(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9._-]/g, "");
  }
  function normalizeRouteAddress(value) {
    return String(value || "").trim().toLowerCase().replace(/[^a-z0-9@._+-]/g, "");
  }

  function copyToClipboard(text) {
    return (async function () {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(text);
          return true;
        }
      } catch (_err) {}

      try {
        const temp = document.createElement("textarea");
        temp.value = text;
        temp.setAttribute("readonly", "");
        temp.style.position = "absolute";
        temp.style.left = "-9999px";
        document.body.appendChild(temp);
        temp.select();
        const copied = document.execCommand("copy");
        document.body.removeChild(temp);
        return !!copied;
      } catch (_err) {
        return false;
      }
    })();
  }

  function normalizeExportText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function collectPlainTextLines(rootNode) {
    if (!rootNode) return "";
    const blockNodes = rootNode.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li");
    const lines = [];
    Array.prototype.forEach.call(blockNodes, function (node) {
      const text = normalizeExportText(node.textContent);
      if (!text) return;
      const tag = String(node.tagName || "").toLowerCase();
      if (tag === "li") {
        lines.push(`• ${text}`);
        return;
      }
      if (tag === "h1") {
        lines.push(`# ${text}`);
        return;
      }
      if (tag === "h2") {
        lines.push(`## ${text}`);
        return;
      }
      if (tag === "h3") {
        lines.push(`### ${text}`);
        return;
      }
      lines.push(text);
    });
    return lines.join("\n").trim();
  }

  function buildNotionExportPayload(options) {
    const opts = options && typeof options === "object" ? options : {};
    const sourceRoot = document.querySelector(opts.rootSelector || ".brief-frame");
    if (!sourceRoot) return null;
    const clonedRoot = sourceRoot.cloneNode(true);
    const exclusionSelector = String(
      opts.exclusionSelector ||
        ".executive-audio-row, .footer-actions, .field-behavior-card, .letterhead-wrap, [hidden]"
    );
    if (exclusionSelector) {
      clonedRoot.querySelectorAll(exclusionSelector).forEach(function (node) {
        if (node && node.remove) node.remove();
      });
    }
    clonedRoot.querySelectorAll("button, input, select, textarea, script, style, form").forEach(function (node) {
      if (node && node.remove) node.remove();
    });
    clonedRoot.querySelectorAll("a[href]").forEach(function (link) {
      const rawHref = link.getAttribute("href");
      if (!rawHref) return;
      try {
        const resolvedHref = new URL(rawHref, window.location.href).toString();
        link.setAttribute("href", resolvedHref);
      } catch (_err) {}
    });
    clonedRoot.querySelectorAll("img[src]").forEach(function (image) {
      const rawSrc = image.getAttribute("src");
      if (!rawSrc) return;
      try {
        const resolvedSrc = new URL(rawSrc, window.location.href).toString();
        image.setAttribute("src", resolvedSrc);
      } catch (_err) {}
    });

    const documentTitleNode = document.querySelector(opts.titleSelector || ".exec-header h1");
    const exportTitle = normalizeExportText(
      documentTitleNode ? documentTitleNode.textContent : document.title
    );
    const exportShell = document.createElement("article");
    if (exportTitle) {
      const titleNode = document.createElement("h1");
      titleNode.textContent = exportTitle;
      exportShell.appendChild(titleNode);
    }
    const exportMeta = document.createElement("p");
    exportMeta.innerHTML = `<em>Exported from Unity Energy on ${new Date().toLocaleString("en-US", {
      dateStyle: "long",
      timeStyle: "short"
    })}</em>`;
    exportShell.appendChild(exportMeta);
    Array.prototype.forEach.call(clonedRoot.children, function (child) {
      exportShell.appendChild(child);
    });

    const htmlPayload = exportShell.outerHTML;
    const textPayload = collectPlainTextLines(exportShell);
    return {
      html: htmlPayload,
      text: textPayload
    };
  }

  async function copyRichContentToClipboard(payload) {
    if (!payload || !payload.text) return false;
    const htmlPayload = String(payload.html || "").trim();
    const textPayload = String(payload.text || "").trim();
    try {
      if (
        htmlPayload &&
        navigator.clipboard &&
        typeof navigator.clipboard.write === "function" &&
        typeof window.ClipboardItem === "function"
      ) {
        const item = new window.ClipboardItem({
          "text/html": new Blob([htmlPayload], { type: "text/html" }),
          "text/plain": new Blob([textPayload], { type: "text/plain" })
        });
        await navigator.clipboard.write([item]);
        return true;
      }
    } catch (_err) {}
    return copyToClipboard(textPayload);
  }

  function init(options) {
    const opts = options && typeof options === "object" ? options : {};
    const publicShareOrigin = String(opts.publicShareOrigin || DEFAULT_PUBLIC_SHARE_ORIGIN);
    const descriptionPrefix = String(opts.shareDescriptionPrefix || DEFAULT_DESCRIPTION_PREFIX);
    const shareKindConfig = cloneKindConfig(opts.shareKindConfig);
    const defaultKind = shareKindConfig.website ? "website" : Object.keys(shareKindConfig)[0];
    const pageUrl = new URL(window.location.href);
    const now = new Date();
    const configuredStamp = parseUeStamp(opts.shareStampCode || opts.publishedStampCode);
    const stampFromUrl = parseUeStamp(pageUrl.searchParams.get("ue_doc"));
    const configuredRevision = extractRevisionFromStamp(configuredStamp);
    const stampCode = stampFromUrl || formatUeStamp(now, configuredRevision);
    if (stampFromUrl) {
      seedDailyStampCounterFromStamp(stampFromUrl);
    }
    const stampDate = stampToDate(stampCode) || now;
    const documentStatus = normalizeDocumentStatus(opts.documentStatus || pageUrl.searchParams.get("ue_status"));
    const documentRevision = String(opts.documentRevision || stampCode).trim() || stampCode;
    const currentShareTargetPath = String(opts.currentShareTargetPath || window.location.pathname);
    const publishedShareTargetPath = String(opts.publishedShareTargetPath || currentShareTargetPath);
    const sharingDisabledStatusLabel = String(opts.sharingDisabledStatusLabel || "Sharing Disabled (Review/Test)");
    const kindFromUrlRaw = String(pageUrl.searchParams.get("ue_kind") || "").toLowerCase();
    const kindFromUrl = SHARE_KIND_ALIASES[kindFromUrlRaw] || kindFromUrlRaw;
    const defaultKindKey = shareKindConfig[kindFromUrl] ? kindFromUrl : defaultKind;
    const requestedShareTitle = String(opts.shareTitle || pageUrl.searchParams.get("ue_title") || "").trim();
    const recipientParam = String(opts.recipientParam || "ue_recipient").trim() || "ue_recipient";
    const recipientAllowlistKey = normalizeRecipientKey(
      opts.recipientAllowlistKey || pageUrl.searchParams.get(recipientParam)
    );
    const customerParam = String(opts.customerParam || "ue_customer").trim() || "ue_customer";
    const customerKey = normalizeRecipientKey(
      opts.customerKey || pageUrl.searchParams.get(customerParam)
    );
    const mailSenderParam = String(opts.mailSenderParam || "ue_from").trim() || "ue_from";
    const mailSenderAddress = normalizeRouteAddress(
      opts.mailSenderAddress || pageUrl.searchParams.get(mailSenderParam)
    );
    const mailRecipientParam = String(opts.mailRecipientParam || "ue_to").trim() || "ue_to";
    const mailRecipientAddress = normalizeRouteAddress(
      opts.mailRecipientAddress || pageUrl.searchParams.get(mailRecipientParam)
    );
    let founderShareAccess = !!(
      window.ffExecVaultAccess &&
      typeof window.ffExecVaultAccess.canShareSecureLinks === "function" &&
      window.ffExecVaultAccess.canShareSecureLinks()
    );
    let copyBtnCooldown = false;

    const reviewDateEl = document.getElementById(opts.reviewDateElementId || "reviewDate");
    const ogTitle = document.getElementById(opts.ogTitleId || "ogTitle");
    const ogDescription = document.getElementById(opts.ogDescriptionId || "ogDescription");
    const ogUrl = document.getElementById(opts.ogUrlId || "ogUrl");
    const ogImage = document.getElementById(opts.ogImageId || "ogImage");
    const twitterTitle = document.getElementById(opts.twitterTitleId || "twitterTitle");
    const twitterDescription = document.getElementById(opts.twitterDescriptionId || "twitterDescription");
    const twitterUrl = document.getElementById(opts.twitterUrlId || "twitterUrl");
    const twitterImage = document.getElementById(opts.twitterImageId || "twitterImage");
    const shareTypeWrap = document.querySelector(opts.shareTypeWrapSelector || ".footer-actions .share-type-wrap");
    const shareTypeSelect = document.getElementById(opts.shareTypeSelectId || "shareTypeSelect");
    const copyBtn = document.getElementById(opts.copyButtonId || "copySecureLinkBtn");
    const pdfBtn = document.getElementById(opts.pdfButtonId || "downloadPdfBtn");
    const notionBtn = document.getElementById(opts.notionButtonId || "openInNotionBtn");
    const notionBtnDefaultLabel = String(
      opts.notionButtonLabel || (notionBtn ? notionBtn.textContent : "Open in Notion")
    ).trim() || "Open in Notion";
    const notionWorkspaceUrl = String(
      opts.notionWorkspaceUrl || (notionBtn ? notionBtn.getAttribute("href") : "") || "https://www.notion.so/new"
    );
    const sharedLinkNotice = document.getElementById(opts.sharedLinkNoticeId || "sharedLinkNotice");
    const founderRequiredActions = Array.from(
      document.querySelectorAll(opts.founderRequiredActionSelector || "[data-founder-access='required']")
    );
    const copyBtnDefaultLabel = opts.copyButtonLabel || "Copy Secure Link";
    const SHARE_TYPE_LOCKED_CLASS = "is-locked-view";
    let notionBtnCooldown = false;
    function isPublishedDocument() {
      return documentStatus === DOCUMENT_STATUS.PUBLISHED;
    }

    function resolveShareTargetPath() {
      return isPublishedDocument() ? publishedShareTargetPath : currentShareTargetPath;
    }

    function appendDocumentShareParams(urlObj) {
      if (!urlObj || !(urlObj instanceof URL)) return;
      const targetPath = resolveShareTargetPath();
      urlObj.searchParams.set("ue_status", documentStatus);
      urlObj.searchParams.set("ue_rev", documentRevision);
      urlObj.searchParams.set("ue_target", targetPath);
      if (recipientAllowlistKey) {
        urlObj.searchParams.set(recipientParam, recipientAllowlistKey);
      }
      if (customerKey) {
        urlObj.searchParams.set(customerParam, customerKey);
      }
      if (mailSenderAddress) {
        urlObj.searchParams.set(mailSenderParam, mailSenderAddress);
      }
      if (mailRecipientAddress) {
        urlObj.searchParams.set(mailRecipientParam, mailRecipientAddress);
      }
    }

    const fixedReviewDate = String(opts.fixedReviewDate || "").trim();
    if (reviewDateEl) {
      if (fixedReviewDate) {
        reviewDateEl.textContent = fixedReviewDate;
      } else {
        reviewDateEl.textContent = stampDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });
      }
    }

    if (shareTypeSelect) {
      shareTypeSelect.value = defaultKindKey;
    }

    function syncShareTypeVisualState(kindKey) {
      if (!shareTypeWrap) return;
      const cfg = shareKindConfig[kindKey];
      const theme = cfg && cfg.theme ? cfg.theme : (cfg && cfg.isAlert ? "alert" : "default");
      shareTypeWrap.classList.toggle("is-alert", theme === "alert");
      shareTypeWrap.classList.toggle("is-monthly", theme === "monthly");
      shareTypeWrap.classList.toggle("is-maxwellian", theme === "maxwellian");
    }

    function requestFounderAccessPrompt() {
      if (
        window.ffExecVaultAccess &&
        typeof window.ffExecVaultAccess.requestFounderAccessPrompt === "function"
      ) {
        window.ffExecVaultAccess.requestFounderAccessPrompt({
          overlayId: opts.gateOverlayId || "briefGateOverlay"
        });
      }
    }

    function setFounderRequiredActionsVisible(isVisible) {
      founderRequiredActions.forEach(function (node) {
        if (!node) return;
        node.hidden = !isVisible;
        node.setAttribute("aria-hidden", isVisible ? "false" : "true");
      });
    }

    function setShareControlsLocked(isLocked) {
      const lockedByStatus = !isPublishedDocument();
      const lockTitle = lockedByStatus
        ? "Sharing is disabled while this document is in Review/Test status."
        : "Double-click to add your Unity Access ID and unlock sharing.";
      if (shareTypeWrap) {
        shareTypeWrap.classList.toggle("is-disabled", isLocked);
        shareTypeWrap.classList.toggle(SHARE_TYPE_LOCKED_CLASS, isLocked);
        shareTypeWrap.setAttribute("aria-disabled", isLocked ? "true" : "false");
        if (isLocked) {
          shareTypeWrap.title = lockTitle;
        } else {
          shareTypeWrap.removeAttribute("title");
        }
      }
      if (shareTypeSelect) {
        shareTypeSelect.disabled = isLocked;
        shareTypeSelect.classList.toggle("is-disabled", isLocked);
        shareTypeSelect.setAttribute("aria-disabled", isLocked ? "true" : "false");
        if (isLocked) {
          shareTypeSelect.title = lockTitle;
        } else {
          shareTypeSelect.removeAttribute("title");
        }
      }

      if (copyBtn) {
        const shouldAppearDisabled = isLocked || copyBtnCooldown;
        copyBtn.disabled = false;
        copyBtn.classList.toggle("is-disabled", shouldAppearDisabled);
        copyBtn.setAttribute("aria-disabled", shouldAppearDisabled ? "true" : "false");
        if (lockedByStatus) {
          copyBtn.textContent = sharingDisabledStatusLabel;
        } else {
          copyBtn.textContent = isLocked ? "Link Sharing Disabled" : copyBtnDefaultLabel;
        }
        if (isLocked) {
          copyBtn.title = lockTitle;
        } else {
          copyBtn.removeAttribute("title");
        }
      }

      if (sharedLinkNotice) {
        sharedLinkNotice.hidden = !isLocked;
      }
    }

    function getSelectedKindKey() {
      if (!shareTypeSelect) return defaultKindKey;
      const raw = String(shareTypeSelect.value || "").toLowerCase();
      const normalized = SHARE_KIND_ALIASES[raw] || raw;
      return shareKindConfig[normalized] ? normalized : defaultKindKey;
    }

    function setNotionButtonState(options) {
      if (!notionBtn) return;
      const state = options && typeof options === "object" ? options : {};
      const label = String(state.label || notionBtnDefaultLabel).trim() || notionBtnDefaultLabel;
      const isBusy = !!state.isBusy;
      notionBtn.textContent = label;
      notionBtn.classList.toggle("is-disabled", isBusy);
      notionBtn.setAttribute("aria-disabled", isBusy ? "true" : "false");
      if (isBusy) {
        notionBtn.setAttribute("tabindex", "-1");
      } else {
        notionBtn.removeAttribute("tabindex");
      }
    }

    function getEffectiveShareTitle(config) {
      const configuredTitle = String((config && config.title) || "").trim();
      return requestedShareTitle || configuredTitle;
    }

    function applyShareMetadata(kindKey) {
      const config = shareKindConfig[kindKey] || shareKindConfig[defaultKindKey];
      if (!config) return;
      const stampedTitle = getEffectiveShareTitle(config);
      const stampedDescription = `${descriptionPrefix} · ${stampCode}`;
      const stampedImage = `${publicShareOrigin}${config.imagePath}?ue_doc=${encodeURIComponent(stampCode)}`;
      const stampedUrl = new URL(config.path, publicShareOrigin);
      stampedUrl.searchParams.set("ue_doc", stampCode);
      stampedUrl.searchParams.set("ue_kind", config.key);
      stampedUrl.searchParams.set("ue_share", String(Date.now()));
      if (stampedTitle) {
        stampedUrl.searchParams.set("ue_title", stampedTitle);
      }
      appendDocumentShareParams(stampedUrl);

      if (ogTitle) ogTitle.setAttribute("content", stampedTitle);
      if (ogDescription) ogDescription.setAttribute("content", stampedDescription);
      if (ogUrl) ogUrl.setAttribute("content", stampedUrl.toString());
      if (ogImage) ogImage.setAttribute("content", stampedImage);
      if (twitterTitle) twitterTitle.setAttribute("content", stampedTitle);
      if (twitterDescription) twitterDescription.setAttribute("content", stampedDescription);
      if (twitterUrl) twitterUrl.setAttribute("content", stampedUrl.toString());
      if (twitterImage) twitterImage.setAttribute("content", stampedImage);
    }

    applyShareMetadata(defaultKindKey);
    syncShareTypeVisualState(defaultKindKey);
    setFounderRequiredActionsVisible(founderShareAccess);
    setShareControlsLocked(!founderShareAccess || !isPublishedDocument());

    if (shareTypeSelect) {
      shareTypeSelect.addEventListener("mousedown", function (event) {
        if (founderShareAccess) return;
        event.preventDefault();
      });
      shareTypeSelect.addEventListener("change", function () {
        if (!founderShareAccess || !isPublishedDocument()) return;
        const selectedKindKey = getSelectedKindKey();
        applyShareMetadata(selectedKindKey);
        syncShareTypeVisualState(selectedKindKey);
      });
    }

    if (shareTypeWrap) {
      shareTypeWrap.addEventListener("dblclick", function (event) {
        if (founderShareAccess || !isPublishedDocument()) return;
        event.preventDefault();
        requestFounderAccessPrompt();
      });
    }

    window.addEventListener("ffExecVaultAccessChange", function (event) {
      const detail = event && event.detail ? event.detail : null;
      founderShareAccess = !!(detail && detail.canShareSecureLinks === true);
      setFounderRequiredActionsVisible(founderShareAccess);
      setShareControlsLocked(!founderShareAccess || !isPublishedDocument());
    });

    if (pdfBtn) {
      pdfBtn.addEventListener("click", function () {
        window.print();
      });
    }

    if (notionBtn) {
      setNotionButtonState();
      notionBtn.addEventListener("click", async function (event) {
        if (event) {
          event.preventDefault();
        }
        if (!founderShareAccess) {
          if (event && event.detail >= 2) {
            requestFounderAccessPrompt();
          }
          return;
        }
        if (notionBtnCooldown) return;
        notionBtnCooldown = true;
        setNotionButtonState({
          label: "Preparing Notion export…",
          isBusy: true
        });

        const payload = buildNotionExportPayload({
          rootSelector: opts.notionExportRootSelector,
          titleSelector: opts.notionExportTitleSelector,
          exclusionSelector: opts.notionExportExcludeSelector
        });
        if (!payload || !payload.text) {
          setNotionButtonState({
            label: "Export unavailable",
            isBusy: true
          });
          window.setTimeout(function () {
            notionBtnCooldown = false;
            setNotionButtonState();
          }, 1800);
          return;
        }

        try {
          window.open(notionWorkspaceUrl, "_blank", "noopener,noreferrer");
        } catch (_err) {}

        const copied = await Promise.race([
          copyRichContentToClipboard(payload),
          new Promise(function (resolve) {
            window.setTimeout(function () {
              resolve(false);
            }, 1500);
          })
        ]);
        setNotionButtonState({
          label: copied ? "Ready for Notion Paste" : "Opened Notion",
          isBusy: true
        });
        window.setTimeout(function () {
          notionBtnCooldown = false;
          setNotionButtonState();
        }, 2200);
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", async function (event) {
        if (!isPublishedDocument()) {
          if (copyBtnCooldown) return;
          copyBtnCooldown = true;
          copyBtn.classList.add("is-disabled");
          copyBtn.setAttribute("aria-disabled", "true");
          copyBtn.textContent = sharingDisabledStatusLabel;
          window.setTimeout(function () {
            copyBtnCooldown = false;
            setShareControlsLocked(!founderShareAccess || !isPublishedDocument());
          }, 1300);
          return;
        }
        if (!founderShareAccess) {
          if (event && event.detail >= 2) {
            requestFounderAccessPrompt();
          }
          return;
        }
        if (copyBtnCooldown) return;
        const kindKey = getSelectedKindKey();
        const kindConfig = shareKindConfig[kindKey] || shareKindConfig[defaultKindKey];
        if (!kindConfig) return;
        const host = String(window.location.hostname || "").toLowerCase();
        const isLocalHost = host === "localhost" || host === "127.0.0.1" || host === "::1";
        const shareOrigin = isLocalHost ? publicShareOrigin : window.location.origin;
        const issuedStampCode = allocateNextDailyStampCode(new Date(), configuredRevision);
        const shareUrl = new URL(kindConfig.path, shareOrigin);
        shareUrl.searchParams.set("ue_doc", issuedStampCode);
        shareUrl.searchParams.set("ue_kind", kindConfig.key);
        shareUrl.searchParams.set("ue_share", String(Date.now()));
        const effectiveShareTitle = getEffectiveShareTitle(kindConfig);
        if (effectiveShareTitle) {
          shareUrl.searchParams.set("ue_title", effectiveShareTitle);
        }
        appendDocumentShareParams(shareUrl);
        const ok = await copyToClipboard(shareUrl.toString());
        copyBtnCooldown = true;
        copyBtn.classList.add("is-disabled");
        copyBtn.setAttribute("aria-disabled", "true");
        copyBtn.textContent = ok
          ? `${kindConfig.label} link copied · ${issuedStampCode}${effectiveShareTitle ? ` · ${effectiveShareTitle}` : ""}`
          : "Copy failed";
        window.setTimeout(function () {
          copyBtnCooldown = false;
          if (founderShareAccess) {
            copyBtn.textContent = copyBtnDefaultLabel;
            copyBtn.classList.remove("is-disabled");
            copyBtn.setAttribute("aria-disabled", "false");
            copyBtn.removeAttribute("title");
          } else {
            setShareControlsLocked(true);
          }
        }, 1500);
      });
    }

    return {
      stampCode,
      stampDate,
      defaultKindKey,
      shareKindConfig,
      documentStatus,
      documentRevision
    };
  }

  window.ffExecShareControls = {
    init,
    DEFAULT_SHARE_KIND_CONFIG,
    parseUeStamp,
    formatUeStamp,
    stampToDate
  };
})();
