/* =========================================
   WANDERLUST TRAVEL - Shared JavaScript
   =========================================
   This file is shared across all pages.
   It handles: Navbar scroll, Mobile menu,
   Scroll reveal, Back-to-top, Password toggle,
   Form handlers, and Destination filter.
   ========================================= */

// =========================================
// Sticky Navbar with scroll effect
// =========================================
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  // If navbar has 'solid' class, it's a non-hero page — keep it solid always
  if (navbar.classList.contains('solid')) return;

  // Hero page: toggle 'scrolled' class based on scroll position
  if (window.scrollY > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
window.addEventListener('scroll', handleNavbarScroll);

// =========================================
// Mobile Menu Toggle
// =========================================
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
  document.getElementById('navOverlay').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}

// Close mobile menu when clicking a link
document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      const navLinksEl = document.getElementById('navLinks');
      const overlay = document.getElementById('navOverlay');
      const hamburger = document.getElementById('hamburger');
      if (navLinksEl) navLinksEl.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      if (hamburger) hamburger.classList.remove('open');
    });
  });
});

// =========================================
// Scroll Reveal Animation
// =========================================
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
  const windowHeight = window.innerHeight;

  reveals.forEach(function (el) {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 120;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', function () {
  setTimeout(revealOnScroll, 200);
});

// =========================================
// Password Toggle (Login Page)
// =========================================
function togglePassword(inputId, btn) {
  var input = document.getElementById(inputId);
  var icon = btn.querySelector('i');

  if (input.type === 'password') {
    input.type = 'text';
    icon.classList.remove('fa-eye');
    icon.classList.add('fa-eye-slash');
  } else {
    input.type = 'password';
    icon.classList.remove('fa-eye-slash');
    icon.classList.add('fa-eye');
  }
}

// =========================================
// Login Form Handler
// =========================================
function handleLogin(e) {
  e.preventDefault();
  var email = document.getElementById('loginEmail').value;
  var password = document.getElementById('loginPassword').value;

  if (email && password) {
    var btn = e.target.querySelector('button[type="submit"]');
    btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';
    btn.disabled = true;

    setTimeout(function () {
      btn.innerHTML = '<i class="fa-solid fa-check"></i> Success!';
      btn.style.background = 'linear-gradient(135deg, var(--teal), #059669)';

      setTimeout(function () {
        // Redirect to home page after successful login
        window.location.href = 'index.html';
      }, 1000);
    }, 1500);
  }
}

// =========================================
// Contact Form Handler
// =========================================
function handleContact(e) {
  e.preventDefault();
  var btn = e.target.querySelector('button[type="submit"]');
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';
  btn.disabled = true;

  setTimeout(function () {
    // Redirect to Thank You page
    window.location.href = 'thankyou.html';
  }, 1500);
}

// =========================================
// Destination Filter (Destinations Page)
// =========================================
function filterDest(category, btn) {
  // Update active filter button
  var buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(function (b) {
    b.classList.remove('active');
  });
  btn.classList.add('active');

  // Show/hide cards based on category
  var cards = document.querySelectorAll('#destGrid .dest-card');
  cards.forEach(function (card) {
    var cats = card.getAttribute('data-category');
    if (category === 'all' || cats.indexOf(category) !== -1) {
      card.style.display = '';
      card.style.animation = 'pageIn 0.5s ease forwards';
    } else {
      card.style.display = 'none';
    }
  });
}

// =========================================
// Back to Top Button
// =========================================
window.addEventListener('scroll', function () {
  var btn = document.getElementById('backToTop');
  if (!btn) return;

  if (window.scrollY > 500) {
    btn.classList.add('visible');
  } else {
    btn.classList.remove('visible');
  }
});

// =========================================
// Newsletter Form Handler
// =========================================
function handleNewsletter(e) {
  e.preventDefault();
  var input = e.target.querySelector('input[type="email"]');
  if (input && input.value) {
    alert('Thanks for subscribing! You\'ll receive our best travel deals.');
    input.value = '';
  }
}
