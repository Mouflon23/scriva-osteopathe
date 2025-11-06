import React from "react";
import { Award, Users, Heart } from "lucide-react";

const AboutSection: React.FC = () => {
  return (
    <section
      id="a-propos"
      className="py-20 bg-gradient-to-br from-blue-50 to-teal-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            À Propos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionnée par l'ostéopathie et le bien-être de mes patients
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cabinet d'ostéopathie moderne et accueillant avec équipement professionnel pour consultations à Aix-en-Provence"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              loading="lazy"
              width="800"
              height="400"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Mon parcours
            </h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Diplômée d'un établissement agréé par le Ministère de la Santé,
              j'exerce l'ostéopathie avec passion à Aix-en-Provence et
              Marignane. Ma formation complète m'a permis d'acquérir une
              expertise dans les différentes approches ostéopathiques.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Mon approche se base sur une écoute attentive de chaque patient et
              une prise en charge personnalisée. Je m'attache à comprendre
              l'origine des dysfonctions pour proposer un traitement adapté et
              durable.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Award className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-teal-600 mb-1">
                  Diplôme D.O.
                </div>
                <div className="text-sm text-gray-600">
                  Agréé Ministère Santé
                </div>
              </div>
              <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-lg font-bold text-blue-600 mb-1">
                  Tous âges
                </div>
                <div className="text-sm text-gray-600">
                  Nourrissons à seniors
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Ma philosophie
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Écoute & Bienveillance
              </h4>
              <p className="text-gray-600">
                Chaque patient est unique et mérite une attention particulière
              </p>
            </div>
            <div className="text-center">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Excellence & Rigueur
              </h4>
              <p className="text-gray-600">
                Formation continue pour offrir les meilleurs soins
              </p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-3">
                Approche Globale
              </h4>
              <p className="text-gray-600">
                Traitement de la cause, pas seulement du symptôme
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
