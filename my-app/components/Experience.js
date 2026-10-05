import { useState } from 'react';

import { Container } from 'react-bootstrap';

import { motion, AnimatePresence } from 'framer-motion';

import ExperienceGrid from './ExperienceGrid';

import styles from '../styles/Experience.module.css';

// Flattened Data Structure for easier "Timeline/Quest" navigation
const experienceData = [
    {
    id: "r0",
    company: "Government of Ontario, Justice Technology Services",
    url: "https://www.linkedin.com/company/government-of-ontario/",
    role: "IT Systems & Programmer - CO-OP",
    date: "May 2026 - Sept 2026",
    type: "COMPLETED_LEVEL",
    status: "COMPLETED",
    location: "Toronto, Canada",
    description: [
        "Worked across eHub 2.0 and eSearch Warrant, contributing to production government applications through full-stack development and testing.",
        "Built a reusable global search component supporting multiple data types and configurable filters.",
        "Designed DTOs and API models for dashboard and user-management features, improving frontend-backend data flow.",
        "Resolved a critical caching issue that caused data loss during data transfer.",
        "Developed Angular notification services and tested backend systems to improve reliability and performance.",
        "Refactored legacy UI and CSS, improving page performance and aligning components with the Ontario Design System and AODA standards."
    ],
    icon: "star"
},

    {
        id: "r3",
        company: "NeedList.ORG",
        url: "https://needlist.org/",
        role: "Developer / Team Lead",
        date: "Sep 2025 - Jan 2026",
        type: "CURRENT_DUNGEON",
        status: "ACTIVE_RAID",
        location: "Toronto, Canada",
        description: [
            "Actively contributed to building company user profiles, starting from the base user level.",
            "Read Figma designs and developed the UI for the admin portal.",
            "Reviewed code and tasks while overseeing the work of 3–4 junior developers."
        ],
        icon: "star"
    },

    {
        id: "r4",
        company: "NeedList.ORG",
        url: "https://needlist.org/",
        role: "IT Intern – CO-OP",
        date: "May 2025 - Aug 2025",
        type: "COMPLETED_LEVEL",
        status: "COMPLETED",
        location: "Toronto, Canada",
        description: [
            "Designed projects with management, creating specifications and defining tasks for company profiles.",
            "Designed Balsamiq and Figma layouts for projects, including user profiles and the admin portal.",
            "Conducted end-to-end user testing across Development, Staging, and Production environments.",
            "Collaborated with developers to implement backend functionality for the user leaderboard.",
            "Conducted database sanitization and analyzed existing databases."
        ],
        icon: "box"
    },

    {
        id: "r1",
        company: "Seneca Polytechnic",
        url: "https://www.senecapolytechnic.ca/home.html",
        role: "Lab Assistant - OOP 244",
        date: "Sep 2025 - Jan 2026",
        type: "SIDE_QUEST",
        status: "ONGOING",
        location: "Toronto, Ontario",
        description: [
            "Assisted students in Object-Oriented Programming with C++, providing guidance on course-related questions and support with lab assignments."
        ],
        icon: "medal"
    },

    {
        id: "r2",
        company: "Seneca Polytechnic",
        role: "Peer Mentor",
        date: "May 2025 - Aug 2025",
        type: "TUTORIAL_GUIDE",
        status: "COMPLETED",
        location: "Toronto, Ontario",
        description: [
            "Guided first-year students through the transition from high school to college.",
            "Served as a main resource for student questions and connected peers with campus services."
        ],
        icon: "key"
    },

    {
        id: "r5",
        company: "Comvey (Pvt) Ltd.",
        role: "Junior Front End Developer",
        date: "Mar 2023 - Feb 2024",
        type: "BOSS_FIGHT",
        status: "VICTORY",
        location: "Colombo, Sri Lanka",
        description: [
            "Administered the Content Management System and managed Excel databases.",
            "Collaborated with stakeholders to define requirements and worked with third-party vendors.",
            "Made design and feature updates to the website using HTML and CSS.",
            "Researched and implemented new software to meet business needs."
        ],
        icon: "skull"
    },

    {
        id: "r6",
        company: "Comvey (Pvt) Ltd.",
        role: "Intern",
        date: "Sep 2022 - Feb 2023",
        type: "TUTORIAL_ZONE",
        status: "COMPLETED",
        location: "Colombo, Sri Lanka",
        description: [
            "Identified and fixed UI-related bugs and issues reported by the team or users.",
            "Performed browser compatibility testing to ensure the website functioned correctly."
        ],
        icon: "potion"
    }
];

export default function Experience() {
    // Default to the first item
    const [selectedId, setSelectedId] = useState("r0");

    const selectedRole = experienceData.find(
        (item) => item.id === selectedId
    );

    return (
        <section className={styles.experienceSection} id="experience">
            <ExperienceGrid />

            <Container>
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>
                        Work Experience
                    </h2>
                </div>

                <div className={styles.questLogContainer}>

                    {/* LEFT COLUMN: Level Select / Timeline */}
                    <div className={styles.questList}>
                        <div className={styles.questLineDashed}></div>

                        {experienceData.map((item) => (
                            <div
                                key={item.id}
                                className={`${styles.questItem} ${
                                    selectedId === item.id
                                        ? styles.active
                                        : ''
                                }`}
                                onClick={() => setSelectedId(item.id)}
                            >
                                {/* Pixel Icon Container */}
                                <div className={styles.questIconBox}>
                                    <div
                                        className={`${styles.iconPixel} ${styles[item.icon]}`}
                                    ></div>
                                </div>

                                <div className={styles.questLabel}>
                                    <span className={styles.questRole}>
                                        {item.company}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT COLUMN: Quest Card / Details */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedId}
                            className={styles.questCardWrapper}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className={styles.questCard}>
                                <div className={styles.cardHeader}>
                                    <div className={styles.headerTopRow}>
                                        <div className={styles.roleTitle}>
                                            {selectedRole.role}
                                        </div>

                                        <div className={styles.cardDate}>
                                            {selectedRole.date}
                                        </div>
                                    </div>

                                    <div className={styles.companyTitle}>
                                        {selectedRole.company}
                                    </div>

                                    <div className={styles.headerLine}></div>
                                </div>

                                <div className={styles.cardBody}>
                                    <ul className={styles.objectiveList}>
                                        {selectedRole.description.map(
                                            (desc, i) => (
                                                <li key={i}>{desc}</li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </Container>
        </section>
    );
}