import { useEffect, useState, JSX } from "react";
import client from "../contentfulClient";
import Grid from "../components/Grid";
import BasicHero from "../components/BasicHero";
import Testimonials from "../components/Testimonials";
import Badge from "react-bootstrap/Badge";
import InstagramFeed from "../components/InstagramFeed";
import CallToAction from "../components/CallToAction";

export default function VideoPage() {
  const [videoItems, setVideoItems] = useState<JSX.Element[]>([]);

  useEffect(() => {
    client
      .getEntries({
        content_type: "portfolioItem",
        include: 2, // ensures linked entries like genres are included
      })
      
      .then((response: any) => {
        const mapped = response.items
        
          .map((item: any, idx: number) => {
            const fields = item.fields;
            const media = fields.media;
            const embed = fields.embed;

            // Only include videos
            const mediaUrl = media ? `https:${media.fields.file.url}` : "";
            const contentType = media?.fields.file.contentType || "";
            if (!(contentType.startsWith("video/") || embed)) return null;

            // Genres: linked entries
            const genres = Array.isArray(fields.genre) ? fields.genre : [];

            return (
              <div
                key={idx}
                className="portfolio-card text-center p-3 bg-white border rounded shadow-sm h-100"
              >
                {/* Video or Embed */}
                {contentType.startsWith("video/") && (
                  <video
                    src={mediaUrl}
                    className="img-fluid mb-3 rounded"
                    controls
                    playsInline
                  />
                )}

                {typeof embed === "string" && !contentType.startsWith("video/") && (
                  <div className="embed-responsive embed-responsive-16by9 mb-3">
                    <iframe
                      src={embed}
                      title={fields.title}
                      className="w-100"
                      height={200}
                      frameBorder={0}
                      allowFullScreen
                    />
                  </div>
                )}

                {/* Text Content */}
                <h5 className="fw-bold">{fields.title}</h5>
                <p className="text-muted">{fields.description}</p>

                {/* Genre Badges */}
                <div className="mb-2">
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
            );
          })
          .filter(Boolean) as JSX.Element[];

        setVideoItems(mapped);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <BasicHero title="Film" />

      {/* Video Grid */}
      <section className="my-5">

        <Grid items={videoItems} columns={{ xs: 12, md: 6, lg: 4 }} />
      </section>

     <Testimonials variant="carousel" />

     <CallToAction
        heading="Lights, Camera... You!"
        subheading="Let us capture your most memorable moments with cinematic quality and storytelling flair."
        bgColor="#2b2b2b"
        textColor="#fff"
        buttonText="Get Started"
        buttonLink="/contact"
      />

    <InstagramFeed instagramUrl="https://www.instagram.com/ts_filmphoto" />
    </>
  );
}
