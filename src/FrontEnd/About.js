import React from "react";
import me from "../pictures/me.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/About.css";
import { Row, Col, Button } from "reactstrap";

function About() {
  return (
    <div className="about-container" id="about">
      <div className="text-container">
        <h1 href="#about">About</h1>
        <p>
          Hi, my name is Sufiyan Sadiq and welcome to my website, this is simply
          to test out how far i can push my react skills and maybe make this
          into my online cv, I have a background in electrical engineering and i
          am enthusiastic about hardware design and recently i am diving into
          the deep world of programming. Contact me if you have any question.
        </p>
      </div>
    </div>
  );
}

export default About;
