import Image from "next/image";

const artists = [
  {
    name: "John",
    talent: "Abstract Painting",
    supportneeds: "ADHD",
    image: "/artists/john.jpg",
    description:
      "John loves exploring colours and abstract shapes. Through painting, he expresses emotions that words cannot describe.",
  },
  {
    name: "Charlene",
    talent: "Music & Singing",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/charlene.jpg",
    description:
      "Charlene enjoys expressing herself through music and performing. Her passion brings happiness to everyone around her.",
  },
  {
    name: "Ahmad",
    talent: "Watercolour Art",
    supportneeds: "Down Syndrome",
    image: "/artists/ahmad2.jpg",
    description:
      "Ahmad enjoys painting landscapes and nature. His colourful artwork reflects positivity and imagination.",
  },
  {
    name: "Eva",
    talent: "Craft & Illustration",
    supportneeds: "ADHD",
    image: "/artists/eva.jpg",
    description:
      "Eva loves creating handmade crafts and illustrations that reflect her joyful personality.",
  },
  {
    name: "Xin Yong",
    talent: "Acrylic Painting",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/xinyong.jpg",
    description:
      "Xin Yong enjoys experimenting with bold colours and textures, creating expressive artwork inspired by everyday life.",
  },
  {
    name: "Xin Ling",
    talent: "Mixed Media Art",
    supportneeds: "ADHD",
    image: "/artists/xinling.jpg",
    description:
      "Xin Ling explores expressive mixed media techniques, turning emotions into bold visual stories.",
  },
];

export default function Artists() {
  return (
    <section id="artists" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-[#4B2D8F] font-medium">
            Meet Our Artists
          </p>

          <h2 className="mt-4 text-5xl font-semibold text-gray-900">
            Artist Profiles
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Each artist has a unique story, talent, and creative expression that reflects their individuality.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {artists.map((artist) => (
            <div
              key={artist.name}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative w-full h-64">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-[#4B2D8F]">
                  {artist.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {artist.talent}
                </p>

                <p className="mt-3 text-sm font-medium text-gray-700">
                  Support Needs: {artist.supportneeds}
                </p>

                <p className="mt-4 text-gray-600 leading-7">
                  {artist.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-24 flex justify-center">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[40px] shadow-2xl">

            {/* Background */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#4B2D8F]/90 via-[#3B2273]/90 to-[#1f123d]/90" />
              <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-[#F6C453]/20 blur-3xl" />
              <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#57C7FF]/20 blur-3xl" />
            </div>

            {/* Content */}
            <div className="relative z-10 p-14 text-center text-white">
              <h3 className="text-4xl md:text-5xl font-semibold">
                Explore All Artists
              </h3>

              <p className="mt-6 text-lg text-white/80 leading-8 max-w-2xl mx-auto">
                Discover the full collection of Amazing Minds participants.
                Each individual has a unique story and creative journey.
              </p>

              <div className="mt-10 flex justify-center">
                <a
                  href="https://drive.google.com/drive/folders/1S2O1dtKaS-T6TPrP-7rtqMaqnQUX4seb?usp=share_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-[#4B2D8F] font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                >
                  View Full Artist Collection →
                </a>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}