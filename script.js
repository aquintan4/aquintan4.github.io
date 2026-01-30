/**
 * Portfolio main script — Projects + Blog (with modal reader)
 * Works with:
 * - projects.js  (expects global const `projects`)
 * - blogs.js     (expects global const `blogPosts` OR window.blogPosts = [...])
 *
 * IMPORTANT:
 * - This file attaches functions to `window.*` because your HTML uses inline onclick="..."
 * - Blog modal supports both CSS variants:
 *     - overlay:  .blog-modal-overlay.open { display:flex; }
 *     - modal:    .blog-modal.is-open { display:block; }
 */

"use strict";

// ------------------------------
// 0) HELPERS
// ------------------------------

function escapeHtml(s = "") {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

// Minimal markdown-ish formatter:
// **bold**, *italic*, `code`, [label](url)
function formatInline(text = "") {
  let t = escapeHtml(text);

  // Links [label](url)
  t = t.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]+)\)/g,
    `<a href="$2" target="_blank" rel="noopener">$1</a>`
  );

  // Inline code `code`
  t = t.replace(/`([^`]+)`/g, `<code class="inline-code">$1</code>`);

  // Bold **text**
  t = t.replace(/\*\*([^*]+)\*\*/g, `<strong>$1</strong>`);

  // Italic *text* (simple)
  t = t.replace(/(^|[^*])\*([^*]+)\*([^*]|$)/g, `$1<em>$2</em>$3`);

  // Newlines to <br>
  t = t.replace(/\n/g, "<br>");

  return t;
}

function estimateReadingTimeFromBlocks(blocks = []) {
  // rough: count chars
  const chars = JSON.stringify(blocks || []).length;
  const mins = Math.max(3, Math.round(chars / 800));
  return mins;
}

function qs(sel, root = document) {
  return root.querySelector(sel);
}

function qsa(sel, root = document) {
  return Array.from(root.querySelectorAll(sel));
}

// Smooth scroll with fixed header offset
function scrollToHash(hash) {
  const id = (hash || "").replace("#", "");
  if (!id) return;

  const target = document.getElementById(id);
  if (!target) return;

  const headerH =
    parseInt(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 74;
  const y = target.getBoundingClientRect().top + window.scrollY - headerH + 1;

  window.scrollTo({ top: y, behavior: "smooth" });
}

// ------------------------------
// 1) PROJECTS — GLOBAL FUNCTIONS (used by onclick in generated HTML)
// ------------------------------

function toggleProject(index) {
  const card = document.getElementById(`project-${index}`);
  if (!card) return;

  const arrow = card.querySelector(".arrow");
  card.classList.toggle("expanded");
  if (arrow)
    arrow.style.transform = card.classList.contains("expanded") ? "rotate(180deg)" : "rotate(0deg)";
}

function toggleVideoPlayer(index, activate) {
  const card = document.getElementById(`project-${index}`);
  if (!card) return;

  const mediaContainer = card.querySelector(".project-media");
  if (!mediaContainer) return;

  const video = mediaContainer.querySelector("video");
  if (!video) return;

  if (activate) {
    mediaContainer.classList.add("player-active");
    video.style.pointerEvents = "auto";
    video.muted = false;
    video.controls = true;
    video.play().catch(() => {});
  } else {
    mediaContainer.classList.remove("player-active");
    video.style.pointerEvents = "none";
    video.muted = true;
    video.controls = false;
    video.pause();
    video.currentTime = 0;
    // keep hover preview loop muted
    video.play().catch(() => {});
  }
}

let currentFilter = "All";

function filterProjects(category) {
  currentFilter = category;
  renderFilters();
  renderProjects(category);
}

// Make functions available to inline onclick
window.toggleProject = toggleProject;
window.toggleVideoPlayer = toggleVideoPlayer;
window.filterProjects = filterProjects;

// ------------------------------
// 1.1) PROJECTS — RENDER
// ------------------------------

function getProjects() {
  return Array.isArray(window.projects) ? window.projects : typeof projects !== "undefined" ? projects : [];
}

function getAllCategories(projectsArr) {
  const set = new Set();
  (projectsArr || []).forEach((p) => (p.categories || []).forEach((c) => set.add(c)));
  return ["All", ...Array.from(set).sort((a, b) => a.localeCompare(b))];
}

function renderFilters() {
  const container = document.getElementById("filterContainer");
  if (!container) return;

  const cats = getAllCategories(getProjects());

  container.innerHTML = cats
    .map((c) => {
      const active = c === currentFilter ? "active" : "";
      return `<button class="filter-btn ${active}" onclick="filterProjects('${escapeHtml(c).replace(/'/g, "\\'")}')">${escapeHtml(
        c
      )}</button>`;
    })
    .join("");
}

function renderProjects(category = "All") {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;

  const projectsArr = getProjects();
  const filtered =
    category === "All"
      ? projectsArr
      : projectsArr.filter((p) => Array.isArray(p.categories) && p.categories.includes(category));

  grid.innerHTML = filtered
    .map((p, i) => {
      const hasPreview = !!p.preview;
      const cats = (p.categories || []).map((c) => `<span class="cat-tag">${escapeHtml(c)}</span>`).join("");

      // Image and hover preview video (muted)
      const media = `
        <div class="project-media">
          <img class="static-img" src="${escapeHtml(p.image || "assets/projects/placeholder.png")}" alt="${escapeHtml(
        p.title || "Project"
      )}">
          ${
            hasPreview
              ? `<video class="preview-media" muted loop playsinline preload="metadata">
                   <source src="${escapeHtml(p.preview)}" type="video/mp4">
                 </video>
                 <button class="play-overlay-btn" onclick="toggleVideoPlayer(${i}, true)" aria-label="Play">▶</button>
                 <button class="close-player" onclick="toggleVideoPlayer(${i}, false)" aria-label="Close player">✕</button>`
              : ""
          }
        </div>
      `;

      const details = `
        <button class="details-toggle" onclick="toggleProject(${i})">
          Details <span class="arrow">▾</span>
        </button>
        <div class="details-content">
          <p>${escapeHtml(p.fullDescription || "")}</p>
          ${
            p.github
              ? `<a class="github-btn" href="${escapeHtml(p.github)}" target="_blank" rel="noopener">View on GitHub</a>`
              : ""
          }
        </div>
      `;

      return `
        <div id="project-${i}" class="project-card ${hasPreview ? "has-preview" : ""}">
          ${media}
          <div class="project-body">
            <div class="project-categories">${cats}</div>
            <h3>${escapeHtml(p.title || "")}</h3>
            <p class="short-desc">${escapeHtml(p.shortDesc || "")}</p>
            ${details}
          </div>
        </div>
      `;
    })
    .join("");

  // Ensure preview videos autostart muted for hover effect
  qsa(".preview-media", grid).forEach((v) => v.play().catch(() => {}));
}

// expose for other calls if needed
window.renderFilters = renderFilters;
window.renderProjects = renderProjects;

// ------------------------------
// 2) BLOG — RENDER + MODAL
// ------------------------------

function renderBlogBlocks(blocks = []) {
  return (blocks || [])
    .map((b) => {
      if (!b || !b.type) return "";

      switch (b.type) {
        case "h3":
          return `<h3 class="blog-h3">${formatInline(b.text || "")}</h3>`;

        case "h4":
          return `<h4 class="blog-h4">${formatInline(b.text || "")}</h4>`;

        case "p":
          return `<p class="blog-p">${formatInline(b.text || "")}</p>`;

        case "ul":
          return `<ul class="blog-ul">${(b.items || []).map((it) => `<li>${formatInline(it)}</li>`).join("")}</ul>`;

        case "quote":
          return `<blockquote class="blog-quote">${formatInline(b.text || "")}</blockquote>`;

        case "callout":
          return `
            <div class="blog-callout ${b.variant ? `is-${b.variant}` : ""}">
              ${b.title ? `<div class="blog-callout-title">${formatInline(b.title)}</div>` : ""}
              <div class="blog-callout-body">${formatInline(b.text || "")}</div>
            </div>
          `;

        case "divider":
          return `<hr class="blog-divider" />`;

        case "img":
          return `
            <figure class="blog-figure">
              <img class="blog-img" src="${escapeHtml(b.src || "")}" alt="${escapeHtml(b.alt || "")}">
              ${b.caption ? `<figcaption class="blog-caption">${formatInline(b.caption)}</figcaption>` : ""}
            </figure>
          `;

        case "video":
          return `
            <div class="blog-video">
              <video controls playsinline preload="metadata" ${b.poster ? `poster="${escapeHtml(b.poster)}"` : ""}>
                <source src="${escapeHtml(b.src || "")}" type="video/mp4">
              </video>
              ${b.caption ? `<div class="blog-caption">${formatInline(b.caption)}</div>` : ""}
            </div>
          `;

        case "code":
          return `<pre class="blog-code"><code>${escapeHtml(b.code || "")}</code></pre>`;

        case "links":
          return `
            <div class="blog-links">
              ${(b.items || [])
                .map((x) => {
                  // accept either `href` or `url`
                  const href = x.href || x.url || "#";
                  return `
                    <a class="blog-link" href="${escapeHtml(href)}" target="_blank" rel="noopener">
                      <span class="blog-link-label">${formatInline(x.label || "Link")}</span>
                      <span class="blog-link-arrow">→</span>
                    </a>
                  `;
                })
                .join("")}
            </div>
          `;

        default:
          return "";
      }
    })
    .join("");
}

function getBlogPosts() {
  // support both:
  // - const blogPosts = [...]
  // - window.blogPosts = [...]
  if (Array.isArray(window.blogPosts)) return window.blogPosts;
  if (typeof blogPosts !== "undefined" && Array.isArray(blogPosts)) return blogPosts;
  return [];
}

function openBlogPost(postId) {
  const posts = getBlogPosts();
  const post = posts.find((p) => p.id === postId);
  if (!post) return;

  const overlay = document.getElementById("blogModalOverlay");
  const modal = document.getElementById("blogModal");
  const content = document.getElementById("blogModalContent");
  if (!overlay || !modal || !content) return;

  const tagsHtml = (post.tags || []).map((t) => `<span class="blog-tag">${escapeHtml(t)}</span>`).join("");
  const mins = estimateReadingTimeFromBlocks(post.content);

  content.innerHTML = `
    <div class="blog-modal-header">
      <div class="blog-meta">
        <span class="blog-date">${escapeHtml(post.date || "")}</span>
        <span class="blog-dot">•</span>
        <span class="blog-reading">~${mins} min read</span>
      </div>

      <h2 class="blog-title">${formatInline(post.title || "")}</h2>
      ${post.excerpt ? `<p class="blog-excerpt">${formatInline(post.excerpt)}</p>` : ""}
      ${tagsHtml ? `<div class="blog-tags">${tagsHtml}</div>` : ""}
    </div>

    <div class="blog-content">
      ${renderBlogBlocks(post.content || [])}
    </div>
  `;

  // Support both CSS modal variants
  overlay.classList.add("open");
  modal.classList.add("open");
  modal.classList.add("is-open");

  document.body.classList.add("modal-open");
}

function closeBlogModal() {
  const overlay = document.getElementById("blogModalOverlay");
  const modal = document.getElementById("blogModal");
  const content = document.getElementById("blogModalContent");

  if (content) content.innerHTML = "";

  if (overlay) overlay.classList.remove("open");
  if (modal) {
    modal.classList.remove("open");
    modal.classList.remove("is-open");
  }

  document.body.classList.remove("modal-open");
}

function renderBlogs() {
  // Accept both ids (#blogList/#blogEmpty) and old names (#blogsGrid/#blogsEmpty)
  const listEl = document.getElementById("blogList") || document.getElementById("blogsGrid");
  const emptyEl = document.getElementById("blogEmpty") || document.getElementById("blogsEmpty");
  const posts = getBlogPosts();

  if (!listEl) return;

  if (!posts.length) {
    listEl.innerHTML = "";
    if (emptyEl) emptyEl.style.display = "block";
    return;
  }

  if (emptyEl) emptyEl.style.display = "none";

  const sorted = [...posts].sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));

  listEl.innerHTML = sorted
    .map((p) => {
      const cover = p.cover
        ? `<div class="blog-card-cover"><img src="${escapeHtml(p.cover)}" alt="${escapeHtml(p.title || "Blog cover")}"></div>`
        : `<div class="blog-card-cover"><img src="assets/projects/placeholder.png" alt="Cover"></div>`;

      const tags = (p.tags || []).slice(0, 4).map((t) => `<span class="blog-tag">${escapeHtml(t)}</span>`).join("");
      const mins = estimateReadingTimeFromBlocks(p.content);

      return `
        <article class="blog-card">
          ${cover}
          <div class="blog-card-body">
            <div class="blog-meta">
              <span>${escapeHtml(p.date || "")}</span>
              <span class="blog-dot">•</span>
              <span>~${mins} min read</span>
            </div>

            <h3 class="blog-card-title">${escapeHtml(p.title || "")}</h3>
            ${p.excerpt ? `<p class="blog-card-excerpt">${escapeHtml(p.excerpt)}</p>` : ""}

            ${tags ? `<div class="blog-tags">${tags}</div>` : ""}

            <button class="blog-read-btn" type="button" onclick="openBlogPost('${escapeHtml(p.id).replace(/'/g, "\\'")}')">Read</button>
          </div>
        </article>
      `;
    })
    .join("");
}

// expose
window.openBlogPost = openBlogPost;
window.closeBlogModal = closeBlogModal;
window.renderBlogs = renderBlogs;

// ------------------------------
// 3) INIT (DOMContentLoaded)
// ------------------------------

document.addEventListener("DOMContentLoaded", () => {
  // Footer year (if present)
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Make brand clickable → go to #home (or top)
  const brand = qs(".nav-brand");
  if (brand) {
    brand.style.cursor = "pointer";
    brand.addEventListener("click", () => scrollToHash("#home"));
  }

  // Smooth scrolling for internal anchors
  qsa('a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const href = a.getAttribute("href");
      if (!href || href === "#") return;
      const target = document.getElementById(href.replace("#", ""));
      if (!target) return;
      e.preventDefault();
      scrollToHash(href);
    });
  });

  // Projects render
  renderFilters();
  renderProjects(currentFilter);

  // Blog render
  renderBlogs();

  // Blog modal listeners
  const overlay = document.getElementById("blogModalOverlay");
  const modal = document.getElementById("blogModal");
  const closeBtn = document.getElementById("blogModalClose");

  if (closeBtn) closeBtn.addEventListener("click", closeBlogModal);

  // close when clicking outside the modal card
  if (overlay && modal) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeBlogModal();
    });
  }

  // ESC closes modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeBlogModal();
  });

  // ------------------------------
  // Hero interactions (logo, robot, scroll invite, mobile nav)
  // ------------------------------

  // 1) Click on top-left brand => go to top / home section
  // (HTML is already an <a href="#home">, but we ensure smooth behavior + closes mobile menu)
  const brandLink = document.querySelector(".nav-brand");
  if (brandLink) {
    brandLink.addEventListener("click", () => {
      const nav = document.getElementById("primary-navigation");
      if (nav) nav.classList.remove("open");
      const btn = document.querySelector(".nav-toggle");
      if (btn) btn.setAttribute("aria-expanded", "false");
    });
  }

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("primary-navigation");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // 2) Robot: replay wave on click
  const heroRobot = document.getElementById("hero-robot");
  if (heroRobot) {
    const replayWave = () => {
      // Restart CSS animation reliably
      heroRobot.style.animation = "none";
      // Force reflow
      void heroRobot.offsetHeight;
      heroRobot.style.animation = "robot-wave 1.5s ease-in-out 3";
    };
    heroRobot.addEventListener("click", replayWave);
  }

  // 6) "Scroll to explore" disappears after user scrolls a bit
  const scrollInvite = document.querySelector(".scroll-invite");
  const updateScrollInvite = () => {
    if (!scrollInvite) return;
    const hide = window.scrollY > 80;
    scrollInvite.classList.toggle("hidden", hide);
  };
  window.addEventListener("scroll", updateScrollInvite, { passive: true });
  updateScrollInvite();


});