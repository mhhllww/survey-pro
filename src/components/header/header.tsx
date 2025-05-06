import { UiButton } from '@/shared/ui/button/button.tsx';
import '../header/header.scss';
import { ChartColumn } from 'lucide-react';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <div className='header-logo__bg-logo'>
          <ChartColumn color='white' />
        </div>
        <span className='header-logo__text'>SurveyPro</span>
      </div>
      <nav className='header-nav'>
        <ul className='header-nav__list'>
          <li className='header-nav__item'>
            <button
              onClick={() =>
                document
                  .getElementById('features')
                  ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
              }
              className='header-nav__link'>
              Features
            </button>
          </li>
          <li className='header-nav__item'>
            <a href='/' className='header-nav__link'>
              Pricing
            </a>
          </li>
          <li className='header-nav__item'>
            <a href='/' className='header-nav__link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className='header-actions'>
        <UiButton className='button__white'>
          <a href='/'> Log in</a>
        </UiButton>
        <UiButton className='button__black'>
          <a href='/'> Get Started</a>
        </UiButton>
      </div>
    </div>
  );
};
