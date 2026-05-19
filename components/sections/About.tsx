"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = ["Python", "C++", "React", "TypeScript", "ROS2", "OpenCV", "PyTorch", "FastAPI", "Raspberry Pi", "Git"];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });
  const f = (delay = 0) => ({
    variants: { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } },
    initial: "hidden",
    animate: inView ? "visible" : "hidden",
    transition: { duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="section" id="about" ref={ref}>
      <div className="container">
        <div style={{ maxWidth: 720 }}>
          <motion.p {...f(0)} className="label" style={{ marginBottom: 12 }}>About</motion.p>
          <motion.h2 {...f(0.1)} style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24, color: "#111110" }}>
            Engineer. Builder.<br />Community person.
          </motion.h2>
          <motion.p {...f(0.2)} style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.8, marginBottom: 16 }}>
            I&apos;m a B.E. Electronics & Telecommunications grad from University of Mumbai, currently building AI-powered frontend at Agora AI. My work spans robotics, computer vision, deep reinforcement learning, and developer ecosystems.
          </motion.p>
          <motion.p {...f(0.3)} style={{ fontSize: 16, color: "#6B7280", lineHeight: 1.8, marginBottom: 32 }}>
            I&apos;ve trained robotic arms to pick objects with deep RL, built tamper-proof AI proxies with cryptographic audit trails, organized India&apos;s largest Ethereum hackathon, spoken at the WTM Paris Summit, and mentored hundreds of developers. I&apos;m always building something new.
          </motion.p>
          <motion.div {...f(0.4)} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skills.map(s => (
              <span key={s} className="tag">{s}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
