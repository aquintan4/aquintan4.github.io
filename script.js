document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    //por si aca el destino no existe, no rompas el script
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth" });
  });
});


const grid = document.getElementById("projectsGrid");
if (grid && typeof projects !== "undefined" && Array.isArray(projects)) {
  grid.innerHTML = projects.map(p => `
    <a class="project-card" href="${p.url}" target="_blank" rel="noreferrer">
      <div class="project-img">
        <img 
          src="${p.image}" 
          alt="${p.title}" 
          onerror="this.src='assets/projects/placeholder.png'"
        >
      </div>

      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.description}</p>

        ${
          Array.isArray(p.tags) && p.tags.length
            ? `<div class="project-tags">
                ${p.tags.map(tag => `<span>${tag}</span>`).join("")}
              </div>`
            : ""
        }

        <span class="project-link">View on GitHub →</span>
      </div>
    </a>
  `).join("");
}


const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Seleccionamos la imagen del robot
const robot = document.querySelector('.hero img');

if (robot) {
  robot.addEventListener('click', () => {
    // 1. Quitamos la clase por si ya estaba (para poder reiniciar)
    robot.classList.remove('wave-once');
    
    // 2. Un pequeño "truco" para que el navegador reinicie la animación
    void robot.offsetWidth; 
    
    // 3. Añadimos la clase que dispara el saludo
    robot.classList.add('wave-once');
  });

  // 4. (Opcional) Limpiamos la clase cuando la animación termina
  robot.addEventListener('animationend', () => {
    robot.classList.remove('wave-once');
  }, { once: false });
}

// Tu script actual de reveal debería funcionar bien.
// Asegúrate de que busca la clase .reveal y .reveal-right
const revealOnScroll = () => {
  // Seleccionamos elementos con .reveal O .reveal-right
  const reveals = document.querySelectorAll(".reveal, .reveal-right");
  
  reveals.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100;
    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();