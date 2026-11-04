/**
 * USSI Partner Deck — Listen to Unity overlay control
 * Ready for per-page ~90s MP3s once Cove supplies narration.
 * MP3 path: button[data-audio] (relative to the HTML page).
 */
(function () {
  'use strict';

  function $(sel, root) { return (root || document).querySelector(sel); }

  function setState(btn, audio, mode, detail) {
    var state = btn.querySelector('.ussi-listen-state');
    btn.classList.toggle('is-playing', mode === 'playing');
    btn.classList.toggle('is-ready', mode === 'ready');
    btn.classList.toggle('is-missing', mode === 'missing');
    btn.setAttribute('aria-pressed', mode === 'playing' ? 'true' : 'false');
    if (!state) return;
    if (mode === 'playing') state.textContent = detail || 'Playing';
    else if (mode === 'missing') state.textContent = detail || 'Audio pending';
    else if (mode === 'ready') state.textContent = '';
    else state.textContent = detail || '';
  }

  function init() {
    var btn = $('#ussiListenBtn');
    var audio = $('#ussiListenAudio');
    if (!btn || !audio) return;

    var src = btn.getAttribute('data-audio') || '';
    var page = btn.getAttribute('data-page') || '';
    audio.preload = 'metadata';

    function bindSource() {
      if (!src) {
        setState(btn, audio, 'missing', 'Audio pending');
        return Promise.resolve(false);
      }
      if (audio.getAttribute('src') !== src) {
        audio.src = src;
      }
      return new Promise(function (resolve) {
        var settled = false;
        function done(ok) {
          if (settled) return;
          settled = true;
          resolve(ok);
        }
        audio.addEventListener('loadedmetadata', function () { done(true); }, { once: true });
        audio.addEventListener('canplay', function () { done(true); }, { once: true });
        audio.addEventListener('error', function () { done(false); }, { once: true });
        try { audio.load(); } catch (_e) { done(false); }
        // timeout — treat as missing if file not present yet
        setTimeout(function () {
          if (!settled) {
            // If readyState advanced, ok; else missing
            done(audio.readyState >= 1 && !audio.error);
          }
        }, 900);
      });
    }

    bindSource().then(function (ok) {
      if (ok) setState(btn, audio, 'ready');
      else setState(btn, audio, 'missing', 'Audio pending · ~90s');
    });

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!src) {
        setState(btn, audio, 'missing', 'Audio pending · Cove text');
        return;
      }
      if (audio.error || audio.readyState === 0) {
        // retry load
        bindSource().then(function (ok) {
          if (!ok) {
            setState(btn, audio, 'missing', 'Audio pending · drop MP3');
            return;
          }
          toggle();
        });
        return;
      }
      toggle();
    });

    function toggle() {
      if (audio.paused) {
        var p = audio.play();
        setState(btn, audio, 'playing', 'Playing · page ' + page);
        if (p && typeof p.catch === 'function') {
          p.catch(function () {
            setState(btn, audio, 'missing', 'Audio pending · drop MP3');
          });
        }
      } else {
        audio.pause();
        setState(btn, audio, 'ready');
      }
    }

    audio.addEventListener('ended', function () {
      setState(btn, audio, 'ready');
    });
    audio.addEventListener('pause', function () {
      if (!audio.ended) setState(btn, audio, audio.currentTime > 0.05 ? 'ready' : 'ready');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
