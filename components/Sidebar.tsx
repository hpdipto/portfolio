import * as React from "react";
import Head from "next/head";
// import 'bootstrap/dist/css/bootstrap.css';
import "../styles/Sidebar.css";

const Sidebar: React.FC = ({ contents }) => {
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
      <div className="side-bar">
        <div className="row">
          <div className="col-1 social-panel">
            <div className="social-icons">
              <div className="single-social">
                <a
                  href="https://www.linkedin.com/in/hpdipto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
              <div className="single-social">
                <a
                  href="https://github.com/hpdipto/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github" aria-hidden="true"></i>
                </a>
              </div>
              <div className="single-social">
                <a
                  href="https://twitter.com/hpdipto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </div>
              <div className="v1"></div>
            </div>
          </div>

          <div className="col">{contents}</div>

          <div className="col-1 mail-panel">
            <div className="mail-group">
              <a href="mailto:haris.dipt@gmail.com" className="mail-address">
                haris.dipto@gmail.com
              </a>
              <div className="v2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
