import React from "react";
import CustomCard from "../component/CustomCard";
import "../assets/Skills.css";

function Skills() {
  return (
    <div className="skill-container" id="skills">
      <div className="skill-header">
        <h1>Skills</h1>
        <div className="skill-cards">
          <CustomCard title={"FirstCard"} content={"hello"} />
          <CustomCard title={"SecondCard"} content={"hello"} />
          <CustomCard title={"ThirdCard"} content={"hello"} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
