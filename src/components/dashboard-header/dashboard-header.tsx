import { UiButton } from '@/shared/ui/button/button.tsx';
import { Settings } from '@/components/dashboard-header/settings/settings.tsx';
import { NewSurvey } from '@/components/dashboard-header/new-survey/new-survey.tsx';
import '../dashboard-header/dashboard_header.scss';
import { ChartColumnIcon, AlignRightIcon } from 'lucide-react';
import {
  UiSheet,
  UiSheetTrigger,
  UiSheetContent,
} from '@/shared/ui/sheet/sheet.tsx';

export const DashBoardHeader = () => {
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
          <UiButton design='link' className='header-nav__link'>
            <li className='header-nav__item'>Dashboard</li>
          </UiButton>
          <UiButton design='link' className='header-nav__link'>
            <li className='header-nav__item'>Surveys</li>
          </UiButton>
          <UiButton design='link' className='header-nav__link'>
            <li className='header-nav__item'>Analytics</li>
          </UiButton>
        </ul>
      </nav>

      <div className='header-actions'>
        <div className='desktop-only'>
          <Settings />
          <NewSurvey />
        </div>

        <div className='mobile-only'>
          <UiSheet>
            <UiSheetTrigger asChild>
              <UiButton design='link'>
                <AlignRightIcon />
              </UiButton>
            </UiSheetTrigger>
            <UiSheetContent>
              <Settings />
              <NewSurvey />
            </UiSheetContent>
          </UiSheet>
        </div>
      </div>
    </div>
  );
};
