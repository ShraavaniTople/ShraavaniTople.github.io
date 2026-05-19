"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const certs = [
  { badge: "G", bg: "#1E3A5F", color: "#60A5FA", name: "Project Management Professional Certificate", issuer: "Google" },
  { badge: "G", bg: "#14442A", color: "#4ADE80", name: "Advanced Data Analytics Certificate", issuer: "Google" },
  { badge: "DL", bg: "#3B1F4E", color: "#C084FC", name: "Advanced CNNs, Transfer Learning & Recurrent Networks", issuer: "Deep Learning Specialization" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section className="section" id="certifications" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}>Certifications</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 40, color: "#F0EEE9" }}>
          Always learning.
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }} className="certs-grid">
          {certs.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card" style={{ padding: 24 }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: c.color, marginBottom: 16 }}>{c.badge}</div>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#F0EEE9", lineHeight: 1.4, marginBottom: 8 }}>{c.name}</p>
              <p style={{ fontSize: 13, color: "#8A8784", marginBottom: 16 }}>{c.issuer}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#4ADE80", fontWeight: 500 }}>
                <CheckCircle size={13} /> Verified
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:640px){ .certs-grid { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  );
}
