import Hero from '@/components/Hero';
import StatsBar from '@/components/StatsBar';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogPreview from '@/components/BlogPreview';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <ServicesSection />
      <WhyChooseUs />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <BlogPreview />
      <ContactSection />
    </>
  );
}