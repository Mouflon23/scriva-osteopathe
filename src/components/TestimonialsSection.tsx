import React from "react";
import { Quote, Star } from "lucide-react";
import { siteData } from "../data/siteData";

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Témoignages
          </h2>
          <p className="text-xl text-gray-600">Ce que disent mes patients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {siteData.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-lg"
            >
              <Quote className="text-teal-200 w-8 h-8 mb-4" />
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <div className="flex items-center justify-between">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-amber-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
