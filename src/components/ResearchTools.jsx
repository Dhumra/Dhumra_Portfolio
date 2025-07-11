import { Container, Row, Col } from "react-bootstrap";

export const ResearchTools = () => {
  return (
    <section className="research-tools-section" id="research">
      <Container>
        <h2 className="section-title">Research Interests & Tools</h2>
        <Row>
          {/* Interests */}
          <Col md={12}>
            <div className="interest-box">
              <h3 className="box-title">Research Interests</h3>
              <ul className="interest-list">
                <li> Distributed Systems</li>
                <li> Fault-tolerant Architecture</li>
                <li> Fin-Tech Systems</li>
              </ul>
            </div>
          </Col>

          {/* Skills */}
          <Col md={12}>
            <div className="tools-box">
              <h3 className="box-title">Tools & Skills</h3>
              <div className="tools-category">
                <strong>Languages:</strong>
                <div className="badge-grid">
                  {["Java", "Python", "JavaScript", "C", "C++", "C#", "Go", "Solidity", "HTML", "CSS", "SQL"].map((lang) => (
                    <span className="badge-item" key={lang}>{lang}</span>
                  ))}
                </div>
              </div>

              <div className="tools-category">
                <strong>Frameworks:</strong>
                <div className="badge-grid">
                  {["React", "ExpressJS", "Django", "Hyperledger Fabric", "Flask", "Spring"].map((fw) => (
                    <span className="badge-item" key={fw}>{fw}</span>
                  ))}
                </div>
              </div>

              <div className="tools-category">
                <strong>Cloud & DevOps:</strong>
                <div className="badge-grid">
                  {["AWS", "Google Cloud", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub"].map((tool) => (
                    <span className="badge-item" key={tool}>{tool}</span>
                  ))}
                </div>
              </div>

              <div className="tools-category">
                <strong>Databases & Tools:</strong>
                <div className="badge-grid">
                  {["MySQL", "DynamoDB", "MongoDB", "Firebase", "PostgreSQL", "Excel"].map((db) => (
                    <span className="badge-item" key={db}>{db}</span>
                  ))}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};