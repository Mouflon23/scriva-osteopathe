export const siteData = {
  navigation: [
    { id: "accueil", label: "Accueil" },
    { id: "osteopathie", label: "Ostéopathie" },
    { id: "a-propos", label: "À Propos" },
    { id: "tarifs", label: "Tarifs" },
    { id: "contact", label: "Contact" },
  ],

  specialties: [
    {
      title: "Ostéopathie Structurelle",
      description:
        "Traitement des dysfonctions articulaires, musculaires et ligamentaires par des techniques manuelles douces.",
      icon: "🦴",
    },
    {
      title: "Ostéopathie Viscérale",
      description:
        "Approche thérapeutique ciblant les organes internes pour restaurer leur mobilité et leur fonction.",
      icon: "🫁",
    },
    {
      title: "Ostéopathie Crânienne",
      description:
        "Techniques délicates sur le crâne et le système nerveux pour traiter maux de tête, stress et troubles du sommeil.",
      icon: "🧠",
    },
    {
      title: "Ostéopathie pour la femme",
      description:
        "Soins spécialisés pour les femmes : troubles gynécologiques, grossesse, endométriose et accompagnement hormonal.",
      icon: "🌸",
    },
  ],

  conditions: [
    "Douleurs de dos (ponctuelles ou chroniques)",
    "Douleurs liées à l'activité sportive",
    "Troubles gynécologiques et urinaires",
    "Troubles digestifs",
    "Maux de tête chroniques",
    "Problèmes de mâchoire (serrement de dents)",
    "Douleurs liées à la grossesse",
    "Endométriose",
    "Bilan postural",
    "Ostéopathie du sport",
  ],

  testimonials: [
    {
      name: "Julia Chaillet",
      text: "Professionnelle et à l’écoute, le Docteur Scriva prend (vraiment) le temps de discuter avec ses patients afin de connaître chacun de nos antécédents et d’établir un bilan complet. Je la remercie pour ce temps accordé en toute bienveillance durant nos consultations et pour la qualité de ses soins.",
      rating: 5,
    },
    {
      name: "Tiphaine Henry",
      text: "Ostéopathe professionnelle et douce ! Elle prend le temps de bien vous diagnostiquer et de faire un bilan en fin de séance pour expliquer les manipulations effectuées. Grace à Mme Scriva, je n'ai plus de craintes d'aller chez un Ostéopathe, je la recommande !",
      rating: 5,
    },
    {
      name: "Anouk Feraud",
      text: "J'ai consulté deux fois cette professionnelle lors de ma grossesse pour de très fortes douleurs dorsales. Les bienfaits de ces séances ont été instantanés et ont dépassé mes espérances. Ostéopathe à l'écoute et réellement investie dans le bien être de ses patients. Je la recommande fortement.",
      rating: 5,
    },
  ],

  pricing: [
    {
      title: "Consultation Nourrisson",
      price: "50€",
      features: [
        "Durée : 30 minutes",
        "Techniques très douces",
        "Présence des parents",
        "Conseils pratiques",
        "Suivi si nécessaire",
      ],
      featured: false,
    },
    {
      title: "Consultation Adulte",
      price: "60€",
      features: [
        "Durée : 45-60 minutes",
        "Anamnèse complète",
        "Examen ostéopathique",
        "Traitement adapté",
        "Conseils personnalisés",
      ],
      featured: true,
    },

    {
      title: "Consultation Enfant/Ado",
      price: "55€",
      features: [
        "Durée : 30-45 minutes",
        "Approche adaptée à l'âge",
        "Techniques douces",
        "Conseils aux parents",
        "Suivi personnalisé",
      ],
      featured: false,
    },
  ],

  contact: {
    email: "scriva.osteopathe.do@gmail.com",
    aix: {
      address: {
        street: "28 Boulevard de la République",
        city: "13100 Aix-en-Provence",
      },
      phone: "06 63 09 24 63",
      hours: {
        monday: "Lundi : 07h00 - 20h00",
        tuesday: "Mardi : 07h00 - 20h00",
        thursday: "Jeudi : 07h00 - 20h00",
      },
      doctolib:
        "https://www.doctolib.fr/osteopathe/aix-en-provence/melissa-scriva",
    },

    marignane: {
      address: {
        street: "Rond-point Hélico, avenue Europe",
        city: "13700 Marignane",
      },
      phone: "06 63 09 24 63",
      hours: {
        wednesday: "Mercredi : 14h00 - 20h00",
        friday: "Vendredi : 07h00 - 20h00",
        saturday: "Samedi : 09h00 - 15h00",
      },
      doctolib: "https://www.doctolib.fr/osteopathe/vitrolles/mylene-larcher",
    },
  },

  consultationReasons: [
    "Douleurs de dos",
    "Maux de tête chroniques",
    "Troubles digestifs",
    "Problèmes de mâchoire",
    "Douleurs liées à la grossesse",
    "Endométriose",
    "Bilan postural",
    "Ostéopathie du sport",
    "Autre",
  ],
};
