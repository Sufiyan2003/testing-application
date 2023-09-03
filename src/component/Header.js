import React from "react";
import { Link } from 'react-router-dom';
import "../assets/Header.css";

function Header() {
  return (
    <div className="topnav">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/experience">Experience</Link>
    <Link to="/contact">Contact</Link>
  </div>
  );
}

export default Header;
