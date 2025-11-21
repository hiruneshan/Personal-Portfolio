import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css'; // Adjust path if needed

// Extracted the SVG icon from the HTML
const LogoIcon = () => (
  <div className={styles.logoContainer}>
    <svg
      id="logo"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      viewBox="0 0 84 96"
      className={styles.logoSvg}
    >
      <title>Logo</title>
      <g transform="translate(-8.000000, -2.000000)">
        <g transform="translate(11.000000, 5.000000)">
          <polygon
            id="Shape"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            points="39 0 0 22 0 67 39 90 78 68 78 23"
            fill="none"
          />
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="currentColor"
            fontSize="45px"
            fontWeight="bold"
            className={styles.logoText}
          >
            B
          </text>
        </g>
      </g>
    </svg>
  </div>
);

export default function RetroNavbar() {
  return (
    <Navbar as="header" className={styles.retroNavbar} expand="sm" sticky='top'>
      <Container className={styles.navbarContainer}>

        <Navbar.Brand href="#home" className={styles.navbarBrand}>
          <LogoIcon />
        </Navbar.Brand>

        <Nav className={`ms-auto d-none d-sm-flex ${styles.navLinks}`}>
          <Nav.Link href="#about" className={styles.navLink}>
            <span className={styles.navNumber}>01.</span> About
          </Nav.Link>
          <Nav.Link href="#experience" className={styles.navLink}>
            <span className={styles.navNumber}>02.</span> Experience
          </Nav.Link>
          <Nav.Link href="#work" className={styles.navLink}>
            <span className={styles.navNumber}>03.</span> Work
          </Nav.Link>
          <Nav.Link href="#contact" className={styles.navLink}>
            <span className={styles.navNumber}>04.</span> Contact
          </Nav.Link>
          <div className={styles.resumeButtonContainer}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeButton}>
              Resume
            </a>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}