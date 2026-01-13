import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/ProjectCarousel.module.css';


const allProjects = [
  {
    id: 1,
    title: 'project management platform',
    description: 'A secure project management web app that allows users to browse, add, edit, and manage projects by sector with user authentication and session-based access control.',
    technologies: ['JavaScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'EJS', 'MongoDB'],
    githubUrl: 'https://github.com/hiruneshan/Climate-Solutions-project'
  },
  {
    id: 2,
    title: 'Dictionary System',
    description: 'a C++ dictionary system that loads word data from files, supports configurable searches, and logs execution events.',
    technologies: ['C++', 'STL', 'Object-Oriented Programming', 'Dynamic Memory Management'],
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

import { Folder, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard from './ProjectCard';

/**
 * A single project card component.
 */



/**
 * Main ProjectCarousel component
 * Renders a horizontally scrolling list of projects.
 */
export default function ProjectCarousel() {
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  // Check scroll position to toggle buttons
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    // Use a small buffer (e.g. 1px) to avoid precision issues
    setShowRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Check initial state
      checkScroll();
      // Also check on resize
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-5" style={{ backgroundColor: '#040b25' }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} style={{ position: 'relative' }}>
            <h2 className={styles.carouselTitle}>Some Other Projects I Have Worked On</h2>

            {/* Navigation Buttons */}
            {showLeft && (
              <button
                className={`${styles.navBtn} ${styles.navBtnLeft}`}
                onClick={scrollLeft}
                aria-label="Scroll Left"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            {showRight && (
              <button
                className={`${styles.navBtn} ${styles.navBtnRight}`}
                onClick={scrollRight}
                aria-label="Scroll Right"
              >
                <ChevronRight size={24} />
              </button>
            )}

            <div className={styles.carouselContainer} ref={scrollRef}>
              {allProjects.map((project) => (
                <div key={project.id} className={styles.cardWrapper}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

