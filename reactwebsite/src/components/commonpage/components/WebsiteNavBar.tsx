import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "/src/assets/logo.png";
import { Nav } from "react-bootstrap";

class WebsiteNavBar extends React.Component {
  render() {
    return (
      <Navbar expand="lg" fixed="top" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="home">
            <img
              alt=""
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top align-left"
            />{" "}
            Victor Stolle
          </Navbar.Brand>
          <Nav.Link href="about">About Me</Nav.Link>
          <Nav.Link href="projects">Current Projects</Nav.Link>
          <Nav.Link href="linkedin">LinkedIn</Nav.Link>
        </Container>
      </Navbar>
    );
  }
}

export default WebsiteNavBar;
