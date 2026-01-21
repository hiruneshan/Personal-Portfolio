import React, { useEffect, useRef, useState } from "react";
import Image from "next/image"; // Added Image import
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/AboutSection.module.css";
import AboutGrid from './AboutGrid';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const currentRef = imgRef.current; // Capture ref value
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold: 0.3 }
    );

    if (currentRef) observer.observe(currentRef);

    return () => {
      if (currentRef) observer.unobserve(currentRef); // Use captured value
    };
  }, []);

  return (
    <section id="about" className={styles.aboutSection}>
      <Container style={{ marginRight: '15%', position: 'relative', zIndex: 2 }}>
        <Row className="justify-content-center">
          <Col lg={9}>



            {/* Content Wrapper */}
            {/* Content Wrapper */}
            <div className={styles.contentWrapper}>
              <Row className="align-items-center justify-content-center">

                {/* Left Column: Profile - Swapped to Left */}
                <Col md={5} lg={4} className="mb-5 mb-md-0">
                  <div
                    ref={imgRef}
                    className={`${styles.profileGroup} ${isVisible ? styles.popIn : ''}`}
                  >
                    <div className={styles.profileFrame}>
                      <div className={styles.decorationSquare}></div>
                      <Image
                        src="/images/img2.jpg"
                        alt="Hiru Wijemanne"
                        width={400}
                        height={400}
                        className={styles.profileImage}
                        priority
                      />
                    </div>
                    <h2 className={styles.pixelName}>
                      HIRU<br />WIJEMANNE
                    </h2>
                  </div>
                </Col>

                {/* Right Column: Text Content - Swapped to Right */}
                <Col md={7} lg={7}>
                  <div className={styles.terminalBox}>
                    {/* Speech Bubble Tail */}
                    <div className={styles.speechTail}></div>

                    <h3 className={styles.terminalHeader}># ABOUT_ME.EXE</h3>

                    <div className={styles.terminalBody}>
                      <p>
                        I read through numerous stacks, debugged hundreds of lines, and built experiences that bridge the gap between retro vibes and modern performance.
                      </p>
                      <p>
                        Hi, I’m Hiru. I’m a software development student in Toronto, Canada, who loves building things with code. I enjoy backend development, solving tricky problems, and learning new technologies.
                      </p>
                      <p>
                        Maybe you&apos;re looking for someone who doesn&apos;t just write code, but crafts digital adventures. <span className={styles.highlight}>Again, you&apos;ve found the perfect match.</span>
                      </p>

                      {/* Technologies Section */}
                      <div className={styles.techSection}>
                        <p className={styles.techTitle}>Here are a few technologies I&apos;ve been working with recently:</p>
                        <div className={styles.techGrid}>
                          <div className={styles.techItem}>C</div>
                          <div className={styles.techItem}>C++</div>
                          <div className={styles.techItem}>Python</div>
                          <div className={styles.techItem}>Java</div>
                          <div className={styles.techItem}>JavaScript</div>
                          <div className={styles.techItem}>React</div>
                          <div className={styles.techItem}>Node.js</div>
                          <div className={styles.techItem}>Express.js</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>

              </Row>
            </div>

          </Col>
        </Row>
      </Container>
      <AboutGrid />
    </section>
  );
}