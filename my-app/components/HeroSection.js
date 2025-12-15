import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/HeroSection.module.css";
import HeroGrid from "./HeroGrid";

export default function HeroSection() {
  return (
    <section id="home" className={styles.heroSection}>
      {/* HeroGrid as background */}
      <HeroGrid />

      <Container style={{ position: 'relative', zIndex: 2 }}>
        <Row className="align-items-center">
          {/* --- Left Column: Jumbotron Text --- */}
          <Col lg={7} md={8} className={styles.heroTextCol}>
            <div className={styles.jumbotron}>
              <span className={styles.heroIntro}>Hi, I'm</span>
              <h1 className={styles.heroName} data-text="Hiru Wijemanne">Hiru Wijemanne</h1>
              <p className={styles.heroSubtitle}>I'm Full stack software developer based in Toronto, Canada. I like build cool things for the world. We shall make create something cool together</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
