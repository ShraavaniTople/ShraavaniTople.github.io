"use client";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Github, Linkedin, ArrowDown } from "lucide-react";

const ROLES = ["Robotics Engineer", "AI Builder", "Community Operator"];

const STATS = [
  { value: 26, label: "repos" },
  { value: 8, label: "communities", suffix: "+" },
  { value: 80, label: "RL success", suffix: "%+" },
  { value: 38, label: "tests passed" },
];

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 40);
          const timer = setInterval(() => {
            start = Math.min(start + step, target);
            setCount(start);
            if (start >= target) clearInterval(timer);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden px-6 lg:px-10"
      style={{ background: "#08080C" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 60%, rgba(129,140,248,0.05) 0%, transparent 70%)",
        }}
      />

      {/* Corner tags */}
      <div className="absolute top-20 left-6 lg:left-10">
        <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: "#3F3F46" }}>
          PORTFOLIO 2026
        </span>
      </div>
      <div className="absolute top-20 right-6 lg:right-10 hidden sm:block">
        <span className="text-[11px] font-mono" style={{ color: "#818CF8" }}>
          Available for opportunities →
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center pt-20">
        {/* Left block */}
        <div>
          {/* Name */}
          <div className="overflow-hidden mb-0">
            <motion.h1
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease }}
              className="text-[clamp(56px,10vw,120px)] font-black leading-none tracking-tight"
              style={{ color: "#F4F4F5" }}
            >
              SHRAAVANI
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease }}
              className="text-[clamp(56px,10vw,120px)] font-black leading-none tracking-tight"
              style={{ color: "#F4F4F5" }}
            >
              TOPLE.
            </motion.h1>
          </div>

          {/* Rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="h-px mb-6 origin-left"
            style={{ width: 80, background: "#818CF8" }}
          />

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease }}
            className="text-lg leading-relaxed mb-6 max-w-md"
            style={{ color: "#71717A" }}
          >
            Engineering systems, communities, and intelligent experiences.
          </motion.p>

          {/* Role pills */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease }}
            className="flex flex-wrap gap-2 mb-8"
          >
            {ROLES.map((role) => (
              <span
                key={role}
                className="px-3 py-1 rounded-full text-xs font-mono transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: role === ROLES[roleIdx] ? "#818CF8" : "#71717A",
                  background: role === ROLES[roleIdx] ? "rgba(129,140,248,0.08)" : "transparent",
                }}
              >
                {role}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:opacity-90"
              style={{ background: "#818CF8", color: "#fff" }}
            >
              View Work <ArrowDown className="w-3.5 h-3.5" />
            </button>
            <a
              href="https://github.com/ShraavaniTople"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-white/[0.04]"
              style={{ border: "1px solid rgba(255,255,255,0.08)", color: "#71717A" }}
            >
              <Github className="w-3.5 h-3.5" /> GitHub ↗
            </a>
            <a
              href="https://linkedin.com/in/shraavani-tople"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all hover:bg-white/[0.04]"
              style={{ border: "1px solid rgba(255,255,255,0.08)", color: "#71717A" }}
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn ↗
            </a>
          </motion.div>
        </div>

        {/* Right — stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease }}
          className="grid grid-cols-2 gap-4"
        >
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="p-6 rounded-xl"
              style={{
                background: "#0F0F14",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="text-4xl font-black tracking-tight mb-1"
                style={{ color: "#F4F4F5" }}
              >
                <CountUp target={stat.value} suffix={stat.suffix ?? ""} />
              </div>
              <div className="text-xs font-mono" style={{ color: "#71717A" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          className="w-px rounded-full"
          style={{ background: "#818CF8", height: 0 }}
          animate={{ height: [0, 32, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
        <span className="text-[10px] font-mono tracking-widest uppercase" style={{ color: "#3F3F46" }}>
          scroll
        </span>
      </motion.div>
    </section>
  );
}
