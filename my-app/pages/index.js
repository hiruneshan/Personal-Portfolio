import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import ProjectsSection from "../components/ProjectSection";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <NavBar />

      {/* ✅ Hero */}
      <HeroSection />

      {/* ✅ Projects / Next Section */}
      <ProjectsSection />

    </>
  );
}
