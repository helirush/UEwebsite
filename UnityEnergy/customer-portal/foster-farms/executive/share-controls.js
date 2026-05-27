(function () {
  const DEFAULT_PUBLIC_SHARE_ORIGIN = "https://unityenergy.com";
  const DEFAULT_DESCRIPTION_PREFIX = "Foster Farms · Electrical Visibility & Intelligence Progress Report";
  const DEFAULT_SHARE_KIND_CONFIG = Object.freeze({
    update: {
      key: "update",
      label: "Update",
      title: "Unity Energy Update",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/update.html",
      imagePath: "/UnityEnergy/customer-portal/foster-farms/executive/ue-update-logo-preview.jpg",
      theme: "default"
    },
    brief: {
      key: "brief",
      label: "Brief",
      title: "Unity Energy Brief",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/brief.html",
      imagePath: "/UnityEnergy/customer-portal/foster-farms/executive/ue-brief-logo-preview.jpg",
      theme: "default"
    },
    memo: {
      key: "memo",
      label: "Memo",
      title: "Unity Energy Memo",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/memo.html",
      imagePath: "/UnityEnergy/customer-portal/foster-farms/executive/ue-memo-logo-preview.jpg",
      theme: "default"
    },
    report: {
      key: "report",
      label: "Report",
      title: "Unity Energy Report",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/report.html",
      imagePath: "/UnityEnergy/customer-portal/foster-farms/executive/ue-report-logo-preview.jpg",
      theme: "default"
    },
    monthly: {
      key: "monthly",
      label: "Monthly",
      title: "Unity Energy Monthly",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/monthly.html",
      imagePath: "/UnityEnergy/customer-portal/foster-farms/executive/ue-monthly-logo-preview.jpg",
      theme: "monthly"
    },
    maxwellian: {
      key: "maxwellian",
      label: "Maxwellians",
      title: "Unity Energy Maxwellians",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/maxwellian.html",
      imagePath: "/UnityEnergy/customer-portal/foster-farms/executive/ue-maxwellian-logo-preview.jpg",
      theme: "maxwellian"
    },
    private: {
      key: "private",
      label: "Private",
      title: "Unity Energy Private",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/private.html",
      imagePath: "/UnityEnergy/customer-portal/foster-farms/executive/ue-private-logo-preview.jpg",
      theme: "default"
    },
    alert: {
      key: "alert",
      label: "Alert",
      title: "Unity Energy Alert",
      path: "/UnityEnergy/customer-portal/foster-farms/executive/share/alert.html",
      imagePath: "/UnityEnergy/customer-portal/foster-farms/executive/ue-alert-logo-preview.jpg",
      isAlert: true,
      theme: "alert"
    }
  });

  function pad2(value) {
    return String(value).padStart(2, "0");
  }

  function formatUeStamp(dateObj) {
    const yy = String(dateObj.getFullYear()).slice(-2);
    const mm = pad2(dateObj.getMonth() + 1);
    const dd = pad2(dateObj.getDate());
    return `UE.${yy}.${mm}${dd}`;
  }

  function parseUeStamp(rawValue) {
    const value = String(rawValue || "").trim().toUpperCase();
    if (!/^UE\.\d{2}\.\d{4}$/.test(value)) return null;
    return value;
  }

  function stampToDate(stampCode) {
    const match = /^UE\.(\d{2})\.(\d{2})(\d{2})$/.exec(stampCode || "");
    if (!match) return null;
    const year = Number(`20${match[1]}`);
    const month = Number(match[2]);
    const day = Number(match[3]);
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

  function init(options) {
    const opts = options && typeof options === "object" ? options : {};
    const publicShareOrigin = String(opts.publicShareOrigin || DEFAULT_PUBLIC_SHARE_ORIGIN);
    const descriptionPrefix = String(opts.shareDescriptionPrefix || DEFAULT_DESCRIPTION_PREFIX);
    const shareKindConfig = cloneKindConfig(opts.shareKindConfig);
    const defaultKind = shareKindConfig.update ? "update" : Object.keys(shareKindConfig)[0];
    const pageUrl = new URL(window.location.href);
    const now = new Date();
    const stampFromUrl = parseUeStamp(pageUrl.searchParams.get("ue_doc"));
    const stampCode = stampFromUrl || formatUeStamp(now);
    const stampDate = stampToDate(stampCode) || now;
    const kindFromUrl = String(pageUrl.searchParams.get("ue_kind") || "").toLowerCase();
    const defaultKindKey = shareKindConfig[kindFromUrl] ? kindFromUrl : defaultKind;
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
    const sharedLinkNotice = document.getElementById(opts.sharedLinkNoticeId || "sharedLinkNotice");
    const copyBtnDefaultLabel = opts.copyButtonLabel || "Copy Secure Link";

    if (reviewDateEl) {
      reviewDateEl.textContent = stampDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
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

    function setShareControlsLocked(isLocked) {
      if (shareTypeWrap) {
        shareTypeWrap.classList.toggle("is-disabled", isLocked);
        if (isLocked) {
          shareTypeWrap.title = "Double-click to add your Unity Access ID and unlock sharing.";
        } else {
          shareTypeWrap.removeAttribute("title");
        }
      }
      if (shareTypeSelect) {
        shareTypeSelect.disabled = isLocked;
        shareTypeSelect.classList.toggle("is-disabled", isLocked);
        shareTypeSelect.setAttribute("aria-disabled", isLocked ? "true" : "false");
        if (isLocked) {
          shareTypeSelect.title = "Double-click to add your Unity Access ID and unlock sharing.";
        } else {
          shareTypeSelect.removeAttribute("title");
        }
      }

      if (copyBtn) {
        const shouldAppearDisabled = isLocked || copyBtnCooldown;
        copyBtn.disabled = false;
        copyBtn.classList.toggle("is-disabled", shouldAppearDisabled);
        copyBtn.setAttribute("aria-disabled", shouldAppearDisabled ? "true" : "false");
        copyBtn.textContent = isLocked ? "Link Sharing Disabled" : copyBtnDefaultLabel;
        if (isLocked) {
          copyBtn.title = "Double-click to add your Unity Access ID and unlock sharing.";
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
      return shareKindConfig[raw] ? raw : defaultKindKey;
    }

    function applyShareMetadata(kindKey) {
      const config = shareKindConfig[kindKey] || shareKindConfig[defaultKindKey];
      if (!config) return;
      const stampedTitle = config.title;
      const stampedDescription = `${descriptionPrefix} · ${stampCode}`;
      const stampedImage = `${publicShareOrigin}${config.imagePath}?ue_doc=${encodeURIComponent(stampCode)}`;
      const stampedUrl = new URL(config.path, publicShareOrigin);
      stampedUrl.searchParams.set("ue_doc", stampCode);
      stampedUrl.searchParams.set("ue_kind", config.key);
      stampedUrl.searchParams.set("ue_share", String(Date.now()));

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
    setShareControlsLocked(!founderShareAccess);

    if (shareTypeSelect) {
      shareTypeSelect.addEventListener("mousedown", function (event) {
        if (founderShareAccess) return;
        event.preventDefault();
      });
      shareTypeSelect.addEventListener("change", function () {
        if (!founderShareAccess) return;
        const selectedKindKey = getSelectedKindKey();
        applyShareMetadata(selectedKindKey);
        syncShareTypeVisualState(selectedKindKey);
      });
    }

    if (shareTypeWrap) {
      shareTypeWrap.addEventListener("dblclick", function (event) {
        if (founderShareAccess) return;
        event.preventDefault();
        requestFounderAccessPrompt();
      });
    }

    window.addEventListener("ffExecVaultAccessChange", function (event) {
      const detail = event && event.detail ? event.detail : null;
      founderShareAccess = !!(detail && detail.canShareSecureLinks === true);
      setShareControlsLocked(!founderShareAccess);
    });

    if (pdfBtn) {
      pdfBtn.addEventListener("click", function () {
        window.print();
      });
    }

    if (copyBtn) {
      copyBtn.addEventListener("click", async function (event) {
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
        const shareUrl = new URL(kindConfig.path, shareOrigin);
        shareUrl.searchParams.set("ue_doc", stampCode);
        shareUrl.searchParams.set("ue_kind", kindConfig.key);
        shareUrl.searchParams.set("ue_share", String(Date.now()));
        const ok = await copyToClipboard(shareUrl.toString());
        copyBtnCooldown = true;
        copyBtn.classList.add("is-disabled");
        copyBtn.setAttribute("aria-disabled", "true");
        copyBtn.textContent = ok ? `${kindConfig.label} link copied · ${stampCode}` : "Copy failed";
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
      shareKindConfig
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
