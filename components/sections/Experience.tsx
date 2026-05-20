"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    co: "Agora AI", role: "Frontend Engineer",
    period: "Jul 2025 – Present", current: true,
    color: "#C9573A",
    bullets: [
      "Built and optimized React + TypeScript interfaces for AI dashboards, improving performance by 30%",
      "Collaborated with AI researchers to develop real-time inference visualization tools",
      "Applied Agile practices to deliver features on schedule in a cross-functional team",
    ],
    tags: ["React", "TypeScript", "AI", "Agile"],
  },
  {
    co: "Colgate Palmolive", role: "Data & Content Intern",
    period: "Apr 2024 – Jun 2024", current: false,
    color: "#D97706",
    bullets: [
      "Designed data-driven content strategies, boosting engagement by 25%",
      "Created real-time analytics dashboards to improve developer experience",
      "Coordinated with global teams to scale content operations",
    ],
    tags: ["Data Analytics", "Content Strategy", "Dashboards"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section" id="experience" ref={ref} style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="label" style={{ marginBottom: 12 }}>Work Experience</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }}
          style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 40, color: "#111111" }}>
          Where I&apos;ve worked.
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {jobs.map((job, i) => (
            <motion.div key={job.co}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card"
              style={{ padding: "28px 32px" }}
            >
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                {/* Monogram */}
                <div style={{
                  width: 44, height: 44, borderRadius: 12, flexShrink: 0,
                  background: job.color + "18",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 13, fontWeight: 800, color: job.color,
                }}>
                  {job.co.slice(0, 2).toUpperCase()}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                    <span style={{ fontSize: 16, fontWeight: 700, color: "#111111" }}>{job.role}</span>
                    {job.current && <span style={{ fontSize: 11, fontWeight: 600, background: "#DCFCE7", color: "#166534", borderRadius: 99, padding: "2px 9px" }}>Current</span>}
                  </div>
                  <p style={{ fontSize: 13, color: "#A09C99", marginBottom: 18 }}>{job.co} · {job.period}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 7, marginBottom: 18 }}>
                    {job.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: 14, color: "#6B6663", paddingLeft: 16, position: "relative", lineHeight: 1.6 }}>
                        <span style={{ position: "absolute", left: 0, color: job.color, fontWeight: 600 }}>–</span>{b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {job.tags.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
