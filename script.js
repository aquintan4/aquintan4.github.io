// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Renderizar Proyectos
const grid = document.getElementById("projectsGrid");
if (grid && typeof projects !== "undefined") {
  grid.innerHTML = projects.map(p => `
    <a class="project-card" href="${p.url}" target="_blank">
      <div class="project-img">
        <img src="${p.image}" alt="${p.title}" onerror="this.src='assets/projects/placeholder.png'">
      </div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="project-tags">
          ${p.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
        <span class="project-link">View on GitHub →</span>
      </div>
    </a>
  `).join("");
}

// Año footer
document.getElementById("year").textContent = new Date().getFullYear();

// Robot Wave on Click (Actualizado para el robot bajo botones)
const robotHero = document.getElementById('hero-robot');
if (robotHero) {
  robotHero.addEventListener('click', () => {
    robotHero.style.animation = 'none';
    void robotHero.offsetWidth; 
    robotHero.style.animation = 'robot-wave 1s ease-in-out 1';
  });
}