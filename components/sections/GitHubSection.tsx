"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

function seededRand(seed: number): number {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
}

const LEVEL_COLORS = [
  "#1C1C1C",
  "rgba(192,132,252,0.25)",
  "rgba(192,132,252,0.45)",
  "rgba(192,132,252,0.7)",
  "#C084FC",
];

function ContributionGrid() {
  const WEEKS = 26;
  const DAYS = 7;

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-0.5 min-w-max">
        {Array.from({ length: WEEKS }).map((_, w) => (
          <div key={w} className="flex flex-col gap-0.5">
            {Array.from({ length: DAYS }).map((_, d) => {
              const val = seededRand(w * 7 + d + 42);
              let level = 0;
              if (val > 0.55) level = 1;
              if (val > 0.72) level = 2;
              if (val > 0.85) level = 3;
              if (val > 0.93) level = 4;
              return (
                <div
                  key={d}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: 2,
                    background: LEVEL_COLORS[level],
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div
        className="flex items-center gap-1.5 mt-2 text-[10px] font-mono"
        style={{ color: "#52525B" }}
      >
        <span>Less</span>
        {LEVEL_COLORS.map((c, i) => (
          <div
            key={i}
            style={{ width: 10, height: 10, borderRadius: 2, background: c }}
          />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

const STATS = [
  { label: "26 repos" },
  { label: "17 ⭐ most starred" },
  { label: "Python · TypeScript" },
  { label: "Active since 2022" },
];

export default function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="github" className="section-pad" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "#A1A1AA" }}
        >
          GITHUB
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
          style={{ color: "#FAFAF9" }}
        >
          26 public repos. Building in public.
        </motion.h2>

        <motion.a
          href="https://github.com/ShraavaniTople"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.16, ease }}
          className="inline-flex items-center gap-2 text-sm font-mono mb-8 transition-colors"
          style={{ color: "#52525B" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "#C084FC")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "#52525B")}
        >
          <Github size={14} />
          github.com/ShraavaniTople →
        </motion.a>

        {/* Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease }}
          className="p-5 rounded-xl mb-6"
          style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p
            className="text-xs font-mono uppercase tracking-widest mb-4"
            style={{ color: "#52525B" }}
          >
            Contribution Activity
          </p>
          <ContributionGrid />
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3, ease }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-4 rounded-xl text-center"
              style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <p className="text-sm font-mono" style={{ color: "#A1A1AA" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
