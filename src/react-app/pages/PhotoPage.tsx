import Grid from "../components/Grid";


export default function PhotoPage() {
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
      {/* Photo Text */}
      <section className="container my-5">
        <h1 className="text-center mb-4">Photography</h1>

      </section>

      {/* Placeholder grid */}
      <section className="my-5">
        <h2 className="text-center text-uppercase mb-4">Our Work</h2>
        <Grid items={placeholderItems} columns={{ xs: 12, md: 6, lg: 4 }} />
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
