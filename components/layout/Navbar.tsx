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
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header style={{
        position:"fixed", top:0, left:0, right:0, zIndex:100,
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        transition: "all 0.3s",
      }}>
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
          <button onClick={() => window.scrollTo({top:0,behavior:"smooth"})}
            style={{fontWeight:800,fontSize:17,letterSpacing:"-0.03em",color:"#F0EEFF",background:"none",border:"none",cursor:"pointer"}}>
            Shraavani<span style={{color:"#7C63FF"}}>.</span>
          </button>
          <nav style={{display:"flex",alignItems:"center",gap:36}} className="nav-d">
            {links.map(l => (
              <button key={l.label} onClick={() => go(l.href)}
                style={{fontSize:13,fontWeight:500,color:"#666677",background:"none",border:"none",cursor:"pointer",transition:"color 0.15s",letterSpacing:"0.01em"}}
                onMouseEnter={e=>(e.currentTarget.style.color="#F0EEFF")}
                onMouseLeave={e=>(e.currentTarget.style.color="#666677")}>
                {l.label}
              </button>
            ))}
          </nav>
          <button onClick={() => setOpen(o=>!o)} className="nav-m" style={{background:"none",border:"none",cursor:"pointer",display:"none",color:"#F0EEFF"}}>
            {open ? <X size={20}/> : <Menu size={20}/>}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}}
            style={{position:"fixed",top:64,left:0,right:0,background:"#0E0E0E",borderBottom:"1px solid rgba(255,255,255,0.06)",zIndex:99,padding:"24px 40px 32px"}}>
            {links.map((l,i) => (
              <motion.button key={l.label} onClick={() => go(l.href)}
                initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:i*0.06}}
                style={{display:"block",width:"100%",textAlign:"left",padding:"16px 0",fontSize:24,fontWeight:700,color:"#F0EEFF",background:"none",border:"none",borderBottom:"1px solid rgba(255,255,255,0.05)",cursor:"pointer"}}>
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
