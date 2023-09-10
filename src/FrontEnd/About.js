import React from "react";
import me from "../pictures/me.jpg";
import "../assets/About.css";
import { Row, Col } from "reactstrap";

function About() {
  return (
    <div className="about-container">
      <div className="center-content">
        <div className="text-container">
          <h1>About</h1>
          <p>
            Hello there! I'm Muhammad Sufiyan Sadiq, a passionate third-year
            electrical engineering student at Nust. I'm on an exciting journey
            to explore the frontiers of technology, with a strong focus on new
            inventions and research in machine learning and computer science.
          </p>
          <p>
            I'm constantly driven by the pursuit of innovation and the potential
            for technology to make the world a better place. As a hardware
            enthusiast, I'm dedicated to creating cutting-edge designs and
            solutions that can positively impact society.
          </p>
          <p>
            My ultimate goal is to harness the power of technology to bridge the
            gap between imagination and reality. I'm on a mission to implement
            new designs and make them accessible to the public, enabling
            everyone to experience the benefits of these groundbreaking
            innovations.
          </p>
        </div>
        <div className="image-container">
          <img
            src={me}
            alt="hero"
            className="actual-image"
            width="384"
            height="512"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
