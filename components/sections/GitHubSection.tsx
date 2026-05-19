"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Star, ExternalLink } from "lucide-react";

function seededRand(s: number) { const x = Math.sin(s + 1) * 10000; return x - Math.floor(x); }
function getLevel(s: number) { const v = seededRand(s); return v > 0.93 ? 4 : v > 0.83 ? 3 : v > 0.68 ? 2 : v > 0.50 ? 1 : 0; }
const CORAL = ["#1E1E21", "rgba(255,114,98,0.2)", "rgba(255,114,98,0.4)", "rgba(255,114,98,0.65)", "#FF7262"];

const repos = [
  { name: "DataStructureBooks", desc: "DSA resource — community favourite", stars: 17, lang: "Markdown" },
  { name: "grasp-x", desc: "Deep RL pick-and-place for KUKA IIWA7", stars: 0, lang: "Python" },
  { name: "StrikeBot-Autonomous-Marble-Playing-Robot", desc: "Vision-guided autonomous marble robot", stars: 0, lang: "Python" },
  { name: "inferencecache", desc: "Tamper-proof AI inference proxy", stars: 0, lang: "Python" },
  { name: "publicai-pulse", desc: "AI governance simulator", stars: 0, lang: "JavaScript" },
  { name: "sakura-lanterns", desc: "Digital sky lantern web app", stars: 0, lang: "CSS" },
];

export default function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });
  return (
    <section className="section" id="github" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="container">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 40 }}>
          <div>
            <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}>GitHub</motion.p>
            <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.025em", color: "#F0EEE9" }}>
              Building in public.
            </motion.h2>
          </div>
          <motion.a initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
            href="https://github.com/ShraavaniTople" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#FF7262", textDecoration: "none" }}>
            <Github size={15} /> github.com/ShraavaniTople <ExternalLink size={12} />
          </motion.a>
        </div>

        {/* Heatmap */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="card" style={{ padding: 24, marginBottom: 20 }}>
          <p className="label" style={{ marginBottom: 14 }}>Contribution Activity</p>
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "flex", gap: 3, minWidth: "fit-content" }}>
              {Array.from({ length: 26 }).map((_, w) => (
                <div key={w} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {Array.from({ length: 7 }).map((_, d) => (
                    <div key={d} style={{ width: 10, height: 10, borderRadius: 2, background: CORAL[getLevel(w * 7 + d + 42)] }} />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 24 }} className="gh-stats-grid">
          {([["26", "Public repos"], ["17 ⭐", "Top stars"], ["Python · TS", "Languages"], ["2022", "Active since"]] as [string, string][]).map(([v, l]) => (
            <motion.div key={l} initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.3 }}
              className="card" style={{ padding: "16px 20px", textAlign: "center" }}>
              <p style={{ fontSize: 17, fontWeight: 700, color: "#F0EEE9" }}>{v}</p>
              <p style={{ fontSize: 11, color: "#4A4947", marginTop: 3 }}>{l}</p>
            </motion.div>
          ))}
        </div>

        {/* Repos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="gh-repos-grid">
          {repos.map((r, i) => (
            <motion.a key={r.name}
              href={`https://github.com/ShraavaniTople/${r.name}`}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.4 + i * 0.07 }}
              className="card" style={{ padding: 18, textDecoration: "none", display: "block" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#FF7262", wordBreak: "break-word", flex: 1, marginRight: 8 }}>{r.name}</span>
                {r.stars > 0 && <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "#4A4947", flexShrink: 0 }}><Star size={10} />{r.stars}</span>}
              </div>
              <p style={{ fontSize: 12, color: "#8A8784", lineHeight: 1.5, marginBottom: 8 }}>{r.desc}</p>
              <span style={{ fontSize: 11, color: "#4A4947" }}>{r.lang}</span>
            </motion.a>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:640px){ .gh-stats-grid{grid-template-columns:repeat(2,1fr)!important;} .gh-repos-grid{grid-template-columns:1fr!important;} }
      `}</style>
    </section>
  );
}
