import { Header } from '@/components/header/header.tsx';
import { HeroSection } from '@/components/hero-section/hero_section.tsx';
import { FeaturesSection } from '@/components/features-section/features_section.tsx';
import { CapabilitiesSection } from '@/components/capabilities-section/capabilities-section.tsx';
import { ContactSection } from '@/components/contact-section/contact-section.tsx';
import { Footer } from '@/components/footer/footer.tsx';
import '@/scss/main.scss';
import { UiScrollArea } from '@/shared/ui/scroll-area/scroll-area.tsx';

export const Home = () => {
  return (
    <UiScrollArea>
      <Header />
      <main>
        <div>
          <HeroSection />
          <FeaturesSection />
          <CapabilitiesSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </UiScrollArea>
  );
};
