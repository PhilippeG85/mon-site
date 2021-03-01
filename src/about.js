import React from "react";

import me from "./assets/img/me.jpg";

function About() {
  return (
    <div className="about-page">
      <div className="about-info">
        <div className="mobile-space">
          <h1>About-me</h1>
          <p>
            I am Philippe, Web Developer located in Montreal. I enjoy to design good UI,
            animation and creative layouts.
            <br />
            <br />
            Always passionate about tech world, I discover coding in 2020
            and learned a lot at Le Wagon bootcamp. Since, I&apos;m keeping the momentum and
            keep learning on a daily basis.
            <br />
            I am a well organised person, problem solver, and independent employee
            with good attention to details.
            <br />
            <br />
            More oriented in Front-end, I have experience in full-stack development aswell.
            Don&apos;t hesitate to reach me, I will be pleased to hear about your project.
          </p>
          <div style={{ position: "relative", width: "88px", margin: "0 auto" }}>
            <a href="#contact" className="contat-me-btn">
              <span>Contact-me</span>
            </a>
          </div>
        </div>
        <img src={me} alt="" />
      </div>
    </div>
  );
}

export default About
