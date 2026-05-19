"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowDown } from "lucide-react";

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const }
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
    <section style={{ background: "#F8F7F5", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}>
      <div className="container" style={{ width: "100%" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
          className="hero-grid"
        >
          {/* LEFT: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{ position: "relative" }}
          >
            {/* Purple blob behind photo */}
            <div style={{
              position: "absolute", top: "10%", left: "10%",
              width: 280, height: 280, borderRadius: "50%",
              background: "rgba(124,58,237,0.1)",
              filter: "blur(60px)",
              zIndex: 0
            }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <Image
                src="/shraavani.png"
                alt="Shraavani Tople"
                width={480}
                height={580}
                unoptimized
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: 560,
                  objectFit: "cover",
                  objectPosition: "top",
                  borderRadius: 20,
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 20px 60px rgba(124,58,237,0.12), 0 4px 20px rgba(0,0,0,0.06)",
                  display: "block",
                }}
              />
            </div>
          </motion.div>

          {/* RIGHT: Text */}
          <div>
            <motion.p {...fade(0.2)} className="label" style={{ marginBottom: 16 }}>
              Frontend Engineer · Robotics Builder · Community Leader
            </motion.p>

            <div style={{ overflow: "hidden", marginBottom: 8 }}>
              <motion.h1
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ fontSize: "clamp(48px,6vw,80px)", fontWeight: 800, lineHeight: 1.0, letterSpacing: "-0.03em", color: "#111110" }}
              >
                Shraavani<br />
                <span style={{ color: "#7C3AED" }}>Tople.</span>
              </motion.h1>
            </div>

            {/* Purple line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              style={{ height: 3, width: 56, background: "#7C3AED", borderRadius: 99, marginBottom: 24, transformOrigin: "left" }}
            />

            <motion.p {...fade(0.6)} style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7, marginBottom: 28, maxWidth: 440 }}>
              I build AI interfaces and robotic systems. Frontend Engineer at{" "}
              <span style={{ color: "#111110", fontWeight: 600 }}>Agora AI</span>, robotics researcher, and community builder across India and beyond.
            </motion.p>

            {/* Current role badge */}
            <motion.div {...fade(0.7)} style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#EDE9FE", border: "1px solid #DDD6FE", borderRadius: 99, padding: "6px 14px", marginBottom: 32 }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#7C3AED", display: "inline-block", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "#5B21B6" }}>Frontend Engineer @ Agora AI</span>
            </motion.div>

            {/* Social links */}
            <motion.div {...fade(0.8)} style={{ display: "flex", gap: 16, marginBottom: 36, flexWrap: "wrap" }}>
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 500, color: "#6B7280", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#7C3AED")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#6B7280")}
                >
                  <Icon size={15} />
                  {label}
                </a>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.9)} style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={scrollToWork}
                style={{ display: "flex", alignItems: "center", gap: 8, background: "#7C3AED", color: "white", border: "none", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", transition: "background 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#6D28D9")}
                onMouseLeave={e => (e.currentTarget.style.background = "#7C3AED")}
              >
                View Work <ArrowDown size={15} />
              </button>
              <a href="mailto:shraavanitople@gmail.com"
                style={{ display: "flex", alignItems: "center", gap: 8, background: "transparent", color: "#111110", border: "1px solid rgba(0,0,0,0.15)", borderRadius: 10, padding: "12px 24px", fontSize: 14, fontWeight: 600, cursor: "pointer", textDecoration: "none", transition: "border-color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#7C3AED")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
        }
        @keyframes pulse {
          0%,100%{ opacity:1; } 50%{ opacity:0.5; }
        }
      `}</style>
    </section>
  );
}
