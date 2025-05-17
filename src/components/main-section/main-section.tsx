import { NewSurvey } from '@/components/dashboard-header/new-survey/new-survey.tsx';
import { AnalyticCard } from '@/components/main-section/analytics-card/analytics-card.tsx';
import { ChartColumnIcon, UsersIcon, ClockIcon } from 'lucide-react';
import { SurveyCard } from '@/components/main-section/survey-card/survey-card.tsx';
import '../main-section/main_section.scss';
import { UiScrollArea } from '@/shared/ui/scroll-area/scroll-area.tsx';

export const MainSection = () => {
  return (
    <UiScrollArea>
      <section className='main-section'>
        <div className='main-section__content'>
          <div className='main-section__header'>
            <div className='main-section__title-group'>
              <h2 className='main-section__title'>Dashboard</h2>
              <p className='main-section__subtitle'>
                Manage your surveys and view analytics
              </p>
            </div>
            <NewSurvey buttonText='Create New Survey' />
          </div>

          <div className='main-section__container'>
            <AnalyticCard
              title='Total Surveys'
              icon={<ChartColumnIcon size={16} />}
              value={12}
              text='+2 from last month'
            />
            <AnalyticCard
              title='Total Responses'
              icon={<UsersIcon size={16} />}
              value={1.284}
              text='+10% from last month'
            />
            <AnalyticCard
              title='Active Surveys'
              icon={<ClockIcon size={16} />}
              value={5}
              text='3 ending this week'
            />
          </div>

          <h2 className='main-section__recent-title'>Recent Surveys</h2>

          <div className='main-section__surveys'>
            <SurveyCard
              title='Customer Satisfaction Survey 1'
              date='April 6, 2025'
              metrics={{ responses: 170, completionRate: 79, status: 'Active' }}
            />
            <SurveyCard
              title='Customer Satisfaction Survey 2'
              date='April 7, 2025'
              metrics={{ responses: 220, completionRate: 80, status: 'Active' }}
            />
            <SurveyCard
              title='Customer Satisfaction Survey 3'
              date='April 8, 2025'
              metrics={{ responses: 270, completionRate: 81, status: 'Active' }}
            />
          </div>
        </div>
      </section>
    </UiScrollArea>
  );
};
