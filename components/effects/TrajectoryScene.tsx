"use client";
import { useEffect, useRef } from "react";

const ACCENT = "#00D4AA";
const NUM_WP = 12;

// Project a unit circle point through a slow camera orbit angle onto 2D
function project(
  angle: number,
  cosC: number,
  sinC: number,
  cx: number,
  cy: number,
  RX: number,
  RY: number
): [number, number] {
  const x3d = Math.cos(angle);
  const z3d = Math.sin(angle);
  const x2d = x3d * cosC - z3d * sinC;
  const z2d = x3d * sinC + z3d * cosC;
  return [cx + x2d * RX, cy + z2d * RY];
}

function drawFrame(
  ctx: CanvasRenderingContext2D,
  W: number,
  H: number,
  robotT: number,
  cameraT: number
) {
  const cx = W / 2;
  const cy = H / 2 + H * 0.02;
  const size = Math.min(W, H);
  const RX = size * 0.37;
  const RY = size * 0.22;
  const s = size / 600; // scale factor

  const cosC = Math.cos(cameraT);
  const sinC = Math.sin(cameraT);

  ctx.clearRect(0, 0, W, H);

  // Path — glow pass
  ctx.beginPath();
  for (let i = 0; i <= 120; i++) {
    const a = (i / 120) * Math.PI * 2;
    const [px, py] = project(a, cosC, sinC, cx, cy, RX, RY);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = "rgba(0,212,170,0.07)";
  ctx.lineWidth = 10 * s;
  ctx.stroke();

  // Path — main line
  ctx.beginPath();
  for (let i = 0; i <= 120; i++) {
    const a = (i / 120) * Math.PI * 2;
    const [px, py] = project(a, cosC, sinC, cx, cy, RX, RY);
    i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
  }
  ctx.closePath();
  ctx.strokeStyle = ACCENT;
  ctx.lineWidth = 1.4 * s;
  ctx.stroke();

  // Waypoint nodes
  for (let i = 0; i < NUM_WP; i++) {
    const a = (i / NUM_WP) * Math.PI * 2;
    const [wx, wy] = project(a, cosC, sinC, cx, cy, RX, RY);

    ctx.beginPath();
    ctx.arc(wx, wy, 8 * s, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0,212,170,0.10)";
    ctx.fill();

    ctx.beginPath();
    ctx.arc(wx, wy, 3.2 * s, 0, Math.PI * 2);
    ctx.fillStyle = ACCENT;
    ctx.fill();
  }

  // Robot marker
  const rAngle = robotT * Math.PI * 2;
  const [rx, ry] = project(rAngle, cosC, sinC, cx, cy, RX, RY);

  // Lookahead ring
  ctx.beginPath();
  ctx.arc(rx, ry, 50 * s, 0, Math.PI * 2);
  ctx.strokeStyle = "rgba(0,212,170,0.30)";
  ctx.lineWidth = 0.7 * s;
  ctx.stroke();

  // Outer halo
  ctx.beginPath();
  ctx.arc(rx, ry, 22 * s, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,212,170,0.07)";
  ctx.fill();

  // Inner halo
  ctx.beginPath();
  ctx.arc(rx, ry, 12 * s, 0, Math.PI * 2);
  ctx.fillStyle = "rgba(0,212,170,0.20)";
  ctx.fill();

  // Robot dot
  ctx.beginPath();
  ctx.arc(rx, ry, 5.5 * s, 0, Math.PI * 2);
  ctx.fillStyle = "#ffffff";
  ctx.fill();
}

export default function TrajectoryScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;

    let robotT = 0;
    let cameraT = 0;
    let raf: number;
    let W = 0;
    let H = 0;
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
          drawFrame(ctx, W, H, robotT, cameraT);
        }
      }
      robotT = (robotT + 0.0011) % 1;
      cameraT += 0.0001;
      raf = requestAnimationFrame(tick);
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ width: "100%", height: "100%", position: "relative" }}>
      <canvas
        ref={canvasRef}
        style={{ position: "absolute", inset: 0, display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
}
