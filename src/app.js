import React from "react";
import Navbar from "./navbar";
import Svg from "./svg";
import Home from "./home";
import Projects from "./projects";
import About from "./about";

import troismats from "./assets/img/troismats.PNG";
import helper from "./assets/img/helper.JPG";


function App() {
  return (
    <>
      <div className="landing-page">
        <Svg />
        <Navbar />
        <Home />
      </div>
      <div>
        <About />
      </div>
      <section className="project-section">
        <h1>Some of my Work</h1>
        <Projects
          setHeight={742}
          troismats={troismats}
          title='Les Trois Mats'
          description={<>Website to rent an appartment for holidays.<br />Built entirely with React and deploy on netlify.</>}
          link="https://les-trois-mats.com"
        />
        <Projects
          setHeight={1565}
          troismats={helper}
          title='Helper'
          description={<>Website built with 3 college in 2 week for our final project of le Wagon bootcamp.<br /> Made with ruby on rails and deploy with Heroku</>}
          link="https://helper.solutions"
        />
      </section>
    </>
  );
}
export default App;
