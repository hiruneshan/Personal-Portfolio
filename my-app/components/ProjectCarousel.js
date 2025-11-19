import React from 'react';
import { Carousel } from 'react-bootstrap';

// Hardcoded project data
const allProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with product listings, a shopping cart, and a payment gateway.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe']
  },
  {
    id: 2,
    title: 'Data Visualization Dashboard',
    description: 'A web app for visualizing complex datasets using interactive charts and graphs.',
    technologies: ['React', 'D3.js', 'Tailwind CSS']
  },
  {
    id: 3,
    title: 'Social Media App',
    description: 'A clone of a popular social media platform allowing users to post, comment, and follow others.',
    technologies: ['React Native', 'Firebase', 'Firestore']
  },
  {
    id: 4,
    title: 'Project Management Tool',
    description: 'A Trello-like board for managing tasks, assigning users, and tracking project progress.',
    technologies: ['Angular', 'TypeScript', 'Node.js', 'PostgreSQL']
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description: 'An application that finds recipes based on the ingredients you have at home, using a third-party API.',
    technologies: ['Vue.js', 'Axios', 'Tailwind CSS']
  },
  {
    id: 6,
    title: 'Fitness Tracker',
    description: 'A mobile app to log workouts, track calories, and monitor fitness goals over time.',
    technologies: ['Flutter', 'Dart', 'SQLite']
  },
  {
    id: 7,
    title: 'Blog Platform',
    description: 'A simple, clean blogging platform with a Markdown editor and user authentication.',
    technologies: ['React', 'Next.js', 'Tailwind CSS', 'Auth0']
  }
];

/**
 * A single project card component.
 */
function ProjectCard({ project }) {
  return (
    <div className="col-md-4 col-sm-12 d-flex">
      <div className="card shadow-sm h-100 w-100">
        <div className="card-body d-flex flex-column">
          <h5 className="card-title fw-semibold">{project.title}</h5>
          <p className="card-text text-muted">{project.description}</p>
        </div>
        <div className="card-footer" style={{ backgroundColor: '#f8f9fa', borderTop: '1px solid #eee' }}>
          <h6 className="text-muted small fw-light mb-2">Technologies Used</h6>
          <div>
            {project.technologies.map(tech => (
              <span key={tech} className="badge bg-primary-subtle text-primary-emphasis rounded-pill me-1 mb-1">
                {tech}
              </span>
            ))}
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
    <div className="container my-5" style={{ backgroundColor: '#f8f9fa' }}>
      <h1 className="text-center fw-bold mb-5">My Projects</h1>

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
  );
}

