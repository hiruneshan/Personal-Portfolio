import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/HeroSection.module.css"

export default function heroSection() {
  return (
    <section className={styles.heroSection}>
      <Container>
        <Row className="justify-content-center">
          {/* Use Bootstrap Col to manage the max-width */}
          <Col md={10} lg={9}>
            {/* 1. THE TERMINAL WINDOW */}
            <div className={styles.terminalWindow}>
              
             
              <div className={styles.terminalHeader}>
                <div className={styles.windowButtons}>
                  <div className={`${styles.dot} ${styles.dotActive}`}></div>
                  <div className={styles.dot}></div>
                  <div className={styles.dot}></div>
                </div>
                <div className={styles.terminalTitle}>
                  <span>H.WIJEMANNE_PORTFOLIO - C:\</span>
                </div>
              </div>

              {/* 3. THE TERMINAL CONTENT */}
              <div className={styles.terminalContent}>
                
                {/* Line 1: Typing animation */}
                <div className={styles.prompt}>
                  <span className={styles.promptSymbol}></span>
                  {/* This class handles the typing */}
                  <p className={styles.animateType1}>
                    &gt; hiru.wijemanne --init
                  </p>
                </div>

                {/* Line 2: First fade-in */}
                <p className={`${styles.animateType2} ${styles.textShadowGreen}`}>
                  Initializing portfolio...
                </p>

                {/* Line 3: Second fade-in (group) */}
                <div className={styles.animateType3}>
                  <p>&gt; Hey! I'm Hiru.</p>
                  <p>&gt; A Toronto based Full Stack Developer, trying to make things cooler!.</p>
                  <p>
                    &gt;{" "}
                    <span className={styles.promptHighlight}>
                      Explore my work below.
                    </span>
                  </p>
                </div>

                {/* Line 4: Blinking cursor */}
                <div className={styles.prompt}>
                  <span className={styles.promptSymbol}>&gt;</span>
                  {/* This class handles the blinking cursor */}
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