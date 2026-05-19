"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram } from "lucide-react";

const tiles = [
  { label: "Hackathon recap 🎯", g: "linear-gradient(135deg,#a78bfa,#7c3aed)" },
  { label: "Robotics lab 🤖", g: "linear-gradient(135deg,#6366f1,#4338ca)" },
  { label: "WTM Workshop 🌐", g: "linear-gradient(135deg,#ec4899,#a855f7)" },
  { label: "ETHMumbai ⚡", g: "linear-gradient(135deg,#8b5cf6,#6d28d9)" },
  { label: "Tech event 📸", g: "linear-gradient(135deg,#f0abfc,#a21caf)" },
  { label: "Community 🏗️", g: "linear-gradient(135deg,#c084fc,#7c3aed)" },
];

export default function InstagramSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section className="section" id="instagram" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="insta-layout">
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}>Creator</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 16, color: "#F0EEE9" }}>
              On the internet.
            </motion.h2>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
              style={{ fontSize: 16, color: "#8A8784", lineHeight: 1.75, marginBottom: 28 }}>
              I document my journey in tech — hackathons, robotics, events, and the communities I&apos;m building. Behind the scenes of conferences, workshops, and everything in between.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
              style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20, background: "#151517", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "12px 16px", maxWidth: 240 }}>
              <Instagram size={18} color="#a855f7" />
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#F0EEE9" }}>@shraavani___</p>
                <p style={{ fontSize: 11, color: "#4A4947" }}>Instagram</p>
              </div>
            </motion.div>
            <motion.a initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.4 }}
              href="https://instagram.com/shraavani___" target="_blank" rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#FF7262", color: "#0C0C0E", borderRadius: 10, padding: "11px 22px", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>
              <Instagram size={15} /> Follow
            </motion.a>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8 }}>
            {tiles.map((t, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, scale: 0.95 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.45, delay: 0.35 + i * 0.07 }}
                whileHover={{ scale: 1.04 }}
                style={{ aspectRatio: "1", borderRadius: 12, background: t.g, display: "flex", alignItems: "flex-end", padding: 10, cursor: "default" }}>
                <span style={{ fontSize: 11, fontWeight: 600, color: "rgba(255,255,255,0.9)", lineHeight: 1.3 }}>{t.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){ .insta-layout { grid-template-columns: 1fr !important; gap: 32px !important; } }`}</style>
    </section>
  );
}
