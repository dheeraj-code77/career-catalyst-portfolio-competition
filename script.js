const page = document.querySelector(".page");
const themeToggle = document.querySelector(".theme-toggle");
const progress = document.querySelector(".scroll-progress");

themeToggle.addEventListener("click", () => {
  const isDark = page.classList.toggle("dark-theme");
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  themeToggle.querySelector("span").textContent = isDark ? "☾" : "☀";
  document.querySelector('meta[name="theme-color"]').content = isDark ? "#111820" : "#f4f1e9";
});

const updateProgress = () => {
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  const percentage = maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0;
  progress.style.width = `${percentage}%`;
};

window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
updateProgress();
