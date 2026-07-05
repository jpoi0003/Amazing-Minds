export default function Footer() {
  return (
    <footer className="bg-[#120A23] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Section */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold text-[#F6C453]">
              Amazing Minds
            </h3>

            <p className="mt-4 text-gray-300 leading-7">
              Empowering individuals with special needs through art, creativity,
              and community support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-white">Home</a></li>
              <li><a href="#about" className="hover:text-white">About</a></li>
              <li><a href="#past-events" className="hover:text-white">Journey</a></li>
              <li><a href="#artists" className="hover:text-white">Artists</a></li>
              <li><a href="#artwork" className="hover:text-white">Artwork</a></li>
              <li><a href="#voices" className="hover:text-white">Community Voices</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>

            <div className="space-y-3 text-gray-300">
              <p>📧 Brightbridgehubs@gmail.com</p>
              <p>📞 +60 12-727 8076</p>
              <p>💬 WhatsApp Available</p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-10"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm gap-4">

          <p>
            © {new Date().getFullYear()} Amazing Minds. All rights reserved.
          </p>

          {/* YOUR CREDIT */}
          <p className="text-gray-400">
            Website created by{" "}
            <span className="text-[#F6C453] font-medium">
              Juliana Poi (Monash University Malaysia)
            </span>
          </p>

        </div>

      </div>
    </footer>
  );
}