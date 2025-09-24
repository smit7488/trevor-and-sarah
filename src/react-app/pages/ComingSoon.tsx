import MediaHero from "../components/MediaHero";
import heroVideo from "../assets/hero-bg-v1.mp4";
import tsLogo from "../assets/trevor-and-sarah-logo-vertical-white.svg";



export default function ComingSoon() {

  return (
    <>
      {/* Hero */}
      <MediaHero
        videoSrc={heroVideo}
        className="coming-soon-hero" 
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
    </>
  );
}
