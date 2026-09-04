// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Contact form (opens email)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const name = this.name.value;
  const email = this.email.value;
  const phone = this.phone.value;
  const service = this.service.value;
  const message = this.message.value;

  const subject = encodeURIComponent(`ForGold Solutions Enquiry - ${service || 'General'}`);
  const body = encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nService: ${service}\n\nMessage:\n${message}`
  );

  window.location.href = `mailto:paszbyforgold@gmail.com?subject=${subject}&body=${body}`;
});
