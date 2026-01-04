import React from 'react';

import styles from '../styles/ProjectCarousel.module.css';

// Hardcoded project data
const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with product listings, a shopping cart, and a payment gateway.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com'
  },
  {
    id: 2,
    title: 'Data Visualization Dashboard',
    description: 'A web app for visualizing complex datasets using interactive charts and graphs.',
    technologies: ['React', 'D3.js', 'Tailwind CSS'],
    githubUrl: 'https://github.com'
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'A clone of a popular social media platform allowing users to post, comment, and follow others.',
    technologies: ['React Native', 'Firebase', 'Firestore'],
    githubUrl: 'https://github.com'
  },
  {
    id: 4,
    title: 'Project Management Tool',
    description: 'A Trello-like board for managing tasks, assigning users, and tracking project progress.',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'An application that finds recipes based on the ingredients you have at home, using a third-party API.',
    technologies: ['Vue.js', 'Axios', 'Tailwind CSS'],
    githubUrl: 'https://github.com'
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'A mobile app to log workouts, track calories, and monitor fitness goals over time.',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    githubUrl: 'https://github.com'
  },
  {
    id: 7,
    title: 'Blog Platform',
    description: 'A simple, clean blogging platform with a Markdown editor and user authentication.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Auth0'],
    githubUrl: 'https://github.com'
  }
];

import { Folder, Github, ExternalLink } from 'lucide-react';

/**
 * A single project card component.
 */
function ProjectCard({ project }) {
  return (
    <div style={{ height: '100%' }}>
      <div className={styles.cardContainer}>
        <div className={styles.projectCard}>

          {/* Card Header: Folder + Links */}
          <div className={styles.cardHeader}>
            <Folder className={styles.folderIcon} strokeWidth={1.5} />
            <div className={styles.cardLinks}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Link"
                >
                  <Github className={styles.iconLink} strokeWidth={2} />
                </a>
              )}
              {project.externalUrl && (
                <a
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="External Link"
                >
                  <ExternalLink className={styles.iconLink} strokeWidth={2} />
                </a>
              )}
            </div>
          </div>

          {/* Card Body: Title + Desc */}
          <h5 className={styles.cardTitle}>{project.title}</h5>
          <p className={styles.cardDescription}>{project.description}</p>

          {/* Card Footer: Tech List */}
          <ul className={styles.techList}>
            {project.technologies.map((tech, i) => (
              <li key={i} className={styles.techItem}>{tech}</li>
            ))}
          </ul>

        </div>
      </div>
    </div>
  );
}


/**
 * Main ProjectCarousel component
 * Renders a horizontally scrolling list of projects.
 */
export default function ProjectCarousel() {
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#040b25' }}>
      <div className="container-fluid py-5" style={{ backgroundColor: '#040b25' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 1rem' }}>
          <h1 className="fw-bold mb-5 text-light">Some Other Projects I Have Worked On</h1>

          <div className={styles.carouselContainer}>
            {allProjects.map((project) => (
              <div key={project.id} className={styles.cardWrapper}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

