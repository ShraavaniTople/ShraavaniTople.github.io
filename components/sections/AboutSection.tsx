"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = ["Python","C++","React","TypeScript","ROS2","OpenCV","PyTorch","FastAPI","Raspberry Pi","Git"];
const certs = [
  { color:"#7C63FF", name:"Google Project Management Professional Certificate", issuer:"Google" },
  { color:"#22C55E", name:"Advanced Data Analytics Certificate", issuer:"Google" },
  { color:"#A855F7", name:"Advanced CNNs, Transfer Learning & Recurrent Networks", issuer:"Deep Learning Specialization" },
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
    <section className="section" id="about" ref={ref} style={{borderTop:"1px solid rgba(255,255,255,0.06)"}}>
      <div className="container">
        <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:80,alignItems:"start"}} className="about-grid">
          <div>
            <motion.h2 {...a(0)} style={{fontSize:"clamp(32px,5vw,64px)",fontWeight:900,letterSpacing:"-0.03em",color:"#7C63FF",marginBottom:8}}>
              About
            </motion.h2>
            <motion.p {...a(0.06)} style={{fontSize:16,color:"#888899",marginBottom:40,lineHeight:1.7}}>
              More than a job title.
            </motion.p>
            <motion.p {...a(0.14)} style={{fontSize:17,color:"#F0EEFF",lineHeight:1.8,marginBottom:16}}>
              Currently building AI-powered software at Agora AI. My work spans robotics, computer vision, deep reinforcement learning, and developer ecosystems.
            </motion.p>
            <motion.p {...a(0.2)} style={{fontSize:17,color:"#888899",lineHeight:1.8,marginBottom:40}}>
              I&apos;ve trained robotic arms to pick objects with deep RL, built tamper-proof AI proxies with Merkle trees, organized India&apos;s largest Ethereum hackathon, and mentored hundreds of developers.
            </motion.p>
            <motion.div {...a(0.26)} style={{display:"flex",flexWrap:"wrap",gap:6}}>
              {skills.map(s => <span key={s} className="chip">{s}</span>)}
            </motion.div>
          </div>

          <div>
            <motion.p {...a(0.1)} style={{fontSize:11,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#444455",marginBottom:20}}>Certifications</motion.p>
            {certs.map((c,i) => (
              <motion.div key={c.name}
                initial={{opacity:0,y:14}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:0.5,delay:0.16+i*0.1,ease:[0.16,1,0.3,1]}}
                style={{borderLeft:`2px solid ${c.color}`,paddingLeft:16,marginBottom:24}}>
                <p style={{fontSize:13,fontWeight:700,color:"#F0EEFF",lineHeight:1.4,marginBottom:4}}>{c.name}</p>
                <p style={{fontSize:11,fontWeight:600,color:c.color}}>{c.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:48px!important;}}`}</style>
    </section>
  );
}
