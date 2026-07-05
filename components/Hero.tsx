"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Amazing.",
  "Creative.",
  "Unique.",
  "Talented.",
  "Inspiring.",
];

export default function Hero() {
  const [word, setWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWord((current) => (current + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const whatsappLink =
    "https://wa.me/60127278076?text=" +
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
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/45 to-black/70"></div>

      {/* Decorative Paint Blobs */}
      <div className="absolute top-24 left-16 h-40 w-40 rounded-full bg-[#F6C453]/20 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-20 h-56 w-56 rounded-full bg-[#57C7FF]/20 blur-3xl animate-pulse"></div>
      <div
        className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-[#4B2D8F]/15 blur-[120px]"
        style={{ transform: "translate(-50%, -50%)" }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6 text-center text-white">
        <p className="uppercase tracking-widest text-sm mb-6">
          Kuala Lumpur • Selangor • Malaysia
        </p>

        <h1 className="text-white text-4xl sm:text-5xl md:text-8xl lg:text-9xl font-semibold tracking-tight leading-none">
          Every Mind
        </h1>

        <h2 className="mt-3 text-3xl sm:text-4xl md:text-7xl lg:text-8xl font-light tracking-tight leading-none">
          <span className="paint-text italic">is</span>{" "}

          <AnimatePresence mode="wait">
            <motion.span
              key={word}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
              transition={{ duration: 0.55 }}
              className="paint-text italic inline-block"
            >
              {words[word]}
            </motion.span>
          </AnimatePresence>
        </h2>

        <p className="mt-10 text-lg md:text-xl leading-8 text-gray-200 max-w-3xl mx-auto">
          Unlocking the talents of special individuals through art,
          sports and community.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex justify-center gap-6 flex-wrap">

          {/* ✅ WHATSAPP BUTTON */}
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
              inline-block
            "
          >
            Become a Volunteer
          </a>

          {/* Meet Artists Button (UNCHANGED) */}
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
            Meet Our Artists
          </button>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70 animate-bounce">
        <span className="text-sm tracking-widest uppercase">Scroll</span>
        <div className="mt-2 h-10 w-px bg-white/50"></div>
      </div>
    </section>
  );
}