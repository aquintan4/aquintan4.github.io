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
