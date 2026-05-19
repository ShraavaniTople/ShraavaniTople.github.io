"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const ease = [0.16, 1, 0.3, 1] as const;

const POSTS = [
  {
    slug: "reinforcement-learning-robotics",
    title: "What I learned training a robot arm with PPO",
    excerpt: "Deep dive into reward shaping, domain randomization, and the surprisingly hard problem of getting a KUKA to pick up a cube reliably.",
    tags: ["Robotics", "RL", "PyTorch"],
    date: "Jan 2026",
  },
  {
    slug: "community-building-tech",
    title: "Community is infrastructure",
    excerpt: "Why organizing ETHMumbai changed how I think about developer ecosystems — and what it means to build the scaffolding that enables others to build.",
    tags: ["Community", "Ecosystems"],
    date: "Dec 2025",
  },
  {
    slug: "ai-governance-public-services",
    title: "When AI meets public services",
    excerpt: "Exploring how AI governance decisions ripple through public infrastructure, inspired by building PublicAI Pulse.",
    tags: ["AI", "Governance", "Policy"],
    date: "Nov 2025",
  },
];

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="blog" className="section px-6 lg:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="label mb-3">THOUGHTS</p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "#F4F4F5" }}
          >
            Writing at the intersection.
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div
                  className="p-5 rounded-xl h-full flex flex-col transition-all duration-200"
                  style={{
                    background: "#0F0F14",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(129,140,248,0.2)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono" style={{ color: "#3F3F46" }}>
                      {post.date}
                    </span>
                    <div className="flex gap-1.5">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded"
                          style={{ color: "#818CF8", border: "1px solid rgba(129,140,248,0.2)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-sm font-semibold leading-snug mb-3 transition-colors"
                    style={{ color: "#F4F4F5" }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs leading-relaxed flex-1 mb-4" style={{ color: "#71717A" }}>
                    {post.excerpt}
                  </p>

                  {/* Read */}
                  <span className="text-xs font-mono transition-colors" style={{ color: "#3F3F46" }}>
                    Read →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
