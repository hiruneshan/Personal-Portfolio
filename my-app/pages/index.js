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
      <SocialLinks />
      {/* <ExperienceTimeline /> */}

      <SnakeGameButton onClick={() => setIsGameOpen(true)} />
      <SnakeGameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />

    </>
  );
}
