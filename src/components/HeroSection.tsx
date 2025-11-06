import React from "react";

interface HeroSectionProps {
  onSectionClick: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSectionClick }) => {
  return (
    <section
      id="accueil"
      className="pt-5 min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-white to-blue-50"
      aria-label="Section d'accueil"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Mélissa
              <span className="block text-teal-600">Scriva</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
              <span className="text-teal-600 font-semibold">
                Ostéopathe D.O.
              </span>{" "}
              à Aix-en-Provence et Marignane
            </p>
            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Diplômée du Collège Ostéopathique de Provence Aix-Marseille,
              établissement agréé par le Ministère de la Santé, je vous
              accompagne avec des techniques manuelles douces adaptées à chaque
              patient.
            </p>
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center lg:text-left">
                Rendez-vous
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://www.doctolib.fr/osteopathe/aix-en-provence/melissa-scriva"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
              >
                Aix-en-Provence
              </a>
              <a
                href="/marignane"
                className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl inline-block text-center"
              >
                Marignane
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="relative">
              <img
                src="https://t3.ftcdn.net/jpg/03/18/56/32/360_F_318563228_ztOwtb9hheLIt3vyfav23W4djbXJgL9V.jpg"
                alt="Mélissa Scriva, ostéopathe D.O. diplômée, proposant des consultations d'ostéopathie à Aix-en-Provence et Marignane"
                className="rounded-2xl shadow-2xl w-full h-[450px] object-cover"
                loading="eager"
                width="800"
                height="450"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="absolute -bottom-3 -right-3 bg-white p-6 rounded-xl shadow-xl">
              <div className="text-center">
                <div className="text-2xl font-bold text-teal-600">D.O.</div>
                <div className="text-sm text-gray-600">
                  Diplôme d'Ostéopathe
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
