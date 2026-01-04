import React from 'react';
import styles from '../styles/Projects.module.css';
import { useEffect, useState } from 'react';

const ProjectItem = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.project} ${isVisible ? styles.projectVisible : ''}`}
    >
      <div className={styles.projectContent}>
        <div className={styles.projectLabel}>Featured Project</div>
        <h4 className={styles.projectTitle}>{project.title}</h4>
        <div className={styles.projectDetails}>
          <p>{project.description}</p>
          <ul>
            {project.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.projectImg}>
        <img src={project.imageUrl} alt={project.title} />
      </div>
    </div>
  );
};

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data.projects);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div className={styles.projectContainer}>Loading...</div>;
  }

  // FIXED: Wrapped in a React Fragment
  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.projectContainer}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>03.</span>
          <h2 className={styles.sectionTitle}>Some Things I&apos;ve Built</h2>
          <div className={styles.sectionLine}></div>
        </div>

        {projects.map((project, index) => (
          <ProjectItem key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;