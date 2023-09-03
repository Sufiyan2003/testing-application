import React from "react";

function Header() {
  return (
    <div className="topnav">
      <a className="active" href="#home">
        Home
      </a>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#contact">Contact</a>
    </div>
  );
}

export default Header;
