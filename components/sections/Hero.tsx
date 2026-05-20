"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/shraavanitople", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/shraavani___", label: "Instagram" },
];

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero() {
  return (
    <section style={{ background: "#F4F0EA", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, paddingBottom: 40 }}>
      <div className="container" style={{ width: "100%" }}>

        {/* BENTO GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(12, 1fr)",
          gridTemplateRows: "auto auto auto",
          gap: 12,
        }} className="hero-bento">

          {/* 1. NAME / HEADLINE CARD — spans 8 cols, rows 1-2 */}
          <motion.div {...f(0.1)}
            className="bento-card"
            style={{
              gridColumn: "1 / 9",
              gridRow: "1 / 3",
              padding: "40px 44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: 280,
            }}>
            <p className="label">Portfolio — 2026</p>
            <div>
              <h1 style={{
                fontSize: "clamp(48px, 6.5vw, 88px)",
                fontWeight: 900,
                lineHeight: 0.93,
                letterSpacing: "-0.04em",
                color: "#111111",
                marginBottom: 20,
              }}>
                Shraavani<br />
                <em style={{ fontStyle: "italic", color: "#C9573A" }}>Tople.</em>
              </h1>
              <p style={{ fontSize: 15, color: "#6B6663", maxWidth: 400, lineHeight: 1.7 }}>
                Engineer, builder, and community person — working at the intersection of AI, robotics, and developer ecosystems.
              </p>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Robotics", "AI / ML", "Frontend", "Community"].map(tag => (
                <span key={tag} className="chip">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* 2. PHOTO CARD — spans 4 cols, rows 1-2 */}
          <motion.div {...f(0.2)}
            className="bento-card"
            style={{
              gridColumn: "9 / 13",
              gridRow: "1 / 3",
              padding: 0,
              overflow: "hidden",
              minHeight: 280,
            }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/shraavani.png"
              alt="Shraavani Tople"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
                display: "block",
              }}
            />
          </motion.div>

          {/* 3. STATUS CARD — spans 5 cols, row 3 */}
          <motion.div {...f(0.3)}
            className="bento-card"
            style={{
              gridColumn: "1 / 6",
              gridRow: "3",
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}>
            <div style={{
              width: 10, height: 10, borderRadius: "50%",
              background: "#22C55E", flexShrink: 0,
              animation: "pulse-dot 2s infinite",
            }} />
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#111111" }}>Software Developer at Agora AI</p>
              <p style={{ fontSize: 12, color: "#A09C99" }}>Building AI-powered software</p>
            </div>
          </motion.div>

          {/* 4. LOCATION CARD — spans 3 cols, row 3 */}
          <motion.div {...f(0.35)}
            className="bento-card"
            style={{
              gridColumn: "6 / 9",
              gridRow: "3",
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}>
            <MapPin size={16} color="#A09C99" />
            <div>
              <p style={{ fontSize: 13, fontWeight: 600, color: "#111111" }}>Mumbai</p>
              <p style={{ fontSize: 12, color: "#A09C99" }}>India</p>
            </div>
          </motion.div>

          {/* 5. SOCIAL CARD — spans 4 cols, row 3 */}
          <motion.div {...f(0.4)}
            className="bento-card-dark"
            style={{
              gridColumn: "9 / 13",
              gridRow: "3",
              padding: "24px 28px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}>
            {socials.map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                aria-label={label}
                style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.15s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
                <Icon size={18} />
              </a>
            ))}
            <a href="mailto:shraavanitople@gmail.com"
              aria-label="Email"
              style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#ffffff")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}>
              <Mail size={18} />
            </a>
          </motion.div>

        </div>

      </div>

      <style>{`
        @media(max-width:900px){
          .hero-bento {
            grid-template-columns: repeat(6,1fr) !important;
          }
          .hero-bento > *:nth-child(1){ grid-column: 1/5 !important; grid-row: 1/3 !important; }
          .hero-bento > *:nth-child(2){ grid-column: 5/7 !important; grid-row: 1/3 !important; min-height:200px !important; }
          .hero-bento > *:nth-child(3){ grid-column: 1/4 !important; grid-row: 3 !important; }
          .hero-bento > *:nth-child(4){ grid-column: 4/7 !important; grid-row: 3 !important; }
          .hero-bento > *:nth-child(5){ grid-column: 1/7 !important; grid-row: 4 !important; }
        }
        @media(max-width:640px){
          .hero-bento {
            grid-template-columns: 1fr 1fr !important;
            grid-template-rows: auto !important;
          }
          .hero-bento > *:nth-child(1){ grid-column: 1/3 !important; grid-row: auto !important; min-height:auto !important; }
          .hero-bento > *:nth-child(2){ grid-column: 1/3 !important; grid-row: auto !important; height:240px !important; min-height:240px !important; }
          .hero-bento > *:nth-child(3){ grid-column: 1/2 !important; grid-row: auto !important; }
          .hero-bento > *:nth-child(4){ grid-column: 2/3 !important; grid-row: auto !important; }
          .hero-bento > *:nth-child(5){ grid-column: 1/3 !important; grid-row: auto !important; }
        }
      `}</style>
    </section>
  );
}
