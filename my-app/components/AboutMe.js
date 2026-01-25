import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import PixelatedImage from './PixelatedImage';
import { Row, Col } from "react-bootstrap";
import styles from "../styles/AboutSection.module.css";
import AboutGrid from './AboutGrid';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const currentRef = imgRef.current;
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
      <div className={styles.aboutContainer}>

        {/* Content Wrapper */}
        <div className={styles.contentWrapper}>
          {/* Top Row: Profile + Description */}
          <Row className="align-items-start">
            <Col md={5} lg={3} className="mb-5 mb-md-0">
              <div
                ref={imgRef}
                className={`${styles.profileGroup} ${isVisible ? styles.popIn : ''}`}
              >
                <div className={styles.profileFrame}>
                  <div className={styles.decorationSquare}></div>
                  <PixelatedImage
                    src="/images/img2.jpeg"
                    alt="Hiru Wijemanne"
                    className={styles.profileImage}
                    priority
                  />
                </div>
              </div>
            </Col>

            <Col md={7} lg={9}>
              <div className={styles.terminalBox}>
                <div className={styles.speechTail}></div>
                <h3 className={styles.terminalHeader}># about_me</h3>
                <div className={styles.terminalBody}>
                  <p>
                    Hi, I’m Hiru I’m a software development student in Toronto, Canada, who loves building things with code. I enjoy backend development, solving tricky problems, and learning new technologies. When I’m not coding, you’ll probably find me skating, traveling, or trying new food.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          {/* Bottom Row: Tools Box (Full Width of top content) */}
          <Row className="mt-4">
            <Col xs={12}>
              <div className={styles.toolsBox}>
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
            </Col>
          </Row>
        </div>

      </div>
      <AboutGrid />
    </section>
  );
}