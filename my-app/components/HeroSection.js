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
    opacity: 0.45,
  };

  const contentStyle = {
    zIndex: 2,
    position: "relative",
    opacity: 0,
    transform: "translateY(30px)",
    animation: `fadeInUp 1.8s ease-out forwards`,
    animationDelay: "0.6s",
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
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
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
            <h1 className="display-2 fw-bold mb-3" style={{ color: "white" }}>
              Hiru Wijemanne
            </h1>
               <p className="lead mb-5" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
              Full-Stack Developer
            </p>
            <br />

            {/* ✅ NEW TEXT */}
            <p
              className="lead mb-4"
              style={{ color: "rgba(255, 255, 255, 0.85)", maxWidth: "700px", margin: "0 auto" }}
            >
              Hey! I'm a Toronto-based full-stack developer with a passion for 
              crafting efficient and scalable web applications. With a strong
              foundation in both front-end and back-end technologies.
              <br />Do you wanna see my skills? <b>HIRE ME!</b>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
