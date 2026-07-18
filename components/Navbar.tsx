"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const sectionLinks = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "journey", href: "#past-events" },
  { key: "artists", href: "#artists" },
  { key: "artwork", href: "#artwork" },
  { key: "voices", href: "#voices" },
  { key: "contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  const t = translations[language];

  const whatsappLink =
    "https://wa.me/601126285388?text=" +
    encodeURIComponent(
      "Hello! I’m interested in volunteering with Amazing Minds. Could you share more details with me?"
    );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Amazing Minds"
            width={70}
            height={70}
            className="h-14 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-7">

          {sectionLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="font-medium text-gray-700 hover:text-[#4B2D8F] transition"
            >
              {t.navbar[link.key as keyof typeof t.navbar]}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex items-center rounded-full border border-gray-200 overflow-hidden ml-2">

            <button
              onClick={() => setLanguage("en")}
              className={`px-3 py-2 text-sm transition ${
                language === "en"
                  ? "bg-[#4B2D8F] text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("zh")}
              className={`px-3 py-2 text-sm transition ${
                language === "zh"
                  ? "bg-[#4B2D8F] text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              中文
            </button>

            <button
              onClick={() => setLanguage("ms")}
              className={`px-3 py-2 text-sm transition ${
                language === "ms"
                  ? "bg-[#4B2D8F] text-white"
                  : "bg-white hover:bg-gray-100"
              }`}
            >
              BM
            </button>

          </div>

          {/* Volunteer Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 rounded-full bg-[#4B2D8F] px-6 py-3 text-white font-medium hover:bg-[#38216B] transition"
          >
            {t.navbar.volunteer}
          </a>

        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-3xl text-[#4B2D8F]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">

          {sectionLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b hover:bg-gray-50"
            >
              {t.navbar[link.key as keyof typeof t.navbar]}
            </a>
          ))}

          {/* Mobile Language Switcher */}
          <div className="flex justify-center gap-3 py-5">

            <button
              onClick={() => setLanguage("en")}
              className={`rounded-full px-4 py-2 ${
                language === "en"
                  ? "bg-[#4B2D8F] text-white"
                  : "bg-gray-100"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLanguage("zh")}
              className={`rounded-full px-4 py-2 ${
                language === "zh"
                  ? "bg-[#4B2D8F] text-white"
                  : "bg-gray-100"
              }`}
            >
              中文
            </button>

            <button
              onClick={() => setLanguage("ms")}
              className={`rounded-full px-4 py-2 ${
                language === "ms"
                  ? "bg-[#4B2D8F] text-white"
                  : "bg-gray-100"
              }`}
            >
              BM
            </button>

          </div>

          {/* Mobile Volunteer Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block mx-5 mb-5 text-center bg-[#4B2D8F] text-white py-3 rounded-full"
          >
            {t.navbar.volunteer}
          </a>

        </div>
      )}

    </nav>
  );
}