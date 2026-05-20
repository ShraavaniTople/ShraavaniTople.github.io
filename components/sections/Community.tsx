"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// 4 entries with real photos
const photoRoles = [
  {
    photo: "/photos/shraavani-speaking.jpg",
    role: "Speaker",
    org: "Women in Tech Mumbai",
    desc: "Spoke on stage to a packed audience on topics around AI and community building.",
  },
  {
    photo: "/photos/shraavani-paris.jpg",
    role: "Speaker",
    org: "WTM Paris Summit",
    desc: "Delivered a session on AI prototyping at the Women Techmakers Paris Summit.",
  },
  {
    photo: "/photos/shraavani-hotseat.jpg",
    role: "Panelist",
    org: "The Hot Seat AI",
    desc: "Featured panelist at The Hot Seat AI — a tech and creator community event.",
  },
  {
    photo: "/photos/shraavani-workshop.jpg",
    role: "Workshop Lead",
    org: "Tech Community Session",
    desc: "Led a hands-on technical workshop for developers and students.",
  },
];

// 8 role cards with gradient mockups (no photos, no emojis)
const roles = [
  {
    gradient: "linear-gradient(135deg,#1a2a4a,#0d1b2a)",
    role: "Women Techmakers Ambassador",
    org: "Google",
    desc: "Led campus outreach and technical workshops across India",
  },
  {
    gradient: "linear-gradient(135deg,#1a0a28,#2d1060)",
    role: "Hackathon Organizer",
    org: "ETHMumbai",
    desc: "Organized India's large-scale Ethereum developer conference",
  },
  {
    gradient: "linear-gradient(135deg,#1a1000,#3d2800)",
    role: "Hackathon Organizer",
    org: "Hack The League",
    desc: "Built and ran a developer hackathon end-to-end",
  },
  {
    gradient: "linear-gradient(135deg,#001a1a,#003d3d)",
    role: "Mentor",
    org: "Salesforce Trailblazer",
    desc: "Guided developers through the Trailblazer ecosystem",
  },
  {
    gradient: "linear-gradient(135deg,#0a1a0a,#1a3a1a)",
    role: "Python Trainer",
    org: "Symbiosis",
    desc: "Led Python bootcamps for early-stage developers",
  },
  {
    gradient: "linear-gradient(135deg,#1a0a00,#3d2010)",
    role: "Hackathon Judge",
    org: "ThinkAI",
    desc: "Assessed student AI projects and provided structured feedback",
  },
  {
    gradient: "linear-gradient(135deg,#0a0a1a,#1a1a3d)",
    role: "GDG Volunteer",
    org: "Google Developer Groups",
    desc: "Community volunteer and event support",
  },
  {
    gradient: "linear-gradient(135deg,#1a0a10,#3d1a28)",
    role: "Speaker",
    org: "Snapchat & WIP India",
    desc: "Spoke at creator and product community events",
  },
];

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section className="section" id="community" ref={ref} style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <div className="container">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}
          className="label" style={{ marginBottom: 12 }}>Community & Leadership</motion.p>
        <motion.h2 initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.08 }}
          style={{ fontSize: "clamp(26px,4vw,44px)", fontWeight: 800, letterSpacing: "-0.025em", marginBottom: 12, color: "#111111" }}>
          Building ecosystems.
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.14 }}
          style={{ fontSize: 15, color: "#6B6663", marginBottom: 44, maxWidth: 520, lineHeight: 1.7 }}>
          From organizing India&apos;s largest Ethereum hackathon to mentoring hundreds of developers — community has always been central to my work.
        </motion.p>

        {/* 4 PHOTO CARDS — 4-col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 12 }} className="photo-roles-grid">
          {photoRoles.map((item, i) => (
            <motion.div key={item.org}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card"
              style={{ overflow: "hidden" }}
            >
              {/* Photo */}
              <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.photo} alt={item.org}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", transition: "transform 0.4s ease", display: "block" }}
                  className="comm-photo-img"
                />
              </div>
              {/* Caption */}
              <div style={{ padding: "16px 18px" }}>
                <p style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.09em", textTransform: "uppercase", color: "#C9573A", marginBottom: 4 }}>{item.role}</p>
                <p style={{ fontSize: 14, fontWeight: 700, color: "#111111", marginBottom: 5 }}>{item.org}</p>
                <p style={{ fontSize: 12, color: "#6B6663", lineHeight: 1.55 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 8 ROLE CARDS — gradient mockup top, content below — 4 col grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }} className="roles-grid">
          {roles.map((role, i) => (
            <motion.div key={role.role + role.org}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="bento-card"
              style={{ overflow: "hidden" }}
            >
              {/* Gradient mockup */}
              <div style={{ height: 72, background: role.gradient }} />
              {/* Content */}
              <div style={{ padding: "14px 16px" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#111111", lineHeight: 1.3, marginBottom: 3 }}>{role.role}</p>
                <p style={{ fontSize: 11, color: "#C9573A", fontWeight: 600, marginBottom: 6 }}>{role.org}</p>
                <p style={{ fontSize: 11, color: "#A09C99", lineHeight: 1.5 }}>{role.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .comm-photo-img:hover { transform: scale(1.04); }
        @media(max-width:900px){ .photo-roles-grid { grid-template-columns: repeat(2,1fr) !important; } .roles-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media(max-width:580px){ .photo-roles-grid { grid-template-columns: 1fr !important; } .roles-grid { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </section>
  );
}
