/**
 * Unity Energy — universal viewport fit
 * Locks the landing composition to a MacBook Pro reference stage (1512×982)
 * and scales it uniformly to any monitor. Same proportions everywhere;
 * no width-only hero growth, no bottom chop, no CTA drift.
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
    // Prefer the green site footer if present
    var footer = document.querySelector('footer') || document.querySelector('.site-footer');

    if (!banner || !hero) return null;

    var shell = document.createElement('div');
    shell.className = 'ue-viewport-shell';
    shell.id = 'ueViewportShell';

    var stage = document.createElement('div');
    stage.className = 'ue-design-stage';
    stage.id = 'ueDesignStage';
    stage.setAttribute('data-ue-design-w', String(DESIGN_W));
    stage.setAttribute('data-ue-design-h', String(DESIGN_H));

    // Insert shell where banner currently is
    banner.parentNode.insertBefore(shell, banner);
    shell.appendChild(stage);

    // Move landing pieces into the stage (modals stay outside — fixed overlays)
    stage.appendChild(banner);
    stage.appendChild(hero);
    if (cta) stage.appendChild(cta);
    if (access) stage.appendChild(access);
    if (nav) stage.appendChild(nav);
    if (footer) {
      footer.classList.add('ue-stage-footer');
      stage.appendChild(footer);
    }

    return { shell: shell, stage: stage };
  }

  function fit() {
    var parts = ensureStage();
    if (!parts || !parts.shell || !parts.stage) return;

    var shell = parts.shell;
    var stage = parts.stage;

    var sw = shell.clientWidth || window.innerWidth;
    var sh = shell.clientHeight || window.innerHeight;
    if (sw < 2 || sh < 2) return;

    // Uniform scale to FIT (never crop). Same composition on every display.
    var scale = Math.min(sw / DESIGN_W, sh / DESIGN_H);

    stage.style.width = DESIGN_W + 'px';
    stage.style.height = DESIGN_H + 'px';
    stage.style.transform = 'scale(' + scale + ')';

    document.documentElement.style.setProperty('--ue-fit-scale', String(scale));
    document.documentElement.style.setProperty('--ue-design-w', DESIGN_W + 'px');
    document.documentElement.style.setProperty('--ue-design-h', DESIGN_H + 'px');
    document.documentElement.classList.add('ue-fit-ready');
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
