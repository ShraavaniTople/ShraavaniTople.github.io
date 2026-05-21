"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    role:"Software Developer", co:"Agora AI", period:"Jul 2025 – Present",
    bullets:[
      "Built and optimized React + TypeScript interfaces for AI dashboards, improving performance by 30%",
      "Collaborated with AI researchers to develop real-time inference visualization tools",
      "Applied Agile practices to deliver features on schedule in a cross-functional team",
    ],
    tags:["React","TypeScript","AI","Agile"],
  },
  {
    role:"Data & Content Intern", co:"Colgate Palmolive", period:"Apr 2024 – Jun 2024",
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
    <section className="section" id="experience" ref={ref} style={{borderTop:"1px solid rgba(255,255,255,0.06)"}}>
      <div className="container">
        <motion.h2 initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}
          style={{fontSize:"clamp(32px,5vw,64px)",fontWeight:900,letterSpacing:"-0.03em",color:"#7C63FF",marginBottom:8}}>
          Work
        </motion.h2>
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1}}
          style={{fontSize:16,color:"#888899",marginBottom:56,maxWidth:500,lineHeight:1.7}}>
          Where I&apos;ve worked and what I&apos;ve shipped.
        </motion.p>

        {jobs.map((job,i) => (
          <motion.div key={job.co}
            initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
            transition={{duration:0.65,delay:0.1+i*0.12,ease:[0.16,1,0.3,1]}}
            style={{borderTop:"1px solid rgba(255,255,255,0.07)",paddingTop:40,paddingBottom:40}}>
            <div style={{display:"grid",gridTemplateColumns:"1fr 2fr",gap:40,alignItems:"start"}} className="work-inner">
              <div>
                <p style={{fontSize:18,fontWeight:800,color:"#F0EEFF",marginBottom:6,letterSpacing:"-0.01em"}}>{job.co}</p>
                <p style={{fontSize:13,color:"#7C63FF",fontWeight:600,marginBottom:4}}>{job.role}</p>
                <p style={{fontSize:12,color:"#444455"}}>{job.period}</p>
              </div>
              <div>
                <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10,marginBottom:20}}>
                  {job.bullets.map((b,j) => (
                    <li key={j} style={{fontSize:14,color:"#888899",paddingLeft:16,position:"relative",lineHeight:1.65}}>
                      <span style={{position:"absolute",left:0,color:"#7C63FF"}}>–</span>{b}
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
      <style>{`@media(max-width:768px){.work-inner{grid-template-columns:1fr!important;gap:20px!important;}}`}</style>
    </section>
  );
}
