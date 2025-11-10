import React from "react";
import styles from "../styles/SocialLinks.module.css";



// SVG path for GitHub
const GitHubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.72c0 .27.18.58.69.48A10 10 0 0 0 22 12 10 10 0 0 0 12 2Z"></path>
  </svg>
);

// SVG path for LinkedIn
const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-11 5v10h4V8h-4Zm-2-2v2h8v-2H6Zm13 2v10h-4V8h4Z"></path>
  </svg>
);

export default function SocialLinks() {
  return (
    <div className={styles.socialContainer}>
      <a
        href="https://github.com/hiruneshan" // <-- UPDATE THIS LINK
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
        aria-label="GitHub"
      >
        <GitHubIcon />
      </a>
      <a
        href="www.linkedin.com/in/hiru-wijemanne" // <-- UPDATE THIS LINK
        target="_blank"
        rel="noopener noreferrer"
        className={styles.socialIcon}
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}