"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-[#120A23] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-[#F6C453]">
              Amazing Minds
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              {t.footer.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.footer.quickLinks}
            </h4>

            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#home" className="hover:text-white">
                  {t.navbar.home}
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-white">
                  {t.navbar.about}
                </a>
              </li>

              <li>
                <a href="#past-events" className="hover:text-white">
                  {t.navbar.journey}
                </a>
              </li>

              <li>
                <a href="#artists" className="hover:text-white">
                  {t.navbar.artists}
                </a>
              </li>

              <li>
                <a href="#artwork" className="hover:text-white">
                  {t.navbar.artwork}
                </a>
              </li>

              <li>
                <a href="#voices" className="hover:text-white">
                  {t.navbar.voices}
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-white">
                  {t.navbar.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              {t.footer.contact}
            </h4>

            <div className="space-y-3 text-gray-300">
              <p>📧 Brightbridgehubs@gmail.com</p>
              <p>📞 +60 12-727 8076</p>
              <p>💬 {t.footer.whatsapp}</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">

          <p>
            © {new Date().getFullYear()} Amazing Minds. {t.footer.copyright}
          </p>

          <p className="text-gray-400">
            {t.footer.createdBy}{" "}
            <span className="text-[#F6C453] font-medium">
              Juliana Poi (Monash University Malaysia)
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}