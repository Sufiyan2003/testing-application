import React from "react";
import Card from "../component/Card";

function Experience() {
  return (
    <div className="about-container flex flex-col items-center">
      <div className="text-container">
        <h1>Experience</h1>
        <div className="experience-containers flex flex-row items-center justify-center gap-9">
          <Card
            title={"hi"}
            content={"Here is my full stack development experience"}
          />
          <Card
            title={"hi"}
            content={"Here is my full stack Electrical experience"}
          />
          <Card
            title={"hi"}
            content={"Here are my machine learning endeavours"}
          />
        </div>
      </div>
    </div>
  );
}

export default Experience;
