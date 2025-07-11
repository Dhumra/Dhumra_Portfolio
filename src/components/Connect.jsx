import { Container, Row, Col } from "react-bootstrap";

export const Connect = () => {
  return (
    <section className="connect-section" id="connect">
      <Container>
        <h2 className="section-title"> Let’s Connect!</h2>
        <Row>
          <Col md={8}>
            <p className="connect-text">
              Let’s connect — whether it’s talking about the latest technlogies, or building impactful systems together!
            </p>
            

            <div className="connect-buttons">
              <a href="https://www.linkedin.com/in/dambre" target="_blank" rel="noreferrer">
                <button>Connect on LinkedIn</button>
              </a>
              <a href="mailto:dhumravarnaambre36@gmail.com">
                <button>Send an Email</button>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};