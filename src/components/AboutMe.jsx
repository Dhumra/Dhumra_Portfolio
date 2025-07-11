// src/components/AboutMe.jsx
import { Row, Col, Container } from "react-bootstrap";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import TrackVisibility from "react-on-screen";
import photo from "../assets/photo1.png";
import resume from '../assets/res.pdf';

export const AboutMe = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <section className="about-me" id="about">
      {/* <Particles
        id="tsparticles-about"
        init={particlesInit}
        options={{
          background: { color: { value: "#000" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: false }, resize: true },
          },
          particles: {
            color: { value: "#ffffff" },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: { enable: true, speed: 0.3, direction: "none", outModes: "bounce" },
            number: { value: 30, density: { enable: true, area: 800 } },
            opacity: { value: 0.2 },
            size: { value: 1 },
          },
          detectRetina: true,
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
        }}
      /> */}

      <div className="about-me-content">
        <TrackVisibility>
          {({ isVisible }) =>
           <Container>
            <Row className={`align-items-center ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
              <Col md={6} className="about-text">
                <h2 className="section-title">About Me</h2>
                  <p className="about-description">
    I’m Dhumravarna Ambre, a Computer Science graduate with a strong interest in backend development, system design, and building scalable, secure applications. From developing a blockchain-based e-waste management system to designing a drone surveillance platform accepted at an IEEE conference, I enjoy solving real-world problems through technology. I love diving into LeetCode, exploring distributed systems, and thinking about the architecture behind great software.
  </p>
  <p className="about-description">
    Outside of code, I enjoy watching anime (Naruto remains a favorite — the first website I built was a tribute to it!), playing table tennis, and stargazing on clear nights.
  </p>
                <div className="button-group">
                  <button onClick={() => window.open(resume, "_blank")}>
                    Download Resume
                  </button>
                  <button onClick={() => document.getElementById("connect").scrollIntoView({ behavior: "smooth" })}>
                    Contact Me
                  </button>
                </div>
              </Col>
              <Col md={6} className="about-photo-container">
                <div className="photo-circle">
                  <img src={photo} alt="Profile" />
                </div>
              </Col>
            </Row>
          </Container>
          }
        </TrackVisibility>
      </div>
    </section>
  );
};