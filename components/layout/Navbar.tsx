"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Work", href: "#experience" },
  { label: "Community", href: "#community" },
  { label: "Contact", href: "#connect" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(7,7,15,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s",
      }}>
        <div className="container" style={{ display:"flex", alignItems:"center", justifyContent:"space-between", height:60 }}>
          <button onClick={() => window.scrollTo({top:0, behavior:"smooth"})}
            style={{ fontWeight:800, fontSize:16, letterSpacing:"-0.02em", color:"#EDE8FF", background:"none", border:"none", cursor:"pointer" }}>
            Shraavani<span style={{color:"#7C63FF"}}>.</span>
          </button>
          <nav style={{display:"flex", alignItems:"center", gap:28}} className="nav-d">
            {links.map(l => (
              <button key={l.label} onClick={() => go(l.href)}
                style={{fontSize:13, fontWeight:500, color:"#8B87A8", background:"none", border:"none", cursor:"pointer", transition:"color 0.15s"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#EDE8FF")}
                onMouseLeave={e=>(e.currentTarget.style.color="#8B87A8")}>
                {l.label}
              </button>
            ))}
            <span style={{fontSize:12,fontWeight:600,color:"#7C63FF",background:"rgba(124,99,255,0.1)",border:"1px solid rgba(124,99,255,0.22)",borderRadius:99,padding:"4px 12px",display:"flex",alignItems:"center",gap:6}}>
              <span style={{width:6,height:6,borderRadius:"50%",background:"#7C63FF",display:"inline-block",animation:"pulse-dot 2s infinite"}}/>
              Available
            </span>
          </nav>
          <button onClick={() => setOpen(o=>!o)} className="nav-m" style={{background:"none",border:"none",cursor:"pointer",display:"none",color:"#EDE8FF"}}>
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
            style={{position:"fixed",top:60,left:0,right:0,background:"#0F0F1E",borderBottom:"1px solid rgba(255,255,255,0.06)",zIndex:99,padding:"20px 28px 28px"}}>
            {links.map((l,i) => (
              <motion.button key={l.label} onClick={() => go(l.href)}
                initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:i*0.05}}
                style={{display:"block",width:"100%",textAlign:"left",padding:"14px 0",fontSize:22,fontWeight:700,color:"#EDE8FF",background:"none",border:"none",borderBottom:"1px solid rgba(255,255,255,0.06)",cursor:"pointer"}}>
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`@media(max-width:640px){.nav-d{display:none!important;}.nav-m{display:block!important;}}`}</style>
    </>
  );
}
