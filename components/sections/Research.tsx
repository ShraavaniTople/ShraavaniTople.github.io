"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";
import GlassCard from "@/components/ui/GlassCard";

interface MetricBarProps {
  label: string;
  value: number;
  displayValue: string;
  color: string;
  delay: number;
  inView: boolean;
}

function MetricBar({ label, value, displayValue, color, delay, inView }: MetricBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between text-xs font-mono">
        <span className="text-[#a1a1aa]">{label}</span>
        <span style={{ color }}>{displayValue}</span>
      </div>
      <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
        <motion.div
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
          initial={{ width: "0%" }}
          animate={inView ? { width: `${value}%` } : { width: "0%" }}
          transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}

export default function Research() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="research" className="section-padding relative">
      {/* Background glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(99,102,241,0.05) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

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
            className="text-xs font-mono tracking-widest text-[#6366f1] uppercase mb-4"
          >
            ◆ Research & Robotics
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white max-w-3xl"
          >
            Teaching machines to{" "}
            <span className="gradient-text-indigo">see, think, and act.</span>
          </motion.h2>
        </motion.div>

        {/* Main research panels */}
        <div className="grid lg:grid-cols-2 gap-6 mb-8">
          {/* GRASP-X Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard glowColor="#00ff88" className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full animate-pulse-slow"
                  style={{ background: "#00ff88", boxShadow: "0 0 8px #00ff88" }}
                />
                <h3 className="font-bold text-[#00ff88] font-mono text-sm tracking-wider uppercase">
                  GRASP-X
                </h3>
              </div>

              {/* Architecture diagram */}
              <div
                className="font-mono text-[10px] text-[#a1a1aa] p-3 rounded-lg mb-5 leading-relaxed"
                style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-[#52525b] mb-1"># Architecture</div>
                <div>
                  <span className="text-[#00ff88]">RGB(84×84)</span>
                  {" → "}
                  <span className="text-[#6366f1]">NatureCNN</span>
                  {" → "}
                  <span className="text-[#f59e0b]">256-d features</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#52525b]">{"          ↕"}</span>
                  {" "}
                  <span className="text-[#a1a1aa]">+ 28-d proprioceptive</span>
                </div>
                <div className="mt-1">
                  <span className="text-[#f59e0b]">MultiModalEncoder</span>
                  {" → "}
                  <span className="text-[#06b6d4]">Actor / Critic</span>
                </div>
                <div className="mt-2 text-[#52525b]">
                  GAE-λ (λ=0.95, γ=0.99) · PPO-Clip
                </div>
              </div>

              {/* Metrics */}
              <div className="space-y-3 mb-5">
                <MetricBar label="Training Success Rate" value={80} displayValue="80%+" color="#00ff88" delay={0.6} inView={inView} />
                <MetricBar label="Zero-Shot Generalization" value={60} displayValue="60%+" color="#06b6d4" delay={0.7} inView={inView} />
                <MetricBar label="Parallel Environments" value={100} displayValue="4 envs" color="#6366f1" delay={0.8} inView={inView} />
              </div>

              {/* Domain randomization */}
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-[#52525b] uppercase tracking-wider">
                  Domain Randomization
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {["Object Color", "Mass", "Friction", "Lighting"].map((d) => (
                    <span
                      key={d}
                      className="text-[10px] font-mono px-2 py-0.5 rounded"
                      style={{
                        background: "rgba(0,255,136,0.08)",
                        color: "#00ff88",
                        border: "1px solid rgba(0,255,136,0.2)",
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>

              {/* Code snippet */}
              <div
                className="font-mono text-[10px] text-[#a1a1aa] p-3 rounded-lg mt-4 leading-relaxed"
                style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-[#52525b] mb-1"># Reward shaping</div>
                <div><span className="text-[#6366f1]">def</span> <span className="text-[#00ff88]">compute_reward</span>(obs, info):</div>
                <div>{"  "}reach = <span className="text-[#f59e0b]">-dist_to_object</span></div>
                <div>{"  "}lift = <span className="text-[#f59e0b]">height_above_table</span> * 2.0</div>
                <div>{"  "}place = <span className="text-[#06b6d4]">success_bonus</span> * 10.0</div>
                <div>{"  "}<span className="text-[#6366f1]">return</span> reach + lift + place</div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#52525b]">
                <span>2M steps</span>
                <span>·</span>
                <span>KUKA IIWA7</span>
                <span>·</span>
                <span>100-episode benchmarks</span>
              </div>
            </GlassCard>
          </motion.div>

          {/* Origin Navigation Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <GlassCard glowColor="#6366f1" className="p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-2 h-2 rounded-full animate-pulse-slow"
                  style={{ background: "#6366f1", boxShadow: "0 0 8px #6366f1" }}
                />
                <h3 className="font-bold text-[#6366f1] font-mono text-sm tracking-wider uppercase">
                  Origin Navigation
                </h3>
              </div>

              {/* SVG trajectory visualization */}
              <div
                className="relative p-3 rounded-lg mb-5"
                style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-[10px] font-mono text-[#52525b] mb-2">
                  # Trajectory visualization
                </div>
                <svg viewBox="0 0 280 100" className="w-full" style={{ height: "100px" }}>
                  {/* Grid */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="280" height="100" fill="url(#grid)" />

                  {/* Planned path (cubic spline) */}
                  <motion.path
                    d="M 20 80 C 60 80 60 20 100 20 C 140 20 140 60 180 50 C 220 40 220 70 260 70"
                    fill="none"
                    stroke="#6366f1"
                    strokeWidth="1.5"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    animate={inView ? { strokeDashoffset: 0 } : {}}
                    transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                    opacity="0.5"
                  />

                  {/* Actual tracked path */}
                  <motion.path
                    d="M 20 82 C 60 79 62 22 101 21 C 141 20 141 58 181 51 C 221 41 222 68 261 69"
                    fill="none"
                    stroke="#00ff88"
                    strokeWidth="2"
                    strokeDasharray="400"
                    strokeDashoffset="400"
                    animate={inView ? { strokeDashoffset: 0 } : {}}
                    transition={{ duration: 2, delay: 1.0, ease: "easeInOut" }}
                  />

                  {/* Robot dot */}
                  <motion.circle
                    r="4"
                    fill="#00ff88"
                    filter="url(#glow)"
                    initial={{ opacity: 0 }}
                    animate={inView ? {
                      opacity: 1,
                      offsetDistance: ["0%", "100%"],
                    } : {}}
                    style={{
                      offsetPath: "path('M 20 82 C 60 79 62 22 101 21 C 141 20 141 58 181 51 C 221 41 222 68 261 69')",
                    } as React.CSSProperties}
                    transition={{ duration: 3, delay: 1.2, ease: "linear" }}
                  />

                  {/* Legend */}
                  <line x1="20" y1="92" x2="35" y2="92" stroke="#6366f1" strokeWidth="1.5" opacity="0.5"/>
                  <text x="38" y="95" fill="#52525b" fontSize="7" fontFamily="monospace">planned</text>
                  <line x1="80" y1="92" x2="95" y2="92" stroke="#00ff88" strokeWidth="2"/>
                  <text x="98" y="95" fill="#52525b" fontSize="7" fontFamily="monospace">actual</text>
                </svg>
              </div>

              {/* Metrics */}
              <div className="space-y-3 mb-5">
                <MetricBar label="Tracking Accuracy" value={91.9} displayValue="91.9%" color="#6366f1" delay={0.7} inView={inView} />
                <MetricBar label="Test Coverage" value={100} displayValue="38 tests" color="#00ff88" delay={0.8} inView={inView} />
              </div>

              {/* ROS2 node graph */}
              <div
                className="font-mono text-[10px] text-[#a1a1aa] p-3 rounded-lg leading-relaxed"
                style={{ background: "rgba(0,0,0,0.4)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="text-[#52525b] mb-1"># ROS2 Node Architecture</div>
                <div>
                  <span className="text-[#6366f1]">[/path_planner]</span>
                  {" → "}
                  <span className="text-[#a1a1aa]">/waypoints</span>
                </div>
                <div>
                  <span className="text-[#6366f1]">[/spline_interp]</span>
                  {" → "}
                  <span className="text-[#a1a1aa]">/smooth_path</span>
                </div>
                <div>
                  <span className="text-[#6366f1]">[/pure_pursuit]</span>
                  {" → "}
                  <span className="text-[#f59e0b]">/cmd_vel</span>
                </div>
                <div>
                  <span className="text-[#6366f1]">[/odom_tracker]</span>
                  {" → "}
                  <span className="text-[#a1a1aa]">/tracking_err</span>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs font-mono text-[#52525b]">
                <span>ROS2 Humble</span>
                <span>·</span>
                <span>TurtleBot3</span>
                <span>·</span>
                <span>Gazebo</span>
                <span>·</span>
                <span>Docker</span>
              </div>
            </GlassCard>
          </motion.div>
        </div>

        {/* Secondary research cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            {
              title: "MedSegTumor",
              description: "Deep learning for medical image segmentation. Tumor detection and boundary delineation using convolutional architectures.",
              tags: ["Python", "Deep Learning", "Medical AI"],
              accent: "#ec4899",
            },
            {
              title: "IPMV / YOLO",
              description: "Object detection implementation using YOLO architecture. Real-time multi-class detection with confidence scoring.",
              tags: ["YOLO", "Jupyter", "Python"],
              accent: "#f59e0b",
            },
            {
              title: "Hand Gesture Recognition",
              description: "Computer vision system for real-time hand gesture classification using contour analysis and feature extraction.",
              tags: ["OpenCV", "Python", "CV"],
              accent: "#06b6d4",
            },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard glowColor={card.accent} className="p-5 h-full">
                <h4 className="font-bold text-sm mb-2" style={{ color: card.accent }}>
                  {card.title}
                </h4>
                <p className="text-xs text-[#a1a1aa] leading-relaxed mb-3">
                  {card.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {card.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-1.5 py-0.5 rounded"
                      style={{
                        background: `${card.accent}12`,
                        color: card.accent,
                        border: `1px solid ${card.accent}20`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
