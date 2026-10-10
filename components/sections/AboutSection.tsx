"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certs = [
  { color: "#00B4D8", name: "Google Project Management Professional Certificate", issuer: "Google" },
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
              A bit about who I am.
            </motion.p>

            <motion.p {...a(0.12)} style={{ fontSize: 17, color: "#F0EEFF", lineHeight: 1.85, marginBottom: 18, fontFamily: "var(--font-body, sans-serif)" }}>
              I am doing my M.Tech in Electronics and Telecommunication Engineering at VJTI Mumbai. My research is in trajectory planning, control systems, and autonomous robots. I like building things that actually move and respond to the real world, not just simulations.
            </motion.p>

            <motion.p {...a(0.18)} style={{ fontSize: 16, color: "#888899", lineHeight: 1.85, marginBottom: 18, fontFamily: "var(--font-body, sans-serif)" }}>
              I also hold a black belt in martial arts. It taught me something that engineering keeps confirming: you get better by doing the same hard thing repeatedly until it stops being hard. That mindset shows up in how I debug, how I test, and how I handle a system that keeps failing.
            </motion.p>

            <motion.p {...a(0.24)} style={{ fontSize: 16, color: "#888899", lineHeight: 1.85, marginBottom: 18, fontFamily: "var(--font-body, sans-serif)" }}>
              Outside the lab, I organize hackathons, judge student competitions, and run developer workshops. I spent time as a Google Women Techmakers Ambassador running AI and digital literacy programs across India. I genuinely enjoy talking to people about technical work, not just doing it quietly.
            </motion.p>

            <motion.p {...a(0.3)} style={{ fontSize: 16, color: "#888899", lineHeight: 1.85, fontFamily: "var(--font-body, sans-serif)" }}>
              I am looking for roles in robotics research and embedded systems. I am also open to developer relations work where the audience is engineers.
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
