"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    initials:"AG", color:"#7C63FF", colorBg:"rgba(124,99,255,0.12)",
    role:"Software Developer", co:"Agora AI", period:"Jul 2025 – Present", current:true,
    bullets:[
      "Built and optimized React + TypeScript interfaces for AI dashboards, improving performance by 30%",
      "Collaborated with AI researchers to develop real-time inference visualization tools",
      "Applied Agile practices to deliver features on schedule in a cross-functional team",
    ],
    tags:["React","TypeScript","AI","Agile"],
  },
  {
    initials:"CP", color:"#D97706", colorBg:"rgba(217,119,6,0.12)",
    role:"Data & Content Intern", co:"Colgate Palmolive", period:"Apr 2024 – Jun 2024", current:false,
    bullets:[
      "Designed data-driven content strategies, boosting engagement by 25%",
      "Created real-time analytics dashboards to improve developer experience",
      "Coordinated with global teams to scale content operations",
    ],
    tags:["Data Analytics","Content","Dashboards"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.1 });
  return (
    <section className="section" id="experience" ref={ref} style={{borderTop:"1px solid rgba(255,255,255,0.05)"}}>
      <div className="container">
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}} className="label" style={{marginBottom:12}}>Experience</motion.p>
        <motion.h2 initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.08}}
          style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,letterSpacing:"-0.03em",marginBottom:44,color:"#EDE8FF"}}>
          Where I&apos;ve worked.
        </motion.h2>
        <div style={{display:"flex",flexDirection:"column",gap:14}}>
          {jobs.map((job,i) => (
            <motion.div key={job.co}
              initial={{opacity:0,y:18}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:0.55,delay:0.15+i*0.12,ease:[0.16,1,0.3,1]}}
              className="work-card">
              <div style={{display:"flex",gap:18,alignItems:"flex-start"}}>
                <div style={{width:44,height:44,borderRadius:12,flexShrink:0,background:job.colorBg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:800,color:job.color}}>{job.initials}</div>
                <div style={{flex:1}}>
                  <div style={{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",marginBottom:4}}>
                    <span style={{fontSize:16,fontWeight:700,color:"#EDE8FF"}}>{job.role}</span>
                    {job.current && <span style={{fontSize:11,fontWeight:600,background:"rgba(124,99,255,0.12)",color:"#7C63FF",borderRadius:99,padding:"2px 9px",border:"1px solid rgba(124,99,255,0.2)"}}>Current</span>}
                  </div>
                  <p style={{fontSize:13,color:"#56526E",marginBottom:18}}>{job.co} · {job.period}</p>
                  <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:8,marginBottom:18}}>
                    {job.bullets.map((b,j) => (
                      <li key={j} style={{fontSize:14,color:"#8B87A8",paddingLeft:16,position:"relative",lineHeight:1.6}}>
                        <span style={{position:"absolute",left:0,color:"#7C63FF",fontWeight:700}}>–</span>{b}
                      </li>
                    ))}
                  </ul>
                  <div style={{display:"flex",flexWrap:"wrap",gap:6}}>
                    {job.tags.map(t => <span key={t} className="chip">{t}</span>)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
