import React from "react";
import { useMediaQuery } from 'react-responsive';
import Navbar from "./navbar";
import Svg from "./svg";
import Home from "./home";
import Projects from "./projects";
import About from "./about";
import Footer from "./footer";

import troismats from "./assets/img/lestroismats.JPG";
import helper from "./assets/img/helper-cafe.JPG";
import capture from "./assets/img/protfolio.JPG";

import troismatsMobile from "./assets/img/trois-mobile.jpg";
import helperMobile from "./assets/img/helper-mobile.jpg";
import portfolioMobile from "./assets/img/my-mobile.jpg";

import css from "./assets/img/icon/css.png";
import firebase from "./assets/img/icon/firebase.png";
import github from "./assets/img/icon/github.png";
import html from "./assets/img/icon/html.png";
import js from "./assets/img/icon/js.png";
import netlify from "./assets/img/icon/netlify.png";
import rails from "./assets/img/icon/rails.png";
import react from "./assets/img/icon/react.png";


function App() {
  const isMobile = useMediaQuery({
    query: '(max-device-width: 500px)'
  });
  const isPortrait = useMediaQuery({
    query: '(orientation: portrait)'
  });

  const style = isPortrait ? { flexDirection: "column-reverse" } : {}

  return (
    <div className="app">
      <div className="landing-page">
        <Navbar />
        <div style={ style } className="home-page-content">
          <Home />
          <Svg />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <section id="projects" className="project-section">
        <h1>Past Projects</h1>
        <Projects
          img={isMobile ? troismatsMobile : troismats}
          title='Les Trois Mats'
          subtitle='The appartment for your holidays!'
          description={<>This website was design and made in one week.<br /> I used the React framework to build all the pages, google maps api to display the maps and emailjs for the contact form.<br />It is deployed using Netlify.</>}
          link="https://les-trois-mats.com"
          id="1"
          receivedIcon={[{name: "Html", img: html}, {name: "Css", img: css}, {name: "Javascript", img: js}, {name: 'React', img: react}, {name: "Github", img: github}, {name: "Netlify", img: netlify}]}
        />
        <Projects
          img={isMobile ? helperMobile : helper}
          title='Helper'
          subtitle='Planning renovation has never been so easy!'
          description={<>Website built with 3 college in 2 week for our final project of le Wagon bootcamp.<br /> Made with ruby on rails and deploy with Heroku</>}
          link="https://helper.solutions"
          id="2"
          receivedIcon={[{name: 'Html', img: html}, {name: 'Css', img: css}, {name: 'Javascript', img: js}, {name: 'Ruby on Rails', img: rails}, {name: 'Github', img: github}, {name: 'Heroku', img: ""}]}
        />
        <Projects
          img={isMobile ? portfolioMobile : capture}
          title="My Portfolio"
          subtitle=""
          description={<>I used React to build this Portfolio.<br />Each project is displayed with a reusable component.<br />It is deployed with Firebase.</>}
          link="google.ca"
          id="3"
          receivedIcon={[{name: "Html", img: html}, {name: "Css", img: css}, {name: "Javascript", img: js}, {name: 'React', img: react}, {name: "Github", img: github}, {name: "Firebase", img: firebase}]}
        />
      </section>
      <Footer />
    </div>
  );
}
export default App;
