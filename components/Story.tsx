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
                is a community initiative dedicated to supporting individuals
                with special needs (OKU).
              </p>

              <p>
                We believe every individual possesses unique talents and
                limitless potential. With the right environment,
                encouragement and opportunities, these talents can blossom and
                inspire the world.
              </p>

              <p>
                Through art programmes, sports activities and meaningful
                community engagement, Amazing Minds provides a safe and
                inclusive platform where individuals can discover confidence,
                creativity and joy.
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