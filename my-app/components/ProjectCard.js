import React from 'react';
import { Folder, Github, ExternalLink } from 'lucide-react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import styles from '../styles/ProjectCarousel.module.css';

export default function ProjectCard({ project }) {
    return (
        <div>
            <div className={styles.cardContainer}>
                <div className={styles.projectCard}>

                    {/* Card Header: Folder + Links */}
                    <div className={styles.cardHeader}>
                        <Folder className={styles.folderIcon} strokeWidth={1.5} />
                        <div className={styles.cardLinks}>
                            {(project.githubUrl || project.GitHub) && (
                                (() => {
                                    const url = project.githubUrl || project.GitHub;
                                    const isPrivate = url === 'https://github.com';

                                    const linkElement = (
                                        <a
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label="GitHub Link"
                                            className={styles.repoLink}
                                            style={isPrivate ? { cursor: 'pointer' } : {}}
                                        >
                                            <Github className={styles.iconLink} strokeWidth={2} />
                                        </a>
                                    );

                                    if (isPrivate) {
                                        return (
                                            <OverlayTrigger
                                                placement="top"
                                                overlay={
                                                    <Tooltip id={`tooltip-${project.id}`} className={styles.repoTooltip}>
                                                        This is a private repository, please contact the owner for a code review
                                                    </Tooltip>
                                                }
                                            >

                                                <span>{linkElement}</span>
                                            </OverlayTrigger>
                                        );
                                    }

                                    return linkElement;
                                })()
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
