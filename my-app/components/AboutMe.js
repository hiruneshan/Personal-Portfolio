import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/AboutSection.module.css";

export default function AboutSection() {
  return (
    <section id="about" className={styles.aboutSection}>
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
                      Hi, I’m Hiru
                      I’m a software development student in Toronto, Canada, who loves building things with code. I enjoy backend development, solving tricky problems, and learning new technologies. When I’m not coding, you’ll probably find me skating, traveling, or trying new food.
                    </p>


                    {/* <p>
                      I also recently <a href="#" className={styles.highlight}>launched a course</a> that covers everything you need
                      to build a web app with the Spotify API using Node & React.
                    </p> */}

                    {/* Technologies Section */}
                    <div className={styles.techSection}>
                      <p className={styles.techTitle}>Here are a few technologies I've been working with recently:</p>
                      <div className={styles.techGrid}>
                        <div className={styles.techItem}>C</div>
                        <div className={styles.techItem}>C++</div>
                        <div className={styles.techItem}>Python</div>
                        <div className={styles.techItem}>JavaScript</div>
                        <div className={styles.techItem}>Node.js</div>
                        <div className={styles.techItem}>React</div>
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