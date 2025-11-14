import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.heroSection}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            
            {/* Section Header: "01. About Me" */}
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01.</span>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <div className={styles.sectionLine}></div>
            </div>

            {/* Content Wrapper */}
            <div className={styles.contentWrapper}>
              <Row className="align-items-start">
                
                {/* Left Column: Text Content */}
                <Col md={7} lg={8}>
                  <div className={styles.textContent}>
                    <p>
                      Hello! My name is <span className={styles.highlight}>Hiru Wijemanne</span> and I enjoy creating things that live on
                      the internet. My interest in web development started back in 2012
                      when I decided to try editing custom Tumblr themes — turns out
                      hacking together a custom reblog button taught me a lot about
                      HTML & CSS!
                    </p>

                    <p>
                      Fast-forward to today, and I've had the privilege of working at
                      <span className={styles.highlight}> an advertising agency</span>, <span className={styles.highlight}>a start-up</span>, <span className={styles.highlight}>a huge corporation</span>, and
                      <span className={styles.highlight}> a student-led design studio</span>. My main focus these days is building
                      accessible, inclusive products and digital experiences at
                      <a href="#" className={styles.highlight}> Upstatement</a> for a variety of clients.
                    </p>

                    <p>
                      I also recently <a href="#" className={styles.highlight}>launched a course</a> that covers everything you need
                      to build a web app with the Spotify API using Node & React.
                    </p>

                    {/* Technologies Section */}
                    <div className={styles.techSection}>
                      <p className={styles.techTitle}>Here are a few technologies I've been working with recently:</p>
                      <div className={styles.techGrid}>
                        <div className={styles.techItem}>JavaScript (ES6+)</div>
                        <div className={styles.techItem}>TypeScript</div>
                        <div className={styles.techItem}>React</div>
                        <div className={styles.techItem}>Eleventy</div>
                        <div className={styles.techItem}>Node.js</div>
                        <div className={styles.techItem}>WordPress</div>
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Right Column: Profile Image */}
                <Col md={5} lg={4}>
                  <div className={styles.profileImageContainer}>
                    <div className={styles.profileImageWrapper}>
                      <img
                        src="/images/img2.jpg"
                        alt="Hiru Wijemanne"
                        className={styles.profileImage}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
                        }}
                      />
                    </div>
                    <div className={styles.profileBackLayer}></div>
                  </div>
                </Col>

              </Row>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  );
}