import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Research from "@/components/sections/Research";
import Community from "@/components/sections/Community";
import Timeline from "@/components/sections/Timeline";
import GitHubSection from "@/components/sections/GitHubSection";
import Blog from "@/components/sections/Blog";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Research />
      <Community />
      <Timeline />
      <GitHubSection />
      <Blog />
    </>
  );
}
