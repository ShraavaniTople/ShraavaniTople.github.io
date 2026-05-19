"use client";
import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  {
    num: "01",
    name: "GRASP-X",
    desc: "Deep RL pick-and-place for KUKA IIWA7 arm. 80%+ success rate with zero-shot generalization to unseen object positions.",
    metric: "80%+ success · zero-shot generalization",
    tags: ["PyTorch", "PPO", "PyBullet", "RL"],
    href: "https://github.com/ShraavaniTople",
  },
  {
    num: "02",
    name: "Origin Navigation",
    desc: "ROS2 trajectory tracking with cubic spline interpolation and pure pursuit controller. 91.9% position accuracy across 38 test cases.",
    metric: "91.9% accuracy · 38 tests passed",
    tags: ["ROS2", "C++", "Gazebo", "TurtleBot3"],
    href: "https://github.com/ShraavaniTople",
  },
  {
    num: "03",
    name: "StrikeBot",
    desc: "Vision-guided marble robot on Raspberry Pi. Real-time OpenCV detection pipeline for object tracking and targeting.",
    metric: "Real-time detection · RPi deployment",
    tags: ["OpenCV", "RPi", "Python", "CV"],
    href: "https://github.com/ShraavaniTople",
  },
  {
    num: "04",
    name: "InferenceCache",
    desc: "Tamper-proof AI inference proxy with Merkle audit log and Ed25519 signatures for verifiable AI output integrity.",
    metric: "Ed25519 verified · Merkle audit trail",
    tags: ["FastAPI", "Merkle", "Python", "Crypto"],
    href: "https://github.com/ShraavaniTople",
  },
  {
    num: "05",
    name: "PublicAI Pulse",
    desc: "Browser simulator exploring how AI governance policies affect public services. Interactive policy scenario explorer.",
    metric: "Live demo available",
    tags: ["JavaScript", "AI Policy", "Simulation"],
    href: "https://github.com/ShraavaniTople",
  },
  {
    num: "06",
    name: "ResilienceOps",
    desc: "Incident-to-impact orchestrator desktop app. Transforms incident reports into actionable impact summaries.",
    metric: "Desktop app · Cross-platform",
    tags: ["Electron", "React", "TypeScript"],
    href: "https://github.com/ShraavaniTople",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="projects" className="section px-6 lg:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="label mb-3">SELECTED WORK</p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "#F4F4F5" }}
          >
            Things I&apos;ve built.
          </h2>
        </motion.div>

        {/* Project rows */}
        <div>
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07, ease }}
            >
              <button
                className="w-full text-left group"
                onClick={() => setExpanded(expanded === p.num ? null : p.num)}
              >
                <div
                  className="flex flex-col sm:flex-row sm:items-center gap-3 py-5 transition-colors rounded-lg px-3 -mx-3"
                  style={{
                    background: expanded === p.num
                      ? "rgba(129,140,248,0.04)"
                      : "transparent",
                  }}
                  onMouseEnter={(e) => {
                    if (expanded !== p.num)
                      (e.currentTarget as HTMLDivElement).style.background =
                        "rgba(129,140,248,0.02)";
                  }}
                  onMouseLeave={(e) => {
                    if (expanded !== p.num)
                      (e.currentTarget as HTMLDivElement).style.background = "transparent";
                  }}
                >
                  {/* Number */}
                  <span
                    className="text-xs font-mono transition-all shrink-0"
                    style={{ color: "#3F3F46", minWidth: "2.5rem" }}
                  >
                    {p.num}
                  </span>

                  {/* Name */}
                  <span
                    className="text-base font-semibold tracking-tight shrink-0 w-44"
                    style={{ color: "#F4F4F5" }}
                  >
                    {p.name}
                  </span>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 flex-1">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded text-[10px] font-mono"
                        style={{
                          color: "#71717A",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-xs font-mono shrink-0 transition-colors"
                    style={{ color: "#3F3F46" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "#818CF8")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "#3F3F46")}
                  >
                    → GitHub
                  </a>
                </div>
              </button>

              {/* Expanded */}
              <AnimatePresence>
                {expanded === p.num && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease }}
                    className="overflow-hidden"
                  >
                    <div className="px-3 pb-4">
                      <p className="text-sm leading-relaxed mb-2" style={{ color: "#71717A" }}>
                        {p.desc}
                      </p>
                      <p className="text-xs font-mono" style={{ color: "#818CF8" }}>
                        — {p.metric}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider */}
              <div className="h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
