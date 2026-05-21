"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = ["Python","C++","React","TypeScript","ROS2","OpenCV","PyTorch","FastAPI","Raspberry Pi","Git"];
const certs = [
  { badge:"G", bg:"rgba(124,99,255,0.12)", color:"#7C63FF", name:"Google Project Management Professional Certificate", issuer:"Google" },
  { badge:"G", bg:"rgba(34,197,94,0.1)", color:"#22C55E", name:"Advanced Data Analytics Certificate", issuer:"Google" },
  { badge:"DL", bg:"rgba(168,85,247,0.1)", color:"#A855F7", name:"Advanced CNNs, Transfer Learning & Recurrent Networks", issuer:"Deep Learning Specialization" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.05 });
  const a = (d=0) => ({
    initial:{opacity:0,y:16},
    animate:inView?{opacity:1,y:0}:{opacity:0,y:16},
    transition:{duration:0.55,delay:d,ease:[0.16,1,0.3,1] as const},
  });

  return (
    <section className="section" id="about" ref={ref} style={{borderTop:"1px solid rgba(255,255,255,0.05)"}}>
      <div className="container">
        <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:64,alignItems:"start"}} className="about-grid">
          {/* Left */}
          <div>
            <motion.p {...a(0)} className="label" style={{marginBottom:12}}>About</motion.p>
            <motion.h2 {...a(0.08)} style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,letterSpacing:"-0.03em",marginBottom:28,color:"#EDE8FF"}}>
              More than a job title.
            </motion.h2>
            <motion.p {...a(0.16)} style={{fontSize:17,color:"#EDE8FF",lineHeight:1.8,marginBottom:16}}>
              Currently building AI-powered software at Agora AI. My work spans robotics, computer vision, deep reinforcement learning, and developer ecosystems.
            </motion.p>
            <motion.p {...a(0.22)} style={{fontSize:17,color:"#8B87A8",lineHeight:1.8,marginBottom:32}}>
              I&apos;ve trained robotic arms to pick objects with deep RL, built tamper-proof AI proxies with Merkle trees, organized India&apos;s largest Ethereum hackathon, and mentored hundreds of developers.
            </motion.p>
            <motion.div {...a(0.28)} style={{display:"flex",flexWrap:"wrap",gap:7}}>
              {skills.map(s => <span key={s} className="chip">{s}</span>)}
            </motion.div>
          </div>

          {/* Right — certs */}
          <div style={{display:"flex",flexDirection:"column",gap:10}}>
            <motion.p {...a(0.1)} className="label" style={{marginBottom:8}}>Certifications</motion.p>
            {certs.map((c,i) => (
              <motion.div key={c.name}
                initial={{opacity:0,x:16}} animate={inView?{opacity:1,x:0}:{}}
                transition={{duration:0.5,delay:0.18+i*0.1,ease:[0.16,1,0.3,1]}}
                style={{
                  background:"#0F0F1E",
                  border:"1px solid rgba(255,255,255,0.06)",
                  borderLeft:`3px solid ${c.color}`,
                  borderRadius:12,
                  padding:"14px 16px",
                  transition:"background 0.2s",
                }}
                className="cert-card">
                <p style={{fontSize:13,fontWeight:700,color:"#EDE8FF",lineHeight:1.4,marginBottom:4}}>{c.name}</p>
                <p style={{fontSize:11,fontWeight:600,color:c.color}}>{c.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .cert-card:hover{border-color:rgba(124,99,255,0.2)!important;}
        @media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:40px!important;}}
      `}</style>
    </section>
  );
}
