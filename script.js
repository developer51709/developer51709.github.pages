// Smooth scroll helper
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
  if (body.classList.contains("dark")) {
    toggle.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggle.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// Mobile nav toggle
const hamburger = document.getElementById("hamburgerBtn");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Bottom nav buttons
document.querySelectorAll(".glass-bottom-nav .bottom-item").forEach(btn => {
  btn.addEventListener("click", () => {
    const target = btn.getAttribute("data-target");
    scrollToSection(target);
  });
});

// 3D tilt effect
document.querySelectorAll(".tilt").forEach(card => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  });
});

// Parallax panels + scroll reactive
const panels = document.querySelectorAll(".parallax-panel");
const reactive = document.querySelectorAll(".scroll-reactive");

function handleScroll() {
  const scrollY = window.scrollY;
  const height = window.innerHeight;

  panels.forEach(panel => {
    const rect = panel.getBoundingClientRect();
    const offset = rect.top / height;
    panel.style.transform = `translateY(${offset * -20}px)`;
  });

  reactive.forEach(el => {
    const rect = el.getBoundingClientRect();
    const visible = rect.top < height * 0.85;
    if (visible) {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
