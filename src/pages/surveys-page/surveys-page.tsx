import { useUserSurveys } from '@/components/main-section/hooks/use-user-surveys.ts';
import { SurveyCard } from '@/components/main-section/survey-card/survey-card.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { CreateSurveyFormDialog } from '@/components/create-survey-form-dialog/create-survey-form-dialog.tsx';
import './surveys-page.scss';
import { Link } from 'react-router-dom';

export const SurveysPage = () => {
  const { data: userSurveys, isLoading, error } = useUserSurveys(20); // Получаем больше опросов

  return (
    <div className='surveys-page'>
      <div className='surveys-page__header'>
        <div>
          <h1 className='surveys-page__title'>My Surveys</h1>
          <p className='surveys-page__subtitle'>Manage your surveys</p>
        </div>
        <CreateSurveyFormDialog />
      </div>

      {isLoading ? (
        <div className='surveys-page__loading'>Loading surveys...</div>
      ) : error ? (
        <div className='surveys-page__error'>
          An error occurred while loading surveys
        </div>
      ) : userSurveys && userSurveys.length > 0 ? (
        <div className='surveys-page__grid'>
          {userSurveys.map((survey) => (
            <SurveyCard key={survey.id} survey={survey} />
          ))}
        </div>
      ) : (
        <div className='surveys-page__empty'>
          <h2>You don't have any surveys yet</h2>
          <p>Create your first survey using the "Create new survey" button</p>
          <Link to='/'>
            <UiButton>Back to Dashboard</UiButton>
          </Link>
        </div>
      )}
    </div>
  );
};
