import React, { useEffect, useState } from 'react'; // Consolidated imports
import Image from 'next/image'; // Added Image import
import { Container, Row, Col } from 'react-bootstrap';
import { Github, ExternalLink } from 'lucide-react';
import styles from '../styles/Projects.module.css';
import ProjectCard from './ProjectCard';
import PixelatedImage from './PixelatedImage';

const ProjectItem = ({ project, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = React.useRef(null);

  useEffect(() => {
    const currentRef = ref.current; // Capture ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use captured ref
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.project} ${isVisible ? styles.projectVisible : ''}`}
    >
      <div className={styles.projectContent}>
        <div className={styles.projectLabel}>Featured Project</div>
        <h4 className={styles.projectTitle}>
          {project.title}
          {project.GitHub && (
            <a
              href={project.GitHub}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="GitHub Repo"
            >
              <Github size={22} />
            </a>
          )}
          {project.Link && (
            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconLink}
              aria-label="External Link"
            >
              <ExternalLink size={22} />
            </a>
          )}
        </h4>
        <div className={styles.projectDetails}>
          <p dangerouslySetInnerHTML={{ __html: project.description }} />
          <ul>
            {project.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.projectImg}>
        <Image src={project.imageUrl} alt={project.title} fill style={{ objectFit: 'cover' }} />
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

  const handleGithubClick = (e, link) => {
    if (!link) {
      e.preventDefault();
      alert("This is a private repository, please contact the owner for a code review");
    }
    // If link exists, default anchor behavior (target=_blank) works
  };

  if (loading) {
    return <div className={styles.projectContainer}>Loading...</div>;
  }

  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionNumber}>03.</span>
          <h2 className={styles.sectionTitle}>Some Things I&apos;ve Built</h2>
          <div className={styles.sectionLine}></div>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {/* Background Image Layer */}
              <div className={styles.cardBackground}>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>

              {/* Foreground Content Layer */}
              <div className={styles.cardContent}>
                {/* REMOVED: Feature Project Label */}

                <h3 className={styles.cardTitle}>
                  {project.title}
                  <div className={styles.cardLinks}>
                    {/* Always show GitHub icon. If no link, handle click with alert */}
                    <a
                      href={project.GitHub || '#'}
                      target={project.GitHub ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                      onClick={(e) => handleGithubClick(e, project.GitHub)}
                    >
                      <Github size={20} />
                    </a>

                    {project.Link && (
                      <a href={project.Link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </h3>

                <div
                  className={styles.cardDescription}
                  dangerouslySetInnerHTML={{ __html: project.description }}
                />

                <ul className={styles.cardTech}>
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;