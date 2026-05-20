"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const certs = [
  { badge: "G", bg: "#EEF2FF", color: "#4F46E5", name: "Project Management Professional Certificate", issuer: "Google" },
  { badge: "G", bg: "#F0FDF4", color: "#16A34A", name: "Advanced Data Analytics Certificate", issuer: "Google" },
  { badge: "DL", bg: "#FDF4FF", color: "#9333EA", name: "Advanced CNNs, Transfer Learning & Recurrent Networks", issuer: "Deep Learning Specialization" },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section className="section" id="certifications" ref={ref} style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="label" style={{ marginBottom: 12 }}>Certifications</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }}
          style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 40, color: "#111111" }}>
          Always learning.
        </motion.h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="certs-grid">
          {certs.map((c, i) => (
            <motion.div key={c.name}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.18 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card" style={{ padding: 26 }}
            >
              <div style={{ width: 44, height: 44, borderRadius: 12, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800, color: c.color, marginBottom: 16 }}>{c.badge}</div>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#111111", lineHeight: 1.4, marginBottom: 8 }}>{c.name}</p>
              <p style={{ fontSize: 13, color: "#6B6663", marginBottom: 16 }}>{c.issuer}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 5, fontSize: 12, color: "#16A34A", fontWeight: 600 }}>
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
