"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const mainProjects = [
  {
    num: "01", cat: "Robotics / Control",
    name: "Origin Navigation",
    hook: "ROS2 framework for autonomous trajectory tracking with C2-continuous splines and adaptive lookahead.",
    approach: "Cubic spline interpolation enforcing C2 continuity across waypoints. Pure Pursuit controller with curvature-adaptive lookahead distance — tighter curves shrink the lookahead radius, open paths extend it. 38-case automated test suite covering edge conditions.",
    metric: "91.9% tracking accuracy", metricB: "38 automated tests",
    tags: ["ROS2", "C++", "Gazebo", "TurtleBot3", "Pure Pursuit", "Cubic Splines"],
    github: null as string | null,
    media: null as string | null, mediaType: null as "video" | "image" | null,
    bg: "#020F07",
    sceneNote: true,
  },
  {
    num: "02", cat: "Robotics / Computer Vision",
    name: "StrikeBot",
    hook: "Autonomous marble-playing robot combining real-time vision with inverse kinematics actuation.",
    approach: "Raspberry Pi running a live OpenCV detection pipeline — object localization, tracking, and targeting at 15 FPS. Inverse kinematics drives the mechanical arm for precise actuation. Designed and tested across 50 match conditions.",
    metric: "92% localization accuracy", metricB: "15 FPS on Pi",
    tags: ["Python", "C++", "OpenCV", "Raspberry Pi", "Inverse Kinematics"],
    github: "https://github.com/ShraavaniTople/StrikeBot-Autonomous-Marble-Playing-Robot",
    media: "/projects/strikebot.mp4", mediaType: "video" as "video" | "image" | null,
    bg: "#100A00",
    sceneNote: false,
  },
  {
    num: "03", cat: "AI / Security",
    name: "InferenceCache",
    hook: "Tamper-proof AI inference proxy with cryptographic audit trails.",
    approach: "Secure proxy layer that intercepts model outputs, signs them with Ed25519, and commits them to a Merkle tree. Subsequent queries validate against the tree root — any tampering is detectable. Designed for deployments where AI output integrity must be auditable.",
    metric: "Ed25519 signatures", metricB: "Merkle audit log",
    tags: ["Python", "FastAPI", "SHA-256", "Merkle Trees", "Cryptography"],
    github: "https://github.com/ShraavaniTople/inferencecache",
    media: null, mediaType: null,
    bg: "#080514",
    sceneNote: false,
  },
  {
    num: "04", cat: "Robotics / Deep RL",
    name: "GRASP-X",
    hook: "Deep RL pick-and-place for KUKA IIWA7 — no manual state engineering.",
    approach: "PPO agent trained on raw 84x84 RGB frames with domain randomization across object textures, lighting, and initial positions. The policy generalizes to unseen configurations without any manual feature engineering.",
    metric: "80%+ pick success rate", metricB: "60%+ zero-shot generalization",
    tags: ["PyTorch", "PPO", "PyBullet", "Python", "Deep RL"],
    github: "https://github.com/ShraavaniTople/grasp-x",
    media: "/projects/grasp-x.mp4", mediaType: "video" as "video" | "image" | null,
    bg: "#0A0818",
    sceneNote: false,
  },
];

const smallProjects = [
  {
    name: "Indian Sign Language Recognition",
    desc: "Real-time ISL gesture recognition using hand landmark detection and a CNN classifier.",
    tags: ["OpenCV", "TensorFlow", "MediaPipe"],
    github: null as string | null, live: null as string | null,
  },
  {
    name: "16-bit Non-Restoring Division",
    desc: "Hardware implementation of a 16-bit integer divider using the non-restoring algorithm in FPGA.",
    tags: ["VHDL", "FPGA", "Digital Design"],
    github: null as string | null, live: null as string | null,
  },
  {
    name: "PublicAI Pulse",
    desc: "Browser simulation exploring how AI governance parameters affect public service outcomes in real time.",
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/ShraavaniTople/publicai-pulse",
    live: "https://shraavanitople.github.io/publicai-pulse",
  },
  {
    name: "AI Output Comparator",
    desc: "Side-by-side tool for comparing outputs from multiple AI models across identical prompts.",
    tags: ["React", "TypeScript"],
    github: null as string | null, live: null as string | null,
  },
  {
    name: "Sakura Lanterns",
    desc: "Digital sky lantern web app with animated visuals, themes, and shareable links.",
    tags: ["React", "JavaScript", "Tailwind"],
    github: "https://github.com/ShraavaniTople/sakura-lanterns",
    live: null as string | null,
  },
  {
    name: "ResilienceOps",
    desc: "Desktop app simulating incident-to-impact orchestration with real-time execution tracking.",
    tags: ["Electron", "React", "TypeScript"],
    github: "https://github.com/ShraavaniTople/resilienceops",
    live: null as string | null,
  },
];

function ProjCard({ p, index }: { p: typeof mainProjects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div ref={ref} style={{ position: "sticky", top: 80 + index * 14, zIndex: index + 1 }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: p.bg,
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 14,
          padding: "44px 48px",
          marginBottom: 14,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 52, alignItems: "center" }} className="proj-card-inner">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "#444455", letterSpacing: "0.12em" }}>{p.cat}</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#333" }} />
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "#00D4AA" }}>{p.num}</span>
            </div>

            <h3 style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(26px,3vw,44px)", fontWeight: 700,
              letterSpacing: "-0.03em", color: "#F0EEFF",
              marginBottom: 12, lineHeight: 1.05,
            }}>
              {p.name}
            </h3>

            <p style={{ fontSize: 14, color: "#00D4AA", fontWeight: 500, marginBottom: 16, lineHeight: 1.5, fontFamily: "var(--font-body, sans-serif)" }}>
              {p.hook}
            </p>

            <p style={{ fontSize: 13, color: "#888899", lineHeight: 1.75, marginBottom: 18, fontFamily: "var(--font-body, sans-serif)" }}>
              {p.approach}
            </p>

            <div style={{ display: "flex", gap: 20, marginBottom: 20 }}>
              <div>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 15, fontWeight: 700, color: "#F0EEFF", marginBottom: 2 }}>{p.metric}</p>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "#444455", letterSpacing: "0.08em" }}>primary metric</p>
              </div>
              <div style={{ width: 1, background: "rgba(255,255,255,0.07)" }} />
              <div>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 15, fontWeight: 700, color: "#F0EEFF", marginBottom: 2 }}>{p.metricB}</p>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "#444455", letterSpacing: "0.08em" }}>secondary metric</p>
              </div>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
              {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
            </div>

            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: "#555566", textDecoration: "none", transition: "color 0.15s", fontFamily: "var(--font-body, sans-serif)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00D4AA")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#555566")}
                >
                  <Github size={13} /> GitHub <ArrowUpRight size={11} />
                </a>
              )}
              {p.sceneNote && (
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, fontWeight: 600, color: "#555566", background: "none", border: "none", cursor: "pointer", transition: "color 0.15s", fontFamily: "var(--font-body, sans-serif)" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00D4AA")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#555566")}
                >
                  See hero viz
                </button>
              )}
            </div>
          </div>

          {/* Right — visual panel */}
          <div style={{
            borderRadius: 10, overflow: "hidden", height: 240,
            background: "rgba(0,212,170,0.03)",
            border: "1px solid rgba(255,255,255,0.05)",
            position: "relative", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            {p.media && p.mediaType === "video" && (
              <video src={p.media} autoPlay muted loop playsInline
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            )}
            {p.media && p.mediaType === "image" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.media} alt={p.name}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            )}
            {!p.media && (
              <span style={{
                fontFamily: "var(--font-display, sans-serif)",
                fontSize: 88, fontWeight: 700, fontStyle: "italic",
                color: "rgba(0,212,170,0.06)", letterSpacing: "-0.05em", userSelect: "none",
              }}>
                {p.name.slice(0, 2)}
              </span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SmallCard({ p, i, inView }: { p: typeof smallProjects[0]; i: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: "24px 22px",
        background: "#0A0A0A",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: 10,
      }}
    >
      <p style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: 16, fontWeight: 700, color: "#F0EEFF", marginBottom: 8, lineHeight: 1.2 }}>
        {p.name}
      </p>
      <p style={{ fontSize: 12, color: "#888899", lineHeight: 1.65, marginBottom: 16, fontFamily: "var(--font-body, sans-serif)" }}>
        {p.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
        {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600, color: "#444455", textDecoration: "none", transition: "color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00D4AA")}
            onMouseLeave={e => (e.currentTarget.style.color = "#444455")}
          >
            <Github size={12} /> GitHub
          </a>
        )}
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 11, fontWeight: 600, color: "#444455", textDecoration: "none", transition: "color 0.15s" }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00D4AA")}
            onMouseLeave={e => (e.currentTarget.style.color = "#444455")}
          >
            <ExternalLink size={12} /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const smallRef = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const smallInView = useInView(smallRef, { once: true, amount: 0.1 });

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}
        >
          <span className="section-num">02</span>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px,5vw,64px)" }}>
            Research &amp; Projects
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontSize: 16, color: "#888899", marginBottom: 56, maxWidth: 500, lineHeight: 1.7 }}
        >
          Built, tested, and measured — from trajectory planning to tamper-proof AI.
        </motion.p>

        <div>
          {mainProjects.map((p, i) => <ProjCard key={p.name} p={p} index={i} />)}
        </div>

        {/* Smaller projects */}
        <div ref={smallRef} style={{ marginTop: 80 }}>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={smallInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}
          >
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
            <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "#444455", letterSpacing: "0.14em", textTransform: "uppercase" }}>
              More projects
            </p>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.07)" }} />
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }} className="small-proj-grid">
            {smallProjects.map((p, i) => (
              <SmallCard key={p.name} p={p} i={i} inView={smallInView} />
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .proj-card-inner{grid-template-columns:1fr!important;}
          .small-proj-grid{grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:480px){
          .small-proj-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
