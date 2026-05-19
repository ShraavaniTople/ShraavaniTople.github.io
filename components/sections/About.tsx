"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const SKILLS = [
  "Python", "C++", "React", "TypeScript", "ROS2",
  "OpenCV", "PyTorch", "FastAPI", "Raspberry Pi",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="section-pad" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "#A1A1AA" }}
        >
          ABOUT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-8"
          style={{ color: "#FAFAF9" }}
        >
          Engineer. Builder. Community person.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="text-base leading-relaxed"
            style={{ color: "#A1A1AA" }}
          >
            I&apos;m a final-year Electronics &amp; Telecommunications grad from University of Mumbai, currently building AI-powered frontend at Agora AI. My work spans robotics, computer vision, and developer ecosystems.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="text-base leading-relaxed"
            style={{ color: "#A1A1AA" }}
          >
            I&apos;ve trained robotic arms to pick up objects with deep reinforcement learning, built tamper-proof AI proxies with cryptographic audit trails, organized India&apos;s largest Ethereum hackathon, and mentored hundreds of developers. I&apos;m always building something.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.32, ease }}
          className="flex flex-wrap gap-2"
        >
          {SKILLS.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.35 + i * 0.05, ease }}
              className="tag"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
