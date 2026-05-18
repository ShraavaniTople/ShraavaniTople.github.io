"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants, formatDate } from "@/lib/utils";
import { BLOG_POSTS } from "@/lib/constants";
import { ArrowRight, Clock, Tag } from "lucide-react";
import Link from "next/link";

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="blog" className="section-padding relative">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.03) 0%, transparent 50%)",
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
            className="text-xs font-mono tracking-widest text-[#06b6d4] uppercase mb-4"
          >
            ◆ Thoughts
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white max-w-3xl"
          >
            Writing at the{" "}
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent",
              }}
            >
              intersection.
            </span>
          </motion.h2>
          <motion.p variants={fadeUpVariants} className="text-[#a1a1aa] mt-4 max-w-xl">
            Robotics, community, AI governance — perspectives from building at the edges.
          </motion.p>
        </motion.div>

        {/* Blog cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {BLOG_POSTS.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href={`/blog/${post.slug}`} className="group block h-full">
                <div
                  className="rounded-xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:-translate-y-2"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {/* Gradient cover */}
                  <div
                    className={`h-36 bg-gradient-to-br ${post.gradient} relative overflow-hidden flex items-center justify-center`}
                  >
                    <div className="absolute inset-0 opacity-30"
                      style={{
                        backgroundImage: "radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1), transparent 60%)",
                      }}
                    />
                    <div
                      className="text-4xl font-black text-white/10 select-none tracking-tighter font-mono"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Tags overlay */}
                    <div className="absolute bottom-3 left-3 flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-mono px-2 py-0.5 rounded-full bg-black/40 text-white/70 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Meta */}
                    <div className="flex items-center gap-3 text-[10px] font-mono text-[#52525b] mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readingTime}
                      </span>
                      <span>{formatDate(post.date)}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-white leading-tight mb-2 group-hover:text-[#06b6d4] transition-colors text-sm sm:text-base">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs text-[#a1a1aa] leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#52525b] group-hover:text-[#06b6d4] transition-colors">
                      <span>Read more</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-mono text-[#a1a1aa] hover:text-[#06b6d4] transition-colors group"
          >
            <span>View all posts</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
