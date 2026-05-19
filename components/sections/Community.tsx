"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  { icon: "🌐", title: "Google Women Techmakers Ambassador", org: "Google WTM", desc: "Empowering women in technology across India" },
  { icon: "⚡", title: "ETHMumbai Organizer", org: "Ethereum Foundation", desc: "Co-organized one of India's largest Ethereum hackathons" },
  { icon: "🏆", title: "Hack The League Organizer", org: "Independent", desc: "Built and ran a developer hackathon from scratch" },
  { icon: "☁️", title: "Salesforce Trailblazer Mentor", org: "Salesforce", desc: "Mentoring developers through the Trailblazer ecosystem" },
  { icon: "🔵", title: "GDG Volunteer", org: "Google Developer Groups", desc: "Google Developer Groups community volunteer" },
  { icon: "🐍", title: "Python Mentor", org: "Community", desc: "Teaching Python to early-stage developers" },
  { icon: "⚖️", title: "Hackathon Judge", org: "Multiple events", desc: "Evaluating projects across multiple hackathons" },
  { icon: "📸", title: "Snapchat Creator Speaker", org: "Snapchat", desc: "Spoke at Snapchat's creator-focused tech event" },
];

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="community" className="section px-6 lg:px-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="mb-12"
        >
          <p className="label mb-3">COMMUNITY</p>
          <h2
            className="text-3xl sm:text-4xl font-bold tracking-tight"
            style={{ color: "#F4F4F5" }}
          >
            Ecosystems don&apos;t build themselves.
          </h2>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.06, ease }}
              className="p-4 rounded-xl transition-all duration-200 group"
              style={{
                background: "#0F0F14",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(129,140,248,0.3)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.06)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "#F4F4F5" }}>
                {card.title}
              </h3>
              <p className="text-xs font-mono mb-2" style={{ color: "#818CF8" }}>
                {card.org}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#71717A" }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Stat row */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          className="text-sm font-mono text-center"
          style={{ color: "#71717A" }}
        >
          <span style={{ color: "#818CF8" }}>8+ roles</span>
          {" · "}
          <span style={{ color: "#818CF8" }}>100s mentored</span>
          {" · "}
          <span style={{ color: "#818CF8" }}>Multiple events organized</span>
        </motion.p>
      </div>
    </section>
  );
}
