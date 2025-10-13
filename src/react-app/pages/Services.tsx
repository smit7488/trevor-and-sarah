import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MediaHero from "../components/MediaHero";
import heroVideo from "../assets/media/hero-bg-v1.mp4";
import heroImage from "../assets/media/hero-bg-v1.avif";
import tsLogo from "../assets/media/trevor-and-sarah-logo-vertical-white.svg";
import aboutImage from "../assets/media/IG-image.jpg"; 
import Testimonials from "../components/Testimonials";
import RandomContentfulInstagramFeed from "../components/RandomContentfulInstagramFeed";
import CallToAction from "../components/CallToAction";

export default function ServicesPage() {
  const services = [
    {
      title: "Weddings",
      description: `Your wedding day is one of the most important days of your life, and we strive to capture every detail with cinematic video and timeless photography. From the first look to the final dance, our goal is to tell the story of your love authentically and beautifully.

We focus on genuine moments and emotions, ensuring that each image and clip transports you back to the feeling of that day. Every wedding we capture is unique, and we tailor our approach to reflect your style, personalities, and the atmosphere of your celebration.`,
      image: aboutImage,
      cta: "Book a Wedding",
    },
    {
      title: "Engagements",
      description: `Celebrate your love with an engagement session that reflects your connection and personalities. We create a fun, relaxed environment where couples can be themselves, resulting in stunning images that showcase your relationship.

Our approach combines natural poses, candid moments, and cinematic compositions. These sessions not only produce beautiful keepsakes, but also give you a chance to get comfortable in front of the camera before your big day.`,
      image: aboutImage,
        cta: "Book an Engagement",
    },
    {
      title: "Family",
      description: `Family sessions are all about capturing real connections, laughter, and shared experiences. We focus on the little moments—sibling giggles, parent-child interactions, and the warmth of family bonds—that make your family unique.

Our goal is to create portraits that feel genuine and timeless, whether outdoors, in your home, or at a location meaningful to your family. These images become cherished memories that you’ll treasure for years to come.`,
      image: aboutImage,
        cta: "Book a Family Session",
    },
    {
      title: "Portraits",
      description: `Professional portraits are an opportunity to highlight your personality, style, and individuality. We work with you to create images that are authentic, confident, and visually striking, whether for personal use or professional branding.

Every session is tailored to your needs, from location and wardrobe to lighting and poses. Our aim is to make you feel comfortable and empowered, resulting in portraits that truly represent who you are.`,
      image: aboutImage,
        cta: "Book a Portrait Session",
    },
    {
      title: "Real Estate & Construction",
      description: `Showcase properties in their best light with professional real estate photography and video. High-quality visuals make a difference in attracting potential buyers and conveying the value and character of each property.

We focus on composition, lighting, and detail, ensuring every room and exterior looks its best. From residential homes to commercial spaces, our photography and videography help listings stand out in a competitive market.`,
      image: aboutImage,
        cta: "Book for Real Estate",
    },
    {
  title: "Events",
  description: `From corporate gatherings to birthday parties, we capture the energy, excitement, and emotion of every event. Our approach combines candid moments with dynamic compositions to create a complete story of your special occasion.

We work closely with you to understand the vibe and key moments to capture, whether it's speeches, performances, or behind-the-scenes details. The result is a collection of photos and videos that truly reflect the atmosphere and significance of your event.`,
  image: aboutImage, // Replace with a suitable event image
    cta: "Book an Event",
},

    
  ];

  return (
    <>
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
            <p className="text-uppercase mt-5" style={{ letterSpacing: "0.15em" }}>
              Our Services
            </p>
          </>
        }
      />

      {/* Services Sections */}
      {services.map((service, idx) => {
        const isEven = idx % 2 === 0;
        const bgColor = idx % 2 === 0 ? "bg-white" : "bg-light-100";
        return (
          <section key={idx} className={`py-5 ${bgColor}`} id={service.title.toLowerCase()}>
            <Container>
              <Row className="align-items-center row-gap-4">
                {/* Text Column */}
                <Col md={6} className={isEven ? undefined : "order-md-2"}>
                  <h2 className="mb-4">{service.title}</h2>
                  {service.description.split("\n\n").map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  <div className="mt-4">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    <Button as={Link as any} to="/contact" variant="outline-dark">
                      {service.cta}
                    </Button>
                  </div>
                </Col>

                {/* Image Column */}
                <Col md={6} className={isEven ? undefined : "order-md-1"}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="img-fluid rounded shadow"
                  />
                </Col>
              </Row>
            </Container>
          </section>
        );
      })}

      {/* Testimonials */}
      <Testimonials variant="carousel" className="bg-light-100" />

      {/* Call to Action */}
      <CallToAction
        heading="Ready to Capture Your Moments?"
        subheading="Let us help you preserve memories that last a lifetime."
        bgColor="#2b2b2b"
        textColor="#fff"
        buttonText="Get in Touch"
        buttonLink="/contact"
      />

      {/* Instagram Feed */}
  <RandomContentfulInstagramFeed instagramUrl="https://www.instagram.com/ts_filmphoto" /> 
    </>
  );
}
