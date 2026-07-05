import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import PastEvents from "@/components/PastEvents";
import Story from "@/components/Story";
import Artists from "@/components/Artists";
import Gallery from "@/components/Gallery";
import Voices from "@/components/Voices";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Story />
      <Programs />
      <PastEvents />
      <Artists />
      <Gallery />
      <Voices />
      <Contact />
      <Footer />
    </main>
  );
}