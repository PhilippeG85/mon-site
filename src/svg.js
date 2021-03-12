import React from "react";

function Svg() {
  return (
    <div className="eye-svg">
      <div className="eye-hole">
        <svg width="250" height="250" version="1.1" className="svg">
          <line x1="45" x2="75" y1="55" y2="85" stroke="black" strokeWidth="5"/>
          <line x1="125" x2="125" y1="35" y2="75" stroke="black" strokeWidth="5"/>
          <line x1="205" x2="175" y1="55" y2="85" stroke="black" strokeWidth="5"/>
          <ellipse cx="125" cy="125" rx="75" ry="35" stroke="black" fill="transparent" strokeWidth="4" />
          <circle cx="125" cy="125" r="20" className="svg-circle" />
        </svg>
      </div>
    </div>
  );
}

export default Svg;
