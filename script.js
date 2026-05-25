/* ============================================
   Ridekro Legal Pages - Shared Scripts
   ============================================ */

(function () {
  'use strict';

  // ── Mobile Nav Toggle ──────────────────────
  function initMobileNav() {
    const hamburger = document.getElementById('navHamburger');
    const mobileMenu = document.getElementById('navMobile');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.querySelectorAll('span').forEach(function (bar, i) {
        bar.style.opacity = isOpen && i === 1 ? '0' : '1';
        if (i === 0) bar.style.transform = isOpen ? 'translateY(7px) rotate(45deg)' : '';
        if (i === 2) bar.style.transform = isOpen ? 'translateY(-7px) rotate(-45deg)' : '';
      });
    });

    // Close on outside click
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
        // Close all
        items.forEach(function (i) { i.classList.remove('open'); });
        // Toggle current
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  // ── Active Nav Link ────────────────────────
  function setActiveNav() {
    var path = window.location.pathname.split('/').pop() || 'index.html';
    var links = document.querySelectorAll('.nav-links a, .nav-mobile a');
    links.forEach(function (link) {
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
