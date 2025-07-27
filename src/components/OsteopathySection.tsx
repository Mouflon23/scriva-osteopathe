import React from "react";
import { siteData } from "../data/siteData";

const OsteopathySection: React.FC = () => {
  return (
    <section id="osteopathie" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            L'Ostéopathie
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            L'ostéopathie est une médecine manuelle qui considère le corps dans
            sa globalité. Elle vise à diagnostiquer et traiter les restrictions
            de mobilité qui peuvent affecter l'ensemble des structures du corps
            humain.
          </p>
        </div>

        {/* Specialties */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {siteData.specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">{specialty.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {specialty.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conditions Treated */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Motifs de consultation
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {siteData.conditions.map((condition, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                <span className="text-gray-700">{condition}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OsteopathySection;
