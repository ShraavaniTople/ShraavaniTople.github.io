"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01", category: "ROBOTICS · AI",
    name: "GRASP-X",
    desc: "Deep reinforcement learning for robotic pick-and-place. KUKA IIWA7 arm trained via PPO on 84×84 RGB frames with domain randomization.",
    metric: "80%+ training success · 60%+ zero-shot generalization",
    tags: ["PyTorch", "PPO", "PyBullet", "Python", "RL"],
    github: "https://github.com/ShraavaniTople/grasp-x",
    featured: true,
  },
  {
    num: "02", category: "ROBOTICS · CV",
    name: "StrikeBot",
    desc: "Autonomous marble-playing robot integrating real-time computer vision with mechanical actuation on Raspberry Pi.",
    metric: "92% localization accuracy · 76% hit rate in 50 matches",
    tags: ["Python", "C++", "OpenCV", "Raspberry Pi", "Robotics"],
    github: "https://github.com/ShraavaniTople/StrikeBot-Autonomous-Marble-Playing-Robot",
    featured: true,
  },
  {
    num: "03", category: "ROBOTICS",
    name: "Origin Navigation",
    desc: "Autonomous ROS2 trajectory tracking using cubic spline interpolation and pure pursuit controller for TurtleBot3.",
    metric: "91.9% tracking accuracy · 38 automated tests",
    tags: ["ROS2", "C++", "Gazebo", "TurtleBot3"],
    github: null,
    featured: false,
  },
  {
    num: "04", category: "AI · SECURITY",
    name: "InferenceCache",
    desc: "Tamper-proof AI inference proxy with SHA-256 caching and Merkle tree verification for auditable AI output history.",
    metric: "Ed25519 signatures · Merkle audit log",
    tags: ["Python", "FastAPI", "Cryptography"],
    github: "https://github.com/ShraavaniTople/inferencecache",
    featured: false,
  },
  {
    num: "05", category: "WEB · AI",
    name: "PublicAI Pulse",
    desc: "Browser simulator exploring how AI governance parameters affect public service outcomes like healthcare and transit.",
    metric: "Live interactive demo",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ShraavaniTople/publicai-pulse",
    live: "https://shraavanitople.github.io/publicai-pulse",
    featured: false,
  },
  {
    num: "06", category: "WEB",
    name: "Sakura Lanterns",
    desc: "Digital sky lantern web app with animated visuals, multiple themes, and shareable links. Optimized for mobile.",
    metric: "CSS art · Animated visuals",
    tags: ["React", "JavaScript", "Tailwind"],
    github: "https://github.com/ShraavaniTople/sakura-lanterns",
    featured: false,
  },
  {
    num: "07", category: "DESKTOP",
    name: "ResilienceOps",
    desc: "Desktop app simulating incident-to-impact orchestration with real-time execution tracking across platforms.",
    metric: "Cross-platform · Electron",
    tags: ["Electron", "React", "TypeScript"],
    github: "https://github.com/ShraavaniTople/resilienceops",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section className="section" id="projects" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}>Projects</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 48, color: "#F0EEE9" }}>
          Things I&apos;ve built.
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="projects-grid">
          {projects.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="card"
              style={{
                padding: 24, display: "flex", flexDirection: "column",
                ...(p.featured ? { borderLeft: "2px solid #FF7262" } : {}),
              }}
            >
              {/* top row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                <span className="label">{p.category}</span>
                <div style={{ display: "flex", gap: 8 }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#4A4947", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#FF7262")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#4A4947")}
                    ><Github size={15} /></a>
                  )}
                  {"live" in p && p.live && (
                    <a href={p.live as string} target="_blank" rel="noopener noreferrer"
                      style={{ color: "#4A4947", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#FF7262")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#4A4947")}
                    ><ExternalLink size={15} /></a>
                  )}
                </div>
              </div>

              <p style={{ fontSize: 18, fontWeight: 700, color: "#F0EEE9", marginBottom: 8, lineHeight: 1.3 }}>{p.name}</p>
              <p style={{ fontSize: 13, color: "#8A8784", lineHeight: 1.65, marginBottom: 12, flex: 1 }}>{p.desc}</p>
              <p style={{ fontSize: 12, color: "#FF7262", fontWeight: 500, marginBottom: 16 }}>{p.metric}</p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {p.tags.map(t => <span key={t} className="chip" style={{ fontSize: 11 }}>{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .projects-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:640px){ .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
