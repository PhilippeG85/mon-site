import React, { useState, useEffect } from "react";



function Projects({ troismats, title, subtitle, description, link, id, receivedIcon }) {
  const [scroll, setScroll] = useState(0);
  const [height, setHeight] = useState(0);
  const [heightImg, setHeightImg] = useState(0);

  const style = () => {
    const windowHeight = window.scrollY;
    const diff = windowHeight - height;
    if (diff >= 0) {
      if (diff <= (heightImg)) {
        const style = diff / 2;
        setScroll(style);
        return scroll;
      } else {
        setScroll(heightImg * 0.8);
        return scroll;
      }
    } else {
      setScroll(0);
      return scroll;
    }
  };

  useEffect(() => {
    const setHeightL = document.getElementById(id);
    const setHeightResponsive = setHeightL.offsetTop;
    const setImgHeight = setHeightL.offsetHeight;
    setHeightImg(setImgHeight);
    setHeight(setHeightResponsive);
  }, [id])


  window.addEventListener('scroll', style);

  const icon = receivedIcon.map((icon) => {
    return <li key={icon.name}>{icon.name}: <img src={icon.img} alt="" className="icon-img" /></li>
  });

  return (
    <div>
      <div className="animation-on-scroll">
        <div className="project-img" style={{ overflow: "hidden" }}>
          <img id={id} src={troismats} alt="" style={{ transform: `translate(0px, ${scroll}px)` }} />
        </div>
      </div>
      <div className="recover">
        <div className="project-description">
          <div className="description-content">
            <div>
              <h1>{title}</h1>
              <h3>{subtitle}</h3>
            </div>
            <p>{description}</p>
            <div>
              <div style={{ position: "relative", width: "137px" }}>
                <a href={link} target="_blank" rel="noreferrer">
                  <p>Link to the website</p>
                </a>
              </div>
            </div>
          </div>
          <div className="icon-div">
            <p>Built with:</p>
            <ul className="icon-list">
              {icon}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects
