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
      <div style={{position:"absolute",top:"-10%",right:"5%",width:500,height:500,borderRadius:"50%",background:"radial-gradient(circle,rgba(124,99,255,0.08) 0%,transparent 70%)",pointerEvents:"none"}}/>

      <div className="container" style={{width:"100%",position:"relative",zIndex:1}}>
        <div style={{display:"grid",gridTemplateColumns:"1fr auto",gap:80,alignItems:"center"}} className="hero-grid">

          {/* LEFT */}
          <div>
            <motion.p {...f(0.05)} style={{fontSize:12,fontWeight:600,letterSpacing:"0.12em",textTransform:"uppercase",color:"#7C63FF",marginBottom:20}}>
              Software Developer
            </motion.p>

            <motion.h1
              initial={{opacity:0,y:30}}
              animate={{opacity:1,y:0}}
              transition={{duration:0.7,delay:0.15,ease:[0.16,1,0.3,1]}}
              style={{fontSize:"clamp(40px,5.5vw,76px)",fontWeight:900,lineHeight:1.0,letterSpacing:"-0.03em",color:"#EDE8FF",marginBottom:24}}>
              Shraavani<br/>
              <em style={{fontStyle:"italic",color:"#7C63FF"}}>Tople.</em>
            </motion.h1>

            <motion.div
              initial={{scaleX:0}} animate={{scaleX:1}}
              transition={{duration:0.45,delay:0.4,ease:[0.16,1,0.3,1]}}
              style={{height:2,width:36,background:"#7C63FF",borderRadius:99,marginBottom:20,transformOrigin:"left"}}
            />

            <motion.p {...f(0.5)} style={{fontSize:16,color:"#8B87A8",marginBottom:12,lineHeight:1.75,maxWidth:460}}>
              I build AI interfaces, train robots, and organize developer communities.
            </motion.p>
            <motion.p {...f(0.56)} style={{fontSize:16,color:"#56526E",marginBottom:36,lineHeight:1.75,maxWidth:460}}>
              Currently at <span style={{color:"#8B87A8",fontWeight:500}}>Agora AI</span>. WTM Ambassador, ETHMumbai organizer, Google certifications in data and PM.
            </motion.p>

            <motion.div {...f(0.64)} style={{display:"flex",gap:18,marginBottom:40,flexWrap:"wrap"}}>
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

            <motion.div {...f(0.72)} style={{display:"flex",gap:12,flexWrap:"wrap"}}>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})}
                style={{display:"flex",alignItems:"center",gap:8,background:"#7C63FF",color:"#fff",border:"none",borderRadius:10,padding:"12px 24px",fontSize:14,fontWeight:700,cursor:"pointer",transition:"opacity 0.15s,box-shadow 0.15s",boxShadow:"0 4px 20px rgba(124,99,255,0.3)"}}
                onMouseEnter={e=>{e.currentTarget.style.opacity="0.88";e.currentTarget.style.boxShadow="0 8px 32px rgba(124,99,255,0.45)";}}
                onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.boxShadow="0 4px 20px rgba(124,99,255,0.3)";}}>
                See my work <ArrowRight size={14}/>
              </button>
              <a href="mailto:shraavanitople@gmail.com"
                style={{display:"flex",alignItems:"center",gap:8,background:"transparent",color:"#EDE8FF",border:"1px solid rgba(255,255,255,0.1)",borderRadius:10,padding:"12px 24px",fontSize:14,fontWeight:600,textDecoration:"none",transition:"border-color 0.15s,background 0.15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(124,99,255,0.4)";e.currentTarget.style.background="rgba(124,99,255,0.06)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.1)";e.currentTarget.style.background="transparent";}}>
                Say hello
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{opacity:0,x:24}}
            animate={{opacity:1,x:0}}
            transition={{duration:0.8,delay:0.1,ease:[0.16,1,0.3,1]}}
            className="hero-photo-wrap"
            style={{position:"relative",flexShrink:0}}>
            {/* Subtle border glow */}
            <div style={{position:"absolute",inset:-1,borderRadius:20,background:"linear-gradient(160deg,rgba(124,99,255,0.35),rgba(124,99,255,0.05))",zIndex:0}}/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/shraavani.png"
              alt="Shraavani Tople"
              style={{
                width:280,
                height:340,
                objectFit:"cover",
                objectPosition:"top center",
                borderRadius:18,
                display:"block",
                position:"relative",
                zIndex:1,
              }}
            />
          </motion.div>

        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .hero-grid{grid-template-columns:1fr!important;gap:36px!important;}
          .hero-photo-wrap{order:-1;}
          .hero-photo-wrap img{width:100%!important;height:260px!important;}
        }
      `}</style>
    </section>
  );
}
