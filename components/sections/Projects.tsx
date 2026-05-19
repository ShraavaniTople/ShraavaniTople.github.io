"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const PROJECTS = [
  {
    num: "01",
    name: "StrikeBot",
    desc: "Hybrid hardware-software autonomous marble-playing robot integrating computer vision, robotics, and embedded programming on Raspberry Pi.",
    metric: "92% localization accuracy at 15 FPS · 76% hit rate in 50 matches",
    tags: ["Python", "C++", "OpenCV", "Raspberry Pi"],
    github: "https://github.com/ShraavaniTople/StrikeBot-Autonomous-Marble-Playing-Robot",
    live: null,
  },
  {
    num: "02",
    name: "GRASP-X",
    desc: "Deep RL pick-and-place for KUKA IIWA7 arm using PPO. End-to-end visual RL on 84×84 RGB frames across 2M training steps.",
    metric: "80%+ training success · 60%+ zero-shot generalization",
    tags: ["PyTorch", "PPO", "PyBullet", "Python"],
    github: "https://github.com/ShraavaniTople/grasp-x",
    live: null,
  },
  {
    num: "03",
    name: "Origin Navigation",
    desc: "Autonomous trajectory tracking framework with cubic spline + pure pursuit controller for TurtleBot3 in ROS2/Gazebo.",
    metric: "91.9% tracking accuracy · 38 automated tests",
    tags: ["ROS2", "C++", "Gazebo", "TurtleBot3"],
    github: null,
    live: null,
  },
  {
    num: "04",
    name: "InferenceCache",
    desc: "Secure AI inference proxy with SHA-256 caching and Merkle tree verification. Tamper-proof, auditable AI output history.",
    metric: "Merkle-verified · lightweight real-time log UI",
    tags: ["Python", "FastAPI", "Cryptography"],
    github: "https://github.com/ShraavaniTople/inferencecache",
    live: null,
  },
  {
    num: "05",
    name: "PublicAI Pulse",
    desc: "Browser-based simulator exploring how AI governance policies affect public service outcomes through interactive scenarios.",
    metric: "Live interactive demo",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ShraavaniTople/publicai-pulse",
    live: "https://shraavanitople.github.io/publicai-pulse",
  },
  {
    num: "06",
    name: "Sakura Lanterns",
    desc: "Digital sky lantern web app with animated visuals, multiple themes, mobile-responsive design, and shareable links.",
    metric: "Fast static hosting · mobile-first",
    tags: ["React", "JavaScript", "Tailwind"],
    github: "https://github.com/ShraavaniTople/sakura-lanterns",
    live: null,
  },
  {
    num: "07",
    name: "ResilienceOps",
    desc: "Desktop app simulating incident orchestration with real-time execution tracking and cross-platform deployment.",
    metric: "Cross-platform Electron app",
    tags: ["Electron", "React", "Tailwind"],
    github: "https://github.com/ShraavaniTople/resilienceops",
    live: null,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section id="projects" className="section-pad" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "#A1A1AA" }}
        >
          PROJECTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
          style={{ color: "#FAFAF9" }}
        >
          Things I&apos;ve built.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.08, ease }}
              className="relative p-5 rounded-xl flex flex-col transition-all duration-200"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(192,132,252,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Number tag */}
              <span
                className="absolute top-4 right-4 text-[10px] font-mono"
                style={{ color: "#52525B" }}
              >
                {p.num}
              </span>

              {/* Name */}
              <h3 className="text-base font-bold mb-2 pr-8" style={{ color: "#FAFAF9" }}>
                {p.name}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed mb-3 flex-1" style={{ color: "#A1A1AA" }}>
                {p.desc}
              </p>

              {/* Metric */}
              <p className="text-xs font-mono mb-4" style={{ color: "#C084FC" }}>
                {p.metric}
              </p>

              {/* Bottom row */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="tag" style={{ fontSize: "10px" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ color: "#52525B" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C084FC")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#52525B")}
                      aria-label={`${p.name} GitHub`}
                    >
                      <Github size={14} />
                    </a>
                  )}
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors"
                      style={{ color: "#52525B" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C084FC")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#52525B")}
                      aria-label={`${p.name} Live`}
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
