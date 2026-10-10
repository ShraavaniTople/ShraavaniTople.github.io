"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com", label: "Email" },
];

const ease = [0.16, 1, 0.3, 1] as const;

const MARQUEE = [
  "ROS2", "Pure Pursuit", "Trajectory Planning", "OpenCV",
  "Embedded Systems", "MATLAB", "PyTorch", "TurtleBot3",
  "Gazebo", "C++", "Raspberry Pi", "Inverse Kinematics", "FPGA", "Gazebo",
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
      {/* Main content */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div className="container" style={{ paddingTop: 120, paddingBottom: 52 }}>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 52 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.88, ease }}
            style={{
              fontFamily: "var(--font-display, sans-serif)",
              fontSize: "clamp(68px, 11.5vw, 160px)",
              fontWeight: 700,
              lineHeight: 0.88,
              letterSpacing: "-0.04em",
              color: "#F0EEFF",
              marginBottom: 40,
            }}
          >
            Shraavani<br />
            <em style={{ fontStyle: "italic", color: "#818CF8" }}>Tople.</em>
          </motion.h1>

          {/* Rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.0, delay: 0.18, ease }}
            style={{
              height: 1,
              background: "rgba(255,255,255,0.08)",
              transformOrigin: "left",
              marginBottom: 36,
            }}
          />

          {/* Info row */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42, ease }}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 36,
            }}
          >
            {/* Left: description + CTAs */}
            <div>
              <p style={{
                fontFamily: "var(--font-body, sans-serif)",
                fontSize: 15, color: "#888899",
                lineHeight: 1.7, marginBottom: 6,
                maxWidth: 440,
              }}>
                Robotics Engineer · Researcher · Community Builder
              </p>
              <p style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 11, color: "#3a3a4e",
                letterSpacing: "0.06em", marginBottom: 36,
              }}>
                M.Tech · VJTI Mumbai
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button
                  onClick={() =>
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                  }
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "#F0EEFF", color: "#080808",
                    border: "none", borderRadius: 6,
                    padding: "13px 26px", fontSize: 13, fontWeight: 700,
                    cursor: "pointer", transition: "opacity 0.15s",
                    fontFamily: "var(--font-body, sans-serif)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.82")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  See my work <ArrowRight size={13} />
                </button>
                <a
                  href="mailto:shraavanitople@gmail.com"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    background: "transparent", color: "#F0EEFF",
                    border: "1px solid rgba(255,255,255,0.12)", borderRadius: 6,
                    padding: "13px 26px", fontSize: 13, fontWeight: 600,
                    textDecoration: "none", transition: "border-color 0.15s",
                    fontFamily: "var(--font-body, sans-serif)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)")}
                  onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Right: socials */}
            <div style={{ display: "flex", gap: 20, alignItems: "center", paddingBottom: 4 }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{
                    display: "flex", alignItems: "center", gap: 6,
                    fontSize: 12, fontWeight: 500, color: "#333344",
                    textDecoration: "none", transition: "color 0.15s",
                    fontFamily: "var(--font-body, sans-serif)",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#F0EEFF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#333344")}
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
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
                color: "#222233",
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
    </section>
  );
}
