"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    role: "Software Engineer",
    co: "Agora AI",
    period: "Jul 2025 — Mar 2026",
    bullets: [
      "Built and iterated React and TypeScript interfaces for AI dashboards, focusing on data-dense views for model output monitoring.",
      "Developed backend data pipelines connecting AI model outputs to client applications — REST and streaming endpoints in Node.js.",
      "Contributed to architectural decisions on how AI inference results are surfaced, cached, and audited across the platform.",
    ],
    tags: ["React", "TypeScript", "Node.js", "AI Dashboards", "Data Pipelines"],
  },
  {
    role: "Data & Content Intern",
    co: "Colgate Palmolive",
    period: "Apr 2024 — Jun 2024",
    bullets: [
      "Built analytics dashboards used by the digital team to track content performance across markets.",
      "Designed data-driven content strategies that improved engagement metrics for regional campaigns.",
    ],
    tags: ["Data Analytics", "Dashboards", "Content Strategy"],
  },
];

const education = [
  {
    degree: "M.Tech, Electronics & Telecommunication Engineering",
    school: "VJTI Mumbai",
    period: "In progress",
    note: "Research focus: robotics, trajectory planning, control systems.",
  },
  {
    degree: "B.E., Electronics & Telecommunication Engineering",
    school: "University of Mumbai",
    period: "2021 — 2025",
    note: "Graduated with honors. Coursework in embedded systems, digital design, and signal processing.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section className="section" id="experience" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}
        >
          <span className="section-num">04</span>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px,5vw,64px)" }}>
            Experience
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontSize: 16, color: "#888899", marginBottom: 56, maxWidth: 500, lineHeight: 1.7 }}
        >
          Where I have worked and what I shipped.
        </motion.p>

        {jobs.map((job, i) => (
          <motion.div key={job.co}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.12 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
            style={{ borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: 40, paddingBottom: 40 }}
          >
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 40, alignItems: "start" }} className="work-inner">
              <div>
                <p style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: 18, fontWeight: 700, color: "#F0EEFF", marginBottom: 6 }}>{job.co}</p>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "#00B4D8", fontWeight: 700, marginBottom: 4, letterSpacing: "0.04em" }}>{job.role}</p>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "#444455" }}>{job.period}</p>
              </div>
              <div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ fontSize: 14, color: "#888899", paddingLeft: 16, position: "relative", lineHeight: 1.7, fontFamily: "var(--font-body, sans-serif)" }}>
                      <span style={{ position: "absolute", left: 0, color: "#00B4D8" }}>—</span>{b}
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

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.36 }}
          style={{ marginTop: 60 }}
        >
          <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#444455", marginBottom: 32 }}>
            Education
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="edu-grid">
            {education.map((e, i) => (
              <motion.div key={e.school}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.42 + i * 0.1 }}
                style={{
                  padding: "24px 22px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: 10, background: "#0A0A0A",
                }}
              >
                <p style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: 15, fontWeight: 700, color: "#F0EEFF", marginBottom: 6, lineHeight: 1.3 }}>{e.degree}</p>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "#00B4D8", marginBottom: 4 }}>{e.school}</p>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 11, color: "#444455", marginBottom: 12 }}>{e.period}</p>
                <p style={{ fontSize: 12, color: "#555566", lineHeight: 1.6, fontFamily: "var(--font-body, sans-serif)" }}>{e.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        @media(max-width:768px){
          .work-inner{grid-template-columns:1fr!important;gap:20px!important;}
          .edu-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
