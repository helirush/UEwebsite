/**
 * Unity Energy — universal viewport fit
 * ONE 1512×982 stage, uniform scale → header/body/footer same width as Home Hero.
 *
 * Home:    banner + hero + CTAs + access + nav + footer
 * Contact: nav + contact board + footer  (all inside stage)
 * Speak:   .cp-clerk-page one-pager (no footer) inside stage
 */
(function () {
  var DESIGN_W = 1512;
  var DESIGN_H = 982;
  var scheduled = null;

  function ensureStage() {
    if (document.getElementById('ueDesignStage')) {
      return {
        shell: document.querySelector('.ue-viewport-shell'),
        stage: document.getElementById('ueDesignStage')
      };
    }

    var banner = document.querySelector('.banner-wrapper');
    var hero = document.querySelector('.hero.hero-raster-rebuild');
    var cta = document.querySelector('.hero-bottom-cta-strip');
    var access = document.querySelector('.site-access-banner');
    var nav = document.querySelector('.nav-tabs-container');
    var contactShell = document.querySelector('.ue-contact-shell');
    var contactStage = document.querySelector('.ue-contact-stage');
    var speakPage = document.querySelector('body.cp-clerk-onepage .cp-clerk-page');
    var speakWrap = document.querySelector('body.cp-clerk-onepage .site-wrap');
    var footer = document.querySelector('footer') || document.querySelector('.site-footer');

    var isHome = !!(banner && hero);
    var isContact = !!(contactShell || contactStage);
    var isSpeak = !!(speakPage && document.body.classList.contains('cp-clerk-onepage'));
    if (!isHome && !isContact && !isSpeak) return null;

    var anchor = isHome
      ? banner
      : (isSpeak ? (speakWrap || speakPage) : (nav || contactShell || contactStage));
    if (!anchor || !anchor.parentNode) return null;

    var shell = document.createElement('div');
    shell.className = 'ue-viewport-shell';
    shell.id = 'ueViewportShell';

    var stage = document.createElement('div');
    stage.className = 'ue-design-stage' +
      (isContact ? ' ue-design-stage--contact' : '') +
      (isSpeak ? ' ue-design-stage--speak' : '');
    stage.id = 'ueDesignStage';
    stage.setAttribute('data-ue-design-w', String(DESIGN_W));
    stage.setAttribute('data-ue-design-h', String(DESIGN_H));

    anchor.parentNode.insertBefore(shell, anchor);
    shell.appendChild(stage);

    if (isHome) {
      stage.appendChild(banner);
      stage.appendChild(hero);
      if (cta) stage.appendChild(cta);
      if (access) stage.appendChild(access);
      if (nav) stage.appendChild(nav);
      if (footer) {
        footer.classList.add('ue-stage-footer');
        stage.appendChild(footer);
      }
    } else if (isSpeak) {
      // Speak-with-Clerk: one fixed Hero-width stage, no footer
      stage.appendChild(speakPage);
      if (speakWrap && speakWrap.parentNode && !speakWrap.childNodes.length) {
        // leave empty wrap out of flow; shell owns layout
        speakWrap.style.display = 'none';
      }
      if (footer) {
        footer.classList.add('ue-stage-footer');
        footer.style.display = 'none';
      }
    } else {
      // Contact: header + body + footer share ONE Hero width
      if (nav) stage.appendChild(nav);
      if (contactShell) stage.appendChild(contactShell);
      else if (contactStage) stage.appendChild(contactStage);
      if (footer) {
        footer.classList.add('ue-stage-footer');
        stage.appendChild(footer);
      }
    }

    return { shell: shell, stage: stage };
  }

  function fit() {
    var parts = ensureStage();
    if (!parts || !parts.shell || !parts.stage) return;

    var shell = parts.shell;
    var stage = parts.stage;

    // Always full-viewport letterbox shell (Home behavior)
    shell.style.cssText = '';
    shell.className = 'ue-viewport-shell';

    var sw = shell.clientWidth || window.innerWidth;
    var sh = shell.clientHeight || window.innerHeight;
    if (sw < 2 || sh < 2) return;

    var scale = Math.min(sw / DESIGN_W, sh / DESIGN_H);
    stage.style.width = DESIGN_W + 'px';
    stage.style.height = DESIGN_H + 'px';
    stage.style.transform = 'scale(' + scale + ')';

    document.documentElement.style.setProperty('--ue-fit-scale', String(scale));
    document.documentElement.style.setProperty('--ue-design-w', DESIGN_W + 'px');
    document.documentElement.style.setProperty('--ue-design-h', DESIGN_H + 'px');
    document.documentElement.classList.add('ue-fit-ready');
    document.documentElement.classList.remove('ue-fit-contact');
    if (document.body.classList.contains('cp-clerk-onepage')) {
      document.documentElement.classList.add('ue-fit-speak');
    }
  }

  function schedule() {
    if (scheduled) cancelAnimationFrame(scheduled);
    scheduled = requestAnimationFrame(function () {
      scheduled = null;
      fit();
    });
  }

  function bind() {
    schedule();
    window.addEventListener('resize', schedule);
    window.addEventListener('orientationchange', schedule);
    if (typeof ResizeObserver !== 'undefined') {
      var shell = document.getElementById('ueViewportShell');
      if (shell) new ResizeObserver(schedule).observe(shell);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();
