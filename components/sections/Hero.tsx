"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/shraavanitople", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/shraavani___", label: "Instagram" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section style={{background:"#080808",minHeight:"100vh",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"0 0 64px",position:"relative",overflow:"hidden"}}>

      {/* Photo — right side, fills upper area */}
      <motion.div
        initial={{opacity:0}} animate={{opacity:1}}
        transition={{duration:1.2,ease:"easeOut"}}
        style={{position:"absolute",top:0,right:0,width:"42%",height:"85%",zIndex:0}}
        className="hero-photo-col">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/shraavani.png"
          alt="Shraavani Tople"
          style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"top center",display:"block"}}
        />
        {/* fade photo into bg at bottom */}
        <div style={{position:"absolute",bottom:0,left:0,right:0,height:"50%",background:"linear-gradient(to top,#080808,transparent)"}}/>
        {/* fade left edge */}
        <div style={{position:"absolute",top:0,left:0,bottom:0,width:"40%",background:"linear-gradient(to right,#080808,transparent)"}}/>
      </motion.div>

      {/* Content — left aligned, bottom */}
      <div className="container" style={{position:"relative",zIndex:1,width:"100%"}}>
        <div style={{maxWidth:640}}>

          <motion.p
            initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.1,ease:[0.16,1,0.3,1]}}
            style={{fontSize:12,fontWeight:600,letterSpacing:"0.14em",textTransform:"uppercase",color:"#7C63FF",marginBottom:24}}>
            Software Developer
          </motion.p>

          <motion.h1
            initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}
            transition={{duration:0.8,delay:0.2,ease:[0.16,1,0.3,1]}}
            style={{fontSize:"clamp(52px,7vw,100px)",fontWeight:900,lineHeight:0.9,letterSpacing:"-0.04em",color:"#F0EEFF",marginBottom:32}}>
            Shraavani<br/>
            <em style={{fontStyle:"italic",color:"#7C63FF"}}>Tople.</em>
          </motion.h1>

          <motion.p
            initial={{opacity:0,y:16}} animate={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.45,ease:[0.16,1,0.3,1]}}
            style={{fontSize:17,color:"#888899",lineHeight:1.75,marginBottom:40,maxWidth:460}}>
            I build AI interfaces, train robots, and organize developer communities.
          </motion.p>

          <motion.div
            initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.6,ease:[0.16,1,0.3,1]}}
            style={{display:"flex",gap:16,marginBottom:44,flexWrap:"wrap"}}>
            {socials.map(({icon:Icon,href,label}) => (
              <a key={label} href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{display:"flex",alignItems:"center",gap:6,fontSize:13,fontWeight:500,color:"#444455",textDecoration:"none",transition:"color 0.15s"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#7C63FF")}
                onMouseLeave={e=>(e.currentTarget.style.color="#444455")}>
                <Icon size={14}/>{label}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{opacity:0,y:12}} animate={{opacity:1,y:0}}
            transition={{duration:0.6,delay:0.72,ease:[0.16,1,0.3,1]}}
            style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})}
              style={{display:"flex",alignItems:"center",gap:8,background:"#7C63FF",color:"#fff",border:"none",borderRadius:8,padding:"13px 26px",fontSize:14,fontWeight:700,cursor:"pointer",transition:"opacity 0.15s"}}
              onMouseEnter={e=>(e.currentTarget.style.opacity="0.85")}
              onMouseLeave={e=>(e.currentTarget.style.opacity="1")}>
              See my work <ArrowRight size={14}/>
            </button>
            <a href="mailto:shraavanitople@gmail.com"
              style={{display:"flex",alignItems:"center",gap:8,background:"transparent",color:"#F0EEFF",border:"1px solid rgba(255,255,255,0.12)",borderRadius:8,padding:"13px 26px",fontSize:14,fontWeight:600,textDecoration:"none",transition:"border-color 0.15s"}}
              onMouseEnter={e=>(e.currentTarget.style.borderColor="rgba(124,99,255,0.5)")}
              onMouseLeave={e=>(e.currentTarget.style.borderColor="rgba(255,255,255,0.12)")}>
              Say hello
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .hero-photo-col{width:100%!important;height:50%!important;top:0!important;opacity:0.4!important;}
        }
      `}</style>
    </section>
  );
}
