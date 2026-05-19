"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ease = [0.16, 1, 0.3, 1] as const;

const CARDS = [
  {
    icon: "🌐",
    role: "Women Techmakers Ambassador",
    org: "Google",
    desc: "Led campus outreach and technical workshops",
  },
  {
    icon: "⚡",
    role: "Hackathon Organizer",
    org: "ETHMumbai",
    desc: "Managed large-scale Ethereum developer conference",
  },
  {
    icon: "🏆",
    role: "Hackathon Organizer",
    org: "Hack The League",
    desc: "Built and ran a developer hackathon from scratch",
  },
  {
    icon: "☁️",
    role: "Mentor",
    org: "Salesforce Trailblazer",
    desc: "Guided developers through the Trailblazer ecosystem",
  },
  {
    icon: "🐍",
    role: "Python Trainer",
    org: "Symbiosis",
    desc: "Led Python bootcamps for early-stage developers",
  },
  {
    icon: "⚖️",
    role: "Hackathon Judge",
    org: "ThinkAI",
    desc: "Assessed student AI projects and provided feedback",
  },
  {
    icon: "🔵",
    role: "Volunteer",
    org: "Google Developer Groups",
    desc: "Community volunteer and event support",
  },
  {
    icon: "📸",
    role: "Speaker",
    org: "Snapchat Creator Event",
    desc: "Spoke at Snapchat's creator-focused tech event",
  },
];

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="community" className="section-pad" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "#A1A1AA" }}
        >
          COMMUNITY &amp; LEADERSHIP
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
          style={{ color: "#FAFAF9" }}
        >
          Building ecosystems.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {CARDS.map((card, i) => (
            <motion.div
              key={`${card.role}-${card.org}`}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.06, ease }}
              className="p-5 rounded-xl transition-all duration-200"
              style={{
                background: "#141414",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(192,132,252,0.3)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.08)";
                (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
              }}
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="text-sm font-semibold mb-1" style={{ color: "#FAFAF9" }}>
                {card.role}
              </h3>
              <p className="text-xs font-mono mb-2" style={{ color: "#C084FC" }}>
                {card.org}
              </p>
              <p className="text-xs leading-relaxed" style={{ color: "#A1A1AA", fontSize: "12px" }}>
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
