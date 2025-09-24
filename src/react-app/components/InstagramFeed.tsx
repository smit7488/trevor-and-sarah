import React from "react";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import "./InstagramFeed.css";

const placeholderImages = [
  "https://picsum.photos/id/1011/400/400",
  "https://picsum.photos/id/1012/400/400",
  "https://picsum.photos/id/1013/400/400",
  "https://picsum.photos/id/1015/400/400",
  "https://picsum.photos/id/1016/400/400",
  "https://picsum.photos/id/1018/400/400",
];

interface InstagramFeedProps {
  images?: string[];
  instagramUrl?: string;
}

const InstagramFeed: React.FC<InstagramFeedProps> = ({
  images = placeholderImages,
  instagramUrl = "#",
}) => {
  const visibleImages = images.slice(0, 6);

  return (
    <section className="py-5 bg-light text-center">
      <Container>
        {/* Follow button */}
        <div className="mb-4 mx-auto d-inline-block">
          <Button
            variant="outline-dark"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="d-flex align-items-center justify-content-center mx-auto"
          >
            <FaInstagram size={20} className="me-2" />
            Follow us on Instagram
          </Button>
        </div>

        {/* Images grid */}
        <Row className="g-2 justify-content-center">
          {visibleImages.map((src, idx) => (
            <Col
              key={idx}
              xs={6}   // mobile: 2 per row
              sm={4}   // tablet: 3 per row
              md={2}   // desktop: 6 per row
              className={`instagram-img-col ${idx >= 4 ? "d-none d-md-block" : ""}`} // hide last 2 on mobile/tablet
            >
              <Image
                src={src}
                alt={`Instagram ${idx + 1}`}
                className="img-fluid rounded"
                style={{ objectFit: "cover", width: "100%", height: "100px" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default InstagramFeed;
