function showSection(sectionId) {
  // Hide all sections with fade-out
  document.querySelectorAll(".section").forEach((el) => {
    el.classList.remove("fade-in");
    el.classList.add("hidden-section");
  });

  // Small timeout to let the fade-out finish before fading in the new one
  setTimeout(() => {
    const targetSection = document.getElementById(sectionId);
    targetSection.classList.remove("hidden-section");
    targetSection.classList.add("fade-in");
  }, 150); // Slight delay to trigger transition properly

  // Auto-close sidebar on mobile
  const sidebar = document.getElementById("sidebar");
  if (window.innerWidth < 768) {
    sidebar.classList.add("-translate-x-full");
  }
}

window.onload = () => {
  showSection("about");
};

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const closeSidebar = document.getElementById("closeSidebar");

  menuToggle?.addEventListener("click", () => {
    sidebar.classList.toggle("-translate-x-full");
  });

  closeSidebar?.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
  });
});
