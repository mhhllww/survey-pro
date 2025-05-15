import { UiButton } from '@/shared/ui/button/button.tsx';
import '../hero-section/hero_section.scss';
import HeroPhoto from '../../assets/HeroPhoto.jpeg';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { RouterPaths } from '@/app/consts/RouterPaths.ts';

export const HeroSection = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <h1 className='hero-content__headline'>
          Create, Collect, and Analyze Survey Data with Ease
        </h1>
        <p className='hero-content__text'>
          SurveyPro helps you gather insights, make data-driven decisions, and
          improve your products and services with powerful survey tools.
        </p>
        <UiButton size='lg' asChild className='hero-content__btn'>
          <Link to={RouterPaths.DASHBOARD}>
            Get Started
            <ArrowRightIcon />
          </Link>
        </UiButton>
      </div>
      <img src={HeroPhoto} alt='Survey' className='hero-image' />
    </section>
  );
};
