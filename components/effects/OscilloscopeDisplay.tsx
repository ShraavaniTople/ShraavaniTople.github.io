"use client";
import { useEffect, useRef } from "react";

const CYN = "#00B4D8";

function buildWaveform(W: number, H: number, t: number): [number, number][] {
  const cy = H / 2;
  const AMP = H * 0.3;
  const FREQ = 2.6;
  const SPEED = 1.15;
  const pts: [number, number][] = [];
  for (let x = 0; x <= W; x++) {
    const ph = (x / W) * FREQ * Math.PI * 2 - t * SPEED;
    const s =
      Math.sin(ph) * 0.72 +
      Math.sin(3 * ph) * 0.15 +
      Math.sin(5 * ph) * 0.04 +
      Math.sin(x * 0.55 + t * 2.6) * 0.027; // subtle noise
    pts.push([x, cy - s * AMP]);
  }
  return pts;
}

function drawFrame(ctx: CanvasRenderingContext2D, W: number, H: number, t: number) {
  // Background — semi-transparent so mesh gradient bleeds through
  ctx.clearRect(0, 0, W, H);
  ctx.fillStyle = "rgba(3,12,16,0.0)";
  ctx.fillRect(0, 0, W, H);

  const COLS = 10, ROWS = 8;
  const cw = W / COLS, ch = H / ROWS;

  // Minor subdivisions
  ctx.strokeStyle = "rgba(0,180,216,0.04)";
  ctx.lineWidth = 0.5;
  const SUB = 5;
  for (let i = 0; i <= COLS * SUB; i++) {
    if (i % SUB === 0) continue;
    const x = (i / SUB) * cw;
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let j = 0; j <= ROWS * SUB; j++) {
    if (j % SUB === 0) continue;
    const y = (j / SUB) * ch;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  // Major graticule
  ctx.strokeStyle = "rgba(0,180,216,0.09)";
  ctx.lineWidth = 1;
  for (let i = 0; i <= COLS; i++) {
    ctx.beginPath(); ctx.moveTo(i * cw, 0); ctx.lineTo(i * cw, H); ctx.stroke();
  }
  for (let j = 0; j <= ROWS; j++) {
    ctx.beginPath(); ctx.moveTo(0, j * ch); ctx.lineTo(W, j * ch); ctx.stroke();
  }

  // Centre axes
  ctx.strokeStyle = "rgba(0,180,216,0.18)";
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(0, H / 2); ctx.lineTo(W, H / 2); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(W / 2, 0); ctx.lineTo(W / 2, H); ctx.stroke();

  // Tick marks on centre line
  ctx.fillStyle = "rgba(0,180,216,0.22)";
  for (let i = 0; i <= COLS * SUB; i++) {
    const x = (i / (COLS * SUB)) * W;
    ctx.fillRect(x - 0.5, H / 2 - (i % SUB === 0 ? 4 : 2), 1, i % SUB === 0 ? 8 : 4);
  }

  // Waveform — compute once
  const pts = buildWaveform(W, H, t);
  const drawPath = () => {
    ctx.beginPath();
    pts.forEach(([x, y], i) => (i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)));
  };

  // Outer glow
  drawPath();
  ctx.strokeStyle = "rgba(0,180,216,0.08)";
  ctx.lineWidth = 18;
  ctx.stroke();

  // Wide glow
  drawPath();
  ctx.strokeStyle = "rgba(0,180,216,0.18)";
  ctx.lineWidth = 8;
  ctx.stroke();

  // Medium glow
  drawPath();
  ctx.strokeStyle = "rgba(0,180,216,0.50)";
  ctx.lineWidth = 3;
  ctx.stroke();

  // Crisp line
  drawPath();
  ctx.strokeStyle = CYN;
  ctx.lineWidth = 1.8;
  ctx.stroke();

  // Trigger arrow (left edge)
  const trigY = H / 2 - H * 0.3 * 0.45;
  ctx.fillStyle = CYN;
  ctx.globalAlpha = 0.65;
  ctx.beginPath();
  ctx.moveTo(2, trigY);
  ctx.lineTo(10, trigY - 5);
  ctx.lineTo(10, trigY + 5);
  ctx.closePath();
  ctx.fill();
  ctx.globalAlpha = 1;

  // HUD corner brackets
  const BL = 18, BO = 5;
  ctx.strokeStyle = "rgba(0,180,216,0.50)";
  ctx.lineWidth = 1.5;
  [
    [[BO, BO + BL], [BO, BO], [BO + BL, BO]],
    [[W - BO - BL, BO], [W - BO, BO], [W - BO, BO + BL]],
    [[BO, H - BO - BL], [BO, H - BO], [BO + BL, H - BO]],
    [[W - BO - BL, H - BO], [W - BO, H - BO], [W - BO, H - BO - BL]],
  ].forEach((pts) => {
    ctx.beginPath();
    ctx.moveTo(pts[0][0], pts[0][1]);
    ctx.lineTo(pts[1][0], pts[1][1]);
    ctx.lineTo(pts[2][0], pts[2][1]);
    ctx.stroke();
  });
}

export default function OscilloscopeDisplay() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    let t = 0;
    let W = 0, H = 0;
    let raf: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(wrap);

    const tick = () => {
      if (W > 0 && H > 0) {
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          drawFrame(ctx, W, H, t);
        }
      }
      t += 1 / 60;
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, []);

  return (
    <div ref={wrapRef} style={{ width: "100%", height: "100%", position: "relative" }}>
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse at center, transparent 40%, rgba(6,6,8,0.6) 100%)",
      }} />
    </div>
  );
}
