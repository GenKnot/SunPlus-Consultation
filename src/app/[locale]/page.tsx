import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HeroSection from '../../components/HeroSection';
import AboutSection from '../../components/AboutSection';
import CompanySection from '../../components/CompanySection';
import ServicesSection from '../../components/ServicesSection';
import FeaturesSection from '../../components/FeaturesSection';
import TestimonialsSection from '../../components/TestimonialsSection';
import FAQSection from '../../components/FAQSection';
import CallToActionSection from '../../components/CallToActionSection';
import ContactSection from '../../components/ContactSection';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <TestimonialsSection />
        <AboutSection />
        <CompanySection />
        <ServicesSection />
        <FeaturesSection />
        <FAQSection />
        <CallToActionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
