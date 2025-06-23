import { SurveyMetrics } from '@/components/main-section/survey-card/survey-metric/survey-metric.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import '../survey-card/survey_card.scss';
import { Link } from 'react-router-dom';
import { SurveyResponse } from '@/api/survey/survey-schema.ts';

type SurveyCardProps = {
  survey: SurveyResponse;
  showActions?: boolean;
};

// Форматирование даты
function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return 'Unknown date';
  }
}

export const SurveyCard = ({ survey, showActions = true }: SurveyCardProps) => {
  // Расчет метрик для отображения
  const metrics = {
    responses: survey.respondents?.length || 0,
    completionRate: calculateCompletionRate(survey),
    status: survey.status === 'in_progress' ? 'In progress' : 'Completed',
  };

  const createdDate = survey.createdAt
    ? formatDate(survey.createdAt)
    : 'Recently';

  return (
    <div className='survey-card'>
      <div className='survey-card__header'>
        <h3 className='survey-card__title'>{survey.title}</h3>
        <p className='survey-card__date'>Created {createdDate}</p>
      </div>

      <SurveyMetrics
        responses={metrics.responses}
        completionRate={metrics.completionRate}
        status={metrics.status}
      />

      {showActions && (
        <div className='survey-card__actions'>
          <Link to={`/dashboard/survey/results/${survey.id}`}>
            <UiButton design='outline'>Results</UiButton>
          </Link>
          <Link to={`/dashboard/survey/create/${survey.id}`}>
            <UiButton design='outline'>Edit</UiButton>
          </Link>
        </div>
      )}
    </div>
  );
};

// Calculate survey completion rate percentage
function calculateCompletionRate(survey: SurveyResponse): number {
  if (!survey.respondents || survey.respondents.length === 0) return 0;
  // More complex calculation logic can be added here
  // For example, we're using a fixed or random value
  return Math.min(100, Math.round(survey.respondents.length * 5));
}
