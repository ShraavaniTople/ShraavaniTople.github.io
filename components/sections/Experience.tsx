"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    company: "Agora AI", role: "Frontend Engineer",
    period: "Jul 2025 – Present", current: true,
    color: "#FF7262",
    bullets: [
      "Built and optimized React + TypeScript interfaces for AI dashboards, improving performance by 30%",
      "Collaborated with AI researchers to develop real-time inference visualization tools",
      "Applied Agile practices to deliver features on schedule in cross-functional team",
    ],
    tags: ["React", "TypeScript", "AI", "Agile"],
  },
  {
    company: "Colgate Palmolive", role: "Data & Content Intern",
    period: "Apr 2024 – Jun 2024", current: false,
    color: "#F59E0B",
    bullets: [
      "Designed data-driven content strategies, boosting engagement by 25%",
      "Created real-time analytics dashboards to improve developer experience",
      "Coordinated with global teams to scale content operations",
    ],
    tags: ["Data Analytics", "Content", "Dashboards"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section" id="experience" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}>Work Experience</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 48, color: "#F0EEE9" }}>
          Where I&apos;ve worked.
        </motion.h2>

        {/* Timeline */}
        <div style={{ position: "relative", paddingLeft: 32 }}>
          {/* vertical line */}
          <div style={{ position: "absolute", left: 7, top: 8, bottom: 8, width: 1, background: "rgba(255,114,98,0.2)" }} />

          {jobs.map((job, i) => (
            <motion.div key={job.company}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative", marginBottom: i < jobs.length - 1 ? 48 : 0 }}
            >
              {/* dot */}
              <div style={{ position: "absolute", left: -29, top: 6, width: 14, height: 14, borderRadius: "50%", background: job.color, border: "2px solid #0C0C0E", zIndex: 1 }} />

              <div style={{ display: "flex", alignItems: "flex-start", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
                <span style={{ fontSize: 18, fontWeight: 700, color: "#F0EEE9" }}>{job.role}</span>
                {job.current && (
                  <span style={{ fontSize: 11, fontWeight: 600, background: "rgba(255,114,98,0.15)", color: "#FF7262", borderRadius: 99, padding: "2px 10px" }}>Current</span>
                )}
              </div>
              <p style={{ fontSize: 14, color: "#8A8784", marginBottom: 16 }}>{job.company} · {job.period}</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
                {job.bullets.map((b, j) => (
                  <li key={j} style={{ fontSize: 14, color: "#8A8784", paddingLeft: 16, position: "relative", lineHeight: 1.6 }}>
                    <span style={{ position: "absolute", left: 0, color: job.color }}>→</span>{b}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {job.tags.map(t => <span key={t} className="chip">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
