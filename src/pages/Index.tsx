import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ServicesSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
