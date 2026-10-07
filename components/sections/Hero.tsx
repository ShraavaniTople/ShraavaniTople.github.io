"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const TrajectoryScene = dynamic(
  () => import("@/components/effects/TrajectoryScene"),
  {
    ssr: false,
    loading: () => (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 120, height: 1, background: "rgba(0,212,170,0.25)", borderRadius: 2 }} />
      </div>
    ),
  }
);

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com", label: "Email" },
];

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section style={{
      background: "#080808",
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
    }} className="hero-section">

      {/* Left: text content */}
      <div className="container hero-text" style={{ paddingTop: 80, paddingBottom: 80 }}>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05, ease }}
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 10, fontWeight: 700,
            letterSpacing: "0.2em", textTransform: "uppercase",
            color: "#00D4AA", marginBottom: 28,
          }}
        >
          Electronics &amp; Telecommunications
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease }}
          style={{
            fontFamily: "var(--font-display, sans-serif)",
            fontSize: "clamp(52px,6.5vw,96px)",
            fontWeight: 700,
            lineHeight: 0.92,
            letterSpacing: "-0.04em",
            color: "#F0EEFF",
            marginBottom: 32,
          }}
        >
          Shraavani<br />
          <em style={{ fontStyle: "italic", color: "#00D4AA" }}>Tople.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.32, ease }}
          style={{
            fontSize: 16, color: "#888899",
            lineHeight: 1.7, marginBottom: 14,
            maxWidth: 420,
            fontFamily: "var(--font-body, sans-serif)",
          }}
        >
          M.Tech at VJTI Mumbai. Building and testing real systems in robotics, control, and embedded intelligence.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.42, ease }}
          style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 12, color: "#444455",
            lineHeight: 1.6, marginBottom: 40,
            maxWidth: 400,
          }}
        >
          Trajectory tracking. Pure Pursuit control. Embedded intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.55, ease }}
          style={{ display: "flex", gap: 20, marginBottom: 44, flexWrap: "wrap" }}
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a key={label} href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 6,
                fontSize: 12, fontWeight: 500, color: "#444455",
                textDecoration: "none", transition: "color 0.15s",
                fontFamily: "var(--font-body, sans-serif)",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#00D4AA")}
              onMouseLeave={e => (e.currentTarget.style.color = "#444455")}
            >
              <Icon size={13} />{label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65, ease }}
          style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <button
            onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "#00D4AA", color: "#080808",
              border: "none", borderRadius: 6,
              padding: "13px 24px", fontSize: 13, fontWeight: 700,
              cursor: "pointer", transition: "opacity 0.15s",
              fontFamily: "var(--font-body, sans-serif)",
            }}
            onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          >
            See my work <ArrowRight size={13} />
          </button>
          <a href="mailto:shraavanitople@gmail.com"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "transparent", color: "#F0EEFF",
              border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6,
              padding: "13px 24px", fontSize: 13, fontWeight: 600,
              textDecoration: "none", transition: "border-color 0.15s",
              fontFamily: "var(--font-body, sans-serif)",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)")}
            onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      {/* Right: 3D trajectory scene */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        style={{ height: "100vh", position: "relative" }}
        className="hero-canvas"
      >
        <TrajectoryScene />
        {/* Fade left edge into bg */}
        <div style={{
          position: "absolute", top: 0, left: 0, bottom: 0, width: "30%",
          background: "linear-gradient(to right, #080808, transparent)",
          pointerEvents: "none",
        }} />
        {/* Small label */}
        <div style={{
          position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <div style={{ width: 18, height: 1, background: "#00D4AA", opacity: 0.5 }} />
          <p style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase",
            color: "#333344",
          }}>
            Origin Navigation — Pure Pursuit trajectory
          </p>
          <div style={{ width: 18, height: 1, background: "#00D4AA", opacity: 0.5 }} />
        </div>
      </motion.div>

      <style>{`
        @media(max-width:900px){
          .hero-section{
            grid-template-columns:1fr!important;
            grid-template-rows:auto auto;
          }
          .hero-canvas{
            height:55vw!important;
            min-height:260px;
            max-height:420px;
            order:-1;
          }
          .hero-text{
            padding-top:40px!important;
          }
        }
      `}</style>
    </section>
  );
}
