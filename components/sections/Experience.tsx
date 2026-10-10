"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    role: "Software Engineer",
    co: "Agora AI",
    period: "Jul 2025 – Sep 2026",
    bullets: [
      "Built React and TypeScript dashboards for monitoring AI model outputs, focused on making dense data actually readable.",
      "Wrote backend pipelines in Node.js to connect model inference to client apps via REST and streaming endpoints.",
      "Contributed to decisions on how inference results get cached, surfaced, and audited across the platform.",
    ],
    tags: ["React", "TypeScript", "Node.js", "AI Dashboards", "Data Pipelines"],
  },
  {
    role: "Data & Content Intern",
    co: "Colgate Palmolive",
    period: "Apr 2024 – Jun 2024",
    bullets: [
      "Built analytics dashboards the digital team used to track content performance across regional markets.",
      "Helped shape content strategies backed by data, which improved engagement on regional campaigns.",
    ],
    tags: ["Data Analytics", "Dashboards", "Content Strategy"],
  },
];

const education = [
  {
    degree: "M.Tech, Electronics & Telecommunication",
    school: "VJTI Mumbai",
    period: "In progress",
    note: "Research in robotics, trajectory planning, and control systems.",
  },
  {
    degree: "B.E., Electronics & Telecommunication",
    school: "University of Mumbai",
    period: "2021 – 2025",
    note: "Graduated with honors. Embedded systems, digital design, signal processing.",
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
          <h2 className="section-heading" style={{ fontSize: "clamp(32px,5vw,64px)" }}>Experience</h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontSize: 16, color: "#888899", marginBottom: 64, maxWidth: 500, lineHeight: 1.7 }}
        >
          Where I have worked and what I built.
        </motion.p>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 0, top: 8, bottom: 8, width: 1,
            background: "linear-gradient(to bottom, rgba(0,180,216,0.4), rgba(0,180,216,0.05))",
          }} />

          {jobs.map((job, i) => (
            <motion.div key={job.co}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.12 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
              style={{ paddingLeft: 36, paddingBottom: 52, position: "relative" }}
            >
              {/* Timeline node */}
              <div style={{
                position: "absolute", left: -4, top: 6,
                width: 9, height: 9, borderRadius: "50%",
                background: "#00B4D8",
                boxShadow: "0 0 10px rgba(0,180,216,0.7), 0 0 20px rgba(0,180,216,0.3)",
              }} />

              <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 40, alignItems: "start" }} className="work-inner">
                <div>
                  <p style={{
                    fontFamily: "var(--font-display, sans-serif)",
                    fontSize: 22, fontWeight: 700, color: "#F0EEFF",
                    lineHeight: 1.2, marginBottom: 6,
                  }}>{job.co}</p>
                  <p style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: 10, color: "#00B4D8",
                    fontWeight: 700, letterSpacing: "0.08em",
                    textTransform: "uppercase", marginBottom: 6,
                  }}>{job.role}</p>
                  <p style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: 10, color: "#333344",
                  }}>{job.period}</p>
                </div>
                <div>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
                    {job.bullets.map((b, j) => (
                      <li key={j} style={{
                        fontSize: 14, color: "#888899",
                        paddingLeft: 14, position: "relative",
                        lineHeight: 1.75, fontFamily: "var(--font-body, sans-serif)",
                      }}>
                        <span style={{
                          position: "absolute", left: 0, top: 9,
                          width: 4, height: 4, borderRadius: "50%",
                          background: "rgba(0,180,216,0.45)",
                          display: "inline-block",
                        }} />
                        {b}
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

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.38 }}
          style={{ marginTop: 24 }}
        >
          <p style={{
            fontFamily: "var(--font-mono, monospace)",
            fontSize: 10, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase",
            color: "#333344", marginBottom: 28,
          }}>
            Education
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="edu-grid">
            {education.map((e, i) => (
              <motion.div key={e.school}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.44 + i * 0.1 }}
                style={{
                  padding: "22px 20px",
                  borderTop: "2px solid rgba(0,180,216,0.25)",
                  background: "#0A0A0A",
                  borderRadius: "0 0 8px 8px",
                  position: "relative", overflow: "hidden",
                }}
              >
                <div style={{
                  position: "absolute", top: -1, left: 0, right: 0, height: 2,
                  background: "linear-gradient(90deg, #00B4D8, transparent 70%)",
                }} />
                <p style={{
                  fontFamily: "var(--font-display, sans-serif)",
                  fontSize: 15, fontWeight: 700,
                  color: "#F0EEFF", marginBottom: 6, lineHeight: 1.3,
                }}>{e.degree}</p>
                <p style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 11, color: "#00B4D8", marginBottom: 4,
                }}>{e.school}</p>
                <p style={{
                  fontFamily: "var(--font-mono, monospace)",
                  fontSize: 10, color: "#333344", marginBottom: 12,
                }}>{e.period}</p>
                <p style={{
                  fontSize: 12, color: "#555566",
                  lineHeight: 1.65, fontFamily: "var(--font-body, sans-serif)",
                }}>{e.note}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <style>{`
        @media(max-width:768px){
          .work-inner{grid-template-columns:1fr!important;gap:16px!important;}
          .edu-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
