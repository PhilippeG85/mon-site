import React from "react";
import { useMediaQuery } from "react-responsive";

function Home() {
  const isPortrait = useMediaQuery({
    query: '(orientation: portrait)'
  });

  const styleHome = isPortrait ? { height: "auto" } : { height: "100%" }
  return (
    <div style={styleHome} id="home" className="hi">
      <div>
        <div className='animate'>
          <h1 className='set-perspective'>
            Hello,
          </h1>
        </div>
        <div className='animate'>
          <h1 className='set-perspective span-name'>
            I&apos;m <span>P</span><span>h</span><span>i</span><span>l</span><span>i</span><span>p</span><span>p</span><span>e</span>
          </h1>
        </div>
        <div className='animate'>
          <h1 className='set-perspective'>
            Web Developer
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Home
