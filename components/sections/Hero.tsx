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
    <section style={{background:"#F7F4EE", minHeight:"100vh", display:"flex", alignItems:"center", paddingTop:72, paddingBottom:48}}>
      <div className="container" style={{width:"100%"}}>
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:72, alignItems:"center"}} className="hero-grid">

          {/* LEFT */}
          <div>
            <motion.p {...f(0.1)} style={{fontSize:13,fontWeight:600,color:"#FF5C28",letterSpacing:"0.02em",marginBottom:28}}>
              Mumbai · Available
            </motion.p>

            <div style={{overflow:"hidden", marginBottom:16}}>
              <motion.h1
                initial={{opacity:0, y:40}}
                animate={{opacity:1, y:0}}
                transition={{duration:0.7, delay:0.2, ease:[0.16,1,0.3,1]}}
                style={{
                  fontSize:"clamp(56px,8vw,108px)",
                  fontWeight:900,
                  lineHeight:0.9,
                  letterSpacing:"-0.04em",
                  color:"#18181B",
                }}>
                SHRAAVANI<br/>
                <em style={{fontStyle:"italic", color:"#FF5C28"}}>TOPLE.</em>
              </motion.h1>
            </div>

            {/* Orange rule */}
            <motion.div
              initial={{scaleX:0}} animate={{scaleX:1}}
              transition={{duration:0.5, delay:0.45, ease:[0.16,1,0.3,1]}}
              style={{height:3, width:48, background:"#FF5C28", borderRadius:99, marginBottom:24, transformOrigin:"left"}}
            />

            <motion.p {...f(0.55)} style={{fontSize:18,fontWeight:500,color:"#78716C",marginBottom:32,lineHeight:1.6}}>
              Builder. Researcher. Community person.
            </motion.p>

            {/* Socials */}
            <motion.div {...f(0.65)} style={{display:"flex", gap:20, marginBottom:36, flexWrap:"wrap"}}>
              {socials.map(({icon:Icon, href, label}) => (
                <a key={label} href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  style={{display:"flex",alignItems:"center",gap:5,fontSize:13,fontWeight:500,color:"#A8A29E",textDecoration:"none",transition:"color 0.15s"}}
                  onMouseEnter={e=>(e.currentTarget.style.color="#FF5C28")}
                  onMouseLeave={e=>(e.currentTarget.style.color="#A8A29E")}>
                  <Icon size={14}/>{label}
                </a>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...f(0.75)} style={{display:"flex", gap:12, flexWrap:"wrap"}}>
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({behavior:"smooth"})}
                style={{display:"flex",alignItems:"center",gap:8,background:"#18181B",color:"#F7F4EE",border:"none",borderRadius:12,padding:"13px 26px",fontSize:14,fontWeight:700,cursor:"pointer",transition:"background 0.15s"}}
                onMouseEnter={e=>(e.currentTarget.style.background="#FF5C28")}
                onMouseLeave={e=>(e.currentTarget.style.background="#18181B")}>
                See my work <ArrowRight size={15}/>
              </button>
              <a href="mailto:shraavanitople@gmail.com"
                style={{display:"flex",alignItems:"center",gap:8,background:"transparent",color:"#18181B",border:"1px solid rgba(0,0,0,0.15)",borderRadius:12,padding:"13px 26px",fontSize:14,fontWeight:600,textDecoration:"none",transition:"border-color 0.15s"}}
                onMouseEnter={e=>(e.currentTarget.style.borderColor="#FF5C28")}
                onMouseLeave={e=>(e.currentTarget.style.borderColor="rgba(0,0,0,0.15)")}>
                Say hello
              </a>
            </motion.div>
          </div>

          {/* RIGHT — Photo */}
          <motion.div
            initial={{opacity:0, x:32}}
            animate={{opacity:1, x:0}}
            transition={{duration:0.8, delay:0.1, ease:[0.16,1,0.3,1]}}>
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
                border:"1px solid rgba(0,0,0,0.08)",
                display:"block",
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
