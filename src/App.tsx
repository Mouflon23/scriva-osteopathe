import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronDown, Star, Quote, Clock, Users, Award, Heart } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['accueil', 'osteopathie', 'a-propos', 'tarifs', 'contact'];
      const current = sections.find(section => {
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const specialties = [
    {
      title: "Ostéopathie Structurelle",
      description: "Traitement des dysfonctions articulaires, musculaires et ligamentaires par des techniques manuelles douces.",
      icon: "🦴"
    },
    {
      title: "Ostéopathie Viscérale",
      description: "Approche thérapeutique ciblant les organes internes pour restaurer leur mobilité et leur fonction.",
      icon: "🫁"
    },
    {
      title: "Ostéopathie Crânienne",
      description: "Techniques délicates sur le crâne et le système nerveux pour traiter maux de tête, stress et troubles du sommeil.",
      icon: "🧠"
    },
    {
      title: "Ostéopathie Pédiatrique",
      description: "Soins adaptés aux nourrissons et enfants pour troubles du sommeil, coliques, torticolis congénital.",
      icon: "👶"
    }
  ];

  const conditions = [
    "Douleurs lombaires et cervicales",
    "Maux de tête et migraines",
    "Troubles digestifs",
    "Stress et anxiété",
    "Douleurs articulaires",
    "Troubles du sommeil",
    "Sciatique et cruralgie",
    "Tendinites",
    "Troubles de la grossesse",
    "Coliques du nourrisson"
  ];

  const testimonials = [
    {
      name: "Marie Dubois",
      text: "Mélissa a su soulager mes douleurs lombaires chroniques avec une approche douce et professionnelle. Je recommande vivement !",
      rating: 5
    },
    {
      name: "Pierre Martin",
      text: "Excellent suivi pour mes migraines. Mélissa prend le temps d'expliquer et ses traitements sont très efficaces.",
      rating: 5
    },
    {
      name: "Sophie Rousseau",
      text: "Un accompagnement formidable pendant ma grossesse. Mélissa a su adapter ses techniques à mes besoins spécifiques.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Mélissa Scriva</h1>
              <p className="text-sm text-teal-600 font-medium">Ostéopathe D.O.</p>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {[
                  { id: 'accueil', label: 'Accueil' },
                  { id: 'osteopathie', label: 'Ostéopathie' },
                  { id: 'a-propos', label: 'À Propos' },
                  { id: 'tarifs', label: 'Tarifs' },
                  { id: 'contact', label: 'Contact' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      activeSection === item.id
                        ? 'text-teal-600 border-b-2 border-teal-600'
                        : 'text-gray-700 hover:text-teal-600'
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
              {[
                { id: 'accueil', label: 'Accueil' },
                { id: 'osteopathie', label: 'Ostéopathie' },
                { id: 'a-propos', label: 'À Propos' },
                { id: 'tarifs', label: 'Tarifs' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-teal-600 bg-teal-50'
                      : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-teal-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Mélissa 
                <span className="block text-teal-600">Scriva</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-4 leading-relaxed">
                <span className="text-teal-600 font-semibold">Ostéopathe D.O.</span> à Aix-en-Provence
              </p>
              <p className="text-lg text-gray-700 mb-10 leading-relaxed">
                Diplômée d'un établissement agréé par le Ministère de la Santé, 
                je vous accompagne vers un mieux-être grâce à une approche holistique 
                et des techniques manuelles douces adaptées à chaque patient.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Prendre rendez-vous
                </button>
                <button
                  onClick={() => scrollToSection('osteopathie')}
                  className="px-8 py-4 border-2 border-teal-600 text-teal-600 font-semibold rounded-lg hover:bg-teal-600 hover:text-white transition-all duration-300"
                >
                  Découvrir l'ostéopathie
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mélissa Scriva - Ostéopathe à Aix-en-Provence"
                  className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-center">
                  <div className="text-2xl font-bold text-teal-600">D.O.</div>
                  <div className="text-sm text-gray-600">Diplôme d'Ostéopathe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => scrollToSection('osteopathie')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 hover:text-teal-600 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </section>

      {/* Osteopathy Section */}
      <section id="osteopathie" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">L'Ostéopathie</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              L'ostéopathie est une médecine manuelle qui considère le corps dans sa globalité. 
              Elle vise à diagnostiquer et traiter les restrictions de mobilité qui peuvent affecter 
              l'ensemble des structures du corps humain.
            </p>
          </div>

          {/* Specialties */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {specialties.map((specialty, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-4xl mb-4">{specialty.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{specialty.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{specialty.description}</p>
              </div>
            ))}
          </div>

          {/* Conditions Treated */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Motifs de consultation</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {conditions.map((condition, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <div className="w-2 h-2 bg-teal-500 rounded-full mr-3"></div>
                  <span className="text-gray-700">{condition}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="a-propos" className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">À Propos</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionnée par l'ostéopathie et le bien-être de mes patients
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cabinet d'ostéopathie"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mon parcours</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Diplômée d'un établissement agréé par le Ministère de la Santé, j'exerce l'ostéopathie 
                avec passion à Aix-en-Provence. Ma formation complète m'a permis d'acquérir une expertise 
                dans les différentes approches ostéopathiques.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Mon approche se base sur une écoute attentive de chaque patient et une prise en charge 
                personnalisée. Je m'attache à comprendre l'origine des dysfonctions pour proposer 
                un traitement adapté et durable.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Award className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-teal-600 mb-1">Diplôme D.O.</div>
                  <div className="text-sm text-gray-600">Agréé Ministère Santé</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-lg">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-lg font-bold text-blue-600 mb-1">Tous âges</div>
                  <div className="text-sm text-gray-600">Nourrissons à seniors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Ma philosophie</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Écoute & Bienveillance</h4>
                <p className="text-gray-600">Chaque patient est unique et mérite une attention particulière</p>
              </div>
              <div className="text-center">
                <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Excellence & Rigueur</h4>
                <p className="text-gray-600">Formation continue pour offrir les meilleurs soins</p>
              </div>
              <div className="text-center">
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Approche Globale</h4>
                <p className="text-gray-600">Traitement de la cause, pas seulement du symptôme</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Témoignages</h2>
            <p className="text-xl text-gray-600">Ce que disent mes patients</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-blue-50 p-6 rounded-2xl shadow-lg">
                <Quote className="text-teal-200 w-8 h-8 mb-4" />
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <div className="flex items-center justify-between">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="tarifs" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tarifs</h2>
            <p className="text-xl text-gray-600">Consultations transparentes et accessibles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consultation Adulte</h3>
              <div className="text-3xl font-bold text-teal-600 mb-4">65€</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Durée : 45-60 minutes</li>
                <li>• Anamnèse complète</li>
                <li>• Examen ostéopathique</li>
                <li>• Traitement adapté</li>
                <li>• Conseils personnalisés</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-teal-600 to-blue-600 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-white transform scale-105">
              <h3 className="text-xl font-bold mb-4">Consultation Enfant/Ado</h3>
              <div className="text-3xl font-bold mb-4">55€</div>
              <ul className="space-y-2">
                <li>• Durée : 30-45 minutes</li>
                <li>• Approche adaptée à l'âge</li>
                <li>• Techniques douces</li>
                <li>• Conseils aux parents</li>
                <li>• Suivi personnalisé</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Consultation Nourrisson</h3>
              <div className="text-3xl font-bold text-teal-600 mb-4">50€</div>
              <ul className="space-y-2 text-gray-600">
                <li>• Durée : 30 minutes</li>
                <li>• Techniques très douces</li>
                <li>• Présence des parents</li>
                <li>• Conseils pratiques</li>
                <li>• Suivi si nécessaire</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Informations pratiques</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Moyens de paiement</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Espèces</li>
                  <li>• Chèque</li>
                  <li>• Carte bancaire</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Remboursement</h4>
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

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Contact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prenez rendez-vous pour votre consultation d'ostéopathie
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Informations pratiques</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="ml-6">
                    <div className="font-semibold text-gray-900">Cabinet</div>
                    <div className="text-gray-600">123 Avenue de la République<br />13100 Aix-en-Provence</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-6">
                    <div className="font-semibold text-gray-900">Téléphone</div>
                    <div className="text-gray-600">04 42 XX XX XX</div>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-6">
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@melissascriva-osteo.fr</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-6">
                    <div className="font-semibold text-gray-900">Horaires</div>
                    <div className="text-gray-600">
                      Lun-Ven : 8h-19h<br />
                      Samedi : 8h-13h
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-900 mb-2">Prise de rendez-vous</h4>
                <p className="text-gray-600 mb-4">
                  Contactez-moi par téléphone pour convenir d'un rendez-vous. 
                  En cas d'urgence, n'hésitez pas à me laisser un message.
                </p>
                <div className="text-sm text-gray-500">
                  Délai d'annulation : 24h minimum
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Envoyez-moi un message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Prénom</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre numéro de téléphone"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Motif de consultation</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300">
                      <option>Douleurs lombaires</option>
                      <option>Maux de tête / Migraines</option>
                      <option>Douleurs cervicales</option>
                      <option>Troubles digestifs</option>
                      <option>Consultation pédiatrique</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Décrivez vos symptômes ou votre demande..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mélissa Scriva</h3>
              <p className="text-gray-400 mb-4">Ostéopathe D.O. à Aix-en-Provence</p>
              <p className="text-sm text-gray-500">
                Diplômée d'un établissement agréé par le Ministère de la Santé
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>04 42 XX XX XX</p>
                <p>contact@melissascriva-osteo.fr</p>
                <p>123 Avenue de la République<br />13100 Aix-en-Provence</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Horaires</h4>
              <div className="space-y-2 text-gray-400">
                <p>Lundi - Vendredi : 8h - 19h</p>
                <p>Samedi : 8h - 13h</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 Mélissa Scriva - Ostéopathe. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;