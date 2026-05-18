"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, ArrowUpRight } from "lucide-react";

interface ProjectStat {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  accent: string;
  accentDim: string;
  github?: string;
  live?: string;
  stats: ProjectStat[];
  size?: "normal" | "large";
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`relative rounded-xl overflow-hidden cursor-pointer group ${className}`}
        style={{
          background: project.accentDim,
          border: `1px solid ${project.accent}22`,
        }}
        onClick={() => setExpanded(true)}
      >
        {/* Top glow line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)`,
          }}
        />

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 0%, ${project.accent}10, transparent 70%)`,
          }}
        />

        <div className="p-5 sm:p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-3">
            <div>
              <h3
                className="text-lg font-bold tracking-tight"
                style={{ color: project.accent }}
              >
                {project.title}
              </h3>
              <p className="text-xs text-[#a1a1aa] mt-0.5">{project.subtitle}</p>
            </div>
            <ArrowUpRight
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-0.5"
              style={{ color: project.accent }}
            />
          </div>

          {/* Description */}
          <p className="text-sm text-[#a1a1aa] leading-relaxed flex-1 line-clamp-3">
            {project.description}
          </p>

          {/* Stats */}
          {project.stats.length > 0 && (
            <div className="flex flex-wrap gap-3 my-4">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="text-base font-bold font-mono"
                    style={{ color: project.accent }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#52525b] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mt-auto pt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono px-2 py-0.5 rounded"
                style={{
                  background: `${project.accent}15`,
                  color: project.accent,
                  border: `1px solid ${project.accent}25`,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs text-[#a1a1aa] hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-1.5 text-xs hover:opacity-80 transition-opacity"
                style={{ color: project.accent }}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Expanded modal */}
      <AnimatePresence>
        {expanded && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setExpanded(false)}
              className="fixed inset-0 z-[500] bg-black/80 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[501] w-full max-w-lg mx-4"
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "#0a0a0a",
                  border: `1px solid ${project.accent}30`,
                  boxShadow: `0 0 60px ${project.accent}20`,
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accent}80, transparent)` }}
                />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold" style={{ color: project.accent }}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-[#a1a1aa] mt-1">{project.subtitle}</p>
                    </div>
                    <button
                      onClick={() => setExpanded(false)}
                      className="p-1.5 rounded-lg text-[#52525b] hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[#a1a1aa] leading-relaxed mb-5">{project.description}</p>

                  {project.stats.length > 0 && (
                    <div className="grid grid-cols-2 gap-3 mb-5">
                      {project.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="p-3 rounded-lg"
                          style={{ background: `${project.accent}08`, border: `1px solid ${project.accent}20` }}
                        >
                          <div className="text-xl font-bold font-mono" style={{ color: project.accent }}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-[#52525b] mt-0.5">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono px-2.5 py-1 rounded"
                        style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}25` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                        style={{ background: `${project.accent}15`, color: project.accent, border: `1px solid ${project.accent}30` }}
                      >
                        <Github className="w-4 h-4" />
                        View on GitHub
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-black transition-all hover:scale-105"
                        style={{ background: project.accent }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
