import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tours from "./components/Tours";
import WhyUs from "./components/WhyUs";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a]">
      <Navbar />
      <Hero />
      <Tours />
      <WhyUs />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
