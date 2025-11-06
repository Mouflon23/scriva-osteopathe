import React from "react";
import { Helmet } from "react-helmet-async";
import { siteData } from "../data/siteData";

const MarignanePage: React.FC = () => {
  const marignaneData = siteData.contact.marignane;

  // Helper function to convert opening hours to Schema.org format
  const convertOpeningHours = (hours: string): string => {
    const dayMap: { [key: string]: string } = {
      Lundi: "Mo",
      Mardi: "Tu",
      Mercredi: "We",
      Jeudi: "Th",
      Vendredi: "Fr",
      Samedi: "Sa",
      Dimanche: "Su",
    };

    // Extract day name and hours
    const match = hours.match(/(\w+) : (\d+)h(\d+) - (\d+)h(\d+)/);
    if (!match) return hours;

    const [, day, startHour, startMin, endHour, endMin] = match;
    const dayCode = dayMap[day] || day;

    return `${dayCode} ${startHour.padStart(2, "0")}:${startMin.padStart(
      2,
      "0"
    )}-${endHour.padStart(2, "0")}:${endMin.padStart(2, "0")}`;
  };

  return (
    <>
      <Helmet>
        <title>Cabinet d'Ostéopathie Marignane - Mélissa Scriva</title>
        <meta
          name="description"
          content="Consultations d'ostéopathie à Marignane avec Mélissa Scriva. Cabinet collaboratif avec Mylene Larcher. Prise de rendez-vous en ligne via Doctolib. Horaires : Mercredi 14h-20h, Vendredi 7h-20h, Samedi 9h-15h."
        />
        <meta
          name="keywords"
          content="ostéopathe Marignane, consultation ostéopathie Marignane, Mélissa Scriva Marignane, cabinet ostéopathie Marignane, rendez-vous ostéopathe Marignane"
        />
        <link rel="canonical" href="https://scriva-osteopathe.fr/marignane" />
        <meta
          property="og:title"
          content="Cabinet d'Ostéopathie Marignane - Mélissa Scriva"
        />
        <meta
          property="og:description"
          content="Consultations d'ostéopathie à Marignane. Prise de rendez-vous en ligne."
        />
        <meta
          property="og:url"
          content="https://scriva-osteopathe.fr/marignane"
        />
        <meta property="og:type" content="website" />
        <meta
          property="twitter:title"
          content="Cabinet d'Ostéopathie Marignane - Mélissa Scriva"
        />
        <meta
          property="twitter:description"
          content="Consultations d'ostéopathie à Marignane. Prise de rendez-vous en ligne."
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Accueil",
                item: "https://scriva-osteopathe.fr/",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Cabinet de Marignane",
                item: "https://scriva-osteopathe.fr/marignane",
              },
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            name: "Cabinet d'Ostéopathie Marignane - Mélissa Scriva",
            description:
              "Cabinet d'ostéopathie à Marignane. Consultations pour adultes, enfants et nourrissons.",
            url: "https://scriva-osteopathe.fr/marignane",
            telephone: `+33${marignaneData.phone.replace(/\s/g, "")}`,
            email: siteData.contact.email,
            priceRange: "€€",
            medicalSpecialty: "Osteopathy",
            location: {
              "@type": "Place",
              name: "Cabinet d'ostéopathie Marignane",
              address: {
                "@type": "PostalAddress",
                streetAddress: marignaneData.address.street,
                addressLocality: marignaneData.address.city
                  .split(" ")
                  .slice(1)
                  .join(" "),
                postalCode: marignaneData.address.city.split(" ")[0],
                addressRegion: "Provence-Alpes-Côte d'Azur",
                addressCountry: "FR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "43.4167",
                longitude: "5.2167",
              },
              openingHours: [
                convertOpeningHours(marignaneData.hours.wednesday),
                convertOpeningHours(marignaneData.hours.friday),
                convertOpeningHours(marignaneData.hours.saturday),
              ],
              telephone: `+33${marignaneData.phone.replace(/\s/g, "")}`,
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <a
                  href="/"
                  className="text-teal-600 hover:text-teal-700 font-semibold"
                >
                  ← Retour à l'accueil
                </a>
              </div>
              <h1 className="text-2xl font-bold text-gray-900">Marignane</h1>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Cabinet d'Ostéopathie Marignane
                </h2>
                <p className="text-xl text-gray-600">
                  Collaboration avec Mylene Larcher
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    📍 Adresse
                  </h3>
                  <p className="text-gray-700 mb-2">
                    Cabinet d'Ostéopathie Marignane
                  </p>
                  <p className="text-gray-700 mb-2">
                    {marignaneData.address.street}
                  </p>
                  <p className="text-gray-700 font-semibold">
                    {marignaneData.address.city}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    🕒 Horaires
                  </h3>
                  <div className="space-y-1">
                    <p className="text-gray-700">
                      {marignaneData.hours.wednesday}
                    </p>
                    <p className="text-gray-700">
                      {marignaneData.hours.friday}
                    </p>
                    <p className="text-gray-700">
                      {marignaneData.hours.saturday}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  🤝 Notre Collaboration
                </h3>
                <p className="text-gray-700 mb-4">
                  Je collabore avec Mylene Larcher pour vous offrir des soins
                  ostéopathiques de qualité dans la région de Marignane. Cette
                  collaboration vous permet de bénéficier de soins
                  ostéopathiques près de chez vous tout en conservant la même
                  approche thérapeutique.
                </p>
                <p className="text-gray-700">
                  Le cabinet est équipé d'un ascenseur et dispose d'un parking
                  gratuit pour votre confort.
                </p>
              </div>

              <div className="bg-blue-50 rounded-lg p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  📞 Prise de Rendez-vous
                </h3>
                <p className="text-gray-700 mb-4">
                  Pour prendre rendez-vous au cabinet de Marignane, vous avez
                  plusieurs options :
                </p>
                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>
                      <strong>Doctolib :</strong> Réservez en ligne via la
                      plateforme Doctolib
                    </span>
                  </li>
                </ul>

                <div className="bg-teal-50 p-6 rounded-xl mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Instructions pour Doctolib
                  </h4>
                  <p className="text-gray-600 mb-4">
                    Vous serez redirigé vers le profil de Mylene Larcher.
                  </p>
                  <div className="space-y-2 text-gray-600 mb-4">
                    <p>
                      <strong>Étape 1 :</strong> Cliquez sur le bouton "Prendre
                      rendez-vous sur Doctolib" ci-dessous
                    </p>
                    <p>
                      <strong>Étape 2 :</strong> Sélectionnez le{" "}
                      <span className="font-semibold text-teal-600">
                        Cabinet de Marignane
                      </span>{" "}
                      dans la liste des cabinets
                    </p>
                    <p>
                      <strong>Étape 3 :</strong> Choisissez les horaires avec
                      les{" "}
                      <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-1"></span>
                      <span className="font-semibold text-blue-600">
                        pastilles bleues
                      </span>{" "}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 text-gray-700 mb-6">
                  <li className="flex items-start">
                    <span className="text-teal-600 mr-2">•</span>
                    <span>
                      <strong>Téléphone :</strong> {marignaneData.phone}
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <a
                  href={marignaneData.doctolib}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Prendre rendez-vous sur Doctolib
                </a>
              </div>
            </div>

            {/* Transport Information */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                🚌 Accès et Transports
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Transports en commun
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Bus - Ave De L'Europe (ligne ZEN)</li>
                    <li>• Bus - Les Oliviers (lignes 5 et 58)</li>
                    <li>• Bus - Collège J. Prévert (ligne 5)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">
                    Informations pratiques
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 1er étage avec ascenseur</li>
                    <li>• Entrée accessible</li>
                    <li>• Parking gratuit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default MarignanePage;
