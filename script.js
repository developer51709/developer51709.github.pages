function scrollToProjects() {
  document.querySelector("#projects").scrollIntoView({ behavior: "smooth" });
}

const toggle = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark");
  toggle.textContent = "☀️";
}

// Toggle theme
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
