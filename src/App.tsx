import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/marignane" element={<MarignanePage />} />
      </Routes>
    </Router>
  );
}

export default App;
