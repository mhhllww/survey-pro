import { UiButton } from '@/shared/ui/button/button.tsx';
import '../header/header.scss';
import { ChartColumnIcon, AlignRightIcon } from 'lucide-react';
import { scrollToBlock } from '@/shared/lib/scroll-to-block.ts';
import {
  UiSheet,
  UiSheetTrigger,
  UiSheetContent,
} from '@/shared/ui/sheet/sheet.tsx';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export const Header = () => {
  const [sheetOpened, setSheetOpened] = useState(false);

  return (
    <header className='header'>
      <div className='header__content'>
        <div className='header-logo'>
          <div className='header-logo__bg-logo'>
            <ChartColumnIcon color='white' />
          </div>
          <span className='header-logo__text'>SurveyPro</span>
        </div>
        <nav className='header-nav'>
          <ul className='header-nav__list'>
            <div className='header-nav__content'>
              <UiButton
                design='link'
                onClick={() => scrollToBlock('features')}
                asChild>
                <li>Features</li>
              </UiButton>
              <UiButton
                design='link'
                onClick={() => scrollToBlock('capabilities')}
                asChild>
                <li>Capabilities</li>
              </UiButton>
              <UiButton
                design='link'
                onClick={() => scrollToBlock('contact')}
                asChild>
                <li>Contact</li>
              </UiButton>
            </div>
          </ul>
        </nav>

        <div className='header-actions'>
          <div className='mobile-only'>
            <UiSheet open={sheetOpened} onOpenChange={setSheetOpened}>
              <UiSheetTrigger asChild>
                <UiButton design='link'>
                  <AlignRightIcon />
                </UiButton>
              </UiSheetTrigger>
              <UiSheetContent>
                <div className='header-nav__content'>
                  <ul className='header-nav__list'>
                    <UiButton
                      design='link'
                      onClick={() => {
                        scrollToBlock('features');
                        setSheetOpened(false);
                      }}
                      asChild>
                      <li>Features</li>
                    </UiButton>
                    <UiButton
                      design='link'
                      onClick={() => {
                        scrollToBlock('capabilities');
                        setSheetOpened(false);
                      }}
                      asChild>
                      <li>Capabilities</li>
                    </UiButton>
                    <UiButton
                      design='link'
                      onClick={() => {
                        scrollToBlock('contact');
                        setSheetOpened(false);
                      }}
                      asChild>
                      <li>Contact</li>
                    </UiButton>
                  </ul>
                  <UiButton design='outline' asChild>
                    <Link to='/login'> Log in</Link>
                  </UiButton>
                  <UiButton>
                    <Link to='/register'> Get Started</Link>
                  </UiButton>
                </div>
              </UiSheetContent>
            </UiSheet>
          </div>

          <div className='desktop-only'>
            <UiButton design='outline'>
              <Link to='/login'> Log in</Link>
            </UiButton>
            <UiButton>
              <Link to='/register'> Get Started</Link>
            </UiButton>
          </div>
        </div>
      </div>
    </header>
  );
};
