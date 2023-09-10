import React from "react";
import me from "../pictures/me.jpg";
import "../assets/About.css";
import { Row, Col, Button } from "reactstrap";

function About() {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={me} alt="hero" className="actual-image" />
      </div>
      <div className="text-container">
        <p>
          Hi, my name is Sufiyan Sadiq and welcome to my website, this is simply
          to test out how far i can push my react skills and maybe make this
          into my online cv, I have a background in electrical engineering and i
          am enthusiastic about hardware design and recently i am diving into
          the deep world of programming. Contact me if you have any question.
        </p>
        <Button placeholder="Contact Me" color="red">Contact Me</Button>
      </div>
    </div>
  );
}

export default About;
