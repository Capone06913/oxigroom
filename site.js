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
      if (document.body.classList.contains('hands-lb-open')) return;
      if (dialog && dialog.open) return;
      if (!fan) return;
      if (event.key === 'ArrowLeft') step(-1);
      if (event.key === 'ArrowRight') step(1);
    });

    layout();
  }
})();

(function () {
  var shots = Array.prototype.slice.call(document.querySelectorAll('.hands-grid .hands-shot, .hands-grid img'));
  var buttons = shots.filter(function (node) {
    return node.classList.contains('hands-shot') || !node.closest('.hands-shot');
  });
  if (!buttons.length) return;

  var box = document.createElement('div');
  box.className = 'hands-lightbox';
  box.hidden = true;
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-modal', 'true');
  box.setAttribute('aria-label', 'Крупное фото работ');
  box.innerHTML =
    '<div class="hands-lightbox-backdrop" data-hands-close></div>' +
    '<button class="hands-lightbox-close" type="button" data-hands-close aria-label="Закрыть фото">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M18 6L6 18M6 6l12 12"/></svg>' +
    '</button>' +
    '<button class="hands-lightbox-arrow hands-lightbox-arrow--prev" type="button" data-hands-dir="-1" aria-label="Предыдущее фото">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>' +
    '</button>' +
    '<figure class="hands-lightbox-figure">' +
      '<img alt="">' +
      '<figcaption class="hands-lightbox-caption"></figcaption>' +
    '</figure>' +
    '<button class="hands-lightbox-arrow hands-lightbox-arrow--next" type="button" data-hands-dir="1" aria-label="Следующее фото">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>' +
    '</button>';
  document.body.appendChild(box);

  var view = box.querySelector('img');
  var caption = box.querySelector('.hands-lightbox-caption');
  var closeBtn = box.querySelector('.hands-lightbox-close');
  var index = 0;
  var lastTrigger = null;

  function photoOf(node) {
    return node.tagName === 'IMG' ? node : node.querySelector('img');
  }

  function show(next) {
    index = (next + buttons.length) % buttons.length;
    var img = photoOf(buttons[index]);
    if (!img) return;
    view.src = img.currentSrc || img.src;
    view.alt = img.alt || 'Фото работ';
    caption.textContent = img.alt || '';
  }

  function open(next, trigger) {
    lastTrigger = trigger || null;
    show(next);
    box.hidden = false;
    document.body.classList.add('hands-lb-open');
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (box.hidden) return;
    box.hidden = true;
    view.removeAttribute('src');
    document.body.classList.remove('hands-lb-open');
    if (lastTrigger && typeof lastTrigger.focus === 'function') lastTrigger.focus();
    lastTrigger = null;
  }

  buttons.forEach(function (node, i) {
    if (node.tagName === 'IMG') {
      node.tabIndex = 0;
      node.setAttribute('role', 'button');
      if (!node.getAttribute('aria-label')) {
        node.setAttribute('aria-label', 'Увеличить фото');
      }
      node.addEventListener('keydown', function (event) {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          open(i, node);
        }
      });
    }
    node.addEventListener('click', function () {
      open(i, node);
    });
  });

  box.addEventListener('click', function (event) {
    if (event.target.closest('[data-hands-close]')) close();
    var dir = event.target.closest('[data-hands-dir]');
    if (dir) show(index + Number(dir.getAttribute('data-hands-dir')));
  });

  document.addEventListener('keydown', function (event) {
    if (box.hidden) return;
    if (event.key === 'Escape') {
      event.preventDefault();
      close();
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      show(index + 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      show(index - 1);
    }
  });
})();

(function () {
  document.querySelectorAll('.faq').forEach(function (root) {
    root.querySelectorAll('details').forEach(function (item) {
      item.addEventListener('toggle', function () {
        if (!item.open) return;
        root.querySelectorAll('details').forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  });
})();
