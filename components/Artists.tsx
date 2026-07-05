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
    image: "/artists/ahmad.jpg",
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
{
    name: "Jayden",
    talent: "Acrylic Painting",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/jayden.jpg",
    description:
      "Jayden enjoys experimenting with bold colours and textures, creating expressive artwork inspired by everyday life.",
  },
  {
    name: "Jing Hao",
    talent: "Mixed Media Art",
    supportneeds: "ADHD",
    image: "/artists/jinghao.jpg",
    description:
      "Jing Hao explores expressive mixed media techniques, turning emotions into bold visual stories.",
  },
  {
    name: "Kai Zhi",
    talent: "Acrylic Painting",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/kaizhi.jpg",
    description:
      "Kai Zhi enjoys experimenting with bold colours and textures, creating expressive artwork inspired by everyday life.",
  },
  {
    name: "Keith",
    talent: "Mixed Media Art",
    supportneeds: "ADHD",
    image: "/artists/keith.jpg",
    description:
      "Keith explores expressive mixed media techniques, turning emotions into bold visual stories.",
  },
  {
    name: "Mei Yan",
    talent: "Acrylic Painting",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/meiyan.jpg",
    description:
      "Mei Yan enjoys experimenting with bold colours and textures, creating expressive artwork inspired by everyday life.",
  },
  {
    name: "Wing Yan",
    talent: "Mixed Media Art",
    supportneeds: "ADHD",
    image: "/artists/wingyan.jpg",
    description:
      "Wing Yan explores expressive mixed media techniques, turning emotions into bold visual stories.",
  },
  {
    name: "Yong Earng",
    talent: "Acrylic Painting",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/yongearng.jpg",
    description:
      "Yong Earng enjoys experimenting with bold colours and textures, creating expressive artwork inspired by everyday life.",
  },
  {
    name: "Zi Xiang",
    talent: "Mixed Media Art",
    supportneeds: "ADHD",
    image: "/artists/zixiang.jpg",
    description:
      "Zi Xiang explores expressive mixed media techniques, turning emotions into bold visual stories.",
  },
  {
    name: "Yan Xin",
    talent: "Acrylic Painting",
    supportneeds: "Autism Spectrum Disorder",
    image: "/artists/yanxin.jpg",
    description:
      "Yan Xin enjoys experimenting with bold colours and textures, creating expressive artwork inspired by everyday life.",
  },
  {
    name: "Zi Xin",
    talent: "Mixed Media Art",
    supportneeds: "ADHD",
    image: "/artists/zixin.jpg",
    description:
      "Zi Xin explores expressive mixed media techniques, turning emotions into bold visual stories.",
  },
];

export default function Artists() {
  return (
    <section id="artists" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-[#4B2D8F] font-medium">
            Meet Our Artists
          </p>

          <h2 className="mt-4 text-5xl font-semibold text-gray-900">
            Artist Profiles
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-8">
            Every artist has a unique story, talent and creative journey.
            Together they represent the colourful spirit of Amazing Minds.
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
                  Support Needs
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