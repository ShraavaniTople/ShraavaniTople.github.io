"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certs = [
  { color: "#818CF8", name: "Google Project Management Professional Certificate", issuer: "Google" },
  { color: "#22C55E", name: "Advanced Data Analytics Certificate", issuer: "Google" },
  { color: "#a3e635", name: "Advanced CNNs, Transfer Learning & Recurrent Networks", issuer: "Deep Learning Specialization" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const a = (d = 0) => ({
    initial: { opacity: 0, y: 16 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: { duration: 0.55, delay: d, ease: [0.16, 1, 0.3, 1] as const },
  });

  return (
    <section className="section" id="about" ref={ref} style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 80, alignItems: "start" }} className="about-grid">
          <div>
            <motion.div {...a(0)} style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 8 }}>
              <span className="section-num">01</span>
              <h2 className="section-heading" style={{ fontSize: "clamp(32px,5vw,64px)" }}>
                About
              </h2>
            </motion.div>
            <motion.p {...a(0.06)} style={{ fontSize: 16, color: "#888899", marginBottom: 36, lineHeight: 1.7 }}>
              Engineer, researcher, community builder.
            </motion.p>

            <motion.p {...a(0.12)} style={{ fontSize: 17, color: "#F0EEFF", lineHeight: 1.85, marginBottom: 18, fontFamily: "var(--font-body, sans-serif)" }}>
              I am pursuing my M.Tech in Electronics and Telecommunication Engineering at VJTI Mumbai, working toward a PhD in robotics and control systems research. My work sits at the intersection of trajectory planning, embedded intelligence, and autonomous systems — I build and test real systems, not just study them.
            </motion.p>

            <motion.p {...a(0.18)} style={{ fontSize: 16, color: "#888899", lineHeight: 1.85, marginBottom: 18, fontFamily: "var(--font-body, sans-serif)" }}>
              I hold a black belt in martial arts. The discipline it demands — training under pressure, deliberate repetition, staying composed when the system fails — carries directly into how I approach engineering problems.
            </motion.p>

            <motion.p {...a(0.24)} style={{ fontSize: 16, color: "#888899", lineHeight: 1.85, marginBottom: 18, fontFamily: "var(--font-body, sans-serif)" }}>
              Outside of research, I organize and judge technical conferences and hackathons, mentor student programmers, and have served as a Google Women Techmakers Ambassador leading AI and digital literacy workshops across India. I am equally drawn to core engineering and to developer relations — I enjoy both building systems and communicating technical work to a community. Both feel like the same skill to me: making complex things land clearly.
            </motion.p>

            <motion.p {...a(0.3)} style={{ fontSize: 16, color: "#888899", lineHeight: 1.85, fontFamily: "var(--font-body, sans-serif)" }}>
              I am open to roles in robotics research, embedded systems, and to DevRel or developer-community work where the audience is engineers.
            </motion.p>
          </div>

          <div style={{ paddingTop: 8 }}>
            <motion.p {...a(0.1)} style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#444455", marginBottom: 24 }}>
              Certifications
            </motion.p>
            {certs.map((c, i) => (
              <motion.div key={c.name}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.18 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                style={{ borderLeft: `2px solid ${c.color}`, paddingLeft: 16, marginBottom: 24 }}
              >
                <p style={{ fontSize: 13, fontWeight: 600, color: "#F0EEFF", lineHeight: 1.4, marginBottom: 4, fontFamily: "var(--font-body, sans-serif)" }}>
                  {c.name}
                </p>
                <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: 10, fontWeight: 700, color: c.color, letterSpacing: "0.06em" }}>
                  {c.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
    </section>
  );
}
