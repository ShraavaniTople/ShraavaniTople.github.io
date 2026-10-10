"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const photoSlots = [
  { photo: "/photos/shraavani-speaking.jpg", role: "Speaker", event: "Women in Tech Mumbai", desc: "On stage on AI and community building." },
  { photo: "/photos/shraavani-workshop.jpg", role: "Workshop Lead", event: "Faculty Training Session", desc: "AI and design thinking at Atlas SkillTech University." },
  { photo: "/photos/shraavani-hackathon.jpg", role: "Organizer", event: "ETHMumbai Hackathon", desc: "India's large-scale Ethereum developer conference." },
  { photo: "/photos/shraavani-mentor.jpg", role: "Mentor", event: "Python Bootcamp", desc: "Student developers at Symbiosis International University." },
];

const roles = [
  { role: "Hackathon Judge", org: "ThinkAI", desc: "Assessed student AI projects and delivered structured feedback." },
  { role: "WTM Ambassador", org: "Google", desc: "Led AI and digital literacy workshops across India." },
  { role: "Hackathon Organizer", org: "ETHMumbai", desc: "Built and ran India's large-scale Ethereum developer conference." },
  { role: "Hackathon Organizer", org: "Hack The League 3", desc: "End-to-end organization of a multi-track developer hackathon." },
  { role: "Faculty Trainer", org: "Atlas SkillTech University", desc: "Delivered AI and design thinking training for faculty staff." },
  { role: "Python Mentor", org: "Symbiosis International University", desc: "Ran programming bootcamps for early-stage developers." },
  { role: "Community Volunteer", org: "Google Developer Groups", desc: "Event support and community building for GDG Mumbai." },
  { role: "Black Belt", org: "Martial Arts", desc: "Discipline, precision under pressure, and composure in failure." },
];

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section className="section" id="community" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55 }}
          style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}
        >
          <span className="section-num">05</span>
          <h2 className="section-heading" style={{ fontSize: "clamp(32px,5vw,64px)" }}>
            Leadership
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.55, delay: 0.1 }}
          style={{ fontSize: 16, color: "#888899", marginBottom: 56, maxWidth: 500, lineHeight: 1.7 }}
        >
          Hackathons organized, communities built, developers mentored.
        </motion.p>

        {/* Photo grid — replace placeholder paths with real photos */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14, marginBottom: 60 }} className="photo-grid">
          {photoSlots.map((item, i) => (
            <motion.div key={item.event}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, delay: 0.14 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              style={{ borderRadius: 10, overflow: "hidden", position: "relative", background: "#0E0E0E" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.photo}
                alt={item.event}
                style={{ width: "100%", height: 220, objectFit: "cover", objectPosition: "top", display: "block" }}
                className="comm-img"
                onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                padding: "20px 16px",
                background: "linear-gradient(to top,rgba(8,8,8,0.92),transparent)",
              }}>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#00B4D8", marginBottom: 4 }}>
                  {item.role}
                </p>
                <p style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: 13, fontWeight: 700, color: "#F0EEFF", lineHeight: 1.3 }}>
                  {item.event}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Role grid */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: 1, border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 10, overflow: "hidden",
        }} className="roles-grid">
          {roles.map((r, i) => (
            <motion.div key={r.role + r.org}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.32 + i * 0.04 }}
              style={{
                padding: "20px 18px",
                background: "#0A0A0A",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: 13, fontWeight: 700, color: "#F0EEFF", lineHeight: 1.3, marginBottom: 4 }}>{r.role}</p>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, color: "#00B4D8", fontWeight: 700, marginBottom: 8, letterSpacing: "0.04em" }}>{r.org}</p>
              <p style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: 11, color: "#444455", lineHeight: 1.55 }}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .comm-img{transition:transform 0.4s ease;}
        .comm-img:hover{transform:scale(1.04);}
        @media(max-width:900px){
          .photo-grid{grid-template-columns:1fr 1fr!important;}
          .roles-grid{grid-template-columns:1fr 1fr!important;}
        }
        @media(max-width:480px){
          .photo-grid{grid-template-columns:1fr!important;}
          .roles-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
