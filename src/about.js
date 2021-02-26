import React from "react";

import me from "./assets/img/me.jpg";

function About() {
  return (
    <div className="container about-page">
      <h1>About-me</h1>
      <div className="about-info">
        <p>
          Originaly from the aviation world, 2020 lead me to develop my skills as a
          web developer.
          <br />
          <br />
          Always passionate about tech world, I went on this journey and learn a
          lot at Le Wagon bootcamp. Since, I&apos;m keeping the momentum and
          keep learning on a daily basis.
          <br />
          Well organised person, problem solver, and independent employee
          with good attention to details.
          <br />
          <br />
          Experience in full-stack, I really like to design good
          front-end and will be pleased to hear about all kind of projects.
        </p>
        <img src={me} alt="" />
      </div>
    </div>
  );
}

export default About