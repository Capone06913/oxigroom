(function () {
  var nav = document.querySelector('#site-nav');
  var toggle = document.querySelector('.menu-toggle');
  var drops = Array.prototype.slice.call(document.querySelectorAll('.drop'));
  var cookieBar = document.querySelector('#cookie');
  var cookieBtn = document.querySelector('#cookie-ok');
  var CLOSE_DELAY = 240;

  function isDesktop() {
    return window.matchMedia('(min-width: 1101px)').matches;
  }

  function clearDropTimer(drop) {
    if (drop._closeTimer) {
      window.clearTimeout(drop._closeTimer);
      drop._closeTimer = null;
    }
  }

  function setDrop(drop, open) {
    var button = drop.querySelector('.drop-btn');
    var panel = drop.querySelector('.drop-panel');
    clearDropTimer(drop);
    drop.classList.toggle('is-open', open);
    if (button) button.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (panel) panel.hidden = !open;
    if (open) {
      drop._openedAt = Date.now();
    }
  }

  function closeDrops(except) {
    drops.forEach(function (drop) {
      if (drop === except) return;
      setDrop(drop, false);
    });
  }

  function scheduleClose(drop) {
    clearDropTimer(drop);
    drop._closeTimer = window.setTimeout(function () {
      drop._closeTimer = null;
      if (drop.matches(':hover')) return;
      if (drop.contains(document.activeElement) && !isDesktop()) return;
      setDrop(drop, false);
    }, CLOSE_DELAY);
  }

  drops.forEach(function (drop) {
    var button = drop.querySelector('.drop-btn');
    var panel = drop.querySelector('.drop-panel');
    if (!button) return;

    button.addEventListener('click', function (event) {
      event.preventDefault();
      var isOpen = drop.classList.contains('is-open');
      if (isOpen && isDesktop() && drop._openedAt && Date.now() - drop._openedAt < 400) {
        clearDropTimer(drop);
        return;
      }
      closeDrops(drop);
      setDrop(drop, !isOpen);
    });

    drop.addEventListener('mouseenter', function () {
      if (!isDesktop()) return;
      clearDropTimer(drop);
      if (!drop.classList.contains('is-open')) {
        closeDrops(drop);
        setDrop(drop, true);
      }
    });

    drop.addEventListener('mouseleave', function () {
      if (!isDesktop()) return;
      scheduleClose(drop);
    });

    if (panel) {
      panel.addEventListener('mouseenter', function () {
        if (!isDesktop()) return;
        clearDropTimer(drop);
      });

      panel.addEventListener('mouseleave', function () {
        if (!isDesktop()) return;
        scheduleClose(drop);
      });
    }

    drop.addEventListener('focusout', function (event) {
      if (drop.contains(event.relatedTarget)) return;
      window.setTimeout(function () {
        if (drop.contains(document.activeElement)) return;
        if (isDesktop() && drop.matches(':hover')) return;
        setDrop(drop, false);
      }, 120);
    });
  });

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.drop')) {
      closeDrops();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key !== 'Escape') return;
    closeDrops();
    if (nav && nav.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      if (toggle) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.focus();
      }
    }
  });

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  var heroVideos = Array.prototype.slice.call(document.querySelectorAll('.hero-video'));
  if (heroVideos.length && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    heroVideos.forEach(function (video) {
      video.removeAttribute('autoplay');
      try {
        video.pause();
      } catch (e) {}
    });
  }

  if (cookieBar && cookieBtn) {
    try {
      if (window.localStorage.getItem('oxigroom_cookie_ok') === '1') {
        cookieBar.hidden = true;
      }
    } catch (e) {}

    cookieBtn.addEventListener('click', function () {
      cookieBar.hidden = true;
      try {
        window.localStorage.setItem('oxigroom_cookie_ok', '1');
      } catch (e) {}
    });
  }

  var fan = document.querySelector('[data-fan]');
  if (fan) {
    var cards = Array.prototype.slice.call(fan.querySelectorAll('.fan-card'));
    var countEl = fan.querySelector('[data-fan-count]');
    var dialog = document.getElementById('review-dialog');
    var active = 0;

    function wrapIndex(index) {
      var n = cards.length;
      return ((index % n) + n) % n;
    }

    function offsetOf(index) {
      var n = cards.length;
      var d = index - active;
      if (d > n / 2) d -= n;
      if (d < -n / 2) d += n;
      return d;
    }

    function layout() {
      cards.forEach(function (card, index) {
        var d = offsetOf(index);
        var visible = Math.abs(d) <= 3;
        card.classList.toggle('is-front', d === 0);
        card.classList.toggle('is-hidden', !visible);
        card.setAttribute('aria-hidden', visible ? 'false' : 'true');
        card.style.setProperty('--x', (d * 118) + 'px');
        card.style.setProperty('--rot', (d * 8) + 'deg');
        card.style.setProperty('--s', d === 0 ? '1' : String(0.94 - Math.abs(d) * 0.04));
        card.style.setProperty('--z', String(30 - Math.abs(d)));
        card.style.setProperty('--o', visible ? '1' : '0');
      });
      if (countEl) countEl.textContent = (active + 1) + ' / ' + cards.length;
    }

    function openReview(card) {
      if (!dialog || !card) return;
      var name = card.querySelector('strong');
      var source = card.querySelector('footer span');
      var text = card.querySelector('p');
      dialog.querySelector('[data-review-name]').textContent = name ? name.textContent : '';
      dialog.querySelector('[data-review-source]').textContent = source ? source.textContent : '';
      dialog.querySelector('[data-review-text]').textContent = text ? text.textContent : '';
      var link = dialog.querySelector('[data-review-link]');
      link.href = card.getAttribute('data-href') || link.href;
      link.textContent = source && source.textContent.indexOf('2') === 0 ? 'Открыть в 2ГИС' : 'Открыть на Яндекс Картах';
      if (typeof dialog.showModal === 'function') dialog.showModal();
    }

    function step(delta) {
      active = wrapIndex(active + delta);
      layout();
    }

    cards.forEach(function (card, index) {
      card.addEventListener('click', function () {
        if (offsetOf(index) === 0) openReview(card);
        else {
          active = index;
          layout();
        }
      });
    });

    var prev = fan.querySelector('[data-fan-prev]');
    var next = fan.querySelector('[data-fan-next]');
    var openBtn = fan.querySelector('[data-fan-open]');
    if (prev) prev.addEventListener('click', function () { step(-1); });
    if (next) next.addEventListener('click', function () { step(1); });
    if (openBtn) openBtn.addEventListener('click', function () { openReview(cards[active]); });

    if (dialog) {
      dialog.querySelector('[data-review-close]').addEventListener('click', function () {
        dialog.close();
      });
      dialog.addEventListener('click', function (event) {
        if (event.target === dialog) dialog.close();
      });
    }

    document.addEventListener('keydown', function (event) {
      if (dialog && dialog.open) return;
      if (!fan) return;
      if (event.key === 'ArrowLeft') step(-1);
      if (event.key === 'ArrowRight') step(1);
    });

    layout();
  }
})();
