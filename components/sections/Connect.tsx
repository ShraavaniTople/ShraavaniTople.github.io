"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Instagram, ArrowRight } from "lucide-react";

const socials = [
  { icon:Github, href:"https://github.com/ShraavaniTople", label:"GitHub" },
  { icon:Linkedin, href:"https://www.linkedin.com/in/shraavani-tople/", label:"LinkedIn" },
  { icon:Twitter, href:"https://twitter.com/shraavanitople", label:"Twitter" },
  { icon:Instagram, href:"https://instagram.com/shraavani___", label:"Instagram" },
];

export default function Connect() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.2 });
  return (
    <section id="connect" ref={ref} style={{borderTop:"1px solid rgba(255,255,255,0.06)",padding:"100px 0 72px"}}>
      <div className="container">
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.7,ease:[0.16,1,0.3,1]}}
          style={{fontSize:"clamp(40px,7vw,96px)",fontWeight:900,letterSpacing:"-0.04em",color:"#7C63FF",marginBottom:24,lineHeight:0.95}}>
          Let&apos;s build<br/>
          <em style={{fontStyle:"italic",color:"#F0EEFF"}}>something.</em>
        </motion.h2>

        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.2}}
          style={{fontSize:16,color:"#888899",marginBottom:48,maxWidth:440,lineHeight:1.7}}>
          Open to opportunities, collaborations, and interesting conversations.
        </motion.p>

        <motion.div initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.3}}
          style={{display:"flex",alignItems:"center",gap:16,flexWrap:"wrap",marginBottom:56}}>
          <a href="mailto:shraavanitople@gmail.com"
            style={{display:"inline-flex",alignItems:"center",gap:10,background:"#7C63FF",color:"#fff",borderRadius:8,padding:"14px 28px",fontSize:15,fontWeight:700,textDecoration:"none",transition:"opacity 0.15s"}}
            onMouseEnter={e=>(e.currentTarget.style.opacity="0.85")}
            onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
            shraavanitople@gmail.com <ArrowRight size={15}/>
          </a>
        </motion.div>

        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.4}}
          style={{display:"flex",gap:24,marginBottom:56}}>
          {socials.map(({icon:Icon,href,label}) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{color:"#444455",transition:"color 0.15s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#7C63FF")}
              onMouseLeave={e=>(e.currentTarget.style.color="#444455")}>
              <Icon size={20}/>
            </a>
          ))}
        </motion.div>

        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.5}}
          style={{fontSize:12,color:"#222233"}}>
          Shraavani Tople · 2026
        </motion.p>
      </div>
    </section>
  );
}
