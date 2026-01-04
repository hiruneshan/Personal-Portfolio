import React from 'react';
import styles from '../styles/Experience.module.css';
import { Briefcase } from 'lucide-react';

const experiences = [
    {
        id: 1,
        role: "Software Engineer Intern",
        company: "Google",
        date: "May 2024 - Aug 2024",
        description: [
            "Optimized large-scale data processing pipelines using C++, reducing latency by 40% for internal search tools.",
            "Collaborated with cross-functional teams to implement new features for the cloud platform dashboard.",
            "Conducted code reviews and wrote comprehensive unit tests achieving 95% code coverage."
        ]
    },
    {
        id: 2,
        role: "Full Stack Developer",
        company: "Tech Startups Inc.",
        date: "Jan 2023 - Apr 2024",
        description: [
            "Built and deployed a responsive e-commerce web application using Next.js and Firebase.",
            "Integrate Stripe payment gateway and implemented secure user authentication with Auth0.",
            "Designed and implemented RESTful APIs to support mobile app functionality."
        ]
    },
    {
        id: 3,
        role: "Frontend Developer",
        company: "Creative Studio",
        date: "Jun 2022 - Dec 2022",
        description: [
            "Developed interactive user interfaces using React and Tailwind CSS, translating Figma designs into pixel-perfect code.",
            "Improved website performance and SEO scores, resulting in a 25% increase in organic traffic.",
            "Managed content updates and maintenance for client websites using various CMS platforms."
        ]
    }
];

export default function Experience() {
    return (
        <section className={styles.experienceSection} id="experience">
            <div className={styles.sectionHeader}>
                <span className={styles.sectionNumber}>02.</span>
                <h2 className={styles.sectionTitle}>Where I've Worked</h2>
                <div className={styles.sectionLine}></div>
            </div>

            <div className={styles.experienceList}>
                {experiences.map((exp) => (
                    <div key={exp.id} className={styles.card}>
                        {/* Logo Placeholder */}
                        <div className={styles.logoContainer}>
                            <Briefcase size={24} />
                        </div>

                        <div className={styles.contentContainer}>
                            <div className={styles.headerRow}>
                                <h3 className={styles.role}>{exp.role}</h3>
                                <span className={styles.dateBadge}>{exp.date}</span>
                            </div>
                            <span className={styles.company}>{exp.company}</span>

                            <ul className={styles.descriptionList}>
                                {exp.description.map((item, index) => (
                                    <li key={index} className={styles.descriptionItem}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
