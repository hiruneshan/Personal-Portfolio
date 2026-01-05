import React from 'react';
import styles from '../styles/Experience.module.css';

const experiences = [
    {
        id: 2,
        company: "NeedList.ORG",
        url: "https://needlist.org/",
        location: "Toronto, Canada",
        logo: null,
        roles: [
            {
                id: "r3",
                title: "Developer / Team Lead",
                type: "Contract Part-time",
                date: "Sep 2025 - Present",
                duration: "5 mos",
                description: [
                    "Leading the development of company user profiles, starting from the base user level.",
                    "Reading Figma designs and developing the UI for the admin portal.",
                    "Reviewing code and tasks while overseeing the work of 3-4 junior developers."
                ]
            },
            {
                id: "r4",
                title: "IT Intern – CO-OP",
                type: "Co-op",
                date: "May 2025 - Aug 2025",
                duration: "4 mos",
                description: [
                    "Designed projects with management, creating specifications, and defining tasks for company profiles (User, Organization, and Supplier).",
                    "Designed Balsamiq and Figma layouts for projects, including user profiles and the admin portal.",
                    "Conducted end-to-end user testing across Development, Staging, and Production environments.",
                    "Collaborated with developers to implement backend functionality for the user leaderboard using algorithms and cloud functions.",
                    "Conducted database sanitization and analyzing current databases to ensure alignment with best practices"
                ],
                skills: ["Notion", "Balsamiq", "+3 skills"]
            }
        ]
    },
    {
        id: 1,
        company: "Seneca Polytechnic",
        url: "https://www.senecapolytechnic.ca/home.html",
        location: "Toronto, Ontario, Canada",
        logo: null,
        roles: [
            {
                id: "r1",
                title: "Lab Assistant - OOP 244",
                type: "Casual / On-call",
                date: "Sep 2025 - Present",
                duration: "5 mos",
                description: [
                    "Assisting students in Object-Oriented Programming with C++, providing guidance on course related queries, and offering support with lab assignments to further improve their understanding of the subject"
                ]
            },
            {
                id: "r2",
                title: "Peer Mentor - Summer 2025",
                type: "Contract Part-time",
                date: "May 2025 - Aug 2025",
                duration: "4 mos",
                description: []
            }
        ]
    },
    {
        id: 3,
        company: "Comvey (Pvt) Ltd.",
        location: "Colombo, Western Province, Sri Lanka",
        logo: null,
        roles: [
            {
                id: "r5",
                title: "Junior Front End Developer",
                type: "Contract Full-time",
                date: "Mar 2023 - Feb 2024",
                duration: "1 yr",
                description: [
                    "Administered the Content Management System and managed Excel databases.",
                    "Collaborated with stakeholders to define requirements and worked with third-party vendors to resolve product issues.",
                    "Made design and feature updates to the website using HTML and CSS.",
                    "Researched and implemented new software to meet business needs."
                ],
                skills: ["CSS", "MongoDB", "+9 skills"]
            },
            {
                id: "r6",
                title: "Intern",
                type: "Internship",
                date: "Sep 2022 - Feb 2023",
                duration: "6 mos",
                description: [
                    "Identify and fix UI-related bugs or issues reported by the team or users.",
                    "Perform browser compatibility testing and ensure the website functions correctly across all platforms"
                ],
                skills: ["CI/CD"]
            }
        ]
    }
];

import { Container, Row, Col } from "react-bootstrap";
// ... imports

export default function Experience() {
    return (
        <section className={styles.experienceSection} id="experience">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={10}>
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionNumber}>02.</span>
                            <h2 className={styles.sectionTitle}>Work Experience</h2>
                            <div className={styles.sectionLine}></div>
                        </div>

                        <div className={styles.timelineContainer}>
                            {experiences.map((company) => (
                                <React.Fragment key={company.id}>
                                    {company.roles.map((role, rIndex) => (
                                        <div key={role.id} className={styles.timelineRow}>

                                            {/* 1. Date Column (Left) */}
                                            <div className={styles.dateColumn}>
                                                <span className={styles.dateRange}>{role.date}</span>
                                                {role.duration && <span className={styles.duration}>{role.duration}</span>}
                                            </div>

                                            {/* 2. Line Column (Center) */}
                                            <div className={styles.lineColumn}>
                                                <div className={styles.timelineDot}></div>
                                                <div className={styles.verticalLine}></div>
                                            </div>

                                            {/* 3. Content Column (Right) */}
                                            <div className={styles.contentColumn}>

                                                {/* Role Title @ Company */}
                                                <div className={styles.roleHeader}>
                                                    <h3 className={styles.roleTitle}>
                                                        {role.title} <span className={styles.companySpan}>
                                                            @ {company.url ? (
                                                                <a
                                                                    href={company.url}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className={styles.companyLink}
                                                                >
                                                                    {company.company}
                                                                </a>
                                                            ) : (
                                                                company.company
                                                            )}
                                                        </span>
                                                    </h3>
                                                </div>

                                                {/* Description */}
                                                {role.description && role.description.length > 0 && (
                                                    <div className={styles.roleDescription}>
                                                        <ul className={styles.descriptionList}>
                                                            {role.description.map((item, i) => (
                                                                <li key={i}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </React.Fragment>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
