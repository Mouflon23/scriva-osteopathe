import React from "react";
import { siteData } from "../data/siteData";

const PricingSection: React.FC = () => {
  return (
    <section id="tarifs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tarifs
          </h2>
        </div>

        {/* Tarif unique mis en avant */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-teal-600 to-blue-600 text-white p-12 rounded-3xl shadow-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">Consultation</h3>
            <div className="text-5xl font-bold mb-6">60€</div>
            <p className="text-xl mb-8 opacity-90">
              Tous publics • 45-60 minutes
            </p>
            <div className="bg-white bg-opacity-20 rounded-2xl p-6">
              <h4 className="font-semibold mb-4 text-lg">
                Inclus dans votre consultation :
              </h4>
              <ul className="space-y-2 text-left max-w-md mx-auto">
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Anamnèse complète
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Examen ostéopathique
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Traitement adapté
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Conseils personnalisés
                </li>
                <li className="flex items-center">
                  <span className="mr-3">✓</span>
                  Suivi si nécessaire
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Informations sur les différents publics */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-4">👶</div>
            <h4 className="font-semibold text-gray-900 mb-2">Nourrissons</h4>
            <p className="text-gray-600 text-sm">
              Techniques très douces, présence des parents, conseils pratiques
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-4">👧👦</div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Enfants & Adolescents
            </h4>
            <p className="text-gray-600 text-sm">
              Approche adaptée à l'âge, techniques douces, conseils aux parents
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center">
            <div className="text-4xl mb-4">👨‍🦳👩‍🦳</div>
            <h4 className="font-semibold text-gray-900 mb-2">Adultes</h4>
            <p className="text-gray-600 text-sm">
              Consultation complète, traitement personnalisé, suivi adapté
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Informations pratiques
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Moyens de paiement
              </h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Carte bancaire</li>
                <li>• Espèces</li>
                <li>• Chèque</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">
                Remboursement
              </h4>
              <ul className="text-gray-600 space-y-1">
                <li>• Mutuelle selon contrat</li>
                <li>• Facture fournie</li>
                <li>• Devis sur demande</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
