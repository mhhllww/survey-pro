import { AnalyticCard } from '@/components/main-section/analytics-card/analytics-card.tsx';
import { ChartColumnIcon, UsersIcon, ClockIcon } from 'lucide-react';
import { SurveyCard } from '@/components/main-section/survey-card/survey-card.tsx';
import '../main-section/main_section.scss';
import { CreateSurveyFormDialog } from '@/components/create-survey-form-dialog/create-survey-form-dialog.tsx';
import { useUserSurveys } from './hooks/use-user-surveys.ts';

export const MainSection = () => {
  const { data: userSurveys, isLoading, error } = useUserSurveys(50); // Запрашиваем больше опросов

  return (
    <section className='main-section'>
      <div className='main-section__content'>
        <div className='main-section__header'>
          <div className='main-section__title-group'>
            <h2 className='main-section__title'>Dashboard</h2>
            <p className='main-section__subtitle'>
              Manage your surveys and view analytics
            </p>
          </div>
          <CreateSurveyFormDialog />
        </div>

        <div className='main-section__container'>
          <AnalyticCard
            title='Total Surveys'
            icon={<ChartColumnIcon size={16} />}
            value={userSurveys?.length || 0}
            text={isLoading ? 'Loading...' : 'Your created surveys'}
          />
          <AnalyticCard
            title='Total Responses'
            icon={<UsersIcon size={16} />}
            value={
              userSurveys?.reduce(
                (sum, survey) => sum + (survey.respondents?.length || 0),
                0
              ) || 0
            }
            text='Total number of respondents'
          />
          <AnalyticCard
            title='Active Surveys'
            icon={<ClockIcon size={16} />}
            value={
              userSurveys?.filter((s) => s.status === 'in_progress').length || 0
            }
            text='Surveys in progress'
          />
        </div>

        <h2 className='main-section__recent-title'>Your Surveys</h2>

        {isLoading ? (
          <div className='main-section__loading'>Loading surveys...</div>
        ) : error ? (
          <div className='main-section__error'>
            An error occurred while loading surveys
          </div>
        ) : userSurveys && userSurveys.length > 0 ? (
          <div className='main-section__surveys'>
            {userSurveys.map((survey) => (
              <SurveyCard key={survey.id} survey={survey} />
            ))}
          </div>
        ) : (
          <div className='main-section__empty'>
            <p>You don't have any surveys yet</p>
            <p>
              Create your first survey using the button in the top right corner
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
