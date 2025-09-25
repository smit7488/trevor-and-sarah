import { useEffect, useState, JSX } from "react";
import client from "../contentfulClient";
import { PortfolioItem } from "../types/contentful";
import Grid from "../components/Grid";
import InstagramFeed from "../components/InstagramFeed";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";

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
            const media = fields.media;

            // Skip items that aren't images
            if (!media || !media.fields.file.contentType.startsWith("image/")) {
              return null;
            }

            const mediaUrl = `https:${media.fields.file.url}`;

            return (
              <div
                key={idx}
                className="portfolio-card text-center p-3 bg-white border rounded shadow-sm h-100"
              >
                <img
                  src={mediaUrl}
                  alt={fields.title}
                  className="img-fluid mb-3 rounded"
                />
                <h5 className="fw-bold">{fields.title}</h5>
                <p className="text-muted">{fields.description}</p>
                <small className="text-uppercase text-secondary">
                  {fields.category}
                </small>
              </div>
            );
          })
          .filter(Boolean) as JSX.Element[]; // remove nulls

        setPhotoItems(mapped);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      {/* Page Heading */}
      <section className="container my-5">
        <h1 className="text-center mb-4">Photography</h1>
      </section>

      {/* Photo Grid */}
      <section className="my-5">
        <h2 className="text-center text-uppercase mb-4">Our Work</h2>
        <Grid items={photoItems} columns={{ xs: 12, md: 6, lg: 4 }} />
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
