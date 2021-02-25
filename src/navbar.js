import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="my-portfolio">My Portfolio<span style={{ color: "red"}}>.</span></h3>
      <div className="navbar-menu">
        <h3 style={{ fontWeight: "lighter" }}>Home</h3>
        <h3 style={{ fontWeight: "lighter" }}>About</h3>
        <h3 style={{ fontWeight: "lighter" }}>Projects</h3>
        <h3 style={{ fontWeight: "lighter" }}>Contact</h3>
      </div>
    </div>
  );
}

export default Navbar
