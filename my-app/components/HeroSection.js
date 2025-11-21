
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/HeroSection.module.css";
import SnakeGame from "./SnakeGame";

// No longer need useState or useRouter for this static layout
export default function HeroSection() {
  return (
    <section id="home" className={styles.heroSection}>
      {/* The vignetteOverlay is removed, the gradient now handles this */}

      <Container>
        <Row className="align-items-center justify-content-center">

          {/* --- Left Column: Jumbotron Text --- */}
          {/* On mobile (md and down), this column will stack below the image */}
          {/* This is lg={7} */}
          <Col lg={7} md={6} className={styles.heroTextCol}>
            <div className={styles.jumbotron}>
              <span className={styles.heroIntro}>Hi, I'm</span>
              <h1 className={styles.heroName} data-text="Hiru Wijemanne">Hiru Wijemanne</h1>
              <p className={styles.heroSubtitle}>I'm Full stack software developer based in Toronto, Canada. I like build cool things for the world. We shall make create something cool together</p>
            </div>
          </Col>


          {/* --- Right Column: Snake Game --- */}
          <Col lg={5} md={6} className={styles.heroImageCol}>
            <div className={styles.gameWrapper}>
              <SnakeGame />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}
