"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote:
      "Amazing Minds helped my child discover confidence through art. For the first time, he proudly shared his own creations with our family and friends.",
    author: "Parent of Participant",
    location: "Kuala Lumpur",
  },
  {
    quote:
      "Watching my daughter smile while painting reminded us that every child has unique strengths waiting to be discovered.",
    author: "Parent of Participant",
    location: "Selangor",
  },
  {
    quote:
      "Volunteering at Amazing Minds has shown me how creativity can connect people from all walks of life.",
    author: "Volunteer",
    location: "Petaling Jaya",
  },
  {
    quote:
      "As MUPhaS Public Health Campaign organizer, I was thrilled to bring Amazing Minds to Monash University Malaysia, their stunning artwork not only captivated our audience but also drew participation to our campaign and sparking vital conversations about brain health. ",
    author: "Juliana Poi",
    location: "MUPhaS PHC 2026",
  },
];

export default function Voices() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  // WhatsApp links
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
            Parents & Community Voices
          </p>

          <h2 className="mt-5 text-5xl md:text-6xl font-semibold">
            Every Story Matters
          </h2>

          <p className="mt-7 text-lg text-gray-200 max-w-3xl mx-auto leading-8">
            Behind every artwork is a story of courage, growth and endless
            possibilities. Hear from the families and community members who
            have walked this journey with us.
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
            <div className="text-7xl text-[#F6C453] leading-none">❝</div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(6px)" }}
                transition={{ duration: 0.6 }}
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

            {/* Dots */}
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
                Join Amazing Minds
              </p>

              <h3 className="mt-5 text-4xl font-semibold leading-tight">
                Be Part of Something Meaningful
              </h3>

              <p className="mt-8 text-lg leading-8 text-purple-100">
                Whether you volunteer, collaborate or support our artists,
                every contribution helps create opportunities for individuals
                with special needs to discover their talents and inspire our
                community.
              </p>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-5">

              {/* Volunteer */}
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
                Become a Volunteer
              </a>

              {/* Partner */}
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
                Partner With Us
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}