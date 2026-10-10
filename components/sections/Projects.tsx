"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

const mainProjects = [
  {
    num: "01", cat: "Robotics / Control",
    name: "Origin Navigation",
    hook: "ROS2 framework for autonomous trajectory tracking with C2-continuous splines and adaptive lookahead.",
    approach: "Cubic spline interpolation enforcing C2 continuity across waypoints. Pure Pursuit controller with curvature-adaptive lookahead — tighter curves shrink the lookahead radius, open paths extend it. 38-case automated test suite.",
    metric: "91.9%", metricLabel: "tracking accuracy",
    metricB: "38", metricBLabel: "automated tests",
    tags: ["ROS2", "C++", "Gazebo", "TurtleBot3", "Pure Pursuit", "Cubic Splines"],
    github: null as string | null,
    media: null as string | null, mediaType: null as "video" | "image" | null,
    accent: "#00B4D8",
    sceneNote: true,
  },
  {
    num: "02", cat: "Robotics / Computer Vision",
    name: "StrikeBot",
    hook: "Autonomous marble-playing robot combining real-time vision with inverse kinematics actuation.",
    approach: "Raspberry Pi running a live OpenCV detection pipeline — object localization, tracking, and targeting at 15 FPS. Inverse kinematics drives the mechanical arm. Designed and tested across 50 match conditions.",
    metric: "92%", metricLabel: "localization accuracy",
    metricB: "15 FPS", metricBLabel: "on Raspberry Pi",
    tags: ["Python", "C++", "OpenCV", "Raspberry Pi", "Inverse Kinematics"],
    github: "https://github.com/ShraavaniTople/StrikeBot-Autonomous-Marble-Playing-Robot",
    media: "/projects/strikebot.mp4", mediaType: "video" as "video" | "image" | null,
    accent: "#F59E0B",
    sceneNote: false,
  },
  {
    num: "03", cat: "AI / Security",
    name: "InferenceCache",
    hook: "Tamper-proof AI inference proxy with cryptographic audit trails.",
    approach: "Secure proxy layer that intercepts model outputs, signs them with Ed25519, and commits them to a Merkle tree. Subsequent queries validate against the tree root — any tampering is detectable.",
    metric: "Ed25519", metricLabel: "signature scheme",
    metricB: "Merkle", metricBLabel: "audit log",
    tags: ["Python", "FastAPI", "SHA-256", "Merkle Trees", "Cryptography"],
    github: "https://github.com/ShraavaniTople/inferencecache",
    media: null, mediaType: null,
    accent: "#A78BFA",
    sceneNote: false,
  },
  {
    num: "04", cat: "Robotics / Deep RL",
    name: "GRASP-X",
    hook: "Deep RL pick-and-place for KUKA IIWA7 — no manual state engineering.",
    approach: "PPO agent trained on raw 84×84 RGB frames with domain randomization across object textures, lighting, and initial positions. Policy generalizes to unseen configurations without manual feature engineering.",
    metric: "80%+", metricLabel: "pick success rate",
    metricB: "60%+", metricBLabel: "zero-shot generalization",
    tags: ["PyTorch", "PPO", "PyBullet", "Python", "Deep RL"],
    github: "https://github.com/ShraavaniTople/grasp-x",
    media: "/projects/grasp-x.mp4", mediaType: "video" as "video" | "image" | null,
    accent: "#34D399",
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
    desc: "Hardware implementation of a 16-bit integer divider using the non-restoring algorithm on FPGA.",
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
  const inView = useInView(ref, { once: true, amount: 0.12 });

  return (
    <div ref={ref} style={{ position: "sticky", top: 80 + index * 16, zIndex: index + 1, marginBottom: 16 }}>
      <motion.div
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -4, transition: { duration: 0.2 } }}
        style={{
          background: "#0C0C0C",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Top accent bar */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 2,
          background: `linear-gradient(90deg, ${p.accent}, transparent 65%)`,
        }} />
        <div style={{
          position: "absolute", top: 0, left: 0, width: 180, height: 60,
          background: `radial-gradient(ellipse at top left, ${p.accent}18 0%, transparent 70%)`,
          pointerEvents: "none",
        }} />

        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 0, alignItems: "stretch",
        }} className="proj-card-inner">

          {/* Left */}
          <div style={{ padding: "44px 44px 40px 44px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 9, color: "#333344",
                letterSpacing: "0.14em", textTransform: "uppercase",
              }}>{p.cat}</span>
            </div>

            <h3 style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(28px, 3.2vw, 48px)",
              fontWeight: 700, letterSpacing: "-0.03em",
              color: "#F0EEFF", marginBottom: 14, lineHeight: 1.0,
            }}>
              {p.name}
            </h3>

            <p style={{
              fontSize: 13, color: p.accent,
              fontWeight: 500, marginBottom: 16,
              lineHeight: 1.6, fontFamily: "var(--font-body, sans-serif)",
              opacity: 0.9,
            }}>
              {p.hook}
            </p>

            <p style={{
              fontSize: 13, color: "#5A6478",
              lineHeight: 1.8, marginBottom: 28,
              fontFamily: "var(--font-body, sans-serif)",
            }}>
              {p.approach}
            </p>

            {/* Metrics */}
            <div style={{ display: "flex", gap: 28, marginBottom: 24 }}>
              {[
                { val: p.metric, label: p.metricLabel },
                { val: p.metricB, label: p.metricBLabel },
              ].map((m) => (
                <div key={m.label}>
                  <p style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: 20, fontWeight: 700,
                    color: p.accent, marginBottom: 2, lineHeight: 1,
                  }}>{m.val}</p>
                  <p style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: 9, color: "#333344",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                  }}>{m.label}</p>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
              {p.tags.map(t => (
                <span key={t} style={{
                  display: "inline-flex", alignItems: "center",
                  padding: "3px 10px", borderRadius: 3,
                  border: `1px solid ${p.accent}28`,
                  fontSize: 10, fontWeight: 500,
                  color: p.accent, opacity: 0.7,
                  fontFamily: "var(--font-mono, monospace)",
                }}>{t}</span>
              ))}
            </div>

            <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 5,
                    fontSize: 12, fontWeight: 600, color: "#444455",
                    textDecoration: "none", transition: "color 0.15s",
                    fontFamily: "var(--font-body, sans-serif)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = p.accent)}
                  onMouseLeave={e => (e.currentTarget.style.color = "#444455")}
                >
                  <Github size={13} /> GitHub <ArrowUpRight size={11} />
                </a>
              )}
            </div>
          </div>

          {/* Right — visual panel */}
          <div style={{
            position: "relative",
            borderLeft: "1px solid rgba(255,255,255,0.05)",
            overflow: "hidden",
            minHeight: 320,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: "#080808",
          }}>
            {/* Big watermark number */}
            <span style={{
              position: "absolute",
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: 220, fontWeight: 700, fontStyle: "italic",
              color: `${p.accent}08`,
              letterSpacing: "-0.06em",
              lineHeight: 1,
              userSelect: "none",
              bottom: -20, right: -10,
            }}>{p.num}</span>

            {p.media && p.mediaType === "video" && (
              <video src={p.media} autoPlay muted loop playsInline
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
            )}
            {p.media && p.mediaType === "image" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.media} alt={p.name}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }} />
            )}

            {/* Center label for no-media projects */}
            {!p.media && (
              <div style={{ position: "relative", zIndex: 1, textAlign: "center", padding: 32 }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%",
                  border: `1px solid ${p.accent}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                  boxShadow: `0 0 24px ${p.accent}20`,
                }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: p.accent,
                    boxShadow: `0 0 12px ${p.accent}`,
                  }} />
                </div>
                <p style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 9, color: `${p.accent}60`,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                }}>{p.cat}</p>
              </div>
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
      transition={{ duration: 0.5, delay: 0.08 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
      style={{
        padding: "24px 22px",
        background: "#0A0A0A",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: 10,
        transition: "border-color 0.2s",
        cursor: "default",
      }}
      whileHover={{ borderColor: "rgba(0,180,216,0.18)" } as never}
    >
      <p style={{
        fontFamily: "var(--font-mono, monospace)",
        fontSize: 9, color: "#333344",
        letterSpacing: "0.12em", textTransform: "uppercase",
        marginBottom: 10,
      }}>
        {String(i + 1).padStart(2, "0")}
      </p>
      <p style={{
        fontFamily: "var(--font-display, sans-serif)",
        fontSize: 16, fontWeight: 700,
        color: "#F0EEFF", marginBottom: 8, lineHeight: 1.2,
      }}>
        {p.name}
      </p>
      <p style={{
        fontSize: 12, color: "#4A5568",
        lineHeight: 1.7, marginBottom: 16,
        fontFamily: "var(--font-body, sans-serif)",
      }}>
        {p.desc}
      </p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
        {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
      </div>
      <div style={{ display: "flex", gap: 16 }}>
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 4,
              fontSize: 11, fontWeight: 600, color: "#333344",
              textDecoration: "none", transition: "color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00B4D8")}
            onMouseLeave={e => (e.currentTarget.style.color = "#333344")}
          >
            <Github size={12} /> GitHub
          </a>
        )}
        {p.live && (
          <a href={p.live} target="_blank" rel="noopener noreferrer"
            style={{
              display: "flex", alignItems: "center", gap: 4,
              fontSize: 11, fontWeight: 600, color: "#333344",
              textDecoration: "none", transition: "color 0.15s",
            }}
            onMouseEnter={e => (e.currentTarget.style.color = "#00B4D8")}
            onMouseLeave={e => (e.currentTarget.style.color = "#333344")}
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
          Built, tested, and measured.
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
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
            <p style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 9, color: "#333344",
              letterSpacing: "0.16em", textTransform: "uppercase",
            }}>
              More projects
            </p>
            <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="small-proj-grid">
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
