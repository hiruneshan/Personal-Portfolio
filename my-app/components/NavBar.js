import { Navbar, Container, Nav } from 'react-bootstrap';
import styles from '../styles/Navbar.module.css';

export default function RetroNavbar() {
  return (
    <Navbar className={styles.retroNavbar} expand="sm">
      <Container className={styles.navbarContainer}>
        <Navbar.Brand />

        <Nav className={`ms-auto d-none d-sm-flex ${styles.navLinks}`}>
          <Nav.Link href="#about" className={styles.navLink}>
            <span className={styles.navNumber}>01.</span> About
          </Nav.Link>
          <Nav.Link href="#experience" className={styles.navLink}>
            <span className={styles.navNumber}>02.</span> Experience
          </Nav.Link>
          <Nav.Link href="#projects" className={styles.navLink}>
            <span className={styles.navNumber}>03.</span> Work
          </Nav.Link>
          <Nav.Link href="#contact" className={styles.navLink}>
            <span className={styles.navNumber}>04.</span> Contact
          </Nav.Link>

          <a className={styles.resumeButton}>Resume</a>
        </Nav>
      </Container>
    </Navbar>
  );
}
