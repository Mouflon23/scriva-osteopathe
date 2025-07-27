import { useState, useEffect } from "react";
import { siteData } from "../data/siteData";

export const useScrollTracking = () => {
  const [activeSection, setActiveSection] = useState("accueil");

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteData.navigation.map((item) => item.id);
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return { activeSection, scrollToSection };
};
