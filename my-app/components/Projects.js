'use client'; 

import React, { useState, useEffect } from 'react';
// <-- We no longer need Modal or Button!
import { Container, Row, Col } from 'react-bootstrap'; 
import styles from '../styles/Projects.module.css';

// ... (WindowButton component is fine) ...

export default function Projects() {
    // --- STATE ---
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    // <-- DELETE the [selectedProject, setSelectedProject] state
    // <-- DELETE the handleCloseModal and handleShowModal functions

    // --- DATA FETCHING ---
    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch('/api/projects');
                const data = await response.json();
                setProjects(data.projects); 
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            } finally {
                setIsLoading(false); 
            }
        }
        fetchProjects();
    }, []);

    // --- LOADING STATE ---
    if (isLoading) {
        // ... (this part is unchanged) ...
    }


    return (
        <Container id="projects" className={styles.projectSection}>
            {/* ... (Section Header is unchanged) ... */}

            {/* === PROJECTS GRID === */}
            <Row className="justify-content-center">
                <Col xs={12}>
                    <Row className={`${styles.projectGrid} g-4`}>
                        {projects.map((project, index) => (
                            <Col
                                xs={12} sm={6} md={4} lg={4}
                                key={project.title}
                                className={styles.projectColumn}
                            >
                                {/* --- PROJECT CARD --- */}
                                {/* V V V REMOVED onMouseEnter/onMouseLeave V V V */}
                                <div className={styles.projectCard}>
                                    {/* Card Header (Window Title Bar) */}
                                    <div className={styles.cardHeader}>
                                        <h3 className={styles.cardTitle}>{project.title}</h3>
                                        <div className={styles.windowButtons}>
                                            <button className={styles.windowButton}>_</button>
                                            <button className={styles.windowButton}>□</button>
                                            <button className={styles.windowButton}>X</button>
                                        </div>
                                    </div>

                                    {/* Card Image */}
                                    <div className={styles.cardImageContainer}>
                                        <img
                                            src={project.imageUrl || 'default-image.png'} 
                                            alt={project.title}
                                            className={styles.cardImage}
                                        />
                                    </div>

                                    {/* Card Body (stays hidden) */}
                                    <div className={styles.cardBody}>
                                        <p>{project.description}</p>
                                    </div>

                                
                                    <div className={styles.projectOverlay}>
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        <a 
                                          href={project.githubUrl} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className={styles.btnRetro}
                                        >
                                          View GitHub
                                        </a>
                                    </div>
                                    {/* ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ ^ */}

                                </div>
                           
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>


        </Container>
    );
}