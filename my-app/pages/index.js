import { useState } from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import ProjectCarousel from "../components/ProjectCarousel";
import Contact from "../components/Contact";
import SocialLinks from "../components/SocialLinks";
import SnakeGameModal, { SnakeGameButton } from "../components/SnakeGameModal";


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


      <div className="d-none d-md-block">
        <SnakeGameButton onClick={() => setIsGameOpen(true)} />
      </div>
      <SnakeGameModal isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />



    </>
  );
}
