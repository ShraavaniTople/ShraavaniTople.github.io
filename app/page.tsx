import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Community from "@/components/sections/Community";
import Instagram from "@/components/sections/Instagram";
import Certifications from "@/components/sections/Certifications";
import GitHubSection from "@/components/sections/GitHubSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Community />
      <Instagram />
      <Certifications />
      <GitHubSection />
    </>
  );
}
