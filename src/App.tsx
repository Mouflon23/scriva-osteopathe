import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import OsteopathySection from "./components/OsteopathySection";
import AboutSection from "./components/AboutSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import MarignanePage from "./components/MarignanePage";
import { useScrollTracking } from "./hooks/useScrollTracking";

function HomePage() {
  const { activeSection, scrollToSection } = useScrollTracking();

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        activeSection={activeSection}
        onSectionClick={scrollToSection}
      />

      <HeroSection onSectionClick={scrollToSection} />
      <OsteopathySection />
      <AboutSection />
      <TestimonialsSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

function AppRouter() {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle original path from GitHub Pages 404 redirect
    const originalPath = sessionStorage.getItem("originalPath");
    if (originalPath) {
      navigate(originalPath);
      // Clear the stored path
      sessionStorage.removeItem("originalPath");
    }
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/marignane" element={<MarignanePage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
