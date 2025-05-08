import { UiButton } from '@/shared/ui/button/button.tsx';
import '../hero-section/hero_section.scss';
import HeroPhoto from '../../assets/heroPhoto.png';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1 className='hero-content__headline'>
          Create, Collect, and Analyze Survey Data with Ease
        </h1>
        <p className='hero-content__text text-caption'>
          SurveyPro helps you gather insights, make data-driven decisions, and
          improve your products and services with powerful survey tools.
        </p>
        <div className='hero-buttons'>
          <UiButton className='hero-button__black' size='lg'>
            Get Started
            <ArrowRight />
          </UiButton>
        </div>
      </div>
      <div className='hero-image'>
        <img src={HeroPhoto} alt='Survey' className='hero-image__image' />
      </div>
    </section>
  );
};
