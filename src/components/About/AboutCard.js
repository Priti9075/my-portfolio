import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Priti Shinde </span>
            from <span className="purple"> Pune, India.</span>
            <br /> I am a third year student pursuing computer engineering at government college of engineering and research avasari.
            
            
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> exploring new things
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Priti</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
