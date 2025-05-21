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
import { Link } from 'react-router-dom';

export const DashBoardHeader = () => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='header-logo'>
          <div className='header-logo__bg-logo'>
            <ChartColumnIcon color='white' />
          </div>
          <span className='header-logo__text'>SurveyPro</span>
        </div>
        <nav className='header-nav'>
          <ul className='header-nav__list'>
            <UiButton design='link' asChild>
              <Link to='/dashboard'>Dashboard</Link>
            </UiButton>
            <UiButton design='link' asChild>
              <Link to='/dashboard/surveys'>Surveys</Link>
            </UiButton>
            <UiButton design='link' asChild>
              <Link to='/dashboard/analytics'>Analytics</Link>
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
                <ul className='header-nav__list'>
                  <UiButton design='link' asChild>
                    <Link to='/dashboard'>Dashboard</Link>
                  </UiButton>
                  <UiButton design='link' asChild>
                    <Link to='/surveys'>Surveys</Link>
                  </UiButton>
                  <UiButton design='link' asChild>
                    <Link to='/analytics'>Analytics</Link>
                  </UiButton>
                </ul>
                <Settings />
                <NewSurvey />
              </UiSheetContent>
            </UiSheet>
          </div>
        </div>
      </div>
    </header>
  );
};
