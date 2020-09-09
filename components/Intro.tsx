import Head from "next/head";
import * as React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "../styles/Intro.css";

const Intro: React.FC = () => {
  return (
    <div>
      <Head>
        <script
          src="https://kit.fontawesome.com/767858f8a7.js"
          crossOrigin="anonymous"
        ></script>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
          integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
          crossOrigin="anonymous"
        />
      </Head>
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
          <a
            href="mailto:haris.dipt@gmail.com"
            className="btn mail-button mt-5"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
