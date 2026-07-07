"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const artists = [
  {
    key: "john",
    name: "John Hananiah Ravi",
    supportneeds: "Autism",
    image: "/artists/john.jpg",
  },
  {
    key: "charlene",
    name: "Charlene Sng Xin Yu",
    supportneeds: "Autism spectrum ADHD second stage",
    image: "/artists/charlene.jpg",
  },
  {
    key: "ahmad",
    name: "Wan Ahmad Ziyad Danish bin Wan Mohd Firdaus",
    supportneeds: "Autism",
    image: "/artists/ahmad.jpg",
  },
  {
    key: "eva",
    name: "Eva Tan Yu Xin",
    supportneeds: "Moderate Autism Spectrum Disorder (ASD)",
    image: "/artists/eva.jpg",
  },
  {
    key: "xinyong",
    name: "Choi Xin Yong",
    supportneeds: "Intellectual Disability",
    image: "/artists/xinyong.jpg",
  },
  {
    key: "xinling",
    name: "Hoh Xin Ling",
    supportneeds: "Mild low self-esteem and speech delay",
    image: "/artists/hohxinling.jpg",
  },
  {
    key: "jayden",
    name: "Jayden Lee Geng Hin",
    supportneeds: "Autism & ADHD",
    image: "/artists/jayden.jpg",
  },
  {
    key: "jinghao",
    name: "Lim Jing Hao",
    supportneeds: "Autism & ADD, Colour Vision Deficiency",
    image: "/artists/jinghao.jpg",
  },
  {
    key: "kaizhi",
    name: "Liang Kai Zhi",
    supportneeds: "Slow Learner / Dyslexia",
    image: "/artists/kaizhi.jpg",
  },
  {
    key: "keith",
    name: "Chua Pin Jie Keith",
    supportneeds: "Autism",
    image: "/artists/keith.jpg",
  },
  {
    key: "meiyan",
    name: "Fong Mei Yan",
    supportneeds: "Specific Learning Disability (SLD)",
    image: "/artists/meiyan.jpg",
  },
  {
    key: "wingyan",
    name: "Fong Wing Yan",
    supportneeds: "Autism",
    image: "/artists/wingyan.jpg",
  },
  {
    key: "yongearng",
    name: "Ngiaw Yong Earng",
    supportneeds: "Intellectual disability",
    image: "/artists/yongearng.jpg",
  },
  {
    key: "zixiang",
    name: "Sin Zi Xiang",
    supportneeds: "Autism",
    image: "/artists/zixiang.jpg",
  },
  {
    key: "yanxin",
    name: "Low Yan Xin",
    supportneeds: "Intellectual disability",
    image: "/artists/lowyanxin.jpg",
  },
  {
    key: "zixin",
    name: "Lam Zi Xin",
    supportneeds: "Down Syndrome",
    image: "/artists/zixin.jpg",
  },
];

export default function Artists() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="artists" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#4B2D8F] font-medium">
            {t.artists.eyebrow}
          </p>

          <h2 className="mt-4 text-5xl font-semibold text-gray-900">
            {t.artists.title}
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            {t.artists.description}
          </p>

        </div>

        {/* Artist Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {artists.map((artist) => {

            const artistText =
              t.artists.profiles[
                artist.key as keyof typeof t.artists.profiles
              ];

            return (

              <div
                key={artist.name}
                className="
                  group
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-md
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-500
                "
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
                    className="object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-2xl font-semibold text-[#4B2D8F]">
                    {artist.name}
                  </h3>

                  <span className="mt-3 inline-block rounded-full bg-[#4B2D8F]/10 px-4 py-2 text-xs font-medium text-[#4B2D8F]">
                    {artistText.talent}
                  </span>

                  <p className="mt-4 text-sm font-medium text-gray-500">
                    {t.artists.supportNeeds}
                  </p>

                  <p className="text-[#4B2D8F] font-medium">
                    {artist.supportneeds}
                  </p>

                  <p className="mt-5 text-gray-600 leading-7 text-sm">
                    {artistText.description}
                  </p>

                </div>

              </div>

            );
          })}

        </div>

      </div>
    </section>
  );
}