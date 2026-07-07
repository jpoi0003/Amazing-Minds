"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Future() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="future" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#4B2D8F] font-medium">
            {t.future.eyebrow}
          </p>

          <h2 className="mt-4 text-5xl font-semibold text-gray-900">
            {t.future.title}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
            {t.future.description}
          </p>

        </div>

        {/* Image */}

        <div className="mt-16">

          <Image
            src="/future/blueprint.jpg"
            alt="Amazing Minds Future"
            width={1600}
            height={900}
            className="rounded-[36px] shadow-2xl object-cover w-full h-auto"
          />

        </div>

      </div>
    </section>
  );
}