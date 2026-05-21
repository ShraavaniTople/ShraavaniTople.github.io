"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  { num:"01", cat:"Robotics / AI", name:"GRASP-X", desc:"Deep RL pick-and-place for KUKA IIWA7. Trained via PPO on raw 84×84 RGB frames with domain randomization — no manual state engineering.", metric:"80%+ success rate · 60%+ zero-shot generalization", tags:["PyTorch","PPO","PyBullet","Python"], github:"https://github.com/ShraavaniTople/grasp-x", live:null as string|null, media:"/projects/grasp-x.mp4" as string|null, mediaType:"video" as "video"|"image"|null, bg:"#0A0818" },
  { num:"02", cat:"Robotics / CV", name:"StrikeBot", desc:"Autonomous marble-playing robot with real-time OpenCV detection pipeline and mechanical actuation on Raspberry Pi.", metric:"92% accuracy at 15 FPS · 76% hit rate in 50 matches", tags:["Python","C++","OpenCV","Raspberry Pi"], github:"https://github.com/ShraavaniTople/StrikeBot-Autonomous-Marble-Playing-Robot", live:null as string|null, media:"/projects/strikebot.mp4" as string|null, mediaType:"video" as "video"|"image"|null, bg:"#100A00" },
  { num:"03", cat:"Robotics", name:"Origin Navigation", desc:"Autonomous ROS2 trajectory tracking using cubic spline interpolation and pure pursuit controller for TurtleBot3.", metric:"91.9% accuracy · 38 automated tests", tags:["ROS2","C++","Gazebo","TurtleBot3"], github:null as string|null, live:null as string|null, media:null, mediaType:null, bg:"#020F07" },
  { num:"04", cat:"AI / Security", name:"InferenceCache", desc:"Tamper-proof AI inference proxy with SHA-256 caching and Merkle tree verification for auditable, signed AI output history.", metric:"Ed25519 signatures · Merkle audit log", tags:["Python","FastAPI","Cryptography"], github:"https://github.com/ShraavaniTople/inferencecache", live:null as string|null, media:null, mediaType:null, bg:"#080514" },
  { num:"05", cat:"Web / AI", name:"PublicAI Pulse", desc:"Browser simulator exploring how AI governance parameters affect public service outcomes like healthcare and transit in real time.", metric:"Live interactive demo", tags:["JavaScript","HTML","CSS"], github:"https://github.com/ShraavaniTople/publicai-pulse", live:"https://shraavanitople.github.io/publicai-pulse", media:null, mediaType:null, bg:"#020C18" },
  { num:"06", cat:"Web", name:"Sakura Lanterns", desc:"Digital sky lantern web app with animated visuals, multiple themes, and shareable links.", metric:"CSS art · Animated", tags:["React","JavaScript","Tailwind"], github:"https://github.com/ShraavaniTople/sakura-lanterns", live:null as string|null, media:null, mediaType:null, bg:"#120208" },
  { num:"07", cat:"Desktop", name:"ResilienceOps", desc:"Desktop app simulating incident-to-impact orchestration with real-time execution tracking and cross-platform deployment.", metric:"Cross-platform · Electron", tags:["Electron","React","TypeScript"], github:"https://github.com/ShraavaniTople/resilienceops", live:null as string|null, media:null, mediaType:null, bg:"#0A0A0A" },
];

function ProjCard({ p, index }: { p: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <div
      ref={ref}
      style={{
        position: "sticky",
        top: 80 + index * 12,
        zIndex: index + 1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          background: p.bg,
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 16,
          padding: "40px 44px",
          marginBottom: 12,
        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center" }} className="proj-card-inner">
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#444455" }}>{p.cat}</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#333" }}/>
              <span style={{ fontSize: 11, fontWeight: 600, color: "#333344" }}>{p.num}</span>
            </div>
            <h3 style={{ fontSize: "clamp(28px,3.5vw,48px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#7C63FF", marginBottom: 16, lineHeight: 1 }}>{p.name}</h3>
            <p style={{ fontSize: 14, color: "#888899", lineHeight: 1.75, marginBottom: 16 }}>{p.desc}</p>
            <p style={{ fontSize: 12, color: "#7C63FF", fontWeight: 600, marginBottom: 20 }}>{p.metric}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
              {p.tags.map(t => <span key={t} className="chip">{t}</span>)}
            </div>
            <div style={{ display: "flex", gap: 20 }}>
              {p.github && (
                <a href={p.github} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#666677", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#7C63FF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#666677")}>
                  <Github size={14} /> GitHub
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 600, color: "#666677", textDecoration: "none", transition: "color 0.15s" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#7C63FF")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#666677")}>
                  <ExternalLink size={14} /> Live demo
                </a>
              )}
            </div>
          </div>

          {/* Right — visual */}
          <div style={{ borderRadius: 10, overflow: "hidden", height: 220, background: "rgba(124,99,255,0.04)", border: "1px solid rgba(255,255,255,0.05)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
            {p.media && p.mediaType === "video" && (
              <video src={p.media} autoPlay muted loop playsInline
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            )}
            {p.media && p.mediaType === "image" && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.media} alt={p.name}
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
            )}
            {!p.media && (
              <span style={{ fontSize: 80, fontWeight: 900, fontStyle: "italic", color: "rgba(124,99,255,0.07)", letterSpacing: "-0.05em", userSelect: "none" }}>{p.name.slice(0, 2)}</span>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <section className="section" id="projects" ref={ref}>
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ fontSize: "clamp(32px,5vw,64px)", fontWeight: 900, letterSpacing: "-0.03em", color: "#7C63FF", marginBottom: 8 }}>
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }} animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontSize: 16, color: "#888899", marginBottom: 48, maxWidth: 500, lineHeight: 1.7 }}>
          Things I&apos;ve built — from robotics and AI to web and security.
        </motion.p>

        <div>
          {projects.map((p, i) => <ProjCard key={p.name} p={p} index={i} />)}
        </div>
      </div>
      <style>{`@media(max-width:768px){.proj-card-inner{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
