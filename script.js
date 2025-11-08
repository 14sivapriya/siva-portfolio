// =========================
// Hero Intro (Typed.js)
// =========================
document.addEventListener('DOMContentLoaded', function() {
  new Typed('#typed', {
    strings: ["Fresher", "Quick Learner", "Web Enthusiast"],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
  });
});

// =========================
// Smooth Scroll for Nav Links
// =========================
document.addEventListener("click", (e) => {
  const el = e.target;
  if (el.matches('a[href^="#"]')) {
    const href = el.getAttribute('href');
    if (href.length > 1) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
});

// =========================
// Section Fade-In on Scroll
// =========================
const sections = document.querySelectorAll('.section');
const revealSection = () => {
  const windowH = window.innerHeight;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < windowH - 80) sec.classList.add('show');
  });
};
window.addEventListener('scroll', revealSection);
window.addEventListener('load', revealSection);

// =========================
// Skills Animation
// =========================
const skills = document.querySelectorAll('.skill');
skills.forEach(skill => {
  const fill = skill.querySelector('.skill-fill');
  const target = fill.getAttribute('data-width');
  fill.style.width = '0';
  skill.dataset.targetWidth = target;
});
window.addEventListener('scroll', () => {
  skills.forEach(skill => {
    const rect = skill.getBoundingClientRect();
    const fill = skill.querySelector('.skill-fill');
    if (rect.top < window.innerHeight - 50 && !skill.classList.contains('animated')) {
      fill.style.width = skill.dataset.targetWidth;
      skill.classList.add('animated');
    }
  });
});

// =========================
// Section Headings Fade-In
// =========================
const headings = document.querySelectorAll("section h2");
function handleHeadingReveal() {
  const windowH = window.innerHeight;
  headings.forEach(h2 => {
    const top = h2.getBoundingClientRect().top;
    if (top < windowH - 80) h2.classList.add("show");
  });
}
window.addEventListener("scroll", handleHeadingReveal);
window.addEventListener("load", handleHeadingReveal);

// =========================
// Contact Form (EmailJS)
// =========================
// ================== EMAILJS INITIALIZATION ==================
emailjs.init("RQvComjkyK3G3I2td"); // replace with your EmailJS public key

// ================== CONTACT FORM ==================
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Collect form data
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        message: document.querySelector("#message").value,
    };

    // Send email using EmailJS
    emailjs.send("service_hljcl97", "template_77oaj6p", templateParams)
        .then(() => {
            alert("✅ Thank you for contacting me! I’ll get back to you soon.");
            contactForm.reset();
        })
        .catch((error) => {
            console.error("Error sending email:", error);
            alert("❌ Failed to send email. Please try again.");
        });
});

