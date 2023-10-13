import React from "react";
import "../assets/Skills.css";
import { Progress } from "reactstrap";
const Skills = () => {
  return (
    <div className="skill-container" id="skills">
      <div className="heading">
        <h1>Skills</h1>
      </div>
      <div className="skill-content">
        <div className="container">
          <p>NodeJs</p>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="70"
              aria-valuemin="0"
              aria-valuemax="100"
              style={{ width: "70%" }}
            >
              70%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
