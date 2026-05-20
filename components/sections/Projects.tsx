"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  { num:"01", cat:"ROBOTICS / AI", name:"GRASP-X", desc:"Deep RL pick-and-place for KUKA IIWA7. Trained via PPO on raw 84×84 RGB frames with domain randomization — no manual state engineering.", metric:"80%+ training success · 60%+ zero-shot generalization", tags:["PyTorch","PPO","PyBullet","Python"], github:"https://github.com/ShraavaniTople/grasp-x", live:null as string|null, preview:"linear-gradient(135deg,#0a0a1a,#1a1040,#2d1b69)", featured:true },
  { num:"02", cat:"ROBOTICS / CV", name:"StrikeBot", desc:"Autonomous marble-playing robot with real-time OpenCV detection pipeline and mechanical actuation on Raspberry Pi.", metric:"92% accuracy at 15 FPS · 76% hit rate in 50 matches", tags:["Python","C++","OpenCV","Raspberry Pi"], github:"https://github.com/ShraavaniTople/StrikeBot-Autonomous-Marble-Playing-Robot", live:null as string|null, preview:"linear-gradient(135deg,#0f0a00,#1f1000,#3d1a00)", featured:true },
  { num:"03", cat:"ROBOTICS", name:"Origin Navigation", desc:"Autonomous ROS2 trajectory tracking using cubic spline interpolation and pure pursuit controller for TurtleBot3.", metric:"91.9% accuracy · 38 automated tests", tags:["ROS2","C++","Gazebo","TurtleBot3"], github:null as string|null, live:null as string|null, preview:"linear-gradient(135deg,#020f07,#04271a,#063d26)", featured:false },
  { num:"04", cat:"AI / SECURITY", name:"InferenceCache", desc:"Tamper-proof AI inference proxy with SHA-256 caching and Merkle tree verification for auditable, signed AI output history.", metric:"Ed25519 signatures · Merkle audit log", tags:["Python","FastAPI","Cryptography"], github:"https://github.com/ShraavaniTople/inferencecache", live:null as string|null, preview:"linear-gradient(135deg,#0a0814,#16104a,#1e146b)", featured:false },
  { num:"05", cat:"WEB / AI", name:"PublicAI Pulse", desc:"Browser simulator exploring how AI governance parameters affect public service outcomes like healthcare and transit in real time.", metric:"Live interactive demo", tags:["JavaScript","HTML","CSS"], github:"https://github.com/ShraavaniTople/publicai-pulse", live:"https://shraavanitople.github.io/publicai-pulse", preview:"linear-gradient(135deg,#020c14,#041e30,#063348)", featured:false },
  { num:"06", cat:"WEB", name:"Sakura Lanterns", desc:"Digital sky lantern web app with animated visuals, multiple themes, and shareable links. Optimized for mobile.", metric:"CSS art · Animated", tags:["React","JavaScript","Tailwind"], github:"https://github.com/ShraavaniTople/sakura-lanterns", live:null as string|null, preview:"linear-gradient(135deg,#14020a,#2d0516,#4a0826)", featured:false },
  { num:"07", cat:"DESKTOP", name:"ResilienceOps", desc:"Desktop app simulating incident-to-impact orchestration with real-time execution tracking and cross-platform deployment.", metric:"Cross-platform · Electron", tags:["Electron","React","TypeScript"], github:"https://github.com/ShraavaniTople/resilienceops", live:null as string|null, preview:"linear-gradient(135deg,#080808,#111111,#1a1a1a)", featured:false },
];

function ProjCard({ p, delay, inView }: { p: typeof projects[0]; delay: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity:0, y:22 }}
      animate={inView ? { opacity:1, y:0 } : {}}
      transition={{ duration:0.55, delay, ease:[0.16,1,0.3,1] }}
      className="proj-card"
      style={{ display:"flex", flexDirection:"column", ...(p.featured ? { borderColor:"rgba(124,99,255,0.25)" } : {}) }}
    >
      {/* Preview header */}
      <div style={{ height:120, background:p.preview, position:"relative", flexShrink:0, borderBottom:"1px solid rgba(255,255,255,0.04)" }}>
        <span style={{ position:"absolute", top:14, left:16, fontSize:10, fontWeight:700, letterSpacing:"0.1em", textTransform:"uppercase", color:"rgba(255,255,255,0.3)" }}>{p.cat}</span>
        <div style={{ position:"absolute", top:10, right:14, display:"flex", gap:8 }}>
          {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{color:"rgba(255,255,255,0.25)",transition:"color 0.15s"}} onMouseEnter={e=>(e.currentTarget.style.color="#7C63FF")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.25)")}><Github size={14}/></a>}
          {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer" onClick={e=>e.stopPropagation()} style={{color:"rgba(255,255,255,0.25)",transition:"color 0.15s"}} onMouseEnter={e=>(e.currentTarget.style.color="#7C63FF")} onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.25)")}><ExternalLink size={14}/></a>}
        </div>
        <span style={{ position:"absolute", bottom:10, right:16, fontSize:38, fontWeight:900, fontStyle:"italic", color:"rgba(255,255,255,0.04)", letterSpacing:"-0.04em" }}>{p.num}</span>
        {p.featured && <div style={{position:"absolute",top:0,left:0,right:0,height:1,background:"linear-gradient(90deg,transparent,rgba(124,99,255,0.5),transparent)"}}/>}
      </div>
      {/* Content */}
      <div style={{ padding:"20px 22px", flex:1, display:"flex", flexDirection:"column" }}>
        <p style={{ fontSize:16, fontWeight:700, color:"#EDE8FF", marginBottom:7, lineHeight:1.3 }}>{p.name}</p>
        <p style={{ fontSize:12, color:"#8B87A8", lineHeight:1.65, marginBottom:10, flex:1 }}>{p.desc}</p>
        <p style={{ fontSize:11, color:"#7C63FF", fontWeight:600, marginBottom:12 }}>{p.metric}</p>
        <div style={{ display:"flex", flexWrap:"wrap", gap:5 }}>
          {p.tags.map(t => <span key={t} className="chip" style={{fontSize:10}}>{t}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.05 });

  return (
    <section className="section" id="projects" ref={ref} style={{borderTop:"1px solid rgba(255,255,255,0.05)"}}>
      <div className="container">
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}} className="label" style={{marginBottom:12}}>Selected Work</motion.p>
        <motion.h2 initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.08}}
          style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,letterSpacing:"-0.03em",marginBottom:44,color:"#EDE8FF"}}>
          Things I&apos;ve built.
        </motion.h2>

        {/* Row 1: 7fr 5fr */}
        <div style={{display:"grid",gridTemplateColumns:"7fr 5fr",gap:12,marginBottom:12}} className="proj-row-1">
          <ProjCard p={projects[0]} delay={0.12} inView={inView}/>
          <ProjCard p={projects[1]} delay={0.19} inView={inView}/>
        </div>
        {/* Row 2: 3 equal */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12,marginBottom:12}} className="proj-row-2">
          <ProjCard p={projects[2]} delay={0.24} inView={inView}/>
          <ProjCard p={projects[3]} delay={0.30} inView={inView}/>
          <ProjCard p={projects[4]} delay={0.36} inView={inView}/>
        </div>
        {/* Row 3: 2 equal */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}} className="proj-row-3">
          <ProjCard p={projects[5]} delay={0.40} inView={inView}/>
          <ProjCard p={projects[6]} delay={0.46} inView={inView}/>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){ .proj-row-1,.proj-row-2,.proj-row-3{grid-template-columns:1fr 1fr!important;} }
        @media(max-width:580px){ .proj-row-1,.proj-row-2,.proj-row-3{grid-template-columns:1fr!important;} }
      `}</style>
    </section>
  );
}
