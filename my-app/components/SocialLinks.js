import React from "react";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";
import styles from "../styles/SocialLinks.module.css";

// Custom Duolingo Icon SVG
const DuolingoIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24"
    height="24"
  >
    <path d="M12.035 1.002c-2.31 0-4.313 1.02-5.74 2.645a8.43 8.43 0 0 0-1.87 3.742c-.22 1.12-.22 2.27-.02 3.4.15.86.4 1.69.74 2.47.66 1.53 1.68 2.87 2.96 3.89.64.51 1.34.93 2.09 1.25.75.32 1.55.48 2.36.48.81 0 1.61-.16 2.36-.48.75-.32 1.45-.74 2.09-1.25 1.28-1.02 2.3-2.36 2.96-3.89.34-.78.59-1.61.74-2.47.2-1.13.2-2.28-.02-3.4a8.43 8.43 0 0 0-1.87-3.742c-1.427-1.625-3.43-2.645-5.74-2.645h-.05zm-.05 2c1.76 0 3.3.77 4.39 2.02.84.96 1.35 2.18 1.48 3.47.13 1.29-.13 2.6-.76 3.75-.63 1.15-1.6 2.08-2.76 2.64-1.16.56-2.47.66-3.72.28-1.25-.38-2.32-1.2-3.03-2.32-.71-1.12-1.02-2.46-.88-3.77.14-1.31.7-2.51 1.6-3.43 1.1-1.12 2.6-1.8 4.2-1.8h.48z" />
    <path d="M7.76 18.26c-1.36.7-2.9 1.08-4.52 1.08-1.06 0-2.09-.16-3.06-.46.36 2.3 2.35 4.06 4.75 4.06 1.9 0 3.56-1.1 4.35-2.71-.56-.6-1.06-1.26-1.52-1.97zm8.48 0c-.46.71-.96 1.37-1.52 1.97.79 1.61 2.45 2.71 4.35 2.71 2.4 0 4.39-1.76 4.75-4.06-.97.3-2 .46-3.06.46-1.62 0-3.16-.38-4.52-1.08z" />
  </svg>
);

export default function SocialLinks({ isMobile = false }) {
  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/hiru-wijemanne",
      icon: <Linkedin size={24} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/hiruneshan",
      icon: <Github size={24} />,
    },
    {
      name: "Email",
      url: "mailto:hiru.wijemanne@example.com", // Update with actual email
      icon: <Mail size={24} />,
    },
    {
      name: "Instagram",
      url: "https://instagram.com", // Update with actual URL
      icon: <Instagram size={24} />,
    },
    {
      name: "Duolingo",
      url: "https://www.duolingo.com", // Update with actual URL
      icon: <DuolingoIcon />,
    },
  ];

  return (
    <div className={isMobile ? styles.mobileSocials : styles.socialContainer}>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialIcon}
          aria-label={link.name}
        >
          {link.icon}
          {link.name === "Duolingo" && !isMobile && (
            <span className={styles.tooltip}>
              let&apos;s learn something new!
            </span>
          )}
        </a>
      ))}
    </div>
  );
}