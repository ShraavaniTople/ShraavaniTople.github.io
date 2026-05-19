"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const EXPERIENCES = [
  {
    monogram: "AA",
    monogramColor: "#C084FC",
    company: "Agora AI",
    role: "Frontend Engineer",
    period: "Jul 2025 – Present",
    current: true,
    bullets: [
      "Built and optimized React + TypeScript interfaces for AI dashboards, improving performance by 30%",
      "Collaborated with AI researchers to develop real-time inference visualization tools",
      "Applied Agile practices to deliver features on schedule in a cross-functional team",
    ],
    tags: ["React", "TypeScript", "Agile", "AI Dashboards"],
  },
  {
    monogram: "CP",
    monogramColor: "#F59E0B",
    company: "Colgate Palmolive",
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
    <section id="experience" className="section-pad" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "#A1A1AA" }}
        >
          WORK EXPERIENCE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
          style={{ color: "#FAFAF9" }}
        >
          Where I&apos;ve worked.
        </motion.h2>

        <div className="space-y-5">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16 + i * 0.12, ease }}
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
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                {/* Monogram */}
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-xs font-bold font-mono shrink-0"
                  style={{
                    background: `${exp.monogramColor}18`,
                    border: `1px solid ${exp.monogramColor}30`,
                    color: exp.monogramColor,
                  }}
                >
                  {exp.monogram}
                </div>

                <div className="flex-1">
                  {/* Header row */}
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-base font-semibold" style={{ color: "#FAFAF9" }}>
                      {exp.role}
                    </span>
                    <span className="text-sm" style={{ color: "#A1A1AA" }}>
                      · {exp.company}
                    </span>
                    {exp.current && (
                      <span
                        className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono"
                        style={{
                          background: "rgba(74,222,128,0.1)",
                          border: "1px solid rgba(74,222,128,0.2)",
                          color: "#4ADE80",
                        }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-mono mb-4" style={{ color: "#52525B" }}>
                    {exp.period}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-start gap-2 text-sm leading-relaxed"
                        style={{ color: "#A1A1AA" }}
                      >
                        <span className="mt-1.5 w-1 h-1 rounded-full shrink-0" style={{ background: "#C084FC" }} />
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
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
