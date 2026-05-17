// ============================================================
//  InAmigos Foundation — script.js
// ============================================================

// ── Hero Slider ──────────────────────────────────────────────
(function () {
  const slides = document.querySelectorAll('.hero-slider .slide');
  if (!slides.length) return;

  let current = 0;

  function nextSlide() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  setInterval(nextSlide, 5000);
})();

// ── Mobile Menu Toggle ───────────────────────────────────────
(function () {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  if (!menuBtn || !navLinks) return;

  menuBtn.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '70px';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = '#1a3a2a';
    navLinks.style.padding = '20px 6%';
    navLinks.style.gap = '18px';
    navLinks.style.zIndex = '999';
    navLinks.style.borderTop = '1px solid rgba(255,255,255,0.08)';
  });

  // Close menu on link click
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.style.display = 'none';
    });
  });
})();

// ── Navbar scroll shadow ─────────────────────────────────────
(function () {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.2)';
    } else {
      navbar.style.boxShadow = 'none';
    }
  });
})();