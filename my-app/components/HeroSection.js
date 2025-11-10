import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import styles from "../styles/HeroSection.module.css"; // Imports the CSS module

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Triggers the animation shortly after the component mounts
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  // Builds the class strings using the 'styles' object
  // Adds the 'loaded' class when isLoaded is true
  const backgroundClasses = `${styles['hero-background']} ${isLoaded ? styles.loaded : ""}`;
  const overlayClasses = `${styles['hero-overlay']} ${isLoaded ? styles.loaded : ""}`;

  return (
    // Uses the 'styles' object to apply the main class
    <section id="home" className={styles['hero-section']}>
      
      {/* Applies the dynamic class strings */}
      <div className={backgroundClasses} />
      <div className={overlayClasses} />

      {/* Combines Bootstrap classes with your module class */}
      <Container className={`text-center ${styles['hero-content']}`}>
        <Row className="align-items-center" style={{ minHeight: "80vh" }}>
          <Col>
            <h1 className="display-2 fw-bold mb-3">Hiru Wijemanne</h1>
            <p className="lead mb-5">Full-Stack Developer</p>
            <br />

            {/* Applies the 'intro-text' class from your module */}
            <p className={`lead mb-4 ${styles['intro-text']}`}>
              Hey! I'm a Toronto-based full-stack developer with a passion for
              crafting efficient and scalable web applications. I love turning
              complex problems into elegant solutions.
              <br />
              <br />
              <b>Let's build something amazing together.</b>
            </p>

            {/* CTA Buttons */}
            <div className="mt-5">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                className="me-3 px-5 py-3"
              >
                View My Work
              </Button>
              <Button
                href="#contact"
                variant="outline-light"
                size="lg"
                className="px-5 py-3"
              >
                Get in Touch
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}