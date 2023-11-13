import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import OneForAll from "../../Assets/Projects/OneForAll.jpeg";
import automatic_accident from "../../Assets/Projects/automatic_accident.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={OneForAll}
              isBlog={false}
              title="OneForAll"
              description="Developed an online platform with speech interpretation, text-to-speech, and a comprehensive resource hub for individuals with speech impairments and hearing loss. Integrated virtual picture boards for train announcements and advocated inclusive communication in public spaces"
              ghLink="https://github.com/Priti9075/OneForAll"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={automatic_accident}
              isBlog={false}
              title="Automatic-Accident-Prevention"
              description="Enhanced road safety with synchronized motor-controlled road blocker activation and automatic Zebra Crossing deployment. Integrated with the traffic system for safe pedestrian passage and efficient traffic flow"
              ghLink="https://github.com/Priti9075/automatic-accident-prevation-system"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
