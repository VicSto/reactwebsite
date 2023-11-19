import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "/src/assets/common/logo.png";
import { Nav, NavDropdown } from "react-bootstrap";

class WebsiteNavBar extends React.Component<{}, { show: boolean }> {
  state = { show: false };

  showDropdown = (_: any) => {
    this.setState({ show: true });
  };
  hideDropdown = (_: any) => {
    this.setState({ show: false });
  };

  render() {
    return (
      <Navbar
        expand="md"
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
        className="bg-body-tertiary"
      >
        <Container style={{ left: "5vw", width: "10vw" }}>
          <Navbar.Brand href={`/home`}>
            <img
              alt=""
              src={logo}
              width="35"
              height="35"
              className="d-inline-block align-top align-left"
            />
            Victor Stolle
          </Navbar.Brand>
        </Container>
        <Nav className="me-auto">
          <Nav.Link href={`/about`} style={{ paddingRight: "5vw" }}>
            About Me
          </Nav.Link>
          <NavDropdown
            title="My Projects"
            id="navbar-projects-dropdown"
            show={this.state.show}
            onMouseEnter={this.showDropdown}
            onMouseLeave={this.hideDropdown}
            style={{ paddingRight: "5vw" }}
          >
            <NavDropdown.Item href={`/projects/mywebsite`}>
              My Website
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href={`/linkedin`} style={{ paddingRight: "5vw" }}>
            LinkedIn
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default WebsiteNavBar;
