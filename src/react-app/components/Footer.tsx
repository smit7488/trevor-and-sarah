import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <footer className="bg-light text-dark py-4 mt-auto shadow-sm">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            &copy; {new Date().getFullYear()} Trevor & Sarah
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a href="/privacy" className="me-3">Privacy Policy</a>
            <a href="/contact">Contact</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;