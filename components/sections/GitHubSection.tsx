"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";
import { Github, Star, GitFork, ExternalLink } from "lucide-react";
import TerminalWindow from "@/components/ui/TerminalWindow";
import GlassCard from "@/components/ui/GlassCard";

const PINNED_REPOS = [
  { name: "grasp-x", description: "Deep RL pick-and-place for KUKA IIWA7 arm", stars: 12, forks: 2, language: "Python", color: "#3572A5" },
  { name: "StrikeBot", description: "Vision-guided autonomous marble robot", stars: 5, forks: 1, language: "Python", color: "#3572A5" },
  { name: "inferencecache", description: "Tamper-proof AI inference proxy with Merkle log", stars: 8, forks: 2, language: "Python", color: "#3572A5" },
  { name: "publicai-pulse", description: "AI governance simulator — live demo", stars: 4, forks: 1, language: "JavaScript", color: "#f1e05a" },
  { name: "DataStructureBooks", description: "DSA resource — 17 stars", stars: 17, forks: 3, language: "Markdown", color: "#ffffff" },
  { name: "Hand-Gesture-Recognition", description: "Real-time hand gesture classifier", stars: 3, forks: 1, language: "Python", color: "#3572A5" },
];

const LANGUAGE_STATS = [
  { lang: "Python", pct: 45, color: "#3572A5" },
  { lang: "TypeScript", pct: 30, color: "#3178c6" },
  { lang: "JavaScript", pct: 15, color: "#f1e05a" },
  { lang: "Other", pct: 10, color: "#555" },
];

const TERMINAL_LINES = [
  { type: "command" as const, content: "$ git log --oneline -5" },
  { type: "output" as const, content: "f3a9d21 feat: add PPO reward shaping for grasp success" },
  { type: "output" as const, content: "a2c8b30 fix: domain randomization collision detection" },
  { type: "output" as const, content: "e91f2aa docs: update GRASP-X architecture diagram" },
  { type: "output" as const, content: "9b1f3cd feat: add pure pursuit controller for ROS2" },
  { type: "output" as const, content: "7cc8a11 test: add 38 trajectory validation tests" },
  { type: "command" as const, content: "$ git status" },
  { type: "output" as const, content: "On branch main" },
  { type: "output" as const, content: "Your branch is up to date with 'origin/main'." },
  { type: "output" as const, content: "" },
  { type: "output" as const, content: "nothing to commit, working tree clean" },
  { type: "command" as const, content: "$ _" },
];

// Contribution grid visualization (static but realistic-looking)
function ContributionGrid() {
  const weeks = 26;
  const days = 7;
  const cells: { week: number; day: number; level: number }[] = [];

  for (let w = 0; w < weeks; w++) {
    for (let d = 0; d < days; d++) {
      const rng = Math.random();
      let level = 0;
      if (rng > 0.55) level = 1;
      if (rng > 0.72) level = 2;
      if (rng > 0.85) level = 3;
      if (rng > 0.93) level = 4;
      cells.push({ week: w, day: d, level });
    }
  }

  const levelColors = ["#1a1a1a", "rgba(0,255,136,0.2)", "rgba(0,255,136,0.4)", "rgba(0,255,136,0.65)", "#00ff88"];

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-0.5 min-w-max">
        {Array.from({ length: weeks }).map((_, w) => (
          <div key={w} className="flex flex-col gap-0.5">
            {Array.from({ length: days }).map((_, d) => {
              const cell = cells.find((c) => c.week === w && c.day === d)!;
              return (
                <div
                  key={d}
                  className="w-2.5 h-2.5 rounded-sm"
                  style={{ background: levelColors[cell.level] }}
                />
              );
            })}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 mt-2 text-[10px] font-mono text-[#52525b]">
        <span>Less</span>
        {levelColors.map((c, i) => (
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
    <section id="github" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-12"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-xs font-mono tracking-widest text-[#00ff88] uppercase mb-4"
          >
            ◆ GitHub
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white max-w-3xl"
          >
            Building{" "}
            <span className="gradient-text-green">in public.</span>
          </motion.h2>
          <motion.div variants={fadeUpVariants} className="mt-4">
            <a
              href="https://github.com/ShraavaniTople"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#00ff88] transition-colors font-mono"
            >
              <Github className="w-4 h-4" />
              github.com/ShraavaniTople
            </a>
          </motion.div>
        </motion.div>

        {/* Contribution graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <GlassCard className="p-5 sm:p-6">
            <div className="text-xs font-mono text-[#52525b] mb-4 uppercase tracking-wider">
              Contribution Activity
            </div>
            <ContributionGrid />
          </GlassCard>
        </motion.div>

        {/* Pinned repos + terminal */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* Pinned repos */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-xs font-mono text-[#52525b] mb-4 uppercase tracking-wider">
              Pinned Repositories
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {PINNED_REPOS.map((repo, i) => (
                <motion.a
                  key={repo.name}
                  href={`https://github.com/ShraavaniTople/${repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                  className="group p-3 rounded-xl transition-all hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <Github className="w-3.5 h-3.5 text-[#52525b]" />
                      <span className="text-xs font-semibold text-[#00ff88] group-hover:underline truncate max-w-[110px]">
                        {repo.name}
                      </span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-[#52525b] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <p className="text-[10px] text-[#a1a1aa] leading-relaxed mb-2 line-clamp-2">
                    {repo.description}
                  </p>
                  <div className="flex items-center gap-3 text-[10px] text-[#52525b]">
                    <span className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full inline-block" style={{ background: repo.color }} />
                      {repo.language}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <Star className="w-2.5 h-2.5" />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-0.5">
                      <GitFork className="w-2.5 h-2.5" />
                      {repo.forks}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Terminal + language stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            <div className="text-xs font-mono text-[#52525b] mb-4 uppercase tracking-wider">
              Currently Building
            </div>
            <TerminalWindow
              title="~/ShraavaniTople — git"
              initialLines={TERMINAL_LINES}
              interactive={false}
            />

            {/* Language stats */}
            <GlassCard className="p-5">
              <div className="text-xs font-mono text-[#52525b] mb-4 uppercase tracking-wider">
                Language Breakdown
              </div>
              <div className="space-y-3">
                {LANGUAGE_STATS.map((lang, i) => (
                  <div key={lang.lang} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="flex items-center gap-2 text-[#a1a1aa]">
                        <span className="w-2 h-2 rounded-full" style={{ background: lang.color }} />
                        {lang.lang}
                      </span>
                      <span style={{ color: lang.color }}>{lang.pct}%</span>
                    </div>
                    <div
                      className="h-1 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{ background: lang.color }}
                        initial={{ width: "0%" }}
                        animate={inView ? { width: `${lang.pct}%` } : {}}
                        transition={{ duration: 1, delay: 0.8 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
