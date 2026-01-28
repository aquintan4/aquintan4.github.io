/**
 * Lógica Global del Portfolio - Álvaro Quintana
 */

// --- 1. FUNCIONES GLOBALES (Accesibles desde los atributos 'onclick') ---

/**
 * Expande o contrae la descripción detallada del proyecto.
 */
function toggleProject(index) {
    const card = document.getElementById(`project-${index}`);
    const arrow = card.querySelector('.arrow');
    if (card) {
        card.classList.toggle('expanded');
        if (arrow) {
            arrow.style.transform = card.classList.contains('expanded') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }
}

/**
 * Activa o desactiva el modo reproductor de vídeo dentro de la tarjeta.
 * @param {number} index - Índice del proyecto.
 * @param {boolean} activate - True para activar controles y audio.
 */
function toggleVideoPlayer(index, activate) {
    const card = document.getElementById(`project-${index}`);
    const mediaContainer = card.querySelector('.project-media');
    const video = mediaContainer.querySelector('video');

    if (activate) {
        mediaContainer.classList.add('player-active');
        if (video) {
            video.style.pointerEvents = "auto"; // Habilita clics para controles
            video.muted = false; // Activa el sonido
            video.controls = true; // Muestra la barra de reproducción
            video.play();
        }
    } else {
        mediaContainer.classList.remove('player-active');
        if (video) {
            video.style.pointerEvents = "none"; // Vuelve a modo preview (sin clics)
            video.muted = true;
            video.controls = false;
            video.pause();
            video.currentTime = 0; // Reinicia el vídeo al cerrar
            video.play();
        }
    }
}

/**
 * Gestiona el sistema de filtrado por categorías.
 */
let currentFilter = 'All';
function filterProjects(category) {
    currentFilter = category;
    window.renderFilters();
    window.renderProjects(category);
}

// --- 2. LÓGICA PRINCIPAL (Al cargar el DOM) ---

document.addEventListener('DOMContentLoaded', () => {
    
    const grid = document.getElementById("projectsGrid");
    const filterContainer = document.getElementById("filterContainer");
    const scrollInvite = document.querySelector('.scroll-invite');
    const robotHero = document.getElementById('hero-robot');
    const yearSpan = document.getElementById("year");

    // --- 3. RENDERIZADO DINÁMICO ---

    /**
     * Genera los botones de filtro basándose en el archivo projects.js
     */
    window.renderFilters = function() {
        if (!filterContainer || typeof projects === "undefined") return;

        // Crea lista de categorías únicas
        const allCategories = ['All', ...new Set(projects.flatMap(p => p.categories || []))];

        filterContainer.innerHTML = allCategories.map(cat => `
            <button class="filter-btn ${cat === currentFilter ? 'active' : ''}" 
                    onclick="filterProjects('${cat}')">
                ${cat}
            </button>
        `).join("");
    };

    /**
     * Dibuja las tarjetas de proyecto.
     * Soporta detección de vídeos incluso con parámetros extra (como Dropbox ?raw=1).
     */
    window.renderProjects = function(filter = 'All') {
        if (!grid || typeof projects === "undefined") return;

        const filtered = filter === 'All' 
            ? projects 
            : projects.filter(p => (p.categories || []).includes(filter));

        grid.innerHTML = filtered.map((p, index) => {
            const hasPreview = p.preview && p.preview.trim() !== "";
            // Detecta .mp4 incluso si el enlace tiene parámetros después
            const isVideo = hasPreview && p.preview.toLowerCase().includes('.mp4');
            
            return `
            <div class="project-card animate-in ${hasPreview ? 'has-preview' : ''}" id="project-${index}">
                <div class=\"project-media\">
                    ${isVideo ? `
                        <button class="play-overlay-btn" onclick="toggleVideoPlayer(${index}, true)" title="Play video">▶</button>
                        <button class="close-player" onclick="toggleVideoPlayer(${index}, false)">✕ Close Player</button>
                    ` : ''}
                    
                    <img src="${p.image}" class="static-img" alt="${p.title}" onerror="this.src='assets/projects/placeholder.png'">
                    
                    ${hasPreview ? (
                        isVideo 
                        ? `<video src="${p.preview}" class="preview-media" autoplay loop muted playsinline style="pointer-events: none;"></video>`
                        : `<img src="${p.preview}" class="preview-media" alt="preview">`
                    ) : ''}
                </div>
                
                <div class="project-body">
                    <div class="project-categories">
                        ${(p.categories || []).map(cat => `<span class="cat-tag">${cat}</span>`).join("")}
                    </div>
                    <h3>${p.title}</h3>
                    <p class="short-desc">${p.shortDesc || ''}</p>
                    
                    <button class="details-toggle" onclick="toggleProject(${index})">
                        More details <span class="arrow">↓</span>
                    </button>

                    <div class="details-content">
                        <p>${p.fullDescription || ''}</p>
                        ${p.github ? `<a href="${p.github}" target="_blank" class="github-btn">View on GitHub →</a>` : ''}
                    </div>
                </div>
            </div>`;
        }).join("");
    };

    // --- 4. OTROS COMPONENTES ---

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

    // Desvanecer invitación de scroll al bajar
    if (scrollInvite) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) scrollInvite.classList.add('hidden');
            else scrollInvite.classList.remove('hidden');
        });
    }

    // Animación del robot al hacer clic
    if (robotHero) {
        robotHero.addEventListener('click', () => {
            robotHero.style.animation = 'none';
            void robotHero.offsetWidth; // Reinicia el ciclo de animación
            robotHero.style.animation = 'robot-wave 1s ease-in-out 1';
        });
    }

    // Año automático del footer
    if (yearSpan) yearSpan.textContent = new Date().getFullYear();

    // Lanzamiento inicial
    renderFilters();
    renderProjects();
});