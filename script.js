// Smooth Scroll for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Active nav link highlighting
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});

// Navbar shrink on scroll
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.style.padding = "0.5rem 20px";
    navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,0.3)";
  } else {
    navbar.style.padding = "1rem 20px";
    navbar.style.boxShadow = "none";
  }
});

// Scroll animations (fade-in)
const fadeElements = document.querySelectorAll(".project-card, .cert-card, .skill-category");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

fadeElements.forEach(el => {
  el.classList.add("fade"); // start hidden
  observer.observe(el);
});

// Typing animation for name
const typedName = document.getElementById("typed-name");
const nameText = "Surabhi Sripadrao";  // The text to type
let index = 0;

function typeEffect() {
  if (index < nameText.length) {
    typedName.textContent += nameText.charAt(index);
    index++;
    setTimeout(typeEffect, 150); // typing speed
  }
}

// Start typing when page loads
window.addEventListener("load", typeEffect);
