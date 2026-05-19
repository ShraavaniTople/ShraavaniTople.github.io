"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = ["Python", "C++", "React", "TypeScript", "ROS2", "OpenCV", "PyTorch", "FastAPI", "Raspberry Pi", "Embedded Systems", "Git"];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="section" id="about" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="container">
        <div style={{ maxWidth: 700 }}>
          <motion.p {...anim(0)} className="label" style={{ marginBottom: 14 }}>About</motion.p>
          <motion.h2 {...anim(0.1)} style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 800, letterSpacing: "-0.025em", lineHeight: 1.1, marginBottom: 24, color: "#F0EEE9" }}>
            Engineer at the intersection<br />of machines and people.
          </motion.h2>
          <motion.p {...anim(0.2)} style={{ fontSize: 16, color: "#8A8784", lineHeight: 1.8, marginBottom: 16 }}>
            I&apos;m a B.E. Electronics & Telecommunications grad from University of Mumbai, currently building AI-powered frontend at Agora AI. My work spans robotics, computer vision, deep reinforcement learning, and developer ecosystems.
          </motion.p>
          <motion.p {...anim(0.3)} style={{ fontSize: 16, color: "#8A8784", lineHeight: 1.8, marginBottom: 32 }}>
            I&apos;ve trained robotic arms to pick objects with deep RL, built tamper-proof AI proxies with Merkle trees, organized India&apos;s largest Ethereum hackathon, spoken at the WTM Paris Summit, and mentored hundreds of developers.
          </motion.p>
          <motion.div {...anim(0.4)} style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {skills.map(s => <span key={s} className="chip">{s}</span>)}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
