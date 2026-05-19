"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const tiles = [
  { label: "Hackathon recap 🎯", gradient: "linear-gradient(135deg,#a78bfa,#7c3aed)" },
  { label: "Robotics lab 🤖", gradient: "linear-gradient(135deg,#6366f1,#4f46e5)" },
  { label: "WTM Workshop 🌐", gradient: "linear-gradient(135deg,#ec4899,#a855f7)" },
  { label: "ETHMumbai ⚡", gradient: "linear-gradient(135deg,#8b5cf6,#6d28d9)" },
  { label: "Tech event 📸", gradient: "linear-gradient(135deg,#c084fc,#7c3aed)" },
  { label: "Community 🏗️", gradient: "linear-gradient(135deg,#f0abfc,#a855f7)" },
];

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section section-alt" id="creator" ref={ref}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="insta-grid">
          {/* Left */}
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}>Creator</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, color: "#111110" }}
            >On the internet.</motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.7, marginBottom: 28 }}>
              I document my journey in tech — events, hackathons, robotics labs, and the communities I&apos;m building. Behind-the-scenes content from conferences, workshops, and everything in between.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24, background: "white", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, padding: "12px 16px", maxWidth: 260 }}
            >
              <Instagram size={20} color="#a855f7" />
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#111110" }}>@shraavani___</p>
                <p style={{ fontSize: 11, color: "#9CA3AF" }}>Instagram</p>
              </div>
            </motion.div>
            <motion.a initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
              href="https://instagram.com/shraavani___" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#7C3AED", color: "white", borderRadius: 10, padding: "11px 22px", fontSize: 14, fontWeight: 600, textDecoration: "none", transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#6D28D9")}
              onMouseLeave={e => (e.currentTarget.style.background = "#7C3AED")}
            >
              <Instagram size={15} /> Follow on Instagram
            </motion.a>
          </div>

          {/* Right: gradient tiles */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}
          >
            {tiles.map((tile, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.07 }}
                style={{ aspectRatio: "1", borderRadius: 12, background: tile.gradient, display: "flex", alignItems: "flex-end", padding: 10, transition: "transform 0.2s", cursor: "default" }}
                whileHover={{ scale: 1.04 }}
              >
                <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.9)", lineHeight: 1.3 }}>{tile.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .insta-grid { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  );
}
