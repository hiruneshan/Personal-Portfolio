import { useEffect, useState } from "react";


import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import AboutMe from "@/components/AboutMe";
import Experience from "@/components/Experience";
import ProjectCarousel from "@/components/ProjectCarousel";
import Contact from "@/components/Contact";
import SnakeGameModal, { SnakeGameButton } from "@/components/SnakeGameModal";
import styles from "../styles/Home.module.css";

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
