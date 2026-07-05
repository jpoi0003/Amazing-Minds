import Image from "next/image";

export default function Story() {
  return (
    <section id="about" className="relative py-32 bg-white overflow-hidden">

      {/* Decorative Background */}
      <div className="absolute top-24 right-0 h-72 w-72 rounded-full bg-[#4B2D8F]/5 blur-[120px]"></div>

      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-[#7C4DFF]/5 blur-[120px]"></div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Story */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[0.3em] text-[#4B2D8F] font-medium">
              About Amazing Minds
            </p>

            <h2 className="mt-4 text-5xl md:text-6xl font-semibold text-gray-900">
              Our Story
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-9 text-gray-600">

              <p>
                <span className="font-semibold text-[#4B2D8F]">
                  Amazing Minds
                </span>{" "}
                was founded in July 2022 by Sabrina, a mentor for children with special needs and a 2023 Encyclopedia Britannica honoree. Her vision is to establish a training center that equips children with practical skills, enabling self-reliance and easing family burdens.
              </p>

              <p>
                Inspired by the UniTem Ai project, Sabrina launched painting classes, expanding by June 2024 to include sign language workshops taught by deaf students. These workshops foster public communication while providing educators with income and dignity.
              </p>

              <p>
                Sabrina plans to broaden training to include diverse skills, helping children find meaningful employment. She also champions shifting perceptions from "disabled" to "differently-abled" through education and advocacy. Her guiding belief: "We are not disabled, we are different-able."
              </p>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="relative">

            {/* Purple Glow */}
            <div className="absolute inset-0 rounded-[40px] bg-[#4B2D8F]/10 blur-3xl scale-105"></div>

            {/* Paint Blob */}
            <div className="absolute -top-8 -right-8 h-40 w-40 bg-[#F6C453]/20 rounded-full blur-3xl"></div>

            <div className="absolute -bottom-10 -left-10 h-52 w-52 bg-[#57C7FF]/15 rounded-full blur-3xl"></div>

            <Image
              src="/story/participants.jpg"
              alt="Amazing Minds Participants"
              width={650}
              height={700}
              className="
                relative
                rounded-[36px]
                shadow-2xl
                object-cover
                h-[560px]
                w-full
                transition-all
                duration-700
                hover:scale-[1.02]
              "
            />

          </div>

        </div>

        {/* Vision + Mission */}

        <div className="grid md:grid-cols-2 gap-10 mt-24">

          {/* Vision */}

          <div className="bg-[#FAF8FF] rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-300">

            <div className="text-5xl">👁️</div>

            <h3 className="mt-5 text-3xl font-semibold text-[#4B2D8F]">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-600 leading-8">
              A world where every special individual is recognised for
              their talents and meaningful contributions to society.
            </p>

          </div>

          {/* Mission */}

          <div className="bg-[#FAF8FF] rounded-3xl p-10 shadow-sm hover:shadow-xl transition duration-300">

            <div className="text-5xl">🎯</div>

            <h3 className="mt-5 text-3xl font-semibold text-[#4B2D8F]">
              Our Mission
            </h3>

            <ul className="mt-5 space-y-4 text-gray-600 leading-8">

              <li>✓ Discover and nurture talents in individuals with special needs</li>

              <li>✓ Build confidence through creative and social engagement</li>

              <li>✓ Promote an inclusive community that celebrates diversity</li>

            </ul>

          </div>

        </div>

      </div>

    </section>
  );
}