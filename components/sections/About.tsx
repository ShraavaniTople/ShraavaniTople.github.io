"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const ROWS = [
  "→ Robotics & ROS2 systems",
  "→ AI / ML research",
  "→ Community & ecosystems",
  "→ Creator & storytelling",
];

const CARDS = [
  {
    title: "THE MACHINE",
    desc: "Deep RL, robotic manipulation, ROS2 navigation, and computer vision systems.",
    tags: ["PyTorch", "ROS2", "PPO", "OpenCV"],
  },
  {
    title: "THE NETWORK",
    desc: "Community building, hackathons, mentorship programs, and Women Techmakers.",
    tags: ["WTM", "ETHMumbai", "GDG", "Mentorship"],
  },
  {
    title: "THE SIGNAL",
    desc: "Storytelling, creator events, developer content, and technical writing.",
    tags: ["Creator", "Events", "Snapchat", "Writing"],
  },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="about" className="section px-6 lg:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease }}
              className="label mb-4"
            >
              ABOUT
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.08, ease }}
              className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-6"
              style={{ color: "#F4F4F5" }}
            >
              Building at the intersection of machines and humans.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.16, ease }}
              className="text-base leading-relaxed mb-8"
              style={{ color: "#71717A" }}
            >
              I&apos;m Shraavani — a multidisciplinary engineer who trains robotic arms with deep
              reinforcement learning, organizes blockchain hackathons, and mentors the next
              generation of developers. I work at the boundary where systems thinking meets
              community building.
            </motion.p>

            <div className="space-y-3">
              {ROWS.map((row, i) => (
                <motion.div
                  key={row}
                  initial={{ opacity: 0, x: -16 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.24 + i * 0.08, ease }}
                  className="text-sm font-mono"
                  style={{ color: "#818CF8" }}
                >
                  {row}
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease }}
            className="grid gap-4"
          >
            {CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease }}
                className="p-5 rounded-xl"
                style={{
                  background: "#0F0F14",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <h3
                  className="text-xs font-mono tracking-widest uppercase mb-2"
                  style={{ color: "#818CF8" }}
                >
                  {card.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#71717A" }}>
                  {card.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] font-mono"
                      style={{
                        color: "#71717A",
                        border: "1px solid rgba(255,255,255,0.06)",
                        background: "rgba(255,255,255,0.02)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
