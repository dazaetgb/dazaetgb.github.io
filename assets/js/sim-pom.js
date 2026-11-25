/**
 * SIMULATOR 2 (OPTION 2 - UPGRADED):
 * High-craft Cross-Polarized Optical Microscopy (POM) Hot-Stage with
 * photorealistic faceted birefringent crystal prisms, Michel-Levy color
 * gradients, internal cleavage striations, objective lens vignette, elastic
 * strain bowing before ballistic thermosalient jumping, and shockwave rings.
 */
(function () {
  "use strict";

  function createPomStage(canvas, opts) {
    if (!canvas) return null;
    const ctx = canvas.getContext("2d");
    let width = 1200, height = 680, dpr = Math.min(window.devicePixelRatio || 1, 2);
    let polarizerDeg = 32;
    let targetPol = 32;
    let tempK = 298;
    let rafId = null;
    const reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const crystals = [];
    const rings = [];
    const sparks = [];

    function seedCrystals() {
      crystals.length = 0;
      const presets = [
        [0.64, 0.24, 118, 22, 0.42, 0.25],
        [0.78, 0.42, 134, 24, 1.38, 0.58],
        [0.54, 0.52, 96, 18, 0.08, 0.85],
        [0.72, 0.68, 126, 21, 2.25, 1.15],
        [0.86, 0.26, 86, 16, 2.75, 1.48],
        [0.44, 0.28, 92, 17, 1.92, 1.72],
        [0.34, 0.74, 108, 19, 0.82, 0.44],
        [0.58, 0.82, 112, 20, 2.95, 1.05],
        [0.84, 0.76, 90, 16, 0.55, 1.35],
        [0.24, 0.20, 78, 14, 1.12, 0.72],
        [0.48, 0.66, 82, 15, 1.65, 1.55]
      ];
      presets.forEach(([bx, by, len, wid, ang, biref]) => {
        crystals.push({
          baseX: bx, baseY: by, x: 0, y: 0, vx: 0, vy: 0, z: 0, vz: 0,
          len, wid, angle: ang, vAngle: 0, biref, strain: 0
        });
      });
      resetPositions();
    }

    function resetPositions() {
      crystals.forEach((c) => {
        c.x = c.baseX * width;
        c.y = c.baseY * height;
        c.vx = 0; c.vy = 0; c.z = 0; c.vz = 0; c.vAngle = 0; c.strain = 0;
      });
    }

    function resize() {
      const r = canvas.getBoundingClientRect();
      if (!r.width || !r.height) return;
      width = r.width;
      height = r.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      if (!crystals.length) seedCrystals();
      else resetPositions();
    }

    function triggerJump(ox, oy) {
      tempK = 415;
      rings.push({
        x: ox !== undefined ? ox : width * 0.66,
        y: oy !== undefined ? oy : height * 0.50,
        r: 12,
        life: 1.0
      });
      crystals.forEach((c) => {
        const dx = ox !== undefined ? c.x - ox : (Math.random() - 0.5) * 260;
        const dy = oy !== undefined ? c.y - oy : (Math.random() - 0.5) * 260;
        const ang = Math.atan2(dy, dx) + (Math.random() - 0.5) * 0.7;
        const pwr = 5.5 + Math.random() * 8.5;
        c.vx = Math.cos(ang) * pwr * 0.6;
        c.vy = Math.sin(ang) * pwr * 0.6;
        c.vz = 6.2 + Math.random() * 6.8;
        c.vAngle = (Math.random() - 0.5) * 0.14;
        c.strain = 1.0;
        for (let k = 0; k < 4; k++) {
          sparks.push({
            x: c.x, y: c.y,
            vx: (Math.random() - 0.5) * 3.5,
            vy: (Math.random() - 0.5) * 3.5,
            life: 0.9
          });
        }
      });
    }

    function drawMicroscopeField() {
      const cx = width * 0.62, cy = height * 0.50;
      const rad = Math.min(width, height) * 0.56;

      // Subtle polarized darkfield background gradient
      const bg = ctx.createRadialGradient(cx, cy, rad * 0.08, cx, cy, rad * 1.15);
      bg.addColorStop(0, "#0b111a");
      bg.addColorStop(0.68, "#06080d");
      bg.addColorStop(1, "#020305");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      // Eyepiece optical ring & polarizer crosshairs
      ctx.save();
      ctx.strokeStyle = "rgba(186, 218, 240, 0.11)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(cx, cy, rad * 0.78, 0, Math.PI * 2);
      ctx.stroke();

      const a = (polarizerDeg * Math.PI) / 180;
      ctx.beginPath();
      ctx.moveTo(cx - Math.cos(a) * rad * 0.78, cy - Math.sin(a) * rad * 0.78);
      ctx.lineTo(cx + Math.cos(a) * rad * 0.78, cy + Math.sin(a) * rad * 0.78);
      ctx.moveTo(cx + Math.sin(a) * rad * 0.78, cy - Math.cos(a) * rad * 0.78);
      ctx.lineTo(cx - Math.sin(a) * rad * 0.78, cy + Math.cos(a) * rad * 0.78);
      ctx.stroke();

      // Scale bar (200 um)
      ctx.strokeStyle = "rgba(229, 169, 60, 0.55)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(width - 130, height - 92);
      ctx.lineTo(width - 50, height - 92);
      ctx.stroke();
      ctx.fillStyle = "rgba(229, 169, 60, 0.75)";
      ctx.font = "600 10px 'JetBrains Mono', monospace";
      ctx.textAlign = "right";
      ctx.fillText("200 um", width - 50, height - 98);
      ctx.restore();
    }

    function drawFacetedCrystal(c, polRad) {
      const rel = Math.sin(2 * (c.angle - polRad));
      const ext = 0.16 + 0.84 * rel * rel; // real cross-polarizer extinction law!
      const hue1 = (178 + c.biref * 145 + polarizerDeg * 1.4 + (tempK - 298) * 0.45) % 360;
      const hue2 = (hue1 + 42) % 360;
      const hue3 = (hue1 + 82) % 360;

      const scale = 1 + c.z * 0.0085;
      const stretch = 1 + Math.max(0, tempK - 298) * 0.0012;
      const L = c.len * scale * stretch;
      const W = c.wid * scale;
      const tip = W * 0.92;

      ctx.save();
      ctx.translate(c.x, c.y - c.z * 0.58);
      ctx.rotate(c.angle);

      // Soft cast shadow on hot stage during jump
      if (c.z > 0.8) {
        ctx.save();
        ctx.translate(0, c.z * 0.65);
        ctx.fillStyle = "rgba(0, 0, 0, 0.52)";
        ctx.beginPath();
        ctx.ellipse(0, 0, L * 0.46, W * 0.36, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Outer birefringent halo
      ctx.shadowColor = `hsla(${hue1}, 92%, 58%, ${ext * 0.42})`;
      ctx.shadowBlur = 18;

      // Full prism body with Michel-Levy prismatic gradient
      const bodyGrad = ctx.createLinearGradient(-L * 0.5, -W * 0.5, L * 0.5, W * 0.5);
      bodyGrad.addColorStop(0, `hsla(${hue1}, 84%, ${18 + ext * 44}%, ${0.35 + ext * 0.58})`);
      bodyGrad.addColorStop(0.5, `hsla(${hue2}, 90%, ${24 + ext * 50}%, ${0.42 + ext * 0.54})`);
      bodyGrad.addColorStop(1, `hsla(${hue3}, 82%, ${20 + ext * 42}%, ${0.35 + ext * 0.58})`);

      ctx.beginPath();
      ctx.moveTo(-L * 0.5, 0);
      ctx.lineTo(-L * 0.5 + tip, -W * 0.5);
      ctx.lineTo(L * 0.5 - tip, -W * 0.5);
      ctx.lineTo(L * 0.5, 0);
      ctx.lineTo(L * 0.5 - tip, W * 0.5);
      ctx.lineTo(-L * 0.5 + tip, W * 0.5);
      ctx.closePath();
      ctx.fillStyle = bodyGrad;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Top bright facet bevel (gives genuine 3D crystalline depth!)
      ctx.beginPath();
      ctx.moveTo(-L * 0.5, 0);
      ctx.lineTo(-L * 0.5 + tip, -W * 0.5);
      ctx.lineTo(L * 0.5 - tip, -W * 0.5);
      ctx.lineTo(L * 0.5, 0);
      ctx.lineTo(L * 0.5 - tip * 0.9, -W * 0.08);
      ctx.lineTo(-L * 0.5 + tip * 0.9, -W * 0.08);
      ctx.closePath();
      ctx.fillStyle = `rgba(255, 255, 255, ${0.08 + ext * 0.24})`;
      ctx.fill();

      // Internal crystallographic cleavage lines
      ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 + ext * 0.22})`;
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(-L * 0.5 + tip * 0.5, -W * 0.14);
      ctx.lineTo(L * 0.5 - tip * 0.5, -W * 0.14);
      ctx.moveTo(-L * 0.5 + tip * 0.6, W * 0.18);
      ctx.lineTo(L * 0.5 - tip * 0.6, W * 0.18);
      ctx.stroke();

      // Specular crystalline rim
      ctx.beginPath();
      ctx.moveTo(-L * 0.5, 0);
      ctx.lineTo(-L * 0.5 + tip, -W * 0.5);
      ctx.lineTo(L * 0.5 - tip, -W * 0.5);
      ctx.lineTo(L * 0.5, 0);
      ctx.lineTo(L * 0.5 - tip, W * 0.5);
      ctx.lineTo(-L * 0.5 + tip, W * 0.5);
      ctx.closePath();
      ctx.strokeStyle = `hsla(${hue2}, 95%, ${65 + ext * 25}%, ${0.35 + ext * 0.6})`;
      ctx.lineWidth = 1.25;
      ctx.stroke();

      ctx.restore();
    }

    function frame() {
      polarizerDeg += (targetPol - polarizerDeg) * 0.08;
      tempK += (298 - tempK) * 0.012;
      const polRad = (polarizerDeg * Math.PI) / 180;

      ctx.save();
      ctx.scale(dpr, dpr);
      drawMicroscopeField();

      // Acoustic/thermal shockwave rings
      for (let i = rings.length - 1; i >= 0; i--) {
        const rg = rings[i];
        rg.r += 7.5;
        rg.life *= 0.92;
        if (rg.life < 0.03) { rings.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(rg.x, rg.y, rg.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(229, 169, 60, ${rg.life * 0.55})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Sparks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const sp = sparks[i];
        sp.x += sp.vx; sp.y += sp.vy; sp.life *= 0.93;
        if (sp.life < 0.03) { sparks.splice(i, 1); continue; }
        ctx.beginPath();
        ctx.arc(sp.x, sp.y, 1.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(254, 240, 138, ${sp.life})`;
        ctx.fill();
      }

      crystals.forEach((c) => {
        if (!reduced) {
          if (c.z > 0 || c.vz > 0) {
            c.x += c.vx; c.y += c.vy; c.z += c.vz; c.vz -= 0.42; c.angle += c.vAngle;
            if (c.z <= 0) {
              c.z = 0;
              c.vz = Math.abs(c.vz) > 1.8 ? Math.abs(c.vz) * 0.34 : 0;
              c.vx *= 0.56; c.vy *= 0.56; c.vAngle *= 0.45;
            }
          } else {
            c.vx *= 0.88; c.vy *= 0.88;
            c.x += c.vx; c.y += c.vy;
          }
          if (c.x < 45) { c.x = 45; c.vx = Math.abs(c.vx) * 0.6; }
          if (c.x > width - 45) { c.x = width - 45; c.vx = -Math.abs(c.vx) * 0.6; }
          if (c.y < 45) { c.y = 45; c.vy = Math.abs(c.vy) * 0.6; }
          if (c.y > height - 45) { c.y = height - 45; c.vy = -Math.abs(c.vy) * 0.6; }
        }
        drawFacetedCrystal(c, polRad);
      });

      ctx.restore();
      if (opts && typeof opts.onReadout === "function") {
        opts.onReadout(Math.round(polarizerDeg), Math.round(tempK));
      }
      rafId = window.requestAnimationFrame(frame);
    }

    canvas.addEventListener("mousemove", (e) => {
      const r = canvas.getBoundingClientRect();
      targetPol = ((e.clientX - r.left) / Math.max(1, r.width)) * 90;
    });
    canvas.addEventListener("click", (e) => {
      const r = canvas.getBoundingClientRect();
      triggerJump(e.clientX - r.left, e.clientY - r.top);
    });
    window.addEventListener("resize", resize);

    resize();
    frame();

    return {
      setPolarizer(deg) { targetPol = Number(deg) || 0; },
      triggerJump() { triggerJump(); },
      reset() { resetPositions(); tempK = 298; },
      destroy() {
        if (rafId) window.cancelAnimationFrame(rafId);
        window.removeEventListener("resize", resize);
      }
    };
  }

  window.PomStage = { create: createPomStage };
})();
