import { useEffect, useState, JSX } from "react";
import client from "../contentfulClient";
import { PortfolioItem } from "../types/contentful";
import Masonry from "react-masonry-css";
import InstagramFeed from "../components/InstagramFeed";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import MediaHero from "../components/MediaHero";
import heroImage from "../assets/hero-bg-v1.avif";
import Badge from "react-bootstrap/Badge";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function PhotoPage() {
  const [photoItems, setPhotoItems] = useState<JSX.Element[]>([]);

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

              // Pull title/description from the asset itself, fallback to portfolio item
              const photoTitle = photo.fields.title || fields.title;
              const photoDescription = photo.fields.description || fields.description;

              return (
                <div
                  key={`${idx}-${pIdx}`}
                  className="masonry-item relative overflow-hidden rounded shadow-sm"
                >
                  <img
                    src={mediaUrl}
                    alt={fields.title}
                    className="img-fluid w-100 d-block rounded"
                  />

                  <div className="overlay absolute bottom-0 left-0 w-100 bg-[#1a1a1a]/60 text-white p-3 translate-y-full transition-transform duration-300 d-flex flex-column justify-content-end">
  {/* Top line: Portfolio title + location */}
  <div className="d-flex justify-content-between align-items-center mb-1" style={{ gap: "0.25rem" }}>
     {/* <h5 className="fw-bold mb-0 text-truncate text-light">{fields.title}</h5> */}
 {/* Photo asset info */}
  {photo.fields.title && (
    <h6 className="fw-bold mb-0 text-truncate text-light">{photo.fields.title}</h6>
  )}
    {fields.location && (
      <div className="d-flex align-items-center text-muted small ms-2">
        <FaMapMarkerAlt className="me-1 text-light xx-small" />
        <span className="text-truncate text-light xx-small">{fields.location} </span>
      </div>
    )}
  </div>

  {/* Portfolio description 
  {fields.description && (
    <p className="mb-1 small text-truncate text-light">{fields.description}</p>
  )} */}

 
  {photo.fields.description && (
    <p className="mb-1 small text-truncate text-light">{photo.fields.description}</p>
  )}

      {/* Genre Badges */}
                    <div className="mb-0">
                      {genres.map((genre: any, gIdx: number) => {
                        const title = genre?.fields?.name || "Unknown Genre"; // or title if your field is called that
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

        setPhotoItems(mapped);
      })
      .catch(console.error);
  }, []);

  const breakpointColumnsObj = {
    default: 5, // desktop
    992: 3,     // tablet
    576: 2,     // mobile
  };

  return (
    <>
      <MediaHero
        imageSrc={heroImage}
        overlayContent={<h1>Photo</h1>}
        height="half"
        photoOnly
        textColor="#fff"
      />

      {/* Photo Grid - Masonry */}
      <section className="grid-mt-n5 mb-5 mx-3 position-relative z-2">

        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {photoItems}
        </Masonry>
      </section>

      {/* Testimonials */}
      <Testimonials variant="carousel" className="bg-light-100" />

      <CallToAction
        heading="Like what you see?"
        subheading="Give us a shout and let's create something beautiful together."
        bgColor="#2b2b2b"
        textColor="#fff"
        buttonText="Get in Touch"
        buttonLink="/contact"
      />

      <InstagramFeed instagramUrl="https://www.instagram.com/ts_filmphoto" />
    </>
  );
}
