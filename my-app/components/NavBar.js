import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css'; // Adjust path if needed

// Extracted the SVG icon from the HTML
const LogoIcon = () => (
  <svg
    fill="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    className={styles.logoSvg}
  >
    <path d="M4 2h16v20H4V2zm2 2v2h12V4H6zm0 4v2h4V8H6zm6 0v2h6V8h-6zm-6 4v2h4v-2H6zm6 0v2h6v-2h-6zm-6 4v2h4v-2H6zm6 0v2h6v-2h-6z"></path>
  </svg>
);

export default function RetroNavbar() {
  return (
    <Navbar as="header" className={styles.retroNavbar} expand="sm" sticky='top'>
      <Container className={styles.navbarContainer}>
       
        <Navbar.Brand href="#home" className={styles.navbarBrand}>
          <LogoIcon />
          <span className={styles.brandText}>C:\Hiru_Wijemanne</span>
        </Navbar.Brand>

        <Nav className={`ms-auto d-none d-sm-flex ${styles.navLinks}`}>
          <Nav.Link href="#home" className={styles.navLink}>
            HOME
          </Nav.Link>
          <Nav.Link href="#about" className={styles.navLink}>
            ABOUT
          </Nav.Link>
          <Nav.Link href="#contact" className={styles.navLink}>
            CONTACT
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}