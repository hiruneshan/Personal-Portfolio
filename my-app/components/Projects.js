import React, { useEffect, useState } from 'react'; // Consolidated imports
import { Container, Row, Col } from 'react-bootstrap';
import { Github, ExternalLink } from 'lucide-react';
import styles from '../styles/Projects.module.css';
import ProjectCard from './ProjectCard';

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
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03.</span>
              <h2 className={styles.sectionTitle}>Some Things I&apos;ve Built</h2>
              <div className={styles.sectionLine}></div>
            </div>

            {projects.map((project, index) => (
              <React.Fragment key={index}>
                <div className="d-none d-md-block">
                  <ProjectItem project={project} index={index} />
                </div>
                <div className="d-block d-md-none mb-4">
                  <ProjectCard project={project} />
                </div>
              </React.Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;