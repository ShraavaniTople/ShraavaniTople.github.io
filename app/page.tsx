import Hero from "@/components/sections/Hero";
import AboutSection from "@/components/sections/AboutSection";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Community from "@/components/sections/Community";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Projects />
      <Skills />
      <Experience />
      <Community />
      <Connect />
    </>
  );
}
