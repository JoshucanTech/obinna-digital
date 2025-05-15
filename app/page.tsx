import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import { ThemeProvider } from "@/components/theme-provider";
import AboutSection from "@/components/about-section";
import PricingSection from "@/components/pricing-section";
import OurWorksSection from "@/components/our-works-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import FooterSection from "@/components/footer-section";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <PricingSection />

        {/* <OurWorksSection /> */}
        <section id="work-with-us" className="py-20">
          {/* Work with us section content will go here */}
        </section>
        {/* <TestimonialsSection />
        <ContactSection />*/}
        <FooterSection />
      </main>
    </ThemeProvider>
  );
}
