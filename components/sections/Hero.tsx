"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, Mail, ArrowRight } from "lucide-react";

const f = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/shraavanitople", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/shraavani___", label: "Instagram" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section style={{
      background:"#07070F",
      minHeight:"100vh",
      display:"flex",
      alignItems:"center",
      paddingTop:80,
      paddingBottom:64,
      position:"relative",
      overflow:"hidden",
    }}>
      {/* Background glow */}
      <div style={{position:"absolute",top:"20%",left:"50%",transform:"translateX(-50%)",width:800,height:400,borderRadius:"50%",background:"radial-gradient(ellipse,rgba(124,99,255,0.06) 0%,transparent 65%)",pointerEvents:"none"}}/>

      <div className="container" style={{width:"100%",position:"relative",zIndex:1}}>
        <div style={{maxWidth:680}}>

          {/* Small photo + name row */}
          <motion.div {...f(0.1)} style={{display:"flex",alignItems:"center",gap:20,marginBottom:32}}>
            {/* Small circular photo */}
            <div style={{position:"relative",flexShrink:0}}>
              <div style={{position:"absolute",inset:-2,borderRadius:"50%",background:"linear-gradient(135deg,#7C63FF,rgba(124,99,255,0.2))",zIndex:0}}/>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/shraavani.png"
                alt="Shraavani Tople"
                style={{
                  width:72,
                  height:72,
                  objectFit:"cover",
                  objectPosition:"top center",
                  borderRadius:"50%",
                  display:"block",
                  position:"relative",
                  zIndex:1,
                  border:"2px solid #07070F",
                }}
              />
            </div>
            <div>
              <p style={{fontSize:14,fontWeight:600,color:"#EDE8FF"}}>Shraavani Tople</p>
              <p style={{fontSize:13,color:"#56526E"}}>Software Developer</p>
            </div>
          </motion.div>

          {/* Big name heading */}
          <div style={{overflow:"hidden",marginBottom:20}}>
            <motion.h1
              initial={{opacity:0,y:50}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.75,delay:0.2,ease:[0.16,1,0.3,1]}}
              style={{
                fontSize:"clamp(56px,9vw,120px)",
                fontWeight:900,
                lineHeight:0.88,
                letterSpacing:"-0.05em",
                color:"#EDE8FF",
              }}>
              Builder.<br/>
              <em style={{fontStyle:"italic",color:"#7C63FF"}}>Researcher.</em><br/>
              <span style={{color:"rgba(237,232,255,0.25)"}}>Community.</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{scaleX:0}} animate={{scaleX:1}}
            transition={{duration:0.5,delay:0.5,ease:[0.16,1,0.3,1]}}
            style={{height:2,width:40,background:"linear-gradient(90deg,#7C63FF,transparent)",borderRadius:99,marginBottom:28,transformOrigin:"left"}}
          />

          <motion.p {...f(0.6)} style={{fontSize:17,color:"#8B87A8",marginBottom:36,lineHeight:1.7,maxWidth:500}}>
            I build AI interfaces, train robots, and organize developer communities. Currently at Agora AI.
          </motion.p>

          {/* Socials */}
          <motion.div {...f(0.7)} style={{display:"flex",gap:20,marginBottom:40,flexWrap:"wrap"}}>
            {socials.map(({icon:Icon,href,label}) => (
              <a key={label} href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                style={{display:"flex",alignItems:"center",gap:5,fontSize:13,fontWeight:500,color:"#56526E",textDecoration:"none",transition:"color 0.15s"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#7C63FF")}
                onMouseLeave={e=>(e.currentTarget.style.color="#56526E")}>
                <Icon size={14}/>{label}
              </a>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div {...f(0.8)} style={{display:"flex",gap:12,flexWrap:"wrap"}}>
            <button
              onClick={() => document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})}
              style={{display:"flex",alignItems:"center",gap:8,background:"#7C63FF",color:"#fff",border:"none",borderRadius:12,padding:"13px 26px",fontSize:14,fontWeight:700,cursor:"pointer",transition:"opacity 0.15s,box-shadow 0.15s",boxShadow:"0 4px 20px rgba(124,99,255,0.3)"}}
              onMouseEnter={e=>{e.currentTarget.style.opacity="0.88";e.currentTarget.style.boxShadow="0 8px 32px rgba(124,99,255,0.45)";}}
              onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.boxShadow="0 4px 20px rgba(124,99,255,0.3)";}}>
              See my work <ArrowRight size={15}/>
            </button>
            <a href="mailto:shraavanitople@gmail.com"
              style={{display:"flex",alignItems:"center",gap:8,background:"transparent",color:"#EDE8FF",border:"1px solid rgba(255,255,255,0.1)",borderRadius:12,padding:"13px 26px",fontSize:14,fontWeight:600,textDecoration:"none",transition:"border-color 0.15s,background 0.15s"}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(124,99,255,0.4)";e.currentTarget.style.background="rgba(124,99,255,0.06)";}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";e.currentTarget.style.background="transparent";}}>
              Say hello
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
