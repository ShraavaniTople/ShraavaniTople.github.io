"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, ArrowDown, Mail } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as const;

const socials = [
  { icon: Github, href: "https://github.com/ShraavaniTople", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/shraavani-tople/", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com/shraavanitople", label: "Twitter" },
  { icon: Instagram, href: "https://instagram.com/shraavani___", label: "Instagram" },
  { icon: Mail, href: "mailto:shraavanitople@gmail.com", label: "Email" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#0A0A0A", paddingTop: "80px" }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 30% 50%, rgba(192,132,252,0.05) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10 w-full py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* Blob behind photo */}
            <div
              className="absolute w-72 h-72 rounded-full pointer-events-none"
              style={{
                background: "rgba(192,132,252,0.1)",
                filter: "blur(60px)",
                top: "10%",
                left: "5%",
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: "clamp(260px, 40vw, 420px)",
                height: "clamp(320px, 50vw, 520px)",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 32px 80px rgba(192,132,252,0.12), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <Image
                src="/shraavani.png"
                alt="Shraavani Tople"
                fill
                unoptimized
                className="object-cover object-top"
                priority
              />
            </div>
          </motion.div>

          {/* RIGHT — Text */}
          <div className="flex flex-col order-1 lg:order-2">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease }}
              className="text-xs font-mono tracking-widest uppercase mb-5"
              style={{ color: "#A1A1AA" }}
            >
              Frontend Engineer · Robotics Builder
            </motion.p>

            {/* H1 */}
            <div className="overflow-hidden mb-1">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease }}
                className="block text-[clamp(48px,8vw,72px)] font-extrabold leading-none tracking-tight"
                style={{ color: "#FAFAF9" }}
              >
                Shraavani
              </motion.span>
            </div>
            <div className="overflow-hidden mb-5">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease }}
                className="block text-[clamp(48px,8vw,72px)] font-extrabold leading-none tracking-tight"
                style={{ color: "#FAFAF9" }}
              >
                Tople.
              </motion.span>
            </div>

            {/* Violet line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.6, ease }}
              className="origin-left mb-5"
              style={{ width: 48, height: 3, background: "#C084FC", borderRadius: 99 }}
            />

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease }}
              className="text-base leading-relaxed mb-5 max-w-md"
              style={{ color: "#A1A1AA" }}
            >
              I build AI interfaces and robotic systems. Currently shipping frontend at Agora AI — previously trained robot arms with deep RL and organized India&apos;s largest Ethereum hackathon.
            </motion.p>

            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8, ease }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 self-start"
              style={{
                border: "1px solid rgba(192,132,252,0.25)",
                background: "rgba(192,132,252,0.06)",
              }}
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{
                  background: "#C084FC",
                  animation: "heroPulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
                }}
              />
              <span className="text-xs font-mono" style={{ color: "#C084FC" }}>
                Currently at Agora AI — Frontend Engineer
              </span>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9, ease }}
              className="flex items-center gap-4 mb-7 flex-wrap"
            >
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.07, ease }}
                  className="flex items-center gap-1.5 text-xs transition-colors"
                  style={{ color: "#52525B" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#C084FC")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#52525B")}
                >
                  <Icon size={14} />
                  <span>{label}</span>
                </motion.a>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0, ease }}
              className="flex items-center gap-3 flex-wrap"
            >
              <button
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-opacity hover:opacity-85"
                style={{ background: "#C084FC", color: "#0A0A0A" }}
              >
                View Work <ArrowDown size={14} />
              </button>
              <a
                href="mailto:shraavanitople@gmail.com"
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-white/[0.04]"
                style={{ border: "1px solid rgba(255,255,255,0.1)", color: "#A1A1AA" }}
              >
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes heroPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
      `}</style>
    </section>
  );
}
