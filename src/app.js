import React from "react";
import Navbar from "./navbar";
import Svg from "./svg";
import Home from "./home";
import Projects from "./projects";
import About from "./about";
import Contact from "./contact";

import troismats from "./assets/img/troismats.PNG";
import helper from "./assets/img/helper.JPG";

import css from "./assets/img/icon/css.png";
// import firebase from "./assets/img/icon/firebase.png";
import github from "./assets/img/icon/github.png";
import html from "./assets/img/icon/html.png";
import js from "./assets/img/icon/js.png";
import netlify from "./assets/img/icon/netlify.png";
import rails from "./assets/img/icon/rails.png";
import react from "./assets/img/icon/react.png";


function App() {
  return (
    <>
      <div className="landing-page">
        <Svg />
        <Navbar />
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <section id="projects" className="project-section">
        <h1>Some of my Work</h1>
        <Projects
          troismats={troismats}
          title='Les Trois Mats'
          subtitle='The appartment for your holidays!'
          description={<>This website was design and made in one week.<br /> I used the React framework to build all the pages, google maps api to display the maps and emailjs for the contact form.<br />I used Netlify for the deployement.</>}
          link="https://les-trois-mats.com"
          id="1"
          receivedIcon={[{name: "Html", img: html}, {name: "Css", img: css}, {name: "Javascript", img: js}, {name: 'React', img: react}, {name: "Github", img: github}, {name: "Netlify", img: netlify}]}
        />
        <Projects
          troismats={helper}
          title='Helper'
          subtitle='Planning renovation has never been so easy!'
          description={<>Website built with 3 college in 2 week for our final project of le Wagon bootcamp.<br /> Made with ruby on rails and deploy with Heroku</>}
          link="https://helper.solutions"
          id="2"
          receivedIcon={[{name: 'Html', img: html}, {name: 'Css', img: css}, {name: 'Javascript', img: js}, {name: 'Ruby on Rails', img: rails}, {name: 'Github', img: github}, {name: 'Heroku', img: ""}]}
        />
      </section>
      <Contact />
    </>
  );
}
export default App;
