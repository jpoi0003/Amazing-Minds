import Image from "next/image";

const events = [
  {
    title: "MUPhaS Public Health Campaign 2026",
    subtitle: "Unseen Minds: Wired Differently, Valued Equally",
    location: "Monash University Malaysia",
    date: "24–25 March 2026",
    image: "/events/monash2026.jpg",
    description:
      "Amazing Minds collaborated with Monash University Malaysia during the MUPhaS Public Health Campaign 2026, engaging students and the public in meaningful conversations about neurodiversity and inclusion. Through the theme 'Unseen Minds: Wired Differently, Valued Equally', participants showcased their talents while helping to raise awareness and promote understanding of individuals with special needs.",
  },
  {
    title: "2D1N Kuala Kubu Bharu Outing",
    subtitle: "The Breeze KKB",
    location: "Kuala Kubu Bharu",
    date: "16–17 May 2026",
    image: "/events/kkb2026.jpg",
    description:
      "This memorable two-day outing provided participants with opportunities to explore nature, enjoy outdoor activities and strengthen friendships in a supportive environment. The trip encouraged independence, teamwork and confidence while creating joyful memories for participants, families and volunteers alike.",
  },
  {
    title: "Father's Day Celebration",
    subtitle: "Final Class for Term 1 2026",
    location: "Amazing Minds",
    date: "7 June 2026",
    image: "/events/fathersday2026.jpg",
    description:
      "Amazing Minds celebrated Father's Day while marking the successful completion of the first term of 2026. Families, participants and volunteers came together for games, performances and heartfelt appreciation, celebrating the important role families play in every participant's growth and journey.",
  },
];

export default function PastEvents() {
  return (
    <section id="past-events" className="py-32 bg-[#FAF8FF]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-[#4B2D8F] font-medium">
            Our Journey
          </p>

          <h2 className="mt-3 text-5xl font-semibold text-gray-900">
            Past Events
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Every event creates opportunities for learning, friendship,
            confidence and unforgettable memories.
          </p>
        </div>

        <div className="mt-20 space-y-20">

          {events.map((event, index) => (

            <div
              key={event.title}
              className={`grid lg:grid-cols-2 gap-14 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >

              {/* Image */}

              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <Image
                  src={event.image}
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