"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";
import GlassCard from "@/components/ui/GlassCard";

const PILLARS = [
  {
    icon: "🤖",
    title: "The Machine Mind",
    description:
      "Robotics, ROS2, computer vision, and reinforcement learning. Building systems that perceive, reason, and act in the physical world.",
    tags: ["PyTorch", "PPO", "ROS2", "OpenCV", "PyBullet"],
    accent: "#00ff88",
  },
  {
    icon: "🌐",
    title: "The Network",
    description:
      "Community ecosystems, developer relations, and human infrastructure. Building the scaffolding that enables other builders.",
    tags: ["Google WTM", "ETHMumbai", "GDG", "Mentorship"],
    accent: "#6366f1",
  },
  {
    icon: "✦",
    title: "The Creator",
    description:
      "Storytelling, content, events, and digital presence. Translating complex technical work into narratives that move people.",
    tags: ["Snapchat", "Instagram", "Hackathons", "Conferences"],
    accent: "#f59e0b",
  },
];

const TIMELINE = [
  { year: "2022", event: "Started CS degree, first GitHub commit" },
  { year: "2023", event: "StrikeBot — vision-guided marble robot at hackathon" },
  { year: "2024", event: "GRASP-X deep RL research, IPMV/YOLO" },
  { year: "2024", event: "Google Women Techmakers Ambassador" },
  { year: "2025", event: "ETHMumbai Organizer + Hack The League" },
  { year: "2025", event: "Snapchat Creator Event Speaker" },
  { year: "2026", event: "Origin Navigation — ROS2 framework" },
  { year: "2026", event: "GPF 2026 — Women in Product India" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="section-padding relative">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
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
            className="text-xs font-mono tracking-widest text-[#00ff88] uppercase mb-4"
          >
            ◆ About
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white max-w-3xl"
          >
            Not just building software.{" "}
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent",
              }}
            >
              Building worlds.
            </span>
          </motion.h2>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left: text + pillars */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-8"
          >
            <p className="text-[#a1a1aa] text-lg leading-relaxed">
              I'm Shraavani — a multidisciplinary engineer working at the intersection of{" "}
              <span className="text-[#00ff88]">robotics</span>,{" "}
              <span className="text-[#6366f1]">AI</span>, and{" "}
              <span className="text-[#f59e0b]">human systems</span>. From training KUKA arms
              to pick arbitrary objects, to organizing India's largest Ethereum hackathon, to
              mentoring the next generation of developers.
            </p>

            <div className="grid gap-4">
              {PILLARS.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <GlassCard glowColor={pillar.accent} className="p-5">
                    <div className="flex items-start gap-4">
                      <span className="text-2xl shrink-0">{pillar.icon}</span>
                      <div>
                        <h3
                          className="font-bold text-sm mb-1"
                          style={{ color: pillar.accent }}
                        >
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-[#a1a1aa] leading-relaxed mb-2">
                          {pillar.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {pillar.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-mono px-2 py-0.5 rounded"
                              style={{
                                background: `${pillar.accent}12`,
                                color: pillar.accent,
                                border: `1px solid ${pillar.accent}20`,
                              }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative pl-6">
              {/* Vertical line */}
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-px"
                style={{ background: "linear-gradient(to bottom, #00ff88, rgba(0,255,136,0.1))" }}
                initial={{ scaleY: 0, originY: 0 }}
                animate={inView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="space-y-8">
                {TIMELINE.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.5,
                      delay: 0.6 + i * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="relative"
                  >
                    {/* Dot */}
                    <div
                      className="absolute -left-[26px] w-3 h-3 rounded-full border-2 top-1"
                      style={{
                        background: "#000",
                        borderColor: i === TIMELINE.length - 1 ? "#00ff88" : "rgba(0,255,136,0.4)",
                        boxShadow: i === TIMELINE.length - 1 ? "0 0 8px rgba(0,255,136,0.6)" : "none",
                      }}
                    />
                    <div
                      className="text-[10px] font-mono mb-1 tracking-widest"
                      style={{ color: "#00ff88", opacity: 0.7 }}
                    >
                      {item.year}
                    </div>
                    <p className="text-sm text-[#a1a1aa] leading-relaxed">{item.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
