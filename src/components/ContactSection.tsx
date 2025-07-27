import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { siteData } from "../data/siteData";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    consultationReason: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("hYeAT09kEwhGNa0Jp");
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // You'll need to replace these with your actual EmailJS credentials
      // Send email using EmailJS
      console.log("Sending email with data:", {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        from_phone: formData.phone,
        consultation_reason: formData.consultationReason,
        message: formData.message,
        title: `Consultation ${formData.consultationReason}`,
      });

      const result = await emailjs.send(
        "service_75079be", // Replace with your EmailJS service ID
        "template_pv6200u", // Replace with your EmailJS template ID
        {
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          from_phone: formData.phone,
          consultation_reason: formData.consultationReason,
          message: formData.message,
          title: `Consultation ${formData.consultationReason}`,
          to_email: siteData.contact.email, // Your email address
        },
        "hYeAT09kEwhGNa0Jp" // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          consultationReason: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Email sending failed:", error);
      console.error("Error details:", {
        serviceId: "service_ns88fw9",
        templateId: "template_pv6200u",
        publicKey: "hYeAT09kEwhGNa0Jp",
        error: error,
      });
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Contact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Prenez rendez-vous pour votre consultation d'ostéopathie
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Informations pratiques
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Cabinet Aix-en-Provence */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-teal-100 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  <span className="w-3 h-3 bg-teal-600 rounded-full mr-2"></span>
                  Cabinet d'Aix-en-Provence
                </h4>

                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div className="ml-4 text-center">
                      <div className="font-semibold text-gray-900">Adresse</div>
                      <div className="text-gray-600">
                        {siteData.contact.aix.address.street}
                        <br />
                        {siteData.contact.aix.address.city}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4 text-center">
                      <div className="font-semibold text-gray-900">
                        Horaires
                      </div>
                      <div className="text-gray-600">
                        {siteData.contact.aix.hours.monday}
                        <br />
                        {siteData.contact.aix.hours.tuesday}
                        <br />
                        {siteData.contact.aix.hours.thursday}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href={siteData.contact.aix.doctolib}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transition-all duration-300 text-sm"
                    >
                      Réserver à Aix-en-Provence
                    </a>
                  </div>
                </div>
              </div>

              {/* Cabinet Marignane */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100 text-center">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center justify-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  Cabinet de Marignane
                </h4>

                <div className="space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4 text-center">
                      <div className="font-semibold text-gray-900">Adresse</div>
                      <div className="text-gray-600">
                        {siteData.contact.marignane.address.street}
                        <br />
                        {siteData.contact.marignane.address.city}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="ml-4 text-center">
                      <div className="font-semibold text-gray-900">
                        Horaires
                      </div>
                      <div className="text-gray-600">
                        {siteData.contact.marignane.hours.wednesday}
                        <br />
                        {siteData.contact.marignane.hours.friday}
                        <br />
                        {siteData.contact.marignane.hours.saturday}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <a
                      href="/marignane"
                      className="inline-block px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 text-sm"
                    >
                      Réserver à Marignane
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Phone Information - Global */}
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-6">
                <div className="font-semibold text-gray-900">Téléphone</div>
                <div className="text-gray-600">
                  {siteData.contact.aix.phone}
                </div>
              </div>
            </div>

            {/* Email global */}
            <div className="flex items-center mb-8">
              <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-6">
                <div className="font-semibold text-gray-900">Email</div>
                <div className="text-gray-600">{siteData.contact.email}</div>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Envoyez-moi un message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre prénom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Votre numéro de téléphone"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="votre.email@exemple.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Motif de consultation
                  </label>
                  <select
                    name="consultationReason"
                    value={formData.consultationReason}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Sélectionnez un motif</option>
                    {siteData.consultationReasons.map((reason, index) => (
                      <option key={index} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Décrivez vos symptômes ou votre demande..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-teal-600 text-white font-semibold rounded-lg hover:bg-teal-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </button>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    Votre message a été envoyé avec succès ! Je vous répondrai
                    dans les plus brefs délais.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                    <div className="font-bold mb-2">
                      Erreur lors de l'envoi du message
                    </div>
                    <div className="text-sm">
                      Veuillez vérifier que tous les champs sont remplis et
                      réessayer. Si le problème persiste, contactez-moi par
                      téléphone au {siteData.contact.aix.phone}.
                    </div>
                    <div className="text-xs mt-2 text-red-600">
                      Détails techniques : Vérifiez la console du navigateur
                      pour plus d'informations.
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
