import { UiButton } from '@/shared/ui/button/button.tsx';
import '../header/header.scss';
import { ChartColumnIcon, AlignRightIcon } from 'lucide-react';
import { scrollToBlock } from '@/shared/lib/scroll-to-block.ts';
import {
  UiSheet,
  UiSheetTrigger,
  UiSheetContent,
} from '@/shared/ui/sheet/sheet.tsx';

export const Header = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <div className='header-logo__bg-logo'>
          <ChartColumnIcon color='white' />
        </div>
        <span className='header-logo__text'>SurveyPro</span>
      </div>
      <nav className='header-nav'>
        <ul className='header-nav__list'>
          <UiButton
            design='link'
            onClick={() => scrollToBlock('features')}
            asChild
            className='header-nav__link'>
            <li className='header-nav__item'>Features</li>
          </UiButton>
          <UiButton
            design='link'
            onClick={() => scrollToBlock('capabilities')}
            asChild
            className='header-nav__link'>
            <li className='header-nav__item'>Capabilities</li>
          </UiButton>
          <UiButton
            design='link'
            onClick={() => scrollToBlock('contact')}
            asChild
            className='header-nav__link'>
            <li className='header-nav__item'>Contact</li>
          </UiButton>
        </ul>
      </nav>

      <div className='header-actions'>
        <div className='mobile-only'>
          <UiSheet>
            <UiSheetTrigger asChild>
              <UiButton design='link'>
                <AlignRightIcon />
              </UiButton>
            </UiSheetTrigger>
            <UiSheetContent>
              <UiButton design='outline'>
                <a href='/'> Log in</a>
              </UiButton>
              <UiButton>
                <a href='/'> Get Started</a>
              </UiButton>
            </UiSheetContent>
          </UiSheet>
        </div>

        <div className='desktop-only'>
          <UiButton design='outline'>
            <a href='/'> Log in</a>
          </UiButton>
          <UiButton>
            <a href='/'> Get Started</a>
          </UiButton>
        </div>
      </div>
    </div>
  );
};
