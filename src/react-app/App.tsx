import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PhotoPage from "./pages/PhotoPage";
import VideoPage from "./pages/VideoPage";
import ContactPage from "./pages/ContactPage";
import ComingSoon from "./pages/ComingSoon";

const IS_COMING_SOON = true; // toggle this on/off, or use env variable

function App() {
  if (IS_COMING_SOON) {
    // Completely bypass nav/footer and routes
    return <ComingSoon />;
  }

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/photo" element={<PhotoPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
