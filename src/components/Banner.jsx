// src/components/Banner.jsx
import { Container, Row, Col } from "react-bootstrap";
import { ReactTyped } from "react-typed";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <div className="banner-content">
        <Container>
          <Row>
            <Col>
              <h1 className="main-title">
                Hi, I’m <span className="highlight">Dhumravarna</span>
              </h1>
              <h2 className="sub-title">
                I’m a{" "}
                <span className="neon-text">
  <ReactTyped
    strings={["Backend Developer", "System Designer", "Software Engineer"]}
    typeSpeed={60}
    backSpeed={30}
    loop
  />
</span>
              </h2>
              <p className="description">
                I craft clean backends, resilient systems, and seamless integrations.{" "}
                Driven by clarity, obsessed with correctness, and always in dark mode.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};