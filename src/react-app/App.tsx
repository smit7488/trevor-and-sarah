import tsLogo from "./assets/trevor-and-sarah-logo-vertical-white.svg";
import "./App.css";
import Navigation from "./components/Navigation";
import VideoHero from "./components/VideoHero";
import heroVideo from "./assets/hero-video.mp4";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navigation />
      
      <VideoHero
        videoSrc={heroVideo}
        overlayContent={
          <>
            <img src={tsLogo} className="logo trevorandsarah" alt="Trevor & Sarah logo" />
            <p
              className="text-uppercase mt-5"
              style={{ letterSpacing: "0.15em" }}
            >
              Coming Soon!
            </p>
          </>
        }
      />
           <Footer />
    </>
  );
}

export default App;
