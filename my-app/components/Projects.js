import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Container } from 'react-bootstrap'; // Removed unused imports
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion'; // Imported Framer Motion
import styles from '../styles/Projects.module.css';

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
  };

  if (loading) {
    return <div className={styles.projectContainer}>Loading...</div>;
  }

  return (
    <section id="projects" className={styles.projectsSection}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Some Things I&apos;ve Built</h2>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={styles.projectCard}
              // Animation Logic: Odd from Right (100), Even from Left (-100)
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: index * 0.1 // Slight stagger for sequential feel
              }}
            >
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
                <h3 className={styles.cardTitle}>
                  {project.title}
                  <div className={styles.cardLinks}>
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
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;