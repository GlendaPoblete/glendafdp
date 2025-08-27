// Typing Effect
const services = [
  "Virtual Assistance",
  "Research",
  "Sales and Marketing",
  "Database & Workforce Management"
];

let typedText = document.getElementById("typedText");
let serviceIndex = 0, charIndex = 0;
let isDeleting = false;

function type() {
  const current = services[serviceIndex];
  if (!isDeleting && charIndex < current.length) {
    typedText.textContent += current.charAt(charIndex++);
    setTimeout(type, 100);
  } else if (isDeleting && charIndex > 0) {
    typedText.textContent = current.substring(0, --charIndex);
    setTimeout(type, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) serviceIndex = (serviceIndex + 1) % services.length;
    setTimeout(type, isDeleting ? 1000 : 100);
  }
}
document.addEventListener("DOMContentLoaded", () => services.length && type());

// Dark Mode Toggle
const toggleBtn = document.getElementById("toggleMode");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  scrollTopBtn.style.display = window.scrollY > 200 ? "flex" : "none";
});
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
