import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="my-portfolio">My Portfolio<span style={{ color: "red"}}>.</span></h3>
      <div className="navbar-menu">
        <a className="navbar-link" href="#about">
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
    </div>
  );
}

export default Navbar
