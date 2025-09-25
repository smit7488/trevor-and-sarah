import MediaHero from "../components/MediaHero";
import heroImage from "../assets/hero-image-min.avif";

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

      {/* Testimonial / Value Prop */}
      <section className="bg-light py-5 text-center">
        <div className="container">
          <blockquote className="blockquote">
            <p className="mb-3">
              "Trevor & Sarah made our wedding unforgettable! Every photo and video
              tells the story beautifully — we couldn’t be happier."
            </p>
            <footer className="blockquote-footer">Happy Couple</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact / Form Placeholder */}
      <section className="container my-5">
        <h2 className="text-center mb-4">Get in Touch</h2>
        <div className="border rounded p-5 text-center">
          {/* Replace this with your actual form component */}
          <p>Form Placeholder</p>
        </div>
      </section>
    </>
  );
}
