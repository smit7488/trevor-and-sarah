import MediaHero from "../components/MediaHero";
import heroVideo from "../assets/media/hero-bg-v1.mp4";
import heroImage from "../assets/media/hero-bg-v1.avif";
import tsLogo from "../assets/media/trevor-and-sarah-logo-vertical-white.svg";



export default function Maintenance() {

  return (
    <>
      {/* Hero */}
      <MediaHero
        videoSrc={heroVideo}
        imageSrc={heroImage}
        textColor="#fff"
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
              Site is undergoing maintenance. Please check back later!
            </p>
          </>
        }
      />
    </>
  );
}
