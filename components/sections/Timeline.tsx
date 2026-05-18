"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";
import { TIMELINE_EVENTS } from "@/lib/constants";

const YEAR_COLORS: Record<string, string> = {
  "2022": "#52525b",
  "2023": "#f59e0b",
  "2024": "#6366f1",
  "2025": "#00ff88",
  "2026": "#06b6d4",
};

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="timeline" className="section-padding relative overflow-hidden">
      {/* BG gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(0,255,136,0.02) 0%, transparent 50%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.p
            variants={fadeUpVariants}
            className="text-xs font-mono tracking-widest text-[#06b6d4] uppercase mb-4"
          >
            ◆ Journey
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white max-w-3xl"
          >
            Every milestone, a{" "}
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent",
              }}
            >
              new world unlocked.
            </span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <motion.div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08) 10%, rgba(255,255,255,0.08) 90%, transparent)",
            }}
            initial={{ scaleY: 0, originY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          />

          <div className="space-y-8">
            {TIMELINE_EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;
              const color = YEAR_COLORS[event.year] || "#a1a1aa";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.2 + i * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={`relative flex items-start gap-4 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content card */}
                  <div
                    className={`flex-1 ${
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    }`}
                  >
                    <div
                      className={`inline-block p-4 sm:p-5 rounded-xl transition-all ${
                        isLeft ? "" : ""
                      }`}
                      style={{
                        background: `${color}08`,
                        border: `1px solid ${color}20`,
                      }}
                    >
                      <div
                        className="text-xs font-mono font-bold tracking-widest mb-1 uppercase"
                        style={{ color }}
                      >
                        {event.year}
                      </div>
                      <h3 className="font-bold text-white mb-2 leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-sm text-[#a1a1aa] leading-relaxed mb-3">
                        {event.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          isLeft ? "md:justify-end" : ""
                        }`}
                      >
                        {event.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] font-mono px-2 py-0.5 rounded"
                            style={{
                              background: `${color}12`,
                              color,
                              border: `1px solid ${color}20`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-5 w-4 h-4 items-center justify-center">
                    <div
                      className="w-3 h-3 rounded-full border-2"
                      style={{
                        background: "#000",
                        borderColor: color,
                        boxShadow: `0 0 8px ${color}60`,
                      }}
                    />
                  </div>

                  {/* Mobile dot */}
                  <div
                    className="md:hidden w-3 h-3 rounded-full border-2 mt-5 shrink-0"
                    style={{
                      background: "#000",
                      borderColor: color,
                      boxShadow: `0 0 8px ${color}60`,
                    }}
                  />

                  {/* Empty space for alternating */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
