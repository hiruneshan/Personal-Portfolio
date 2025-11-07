import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 200);
  }, []);

  const darkBlue = "#10172A";

  // ✅ IMAGE background + spotlight effect
  const backgroundBase = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 0,
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(255,255,255,0.4) 0%,
        rgba(255,255,255,0) 5%,
        rgba(255,255,255,0) 100%
      ),
        url("/images/image.png")
    `,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    transition: "background-position 3s ease-out, background-size 3s ease-out",
    backgroundSize: "100% 50px, cover",
  };

  const backgroundLoaded = {
    backgroundPosition: "center bottom",
    backgroundSize: "100% 100%, cover",
    backgroundImage: `
      linear-gradient(
        to bottom,
        rgba(255,255,255,0) 0%,
        rgba(255,255,255,0) 100%
      ),
        url("/images/image.png")
    `,
  };

  // ✅ DARKEN LAYER
  const darkOverlayBase = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    zIndex: 1,
    backgroundColor: darkBlue,
    opacity: 1,
    transition: "opacity 3s ease-out",
    pointerEvents: "none",
  };

  const darkOverlayLoaded = {
    opacity: 0.45, // Final darkening level (0 = none, 1 = full dark)
  };

  const contentStyle = {
    zIndex: 2,
    position: "relative",
    opacity: 0,
    animation: `fadeInText 3s ease-out forwards`,
    animationDelay: "0.5s",
  };

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        padding: "100px 0",
        overflow: "hidden",
        backgroundColor: darkBlue,
      }}
    >
      <style>{`
        @keyframes fadeInText {
          to { opacity: 1; }
        }
      `}</style>

      {/* ✅ Background image + spotlight animation */}
      <div
        style={isLoaded ? { ...backgroundBase, ...backgroundLoaded } : backgroundBase}
      />

      {/* ✅ Darkening overlay */}
      <div
        style={isLoaded ? { ...darkOverlayBase, ...darkOverlayLoaded } : darkOverlayBase}
      />

      <Container className="text-center" style={contentStyle}>
        <Row className="align-items-center" style={{ minHeight: "80vh" }}>
          <Col>
            <h1 className="display-2 fw-bold mb-4" style={{ color: "white" }}>
              Hiru Wijemanne
            </h1>

            <p className="lead mb-5" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Full-Stack Developer
            </p>

            <Button variant="primary" size="lg" className="me-3">
              View Projects
            </Button>

            <Button variant="outline-light" size="lg">
              Download Resume
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
