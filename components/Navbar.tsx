import * as React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.css";
import "../styles/Navbar.css";

const NavBar: React.FC = () => {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        fixed="top"
        style={{ backgroundColor: "#0a4b5c" }}
      >
        <Navbar.Brand href="#intro">
          <img src="/logo.png" alt="logo" className="img-fluid" width="87" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <i className="fa fa-bars" aria-hidden="false"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            <Nav.Link href="#works">Works</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1Jy1lkVS9vvLtjKi30HoCZdztoXGBqcNV/view?usp=sharing"
              className="resume-button"
              target="_blank"
            >
              Resume
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
