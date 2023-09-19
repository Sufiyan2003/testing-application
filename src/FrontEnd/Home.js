import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "../assets/Home.css";
import hero from "../pictures/great-photo.jpg";
import linkedIn from "../pictures/linkedIn.png";
import facebook from "../pictures/facebook.png";
import instagram from "../pictures/instagram.png";
import github from "../pictures/github.png";
import { Button } from "reactstrap";

function Home() {
  const [titles, setTitles] = useState([
    "Electrical Engineer",
    "Full Stack Developer",
    "Freelancer",
  ]);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    let intervalId;

    function rotateTitle() {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }

    // Start the interval to rotate titles
    intervalId = setInterval(rotateTitle, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [titles]);

  return (
    <div className="home-container" id="home">
      <div className="image-section">
        <div className="hero image-container">
          <img src={hero} alt="hero" />
        </div>
        <div className="rotating-block">
          <p className="block-text">Hello, I am</p>
          <h1 className="my_name">Sufiyan Sadiq</h1>
          {/* <p className="block-text rotating-title">{titles[currentTitleIndex]}</p> */}
          <TypeAnimation
            sequence={[
              "Electrical Engineer",
              2000,
              "Full Stack Developer",
              2000,
              "Freelancer",
              2000,
              "Machine Learning Engineer",
              2000,
            ]}
            speed={50}
            repeat={Infinity}
            className="typing"
          />
          <div className="social-container">
            <img
              src={linkedIn}
              className="icon"
              onClick={() =>
                window.open(
                  "https://pk.linkedin.com/in/muhammad-sufiyan-sadiq-169809255",
                  "_blank"
                )
              }
            />
            <img
              src={github}
              className="icon"
              onClick={() =>
                window.open("https://github.com/Sufiyan2003", "_blank")
              }
            />
            <img
              src={instagram}
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/sufiyansadiq9/",
                  "_blank"
                )
              }
            />
            <img
              src={facebook}
              className="icon"
              onClick={() =>
                window.open(
                  "https://www.facebook.com/profile.php?id=100013317271158",
                  "_blank"
                )
              }
            />
          </div>
          <Button className="custom_button">Contact Me</Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
