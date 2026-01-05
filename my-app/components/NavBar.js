import { Navbar, Container, Nav } from 'react-bootstrap';
import { motion } from 'framer-motion';
import styles from '../styles/Navbar.module.css';

export default function RetroNavbar() {
  return (
    <Navbar className={styles.retroNavbar} expand="sm">
      <Container className={styles.navbarContainer}>
        <Navbar.Brand />

        <Nav className={`ms-auto d-none d-sm-flex ${styles.navLinks}`}>
          {['About', 'Experience', 'Work', 'Contact'].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Nav.Link href={`#${item.toLowerCase() === 'work' ? 'projects' : item.toLowerCase()}`} className={styles.navLink}>
                <span className={styles.navNumber}>0{index + 1}.</span> {item}
              </Nav.Link>
            </motion.div>
          ))}


        </Nav>
      </Container>
    </Navbar>
  );
}
