"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const skills = ["Python","C++","React","TypeScript","ROS2","OpenCV","PyTorch","FastAPI","Raspberry Pi","Git"];
const certs = [
  { badge:"G", bg:"#EEF2FF", color:"#4F46E5", name:"Google Project Management Professional Certificate", issuer:"Google" },
  { badge:"G", bg:"#F0FDF4", color:"#16A34A", name:"Advanced Data Analytics Certificate", issuer:"Google" },
  { badge:"DL", bg:"#FDF4FF", color:"#9333EA", name:"Advanced CNNs, Transfer Learning & Recurrent Networks", issuer:"Deep Learning Specialization" },
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
    <section className="section" id="about" ref={ref} style={{borderTop:"1px solid rgba(0,0,0,0.06)"}}>
      <div className="container">
        <div style={{display:"grid",gridTemplateColumns:"3fr 2fr",gap:64,alignItems:"start"}} className="about-grid">
          {/* Left */}
          <div>
            <motion.p {...a(0)} className="label" style={{marginBottom:12}}>About</motion.p>
            <motion.h2 {...a(0.08)} style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,letterSpacing:"-0.03em",marginBottom:28,color:"#18181B"}}>
              More than a job title.
            </motion.h2>
            <motion.p {...a(0.16)} style={{fontSize:17,color:"#18181B",lineHeight:1.8,marginBottom:16}}>
              Currently building AI-powered software at Agora AI. My work spans robotics, computer vision, deep reinforcement learning, and developer ecosystems.
            </motion.p>
            <motion.p {...a(0.22)} style={{fontSize:17,color:"#78716C",lineHeight:1.8,marginBottom:32}}>
              I&apos;ve trained robotic arms to pick objects with deep RL, built tamper-proof AI proxies with Merkle trees, organized India&apos;s largest Ethereum hackathon, and mentored hundreds of developers.
            </motion.p>
            <motion.div {...a(0.28)} style={{display:"flex",flexWrap:"wrap",gap:7}}>
              {skills.map(s => <span key={s} className="chip">{s}</span>)}
            </motion.div>
          </div>

          {/* Right — certs */}
          <div style={{display:"flex",flexDirection:"column",gap:12}}>
            <motion.p {...a(0.1)} className="label" style={{marginBottom:8}}>Certifications</motion.p>
            {certs.map((c,i) => (
              <motion.div key={c.name}
                initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:0.5,delay:0.18+i*0.1,ease:[0.16,1,0.3,1]}}
                style={{background:"#fff",border:"1px solid rgba(0,0,0,0.07)",borderRadius:16,padding:"18px 20px"}}>
                <div style={{display:"flex",alignItems:"flex-start",gap:14}}>
                  <div style={{width:36,height:36,borderRadius:10,background:c.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,color:c.color,flexShrink:0}}>{c.badge}</div>
                  <div>
                    <p style={{fontSize:13,fontWeight:700,color:"#18181B",lineHeight:1.35,marginBottom:3}}>{c.name}</p>
                    <p style={{fontSize:12,color:"#A8A29E",marginBottom:8}}>{c.issuer}</p>
                    <div style={{display:"flex",alignItems:"center",gap:4,fontSize:11,color:"#16A34A",fontWeight:600}}>
                      <CheckCircle size={12}/> Verified
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.about-grid{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
    </section>
  );
}
