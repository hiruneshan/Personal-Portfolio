import React from 'react';
import styles from '../styles/Experience.module.css';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        id: 1,
        company: "Seneca Polytechnic",
        location: "Toronto, Ontario, Canada",
        logo: "/images/seneca_college_logo.jpg",
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
        id: 2,
        company: "NeedList.ORG",
        location: "Toronto, Canada",
        logo: null,
        roles: [
            {
                id: "r3",
                title: "Developer / Team Manager",
                type: "Contract Part-time",
                date: "Sep 2025 - Present",
                duration: "5 mos",
                description: []
            },
            {
                id: "r4",
                title: "IT Project Manager",
                type: "Co-op",
                date: "May 2025 - Aug 2025",
                duration: "4 mos",
                description: [],
                skills: ["Notion", "Balsamiq", "+3 skills"]
            }
        ]
    },
    {
        id: 3,
        company: "Comvey Group",
        location: "Toronto, Canada",
        logo: "/images/Comvey_logo.jpg",
        roles: [
            {
                id: "r5",
                title: "Full Stack Developer",
                type: "Full-time",
                date: "Jan 2024 - Present",
                duration: "1 yr 6 mos",
                description: [
                    "Developing scalable web applications."
                ]
            }
        ]
    }
];

import Image from 'next/image';

export default function Experience() {
    return (
        <section className={styles.experienceSection} id="experience">
            <div className={styles.sectionHeader}>
                <h2 className={styles.experienceTitle}>Experience.</h2>
                <p className={styles.experienceSubtitle}>
                    A chronological curation of my technical journey, designing systems and crafting interfaces.
                </p>
            </div>

            <div className={styles.timelineContainer}>
                {experiences.map((company) => (
                    <div key={company.id} className={styles.companyGroup}>

                        {/* Timeline Column: Logo + Vertical Line */}
                        <div className={styles.timelineColumn}>
                            <div className={styles.logoWrapper}>
                                {company.logo ? (
                                    <Image
                                        src={company.logo}
                                        alt={`${company.company} logo`}
                                        width={50}
                                        height={50}
                                        className={styles.companyLogo}
                                    />
                                ) : (
                                    <div className={styles.logoPlaceholder}>
                                        <Briefcase size={24} color="#64ffda" />
                                    </div>
                                )}
                            </div>
                            {/* Line extends to the bottom of this group, managed by CSS */}
                            <div className={styles.verticalLine}></div>
                        </div>

                        {/* Content Column: Header + Roles */}
                        <div className={styles.contentColumn}>

                            {/* Company Header */}
                            <div className={styles.companyHeader}>
                                <h3 className={styles.companyName}>{company.company}</h3>
                                <span className={styles.companyLocation}>{company.location}</span>
                            </div>

                            {/* Roles List */}
                            <div className={styles.roleList}>
                                {company.roles.map((role) => (
                                    <div key={role.id} className={styles.roleBlock}>
                                        {/* Dot on the timeline - positioned absolutely relative to roleBlock to align with vertical line */}
                                        <div className={styles.timelineDot}></div>

                                        <div className={styles.roleCard}>
                                            <div className={styles.roleHeader}>
                                                <h4 className={styles.roleTitle}>{role.title}</h4>
                                                <span className={styles.roleDate}>{role.date}</span>
                                            </div>

                                            {role.type && (
                                                <span className={styles.roleType}>{role.type}</span>
                                            )}

                                            {role.description && role.description.length > 0 && (
                                                <ul className={styles.descriptionList}>
                                                    {role.description.map((item, i) => (
                                                        <li key={i}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}

                                            {role.skills && (
                                                <div className={styles.techStack}>
                                                    {role.skills.map((skill, s) => (
                                                        <span key={s} className={styles.techBadge}>{skill}</span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
