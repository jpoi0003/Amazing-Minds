"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const words = {
  en: [
    "Amazing.",
    "Creative.",
    "Unique.",
    "Talented.",
    "Inspiring.",
  ],
  zh: [
    "精彩。",
    "创意。",
    "独特。",
    "有才华。",
    "充满启发。",
  ],
  ms: [
    "Hebat.",
    "Kreatif.",
    "Unik.",
    "Berbakat.",
    "Menginspirasikan.",
  ],
};

export default function Hero() {
  const [word, setWord] = useState(0);

  // ✅ Global language
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    setWord(0);

    const interval = setInterval(() => {
      setWord((current) => (current + 1) % words[language].length);
    }, 2500);

    return () => clearInterval(interval);
  }, [language]);

  const whatsappLink =
    "https://wa.me/601126285388?text=" +
    encodeURIComponent(
      "Hello! I’m interested in volunteering with Amazing Minds. Could you share more details with me?"
    );

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(18,10,35,0.55), rgba(0,0,0,0.72)), url('/hero/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/70"></div>

      {/* Decorative Blobs */}
      <div className="absolute top-24 left-16 h-40 w-40 rounded-full bg-[#F6C453]/20 blur-3xl animate-pulse"></div>

      <div className="absolute bottom-32 right-20 h-56 w-56 rounded-full bg-[#57C7FF]/20 blur-3xl animate-pulse"></div>

      <div
        className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-[#4B2D8F]/15 blur-[120px]"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center text-white">

        <p className="uppercase tracking-widest text-sm mb-6">
          {t.hero.location}
        </p>

        <h1 className="text-white text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-none">
          {t.hero.title}
        </h1>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">

          <span className="paint-text italic">
            {language === "en"
              ? "is"
              : language === "zh"
              ? "是"
              : "adalah"}
          </span>{" "}

          <AnimatePresence mode="wait">
            <motion.span
              key={`${language}-${word}`}
              initial={{
                opacity: 0,
                y: 20,
                filter: "blur(8px)",
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              exit={{
                opacity: 0,
                y: -20,
                filter: "blur(8px)",
              }}
              transition={{ duration: 0.55 }}
              className="paint-text italic inline-block"
            >
              {words[language][word]}
            </motion.span>
          </AnimatePresence>

        </h2>

        <p className="mt-10 text-lg md:text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
          {t.hero.tagline}
        </p>

        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#4B2D8F]
              hover:bg-[#3B2273]
              text-white
              px-9
              py-4
              rounded-full
              font-medium
              transition-all
              duration-300
              shadow-xl
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            {t.hero.volunteer}
          </a>

          <button
            onClick={() =>
              document.getElementById("artists")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="
              border
              border-white/70
              bg-white/10
              backdrop-blur-md
              text-white
              px-9
              py-4
              rounded-full
              font-medium
              transition-all
              duration-300
              hover:bg-white
              hover:text-[#4B2D8F]
              hover:-translate-y-1
            "
          >
            {t.hero.meetArtists}
          </button>

        </div>

      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">

        <span className="text-sm tracking-widest uppercase">
          Scroll
        </span>

        <div className="mt-2 h-10 w-px bg-white/50"></div>

      </div>
    </section>
  );
}