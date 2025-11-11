'use client'; // <-- Makes this a Client Component

import React, { useState, useEffect } from 'react'; // <-- Import hooks
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../styles/Projects.module.css';


const WindowButton = () => (
    <button className={styles.windowButton}>_</button>
);

export default function Projects() {
    // --- STATE ---
    // 1. Create state to hold your projects
    const [projects, setProjects] = useState([]);
    // 2. Create state to handle loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await fetch('/api/projects');
                const data = await response.json();
                setProjects(data.projects); // <-- Set the projects from your API
            } catch (error) {
                console.error('Failed to fetch projects:', error);
            } finally {
                setIsLoading(false); 
            }
        }
        fetchProjects();
    }, []);

    if (isLoading) {
        return (
            <Container as="main" className={styles.projectSection}>
                <Row className="justify-content-center">
                    <Col xs={12} lg={10} className="text-center">
                        <p className={styles.subTitleText}>
                            Loading Project_Files...
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }

    // --- RENDERED COMPONENT ---
    return (
        <Container as="main" className={styles.projectSection}>
            {/* === SECTION HEADER === */}
            <Row className="justify-content-center">
                <Col xs={12} lg={10} className="text-center">
                    <p className={styles.titleText}>Projects</p>
                    <p className={styles.subTitleText}>
                        A directory of recent works, feel free to explore the codebase.
                        <br />
                    </p>
                </Col>
            </Row>

            {/* === PROJECTS GRID === */}
            <Row className="justify-content-center">
                <Col xs={12}>
                    <Row className={`${styles.projectGrid} g-4`}>
                        {/* 5. Map over the 'projects' state variable */}
                        {projects.map((project, index) => (
                            <Col
                                xs={12}
                                sm={6}
                                md={4}
                                lg={4}
                                key={project.title}
                                className={styles.projectColumn}
                            // style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* --- PROJECT CARD --- */}
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
                                            src={project.imageUrl || 'default-image.png'} // Use a fallback image
                                            alt={project.title}
                                            className={styles.cardImage}
                                        />
                                    </div>

                                    {/* Card Body & 'Execute' Button */}
                                    <div className={styles.cardBody}>
                                        <p>{project.description}</p>
                                        {/* You can map over keyFeatures here if you want */}
                                        <a href="#" className={styles.btnRetro}>
                                            View GitHub...
                                        </a>
                                    </div>
                                </div>
                                {/* --- END PROJECT CARD --- */}
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}