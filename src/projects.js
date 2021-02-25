import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';


function Projects({ setHeight, troismats, title, description, link }) {
  const [scroll, setScroll] = useState(0);
  const [height] = useState(setHeight);


  const style = () => {
    const scr = window.scrollY;
    const diff = scr - height;
    if (diff >= 0 && diff <= 396) {
      const style = diff / 4.95;
      setScroll(style);
      return scroll;
    } else {
      return 0;
    }
  };


  window.addEventListener('scroll', style);

  return (
    <div>
      <div className="project-img" style={{ overflow: "hidden" }}>
        <img src={troismats} alt="" style={{ transform: `translateY(${scroll}%)` }} />
      </div>
      <div className="recover">
        <div className="project-description">
          <h1>{title}</h1>
          <p>{description}</p>
          <div>
            <a href={link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLink} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects
