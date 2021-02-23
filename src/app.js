import React from "react";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <div className="home-page">
        <Navbar />
        <div className="presentation">
          <h1>
            Hi,
            <br />
            I&apos;m Philippe
            <br />
            Web Developer in Montreal
          </h1>
          <span>Front-end developer / Full Stack Developer</span>
        </div>
      </div>
      <div className="skills">
        <h3>somthing here</h3>
      </div>
    </>
  );
}
export default App;
