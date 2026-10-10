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
    <section style={{
      minHeight: "100vh",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
    }}>
      {/* Full-bleed oscilloscope background */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <OscilloscopeDisplay />
      </div>

      {/* Gradient overlay — darkens edges so text pops */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: `
          linear-gradient(to bottom,
            rgba(6,6,8,0.78) 0%,
            rgba(6,6,8,0.40) 42%,
            rgba(6,6,8,0.55) 68%,
            rgba(6,6,8,0.92) 100%)
        `,
      }} />

      {/* Left vignette */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
        background: "linear-gradient(to right, rgba(6,6,8,0.7) 0%, transparent 45%)",
      }} />

      {/* Content — bottom anchored */}
      <div style={{
        position: "relative", zIndex: 2,
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 clamp(24px, 5vw, 72px) 56px",
      }}>

        {/* Name block */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ overflow: "hidden", lineHeight: 1 }}>
            <motion.h1
              initial={{ y: "102%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, ease }}
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                fontSize: "clamp(72px, 13vw, 192px)",
                fontWeight: 700,
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "#F0EEFF",
                margin: 0,
              }}
            >
              Shraavani
            </motion.h1>
          </div>
          <div style={{ overflow: "hidden", lineHeight: 1 }}>
            <motion.h1
              initial={{ y: "102%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.0, delay: 0.07, ease }}
              style={{
                fontFamily: "var(--font-display, sans-serif)",
                fontSize: "clamp(72px, 13vw, 192px)",
                fontWeight: 700,
                lineHeight: 0.88,
                letterSpacing: "-0.04em",
                color: "#F0EEFF",
                margin: 0,
              }}
            >
              Tople<span style={{ color: "#00B4D8" }}>.</span>
            </motion.h1>
          </div>
        </div>

        {/* Bottom row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease }}
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 28,
          }}
        >
          {/* Left: tagline + CTAs */}
          <div>
            <p style={{
              fontFamily: "var(--font-body, sans-serif)",
              fontSize: 15, color: "rgba(240,238,255,0.55)",
              lineHeight: 1.6, marginBottom: 22, maxWidth: 380,
            }}>
              Robotics engineer. I build autonomous systems and care about how they work in the real world.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={() =>
                  document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: "#00B4D8", color: "#060608",
                  border: "none", borderRadius: 4,
                  padding: "12px 22px", fontSize: 12, fontWeight: 700,
                  cursor: "pointer", transition: "opacity 0.15s",
                  fontFamily: "var(--font-mono, monospace)",
                  letterSpacing: "0.07em", textTransform: "uppercase",
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                View work <ArrowRight size={12} />
              </button>
              <a
                href="mailto:shraavanitople@gmail.com"
                style={{
                  display: "inline-flex", alignItems: "center",
                  background: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(8px)",
                  color: "rgba(240,238,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.12)", borderRadius: 4,
                  padding: "12px 22px", fontSize: 12, fontWeight: 600,
                  textDecoration: "none", transition: "border-color 0.15s, color 0.15s",
                  fontFamily: "var(--font-mono, monospace)",
                  letterSpacing: "0.07em", textTransform: "uppercase",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(0,180,216,0.45)";
                  e.currentTarget.style.color = "#00B4D8";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                  e.currentTarget.style.color = "rgba(240,238,255,0.7)";
                }}
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right: socials */}
          <div style={{ display: "flex", gap: 24, alignItems: "center", paddingBottom: 2 }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{
                  display: "flex", alignItems: "center", gap: 6,
                  fontSize: 11, fontWeight: 500,
                  color: "rgba(255,255,255,0.22)",
                  textDecoration: "none", transition: "color 0.15s",
                  fontFamily: "var(--font-body, sans-serif)",
                }}
                onMouseEnter={e => (e.currentTarget.style.color = "#00B4D8")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.22)")}
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Keyword strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.9 }}
        style={{
          position: "relative", zIndex: 2,
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "12px 0",
          overflow: "hidden",
          background: "rgba(6,6,8,0.6)",
          backdropFilter: "blur(8px)",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
          style={{ display: "flex", width: "max-content" }}
        >
          {[...MARQUEE, ...MARQUEE].map((k, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: 9, color: "rgba(0,180,216,0.28)",
              letterSpacing: "0.16em", textTransform: "uppercase",
              padding: "0 32px", whiteSpace: "nowrap",
            }}>
              {k}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
