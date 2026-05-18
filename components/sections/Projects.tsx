"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="section-padding relative">
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
            ◆ Selected Work
          </motion.p>
          <motion.h2
            variants={fadeUpVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-tight text-white max-w-3xl"
          >
            Building at the edge of{" "}
            <span
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.4)",
                color: "transparent",
              }}
            >
              what's possible.
            </span>
          </motion.h2>
          <motion.p
            variants={fadeUpVariants}
            className="text-[#a1a1aa] mt-4 max-w-xl"
          >
            Robots that see, systems that learn, infrastructure that scales — click any card for details.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* GRASP-X — large card spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2"
          >
            <ProjectCard project={PROJECTS[0]} className="h-full min-h-[300px]" />
          </motion.div>

          {/* Origin Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={PROJECTS[1]} className="h-full min-h-[300px]" />
          </motion.div>

          {/* StrikeBot */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={PROJECTS[2]} className="h-full min-h-[280px]" />
          </motion.div>

          {/* InferenceCache */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={PROJECTS[3]} className="h-full min-h-[280px]" />
          </motion.div>

          {/* PublicAI Pulse */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <ProjectCard project={PROJECTS[4]} className="h-full min-h-[280px]" />
          </motion.div>

          {/* ResilienceOps — large spans 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-2 lg:col-span-2"
          >
            <ProjectCard project={PROJECTS[5]} className="h-full min-h-[260px]" />
          </motion.div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 text-center"
        >
          <a
            href="https://github.com/ShraavaniTople"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#a1a1aa] hover:text-[#00ff88] transition-colors font-mono group"
          >
            <span>View all 26 repos on GitHub</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
