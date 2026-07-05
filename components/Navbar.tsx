"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Journey", href: "#past-events" },
  { name: "Artists", href: "#artists" },
  { name: "Artwork", href: "#artwork" },
  { name: "Community Voices", href: "#voices" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // WhatsApp message (customised)
  const whatsappLink =
    "https://wa.me/+60127278076?text=" +
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

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-[#4B2D8F] transition font-medium"
            >
              {link.name}
            </a>
          ))}

          {/* WhatsApp Volunteer Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 rounded-full bg-[#4B2D8F] px-6 py-3 text-white font-medium hover:bg-[#38216B] transition"
          >
            Volunteer
          </a>

        </div>

        {/* Mobile Button */}
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

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-4 border-b hover:bg-gray-50"
            >
              {link.name}
            </a>
          ))}

          {/* Mobile WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block m-5 text-center bg-[#4B2D8F] text-white py-3 rounded-full"
          >
            Volunteer
          </a>

        </div>
      )}

    </nav>
  );
}