"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    num: "01", cat: "ROBOTICS / AI",
    name: "GRASP-X",
    desc: "Deep RL pick-and-place for KUKA IIWA7 robotic arm. Trained via PPO on 84x84 RGB frames with domain randomization.",
    metric: "80%+ success · 60%+ zero-shot",
    tags: ["PyTorch", "PPO", "PyBullet"],
    github: "https://github.com/ShraavaniTople/grasp-x",
    live: null as string | null,
    preview: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    featured: true,
  },
  {
    num: "02", cat: "ROBOTICS / CV",
    name: "StrikeBot",
    desc: "Autonomous marble-playing robot integrating real-time computer vision with mechanical actuation on Raspberry Pi.",
    metric: "92% accuracy at 15 FPS · 76% hit rate",
    tags: ["Python", "OpenCV", "C++"],
    github: "https://github.com/ShraavaniTople/StrikeBot-Autonomous-Marble-Playing-Robot",
    live: null as string | null,
    preview: "linear-gradient(135deg, #1a0a00 0%, #3d1a00 50%, #7c3500 100%)",
    featured: true,
  },
  {
    num: "03", cat: "ROBOTICS",
    name: "Origin Navigation",
    desc: "Autonomous ROS2 trajectory tracking using cubic spline interpolation and pure pursuit controller for TurtleBot3.",
    metric: "91.9% accuracy · 38 tests",
    tags: ["ROS2", "C++", "Gazebo"],
    github: null as string | null,
    live: null as string | null,
    preview: "linear-gradient(135deg, #0a1628 0%, #0d2137 50%, #103350 100%)",
    featured: false,
  },
  {
    num: "04", cat: "AI / SECURITY",
    name: "InferenceCache",
    desc: "Tamper-proof AI inference proxy with SHA-256 caching and Merkle tree verification for auditable AI output history.",
    metric: "Ed25519 signatures · Merkle audit log",
    tags: ["Python", "FastAPI", "Cryptography"],
    github: "https://github.com/ShraavaniTople/inferencecache",
    live: null as string | null,
    preview: "linear-gradient(135deg, #0f0a1e 0%, #1a0f33 50%, #2d1b69 100%)",
    featured: false,
  },
  {
    num: "05", cat: "WEB / AI",
    name: "PublicAI Pulse",
    desc: "Browser simulator exploring how AI governance parameters affect public service outcomes like healthcare and transit.",
    metric: "Live interactive demo",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ShraavaniTople/publicai-pulse",
    live: "https://shraavanitople.github.io/publicai-pulse",
    preview: "linear-gradient(135deg, #0a1a0a 0%, #0d2e0d 50%, #145214 100%)",
    featured: false,
  },
  {
    num: "06", cat: "WEB",
    name: "Sakura Lanterns",
    desc: "Digital sky lantern web app with animated visuals, multiple themes, and shareable links. Mobile-optimized.",
    metric: "CSS art · Animated",
    tags: ["React", "JavaScript", "Tailwind"],
    github: "https://github.com/ShraavaniTople/sakura-lanterns",
    live: null as string | null,
    preview: "linear-gradient(135deg, #1a0a10 0%, #330d1a 50%, #6b1432 100%)",
    featured: false,
  },
  {
    num: "07", cat: "DESKTOP",
    name: "ResilienceOps",
    desc: "Desktop app simulating incident-to-impact orchestration with real-time execution tracking across platforms.",
    metric: "Cross-platform · Electron",
    tags: ["Electron", "React", "TypeScript"],
    github: "https://github.com/ShraavaniTople/resilienceops",
    live: null as string | null,
    preview: "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2d2d2d 100%)",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section className="section" id="projects" ref={ref} style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="label" style={{ marginBottom: 12 }}>Projects</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }}
          style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 40, color: "#111111" }}>
          Things I&apos;ve built.
        </motion.h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="projects-grid">
          {projects.map((p, i) => (
            <motion.div key={p.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card"
              style={{ display: "flex", flexDirection: "column", overflow: "hidden", ...(p.featured ? { outline: "1.5px solid rgba(201,87,58,0.35)" } : {}) }}
            >
              {/* Preview area */}
              <div style={{
                height: 100,
                background: p.preview,
                position: "relative",
                flexShrink: 0,
              }}>
                <div style={{
                  position: "absolute", top: 12, left: 14,
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                }}>{p.cat}</div>
                <div style={{ position: "absolute", top: 10, right: 12, display: "flex", gap: 8 }}>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                      style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                      <Github size={14} />
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      style={{ color: "rgba(255,255,255,0.4)", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
                {/* Project number watermark */}
                <div style={{
                  position: "absolute", bottom: 12, right: 16,
                  fontSize: 32, fontWeight: 900, color: "rgba(255,255,255,0.06)", letterSpacing: "-0.04em",
                  fontStyle: "italic",
                }}>{p.num}</div>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 22px", flex: 1, display: "flex", flexDirection: "column" }}>
                <p style={{ fontSize: 16, fontWeight: 700, color: "#111111", marginBottom: 7, lineHeight: 1.3 }}>{p.name}</p>
                <p style={{ fontSize: 12, color: "#6B6663", lineHeight: 1.65, marginBottom: 10, flex: 1 }}>{p.desc}</p>
                <p style={{ fontSize: 11, color: "#C9573A", fontWeight: 600, marginBottom: 12 }}>{p.metric}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                  {p.tags.map(t => <span key={t} className="chip" style={{ fontSize: 10 }}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .projects-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:580px){ .projects-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
