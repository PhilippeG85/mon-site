import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [display, setDisplay] = useState("none");

  const handleClick = () => {
    display === "none" ? setDisplay("flex") : setDisplay("none")
  };

  return (
    <>
    <div className="navbar">
      <h3 className="my-portfolio">My Portfolio<span style={{ color: "red"}}>.</span></h3>
      <div className="navbar-menu">
        <a className="navbar-link" href="#home">
          <h3 style={{ fontWeight: "lighter" }}>Home</h3>
        </a>
        <a className="navbar-link" href="#about">
          <h3 style={{ fontWeight: "lighter" }}>About</h3>
        </a>
        <a className="navbar-link" href="#projects">
          <h3 style={{ fontWeight: "lighter" }}>Projects</h3>
        </a>
        <a className="navbar-link" href="#contact">
          <h3 style={{ fontWeight: "lighter" }}>Contact</h3>
        </a>
      </div>
      <div className="navbar-menu-mobile">
        <FontAwesomeIcon icon={faBars} onClick={() => handleClick()} />
      </div>
    </div>
    <div style={{ display }} className="menu-mobile">
      <a className="navbar-link" href="#home" onClick={() => handleClick()}>
        <h3 style={{ fontWeight: "lighter" }}>Home</h3>
      </a>
      <a className="navbar-link" href="#about" onClick={() => handleClick()}>
        <h3 style={{ fontWeight: "lighter" }}>About</h3>
      </a>
      <a className="navbar-link" href="#projects" onClick={() => handleClick()}>
        <h3 style={{ fontWeight: "lighter" }}>Projects</h3>
      </a>
      <a className="navbar-link" href="#contact" onClick={() => handleClick()}>
        <h3 style={{ fontWeight: "lighter" }}>Contact</h3>
      </a>
    </div>
    </>
  );
}

export default Navbar
