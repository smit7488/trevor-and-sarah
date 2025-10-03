import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PhotoPage from "./pages/PhotoPage";
import VideoPage from "./pages/VideoPage";
import ContactPage from "./pages/ContactPage";
import ComingSoon from "./pages/ComingSoon";
import Services from "./pages/Services";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import usePageTracking from "./hooks/usePageTracking";
import { useFavicon } from "./hooks/useFavicon";
import lightIcon from "./assets/media/ts-icon.svg";
import darkIcon from "./assets/media/ts-icon-white.svg";

const IS_COMING_SOON = true; // toggle or use env variable

function App() {
  useFavicon(lightIcon, darkIcon);

  if (IS_COMING_SOON) {
    return <ComingSoon />;
  }

  return (
    <Router>
      {/* Hook must be inside Router */}
      <PageTrackingWrapper>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/photo" element={<PhotoPage />} />
          <Route path="/video" element={<VideoPage />} />
          <Route path="/contact" element={<ContactPage />} />
           <Route path="/services" element={<Services />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsAndConditions />} />
        </Routes>
        <Footer />
      </PageTrackingWrapper>
    </Router>
  );
}

// Optional wrapper to keep hook separate
function PageTrackingWrapper({ children }: { children: React.ReactNode }) {
  usePageTracking();
  return <>{children}</>;
}

export default App;
