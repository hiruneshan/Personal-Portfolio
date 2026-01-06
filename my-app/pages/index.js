import { useEffect, useState } from "react";


import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCarousel from "@/components/ProjectCarousel";
import Contact from "@/components/Contact";
import SnakeGameModal, { SnakeGameButton } from "@/components/SnakeGameModal";

export default function Home() {
  const [isGameOpen, setIsGameOpen] = useState(false);


  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Projects />
      <ProjectCarousel />
      <Contact />
      <div className="d-none d-md-block">
        <SocialLinks />
      </div>
      {/* <ExperienceTimeline /> */}

      <div className="d-none d-md-block">
        <SnakeGameButton onClick={() => setIsGameOpen(true)} />
      </div>
      <SnakeGameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />

      <div className="text-center py-4" style={{ fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.9rem', color: '#8892b0' }}>
        Built and designed by <span style={{ color: '#64ffda' }}>Hiru Wijemanne</span>
      </div>

    </>
  );
}
