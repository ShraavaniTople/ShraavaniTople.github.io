"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Star, ExternalLink } from "lucide-react";

function seededRand(seed: number) {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const WEEKS = 26;
const DAYS = 7;

function getLevel(seed: number): number {
  const v = seededRand(seed);
  if (v > 0.93) return 4;
  if (v > 0.83) return 3;
  if (v > 0.68) return 2;
  if (v > 0.50) return 1;
  return 0;
}

const COLORS = ["#E9D5FF", "#C4B5FD", "#A78BFA", "#7C3AED", "#5B21B6"];

const repos = [
  { name: "DataStructureBooks", desc: "DSA resource — community favourite", stars: 17, lang: "Markdown" },
  { name: "grasp-x", desc: "Deep RL pick-and-place for KUKA IIWA7", stars: 0, lang: "Python" },
  { name: "StrikeBot-Autonomous-Marble-Playing-Robot", desc: "Vision-guided autonomous marble robot", stars: 0, lang: "Python" },
  { name: "inferencecache", desc: "Tamper-proof AI inference proxy", stars: 0, lang: "Python" },
  { name: "publicai-pulse", desc: "AI governance simulator", stars: 0, lang: "JavaScript" },
  { name: "sakura-lanterns", desc: "Digital sky lantern web app", stars: 0, lang: "CSS" },
];

const stats = [
  { label: "Public repos", value: "26" },
  { label: "Top repo stars", value: "17 ⭐" },
  { label: "Languages", value: "Python · TS" },
  { label: "Active since", value: "2022" },
];

export default function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="section" id="github" ref={ref}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}>GitHub</motion.p>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 40 }}
        >
          <h2 style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", color: "#111110" }}>Building in public.</h2>
          <a href="https://github.com/ShraavaniTople" target="_blank" rel="noopener noreferrer"
            style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#7C3AED", textDecoration: "none" }}>
            <Github size={15} /> github.com/ShraavaniTople <ExternalLink size={12} />
          </a>
        </motion.div>

        {/* Heatmap */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.2 }}
          className="card" style={{ padding: 24, marginBottom: 24 }}>
          <p style={{ fontSize: 12, fontWeight: 600, color: "#9CA3AF", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 14 }}>Contribution Activity</p>
          <div style={{ overflowX: "auto" }}>
            <div style={{ display: "flex", gap: 3, minWidth: "fit-content" }}>
              {Array.from({ length: WEEKS }).map((_, w) => (
                <div key={w} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
                  {Array.from({ length: DAYS }).map((_, d) => {
                    const level = getLevel(w * DAYS + d + 42);
                    return <div key={d} style={{ width: 10, height: 10, borderRadius: 2, background: level === 0 ? "#F3F4F6" : COLORS[level - 1] }} />;
                  })}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.25 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 32 }} className="stats-grid"
        >
          {stats.map(s => (
            <div key={s.label} className="card" style={{ padding: "16px 20px", textAlign: "center" }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#111110" }}>{s.value}</p>
              <p style={{ fontSize: 11, color: "#9CA3AF", marginTop: 2 }}>{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Repos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }} className="repos-grid">
          {repos.map((r, i) => (
            <motion.a key={r.name}
              href={`https://github.com/ShraavaniTople/${r.name}`}
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.35 + i * 0.07 }}
              className="card" style={{ padding: 18, textDecoration: "none", display: "block" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#7C3AED" }}>{r.name}</span>
                {r.stars > 0 && <span style={{ display: "flex", alignItems: "center", gap: 3, fontSize: 11, color: "#9CA3AF" }}><Star size={11} />{r.stars}</span>}
              </div>
              <p style={{ fontSize: 12, color: "#6B7280", lineHeight: 1.5, marginBottom: 8 }}>{r.desc}</p>
              <span style={{ fontSize: 11, color: "#9CA3AF" }}>{r.lang}</span>
            </motion.a>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:640px){
          .stats-grid { grid-template-columns: repeat(2,1fr) !important; }
          .repos-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
