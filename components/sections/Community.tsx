"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const roles = [
  { emoji: "🌐", title: "Women Techmakers Ambassador", org: "Google", desc: "Campus outreach and technical workshops — spoke at WTM Paris Summit" },
  { emoji: "⚡", title: "Hackathon Organizer", org: "ETHMumbai", desc: "Managed India's large-scale Ethereum developer conference" },
  { emoji: "🏆", title: "Hackathon Organizer", org: "Hack The League", desc: "Built and ran a developer hackathon from scratch" },
  { emoji: "☁️", title: "Mentor", org: "Salesforce Trailblazer", desc: "Guided developers through the Trailblazer ecosystem" },
  { emoji: "🐍", title: "Python Trainer", org: "Symbiosis", desc: "Led Python bootcamps for early-stage developers" },
  { emoji: "⚖️", title: "Hackathon Judge", org: "ThinkAI", desc: "Assessed student AI projects and provided feedback" },
  { emoji: "🔵", title: "GDG Volunteer", org: "Google Developer Groups", desc: "Community volunteer and event support" },
  { emoji: "📸", title: "Speaker", org: "Snapchat · The Hot Seat AI · WIP India", desc: "Spoke at multiple creator and tech events" },
];

const photos = [
  { src: "/photos/event-paris.jpg", caption: "WTM Paris Summit", sub: "Speaking on AI Prototyping" },
  { src: "/photos/event-workshop.jpg", caption: "Workshop", sub: "Tech community session" },
  { src: "/photos/event-hotseat.jpg", caption: "The Hot Seat AI", sub: "Speaker" },
  { src: "/photos/event-wip.jpg", caption: "Women in Product India", sub: "Panel discussion" },
  { src: "/photos/event-community.jpg", caption: "Community Event", sub: "Recognition & awards" },
  { src: "/photos/event-audience.jpg", caption: "Tech Conference", sub: "Developer community" },
  { src: "/photos/event-roundtable.jpg", caption: "Roundtable", sub: "Leadership session" },
  { src: "/photos/event-intl.jpg", caption: "International Meetup", sub: "Global community" },
];

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const refPhotos = useRef(null);
  const inViewPhotos = useInView(refPhotos, { once: true, amount: 0.05 });

  return (
    <section className="section section-alt" id="community">
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          ref={ref} className="label" style={{ marginBottom: 12 }}>Community & Leadership</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.1 }}
          style={{ fontSize: "clamp(24px,3.5vw,40px)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16, color: "#111110" }}
        >Building ecosystems.</motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ fontSize: 16, color: "#6B7280", marginBottom: 48, maxWidth: 560 }}>
          From organizing India&apos;s largest Ethereum hackathon to speaking at the WTM Paris Summit — building communities has always been part of my work.
        </motion.p>

        {/* Event photo grid */}
        <div ref={refPhotos} style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 12,
          marginBottom: 56,
        }} className="photo-grid">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={inViewPhotos ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative", borderRadius: 12, overflow: "hidden", aspectRatio: "1", cursor: "default" }}
              className="photo-item"
            >
              <Image
                src={photo.src}
                alt={photo.caption}
                fill
                unoptimized
                style={{ objectFit: "cover", transition: "transform 0.4s" }}
                className="photo-img"
              />
              {/* Overlay on hover */}
              <div className="photo-overlay" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 50%)",
                opacity: 0, transition: "opacity 0.3s",
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
                padding: 12
              }}>
                <p style={{ color: "white", fontSize: 12, fontWeight: 600, lineHeight: 1.3 }}>{photo.caption}</p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 11 }}>{photo.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Roles grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }} className="roles-grid">
          {roles.map((role, i) => (
            <motion.div
              key={role.title + role.org}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="card"
              style={{ padding: 20 }}
            >
              <div style={{ fontSize: 24, marginBottom: 10 }}>{role.emoji}</div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "#111110", marginBottom: 2 }}>{role.title}</p>
              <p style={{ fontSize: 12, color: "#7C3AED", fontWeight: 500, marginBottom: 6 }}>{role.org}</p>
              <p style={{ fontSize: 11, color: "#9CA3AF", lineHeight: 1.5 }}>{role.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .photo-item:hover .photo-overlay { opacity: 1 !important; }
        .photo-item:hover .photo-img { transform: scale(1.04); }
        @media(max-width:900px){ .photo-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:640px){ .photo-grid { grid-template-columns: repeat(2,1fr) !important; } .roles-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
