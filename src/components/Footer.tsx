import React from "react";
import { siteData } from "../data/siteData";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mélissa Scriva</h3>
            <p className="text-gray-400 mb-4">
              Ostéopathe D.O. à Aix-en-Provence et Marignane
            </p>

            <div className="space-y-2 text-gray-400">
              <p>{siteData.contact.aix.phone}</p>
              <p>{siteData.contact.email}</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Aix-en-Provence</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                {siteData.contact.aix.address.street}
                <br />
                {siteData.contact.aix.address.city}
              </p>
              <div className="mt-4">
                <p className="font-medium text-white mb-2">Horaires :</p>
                <p>{siteData.contact.aix.hours.monday}</p>
                <p>{siteData.contact.aix.hours.tuesday}</p>
                <p>{siteData.contact.aix.hours.thursday}</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Marignane</h4>
            <div className="space-y-2 text-gray-400">
              <p>
                {siteData.contact.marignane.address.street}
                <br />
                {siteData.contact.marignane.address.city}
              </p>
              <div className="mt-4">
                <p className="font-medium text-white mb-2">Horaires :</p>
                <p>{siteData.contact.marignane.hours.wednesday}</p>
                <p>{siteData.contact.marignane.hours.friday}</p>
                <p>{siteData.contact.marignane.hours.saturday}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Mélissa Scriva - Ostéopathe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
