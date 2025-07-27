import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { siteData } from "../data/siteData";

interface NavigationProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  activeSection,
  onSectionClick,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSectionClick = (sectionId: string) => {
    onSectionClick(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <div className="flex items-center space-x-3">
              <img
                src="/images/logo.jpg"
                alt="Mélissa Scriva - Ostéopathe"
                className="h-12 w-12 rounded-full object-cover shadow-sm"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Mélissa Scriva
                </h1>
                <p className="text-sm text-teal-600 font-medium">
                  Ostéopathe D.O.
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {siteData.navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleSectionClick(item.id)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    activeSection === item.id
                      ? "text-teal-600 border-b-2 border-teal-600"
                      : "text-gray-700 hover:text-teal-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {siteData.navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => handleSectionClick(item.id)}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-teal-600 bg-teal-50"
                    : "text-gray-700 hover:text-teal-600 hover:bg-gray-50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
