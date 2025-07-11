import { Container, Row, Col } from "react-bootstrap";

export const Education = () => {
  return (
    <section className="education-section" id="education">
      
      <Container>
        <h2 className="section-title"> Education</h2>
        <Row className="gy-4">
          {/* Master's Degree */}
          <Col md={6}>
            <div className="edu-card">
              <h3 className="edu-degree">Master of Science in Computer Science</h3>
              <h4 className="edu-institution">University of Massachusetts Amherst</h4>
              <p className="edu-dates">Feb 2025 – Dec 2026 (Expected)</p>
              {/* <p className="edu-gpa">GPA: 3.95 / 4.0</p> */}
              <p className="edu-courses"><strong>Relevant Courses: </strong>Artificial Intelligence , Theory and Practice of Software Engineering , Distributed and Operating Systems</p>
            </div>
          </Col>

          {/* Bachelor's Degree */}
          <Col md={6}>
            <div className="edu-card">
              <h3 className="edu-degree">Bachelor of Technology in Computer Science and Business Systems</h3>
              <h4 className="edu-institution">Ramrao Adik Institute of Technology (RAIT), Navi Mumbai</h4>
              <p className="edu-dates">Aug 2020 – May 2024</p>
              <p className="edu-gpa">GPA: 9.29 / 10</p>
              <p className="edu-courses"><strong>Relevant Courses: </strong> Data Structures and Algorithms, Operating Systems, Database Systems</p>
              <p className="edu-project"><strong>Final Project: Automateds seamless-mosaicking of public satellite-Images
</strong></p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};