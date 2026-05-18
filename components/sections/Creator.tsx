"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";
import { Instagram } from "lucide-react";

const GRID_ITEMS = [
  { label: "Tech Reels", emoji: "⚙️", color: "#00ff88", bg: "from-green-900/30 to-emerald-900/30" },
  { label: "Event Coverage", emoji: "🎤", color: "#6366f1", bg: "from-indigo-900/30 to-purple-900/30" },
  { label: "Hackathon Stories", emoji: "⚡", color: "#f59e0b", bg: "from-amber-900/30 to-orange-900/30" },
  { label: "Robotics Build Logs", emoji: "🤖", color: "#06b6d4", bg: "from-cyan-900/30 to-blue-900/30" },
  { label: "Conference Highlights", emoji: "✨", color: "#a855f7", bg: "from-purple-900/30 to-pink-900/30" },
  { label: "Dev Community", emoji: "🌐", color: "#ef4444", bg: "from-red-900/30 to-rose-900/30" },
];

export default function Creator() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="creator" className="section-padding relative">
      {/* Background gradient */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(99,102,241,0.04) 0%, transparent 60%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.p
              variants={fadeUpVariants}
              className="text-xs font-mono tracking-widest text-[#a855f7] uppercase mb-4"
            >
              ◆ Creator & Internet Presence
            </motion.p>
            <motion.h2
              variants={fadeUpVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white mb-6"
            >
              Stories that{" "}
              <span
                style={{
                  WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                  color: "transparent",
                }}
              >
                move people.
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUpVariants}
              className="text-[#a1a1aa] text-lg leading-relaxed mb-6"
            >
              Building in public means documenting the journey — the hackathon sprints, the
              robotics failures, the community wins. Content that bridges the gap between
              technical depth and human story.
            </motion.p>
            <motion.p
              variants={fadeUpVariants}
              className="text-[#a1a1aa] leading-relaxed mb-8"
            >
              From Snapchat Creator Events to tech reels that make complex robotics
              understandable — the creator side of being a builder.
            </motion.p>

            {/* Topics */}
            <motion.div variants={staggerContainerVariants} className="flex flex-wrap gap-2 mb-8">
              {["Tech Reels", "Event Coverage", "Hackathon Stories", "Conference Talks", "Build Logs", "Community Updates"].map((topic) => (
                <motion.span
                  key={topic}
                  variants={fadeUpVariants}
                  className="text-xs font-mono px-3 py-1.5 rounded-full text-[#a1a1aa]"
                  style={{
                    background: "rgba(168,85,247,0.08)",
                    border: "1px solid rgba(168,85,247,0.2)",
                  }}
                >
                  {topic}
                </motion.span>
              ))}
            </motion.div>

            <motion.div variants={fadeUpVariants}>
              <a
                href="https://instagram.com/shraavani___"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-sm transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, rgba(168,85,247,0.2), rgba(236,72,153,0.2))",
                  border: "1px solid rgba(168,85,247,0.3)",
                  color: "#a855f7",
                }}
              >
                <Instagram className="w-4 h-4" />
                Follow @shraavani___
              </a>
            </motion.div>

            {/* Speaker highlight */}
            <motion.div
              variants={fadeUpVariants}
              className="mt-8 p-4 rounded-xl"
              style={{
                background: "rgba(249,115,22,0.06)",
                border: "1px solid rgba(249,115,22,0.2)",
              }}
            >
              <div className="flex items-start gap-3">
                <span className="text-lg">👻</span>
                <div>
                  <div className="text-sm font-semibold text-[#f97316] mb-1">
                    Speaker — Snapchat Creator Event
                  </div>
                  <p className="text-xs text-[#a1a1aa]">
                    On the intersection of tech and creator culture — where building meets
                    storytelling.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: phone mockup grid */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end"
          >
            {/* Phone frame */}
            <div
              className="relative w-56 sm:w-64"
              style={{
                background: "#0a0a0a",
                border: "2px solid rgba(255,255,255,0.1)",
                borderRadius: "32px",
                padding: "12px",
                boxShadow: "0 30px 80px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
              }}
            >
              {/* Phone notch */}
              <div
                className="w-16 h-4 mx-auto mb-3 rounded-full"
                style={{ background: "rgba(255,255,255,0.08)" }}
              />

              {/* Header */}
              <div className="flex items-center justify-between mb-3 px-1">
                <span className="text-xs font-semibold text-white">@shraavani___</span>
                <Instagram className="w-4 h-4 text-[#a1a1aa]" />
              </div>

              {/* Profile stats */}
              <div className="flex items-center justify-around mb-3 py-2"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="text-center">
                  <div className="text-xs font-bold text-white">26+</div>
                  <div className="text-[9px] text-[#52525b]">posts</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-white">∞</div>
                  <div className="text-[9px] text-[#52525b]">followers</div>
                </div>
                <div className="text-center">
                  <div className="text-xs font-bold text-white">8+</div>
                  <div className="text-[9px] text-[#52525b]">events</div>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-3 gap-0.5">
                {GRID_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: 0.6 + i * 0.07,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className={`aspect-square bg-gradient-to-br ${item.bg} flex flex-col items-center justify-center gap-1 rounded-sm`}
                    style={{ border: "1px solid rgba(255,255,255,0.04)" }}
                  >
                    <span className="text-lg">{item.emoji}</span>
                    <span
                      className="text-[7px] font-mono text-center leading-tight px-1"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Bottom home bar */}
              <div className="mt-3 w-16 h-1 mx-auto rounded-full"
                style={{ background: "rgba(255,255,255,0.1)" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
