import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/HeroSection.module.css";

export default function heroSection() {
  return (
    <section id="about" className={styles.heroSection}>
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={9}>
            {/* 1. THE TERMINAL WINDOW */}
            <div className={styles.terminalWindow}>
              
              {/* 2. THE TERMINAL HEADER (Updated Title from Image) */}
              <div className={styles.terminalHeader}>
                <div className={styles.windowButtons}>
                  <div className={`${styles.dot} ${styles.dotActive}`}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
                <div className={styles.terminalTitle}>
                  {/* Title from the image */}
                  <span>Hiru.Wijemanne_PORTFOLIO - C:\ABOUT</span>
                </div>
              </div>

              {/* 3. THE TERMINAL CONTENT (Modified) */}
              <div className={styles.terminalContent}>
                
                {/* Line 1: The command from the image */}
                <div className={styles.prompt}>
                  {/* <span className={styles.promptSymbol}>C:\</span> */}
                  {/* Use a simple p tag for static text, not animated */}
                  <p style={{ display: 'inline-block', marginLeft: '0.5rem' }}>
                    &gt; dir about.me
                  </p>
                </div>

                {/* Line 2: Two-column layout */}
                <Row className="my-3"> {/* my-3 adds vertical margin */}
                  
                  {/* Left Column: Image Box with NEW LAYERED STRUCTURE */}
                  <Col md={5} lg={4}>
                    {/* NEW: Layered container structure */}
                    <div className={styles.profileImageContainer}>
                      <div className={styles.profileBackLayer}></div>
                      <div className={styles.profileImageWrapper}>
                        <img
                          src="/images/img2.jpg" // Ensure this path is correct
                          alt="Profile"
                          className={styles.profileImage}
                        />
                      </div>
                    </div>
                  </Col>

                  <Col md={7} lg={8}>
                    {/* Simple <p> tags for the static text */}
                    <p>&gt; Hey there, I'm Hiru.</p>
                    <p>
                      &gt; I'm a full stack developer based in Toronto.
                    </p>
                    <p>
                      &gt; My journey into tech started with a fascination for
                      early computer interfaces, and that retro-futuristic
                      aesthetic still inspires my work today. I thrive on
                      building things that are not only functional and intuitive
                      but also have a unique character.
                    </p>
                    <p>&gt; Let's create something cool together!</p>
                  </Col>
                </Row>

                {/* Line 3: Blinking cursor (re-using your existing style) */}
                <div className={styles.prompt}>
                  <span className={styles.promptSymbol}>&gt;</span>
                  <div className={styles.animateCursor}></div>
                </div>

              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}