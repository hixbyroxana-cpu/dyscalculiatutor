import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ExpertiseBar from "@/components/ExpertiseBar";
import ServicesSection from "@/components/ServicesSection";
import WhyNotCramming from "@/components/WhyNotCramming";
import WhatIsDyscalculia from "@/components/WhatIsDyscalculia";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import SeoRoadmapSection from "@/components/SeoRoadmapSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <ExpertiseBar />
        <ServicesSection />
        <WhyNotCramming />
        <WhatIsDyscalculia />
        <TestimonialsSection />
        <SeoRoadmapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
