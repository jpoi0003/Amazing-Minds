"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations";

const artists = [
  {
    name: "John Hananiah Ravi",
    talent: "Drawing, Singing, Dancing",
    supportneeds: "Autism",
    image: "/artists/john.jpg",
    description:
      "He is happy and loves what he does while painting and drawing. He has his own creative way with colours and enjoys drawing cartoon characters.",
  },
  {
    name: "Charlene Sng Xin Yu",
    talent: "Singing, Learning different languages, Drawing, Swimming and Drum 24 season drum",
    supportneeds: "Autism spectrum ADHD second stage",
    image: "/artists/charlene.jpg",
    description:
      "She enjoys singing while drawing. She has a strong passion for recreating cartoons and items she discovers on Google. To improve her skills, she independently searches for 'how to draw' tutorials on YouTube and follows them step-by-step.",
  },
  {
    name: "Wan Ahmad Ziyad Danish bin Wan Mohd Firdaus",
    talent: "Drawing, Gaming & Swimming",
    supportneeds: "Autism",
    image: "/artists/ahmad.jpg",
    description:
      "He is kind-hearted and gentle, though sometimes emotional. He loves playing Minecraft on his Switch and drawing Minecraft characters.",
  },
  {
    name: "Eva Tan Yu Xin",
    talent: "Drawing, Swimming",
    supportneeds: "Moderate Autism Spectrum Disorder (ASD)",
    image: "/artists/eva.jpg",
    description:
      "She loves expressing her creativity freely, prefers using her favorite colors to draw the things she likes, and genuinely enjoys drawing.",
  },
  {
    name: "Choi Xin Yong",
    talent: "Acrylic Painting",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/xinyong.jpg",
    description:
      "Xin Yong enjoys experimenting with bold colours and textures, creating expressive artwork inspired by everyday life.",
  },
  {
    name: "Hoh Xin Ling",
    talent: "Singing, Dancing & Drawing",
    supportneeds: "Mild low self-esteem and speech delay",
    image: "/artists/hohxinling.jpg",
    description:
      "She enjoys expressing herself through music, singing, dancing, and drawing.",
  },
  {
    name: "Jayden Lee Geng Hin",
    talent: "Good memory, Drumming and Drawing",
    supportneeds: "Autism & ADHD",
    image: "/artists/jayden.jpg",
    description:
      "He loves drawing and is a very observant child. He has a good eye for detail and an excellent memory, especially for things he is interested in, such as motor cars.",
  },
  {
    name: "Lim Jing Hao",
    talent: "Drawing & Sculpting",
    supportneeds: "Autism & ADD, Colour Vision Deficiency",
    image: "/artists/jinghao.jpg",
    description:
      "Jing Hao is a young creative who enjoys drawing and sculpting dinosaurs, cartoon-style characters and original characters inspired by his imagination.",
  },
  {
    name: "Liang Kai Zhi",
    talent: "Acrylic Painting",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/kaizhi.jpg",
    description:
      "Kai Zhi enjoys experimenting with bold colours and textures, creating expressive artwork inspired by everyday life.",
  },
  {
    name: "Chua Pin Jie Keith",
    talent: "Drawing & Swimming",
    supportneeds: "Autism",
    image: "/artists/keith.jpg",
    description:
      "He is a passionate, detail-oriented young artist who loves creating unique characters and beautiful landscapes. He has a deep affection for animals, especially cats, and is a kind, compassionate child. He also has his own unique style and enjoys wearing hoodie jackets that reflect his individuality.",
  },
  {
    name: "Fong Mei Yan",
    talent: "Acrylic Painting",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/meiyan.jpg",
    description:
      "Mei Yan enjoys experimenting with bold colours and textures, creating expressive artwork inspired by everyday life.",
  },
  {
    name: "Fong Wing Yan",
    talent: "Mixed Media Art",
    supportneeds: "ADHD",
    image: "/artists/wingyan.jpg",
    description:
      "Wing Yan explores expressive mixed media techniques, turning emotions into bold visual stories.",
  },
  {
    name: "Ngiaw Yong Earng",
    talent: "Drawing and Dancing",
    supportneeds: "Intellectual disability",
    image: "/artists/yongearng.jpg",
    description:
      "Yong Earng is a soft-spoken and shy young girl.",
  },
  {
    name: "Sin Zi Xiang",
    talent: "Mixed Media Art",
    supportneeds: "ADHD",
    image: "/artists/zixiang.jpg",
    description:
      "Zi Xiang explores expressive mixed media techniques, turning emotions into bold visual stories.",
  },
  {
    name: "Low Yan Xin",
    talent: "Drawing",
    supportneeds: "Intellectual disability",
    image: "/artists/lowyanxin.jpg",
    description:
      "She is a slow-talking, quiet girl who loves drawing and enjoys spending time drawing on her draft paper or iPad.",
  },
  {
    name: "Lam Zi Xin",
    talent: "Drawing, Singing & Dancing",
    supportneeds: "Down Syndrome",
    image: "/artists/zixin.jpg",
    description:
      "She enjoys singing, dancing, drawing, and colouring whatever she likes.",
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

          {artists.map((artist) => (

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
                  {artist.talent}
                </span>

                <p className="mt-4 text-sm font-medium text-gray-500">
                  {t.artists.supportNeeds}
                </p>

                <p className="text-[#4B2D8F] font-medium">
                  {artist.supportneeds}
                </p>

                <p className="mt-5 text-gray-600 leading-7 text-sm">
                  {artist.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}