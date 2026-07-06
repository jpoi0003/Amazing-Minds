"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

export default function Story() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section
      id="about"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute top-24 right-0 h-72 w-72 rounded-full bg-[#4B2D8F]/5 blur-[120px]" />

      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#7C4DFF]/5 blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6">

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-[#4B2D8F] font-medium">
              {t.story.label}
            </p>

            <h2 className="mt-4 text-5xl md:text-6xl font-semibold text-gray-900">
              {t.story.title}
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

              <p>{t.story.p1}</p>

              <p>{t.story.p2}</p>

              <p>{t.story.p3}</p>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">

            <div className="absolute inset-0 rounded-[40px] bg-[#4B2D8F]/10 blur-3xl scale-105" />

            <div className="absolute -top-8 -right-8 h-40 w-40 bg-[#F6C453]/20 rounded-full blur-3xl" />

            <div className="absolute -bottom-10 -left-10 h-52 w-52 bg-[#57C7FF]/15 rounded-full blur-3xl" />

            <Image
              src="/story/participants.jpg"
              alt="Amazing Minds Participants"
              width={650}
              height={700}
              className="relative rounded-[36px] shadow-2xl object-cover h-[560px] w-full transition-all duration-700 hover:scale-[1.02]"
            />

          </div>

        </div>

        {/* Vision + Mission */}

        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {/* Vision */}

          <div className="bg-[#FAF8FF] rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-300">

            <div className="text-5xl">👁️</div>

            <h3 className="mt-5 text-3xl font-semibold text-[#4B2D8F]">
              {t.story.visionTitle}
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              {t.story.vision}
            </p>

          </div>

          {/* Mission */}

          <div className="bg-[#FAF8FF] rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-300">

            <div className="text-5xl">🎯</div>

            <h3 className="mt-5 text-3xl font-semibold text-[#4B2D8F]">
              {t.story.missionTitle}
            </h3>

            <ul className="mt-5 space-y-4 text-gray-600 leading-8">

              <li>✓ {t.story.mission1}</li>

              <li>✓ {t.story.mission2}</li>

              <li>✓ {t.story.mission3}</li>

            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}