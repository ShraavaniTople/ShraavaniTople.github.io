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
    <section className="section" id="community" ref={ref} style={{borderTop:"1px solid rgba(255,255,255,0.06)"}}>
      <div className="container">
        <motion.h2 initial={{opacity:0,y:16}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6}}
          style={{fontSize:"clamp(32px,5vw,64px)",fontWeight:900,letterSpacing:"-0.03em",color:"#7C63FF",marginBottom:8}}>
          Community
        </motion.h2>
        <motion.p initial={{opacity:0,y:12}} animate={inView?{opacity:1,y:0}:{}} transition={{duration:0.6,delay:0.1}}
          style={{fontSize:16,color:"#888899",marginBottom:64,maxWidth:500,lineHeight:1.7}}>
          Hackathons organized, communities built, developers mentored.
        </motion.p>

        {/* Photos */}
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:64}} className="comm-photos">
          {photoRoles.map((item,i) => (
            <motion.div key={item.event}
              initial={{opacity:0,y:24}} animate={inView?{opacity:1,y:0}:{}}
              transition={{duration:0.7,delay:0.15+i*0.1,ease:[0.16,1,0.3,1]}}
              style={{borderRadius:10,overflow:"hidden",position:"relative"}}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.photo} alt={item.event}
                style={{width:"100%",height:280,objectFit:"cover",objectPosition:"top",display:"block"}}
                className="comm-img"/>
              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"24px 20px",background:"linear-gradient(to top,rgba(0,0,0,0.85),transparent)"}}>
                <p style={{fontSize:11,fontWeight:700,letterSpacing:"0.1em",textTransform:"uppercase",color:"#7C63FF",marginBottom:4}}>{item.role}</p>
                <p style={{fontSize:15,fontWeight:700,color:"#F0EEFF"}}>{item.event}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Role grid */}
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:1,border:"1px solid rgba(255,255,255,0.07)",borderRadius:10,overflow:"hidden"}} className="roles-grid">
          {roles.map((r,i) => (
            <motion.div key={r.role+r.org}
              initial={{opacity:0}} animate={inView?{opacity:1}:{}}
              transition={{duration:0.5,delay:0.3+i*0.05}}
              style={{padding:"20px 18px",background:"#0E0E0E",borderRight:"1px solid rgba(255,255,255,0.07)",borderBottom:"1px solid rgba(255,255,255,0.07)"}}>
              <p style={{fontSize:13,fontWeight:700,color:"#F0EEFF",lineHeight:1.3,marginBottom:4}}>{r.role}</p>
              <p style={{fontSize:11,color:"#7C63FF",fontWeight:600,marginBottom:6}}>{r.org}</p>
              <p style={{fontSize:11,color:"#444455",lineHeight:1.55}}>{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .comm-img{transition:transform 0.4s ease;}
        .comm-img:hover{transform:scale(1.03);}
        @media(max-width:768px){.comm-photos{grid-template-columns:1fr!important;}.roles-grid{grid-template-columns:1fr 1fr!important;}}
        @media(max-width:480px){.roles-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}
