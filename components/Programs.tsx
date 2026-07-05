export default function Programs() {
  const values = [
    {
      icon: "🎨",
      title: "Discover Talents",
      description:
        "Every individual has unique gifts waiting to be discovered. We create opportunities for participants to explore their creativity, abilities and passions.",
    },
    {
      icon: "🤝",
      title: "Build Confidence",
      description:
        "Through art, sports and meaningful experiences, we nurture confidence, independence and a sense of belonging in every participant.",
    },
    {
      icon: "🌏",
      title: "Create Opportunities",
      description:
        "We promote inclusion by creating platforms where individuals with special needs are recognised, celebrated and empowered within the community.",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(18,12,35,0.78), rgba(10,10,20,0.78)), url('/core-values/background.jpg')",
      }}
    >
      {/* Extra cinematic overlay */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* Purple ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-[#4B2D8F]/10 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-[#D8C8FF] font-semibold">
            Our Values
          </p>

          <h2 className="mt-4 text-5xl md:text-6xl font-semibold text-white">
            Our Core Values
          </h2>

          <p className="mt-6 text-lg text-gray-200 max-w-3xl mx-auto leading-8">
            Everything we do is guided by values that inspire inclusion,
            celebrate individuality and empower every Amazing Mind to shine.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-20">

          {values.map((value) => (

            <div
              key={value.title}
              className="
                group
                h-full
                bg-white/10
                backdrop-blur-lg
                rounded-[32px]
                p-10
                border
                border-white/20
                shadow-lg
                transition-all
                duration-500
                hover:-translate-y-2
                hover:scale-[1.02]
                hover:bg-white/15
                hover:shadow-2xl
              "
            >

              {/* Emoji */}
              <div className="relative inline-block transition duration-500 group-hover:scale-110">

                <div className="absolute inset-0 rounded-full bg-[#F6C453]/20 blur-xl"></div>

                <div className="relative text-6xl">
                  {value.icon}
                </div>

              </div>

              {/* Title */}
              <h3 className="mt-8 text-3xl font-semibold text-white">
                {value.title}
              </h3>

              {/* Description */}
              <p className="mt-6 text-gray-200 leading-8">
                {value.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}