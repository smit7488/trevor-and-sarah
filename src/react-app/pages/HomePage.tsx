import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import MediaHero from "../components/MediaHero";
import heroVideo from "../assets/hero-video.mp4";
import tsLogo from "../assets/trevor-and-sarah-logo-vertical-white.svg";
import aboutImage from "../assets/IG-image.jpg"; 
import Testimonials from "../components/Testimonials";
import InstagramFeed from "../components/InstagramFeed";

export default function HomePage() {

  const services = [
    { title: "Weddings", description: "Capture your special day with cinematic video and beautiful photos." },
    { title: "Engagements", description: "Celebrate your love with stunning engagement sessions." },
    { title: "Family", description: "Family portraits that capture genuine moments and connections." },
    { title: "Portraits", description: "Professional portraits for individuals or couples, tailored to your style." },
  ];

  return (
    <>
      {/* Hero */}
      <MediaHero
        videoSrc={heroVideo}
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
              Coming Soon!
            </p>
          </>
        }
      />

      {/* Intro Section - White background */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center row-gap-4">
            {/* Left Image */}
            <Col md={6}>
              <img
                src={aboutImage}
                alt="Film and Photo Example"
                className="img-fluid rounded shadow"
              />
            </Col>
            {/* Right Text */}
            <Col md={6}>
              <h2 className="mb-4">Capturing Life, One Frame at a Time</h2>
              <p>
                We believe that the best photos and videos don’t just show what
                happened—they make you feel it. From weddings and family
                portraits to events, food photography, and travel, our goal is
                to create timeless work that reflects genuine moments and
                emotions.
              </p>
              <p>
                Whether you’re looking for cinematic storytelling or a simple,
                elegant portrait, we approach every project with creativity and
                care—so you can relive your memories for years to come.
              </p>
              <div className="mt-4">
                <Button as={Link as any} to="/video" variant="outline-dark" className="me-3">
                  Explore Video
                </Button>
                <Button as={Link as any} to="/photo" variant="outline-dark">
                  Explore Photo
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section - Full Width Cards */}
{/* Services Section - Full Width Cards */}
<section className="py-5 bg-light-100">
  <Container>
    <h2 className="text-center mb-5">Our Services</h2>
    <Row className="g-4">
      {services.map((service, idx) => (
        <Col key={idx} xs={12} sm={6} md={3}>
          <Card className="h-100 shadow-sm text-center border-0">
            <Card.Img
              variant="top"
              src={aboutImage} // placeholder image
              className="rounded-top"
              style={{ height: 180, objectFit: "cover" }}
            />
            <Card.Body>
              <Card.Title><strong>{service.title}</strong></Card.Title>
              <Card.Text>{service.description}</Card.Text>
              <Button variant="outline-dark" as={Link as any} to={`/services#${service.title.toLowerCase()}`}>
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>


      {/* About Section - Light Gray background */}
      <section className="py-5 bg-light row-gap-4">
        <Container>
          <Row className="align-items-center row-gap-4">
            {/* Left Text */}
            <Col md={6}>
              <h2 className="mb-4">About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident.
              </p>
              <div className="mt-4">
                <Button as={Link as any} to="/about" variant="outline-dark">
                  Learn More
                </Button>
              </div>
            </Col>
            {/* Right Image */}
            <Col md={6}>
              <img
                src={aboutImage}
                alt="About Trevor & Sarah"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <Testimonials variant="carousel" className="bg-light-100" />

      <InstagramFeed instagramUrl="https://www.instagram.com/yourprofile" />
    </>
  );
}
