import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Achievements from "@/components/Achievements";
import BrandSlider from "@/components/BrandSlider";
import InsuranceCards from "@/components/InsuranceCards";
import Testimonials from "@/components/Testimonials";
import VideoTestimonial from "@/components/VideoTestimonial";
import WhyChooseMe from "@/components/WhyChooseMe";
import Footer from "@/components/Footer";
import About from "@/components/About";
import PhotoCarousel from "@/components/PhotoCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <BrandSlider />
      <InsuranceCards />
      <PhotoCarousel />
      <Testimonials />
      <VideoTestimonial />
      <WhyChooseMe />
      <Footer />
    </>
  );
}
