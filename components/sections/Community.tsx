"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const photoRoles = [
  { photo:"/photos/shraavani-speaking.jpg", role:"Speaker", event:"Women in Tech Mumbai", desc:"Spoke on stage on AI and community building." },
  { photo:"/photos/shraavani-workshop.jpg", role:"Workshop Lead", event:"Tech Community Session", desc:"Led a hands-on technical workshop for developers." },
];

const roles = [
  { role:"Women Techmakers Ambassador", org:"Google", desc:"Led campus outreach and technical workshops across India" },
  { role:"Hackathon Organizer", org:"ETHMumbai", desc:"Organized India's large-scale Ethereum developer conference" },
  { role:"Hackathon Organizer", org:"Hack The League", desc:"Built and ran a developer hackathon end-to-end" },
  { role:"Mentor", org:"Salesforce Trailblazer", desc:"Guided developers through the Trailblazer ecosystem" },
  { role:"Python Trainer", org:"Symbiosis", desc:"Led Python bootcamps for early-stage developers" },
  { role:"Hackathon Judge", org:"ThinkAI", desc:"Assessed student AI projects and provided structured feedback" },
  { role:"GDG Volunteer", org:"Google Developer Groups", desc:"Community volunteer and event support" },
  { role:"Speaker", org:"Snapchat", desc:"Speaker at Snapchat's creator-focused tech event" },
];

export default function Community() {
  const ref = useRef(null);
  const inView = useInView(ref, { once:true, amount:0.05 });
  return (
    <section className="section" id="community" ref={ref} style={{borderTop:"1px solid rgba(255,255,255,0.05)"}}>
      <div className="container">
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5}} className="label" style={{marginBottom:12}}>Community</motion.p>
        <motion.h2 initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.08}}
          style={{fontSize:"clamp(28px,4vw,48px)",fontWeight:900,letterSpacing:"-0.03em",marginBottom:12,color:"#EDE8FF"}}>
          Beyond the work.
        </motion.h2>
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.5,delay:0.14}}
          style={{fontSize:16,color:"#8B87A8",marginBottom:52,maxWidth:500,lineHeight:1.75}}>
          Hackathons organized, communities built, developers mentored — this is the other half of what I do.
        </motion.p>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"start"}} className="comm-grid">
          {/* LEFT: real photos */}
          <div style={{display:"flex",flexDirection:"column",gap:16}}>
            {photoRoles.map((item,i) => (
              <motion.div key={item.event}
                initial={{opacity:0,x:-20}} animate={inView?{opacity:1,x:0}:{}}
                transition={{duration:0.6,delay:0.2+i*0.12,ease:[0.16,1,0.3,1]}}
                style={{borderRadius:20,overflow:"hidden",border:"1px solid rgba(255,255,255,0.06)"}}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={item.photo} alt={item.event}
                  style={{width:"100%",height:240,objectFit:"cover",objectPosition:"top",display:"block",transition:"transform 0.4s ease"}}
                  className="comm-img"/>
                <div style={{padding:"16px 20px",background:"#0F0F1E"}}>
                  <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.09em",textTransform:"uppercase",color:"#7C63FF",marginBottom:4}}>{item.role}</p>
                  <p style={{fontSize:15,fontWeight:700,color:"#EDE8FF",marginBottom:4}}>{item.event}</p>
                  <p style={{fontSize:12,color:"#56526E"}}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: role cards grid */}
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
            {roles.map((r,i) => (
              <motion.div key={r.role+r.org}
                initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}}
                transition={{duration:0.5,delay:0.25+i*0.07,ease:[0.16,1,0.3,1]}}
                style={{background:"#0F0F1E",border:"1px solid rgba(255,255,255,0.06)",borderRadius:16,padding:"16px 18px",transition:"box-shadow 0.2s,border-color 0.2s"}}
                className="role-card">
                <p style={{fontSize:12,fontWeight:700,color:"#EDE8FF",lineHeight:1.3,marginBottom:3}}>{r.role}</p>
                <p style={{fontSize:11,color:"#7C63FF",fontWeight:600,marginBottom:6}}>{r.org}</p>
                <p style={{fontSize:11,color:"#56526E",lineHeight:1.5}}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        .comm-img:hover{transform:scale(1.03);}
        .role-card:hover{box-shadow:0 4px 20px rgba(124,99,255,0.1);border-color:rgba(124,99,255,0.2)!important;}
        @media(max-width:768px){.comm-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}
