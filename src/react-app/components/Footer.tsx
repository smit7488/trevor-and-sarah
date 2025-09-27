import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import tsLogo from "../assets/trevor-and-sarah-logo-vertical-white.svg";
import { FaMapMarkerAlt, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4 mt-auto">
      <Container>
        {/* Top row: left (location), center (logo + socials), right (links) */}
        <Row className="align-items-center mb-3">
          {/* Left: Location + copyright */}
          <Col xs={4} className="d-flex flex-column justify-content-start">
            <div className="footer-link">
              <span>&copy; {currentYear} Trevor & Sarah. All rights reserved.</span>
            </div>
          </Col>

          {/* Center: Logo + Socials below */}
          <Col xs={4} className="d-flex flex-column align-items-center">
            <Image src={tsLogo} alt="Trevor & Sarah" style={{ maxHeight: 80 }} className="mb-3"/>
            <div className="d-flex align-items-center justify-content-center mb-3 footer-link">
                <FaMapMarkerAlt className="me-2" />
                <span>Rochester, NY.</span>
              </div>
            
            <div className="social-icons d-flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaYoutube />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
              >
                <FaInstagram />
              </a>
            </div>
          </Col>

          {/* Right: Links */}
          <Col xs={4} className="d-flex justify-content-end">
            <div>
              <a href="/privacy-policy" className="me-3 footer-link">Privacy Policy</a>
              <a href="/terms" className="me-3 footer-link">Terms & Conditions</a>
              <a href="/contact" className="footer-link">Contact</a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
