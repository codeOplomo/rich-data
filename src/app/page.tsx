import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import Features from "@/components/Features";
import Process from "@/components/Process";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import InfiniteGallery from "@/components/InfiniteGallery";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <AboutUs />
        <InfiniteGallery />
        <Services />
        <Features />
        <Process />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}