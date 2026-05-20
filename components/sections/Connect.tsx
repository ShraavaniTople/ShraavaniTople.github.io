"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

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
    <section id="connect" ref={ref} style={{background:"#18181B",padding:"96px 0 64px"}}>
      <div className="container" style={{textAlign:"center"}}>
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}}
          style={{fontSize:11,fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:24}}>
          Get in touch
        </motion.p>
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.65,delay:0.1,ease:[0.16,1,0.3,1]}}
          style={{fontSize:"clamp(36px,6vw,72px)",fontWeight:900,letterSpacing:"-0.04em",color:"#F7F4EE",marginBottom:16,lineHeight:1.0}}>
          Let&apos;s build<br/><em style={{fontStyle:"italic",color:"#FF5C28"}}>something.</em>
        </motion.h2>
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.2}}
          style={{fontSize:16,color:"rgba(255,255,255,0.4)",marginBottom:40,maxWidth:400,margin:"0 auto 40px"}}>
          Open to opportunities, collaborations, and interesting conversations.
        </motion.p>
        <motion.div initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.3}}
          style={{marginBottom:48}}>
          <a href="mailto:shraavanitople@gmail.com"
            style={{display:"inline-flex",alignItems:"center",gap:10,background:"#FF5C28",color:"#fff",borderRadius:14,padding:"16px 32px",fontSize:16,fontWeight:700,textDecoration:"none",transition:"opacity 0.15s"}}
            onMouseEnter={e=>(e.currentTarget.style.opacity="0.85")}
            onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
            shraavanitople@gmail.com
          </a>
        </motion.div>
        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.4}}
          style={{display:"flex",justifyContent:"center",gap:24,marginBottom:48}}>
          {socials.map(({icon:Icon,href,label}) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{color:"rgba(255,255,255,0.25)",transition:"color 0.15s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#FF5C28")}
              onMouseLeave={e=>(e.currentTarget.style.color="rgba(255,255,255,0.25)")}>
              <Icon size={20}/>
            </a>
          ))}
        </motion.div>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.5}}
          style={{fontSize:12,color:"rgba(255,255,255,0.15)"}}>
          Shraavani Tople · 2026
        </motion.p>
      </div>
    </section>
  );
}
