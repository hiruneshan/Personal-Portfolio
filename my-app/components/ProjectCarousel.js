import React from 'react';
import { Carousel } from 'react-bootstrap';
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

/**
 * A single project card component.
 */
function ProjectCard({ project }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12" style={{ height: '400px' }}>
      <div className={styles.cardContainer}>
        <div className={styles.cardInner}>

          {/* Front Face */}
          <div className={`card h-100 w-100 border-0 shadow-lg ${styles.cardFront}`}>
            <div className="card-body d-flex flex-column p-4">
              <h5 className="card-title fw-bold mb-3" style={{ color: '#e6f1ff', fontSize: '1.5rem' }}>{project.title}</h5>
              <p className="card-text mb-4" style={{ color: '#8892b0', fontSize: '1.1rem' }}>{project.description}</p>
            </div>
            <div className="card-footer border-0 p-4 pt-0" style={{ backgroundColor: 'transparent', marginTop: 'auto' }}>
              <h6 className="small fw-light mb-3" style={{ color: '#64ffda' }}>Technologies Used</h6>
              <div className="d-flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="badge rounded-pill" style={{
                    backgroundColor: 'rgba(100, 255, 218, 0.1)',
                    color: '#64ffda',
                    border: '1px solid #64ffda',
                    padding: '8px 16px',
                    fontSize: '0.9rem'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Back Face */}
          <div className={`card h-100 w-100 border-0 shadow-lg ${styles.cardBack}`}>
            <h4 className="fw-bold mb-3" style={{ color: '#e6f1ff' }}>{project.title}</h4>
            <p className="text-center mb-4" style={{ color: '#8892b0' }}>
              {project.description}
              <br /><br />
              <span style={{ fontSize: '0.9rem' }}>Check out the source code on GitHub!</span>
            </p>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
              View GitHub
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}


/**
 * Main ProjectCarousel component
 * Renders the Bootstrap carousel using react-bootstrap.
 */
export default function ProjectCarousel() {
  const projectsPerPage = 3;
  const projectChunks = [];

  // Group projects into chunks of 3
  for (let i = 0; i < allProjects.length; i += projectsPerPage) {
    projectChunks.push(allProjects.slice(i, i + projectsPerPage));
  }

  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#040b25' }}>
      <div className="container">
        <h1 className="text-center fw-bold mb-5 text-light">Some Other Projects I Have Worked On</h1>

        <Carousel interval={null} indicators={true} variant="dark">
          {projectChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="row g-4 p-4 justify-content-center">
                {chunk.map(project => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

