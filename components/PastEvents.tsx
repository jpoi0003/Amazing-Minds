"use client";

import Image from "next/image";
import { translations } from "@/translations";
import { useLanguage } from "@/context/LanguageContext";

const images = [
  "/events/monash2026.jpg",
  "/events/kkb2026.jpg",
  "/events/fathersday2026.jpg",
];

export default function PastEvents() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="past-events" className="py-32 bg-[#FAF8FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#4B2D8F] font-medium">
            {t.journey.label}
          </p>

          <h2 className="mt-3 text-5xl font-semibold text-gray-900">
            {t.journey.title}
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            {t.journey.description}
          </p>

        </div>

        <div className="mt-20 space-y-20">

          {t.journey.events.map((event, index) => (

            <div
              key={event.title}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* Image */}

              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Image
                  src={images[index]}
                  alt={event.title}
                  width={700}
                  height={450}
                  className="rounded-3xl shadow-xl object-cover h-[360px] w-full hover:scale-[1.02] transition duration-500"
                />
              </div>

              {/* Text */}

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>

                <p className="text-[#4B2D8F] uppercase tracking-widest text-sm font-medium">
                  {event.location}
                </p>

                <h3 className="mt-3 text-4xl font-semibold text-gray-900">
                  {event.title}
                </h3>

                <p className="mt-3 text-xl italic text-[#4B2D8F]">
                  {event.subtitle}
                </p>

                <div className="mt-6">
                  <p className="inline-flex items-center rounded-full bg-[#4B2D8F]/10 px-4 py-2 text-sm font-medium text-[#4B2D8F]">
                    📅 {event.date}
                  </p>
                </div>

                <p className="mt-8 text-gray-600 leading-8">
                  {event.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}