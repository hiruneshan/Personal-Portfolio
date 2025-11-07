import ProjectCard from "@/components/ProjectCard";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "120px 0",
        background: "#0F172A",
      }}
    >
      <div className="container d-flex flex-wrap gap-4 justify-content-center">
        <ProjectCard
          title="Online Ordering System"
          desc="C++ | OOP"
          img="/images/image copy.png"
          direction="right"
        />

        <ProjectCard
          title="Portfolio"
          desc="JavaScript | React | Boostrap."
          img="/images/p2.jpg"
          direction="right"
        />

        <ProjectCard
          title="Portfolio Website"
          desc="Beautiful responsive UI built with React + Bootstrap."
          img="/images/p2.jpg"
          direction="right"
        />
      </div>
    </section>
  );
}
