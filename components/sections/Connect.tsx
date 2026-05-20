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
    <section id="connect" ref={ref} style={{background:"#04040A",padding:"96px 0 64px",position:"relative",overflow:"hidden"}}>
      {/* Glow */}
      <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:600,height:300,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(124,99,255,0.06) 0%,transparent 70%)",pointerEvents:"none"}}/>
      <div className="container" style={{textAlign:"center",position:"relative",zIndex:1}}>
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}}
          style={{fontSize:11,fontWeight:600,letterSpacing:"0.1em",textTransform:"uppercase",color:"#56526E",marginBottom:24}}>
          Get in touch
        </motion.p>
        <motion.h2 initial={{opacity:0,y:20}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.65,delay:0.1,ease:[0.16,1,0.3,1]}}
          style={{fontSize:"clamp(36px,6vw,72px)",fontWeight:900,letterSpacing:"-0.04em",color:"#EDE8FF",marginBottom:16,lineHeight:1.0}}>
          Let&apos;s build<br/><em style={{fontStyle:"italic",color:"#7C63FF"}}>something.</em>
        </motion.h2>
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.2}}
          style={{fontSize:16,color:"#56526E",marginBottom:40,maxWidth:400,margin:"0 auto 40px"}}>
          Open to opportunities, collaborations, and interesting conversations.
        </motion.p>
        <motion.div initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.3}}
          style={{marginBottom:48}}>
          <a href="mailto:shraavanitople@gmail.com"
            style={{display:"inline-flex",alignItems:"center",gap:10,background:"#7C63FF",color:"#fff",borderRadius:14,padding:"16px 32px",fontSize:16,fontWeight:700,textDecoration:"none",transition:"opacity 0.15s,box-shadow 0.15s",boxShadow:"0 4px 24px rgba(124,99,255,0.35)"}}
            onMouseEnter={e=>{e.currentTarget.style.opacity="0.88";e.currentTarget.style.boxShadow="0 8px 40px rgba(124,99,255,0.5)";}}
            onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.boxShadow="0 4px 24px rgba(124,99,255,0.35)";}}>
            shraavanitople@gmail.com
          </a>
        </motion.div>
        <motion.div initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.4}}
          style={{display:"flex",justifyContent:"center",gap:24,marginBottom:48}}>
          {socials.map(({icon:Icon,href,label}) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              style={{color:"#56526E",transition:"color 0.15s"}}
              onMouseEnter={e=>(e.currentTarget.style.color="#7C63FF")}
              onMouseLeave={e=>(e.currentTarget.style.color="#56526E")}>
              <Icon size={20}/>
            </a>
          ))}
        </motion.div>
        <motion.p initial={{opacity:0}} animate={inView?{opacity:1}:{}} transition={{duration:0.5,delay:0.5}}
          style={{fontSize:12,color:"rgba(255,255,255,0.1)"}}>
          Shraavani Tople · 2026
        </motion.p>
      </div>
    </section>
  );
}
