"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const groups = [
  {
    id: "ROB",
    label: "Robotics & Control",
    items: ["ROS2", "Gazebo", "TurtleBot3", "Trajectory Planning", "Pure Pursuit", "Cubic Splines", "Inverse Kinematics", "MATLAB"],
  },
  {
    id: "CV",
    label: "Computer Vision & ML",
    items: ["OpenCV", "TensorFlow", "Keras", "PyTorch", "CNNs", "Transfer Learning", "MediaPipe", "Object Detection"],
  },
  {
    id: "EMB",
    label: "Embedded & IoT",
    items: ["Raspberry Pi", "Arduino", "FPGA", "Embedded C", "GPIO", "I2C / SPI", "Real-Time Systems"],
  },
  {
    id: "SW",
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
          <span className="section-num">03</span>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px,5vw,64px)" }}>Skills</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.08 }}
          style={{ fontSize: 16, color: "#888899", marginBottom: 56, maxWidth: 500, lineHeight: 1.7 }}
        >
          Tools I actually use.
        </motion.p>

        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {groups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: 0,
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                padding: "28px 0",
                alignItems: "center",
              }}
              className="skill-row"
            >
              {/* Category */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 9, color: "rgba(0,180,216,0.35)",
                  letterSpacing: "0.1em",
                }}>{g.id}</span>
                <p style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 10, fontWeight: 700,
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  color: "#F0EEFF",
                }}>
                  {g.label}
                </p>
              </div>

              {/* Items */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {g.items.map((item, j) => (
                  <motion.span
                    key={item}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.18 + i * 0.1 + j * 0.03 }}
                    style={{
                      fontFamily: "var(--font-mono, monospace)",
                      fontSize: 12, color: "#5A6478",
                      padding: "5px 12px",
                      border: "1px solid rgba(255,255,255,0.06)",
                      borderRadius: 4,
                      transition: "color 0.15s, border-color 0.15s",
                      cursor: "default",
                    }}
                    whileHover={{ color: "#F0EEFF", borderColor: "rgba(0,180,216,0.25)" } as never}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .skill-row { grid-template-columns: 1fr !important; gap: 14px !important; }
        }
      `}</style>
    </section>
  );
}
