import { useEffect, useState } from "react";


import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import AboutMe from "@/components/AboutMe";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ProjectCarousel from "@/components/ProjectCarousel";
import SnakeGameModal, { SnakeGameButton } from "@/components/SnakeGameModal";

export default function Home() {
  const [isGameOpen, setIsGameOpen] = useState(false);


  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Projects />
      <ProjectCarousel />
      <SocialLinks />
      <ExperienceTimeline />

      <SnakeGameButton onClick={() => setIsGameOpen(true)} />
      <SnakeGameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />

    </>
  );
}
