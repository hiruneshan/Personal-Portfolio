import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/HeroSection.module.css";

// No longer need useState or useRouter for this static layout
export default function HeroSection() {
  return (
    <section id="home" className={styles.heroSection}>
      {/* The vignetteOverlay is removed, the gradient now handles this */}

      <Container>
        <Row className="align-items-center justify-content-center">
          
          {/* --- Left Column: Introduction Text --- */}
          {/* On mobile (md and down), this column will stack below the image */}
          {/* This is lg={7} */}
          <Col lg={7} md={6} className={styles.heroTextCol}>
            <div className={styles.heroText}>
              <span className={styles.heroIntro}>Hi, I'm</span>
              <h1 className={styles.heroName}>Hiru Wijemanne</h1>
              <p className={styles.heroSubtitle}>I'm Full stack software developer based in Toronto, Canada. I like  build cool things for the world. We shall make create something cool together</p>
            </div>
          </Col>

          
          <Col lg={5} md={6} className={styles.heroImageCol}>
            <div className={styles.heroImageWrapper}>
              <img
                src="../images/img3.png"
                alt="Hiru Wijemanne"
                className={styles.heroImage}
                onError={(e) => {
                  // Fallback in case the image fails to load
                  e.target.onerror = null; 
                  e.target.src="https://placehold.co/600x600/35A29F/FFFFFF?text=H.W.";
                }}
              />
            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
}