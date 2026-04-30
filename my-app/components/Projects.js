import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Container, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import styles from '../styles/Projects.module.css';
const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        
        // Only show top 4 ranked projects in the main cards
        const topProjects = data.projects
          .filter(p => p.rank >= 1 && p.rank <= 4)
          .sort((a, b) => a.rank - b.rank);
          
        setProjects(topProjects);
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
                {/* Top Left Links on Hover */}
                <div className={styles.cardLinksHover}>
                  {project.GitHub ? (
                    <a
                      href={project.GitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardLink}
                    >
                      <Github size={24} />
                    </a>
                  ) : (
                    <OverlayTrigger
                      placement="top"
                      overlay={
                        <Tooltip id={`tooltip-hover-${index}`} className={styles.repoTooltip}>
                          This is a private repository, please contact the owner for a code review
                        </Tooltip>
                      }
                    >
                      <a
                        href="#"
                        className={styles.cardLink}
                        onClick={(e) => e.preventDefault()}
                        style={{ cursor: 'pointer' }}
                      >
                        <Github size={24} />
                      </a>
                    </OverlayTrigger>
                  )}

                  {project.Link && (
                    <a href={project.Link} target="_blank" rel="noopener noreferrer" className={styles.cardLink}>
                      <ExternalLink size={24} />
                    </a>
                  )}
                </div>

                <h3 className={styles.cardTitle}>
                  {project.title}
                  <div className={styles.cardLinks}>
                    {project.GitHub ? (
                      <a
                        href={project.GitHub}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardLink}
                      >
                        <Github size={20} />
                      </a>
                    ) : (
                      <OverlayTrigger
                        placement="top"
                        overlay={
                          <Tooltip id={`tooltip-title-${index}`} className={styles.repoTooltip}>
                            This is a private repository, please contact the owner for a code review
                          </Tooltip>
                        }
                      >
                        <a
                          href="#"
                          className={styles.cardLink}
                          onClick={(e) => e.preventDefault()}
                          style={{ cursor: 'pointer' }}
                        >
                          <Github size={20} />
                        </a>
                      </OverlayTrigger>
                    )}

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