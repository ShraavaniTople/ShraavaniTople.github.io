"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const ARCH = `  RGB Frame (84×84)
       ↓
  NatureCNN Encoder
  [Conv→Conv→Conv→Dense]
       ↓
  256-dim Visual Features
       ↙           ↘
  + Proprioception (28-dim)
       ↓
  MultiModalEncoder
       ↙           ↘
  Actor Head    Critic Head
  (Policy π)    (Value V)`;

const GRASP_METRICS = [
  { label: "80%+", sub: "success rate" },
  { label: "60%+", sub: "zero-shot" },
  { label: "2M", sub: "train steps" },
  { label: "4", sub: "parallel envs" },
];

const ORIGIN_METRICS = [
  { label: "91.9%", sub: "accuracy" },
  { label: "38", sub: "tests passed" },
  { label: "Modular", sub: "ROS2 arch" },
];

const SECONDARY = [
  {
    title: "MedSegTumor",
    desc: "Deep learning for medical image segmentation. Tumor detection with convolutional architectures.",
    tags: ["Python", "Deep Learning", "Medical AI"],
  },
  {
    title: "IPMV / YOLO",
    desc: "Object detection using YOLO architecture. Real-time multi-class detection with confidence scoring.",
    tags: ["YOLO", "Jupyter", "Python"],
  },
  {
    title: "Hand Gesture Recognition",
    desc: "Real-time hand gesture classification using contour analysis and feature extraction.",
    tags: ["OpenCV", "Python", "CV"],
  },
];

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="research" className="section px-6 lg:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="label mb-3">RESEARCH</p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "#F4F4F5" }}
          >
            Teaching machines to see, think, and act.
          </h2>
        </motion.div>

        {/* Two main panels */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* GRASP-X */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="p-6 rounded-xl"
            style={{ background: "#0F0F14", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="text-sm font-mono tracking-widest uppercase mb-1" style={{ color: "#818CF8" }}>
              GRASP-X
            </h3>
            <p className="text-sm mb-4" style={{ color: "#71717A" }}>
              Deep RL pick-and-place for KUKA IIWA7. PPO with multi-modal encoder combining vision and proprioception.
            </p>

            {/* Architecture */}
            <pre
              className="text-[10px] leading-relaxed p-4 rounded-lg mb-5 overflow-x-auto"
              style={{
                fontFamily: "monospace",
                background: "rgba(0,0,0,0.5)",
                border: "1px solid rgba(255,255,255,0.05)",
                color: "#71717A",
              }}
            >
              {ARCH}
            </pre>

            {/* Metrics */}
            <div className="grid grid-cols-4 gap-3">
              {GRASP_METRICS.map((m) => (
                <div key={m.label} className="text-center p-3 rounded-lg" style={{ background: "rgba(129,140,248,0.06)", border: "1px solid rgba(129,140,248,0.1)" }}>
                  <div className="text-base font-bold mb-0.5" style={{ color: "#818CF8" }}>{m.label}</div>
                  <div className="text-[10px] font-mono" style={{ color: "#71717A" }}>{m.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Origin Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.18, ease }}
            className="p-6 rounded-xl"
            style={{ background: "#0F0F14", border: "1px solid rgba(255,255,255,0.06)" }}
          >
            <h3 className="text-sm font-mono tracking-widest uppercase mb-1" style={{ color: "#818CF8" }}>
              Origin Navigation
            </h3>
            <p className="text-sm mb-4" style={{ color: "#71717A" }}>
              ROS2 autonomous trajectory tracking with cubic spline interpolation and pure pursuit controller.
            </p>

            {/* SVG trajectory */}
            <div
              className="p-3 rounded-lg mb-5"
              style={{ background: "rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.05)" }}
            >
              <div className="text-[10px] font-mono mb-2" style={{ color: "#3F3F46" }}>trajectory visualization</div>
              <svg viewBox="0 0 280 80" className="w-full" style={{ height: 80 }}>
                <defs>
                  <pattern id="res-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M20 0L0 0 0 20" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="280" height="80" fill="url(#res-grid)" />
                {/* Planned path */}
                <motion.path
                  d="M 20 60 C 60 60 60 15 100 15 C 140 15 140 45 180 40 C 220 35 220 55 260 55"
                  fill="none"
                  stroke="rgba(129,140,248,0.4)"
                  strokeWidth="1.5"
                  strokeDasharray="320"
                  strokeDashoffset={inView ? 0 : 320}
                  style={{ transition: "stroke-dashoffset 2s ease 0.5s" }}
                />
                {/* Actual path */}
                <motion.path
                  d="M 20 62 C 60 59 62 17 101 16 C 141 15 141 44 181 41 C 221 36 222 54 261 54"
                  fill="none"
                  stroke="#818CF8"
                  strokeWidth="2"
                  strokeDasharray="320"
                  strokeDashoffset={inView ? 0 : 320}
                  style={{ transition: "stroke-dashoffset 2s ease 0.8s" }}
                />
                <circle cx="261" cy="54" r="4" fill="#818CF8" opacity={inView ? 1 : 0} style={{ transition: "opacity 0.4s ease 2.8s" }} />
                {/* Legend */}
                <line x1="16" y1="74" x2="28" y2="74" stroke="rgba(129,140,248,0.4)" strokeWidth="1.5" />
                <text x="31" y="77" fill="#3F3F46" fontSize="6" fontFamily="monospace">planned</text>
                <line x1="72" y1="74" x2="84" y2="74" stroke="#818CF8" strokeWidth="2" />
                <text x="87" y="77" fill="#3F3F46" fontSize="6" fontFamily="monospace">actual</text>
              </svg>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3">
              {ORIGIN_METRICS.map((m) => (
                <div key={m.label} className="text-center p-3 rounded-lg" style={{ background: "rgba(129,140,248,0.06)", border: "1px solid rgba(129,140,248,0.1)" }}>
                  <div className="text-sm font-bold mb-0.5" style={{ color: "#818CF8" }}>{m.label}</div>
                  <div className="text-[10px] font-mono" style={{ color: "#71717A" }}>{m.sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Secondary */}
        <div className="grid sm:grid-cols-3 gap-4">
          {SECONDARY.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08, ease }}
              className="p-4 rounded-xl"
              style={{ background: "#0F0F14", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <h4 className="text-sm font-semibold mb-2" style={{ color: "#F4F4F5" }}>{card.title}</h4>
              <p className="text-xs leading-relaxed mb-3" style={{ color: "#71717A" }}>{card.desc}</p>
              <div className="flex flex-wrap gap-1">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-[10px] font-mono"
                    style={{ color: "#71717A", border: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
