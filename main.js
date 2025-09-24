document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");
  const icon = toggleBtn.querySelector("i");
  const html = document.documentElement;

  // Función para cambiar icono y tema
  function toggleTheme() {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      icon.classList.remove("fa-sun");
      icon.classList.remove("text-white");
      icon.classList.add("text-black");
      icon.classList.add("fa-moon");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      icon.classList.remove("fa-moon");
      icon.classList.remove("text-black");
      icon.classList.add("text-white");
      icon.classList.add("fa-sun");
      localStorage.setItem("theme", "dark");
    }
  }

  toggleBtn.addEventListener("click", toggleTheme);

  // Mantener preferencia guardada
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  }
});

// Aquí podrías agregar animaciones, scroll suave, etc.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Mostrar u ocultar el botón según el scroll
const volverArribaBtn = document.getElementById("volverArriba");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    volverArribaBtn.classList.remove("hidden");
  } else {
    volverArribaBtn.classList.add("hidden");
  }
});

// Volver al inicio al hacer clic en el botón
volverArribaBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});