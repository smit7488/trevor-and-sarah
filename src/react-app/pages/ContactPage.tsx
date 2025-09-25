import { Container, Row, Col } from "react-bootstrap";
import MediaHero from "../components/MediaHero";
import heroVideo from "../assets/hero-bg-v1.mp4";
import heroImage from "../assets/hero-bg-v1.avif";
import tsLogo from "../assets/trevor-and-sarah-logo-vertical-white.svg";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
     <MediaHero
        videoSrc={heroVideo}
        imageSrc={heroImage}
        overlayContent={
          <>
            <img
              src={tsLogo}
              className="logo trevorandsarah"
              alt="Trevor & Sarah logo"
            />
            <p
              className="text-uppercase mt-5"
              style={{ letterSpacing: "0.15em" }}
            >
              Let's capture your special moments together.
            </p>
          </>
        }
      />

      {/* Contact Form Section */}
      <ContactForm />

      {/* Optional Additional Info Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="text-center">
            <Col>
              <h2 className="mb-4">Get In Touch</h2>
              <p>
                We’d love to hear about your upcoming event! Fill out the form above, and we’ll
                get back to you as soon as possible. Prefer texting or calling? No problem—our
                contact info is below.
              </p>
              <p className="mb-0">
                <strong>Email:</strong> hello@trevorandsarah.com
              </p>
              <p>
                <strong>Phone:</strong> (541) 444-0755
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
