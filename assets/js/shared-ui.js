/**
 * Shared helpers for all 3 website concepts:
 * - HTML escaping & author highlighting
 * - Language persistence (EN default as requested)
 * - Accessible full-resolution Lightbox for Graphical Abstracts & Cover Art
 */
(function () {
  "use strict";

  function escapeHtml(text) {
    return String(text || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function highlightAuthor(authors) {
    return escapeHtml(authors).replace(
      /Dazaet Galicia-Badillo/g,
      "<strong>Dazaet Galicia-Badillo</strong>"
    );
  }

  function getInitialLang() {
    try {
      const saved = window.localStorage.getItem("dgb_lang_v2");
      if (saved === "en" || saved === "es") return saved;
    } catch (_) {}
    return (window.SITE_DATA && window.SITE_DATA.config.defaultLang) || "en";
  }

  function saveLang(lang) {
    try {
      window.localStorage.setItem("dgb_lang_v2", lang);
    } catch (_) {}
  }

  function filterPublications(list, opts, lang) {
    const q = (opts.search || "").trim().toLowerCase();
    return list.filter((p) => {
      if (opts.category && opts.category !== "all" && !p.categories.includes(opts.category)) {
        return false;
      }
      if (opts.firstAuthorOnly && !p.firstAuthor) {
        return false;
      }
      if (q) {
        const hay = [
          String(p.number),
          String(p.year),
          p.title,
          p.authors,
          p.journal,
          p.doi,
          p.summary[lang] || ""
        ]
          .join(" ")
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }

  // Reusable Lightbox for Graphical Abstracts
  function createLightbox() {
    const existing = document.getElementById("dgb-lightbox");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "dgb-lightbox";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Graphical abstract viewer");
    modal.hidden = true;
    modal.style.cssText =
      "position:fixed;inset:0;z-index:9999;background:rgba(8,10,14,0.88);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:clamp(10px,3vw,24px);";

    modal.innerHTML = `
      <div style="max-width:980px;width:100%;max-height:92vh;max-height:92dvh;display:flex;flex-direction:column;background:#ffffff;color:#14181f;border-radius:6px;overflow:hidden;box-shadow:0 30px 70px rgba(0,0,0,0.5);">
        <div style="flex-shrink:0;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:12px 16px;border-bottom:1px solid #e2e0d8;background:#f7f6f2;">
          <div id="dgb-lb-meta" style="font-family:'IBM Plex Mono','JetBrains Mono',monospace;font-size:12px;color:#4a5568;min-width:0;overflow-wrap:anywhere;"></div>
          <button type="button" id="dgb-lb-close" aria-label="Close" style="flex-shrink:0;white-space:nowrap;border:1px solid #cbd5e1;background:#ffffff;color:#111315;padding:6px 12px;cursor:pointer;font-family:inherit;font-size:13px;border-radius:3px;">Close [X]</button>
        </div>
        <div style="flex:1 1 auto;min-height:0;padding:14px;background:#ffffff;display:flex;justify-content:center;align-items:center;overflow:auto;">
          <img id="dgb-lb-img" alt="" style="max-width:100%;max-height:58vh;object-fit:contain;display:block;">
        </div>
        <div style="flex-shrink:0;max-height:28vh;overflow-y:auto;padding:12px 16px 16px;border-top:1px solid #e2e0d8;background:#faf9f5;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:8px;">
          <p id="dgb-lb-title" style="margin:0;font-size:13.5px;font-weight:600;max-width:740px;line-height:1.4;"></p>
          <a id="dgb-lb-doi" href="#" target="_blank" rel="noopener noreferrer" style="font-family:'IBM Plex Mono','JetBrains Mono',monospace;font-size:12px;color:#164e63;font-weight:600;overflow-wrap:anywhere;">Open DOI</a>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    function close() {
      modal.hidden = true;
      modal.style.display = "none";
      document.body.style.overflow = "";
    }

    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
    document.getElementById("dgb-lb-close").addEventListener("click", close);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !modal.hidden) close();
    });

    return {
      open(pub) {
        if (!pub) return;
        document.getElementById("dgb-lb-meta").textContent = `#${String(pub.number).padStart(2, "0")}  |  ${pub.journal}  (${pub.citation})`;
        const img = document.getElementById("dgb-lb-img");
        img.src = pub.image;
        img.alt = `Graphical abstract - ${pub.title}`;
        document.getElementById("dgb-lb-title").textContent = pub.title;
        const doi = document.getElementById("dgb-lb-doi");
        doi.href = `https://doi.org/${encodeURIComponent(pub.doi)}`;
        doi.textContent = `DOI: ${pub.doi}`;
        modal.hidden = false;
        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
      }
    };
  }

  window.SiteUtils = {
    escapeHtml,
    highlightAuthor,
    getInitialLang,
    saveLang,
    filterPublications,
    createLightbox
  };
})();
