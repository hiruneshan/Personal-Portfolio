import React from 'react';
import styles from '../styles/Projects.module.css';
import { useEffect, useState } from 'react';

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
    <> 
      <h2 style={{ textAlign: 'center', color: '#eee'}}>
        Some projects I've worked on
      </h2>

      <div className={styles.projectContainer}>
        {projects.map((project, index) => (
          <div key={index} className={styles.project}>
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
        ))}
      </div>
    </> /* <-- End of single root element */
  );
};

export default Projects;