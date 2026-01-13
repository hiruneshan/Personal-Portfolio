
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/Contact.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.contactSection}>
            <Container>
                <Row className="justify-content-center text-center">
                    <Col md={10} lg={8}>
                        <span className={styles.sectionNumber}>04. Contact</span>
                        <h2 className={styles.title}>Get In Touch</h2>
                        <p className={styles.description}>
                            I’m currently looking for a summer internship and new opportunities. My inbox is always open. Thank you for checking out my work!
                        </p>
                        <a href="mailto:hiruneshan@gmail.com" className={styles.emailButton}>
                            Say Hello
                        </a>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
