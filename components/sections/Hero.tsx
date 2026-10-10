"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const OscilloscopeDisplay = dynamic(
  () => import("@/components/effects/OscilloscopeDisplay"),
  { ssr: false }
);

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com", label: "Email" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const MARQUEE = [
  "ROS2", "Pure Pursuit", "Trajectory Planning", "OpenCV",
  "Embedded Systems", "MATLAB", "PyTorch", "TurtleBot3",
  "Gazebo", "C++", "Raspberry Pi", "Inverse Kinematics", "FPGA",
];

export default function Hero() {
  return (
    <section
      style={{
        background: "#080808",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle grid background */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        backgroundImage: `
          linear-gradient(rgba(0,180,216,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,180,216,0.025) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }} />

      {/* Main content */}
      <div style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        padding: "0 0 0 0",
      }}>
        <div style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          minHeight: "70vh",
        }}
          className="hero-grid"
        >
          {/* LEFT: Text column */}
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "120px 56px 80px 56px",
            position: "relative",
            zIndex: 1,
          }}>
            {/* Status indicator */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease }}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                marginBottom: 40,
              }}
            >
              <span style={{
                width: 6, height: 6, borderRadius: "50%",
                background: "#00B4D8",
                boxShadow: "0 0 8px #00B4D8, 0 0 16px rgba(0,180,216,0.4)",
                display: "inline-block",
              }} />
              <span style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 10, color: "rgba(0,180,216,0.6)",
                letterSpacing: "0.12em", textTransform: "uppercase",
              }}>
                VJTI Mumbai · M.Tech in progress
              </span>
            </motion.div>

            {/* Name */}
            <div style={{ overflow: "hidden", marginBottom: 6 }}>
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease }}
                style={{
                  fontFamily: "var(--font-display, sans-serif)",
                  fontSize: "clamp(52px, 7.5vw, 108px)",
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  color: "#F0EEFF",
                  margin: 0,
                }}
              >
                Shraavani
              </motion.h1>
            </div>
            <div style={{ overflow: "hidden", marginBottom: 36 }}>
              <motion.h1
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.08, ease }}
                style={{
                  fontFamily: "var(--font-display, sans-serif)",
                  fontSize: "clamp(52px, 7.5vw, 108px)",
                  fontWeight: 700,
                  lineHeight: 0.9,
                  letterSpacing: "-0.04em",
                  color: "#F0EEFF",
                  margin: 0,
                }}
              >
                Tople
                <span style={{ color: "#00B4D8" }}>.</span>
              </motion.h1>
            </div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.38, ease }}
              style={{ marginBottom: 28 }}
            >
              <div style={{
                height: 1,
                background: "linear-gradient(90deg, rgba(0,180,216,0.35) 0%, rgba(0,180,216,0.06) 60%, transparent 100%)",
                marginBottom: 20,
              }} />
              <p style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 14, color: "#6B7A8D",
                lineHeight: 1.75, margin: 0,
                maxWidth: 380,
              }}>
                Robotics engineer, researcher, community builder.
                I build autonomous systems and care a lot about how they actually work in the real world.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.52, ease }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 44 }}
            >
              <button
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#00B4D8", color: "#080808",
                  border: "none", borderRadius: 4,
                  padding: "12px 24px", fontSize: 12, fontWeight: 700,
                  cursor: "pointer", transition: "opacity 0.15s",
                  fontFamily: "var(--font-mono, monospace)",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                View Projects <ArrowRight size={12} />
              </button>
              <a
                href="mailto:shraavanitople@gmail.com"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "rgba(0,180,216,0.7)",
                  border: "1px solid rgba(0,180,216,0.22)", borderRadius: 4,
                  padding: "12px 24px", fontSize: 12, fontWeight: 600,
                  textDecoration: "none", transition: "border-color 0.15s, color 0.15s",
                  fontFamily: "var(--font-mono, monospace)",
                  letterSpacing: "0.06em", textTransform: "uppercase",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(0,180,216,0.55)";
                  e.currentTarget.style.color = "#00B4D8";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(0,180,216,0.22)";
                  e.currentTarget.style.color = "rgba(0,180,216,0.7)";
                }}
              >
                Get in touch
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.72, ease }}
              style={{ display: "flex", gap: 24, alignItems: "center" }}
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 6,
                    fontSize: 11, fontWeight: 500, color: "#2A3240",
                    textDecoration: "none", transition: "color 0.15s",
                    fontFamily: "var(--font-body, sans-serif)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#00B4D8")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#2A3240")}
                >
                  <Icon size={13} />
                  {label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Oscilloscope column */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.1, delay: 0.22, ease }}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "100px 56px 80px 24px",
            }}
          >
            {/* Fade gradient on left edge */}
            <div style={{
              position: "absolute", left: 0, top: 0, bottom: 0,
              width: 80, pointerEvents: "none", zIndex: 1,
              background: "linear-gradient(90deg, #080808 0%, transparent 100%)",
            }} />

            {/* Scope container */}
            <div style={{
              position: "relative",
              width: "100%",
              paddingBottom: "60%",
            }}>
              <div style={{ position: "absolute", inset: 0 }}>
                <OscilloscopeDisplay />
              </div>
            </div>

            {/* Label below scope */}
            <div style={{
              marginTop: 16,
              display: "flex", alignItems: "center", gap: 8,
            }}>
              <span style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 9, color: "rgba(0,180,216,0.35)",
                letterSpacing: "0.1em", textTransform: "uppercase",
              }}>
                LIVE SIGNAL — Pure Pursuit trajectory tracking · CH1 analog out
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scrolling keyword strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        style={{
          borderTop: "1px solid rgba(255,255,255,0.04)",
          padding: "13px 0",
          overflow: "hidden",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          style={{ display: "flex", width: "max-content" }}
        >
          {[...MARQUEE, ...MARQUEE].map((k, i) => (
            <span
              key={i}
              style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 9,
                color: "#1A2230",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                padding: "0 28px",
                whiteSpace: "nowrap",
              }}
            >
              {k}
            </span>
          ))}
        </motion.div>
      </motion.div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
