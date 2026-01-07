// Smooth scroll
function scrollToSection(selector) {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Theme toggle
const toggle = document.getElementById("themeToggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  localStorage.setItem("theme", body.classList.contains("dark") ? "dark" : "light");
});

// Mobile nav
const hamburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Bottom nav
document.querySelectorAll(".bottom-item").forEach(btn => {
  btn.addEventListener("click", () => {
    scrollToSection(btn.dataset.target);
  });
});

// 3D tilt
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y - rect.height / 2) / rect.height) * -10;
    const rotateY = ((x - rect.width / 2) / rect.width) * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  });
});

// Parallax + scroll reactive
const panels = document.querySelectorAll(".parallax-panel");
const reactive = document.querySelectorAll(".scroll-reactive");

function handleScroll() {
  const height = window.innerHeight;

  panels.forEach(panel => {
    const rect = panel.getBoundingClientRect();
    panel.style.transform = `translateY(${rect.top * -0.05}px)`;
  });

  reactive.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < height * 0.85) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
