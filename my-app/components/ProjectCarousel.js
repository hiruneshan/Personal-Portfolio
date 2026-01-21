import React, { useState, useEffect, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/ProjectCarousel.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

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
    title: 'Hero & Guild System',
    description: 'Engineered a template-based character system that adapts to different health types (Numeric, Super, Infinite) and implemented strict resource management for "Guilds" and "Teams" using deep-cloning and manual memory control.',
    technologies: ['C++', 'Dynamic Memory', 'Templates', 'STL', 'OOP'],
    githubUrl: 'https://github.com'
  },
  {
    id: 4,
    title: 'Delivery System',
    description: 'Integrated the A* routing algorithm to determine optimal delivery paths. Engineered logic to manage physical constraints (weight and volume) for truck assignments, ensuring efficient resource allocation while maintaining code integrity through version control.',
    technologies: ['C', 'A* Search Algorithm', 'Git', 'Unit Testing'],
    githubUrl: 'https://github.com'
  },
  {
    id: 6,
    title: 'Database Design',
    description: 'Designed a normalized database with a complete data dictionary and schema scripts, and developed custom SQL views for inventory and revenue insights to support data-driven decision-making.',
    technologies: ['SQL/Oracle', 'C++', 'ERD', 'OCI', 'PL/SQL'],
    githubUrl: 'https://github.com'
  },
  {
    id: 5,
    title: 'Music App',
    description: 'Built a dynamic UI using DOM manipulation for artist menus and song cards. Implemented custom data filtering and client-side validation to ensure a seamless search and user experience.',
    technologies: ['JavaScript', 'HTML', 'CSS3'],
    githubUrl: 'https://github.com'
  },
];

export default function ProjectCarousel() {
  const [cards, setCards] = useState(allProjects);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Stable callback for moving cards
  const moveToEnd = useCallback(() => {
    setCards((currentCards) => {
      const newCards = [...currentCards];
      const movedCard = newCards.shift();
      newCards.push(movedCard);
      return newCards;
    });
  }, []); // Logic doesn't depend on props, only state updater

  const moveToFront = useCallback(() => {
    setCards((currentCards) => {
      const newCards = [...currentCards];
      const movedCard = newCards.pop();
      newCards.unshift(movedCard);
      return newCards;
    });
  }, []);

  const handleManualInteraction = () => {
    setIsAutoPlaying(false);
  };

  // Auto-Play Effect
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        moveToEnd();
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, moveToEnd]); // Dependency included

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleManualInteraction();
        moveToEnd();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleManualInteraction();
        moveToFront();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveToEnd, moveToFront]);

  return (
    <div className={styles.sectionWrapper}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} className="text-center">
            <h2 className={styles.carouselTitle}>Some Other Projects I Have Worked On</h2>

            <div
              className={styles.stackContainer}
              // Stop only on interaction events
              onMouseEnter={handleManualInteraction}
              onTouchStart={handleManualInteraction}
            >
              <ul className={styles.cardStack}>
                <AnimatePresence initial={true} mode="popLayout">
                  {cards.map((project, index) => {
                    if (index > 3) return null;

                    const isTop = index === 0;

                    return (
                      <Card
                        key={project.id}
                        project={project}
                        index={index}
                        moveToEnd={() => {
                          handleManualInteraction();
                          moveToEnd();
                        }}
                        isTop={isTop}
                      />
                    );
                  })}
                </AnimatePresence>
              </ul>
            </div>

            <div className={styles.instructionText}>
              Swipe up or use Arrow Keys to navigate
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const Card = ({ project, index, moveToEnd, isTop }) => {
  // Enhanced Stack Visuals: Stack visually UPWARDS
  const offset = index * -35;
  const scale = 1 - index * 0.05;
  const brightness = 1 - index * 0.15;

  return (
    <motion.li
      className={styles.cardItem}
      style={{
        zIndex: 100 - index,
        cursor: isTop ? 'grab' : 'default',
      }}
      // Entrance Animation: Fly in from bottom
      initial={{
        y: 800, // Start way below
        opacity: 0,
        scale: 0.9
      }}
      animate={{
        scale: scale,
        y: offset, // Move to stack position
        filter: `brightness(${brightness})`,
        opacity: index > 3 ? 0 : 1,
      }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 30,
        mass: 1.5,
        restDelta: 0.001,
        // Stagger entrance slightly based on index? 
        // Or just let spring handle natural arrival
        delay: index * 0.1 // Stagger effect on load
      }}
      // Hover Pop Effect for top card
      whileHover={isTop ? {
        scale: 1.05,
        transition: { duration: 0.2 }
      } : {}}

      drag={isTop ? "y" : false}
      dragConstraints={{ top: 0, bottom: 0 }}
      onDragEnd={(event, info) => {
        if (info.offset.y < -50) {
          moveToEnd();
        }
      }}
    >
      <div className={styles.projectCardWrapper}>
        <ProjectCard project={project} />
      </div>
    </motion.li>
  );
};
