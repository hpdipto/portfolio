import * as React from "react";
import Head from "next/head";
import Link from "next/link";
// import "bootstrap/dist/css/bootstrap.css";
import "../styles/Works.css";

const Works = () => {
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
      <div className="works" id="works">
        <div className="work-top">
          <div className="work-title">
            <span className="work-title-text">My Works</span>
          </div>
        </div>

        <div className="project">
          <div className="d-flex project-img-left">
            <a
              className="project-title-link"
              href="https://photopoll.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="card-img img-fluid"
                src="/photopoll.png"
                alt="photopoll"
              />
            </a>
          </div>
          <div className="d-flex justify-content-end">
            <div className="card border-0 project-description">
              <div className="card-header bg-transparent">
                <p className="d-flex justify-content-end">Featured Project</p>
                <h4 className="d-flex justify-content-end">
                  <a
                    className="project-title-link"
                    href="https://photopoll.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Photo Poll
                  </a>
                </h4>
              </div>
              <div className="card-body">
                <p align="right">
                  A simple photo voting app where a user can register and host a
                  poll with an unique Poll Id and Poll Passcode. <br />
                  Then using the shared Poll Id and Poll Passcode, another user
                  can view the poll and vote photos according to preference.{" "}
                  <br />
                  Later the host can view the result, how many votes a photo get
                  and how many points it achieved.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-end">
                  <span className="badge badge-pill badge-info tool">
                    React
                  </span>
                  <span className="badge badge-pill badge-info tool">Node</span>
                  <span className="badge badge-pill badge-info tool">
                    Express
                  </span>
                  <span className="badge badge-pill badge-info tool">
                    MongoDB
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <span className="project-link">
                    <a
                      href="https://github.com/hpdipto/photo-voting-app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-github project-link-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                  <span className="project-link">
                    <a
                      href="https://photopoll.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-external-link project-link-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="d-flex project-img-right">
            <a
              className="project-title-link"
              href="https://github-job-basket.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="card-img img-fluid"
                src="/jobbasket.png"
                alt="jobbasket"
              />
            </a>
          </div>
          <div className="d-flex justify-content-start">
            <div className="card border-0 project-description">
              <div className="card-header">
                <p className="d-flex justify-content-start">Featured Project</p>
                <h4 className="d-flex justify-content-start">
                  <a
                    className="project-title-link"
                    href="https://github-job-basket.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Job Basket
                  </a>
                </h4>
              </div>
              <div className="card-body">
                <p align="left">
                  GitHub Jobs API is used here with a pretty UI. A user can
                  logged in with a Google account to save a job that. <br />
                  Later the user can view the saved job in his/her basket.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-start">
                  <span className="badge badge-pill badge-info tool">
                    React
                  </span>
                  <span className="badge badge-pill badge-info tool">Node</span>
                  <span className="badge badge-pill badge-info tool">
                    MongoDB
                  </span>
                  <span className="badge badge-pill badge-info tool">
                    GitHub Job API
                  </span>
                </div>
                <div className="d-flex justify-content-start">
                  <span className="project-link">
                    <a
                      href="https://github.com/hpdipto/github-job-basket/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-github project-link-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                  <span className="project-link">
                    <a
                      href="https://github-job-basket.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-external-link project-link-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project">
          <div className="d-flex project-img-left">
            <a
              className="project-title-link"
              href="https://personal-pomodoro.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="card-img img-fluid"
                src="/pomodoro.png"
                alt="pomodoro clock"
              />
            </a>
          </div>
          <div className="d-flex justify-content-end">
            <div className="card border-0 project-description">
              <div className="card-header">
                <p className="d-flex justify-content-end">Featured Project</p>
                <h4 className="d-flex justify-content-end">
                  <a
                    className="project-title-link"
                    href="https://github-job-basket.herokuapp.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Pomodoro Clock
                  </a>
                </h4>
              </div>
              <div className="card-body">
                <p align="right">
                  A simple pomodoro clock. Here a user can tune break time and
                  session time.
                </p>
              </div>
              <div className="card-footer">
                <div className="d-flex justify-content-end">
                  <span className="badge badge-pill badge-info tool">
                    React
                  </span>
                  <span className="badge badge-pill badge-info tool">
                    Express
                  </span>
                </div>
                <div className="d-flex justify-content-end">
                  <span className="project-link">
                    <a
                      href="https://github.com/hpdipto/pomodoro-clock/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-github project-link-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                  <span className="project-link">
                    <a
                      href="https://personal-pomodoro.herokuapp.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-external-link project-link-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="other-projects">
          <h3 className="text-center other-project-title mb-5">
            Other Noteworthy Projects
          </h3>

          <div className="card-deck">
            <div className="card border-0 other-project-card">
              <div className="card-header border-0">
                <div className="d-flex justify-content-end">
                  <span className="project-link">
                    <a
                      href="https://github.com/hpdipto/nlp_based_robot_navigation/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-github project-link-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h4 className="other-project-title">
                  NLP Based Robot Navigation
                </h4>
                <p className="other-project-text">
                  Based on the given natural language instructions, a virtual
                  robot will navigate on a real world map.
                </p>
              </div>
              <div className="card-footer border-0">
                <div className="d-flex justify-content-start">
                  <span className="badge badge-pill badge-info tool">
                    Python
                  </span>
                  <span className="badge badge-pill badge-info tool">
                    Django
                  </span>
                  <span className="badge badge-pill badge-info tool">
                    TensorFlow
                  </span>
                </div>
              </div>
            </div>

            <div className="card border-0 other-project-card">
              <div className="card-header border-0">
                <div className="d-flex justify-content-end">
                  <span className="project-link">
                    <a
                      href="https://github.com/hpdipto/auto-snake/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i
                        className="fa fa-github project-link-icon"
                        aria-hidden="true"
                      ></i>
                    </a>
                  </span>
                </div>
              </div>
              <div className="card-body">
                <h4 className="other-project-title">Auto Snake</h4>
                <p className="other-project-text">
                  Value iteration based auto snake playing game built with
                  PyGame.
                </p>
              </div>
              <div className="card-footer border-0">
                <div className="d-flex justify-content-start">
                  <span className="badge badge-pill badge-info tool">
                    Python
                  </span>
                  <span className="badge badge-pill badge-info tool">
                    PyGame
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
