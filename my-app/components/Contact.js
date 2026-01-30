
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";
import SocialLinks from "./SocialLinks";
import ContactGrid from "./ContactGrid";

import homeStyles from "../styles/Home.module.css";

export default function Contact() {
    return (
        <section id="contact" style={{ position: 'relative', overflow: 'hidden' }}>
            <ContactGrid />
            <div className={styles.contactSection}>
                <Container>
                    <Row className="justify-content-center text-center">
                        <Col md={10} lg={8}>
                            <h2 className={styles.title}>Get in Contact</h2>
                            <p className={styles.description}>
                                I’m currently looking for a summer internship and new opportunities. My inbox is always open. Thank you for checking out my work!
                            </p>
                            <a href="mailto:hiruneshan@gmail.com" className={styles.emailButton}>
                                Say Hello
                            </a>
                            <div className="d-block d-md-none mt-4">
                                <SocialLinks isMobile={true} />
                            </div>
                        </Col>
                    </Row>
                </Container>
                <div className="text-center py-4" style={{ fontFamily: '"SF Mono", "Fira Code", monospace', fontSize: '0.9rem', color: '#8892b0', marginTop: '100px', pointerEvents: 'auto' }}>
                    Built and designed by <a href="https://github.com/hiruneshan/Personal-Portfolio" target="_blank" rel="noopener noreferrer" className={homeStyles.linkHighlight}>Hiru Wijemanne</a>
                </div>
            </div>
        </section>
    );
}
