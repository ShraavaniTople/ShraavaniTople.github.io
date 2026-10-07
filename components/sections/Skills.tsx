"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    label: "Robotics & Control",
    items: ["ROS2", "Gazebo", "TurtleBot3", "Trajectory Planning", "Pure Pursuit", "Cubic Spline Interpolation", "Inverse Kinematics", "MATLAB"],
  },
  {
    label: "Computer Vision & ML",
    items: ["OpenCV", "TensorFlow", "Keras", "PyTorch", "CNNs", "Transfer Learning", "MediaPipe", "Object Detection"],
  },
  {
    label: "Embedded & IoT",
    items: ["Raspberry Pi", "Arduino", "FPGA", "Embedded C", "GPIO", "I2C / SPI", "Real-Time Systems"],
  },
  {
    label: "Languages & Tools",
    items: ["Python", "C++", "TypeScript", "React", "FastAPI", "Node.js", "Pytest", "Git", "Docker"],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section" id="skills" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}
        >
          <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "#00D4AA", letterSpacing: "0.1em" }}>03</span>
          <h2 style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 700, letterSpacing: "-0.03em", color: "#F0EEFF", fontFamily: "var(--font-display, sans-serif)" }}>
            Skills
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          style={{ fontSize: 16, color: "#888899", marginBottom: 56, maxWidth: 500, lineHeight: 1.7 }}
        >
          Technical stack across robotics, ML, embedded systems, and software.
        </motion.p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 40 }} className="skills-grid">
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.12 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <p style={{
                fontFamily: "var(--font-mono, monospace)",
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.14em", textTransform: "uppercase",
                color: "#00D4AA", marginBottom: 18,
              }}>
                {g.label}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                {g.items.map(item => (
                  <span key={item} style={{
                    display: "inline-flex", alignItems: "center",
                    padding: "4px 11px", borderRadius: 4,
                    border: "1px solid rgba(255,255,255,0.08)",
                    fontSize: 12, fontWeight: 500, color: "#888899",
                    fontFamily: "var(--font-body, sans-serif)",
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){.skills-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
