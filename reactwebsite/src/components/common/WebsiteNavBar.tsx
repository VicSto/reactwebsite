import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "/src/assets/common/logo.png";
import { Nav, NavDropdown, Offcanvas } from "react-bootstrap";

class WebsiteNavBar extends React.Component<
  {},
  { show: boolean; desktopModeEnabled: boolean }
> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      desktopModeEnabled: window.matchMedia("(min-width: 768px)").matches,
    };
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener("change", (e) =>
        this.setState(() => ({ desktopModeEnabled: e.matches }))
      );
  }

  showDropdown = (_: any) => {
    this.setState({ show: true });
  };
  hideDropdown = (_: any) => {
    this.setState({ show: false });
  };

  DesktopView = () => {
    return (
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary justify-content-between"
        id="navbar"
      >
        <Container>
          <Navbar.Brand href={`/home`}>
            <img src={logo} width="35" height="35" />
            Victor Stolle
          </Navbar.Brand>
          <Nav>
            <Nav.Link href={`/about`} className="mx-2">
              About Me
            </Nav.Link>
            <NavDropdown
              title="My Projects"
              id="collapsible-nav-dropdown"
              className="mx-2"
            >
              <NavDropdown.Item href={`/projects/mywebsite`}>
                My Website
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href={`/linkedin`} className="mx-4">
              LinkedIn
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  };

  MobileView = () => {
    return (
      <Navbar
        expand={false}
        bg="dark"
        data-bs-theme="dark"
        fixed="top"
        className="bg-body-tertiary mb-3"
      >
        <Container fluid>
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
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="end"
            bg="dark"
            data-bs-theme="dark"
            style={{ opacity: "0.8", backdropFilter: "blur(10px)" }}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                Victor Stolle
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href={`/home`}>Home</Nav.Link>
                <Nav.Link href={`/about`}>About Me</Nav.Link>
                <NavDropdown title="My Projects" id="navbar-projects-dropdown">
                  <NavDropdown.Item href={`/projects/mywebsite`}>
                    My Website
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href={`/linkedin`} className="mx-2">
                  LinkedIn
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    );
  };

  render() {
    return (
      <>
        {this.state.desktopModeEnabled && this.DesktopView()}
        {!this.state.desktopModeEnabled && this.MobileView()}
      </>
    );
  }
}

export default WebsiteNavBar;
