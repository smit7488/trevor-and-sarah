import MediaHero from "../components/MediaHero";
import heroImage from "../assets/hero-image-min.avif";
import InstagramFeed from "../components/InstagramFeed";
import Testimonials from "../components/Testimonials";

export default function AboutPage() {
  return (
    <>
      {/* Full-width hero */}
      <MediaHero
        imageSrc= {heroImage} 
        overlayContent={
          <>
            <h1 className="text-uppercase hero-overlay">About Us</h1>
          </>
        }
      />

      {/* About Us Text */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Our Story</h2>
        <p className="lead text-center">
         We believe in capturing the magic of every moment.
          From intimate family portraits to cinematic wedding films, our goal
          is to create timeless memories that you’ll treasure forever. With
          passion, creativity, and a commitment to excellence, we make your
          vision come to life.
        </p>
      </section>

      {/* Meet the Team */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Meet the Team</h2>
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div className="team-member p-3 border rounded">
              <h3>Trevor</h3>
              <p>Lead Photographer & Videographer. Passionate about storytelling through the lens and creating cinematic experiences.</p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="team-member p-3 border rounded">
              <h3>Sarah</h3>
              <p>Co-Photographer & Creative Director. Specializes in capturing authentic moments and designing visually striking compositions.</p>
            </div>
          </div>
        </div>
      </section>

       {/* Testimonials */}
      <Testimonials variant="carousel" className="bg-light-100" />

       <InstagramFeed instagramUrl="https://www.instagram.com/ts_filmphoto" />
    </>
  );
}
