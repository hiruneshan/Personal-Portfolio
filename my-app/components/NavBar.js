import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css'; // Adjust path if needed

export default function RetroNavbar() {
  return (
    <Navbar as="header" className={styles.retroNavbar} expand="sm" sticky='top'>
      <Container className={styles.navbarContainer}>

        <Navbar.Brand href="#home" className={styles.navbarBrand}>
          {/* Logo Removed */}
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