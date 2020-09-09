import Head from "next/head";
import * as React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "../styles/Education.css";

const Education: React.FC = () => {
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
      <div className="education" id="education">
        <div className="education-top">
          <div className="education-title">
            <span className="education-title-text">Education</span>
          </div>
        </div>

        <div className="row">
          <div className="col-sm">
            <div className="college">
              <div className="row">
                <div className="col-1">
                  <a
                    href="https://du.ac.bd/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      className="fa fa-graduation-cap mr-2"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <div className="col">
                  <p className="college-name">University of Dhaka</p>
                  <p className="college-title">
                    Robotics and Mechatronics Engineering
                  </p>
                  <p className="college-degree">BSc in Honrs, 2020</p>
                </div>
              </div>
            </div>
          </div>

          {/*<div className="v"></div>*/}

          <div className="col-sm">
            <div className="certificates">
              <div className="row certificate">
                <div className="col-1">
                  <a
                    href="https://www.freecodecamp.org/certification/hpdipto/responsive-web-design"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="col">
                  <p className="certificate-name">Responsive Web Design</p>
                  <p className="certificate-institute">freeCodeCamp</p>
                  <table className="table table-sm table-borderless">
                    <tbody>
                      <tr className="d-flex">
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          HTML 5
                        </td>
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          CSS 3
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <a
                    href="https://www.freecodecamp.org/certification/hpdipto/javascript-algorithms-and-data-structures"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="col">
                  <p className="certificate-name">
                    JavaScript Algorithms and Data Structures
                  </p>
                  <p className="certificate-institute">freeCodeCamp</p>
                  <table className="table table-sm table-borderless">
                    <tbody>
                      <tr className="d-flex">
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          Data Structures
                        </td>
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          Algorithms
                        </td>
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          OOP
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <a
                    href="https://www.freecodecamp.org/certification/hpdipto/front-end-libraries"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="col">
                  <p className="certificate-name">Front End Libraries</p>
                  <p className="certificate-institute">freeCodeCamp</p>
                  <table className="table table-sm table-borderless">
                    <tbody>
                      <tr className="d-flex">
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          React
                        </td>
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          jQuery
                        </td>
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          SASS
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row">
                <div className="col-1">
                  <a
                    href="https://www.freecodecamp.org/certification/hpdipto/apis-and-microservices"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa fa-certificate" aria-hidden="true"></i>
                  </a>
                </div>
                <div className="col">
                  <p className="certificate-name">APIs and Microservices</p>
                  <p className="certificate-institute">freeCodeCamp</p>
                  <table className="table table-sm table-borderless">
                    <tbody>
                      <tr className="d-flex">
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          Node
                        </td>
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          Express
                        </td>
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          MongoDB
                        </td>
                        <td className="col-3">
                          <i
                            className="fa fa-caret-right skill-icon"
                            aria-hidden="true"
                          ></i>
                          APIs
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
