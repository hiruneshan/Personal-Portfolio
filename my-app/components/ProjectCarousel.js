import React, { useState, useEffect, useCallback } from 'react';
import styles from '../styles/ProjectCarousel.module.css';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';
import ProjectsGrid from './ProjectsGrid';

// Removed hardcoded allProjects array to fetch dynamically from API



export default function ProjectCarousel() {
  const [allProjects, setAllProjects] = useState([]);
  const [cards, setCards] = useState([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false); // Start false, wait for view
  const [userPaused, setUserPaused] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        
        // Filter out rank 1-4 for the carousel
        const carouselProjects = data.projects
          .filter(p => p.rank > 4)
          .sort((a, b) => a.rank - b.rank);
          
        // Add an 'id' property if it doesn't exist, using rank
        const projectsWithId = carouselProjects.map(p => ({ ...p, id: p.rank }));

        setAllProjects(projectsWithId);
        setCards(projectsWithId);
      } catch (error) {
        console.error('Error fetching carousel projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const containerRef = React.useRef(null);
  const isInView = React.useRef(false); // Use ref for event listener access

  // Update logic to track view state without re-triggering listener hook constantly if not needed
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        isInView.current = entry.isIntersecting;
        if (entry.isIntersecting && !userPaused) {
          setIsAutoPlaying(true);
        } else if (!entry.isIntersecting) {
          // Optional: Pause when out of view to save resources? 
          // setIsAutoPlaying(false); 
        }
      },
      { threshold: 0.3 } // 30% visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [userPaused]);

  // Stable callback for moving cards
  const moveToEnd = useCallback(() => {
    setCards((currentCards) => {
      const newCards = [...currentCards];
      const movedCard = newCards.shift();
      newCards.push(movedCard);
      return newCards;
    });
  }, []);

  const moveToFront = useCallback(() => {
    setCards((currentCards) => {
      const newCards = [...currentCards];
      const movedCard = newCards.pop();
      newCards.unshift(movedCard);
      return newCards;
    });
  }, []);

  // Temporary pause (hover)
  const handlePause = () => {
    if (!userPaused) {
      setIsAutoPlaying(false);
    }
  };

  // Resume only if not manually paused by user/keyboard
  const handleResume = () => {
    if (!userPaused) {
      setIsAutoPlaying(true);
    }
  };

  // Permanent pause (keyboard/interaction)
  const handleManualStop = () => {
    setIsAutoPlaying(false);
    setUserPaused(true);
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
  }, [isAutoPlaying, moveToEnd]);

  // Keyboard Navigation (Restored Global Listener)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Only capture if component is in view
      if (!isInView.current) return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        handleManualStop();
        moveToEnd();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        handleManualStop();
        moveToFront();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveToEnd, moveToFront]);

  return (
    <div className={styles.sectionWrapper} ref={containerRef}>
      <ProjectsGrid />
      <Container>
        <div className={styles.carouselHeader}>
          <h2 className={styles.carouselTitle}>Some Other Projects I Have Worked On</h2>
        </div>

        {/* --- DESKTOP/TABLET VIEW (Carousel Stack) --- */}
        <div className="d-none d-lg-block">
          <Row className="justify-content-center">
            <Col lg={10} className="text-center">
              <div
                className={styles.stackContainer}
                // Pause on hover/touch, resume on leave
                onMouseEnter={handlePause}
                onMouseLeave={handleResume}
                onTouchStart={handlePause}
                onTouchEnd={handleResume}
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
                            handleManualStop(); // Drag triggers manual stop
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
        </div>

        {/* --- MOBILE VIEW (Vertical List) --- */}
        <div className="d-block d-lg-none">
          <div className={styles.mobileProjectList}>
            {allProjects.slice(0, showAll ? allProjects.length : 2).map((project) => (
              <div key={project.id} className={styles.mobileProjectItem}>
                <div className={styles.projectCard}>
                  <ProjectCard project={project} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              className={styles.viewMoreBtn}
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "View Less Projects" : "View More Projects"}
            </button>
          </div>
        </div>
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
