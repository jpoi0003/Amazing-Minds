import Image from "next/image";

const artworks = [
  {
    category: "Tote Bag (B)",
    artist: "John",
    image: "/gallery/johntotebag.jpg",
  },
  {
    category: "Cosmetic Pouch",
    artist: "John",
    image: "/gallery/johncosmeticpouch.jpg",
  },
  {
    category: "Tote Bag (B)",
    artist: "Jing Hao",
    image: "/gallery/jinghaototebag.jpg",
  },
  {
    category: "Cosmetic Pouch",
    artist: "Kai Zhi",
    image: "/gallery/kaizhicosmeticpouch.jpg",
  },
  {
    category: "Sling Bag",
    artist: "Mei Yan",
    image: "/gallery/meiyanslingbag.jpg",
  },
  {
    category: "Sling Bag",
    artist: "Xin Ling",
    image: "/gallery/xinlingslingbag.jpg",
  },
  {
    category: "Tote Bag (S)",
    artist: "Kai Zhi",
    image: "/gallery/kaizhitotebag.jpg",
  },
  {
    category: "Tote Bag (S)",
    artist: "Zi Xiang",
    image: "/gallery/zixiangtotebag.jpg",
  },
];

export default function Gallery() {
  return (
    <section id="artwork" className="py-20 md:py-32 bg-[#FAF8FF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <p className="uppercase tracking-[0.3em] text-[#4B2D8F] font-medium">
            Our Collection
          </p>

          <h2 className="mt-4 text-5xl font-semibold text-gray-900">
            Artwork Gallery
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Discover handcrafted creations that celebrate creativity,
            individuality and the incredible talents of our Amazing Minds artists.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">

          {artworks.map((art, index) => (

            <div
              key={index}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            >

              {/* Image */}
              <div className="relative h-72 overflow-hidden">

                <Image
                  src={art.image}
                  alt={art.category}
                  fill
                  sizes="(max-width:768px)100vw,(max-width:1200px)50vw,25vw"
                  className="object-cover group-hover:scale-110 transition duration-700"
                />

              </div>

              {/* Card */}
              <div className="p-6">

                <span className="inline-block rounded-full bg-[#4B2D8F]/10 px-4 py-2 text-xs font-medium text-[#4B2D8F]">
                  {art.category}
                </span>

                <p className="mt-4 text-gray-500">
                  Created by {art.artist}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-24">

          <div className="rounded-[40px] bg-white p-12 shadow-xl text-center">

            <h3 className="text-3xl font-semibold text-[#4B2D8F]">
              Explore Our Complete Collection
            </h3>

            <p className="mt-5 max-w-2xl mx-auto text-gray-600 leading-8">
              Browse our complete catalogue featuring handmade bags,
              paintings, rock art, coasters and many more unique creations
              by our Amazing Minds artists.
            </p>

            <a
              href="https://drive.google.com/drive/folders/16mpvz8YYcJ2YDVUW2A_8X2dWV6ZwQcL8?usp=share_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#4B2D8F] px-8 py-4 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#38216b] hover:shadow-2xl"
            >
              Browse Full Collection
              <span className="text-xl">↗</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}