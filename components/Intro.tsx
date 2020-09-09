import * as React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/Intro.css";

const Intro: React.FC = () => {
  return (
    <div className="intro" id="intro">
      <div className="main-text">
        <p className="hi" style={{ color: "#64ffda" }}>
          Hi, my name is
        </p>
        <p className="name">Haris Dipto.</p>
        <p className="intro-title">I build stuff for the web.</p>
        <p className="intro-text">
          I'm a full stack developer based in Dhaka, Bangladesh. I specialized
          in building full stack web applications. I mostly love to work with
          backend.
        </p>
        <a href="mailto:haris.dipt@gmail.com" className="btn mail-button mt-5">
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Intro;
