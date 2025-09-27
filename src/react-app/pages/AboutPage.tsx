import MediaHero from "../components/MediaHero";
import heroImage from "../assets/hero-bg-v1.avif";
import heroVideo from "../assets/hero-bg-v1.mp4";
import tsLogo from "../assets/trevor-and-sarah-logo-vertical-white.svg";
import aboutImage from "../assets/IG-image.jpg"; 
import trevorImage from "../assets/trevor.jpg";
import sarahImage from "../assets/Sarah.avif";
import InstagramFeed from "../components/InstagramFeed";
import Testimonials from "../components/Testimonials";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Trevor",
      role: "Lead Photographer & Videographer",
      img: trevorImage,
      bio: "Passionate about storytelling through the lens and creating cinematic experiences."
    },
    {
      name: "Sarah",
      role: "Co-Photographer & Creative Director",
      img: sarahImage,
      bio: "Specializes in capturing authentic moments and designing visually striking compositions."
    }
  ];

  return (
    <>
      {/* Full-width hero */}
       {/* Hero */}
      <MediaHero
        videoSrc={heroVideo}
        imageSrc={heroImage}
        textColor="#fff"
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

      {/* Our Story */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Story</h2>
        <p className="lead text-center">
          We believe in capturing the magic of every moment.
          From intimate family portraits to cinematic wedding films, our goal
          is to create timeless memories that you’ll treasure forever. With
          passion, creativity, and a commitment to excellence, we make your
          vision come to life.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="container my-5">
        <h2 className="text-center mb-5">Meet the Team</h2>
        <Row className="justify-content-center g-4">
          {teamMembers.map((member, idx) => (
            <Col key={idx} xs={12} md={6} lg={4}>
<div className="team-card position-relative overflow-hidden rounded shadow-sm">
  <img
    src={member.img}
    alt={member.name}
    className="img-fluid w-100 rounded-top"
  />
  <div className="p-3 text-center">
    <h3>{member.name}</h3>
    <p className="text-muted">{member.role}</p>
  </div>

  {/* Overlay */}
  <div className="team-overlay position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center text-white text-center px-3">
    <p>{member.bio}</p>
  </div>
</div>

            </Col>
          ))}
        </Row>
      </section>

      {/* Our Approach */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center row-gap-4">
            <Col md={4}>
              <img src={aboutImage} alt="Our Approach" className="img-fluid rounded shadow" />
            </Col>
            <Col md={8}>
              <h2 className="mb-4">Our Approach</h2>
              <p>
                We take a personalized approach to every project, ensuring each session is tailored to your style, story, and vision.
              </p>
              <p>
                Whether it’s a wedding, family portrait, or real estate shoot, we combine creativity, technical expertise, and attention to detail to create stunning visuals.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="align-items-center row-gap-4">
            <Col md={8}>
              <h2 className="mb-4">Why Choose Us</h2>
              <p>
                We approach every project with creativity, care, and attention to detail. 
                Whether it's a wedding, family session, or property listing, we aim to create timeless visuals.
              </p>
              <p>
                Our combination of photography and cinematic video ensures you capture the full story behind every moment.
              </p>
              <div className="mt-4">
                <Button as={Link as any} to="/contact" variant="outline-dark">
                  Get in Touch
                </Button>
              </div>
            </Col>
            <Col md={4}>
              <img src={aboutImage} alt="Why Choose Us" className="img-fluid rounded shadow" />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values */}
      <section className="py-5 bg-light">
        <Container>
          <Row className="align-items-center row-gap-4">
            <Col md={4}>
              <img src={aboutImage} alt="Our Values" className="img-fluid rounded shadow" />
            </Col>
            <Col md={8}>
              <h2 className="mb-4">Our Values</h2>
              <p>
                Authenticity, creativity, and storytelling guide everything we do. We strive to capture real emotions and moments in a way that feels natural and timeless.
              </p>
              <p>
                Building relationships with our clients is just as important as capturing beautiful images. We take the time to understand your vision and ensure a stress-free, enjoyable experience.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <Testimonials variant="carousel" className="bg-light-100" />

      {/* Instagram Feed */}
      <InstagramFeed instagramUrl="https://www.instagram.com/ts_filmphoto" />

      
    </>
  );
}
