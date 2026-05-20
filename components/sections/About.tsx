"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = ["Python", "C++", "React", "TypeScript", "ROS2", "OpenCV", "PyTorch", "FastAPI", "Raspberry Pi", "Git"];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const a = (d = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: { duration: 0.55, delay: d, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="section" id="about" ref={ref} style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 64, alignItems: "start" }} className="about-grid">
          <motion.div {...a(0)}>
            <p className="label" style={{ marginBottom: 12 }}>About</p>
            <p style={{ fontSize: 13, color: "#A09C99", lineHeight: 1.7 }}>Engineer · Builder · Community</p>
          </motion.div>
          <div>
            <motion.p {...a(0.1)} style={{ fontSize: 17, color: "#111111", lineHeight: 1.8, marginBottom: 16, fontWeight: 400 }}>
              Currently building AI-powered software at Agora AI. My work spans robotics, computer vision, deep reinforcement learning, and developer ecosystems.
            </motion.p>
            <motion.p {...a(0.2)} style={{ fontSize: 17, color: "#6B6663", lineHeight: 1.8, marginBottom: 32 }}>
              I&apos;ve trained robotic arms to pick objects with deep RL, built tamper-proof AI proxies with Merkle trees, organized India&apos;s largest Ethereum hackathon, and mentored hundreds of developers.
            </motion.p>
            <motion.div {...a(0.3)} style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
              {skills.map(s => <span key={s} className="chip">{s}</span>)}
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`@media(max-width:640px){ .about-grid { grid-template-columns:1fr !important; gap:24px !important; } }`}</style>
    </section>
  );
}
