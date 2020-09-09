import * as React from "react";

import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <div className="about" id="about">
      <div className="about-top">
        <div className="about-title">
          <span className="about-title-text">About Me</span>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 about-me-text">
          <p className="about-me-paragraph">
            Hello I'm Haris Pasha Dipto. I'm a full stack web developer based in
            Dhaka, Bangladesh.
          </p>
          <p className="about-me-paragraph">
            I like to develop products that is used by other people and get
            benefit from my creation. I generally work in MERN stack. I mostly
            like to work with banck-end part of the project.
          </p>
          <p className="about-me-paragraph">
            Here are some technologies that I used recently:
          </p>

          <table className="table skills table-borderless">
            <tbody>
              <tr>
                <td>
                  <i
                    className="fa fa-caret-right skill-icon"
                    aria-hidden="true"
                  ></i>
                  JavaScript & TypeScript
                </td>
                <td>
                  <i
                    className="fa fa-caret-right skill-icon"
                    aria-hidden="true"
                  ></i>
                  Python
                </td>
              </tr>
              <tr>
                <td>
                  <i
                    className="fa fa-caret-right skill-icon"
                    aria-hidden="true"
                  ></i>
                  Node & Express
                </td>
                <td>
                  <i
                    className="fa fa-caret-right skill-icon"
                    aria-hidden="true"
                  ></i>
                  Django
                </td>
              </tr>
              <tr>
                <td>
                  <i
                    className="fa fa-caret-right skill-icon"
                    aria-hidden="true"
                  ></i>
                  MongodDB
                </td>
                <td>
                  <i
                    className="fa fa-caret-right skill-icon"
                    aria-hidden="true"
                  ></i>
                  React
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="col-md">
          <img
            className="img-fluid photo border"
            src="/me.jpg"
            alt="my_photo"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
