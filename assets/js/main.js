/* ==========================================================================
   MAIN JAVASCRIPT CONTROLLER
   Navigation Spy, Mobile Menu, Contact Transmission, Toasts & Clipboard
   ========================================================================== */
(function() {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-toggle');
  const navLinks = document.getElementById('nav-links-menu');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });

    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
      });
    });
  }

  // 2. Active Section Spy
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-link');

  function scrollSpy() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 180;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navItems.forEach(item => {
          item.classList.remove('active');
          if (item.getAttribute('href') === `#${sectionId}`) {
            item.classList.add('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', scrollSpy);

  // 3. Toast System
  function showToast(message, icon = 'check-circle') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = 'cyber-toast';
    toast.innerHTML = `
      <i data-lucide="${icon}" class="w-5 h-5 text-cyan flex-shrink-0"></i>
      <span>${message}</span>
    `;
    container.appendChild(toast);
    if (window.lucide) window.lucide.createIcons();

    setTimeout(() => {
      toast.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      toast.style.opacity = '0';
      toast.style.transform = 'translateX(100%)';
      setTimeout(() => toast.remove(), 400);
    }, 4000);
  }

  // 4. Copy to Clipboard
  window.copyToClipboard = function(text, label) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Copied ${label} to clipboard!`);
      }).catch(() => {
        showToast(`Selected: ${text}`);
      });
    } else {
      showToast(`Contact: ${text}`);
    }
  };

  // 5. Contact Form Transmission Handler
  const contactForm = document.getElementById('cyber-contact-form');
  const transmitBtn = document.getElementById('btn-transmit-message');

  if (contactForm && transmitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const msg = document.getElementById('contact-message').value.trim();

      if (!name || !email || !msg) {
        showToast('Please fill out all fields before transmitting.', 'alert-circle');
        return;
      }

      // Simulated Transmission Animation
      transmitBtn.disabled = true;
      transmitBtn.innerHTML = `
        <span class="inline-block animate-spin mr-2">⚡</span> TRANSMITTING PAYLOAD...
      `;

      setTimeout(() => {
        transmitBtn.disabled = false;
        transmitBtn.innerHTML = `
          <i data-lucide="send" class="w-4 h-4"></i> TRANSMIT MESSAGE ⚡
        `;
        if (window.lucide) window.lucide.createIcons();

        showToast(`Transmission successful! Thank you ${name}, Asna will reply soon!`);
        contactForm.reset();
      }, 1200);
    });
  }

  // 6. Resume Download / Print Trigger
  const downloadCvBtns = document.querySelectorAll('.trigger-cv-download');
  downloadCvBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Open standalone printable resume in a clean window for direct Save as PDF / Print
      window.open('resume/Asna_Shirin_E_Resume.html', '_blank');
      showToast('Opening printable CV payload in new tab...');
    });
  });
})();
