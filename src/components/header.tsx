import { UiButton } from '@/shared/ui/button/button';
import '../components/ui/header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header__logo'>
        <div className='header__logo--svg'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='white'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'>
            <path d='M3 3v18h18'></path>
            <path d='M18 17V9'></path>
            <path d='M13 17V5'></path>
            <path d='M8 17v-3'></path>
          </svg>
        </div>
        <span className='header__logo--text'>SurveyPro</span>
      </div>
      <nav className='header__nav'>
        <ul className='header__nav--list'>
          <li className='header__nav--item'>
            <a href='/' className='header__nav--link'>
              Features
            </a>
          </li>
          <li className='header__nav--item'>
            <a href='/' className='header__nav--link'>
              Pricing
            </a>
          </li>
          <li className='header__nav--item'>
            <a href='/' className='header__nav--link'>
              Testimonials
            </a>
          </li>
          <li className='header__nav--item'>
            <a href='/' className='header__nav--link'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className='header__actions'>
        <UiButton className='button--white'>
          <a href='/'> Log in</a>
        </UiButton>
        <UiButton className='button--black'>
          <a href='/'> Get Started</a>
        </UiButton>
      </div>
    </div>
  );
};
