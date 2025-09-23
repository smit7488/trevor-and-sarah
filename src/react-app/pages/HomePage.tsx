import MediaHero from "../components/MediaHero";
import Grid from "../components/Grid";
import heroVideo from "../assets/hero-video.mp4";
import tsLogo from "../assets/trevor-and-sarah-logo-vertical-white.svg";

export default function HomePage() {
  // Simple placeholder items
  const placeholderItems = Array.from({ length: 6 }, (_, i) => (
    <div
      key={i}
      className="placeholder-box text-center p-5 bg-light border rounded"
    >
      Placeholder {i + 1}
    </div>
  ));

  return (
    <>
      {/* Hero */}
      <MediaHero
        videoSrc={heroVideo}
        overlayContent={
          <>
            <img src={tsLogo} className="logo trevorandsarah" alt="Trevor & Sarah logo" />
            <p className="text-uppercase mt-5" style={{ letterSpacing: "0.15em" }}>
              Coming Soon!
            </p>
          </>
        }
      />

      {/* Placeholder grid */}
      <section className="my-5">
        <h2 className="text-center text-uppercase mb-4">Our Work</h2>
        <Grid items={placeholderItems} columns={{ xs: 12, md: 6, lg: 4 }} />
      </section>
    </>
  );
}
