"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { translations } from "@/translations";
import { useLanguage } from "@/context/LanguageContext";

const testimonials = [
  {
    quote:
      "Thank you, Amazing Minds teachers, for your endless patience and encouragement. My child has discovered talents I never knew he had, his artwork truly amazes me every single day.",
    author: "Jing Hao's Mum",
    location: "Amazing Minds",
  },
  {
    quote:
      "So glad I found Amazing Minds! The teachers are incredibly calm and skilled at handling every child with patience and warmth. My child loves coming here, and I love seeing the progress.",
    author: "John's Mum",
    location: "Amazing Minds",
  },
  {
    quote:
      "Progress dari Class 1 kepada Class 2 banyak improvement, my child lebih focus dan lebih enjoy pergi ke kelas. Banyak terima kasih!",
    author: "Ziyad's Parents",
    location: "Amazing Minds",
  },
  {
    quote:
      "As MUPhaS PHC 2026 organizer, I was thrilled to bring Amazing Minds to Monash University Malaysia. Their stunning artwork captivated our audience and also drew participation to our campaign.",
    author: "Juliana Poi",
    location: "MUPhaS Public Health Campaign 2026",
  },
];

export default function Voices() {
  const [current, setCurrent] = useState(0);

  // ✅ Use global language
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const whatsappVolunteer =
    "https://wa.me/60127278076?text=" +
    encodeURIComponent(
      "Hello! I’m interested in volunteering with Amazing Minds. Could you share more details with me?"
    );

  const whatsappPartner =
    "https://wa.me/60127278076?text=" +
    encodeURIComponent(
      "Hello! I’m interested in partnering with Amazing Minds. I would love to explore collaboration opportunities."
    );

  return (
    <section
      id="voices"
      className="relative py-20 md:py-32 bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,10,30,0.72), rgba(15,10,30,0.72)), url('/voices/background2.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center text-white">

          <p className="uppercase tracking-[0.3em] text-[#F6C453] font-medium">
            {t.voices.eyebrow}
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-semibold">
            {t.voices.title}
          </h2>

          <p className="mt-7 text-lg text-gray-200 max-w-3xl mx-auto leading-8">
            {t.voices.description}
          </p>

        </div>

        {/* Main Layout */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10">

          {/* Testimonial Card */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              rounded-[36px]
              bg-white/15
              backdrop-blur-xl
              border
              border-white/20
              p-12
              text-white
            "
          >
            <div className="text-7xl text-[#F6C453] leading-none">
              ❝
            </div>

            <AnimatePresence mode="wait">

              <motion.div
                key={current}
                initial={{
                  opacity: 0,
                  y: 20,
                  filter: "blur(6px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                  filter: "blur(6px)",
                }}
                transition={{
                  duration: 0.6,
                }}
              >

                <p className="mt-8 text-xl leading-9">
                  {testimonials[current].quote}
                </p>

                <div className="mt-12">

                  <h4 className="text-xl font-semibold">
                    {testimonials[current].author}
                  </h4>

                  <p className="text-white/70">
                    {testimonials[current].location}
                  </p>

                </div>

              </motion.div>

            </AnimatePresence>

            {/* Navigation Dots */}
            <div className="flex gap-3 mt-10">

              {testimonials.map((_, index) => (

                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    current === index
                      ? "w-8 bg-[#F6C453]"
                      : "w-3 bg-white/40 hover:bg-white/70"
                  }`}
                />

              ))}

            </div>

          </motion.div>

          {/* CTA Card */}
          <div
            className="
              rounded-[36px]
              bg-[#4B2D8F]/90
              backdrop-blur-xl
              p-12
              text-white
              flex
              flex-col
              justify-between
            "
          >

            <div>

              <p className="uppercase tracking-[0.3em] text-[#F6C453]">
                {t.voices.join}
              </p>

              <h3 className="mt-5 text-4xl font-semibold leading-tight">
                {t.voices.ctaTitle}
              </h3>

              <p className="mt-8 text-lg leading-8 text-purple-100">
                {t.voices.ctaDescription}
              </p>

            </div>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href={whatsappVolunteer}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  bg-[#F6C453]
                  px-8
                  py-4
                  font-medium
                  text-[#4B2D8F]
                  transition-all
                  hover:scale-105
                  hover:shadow-xl
                  inline-block
                "
              >
                {t.voices.volunteer}
              </a>

              <a
                href={whatsappPartner}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  rounded-full
                  border
                  border-white/30
                  px-8
                  py-4
                  font-medium
                  transition-all
                  hover:bg-white
                  hover:text-[#4B2D8F]
                  inline-block
                "
              >
                {t.voices.partner}
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}