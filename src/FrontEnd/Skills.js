import React from "react";
import "../assets/Skills.css";
import Card from "../component/Card";

function Skills() {
  return (
    <div className="skill-container" id="skills">
      <div className="skill-header">
        <h1>Skills</h1>
        <div className="skill-cards flex-none">
          {/* <CustomCard title={"FirstCard"} content={"hello"} />
          <CustomCard title={"SecondCard"} content={"hello"} />
          <CustomCard title={"ThirdCard"} content={"hello"} /> */}
          <Card title={"MERN Stack Development"} content={"hello"} />
          <Card title={"Electrical Engineering"} content={"hello"} />
          <Card title={"Projects"} content={"hello"} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
