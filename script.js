document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Menu Toggle ---
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  // Close menu when clicking any navigation link (for mobile view)
  const links = navLinks.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // --- Smooth Active Navigation Bar Highlight ---
  const sections = document.querySelectorAll('section');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').includes(current)) {
        item.classList.add('active');
      }
    });
  });

  // --- Contact Form Handling ---
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevents page reload

      const name = document.getElementById('fullName').value;

      // Provide clear user feedback
      formStatus.style.color = 'green';
      formStatus.textContent = `Thank you, ${name}! Your message has been received. Our admissions office will get back to you shortly.`;

      // Reset the form inputs
      contactForm.reset();

      // Clear the notification message after 5 seconds
      setTimeout(() => {
        formStatus.textContent = '';
      }, 5000);
    });
  }
});