import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import WorkSection from "@/components/WorkSection";

const Index = () => (
  <div className="min-h-screen">
    <Navigation />
    <main className="page-enter">
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <ExperienceSection />
      <ContactSection />
    </main>
    <Footer />
  </div>
);

export default Index;
