import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Community from "@/components/sections/Community";
import AboutSection from "@/components/sections/AboutSection";
import Connect from "@/components/sections/Connect";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Community />
      <AboutSection />
      <Connect />
    </>
  );
}
