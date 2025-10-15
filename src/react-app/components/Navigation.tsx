import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link, NavLink, useLocation } from "react-router-dom";
import TsLogo from "../assets/media/trevor-and-sarah-logo-horizontal.svg";
import "./Navigation.css";

const Navigation: React.FC = () => {
  const location = useLocation();

  // Dropdown active if current path starts with /photo or /video
  const isPortfolioActive =
    location.pathname.startsWith("/photo") || location.pathname.startsWith("/video");

  return (
    <Navbar expand="lg" bg="light" variant="light" className="shadow-sm" sticky="top">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
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
            <Nav.Link as={NavLink} to="/" end>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>

            {/* Portfolio Dropdown */}
            <NavDropdown
              title="Portfolio"
              id="portfolioDropdown"
              className={isPortfolioActive ? "active" : ""}
            >
              <NavDropdown.Item as={NavLink} to="/photo">
                Photo
              </NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/video">
                Video
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
