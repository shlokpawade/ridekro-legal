/* ============================================
   Ridekro – Premium Scripts v2
   ============================================ */
(function () {
  'use strict';

  /* ── Reading Progress Bar ── */
  function initReadingProgress() {
    var bar = document.createElement('div');
    bar.className = 'reading-progress';
    document.body.prepend(bar);
    window.addEventListener('scroll', function () {
      var scrollTop = window.scrollY;
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = pct + '%';
    }, { passive: true });
  }

  /* ── Cursor Glow ── */
  function initCursorGlow() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    var glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);
    var mouseX = 0, mouseY = 0;
    var glowX = 0, glowY = 0;
    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX; mouseY = e.clientY;
    }, { passive: true });
    function animateGlow() {
      glowX += (mouseX - glowX) * 0.08;
      glowY += (mouseY - glowY) * 0.08;
      glow.style.left = glowX + 'px';
      glow.style.top = glowY + 'px';
      requestAnimationFrame(animateGlow);
    }
    animateGlow();
  }

  /* ── Navbar scroll state ── */
  function initNavbarScroll() {
    var navbar = document.querySelector('.navbar');
    if (!navbar) return;
    var handler = function () {
      navbar.classList.toggle('scrolled', window.scrollY > 20);
    };
    window.addEventListener('scroll', handler, { passive: true });
    handler();
  }

  /* ── Mobile Nav Toggle ── */
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
          bar.style.transform = ''; bar.style.opacity = '1';
        });
      }
    });
  }

  /* ── Scroll Reveal ── */
  function initScrollReveal() {
    var elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!elements.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    elements.forEach(function (el) { observer.observe(el); });
  }

  /* ── Add reveal classes to page elements ── */
  function addRevealClasses() {
    // Feature cards with stagger
    document.querySelectorAll('.feature-card').forEach(function (el, i) {
      el.classList.add('reveal');
      el.classList.add('delay-' + Math.min(i + 1, 6));
    });
    // Legal link cards
    document.querySelectorAll('.legal-link-card').forEach(function (el, i) {
      el.classList.add('reveal');
      el.classList.add(i % 2 === 0 ? 'delay-1' : 'delay-2');
    });
    // Trust badges
    document.querySelectorAll('.trust-badge').forEach(function (el, i) {
      el.classList.add('reveal');
      el.classList.add('delay-' + Math.min(i + 1, 4));
    });
    // Section headers
    document.querySelectorAll('.section-header').forEach(function (el) {
      el.classList.add('reveal');
    });
    // Stat items
    document.querySelectorAll('.stat-item').forEach(function (el, i) {
      el.classList.add('reveal');
      el.classList.add('delay-' + Math.min(i + 1, 4));
    });
    // Contact cards
    document.querySelectorAll('.contact-card').forEach(function (el, i) {
      el.classList.add('reveal');
      el.classList.add('delay-' + Math.min(i + 1, 3));
    });
    // Legal sections
    document.querySelectorAll('.legal-section').forEach(function (el) {
      el.classList.add('reveal');
    });
    // Steps
    document.querySelectorAll('.steps-list li').forEach(function (el, i) {
      el.classList.add('reveal');
      el.classList.add('delay-' + Math.min(i + 1, 6));
    });
    // FAQ items
    document.querySelectorAll('.faq-item').forEach(function (el, i) {
      el.classList.add('reveal');
      el.classList.add('delay-' + (i % 3 + 1));
    });
    // Hero inner elements - these start visible
    var heroInner = document.querySelector('.hero-inner');
    if (heroInner) {
      var children = heroInner.children;
      Array.from(children).forEach(function (child, i) {
        child.style.opacity = '0';
        child.style.transform = 'translateY(24px)';
        child.style.transition = 'opacity 0.8s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.12) + 's, transform 0.8s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.12) + 's';
        setTimeout(function () {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, 100 + i * 120);
      });
    }
    // Page hero inner
    var pageHeroInner = document.querySelector('.page-hero-inner');
    if (pageHeroInner) {
      var pgChildren = pageHeroInner.children;
      Array.from(pgChildren).forEach(function (child, i) {
        child.style.opacity = '0';
        child.style.transform = 'translateY(20px)';
        child.style.transition = 'opacity 0.7s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.1) + 's, transform 0.7s cubic-bezier(0.16,1,0.3,1) ' + (i * 0.1) + 's';
        setTimeout(function () {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, 80 + i * 100);
      });
    }
    // CTA section
    var ctaSection = document.querySelector('.app-cta-section');
    if (ctaSection) {
      Array.from(ctaSection.querySelectorAll('h2, p, .store-badges')).forEach(function (el, i) {
        el.classList.add('reveal');
        el.classList.add('delay-' + Math.min(i + 1, 3));
      });
    }
  }

  /* ── FAQ Accordion ── */
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

  /* ── Active Nav Link ── */
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

  /* ── Smooth scroll ── */
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

  /* ── Copy email ── */
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

  /* ── Card tilt on mouse move ── */
  function initCardTilt() {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    document.querySelectorAll('.feature-card, .legal-link-card, .trust-badge, .contact-card').forEach(function (card) {
      card.addEventListener('mousemove', function (e) {
        var rect = card.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.transform = 'translateY(-4px) rotateX(' + (-y * 6) + 'deg) rotateY(' + (x * 6) + 'deg)';
        card.style.transition = 'transform 0.1s linear, box-shadow 0.3s ease, border-color 0.3s ease';
      });
      card.addEventListener('mouseleave', function () {
        card.style.transform = '';
        card.style.transition = 'all 0.4s cubic-bezier(0.16,1,0.3,1)';
      });
    });
  }

  /* ── Animated counter for stats ── */
  function animateCounters() {
    var stats = document.querySelectorAll('.stat-num');
    if (!stats.length) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var el = entry.target;
        var text = el.textContent.trim();
        var match = text.match(/^(\d+)/);
        if (!match) return;
        var end = parseInt(match[1]);
        var suffix = text.replace(/^\d+/, '');
        var start = 0;
        var duration = 1200;
        var startTime = null;
        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          var current = Math.floor(eased * end);
          el.textContent = current + suffix;
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    stats.forEach(function (el) { observer.observe(el); });
  }

  /* ── Add scroll indicator to hero ── */
  function addScrollIndicator() {
    var hero = document.querySelector('.hero');
    if (!hero) return;
    var indicator = document.createElement('div');
    indicator.className = 'scroll-indicator';
    indicator.innerHTML = '<span>Scroll</span><div class="scroll-chevron"></div>';
    hero.appendChild(indicator);
    window.addEventListener('scroll', function () {
      indicator.style.opacity = window.scrollY > 80 ? '0' : '1';
    }, { passive: true });
  }

  /* ── Init ── */
  document.addEventListener('DOMContentLoaded', function () {
    initReadingProgress();
    initCursorGlow();
    initNavbarScroll();
    initMobileNav();
    addRevealClasses();
    initScrollReveal();
    initFAQ();
    setActiveNav();
    initSmoothScroll();
    initCopyEmail();
    initCardTilt();
    animateCounters();
    addScrollIndicator();
  });
})();
