import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import "../assets/Home.css";

function Home() {
  const [titles, setTitles] = useState([
    "Electrical Engineer",
    "Full Stack Developer",
    "Freelancer",
    "Machine Learning Engineer",
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
    <div className="home-container">
      <div className="rotating-block">
        <p className="block-text">Hello, I am</p>
        <h1 className="my_name">Muhammad Sufiyan Sadiq</h1>
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
            2000
          ]}
          speed={50}
          repeat={Infinity}
          className="typing"
        />
      </div>
    </div>
  );
}

export default Home;
