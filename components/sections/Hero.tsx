"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Instagram, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import MagneticButton from "@/components/ui/MagneticButton";
import { SITE_CONFIG, ROLES } from "@/lib/constants";

const ParticleField = dynamic(() => import("@/components/effects/ParticleField"), {
  ssr: false,
  loading: () => null,
});

const STAT_BADGES = [
  { label: "26 repos", accent: "#00ff88" },
  { label: "KUKA IIWA7", accent: "#6366f1" },
  { label: "ROS2 Humble", accent: "#f59e0b" },
  { label: "7 communities", accent: "#06b6d4" },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typeRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  // Typewriter effect
  useEffect(() => {
    const current = ROLES[roleIndex];

    if (!isDeleting && displayedRole.length < current.length) {
      typeRef.current = setTimeout(() => {
        setDisplayedRole(current.slice(0, displayedRole.length + 1));
      }, 70);
    } else if (!isDeleting && displayedRole.length === current.length) {
      typeRef.current = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedRole.length > 0) {
      typeRef.current = setTimeout(() => {
        setDisplayedRole(displayedRole.slice(0, -1));
      }, 40);
    } else if (isDeleting && displayedRole.length === 0) {
      setIsDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(typeRef.current);
  }, [displayedRole, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToBlog = () => {
    document.getElementById("blog")?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { icon: Github, href: SITE_CONFIG.github, label: "GitHub" },
    { icon: Twitter, href: SITE_CONFIG.twitter, label: "Twitter" },
    { icon: Linkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
    { icon: Instagram, href: SITE_CONFIG.instagram, label: "Instagram" },
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden" id="hero">
      {/* Particle background */}
      <div className="absolute inset-0 z-0">
        <ParticleField />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(0,255,136,0.04) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(99,102,241,0.04) 0%, transparent 50%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Stat badges */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {STAT_BADGES.map((badge) => (
            <span
              key={badge.label}
              className="text-xs font-mono px-3 py-1 rounded-full"
              style={{
                background: `${badge.accent}12`,
                color: badge.accent,
                border: `1px solid ${badge.accent}25`,
              }}
            >
              {badge.label}
            </span>
          ))}
        </motion.div>

        {/* Main name */}
        <div className="mb-4 overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(60px,12vw,160px)] font-black leading-none tracking-tighter text-white"
          >
            SHRAAVANI
          </motion.h1>
        </div>

        <div className="mb-6 overflow-hidden">
          <motion.h1
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(60px,12vw,160px)] font-black leading-none tracking-tighter"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.6)",
              color: "transparent",
            }}
          >
            TOPLE
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-[#a1a1aa] max-w-xl mb-4 leading-relaxed"
        >
          Engineering systems, communities, and intelligent experiences.
        </motion.p>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex items-center gap-2 mb-10 h-8"
        >
          <span className="text-[#52525b] font-mono text-sm">./</span>
          <span className="text-[#00ff88] font-mono text-base sm:text-lg font-semibold">
            {displayedRole}
          </span>
          <span className="terminal-cursor" />
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-4 mb-12"
        >
          <MagneticButton
            onClick={scrollToProjects}
            className="px-7 py-3 rounded-xl text-black font-semibold text-sm transition-all hover:scale-105"
            style={{
              background: "#00ff88",
              boxShadow: "0 0 30px rgba(0,255,136,0.3)",
            }}
          >
            View Work →
          </MagneticButton>
          <MagneticButton
            onClick={scrollToBlog}
            className="px-7 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:bg-white/[0.06]"
            style={{
              border: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            Read Blog
          </MagneticButton>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="flex items-center gap-3"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="group p-2.5 rounded-xl text-[#52525b] hover:text-white transition-all hover:-translate-y-1"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
          <div className="w-px h-4 bg-white/10 mx-1" />
          <span className="text-xs font-mono text-[#52525b]">@shraavani___</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-[#52525b]"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.div>
        <span className="text-[10px] font-mono text-[#3f3f46] tracking-widest uppercase rotate-90 origin-center">
          scroll
        </span>
      </motion.div>
    </section>
  );
}
