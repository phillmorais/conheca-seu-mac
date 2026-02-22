import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProductsSection from "@/components/ProductsSection";
import SocialSection from "@/components/SocialSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  const handleLearnMore = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      const headerHeight = 80;
      const elementPosition = productsSection.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    // Replace with actual WhatsApp number
    window.open("https://wa.me/5511999999999", "_blank");
  };

  return (
    <div className="w-full min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <div className="pt-16 sm:pt-20">
        <HeroSection onLearnMore={handleLearnMore} onWhatsApp={handleWhatsApp} />
      </div>

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Products Section */}
      <div id="products">
        <ProductsSection />
      </div>

      {/* Social Section */}
      <SocialSection />

      {/* CTA Section */}
      <CTASection onWhatsApp={handleWhatsApp} />

      {/* Footer */}
      <Footer />
    </div>
  );
}
