import { useEffect, useState, useRef, JSX } from "react";
import client from "../contentfulClient";
import { PortfolioItem } from "../types/contentful";
import Masonry from "react-masonry-css";
import RandomContentfulInstagramFeed from "../components/RandomContentfulInstagramFeed";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import MediaHero from "../components/MediaHero";
import heroImage from "../assets/media/ts-logo-bg.jpg";
import wireblock from "../assets/media/wireblocks/photo-wireblock.svg";
import Badge from "react-bootstrap/Badge";
import { FaMapMarkerAlt } from "react-icons/fa";

function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export default function PhotoPage() {
  const [photoItems, setPhotoItems] = useState<JSX.Element[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    client
      .getEntries({ content_type: "portfolioItem" })
      .then((response) => {
        const mapped = response.items
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .map((item: any, idx: number) => {
            const fields: PortfolioItem["fields"] = item.fields;
            const photos = fields.photos || [];
            const genres = Array.isArray(fields.genre) ? fields.genre : [];

            if (!photos.length) return null;

            return photos.map((photo: any, pIdx: number) => {
              if (!photo.fields?.file?.contentType.startsWith("image/")) return null;
              const mediaUrl = `https:${photo.fields.file.url}`;

              return (
                <div
                  key={`${idx}-${pIdx}`}
                  className="masonry-item relative overflow-hidden rounded shadow-sm fade-observe"
                >
                  <img
                    src={mediaUrl}
                    alt={fields.title}
                    loading="lazy"
                    className="img-fluid w-100 d-block rounded"
                  />
                  <div className="overlay absolute bottom-0 left-0 w-100 bg-[#1a1a1a]/60 text-white p-3 translate-y-full transition-transform duration-300 d-flex flex-column justify-content-end">
                    <div className="d-flex justify-content-between align-items-center mb-1 gap-1">
                      <div>
                        {photo.fields.description && (
                          <p className="mb-0 xx-small text-light">{photo.fields.description}</p>
                        )}
                      </div>
                      {fields.location && (
                        <div className="d-flex align-items-center text-muted small">
                          <FaMapMarkerAlt className="me-1 text-light xx-small" />
                          <span className="text-truncate text-light xx-small mb-0">
                            {fields.location}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="mb-0">
                      {genres.map((genre: any, gIdx: number) => {
                        const title = genre?.fields?.name || "Unknown Genre";
                        return (
                          <Badge key={gIdx} bg="secondary" className="me-1">
                            {title}
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            });
          })
          .flat()
          .filter(Boolean) as JSX.Element[];

        setPhotoItems(shuffle(mapped));
      })
      .catch(console.error);
  }, []);

  // Fade in on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
            observer.unobserve(entry.target); // stop observing once visible
          }
        });
      },
      { threshold: 0.2 } // 20% visible triggers animation
    );

    const elements = containerRef.current?.querySelectorAll(".fade-observe");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [photoItems]);

  const breakpointColumnsObj = {
    default: 3,
    1200: 3,
    992: 2,
    576: 1,
  };

  return (
    <>
      <MediaHero
        imageSrc={heroImage}
        overlayContent={<h1 className="text-uppercase">Photo</h1>}
        height="half"
        photoOnly
        wireblock={wireblock}
        textColor="#fff"
      />

      <div className="container grid-mt-n5 mb-5 position-relative z-3" ref={containerRef}>
        <section>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="masonry-grid"
            columnClassName="masonry-grid_column"
          >
            {photoItems}
          </Masonry>
        </section>
      </div>

      <Testimonials variant="carousel" className="bg-light-100" />
      <CallToAction
        heading="Like what you see?"
        subheading="Give us a shout and let's create something beautiful together."
        bgColor="#2b2b2b"
        textColor="#fff"
        buttonText="Get in Touch"
        buttonLink="/contact"
      />
      <RandomContentfulInstagramFeed instagramUrl="https://www.instagram.com/ts_filmphoto" />
    </>
  );
}
