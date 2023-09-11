import React from "react";

import "../assets/Header.css";

function Header() {
  return (
    <div className="topnav">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default Header;
