/* ============================================
   Ridekro – Shared Scripts
   ============================================ */

(function () {
  'use strict';

  // ── Mobile Nav Toggle ──────────────────────
  function initMobileNav() {
    var hamburger = document.getElementById('navHamburger');
    var mobileMenu = document.getElementById('navMobile');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      var bars = hamburger.querySelectorAll('span');
      if (isOpen) {
        bars[0].style.transform = 'translateY(6.5px) rotate(45deg)';
        bars[1].style.opacity = '0';
        bars[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
      } else {
        bars[0].style.transform = '';
        bars[1].style.opacity = '1';
        bars[2].style.transform = '';
      }
    });

    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.querySelectorAll('span').forEach(function (bar) {
          bar.style.transform = '';
          bar.style.opacity = '1';
        });
      }
    });
  }

  // ── FAQ Accordion ──────────────────────────
  function initFAQ() {
    var items = document.querySelectorAll('.faq-item');
    items.forEach(function (item) {
      var btn = item.querySelector('.faq-question');
      if (!btn) return;
      btn.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        items.forEach(function (i) {
          i.classList.remove('open');
          var q = i.querySelector('.faq-question');
          if (q) q.setAttribute('aria-expanded', 'false');
        });
        if (!isOpen) {
          item.classList.add('open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });
  }

  // ── Active Nav Link ────────────────────────
  function setActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function (link) {
      link.classList.remove('active');
      var href = link.getAttribute('href');
      if (href === path || (path === '' && href === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ── Smooth scroll for anchor links ─────────
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ── Copy email on click ────────────────────
  function initCopyEmail() {
    document.querySelectorAll('[data-copy-email]').forEach(function (el) {
      el.addEventListener('click', function () {
        var email = el.getAttribute('data-copy-email');
        if (navigator.clipboard) {
          navigator.clipboard.writeText(email).then(function () {
            var orig = el.textContent;
            el.textContent = 'Copied!';
            setTimeout(function () { el.textContent = orig; }, 1800);
          });
        }
      });
    });
  }

  // ── Init ───────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initMobileNav();
    initFAQ();
    setActiveNav();
    initSmoothScroll();
    initCopyEmail();
  });

})();
