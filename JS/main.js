document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    toggleBtn.addEventListener("click", () => {
      navMenu.classList.toggle("hidden");
    });
  });
  
  const button = document.querySelector('button');
  const icon = document.getElementById('icon-arrow');
  const desc = document.getElementById('desc');

  button.addEventListener('click', () => {
    icon.classList.toggle('rotate-180');
  });

  const button2 = document.querySelector('button2');
  const icon2 = document.getElementById('icon-arrow2');
  const desc2 = document.getElementById('desc2');

  button2.addEventListener('click', () => {
    icon.classList.toggle('rotate-180');
  });

  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".toggle-desc");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const desc = btn.nextElementSibling;
        desc.classList.toggle("hidden");
        btn.textContent = desc.classList.contains("hidden")
          ? "View Description ↓"
          : "Hide Description ↑";
      });
    });
  });