// components/ProjectsSection.js
'use client'; // <-- Mark as a client component to use hooks

import ProjectCard from "@/components/ProjectCard";
import { useState, useEffect } from "react"; // <-- Import hooks

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]); // <-- State to hold projects

  // Fetch data on component mount
  useEffect(() => {
    async function fetchProjects() {
      // Fetch from the API route you just fixed
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data.projects); // <-- Set state
    }
    fetchProjects();
  }, []); // The empty array [] means this runs only once

  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        background: "#0F172A",
      }}
    >
      <div className="container d-flex flex-wrap gap-4 justify-content-center">
        {/* Map over the projects from state */}
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            // Join the technologies array for the description
            desc={project.technologies.join(' | ')} 
            img={project.imageUrl || '/images/image.png'} // Use the API image
            // This is a nice trick: alternate the slide-in direction
            direction={index % 2 === 0 ? "left" : "right"} 
          />
        ))}
      </div>
    </section>
  );
}