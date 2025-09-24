import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import TsIcon from "../assets/ts-icon.svg";
import TsLogo from "../assets/trevor-and-sarah-logo-horizontal.svg";
import "./Navigation.css";

const Navigation: React.FC = () => {
  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow-sm" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={TsLogo}
            alt="Trevor & Sarah"
          
            height={40}
            className="d-inline-block align-text-top me-2"
          />
         
        </Navbar.Brand>

        {/* Hamburger toggle */}
        <Navbar.Toggle aria-controls="navbarNav" />

        {/* Nav links */}
        <Navbar.Collapse id="navbarNav">
          <Nav className="ms-auto text-center">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Portfolio" id="portfolioDropdown">
              <NavDropdown.Item href="/photo">Photo</NavDropdown.Item>
              <NavDropdown.Item href="/video">Video</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
