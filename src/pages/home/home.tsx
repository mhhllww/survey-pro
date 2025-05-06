import { Header } from '@/components/header.tsx';
import { HeroSection } from '@/components/hero_section.tsx';
import { FeaturesSection } from '@/components/features_section.tsx';
import { CapabilitiesSection } from '@/components/capabilities-section.tsx';

export const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CapabilitiesSection />
    </>
  );
};
