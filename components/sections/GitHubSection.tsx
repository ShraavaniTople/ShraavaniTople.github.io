"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Star, GitFork } from "lucide-react";
import TerminalWindow, { TerminalLine } from "@/components/ui/TerminalWindow";

const ease = [0.16, 1, 0.3, 1] as const;

// Seeded pseudo-random — stable between SSR and client
function seededRand(seed: number): number {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const REPOS = [
  { name: "grasp-x", desc: "Deep RL pick-and-place for KUKA IIWA7 arm", stars: 12, forks: 2, lang: "Python", color: "#3572A5" },
  { name: "StrikeBot", desc: "Vision-guided autonomous marble robot", stars: 5, forks: 1, lang: "Python", color: "#3572A5" },
  { name: "inferencecache", desc: "Tamper-proof AI inference proxy with Merkle log", stars: 8, forks: 2, lang: "Python", color: "#3572A5" },
  { name: "publicai-pulse", desc: "AI governance simulator — live demo", stars: 4, forks: 1, lang: "JavaScript", color: "#f1e05a" },
  { name: "DataStructureBooks", desc: "DSA community resource — 17 stars", stars: 17, forks: 3, lang: "Markdown", color: "#F4F4F5" },
  { name: "Hand-Gesture-Recognition", desc: "Real-time hand gesture classifier", stars: 3, forks: 1, lang: "Python", color: "#3572A5" },
];

const LANGUAGES = [
  { name: "Python", pct: 45, color: "#3572A5" },
  { name: "TypeScript", pct: 30, color: "#3178c6" },
  { name: "JavaScript", pct: 15, color: "#f1e05a" },
  { name: "Other", pct: 10, color: "#3F3F46" },
];

const TERMINAL_LINES: TerminalLine[] = [
  { type: "command", content: "$ git log --oneline -5" },
  { type: "output", content: "f3a9d21 feat: PPO reward shaping for grasp success" },
  { type: "output", content: "a2c8b30 fix: domain randomization collision detection" },
  { type: "output", content: "9b1f3cd feat: pure pursuit controller for ROS2" },
  { type: "output", content: "7cc8a11 test: add 38 trajectory validation tests" },
  { type: "output", content: "2d45e1f feat: InferenceCache Merkle audit log" },
  { type: "command", content: "$ git status" },
  { type: "success", content: "On branch main — nothing to commit, working tree clean" },
];

const LEVEL_COLORS = [
  "rgba(255,255,255,0.04)",
  "rgba(129,140,248,0.15)",
  "rgba(129,140,248,0.35)",
  "rgba(129,140,248,0.6)",
  "#818CF8",
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
                  className="w-2.5 h-2.5 rounded-sm"
                  style={{ background: LEVEL_COLORS[level] }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono" style={{ color: "#3F3F46" }}>
        <span>Less</span>
        {LEVEL_COLORS.map((c, i) => (
          <div key={i} className="w-2.5 h-2.5 rounded-sm" style={{ background: c }} />
        ))}
        <span>More</span>
      </div>
    </div>
  );
}

export default function GitHubSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="github" className="section px-6 lg:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-10"
        >
          <p className="label mb-3">GITHUB</p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight mb-2"
            style={{ color: "#F4F4F5" }}
          >
            Building in public.
          </h2>
          <a
            href="https://github.com/ShraavaniTople"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-mono transition-colors"
            style={{ color: "#71717A" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#818CF8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#71717A")}
          >
            <Github className="w-4 h-4" />
            github.com/ShraavaniTople
          </a>
        </motion.div>

        {/* Contribution heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="p-5 rounded-xl mb-6"
          style={{ background: "#0F0F14", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <p className="text-xs font-mono mb-4 uppercase tracking-widest" style={{ color: "#3F3F46" }}>
            Contribution Activity
          </p>
          <ContributionGrid />
        </motion.div>

        {/* Repos + terminal */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Repos */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.18, ease }}
          >
            <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "#3F3F46" }}>
              Pinned Repositories
            </p>
            <div className="grid sm:grid-cols-2 gap-3">
              {REPOS.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={`https://github.com/ShraavaniTople/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.06, ease }}
                  className="p-3 rounded-xl block transition-all duration-200"
                  style={{ background: "#0F0F14", border: "1px solid rgba(255,255,255,0.06)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(129,140,248,0.25)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-1px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.border = "1px solid rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                  }}
                >
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Github className="w-3 h-3 shrink-0" style={{ color: "#71717A" }} />
                    <span className="text-xs font-semibold truncate" style={{ color: "#818CF8" }}>
                      {repo.name}
                    </span>
                  </div>
                  <p className="text-[10px] leading-relaxed mb-2 line-clamp-2" style={{ color: "#71717A" }}>
                    {repo.desc}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] font-mono" style={{ color: "#3F3F46" }}>
                    <span className="flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full" style={{ background: repo.color }} />
                      {repo.lang}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5" /> {repo.stars}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <GitFork className="w-2.5 h-2.5" /> {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Terminal + language bar */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.26, ease }}
            className="space-y-4"
          >
            <TerminalWindow
              title="~/ShraavaniTople — git"
              lines={TERMINAL_LINES}
              animate={inView}
            />

            {/* Language breakdown */}
            <div
              className="p-4 rounded-xl"
              style={{ background: "#0F0F14", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "#3F3F46" }}>
                Language Breakdown
              </p>
              <div className="space-y-3">
                {LANGUAGES.map((lang, i) => (
                  <div key={lang.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="flex items-center gap-2" style={{ color: "#71717A" }}>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ background: lang.color }} />
                        {lang.name}
                      </span>
                      <span style={{ color: lang.color }}>{lang.pct}%</span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: lang.color }}
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${lang.pct}%` } : {}}
                        transition={{ duration: 1, delay: 0.5 + i * 0.1, ease }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
