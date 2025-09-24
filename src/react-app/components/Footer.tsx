import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import tsLogo from "../assets/trevor-and-sarah-logo-horizontal-white.svg";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4 mt-auto">
      <Container>
        {/* Top row: logo and links */}
        <Row className="align-items-center mb-3">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <Image
              src={tsLogo}
              alt="Trevor & Sarah"
              style={{ maxHeight: 40 }}
            />
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="/privacy" className="me-3 footer-link">Privacy Policy</a>
            <a href="/contact" className="footer-link">Contact</a>
          </Col>
        </Row>
<hr />
        {/* Location row */}
        <Row className="small mt-4">
          <Col className="text-center">
            <div className="d-flex align-items-center justify-content-center">
              <FaMapMarkerAlt className="me-2" />
              <span>Rochester, NY.  &copy; {currentYear} Trevor & Sarah. All rights reserved.</span>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
