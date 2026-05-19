"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    company: "Agora AI",
    initials: "AA",
    color: "#7C3AED",
    colorBg: "#EDE9FE",
    role: "Frontend Engineer",
    period: "Jul 2025 – Present",
    current: true,
    bullets: [
      "Built and optimized React + TypeScript interfaces for AI dashboards, improving performance by 30%",
      "Collaborated with AI researchers to develop real-time inference visualization tools",
      "Applied Agile practices to deliver features on schedule in a cross-functional team",
    ],
    tags: ["React", "TypeScript", "AI Dashboards", "Agile"],
  },
  {
    company: "Colgate Palmolive",
    initials: "CP",
    color: "#D97706",
    colorBg: "#FEF3C7",
    role: "Data & Content Intern",
    period: "Apr 2024 – Jun 2024",
    current: false,
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
    <section className="section section-alt" id="experience" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}
        >Work Experience</motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 40, color: "#111110" }}
        >Where I&apos;ve worked.</motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card"
              style={{ padding: 28 }}
            >
              <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                {/* Monogram */}
                <div style={{
                  width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                  background: job.colorBg, display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 14, fontWeight: 700, color: job.color
                }}>{job.initials}</div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                    <span style={{ fontSize: 17, fontWeight: 700, color: "#111110" }}>{job.role}</span>
                    {job.current && (
                      <span style={{ fontSize: 11, fontWeight: 600, background: "#DCFCE7", color: "#166534", borderRadius: 99, padding: "2px 10px" }}>Current</span>
                    )}
                  </div>
                  <div style={{ fontSize: 14, color: "#6B7280", marginBottom: 16 }}>
                    {job.company} · {job.period}
                  </div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                    {job.bullets.map((b, j) => (
                      <li key={j} style={{ fontSize: 14, color: "#6B7280", paddingLeft: 16, position: "relative" }}>
                        <span style={{ position: "absolute", left: 0, color: "#7C3AED" }}>→</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
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
