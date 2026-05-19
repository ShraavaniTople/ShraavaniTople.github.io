"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    num: "01", name: "StrikeBot",
    desc: "Autonomous marble-playing robot integrating computer vision, robotics, and embedded programming on Raspberry Pi.",
    metric: "92% localization accuracy · 76% hit rate in 50 matches",
    tags: ["Python", "C++", "OpenCV", "Raspberry Pi", "Inverse Kinematics"],
    github: "https://github.com/ShraavaniTople/StrikeBot-Autonomous-Marble-Playing-Robot",
  },
  {
    num: "02", name: "GRASP-X",
    desc: "Deep RL pick-and-place for KUKA IIWA7 robotic arm. End-to-end visual RL on 84×84 RGB frames with PPO and domain randomization.",
    metric: "80%+ training success · 60%+ zero-shot generalization",
    tags: ["PyTorch", "PPO", "PyBullet", "Python", "Reinforcement Learning"],
    github: "https://github.com/ShraavaniTople/grasp-x",
  },
  {
    num: "03", name: "Origin Navigation",
    desc: "Autonomous ROS2 trajectory tracking framework using cubic spline interpolation and pure pursuit controller for TurtleBot3.",
    metric: "91.9% tracking accuracy · 38 automated tests",
    tags: ["ROS2", "C++", "Gazebo", "TurtleBot3", "Robotics"],
    github: null,
  },
  {
    num: "04", name: "InferenceCache",
    desc: "Tamper-proof AI inference proxy with SHA-256 caching and Merkle tree verification for auditable, cryptographically-signed AI outputs.",
    metric: "Ed25519 signatures · Merkle audit log",
    tags: ["Python", "FastAPI", "Cryptography", "Merkle Trees"],
    github: "https://github.com/ShraavaniTople/inferencecache",
  },
  {
    num: "05", name: "PublicAI Pulse",
    desc: "Browser-based simulator exploring how AI governance parameters affect public service outcomes like healthcare and transit.",
    metric: "Live demo available",
    tags: ["JavaScript", "HTML", "CSS", "AI Governance"],
    github: "https://github.com/ShraavaniTople/publicai-pulse",
    live: "https://shraavanitople.github.io/publicai-pulse",
  },
  {
    num: "06", name: "Sakura Lanterns",
    desc: "Digital sky lantern web app with animated visuals, multiple themes, and shareable links. Optimized for mobile.",
    metric: "CSS animations · Static hosted",
    tags: ["React", "JavaScript", "Tailwind", "CSS Art"],
    github: "https://github.com/ShraavaniTople/sakura-lanterns",
  },
  {
    num: "07", name: "ResilienceOps",
    desc: "Desktop app simulating incident-to-impact orchestration with real-time execution tracking and cross-platform deployment.",
    metric: "Electron · Cross-platform",
    tags: ["Electron", "React", "TypeScript", "Tailwind"],
    github: "https://github.com/ShraavaniTople/resilienceops",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}>Projects</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 40, color: "#111110" }}
        >Things I&apos;ve built.</motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                onClick={() => setExpanded(expanded === p.num ? null : p.num)}
                style={{
                  display: "flex", alignItems: "flex-start", gap: 20, padding: "20px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.06)", cursor: "pointer",
                  transition: "background 0.15s",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#FAFAF9")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                <span style={{ fontSize: 11, fontWeight: 600, color: "#9CA3AF", fontFamily: "monospace", minWidth: 24, paddingTop: 3 }}>{p.num}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 6, flexWrap: "wrap" }}>
                    <span style={{ fontSize: 17, fontWeight: 700, color: "#111110" }}>{p.name}</span>
                    <span style={{ fontSize: 12, color: "#7C3AED", fontWeight: 500, background: "#EDE9FE", padding: "2px 8px", borderRadius: 99 }}>{p.metric}</span>
                  </div>
                  <p style={{ fontSize: 14, color: "#6B7280", lineHeight: 1.6 }}>{p.desc}</p>
                  {expanded === p.num && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      style={{ marginTop: 12 }}
                    >
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                        {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
                      </div>
                    </motion.div>
                  )}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{ color: "#9CA3AF", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#7C3AED")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#9CA3AF")}
                    ><Github size={16} /></a>
                  )}
                  {"live" in p && p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      onClick={e => e.stopPropagation()}
                      style={{ color: "#9CA3AF", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#7C3AED")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#9CA3AF")}
                    ><ExternalLink size={16} /></a>
                  )}
                  {expanded === p.num ? <ChevronUp size={16} color="#9CA3AF" /> : <ChevronDown size={16} color="#9CA3AF" />}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
