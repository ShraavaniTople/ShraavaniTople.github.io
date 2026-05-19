"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram as InstagramIcon } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const TILES = [
  { label: "Hackathon recap 🎯", gradient: "linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(88,28,135,0.5) 100%)" },
  { label: "Robotics lab 🤖", gradient: "linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(139,92,246,0.4) 100%)" },
  { label: "WTM Workshop 🌐", gradient: "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(88,28,135,0.5) 100%)" },
  { label: "ETHMumbai ⚡", gradient: "linear-gradient(135deg, rgba(217,70,239,0.2) 0%, rgba(109,40,217,0.4) 100%)" },
  { label: "Tech event coverage 📸", gradient: "linear-gradient(135deg, rgba(167,139,250,0.2) 0%, rgba(49,46,129,0.5) 100%)" },
  { label: "Community building 🏗️", gradient: "linear-gradient(135deg, rgba(139,92,246,0.3) 0%, rgba(131,24,67,0.4) 100%)" },
];

export default function Instagram() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="instagram" className="section-pad" ref={ref}>
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease }}
          className="text-xs font-mono tracking-widest uppercase mb-4"
          style={{ color: "#A1A1AA" }}
        >
          CREATOR
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-10"
          style={{ color: "#FAFAF9" }}
        >
          On the internet.
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — text block */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.16, ease }}
          >
            <p className="text-base leading-relaxed mb-8" style={{ color: "#A1A1AA" }}>
              I document my journey in tech — events, hackathons, robotics labs, and the community I&apos;m building. Follow along.
            </p>

            <div
              className="p-6 rounded-xl mb-6"
              style={{ background: "#141414", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <InstagramIcon size={20} style={{ color: "#C084FC" }} />
                <span className="text-xl font-bold" style={{ color: "#FAFAF9" }}>
                  @shraavani___
                </span>
              </div>
              <p className="text-sm mb-5" style={{ color: "#A1A1AA" }}>
                Content around tech, robotics, hackathons &amp; community
              </p>
              <a
                href="https://instagram.com/shraavani___"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-85"
                style={{ background: "#C084FC", color: "#0A0A0A" }}
              >
                <InstagramIcon size={14} />
                Follow on Instagram
              </a>
            </div>
          </motion.div>

          {/* Right — grid of tiles */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.24, ease }}
            className="grid grid-cols-3 gap-2"
          >
            {TILES.map((tile, i) => (
              <motion.div
                key={tile.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.07, ease }}
                className="relative rounded-xl overflow-hidden cursor-pointer"
                style={{
                  aspectRatio: "1",
                  background: tile.gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "transform 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
                }}
              >
                <div
                  className="absolute bottom-0 left-0 right-0 p-2"
                  style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.6))" }}
                >
                  <p className="text-[10px] leading-tight" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {tile.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
