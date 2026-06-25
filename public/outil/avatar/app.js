/* Avatar Absent · LaSuite — vanilla JS */
(() => {
  "use strict";

  const SIZE = 1024;
  const R = SIZE / 2;

  // Lucide icons (ISC) — viewBox 24, stroke 2
  // Phosphor Icons — raw SVG paths (viewBox 0 0 256 256, fill style)
  const ICONS = {
    vacances:
      "M237.79,53.23a66.86,66.86,0,0,0-97.74,0,72.21,72.21,0,0,0-12.05,17,72.21,72.21,0,0,0-12-17,66.86,66.86,0,0,0-97.74,0,8,8,0,0,0,2.6,12.85L77,90.55a71.42,71.42,0,0,0-43.36,33.21,70.64,70.64,0,0,0-7.2,54.32A8,8,0,0,0,39,182.36l81-61.68V224a8,8,0,0,0,16,0V120.68l81,61.68a8,8,0,0,0,12.57-4.28,70.64,70.64,0,0,0-7.2-54.32A71.42,71.42,0,0,0,179,90.55l56.22-24.47a8,8,0,0,0,2.6-12.85ZM67.08,48a51.13,51.13,0,0,1,37.28,16.26,56.53,56.53,0,0,1,14.26,26.93L39,56.53A50.5,50.5,0,0,1,67.08,48ZM40,161.5a54.82,54.82,0,0,1,7.47-29.7,55.55,55.55,0,0,1,34-25.89A56.52,56.52,0,0,1,96.1,104a55.82,55.82,0,0,1,16.23,2.41ZM208.5,131.8A54.82,54.82,0,0,1,216,161.5l-72.3-55.1a56.3,56.3,0,0,1,64.83,25.4ZM137.38,91.19a56.53,56.53,0,0,1,14.26-26.93A51.13,51.13,0,0,1,188.92,48,50.5,50.5,0,0,1,217,56.53Z",
    conges:
      "M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z",
    deplacement:
      "M235.58,128.84,160,91.06V48a32,32,0,0,0-64,0V91.06L20.42,128.84A8,8,0,0,0,16,136v32a8,8,0,0,0,9.57,7.84L96,161.76v18.93L82.34,194.34A8,8,0,0,0,80,200v32a8,8,0,0,0,11,7.43l37-14.81,37,14.81A8,8,0,0,0,176,232V200a8,8,0,0,0-2.34-5.66L160,180.69V161.76l70.43,14.08A8,8,0,0,0,240,168V136A8,8,0,0,0,235.58,128.84ZM224,158.24l-70.43-14.08A8,8,0,0,0,144,152v32a8,8,0,0,0,2.34,5.66L160,203.31v16.87l-29-11.61a8,8,0,0,0-5.94,0L96,220.18V203.31l13.66-13.65A8,8,0,0,0,112,184V152a8,8,0,0,0-9.57-7.84L32,158.24v-17.3l75.58-37.78A8,8,0,0,0,112,96V48a16,16,0,0,1,32,0V96a8,8,0,0,0,4.42,7.16L224,140.94Z",
    teletravail:
      "M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z",
    pause:
      "M80,56V24a8,8,0,0,1,16,0V56a8,8,0,0,1-16,0Zm40,8a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,120,64Zm32,0a8,8,0,0,0,8-8V24a8,8,0,0,0-16,0V56A8,8,0,0,0,152,64Zm96,56v8a40,40,0,0,1-37.51,39.91,96.59,96.59,0,0,1-27,40.09H208a8,8,0,0,1,0,16H32a8,8,0,0,1,0-16H56.54A96.3,96.3,0,0,1,24,136V88a8,8,0,0,1,8-8H208A40,40,0,0,1,248,120ZM200,96H40v40a80.27,80.27,0,0,0,45.12,72h69.76A80.27,80.27,0,0,0,200,136Zm32,24a24,24,0,0,0-16-22.62V136a95.78,95.78,0,0,1-1.2,15A24,24,0,0,0,232,128Z",
    formation:
      "M251.76,88.94l-120-64a8,8,0,0,0-7.52,0l-120,64a8,8,0,0,0,0,14.12L32,117.87v48.42a15.91,15.91,0,0,0,4.06,10.65C49.16,191.53,78.51,216,128,216a130,130,0,0,0,48-8.76V240a8,8,0,0,0,16,0V199.51a115.63,115.63,0,0,0,27.94-22.57A15.91,15.91,0,0,0,224,166.29V117.87l27.76-14.81a8,8,0,0,0,0-14.12ZM128,200c-43.27,0-68.72-21.14-80-33.71V126.4l76.24,40.66a8,8,0,0,0,7.52,0L176,143.47v46.34C163.4,195.69,147.52,200,128,200Zm80-33.75a97.83,97.83,0,0,1-16,14.25V134.93l16-8.53ZM188,118.94l-.22-.13-56-29.87a8,8,0,0,0-7.52,14.12L171,128l-43,22.93L25,96,128,41.07,231,96Z",
    rtt:
      "M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-96-88v64a8,8,0,0,1-16,0V132.94l-4.42,2.22a8,8,0,0,1-7.16-14.32l16-8A8,8,0,0,1,112,120Zm59.16,30.45L152,176h16a8,8,0,0,1,0,16H136a8,8,0,0,1-6.4-12.8l28.78-38.37A8,8,0,1,0,145.07,132a8,8,0,1,1-13.85-8A24,24,0,0,1,176,136,23.76,23.76,0,0,1,171.16,150.45Z",
    indispo:
      "M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm88,104a87.56,87.56,0,0,1-20.41,56.28L71.72,60.4A88,88,0,0,1,216,128ZM40,128A87.56,87.56,0,0,1,60.41,71.72L184.28,195.6A88,88,0,0,1,40,128Z",
    parentalite:
      "M160,32h-8a16,16,0,0,0-16,16v56H55.2A40.07,40.07,0,0,0,16,72a8,8,0,0,0,0,16,24,24,0,0,1,24,24,80.09,80.09,0,0,0,80,80h40a80,80,0,0,0,0-160Zm63.48,72H166.81l41.86-33.49A63.73,63.73,0,0,1,223.48,104ZM160,48a63.59,63.59,0,0,1,36.69,11.61L152,95.35V48Zm0,128H120a64.09,64.09,0,0,1-63.5-56h167A64.09,64.09,0,0,1,160,176Zm-56,48a16,16,0,1,1-16-16A16,16,0,0,1,104,224Zm104,0a16,16,0,1,1-16-16A16,16,0,0,1,208,224Z",
  };

  const REASONS = [
    { id: "vacances",    label: "Vacances"    },
    { id: "conges",      label: "Congés"      },
    { id: "deplacement", label: "Déplacement" },
    { id: "teletravail", label: "Télétravail" },
    { id: "formation",   label: "Formation"   },
    { id: "rtt",         label: "RTT"         },
    { id: "indispo",     label: "Indisponible"},
    { id: "parentalite", label: "Parentalité" },
  ];

  const PALETTE = {
    blue: "#3558A2",
    red:  "#DA1010",
    navy: "#1E3A85",
  };

  const state = {
    image: null,
    reasonId: "vacances",
    scheme: "blue",
    alpha: 0.55,
    zoom: 1,
    offsetX: 0,
    offsetY: 0,
  };

  const $ = (s) => document.querySelector(s);
  const canvas = $("#avatar");
  const ctx = canvas.getContext("2d");

  function render() {
    ctx.clearRect(0, 0, SIZE, SIZE);

    // Clip rond sur tout
    ctx.save();
    ctx.beginPath();
    ctx.arc(R, R, R, 0, Math.PI * 2);
    ctx.closePath();
    ctx.clip();

    // Photo / placeholder
    if (state.image) drawCover(state.image, state.zoom, state.offsetX, state.offsetY);
    else drawPlaceholder();

    // Overlay couleur
    ctx.fillStyle = withAlpha(PALETTE[state.scheme], state.alpha);
    ctx.fillRect(0, 0, SIZE, SIZE);

    // Icône blanche centrée
    drawIcon(R, R, 460, "#FFFFFF");

    ctx.restore();
  }

  function drawCover(img, zoom, offX, offY) {
    const base = Math.max(SIZE / img.width, SIZE / img.height);
    const s = base * zoom;
    const w = img.width * s, h = img.height * s;
    const dx = (SIZE - w) / 2 + offX * (w - SIZE) * 0.5;
    const dy = (SIZE - h) / 2 + offY * (h - SIZE) * 0.5;
    ctx.drawImage(img, dx, dy, w, h);
  }

  function drawPlaceholder() {
    const g = ctx.createLinearGradient(0, 0, 0, SIZE);
    g.addColorStop(0, "#E9EDF7"); g.addColorStop(1, "#C8D1E6");
    ctx.fillStyle = g; ctx.fillRect(0, 0, SIZE, SIZE);
    ctx.fillStyle = "#9AA6C4";
    ctx.beginPath(); ctx.arc(R, SIZE * 0.4, 150, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc(R, SIZE * 1.0, 340, 0, Math.PI * 2); ctx.fill();
  }

  function drawIcon(cx, cy, size, color) {
    const d = ICONS[state.reasonId]; if (!d) return;
    const scale = size / 256;
    ctx.save();
    ctx.translate(cx - size / 2, cy - size / 2);
    ctx.scale(scale, scale);
    ctx.fillStyle = color;
    ctx.fill(new Path2D(d));
    ctx.restore();
  }

  function withAlpha(hex, a) {
    const n = parseInt(hex.slice(1), 16);
    return `rgba(${(n>>16)&255},${(n>>8)&255},${n&255},${a})`;
  }

  function buildReasons() {
    const wrap = $("#reasons");
    wrap.innerHTML = "";
    REASONS.forEach((r) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "reason" + (r.id === state.reasonId ? " is-active" : "");
      btn.dataset.id = r.id;
      const d = ICONS[r.id];
      btn.innerHTML =
        `<svg viewBox="0 0 256 256" fill="currentColor"><path d="${d}"/></svg>` +
        `<span>${r.label}</span>`;
      btn.addEventListener("click", () => {
        state.reasonId = r.id;
        wrap.querySelectorAll(".reason").forEach((el) => el.classList.toggle("is-active", el.dataset.id === r.id));
        render();
      });
      wrap.appendChild(btn);
    });
  }

  function bindSegmented(rootSel, key) {
    const root = $(rootSel);
    root.addEventListener("click", (e) => {
      const btn = e.target.closest(".seg"); if (!btn) return;
      state[key] = btn.dataset.value;
      root.querySelectorAll(".seg").forEach((el) => el.classList.toggle("is-active", el === btn));
      render();
    });
  }

  function handleFile(file) {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        state.image = img;
        $("#adjust").hidden = false;
        const dl = $("#btn-download");
        dl.textContent = "Télécharger PNG";
        dl.dataset.mode = "download";
        $("#btn-copy").hidden = false;
        render();
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  }

  function init() {
    buildReasons();
    bindSegmented("#scheme", "scheme");

    const file = $("#file");
    file.addEventListener("change", (e) => handleFile(e.target.files[0]));
    const dz = $("#dropzone");
    ["dragover","dragenter"].forEach((ev) => dz.addEventListener(ev, (e) => { e.preventDefault(); dz.classList.add("is-drag"); }));
    ["dragleave","drop"].forEach((ev) => dz.addEventListener(ev, () => dz.classList.remove("is-drag")));
    dz.addEventListener("drop", (e) => { e.preventDefault(); handleFile(e.dataTransfer.files[0]); });

    const bindSlider = (id, key, fmt = (v) => v.toFixed(2)) => {
      const el = $("#" + id), out = $("#" + id + "-val");
      el.addEventListener("input", () => { state[key] = Number(el.value); out.textContent = fmt(state[key]); render(); });
    };
    bindSlider("zoom", "zoom");
    bindSlider("offx", "offsetX");
    bindSlider("offy", "offsetY");
    bindSlider("alpha", "alpha");

    $("#btn-download").addEventListener("click", () => {
      if (!state.image) { $("#file").click(); return; }
      canvas.toBlob((blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = `avatar-absent-${state.reasonId}.png`; a.click();
        URL.revokeObjectURL(url);
      }, "image/png");
    });

    $("#btn-copy").addEventListener("click", () => {
      canvas.toBlob(async (blob) => {
        if (!blob || !navigator.clipboard || !window.ClipboardItem) return;
        try {
          await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
          const b = $("#btn-copy"), old = b.textContent;
          b.textContent = "Copié ✓"; setTimeout(() => (b.textContent = old), 1400);
        } catch {}
      }, "image/png");
    });

    $("#btn-reset").addEventListener("click", () => {
      state.image = null; state.reasonId = "vacances"; state.scheme = "blue";
      state.alpha = 0.55; state.zoom = 1; state.offsetX = 0; state.offsetY = 0;
      $("#file").value = "";
      $("#zoom").value = 1; $("#zoom-val").textContent = "1.00";
      $("#offx").value = 0; $("#offx-val").textContent = "0.00";
      $("#offy").value = 0; $("#offy-val").textContent = "0.00";
      $("#alpha").value = 0.55; $("#alpha-val").textContent = "0.55";
      $("#adjust").hidden = true;
      const dl = $("#btn-download"); dl.textContent = "Envoyer une photo"; dl.dataset.mode = "upload";
      $("#btn-copy").hidden = true;
      document.querySelectorAll("#scheme .seg").forEach((el) => el.classList.toggle("is-active", el.dataset.value === "blue"));
      buildReasons(); render();
    });

    render();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
