import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import tsLogo from "../assets/trevor-and-sarah-logo-horizontal-white.svg";
import { FaMapMarkerAlt, FaFacebookF, FaYoutube, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer py-4 mt-auto">
      <Container>
<Row className="align-items-center mb-3">
  {/* Logo */}
  <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
    <Image src={tsLogo} alt="Trevor & Sarah" style={{ maxHeight: 40 }} />
  </Col>

  {/* Links */}
  <Col xs={12} md={6} className="d-flex justify-content-center justify-content-md-end">
    <div className="d-flex flex-wrap justify-content-center gap-2">
      <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
      <a href="/terms" className="footer-link">Terms & Conditions</a>
      <a href="/contact" className="footer-link">Contact</a>
    </div>
  </Col>
</Row>


        <hr />

        {/* Bottom Row: Location, Copyright, Socials */}
        <Row className="align-items-center mb-3">
          <Col className="d-flex flex-wrap flex-row justify-content-center col-12 my-3 gap-2">
            <div className="footer-link d-flex align-items-center">
              <FaMapMarkerAlt className="me-1" />
              <span>Rochester, NY.</span>
            </div>
            <div className="footer-link">
              <span>© {currentYear} TS Film & Photo</span>
            </div>
          </Col>

          <Col className="d-flex justify-content-center col-12">
            <div className="social-icons d-flex gap-3" style={{ color: "#fff" }}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaFacebookF />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaYoutube />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
