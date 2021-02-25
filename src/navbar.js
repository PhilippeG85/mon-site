import React from "react";

function Navbar() {
  return (
    <div className="navbar">
      <h3 className="my-portfolio">My Portfolio<span style={{ color: "red"}}>.</span></h3>
      <div className="navbar-menu">
        <h3 style={{ fontWeight: "normal" }}>Home</h3>
        <h3 style={{ fontWeight: "normal" }}>About</h3>
        <h3 style={{ fontWeight: "normal" }}>Projects</h3>
        <h3 style={{ fontWeight: "normal" }}>Contact</h3>
      </div>
    </div>
  );
}

export default Navbar
