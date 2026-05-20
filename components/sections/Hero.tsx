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
      paddingTop:72,
      paddingBottom:48,
      position:"relative",
      overflow:"hidden",
    }}>
      {/* Background glow blobs */}
      <div style={{position:"absolute",top:"10%",right:"8%",width:600,height:600,borderRadius:"50%",background:"radial-gradient(circle,rgba(124,99,255,0.07) 0%,transparent 70%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:"5%",left:"0%",width:400,height:400,borderRadius:"50%",background:"radial-gradient(circle,rgba(99,124,255,0.05) 0%,transparent 70%)",pointerEvents:"none"}}/>

      <div className="container" style={{width:"100%",position:"relative",zIndex:1}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center"}} className="hero-grid">

          {/* LEFT */}
          <div>
            <motion.div {...f(0.1)} style={{display:"inline-flex",alignItems:"center",gap:8,marginBottom:32,
              background:"rgba(124,99,255,0.08)",border:"1px solid rgba(124,99,255,0.2)",
              borderRadius:99,padding:"6px 14px"}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:"#7C63FF",display:"inline-block",animation:"pulse-dot 2s infinite"}}/>
              <span style={{fontSize:12,fontWeight:600,color:"#7C63FF",letterSpacing:"0.02em"}}>Open to opportunities</span>
            </motion.div>

            <div style={{overflow:"hidden", marginBottom:16}}>
              <motion.h1
                initial={{opacity:0, y:40}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.7, delay:0.2, ease:[0.16,1,0.3,1]}}
                style={{
                  fontSize:"clamp(52px,7.5vw,104px)",
                  fontWeight:900,
                  lineHeight:0.92,
                  letterSpacing:"-0.04em",
                  color:"#EDE8FF",
                }}>
                SHRAAVANI<br/>
                <em style={{fontStyle:"italic", color:"#7C63FF"}}>TOPLE.</em>
              </motion.h1>
            </div>

            {/* Accent rule */}
            <motion.div
              initial={{scaleX:0}} animate={{scaleX:1}}
              transition={{duration:0.5, delay:0.45, ease:[0.16,1,0.3,1]}}
              style={{height:2, width:44, background:"linear-gradient(90deg,#7C63FF,rgba(124,99,255,0))", borderRadius:99, marginBottom:24, transformOrigin:"left"}}
            />

            <motion.p {...f(0.55)} style={{fontSize:18,fontWeight:500,color:"#8B87A8",marginBottom:32,lineHeight:1.6}}>
              Builder. Researcher. Community person.
            </motion.p>

            {/* Socials */}
            <motion.div {...f(0.65)} style={{display:"flex", gap:20, marginBottom:36, flexWrap:"wrap"}}>
              {socials.map(({icon:Icon, href, label}) => (
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
            <motion.div {...f(0.75)} style={{display:"flex", gap:12, flexWrap:"wrap"}}>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})}
                style={{display:"flex",alignItems:"center",gap:8,background:"#7C63FF",color:"#fff",border:"none",borderRadius:12,padding:"13px 26px",fontSize:14,fontWeight:700,cursor:"pointer",transition:"opacity 0.15s,box-shadow 0.15s",boxShadow:"0 4px 20px rgba(124,99,255,0.3)"}}
                onMouseEnter={e=>{e.currentTarget.style.opacity="0.88";e.currentTarget.style.boxShadow="0 8px 32px rgba(124,99,255,0.4)";}}
                onMouseLeave={e=>{e.currentTarget.style.opacity="1";e.currentTarget.style.boxShadow="0 4px 20px rgba(124,99,255,0.3)";}}>
                See my work <ArrowRight size={15}/>
              </button>
              <a href="mailto:shraavanitople@gmail.com"
                style={{display:"flex",alignItems:"center",gap:8,background:"transparent",color:"#EDE8FF",border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,padding:"13px 26px",fontSize:14,fontWeight:600,textDecoration:"none",transition:"border-color 0.15s,background 0.15s"}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor="rgba(124,99,255,0.5)";e.currentTarget.style.background="rgba(124,99,255,0.07)";}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor="rgba(255,255,255,0.12)";e.currentTarget.style.background="transparent";}}>
                Say hello
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{opacity:0, x:32}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.8, delay:0.1, ease:[0.16,1,0.3,1]}}
            style={{position:"relative"}}>
            {/* Glow ring behind photo */}
            <div style={{position:"absolute",inset:-2,borderRadius:28,background:"linear-gradient(135deg,rgba(124,99,255,0.4),rgba(99,124,255,0.1))",zIndex:0,filter:"blur(1px)"}}/>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/shraavani.png"
              alt="Shraavani Tople"
              style={{
                width:"100%",
                height:540,
                objectFit:"cover",
                objectPosition:"top center",
                borderRadius:24,
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
          .hero-grid{grid-template-columns:1fr!important;gap:32px!important;}
          .hero-grid>div:last-child img{height:300px!important;}
          .hero-grid>div:last-child{order:-1;}
        }
      `}</style>
    </section>
  );
}
