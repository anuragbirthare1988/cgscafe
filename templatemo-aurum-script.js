// JavaScript Document


// Navigation scroll effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
   if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
   } else {
      navbar.classList.remove('scrolled');
   }
});

// Mobile Menu
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

function openMobileMenu() {
   mobileMenu.classList.add('open');
   mobileMenuOverlay.classList.add('open');
   mobileMenuBtn.classList.add('active');
   document.body.classList.add('menu-open');
}

function closeMobileMenu() {
   mobileMenu.classList.remove('open');
   mobileMenuOverlay.classList.remove('open');
   mobileMenuBtn.classList.remove('active');
   document.body.classList.remove('menu-open');
}

mobileMenuBtn.addEventListener('click', openMobileMenu);
mobileMenuClose.addEventListener('click', closeMobileMenu);
mobileMenuOverlay.addEventListener('click', closeMobileMenu);

// Close mobile menu when clicking a link
mobileNavLinks.forEach(link => {
   link.addEventListener('click', () => {
      closeMobileMenu();
   });
});

// Close mobile menu on escape key
document.addEventListener('keydown', (e) => {
   if (e.key === 'Escape') {
      closeMobileMenu();
   }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
         target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
   });
});

// Active menu highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function highlightNavOnScroll() {
   const scrollPos = window.scrollY + 150;

   sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
         // Desktop nav
         navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
               link.classList.add('active');
            }
         });
         // Mobile nav
         mobileNavLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + sectionId) {
               link.classList.add('active');
            }
         });
      }
   });

   // Remove active if at top of page
   if (window.scrollY < 100) {
      navLinks.forEach(link => link.classList.remove('active'));
      mobileNavLinks.forEach(link => link.classList.remove('active'));
   }
}

window.addEventListener('scroll', highlightNavOnScroll);

// Product tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
   btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');

      // Remove active from all buttons
      tabBtns.forEach(b => b.classList.remove('active'));
      // Add active to clicked button
      btn.classList.add('active');

      // Hide all tab contents
      tabContents.forEach(content => {
         content.classList.remove('active');
      });

      // Show selected tab content
      const activeContent = document.getElementById('tab-' + tabId);
      if (activeContent) {
         activeContent.classList.add('active');
      }
   });
});