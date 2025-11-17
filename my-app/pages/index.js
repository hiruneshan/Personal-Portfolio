import { useEffect } from "react";


import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import Projects from "@/components/Projects";
import SocialLinks from "@/components/SocialLinks";
import AboutMe from "@/components/AboutMe";
import ExperienceTimeline from "@/components/ExperienceTimeline";

export default function Home() {


  return (
    <>
      <NavBar />
      <HeroSection />
      <AboutMe />
      <Projects/>
      <SocialLinks />
      <ExperienceTimeline />

    </>
  );
}
