"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const EVENTS = [
  { year: "2022", title: "First GitHub commit", desc: "Started engineering journey", tags: [] },
  { year: "2023", title: "StrikeBot", desc: "Built vision-guided marble robot — first robotics project", tags: ["OpenCV", "RPi"] },
  { year: "2024", title: "Research sprint", desc: "IPMV/YOLO, MedSegTumor, Hand Gesture Recognition", tags: ["Python", "Deep Learning"] },
  { year: "2024", title: "Community", desc: "Google Women Techmakers Ambassador", tags: ["Google WTM"] },
  { year: "2024", title: "17 stars", desc: "DataStructureBooks becomes a community resource", tags: ["Open Source"] },
  { year: "2025", title: "InferenceCache", desc: "Tamper-proof AI inference proxy with Merkle trees", tags: ["FastAPI", "Merkle"] },
  { year: "2025", title: "ETHMumbai", desc: "Co-organized Ethereum hackathon", tags: ["Ethereum", "Web3"] },
  { year: "2025", title: "Hack The League", desc: "Ran developer hackathon from scratch", tags: ["Event"] },
  { year: "2025", title: "Speaker", desc: "Snapchat Creator Tech Event", tags: ["Creator"] },
  { year: "2025", title: "GRASP-X", desc: "Deep RL robotic pick-and-place, 80%+ success rate", tags: ["PyTorch", "PPO"] },
  { year: "2026", title: "Origin Navigation", desc: "ROS2 autonomous trajectory framework, 91.9% accuracy", tags: ["ROS2", "C++"] },
  { year: "2026", title: "GPF Website", desc: "The Great Product Festival 2026 — Women in Product India", tags: ["React"] },
];

export default function Timeline() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="timeline" className="section px-6 lg:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="label mb-3">JOURNEY</p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "#F4F4F5" }}
          >
            Every year, a new chapter.
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line (desktop) */}
          <motion.div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 w-px"
            style={{
              background: "linear-gradient(to bottom, rgba(129,140,248,0.3), rgba(129,140,248,0.05))",
              height: inView ? "100%" : "0%",
              transition: "height 1.5s ease 0.2s",
            }}
          />
          {/* Left line (mobile) */}
          <div
            className="md:hidden absolute left-4 top-0 w-px"
            style={{
              background: "rgba(129,140,248,0.2)",
              height: "100%",
            }}
          />

          <div className="space-y-6">
            {EVENTS.map((event, i) => {
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -24 : 24 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.07, ease }}
                  className={`relative flex gap-4 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Content */}
                  <div
                    className={`flex-1 pl-10 md:pl-0 ${isLeft ? "md:pr-10 md:text-right" : "md:pl-10"}`}
                  >
                    <div
                      className="inline-block p-4 rounded-xl transition-all duration-200"
                      style={{
                        background: "#0F0F14",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      <span
                        className="text-2xl font-black font-mono leading-none"
                        style={{ color: "rgba(129,140,248,0.3)" }}
                      >
                        {event.year}
                      </span>
                      <h3 className="text-sm font-semibold mt-1 mb-1" style={{ color: "#F4F4F5" }}>
                        {event.title}
                      </h3>
                      <p className="text-xs leading-relaxed mb-2" style={{ color: "#71717A" }}>
                        {event.desc}
                      </p>
                      {event.tags.length > 0 && (
                        <div className={`flex flex-wrap gap-1 ${isLeft ? "md:justify-end" : ""}`}>
                          {event.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-1.5 py-0.5 rounded text-[10px] font-mono"
                              style={{ color: "#818CF8", border: "1px solid rgba(129,140,248,0.2)" }}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 items-center justify-center z-10">
                    <div
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background: "#818CF8",
                        boxShadow: "0 0 6px rgba(129,140,248,0.5)",
                      }}
                    />
                  </div>

                  {/* Mobile dot */}
                  <div
                    className="md:hidden absolute left-3 top-4 w-2.5 h-2.5 rounded-full"
                    style={{ background: "#818CF8", boxShadow: "0 0 6px rgba(129,140,248,0.4)" }}
                  />

                  {/* Spacer */}
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
