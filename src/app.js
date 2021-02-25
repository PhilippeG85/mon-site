import React from "react";
import Navbar from "./navbar";
import Svg from "./svg";
import Home from "./home";
import Projects from "./projects";

import troismats from "./assets/img/troismats.PNG";


function App() {
  return (
    <>
      <div className="landing-page">
        <Svg />
        <Navbar />
        <Home />
      </div>
      <section className="project-section">
        <h1>Some of my Work</h1>
        <Projects
          setHeight={742}
          troismats={troismats}
          title='Les Trois Mats'
          description={["Website to rent an appartment for holidays.", <br />, "Built entirely with React and deploy on netlify."]}
          link="https://les-trois-mats.com"
        />
        <Projects
          setHeight={1565}
          troismats={troismats}
          title='Les Trois Mats'
          description={["Website to rent an appartment for holidays.", <br />, "Built entirely with React and deploy on netlify."]}
          link="https://les-trois-mats.com"
        />
      </section>
    </>
  );
}
export default App;
