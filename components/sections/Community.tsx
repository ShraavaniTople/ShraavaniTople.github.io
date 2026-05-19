"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const photos = [
  { src: "/photos/shraavani-speaking.jpg", role: "Speaker", event: "Women in Tech Mumbai" },
  { src: "/photos/shraavani-paris.jpg", role: "Speaker", event: "WTM Paris Summit" },
  { src: "/photos/shraavani-hotseat.jpg", role: "Panelist", event: "The Hot Seat AI" },
  { src: "/photos/shraavani-workshop.jpg", role: "Workshop Lead", event: "Tech Community Session" },
];

const roles = [
  { emoji: "🌐", title: "Women Techmakers Ambassador", org: "Google", desc: "Campus outreach and workshops — spoke at WTM Paris Summit" },
  { emoji: "⚡", title: "Hackathon Organizer", org: "ETHMumbai", desc: "India's largest Ethereum developer conference" },
  { emoji: "🏆", title: "Hackathon Organizer", org: "Hack The League", desc: "Built and ran developer hackathon end-to-end" },
  { emoji: "☁️", title: "Mentor", org: "Salesforce Trailblazer", desc: "Guided developers through the Trailblazer ecosystem" },
  { emoji: "🐍", title: "Python Trainer", org: "Symbiosis", desc: "Led Python bootcamps for early-stage developers" },
  { emoji: "⚖️", title: "Hackathon Judge", org: "ThinkAI", desc: "Assessed student AI projects and provided feedback" },
  { emoji: "🔵", title: "GDG Volunteer", org: "Google Developer Groups", desc: "Community volunteer and event support" },
  { emoji: "📸", title: "Speaker", org: "Snapchat · WIP India", desc: "Spoke at creator and product community events" },
];

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section className="section" id="community" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="label" style={{ marginBottom: 12 }}>Community & Leadership</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "clamp(24px,3.5vw,42px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 12, color: "#F0EEE9" }}>
          Building ecosystems.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ fontSize: 16, color: "#8A8784", marginBottom: 48, maxWidth: 540 }}>
          From organizing India&apos;s largest Ethereum hackathon to speaking at the WTM Paris Summit — building communities has always been part of the work.
        </motion.p>

        {/* 2×2 PHOTO GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16, marginBottom: 48 }} className="community-photo-grid">
          {photos.map((photo, i) => (
            <motion.div key={photo.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}
              className="community-photo-item"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.event}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                className="community-photo-img"
              />
              {/* Gradient overlay */}
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 50%, transparent 100%)" }} />
              {/* Caption */}
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px" }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: "#FF7262", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 4 }}>{photo.role}</p>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#FFFFFF" }}>{photo.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROLES GRID */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }} className="community-roles-grid">
          {roles.map((role, i) => (
            <motion.div key={role.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="card" style={{ padding: 18 }}
            >
              <div style={{ fontSize: 22, marginBottom: 10 }}>{role.emoji}</div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#F0EEE9", marginBottom: 3, lineHeight: 1.3 }}>{role.title}</p>
              <p style={{ fontSize: 12, color: "#FF7262", fontWeight: 500, marginBottom: 6 }}>{role.org}</p>
              <p style={{ fontSize: 11, color: "#4A4947", lineHeight: 1.5 }}>{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .community-photo-item:hover .community-photo-img { transform: scale(1.05); }
        @media(max-width:640px){
          .community-photo-grid { grid-template-columns: 1fr !important; }
          .community-roles-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
}
