"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowDown } from "lucide-react";

const fade = (delay = 0, extra?: object) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  ...extra,
});

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/shraavanitople", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/shraavani___", label: "Instagram" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com", label: "Email" },
];

export default function Hero() {
  const scrollToWork = () => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ background: "#0C0C0E", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, paddingBottom: 40 }}>
      <div className="container" style={{ width: "100%" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          className="hero-grid"
        >
          {/* LEFT: Text */}
          <div>
            <motion.p {...fade(0.2)} className="label" style={{ marginBottom: 18 }}>
              Frontend Engineer · Robotics · Community
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              style={{
                fontSize: "clamp(52px, 7vw, 96px)",
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                color: "#F0EEE9",
                marginBottom: 20,
              }}
            >
              Shraavani<br />
              <span style={{ color: "#FF7262" }}>Tople.</span>
            </motion.h1>

            {/* Coral accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: 3, width: 48, background: "#FF7262", borderRadius: 99, marginBottom: 28, transformOrigin: "left" }}
            />

            <motion.p {...fade(0.65)} style={{ fontSize: 16, color: "#8A8784", lineHeight: 1.75, marginBottom: 28, maxWidth: 420 }}>
              I build AI interfaces, train robotic arms, and organize developer communities. Currently at{" "}
              <span style={{ color: "#F0EEE9", fontWeight: 600 }}>Agora AI</span>.
            </motion.p>

            {/* Status badge */}
            <motion.div {...fade(0.75)} style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(255,114,98,0.1)",
              border: "1px solid rgba(255,114,98,0.2)",
              borderRadius: 99, padding: "5px 14px", marginBottom: 28
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FF7262", display: "inline-block", animation: "heropulse 2s infinite" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "#FF8B7D" }}>Frontend Engineer @ Agora AI</span>
            </motion.div>

            {/* Social links */}
            <motion.div {...fade(0.85)} style={{ display: "flex", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 13, fontWeight: 500, color: "#4A4947", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#FF7262")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#4A4947")}
                >
                  <Icon size={14} />
                  {label}
                </a>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div {...fade(0.95)} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={scrollToWork}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "#FF7262", color: "#0C0C0E",
                  border: "none", borderRadius: 10, padding: "12px 24px",
                  fontSize: 14, fontWeight: 700, cursor: "pointer", transition: "opacity 0.15s"
                }}
                onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
              >
                View Work <ArrowDown size={14} />
              </button>
              <a href="mailto:shraavanitople@gmail.com"
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: "transparent", color: "#F0EEE9",
                  border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, padding: "12px 24px",
                  fontSize: 14, fontWeight: 600, cursor: "pointer", textDecoration: "none", transition: "border-color 0.15s"
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(255,114,98,0.4)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
              >
                Say hello
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            {/* Coral glow blob */}
            <div style={{
              position: "absolute", top: "15%", left: "15%",
              width: 300, height: 300, borderRadius: "50%",
              background: "rgba(255,114,98,0.08)",
              filter: "blur(80px)",
              zIndex: 0
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/shraavani.png"
                alt="Shraavani Tople"
                style={{
                  width: "100%",
                  maxHeight: 560,
                  objectFit: "cover",
                  objectPosition: "top center",
                  borderRadius: 20,
                  border: "1px solid rgba(255,255,255,0.08)",
                  display: "block",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .hero-grid > div:last-child img {
            max-height: 300px !important;
          }
        }
        @keyframes heropulse {
          0%,100%{ opacity:1; } 50%{ opacity:0.3; }
        }
      `}</style>
    </section>
  );
}
