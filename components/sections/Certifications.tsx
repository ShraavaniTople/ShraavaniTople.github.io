"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const CERTS = [
  {
    initial: "G",
    name: "Google Project Management Professional Certificate",
    issuer: "Google",
    color: "#4285F4",
  },
  {
    initial: "G",
    name: "Advanced Data Analytics Certificate",
    issuer: "Google",
    color: "#34A853",
  },
  {
    initial: "D",
    name: "Advanced CNNs, Transfer Learning & Recurrent Networks",
    issuer: "Deep Learning specialization",
    color: "#C084FC",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="certifications" className="section-pad" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "#A1A1AA" }}
        >
          CERTIFICATIONS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
          style={{ color: "#FAFAF9" }}
        >
          Always learning.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1, ease }}
              className="p-6 rounded-xl transition-all duration-200"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(192,132,252,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              {/* Issuer badge */}
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold font-mono mb-4"
                style={{
                  background: `${cert.color}18`,
                  border: `1px solid ${cert.color}30`,
                  color: cert.color,
                }}
              >
                {cert.initial}
              </div>

              {/* Name */}
              <h3 className="text-sm font-semibold leading-snug mb-2" style={{ color: "#FAFAF9" }}>
                {cert.name}
              </h3>

              {/* Issuer */}
              <p className="text-xs mb-4" style={{ color: "#A1A1AA" }}>
                {cert.issuer}
              </p>

              {/* Verified badge */}
              <span
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-mono"
                style={{
                  background: "rgba(74,222,128,0.08)",
                  border: "1px solid rgba(74,222,128,0.2)",
                  color: "#4ADE80",
                }}
              >
                ✓ Verified
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
