import { SurveyMetrics } from '@/components/main-section/survey-card/survey-metric/survey-metric.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import '../survey-card/survey_card.scss';
import { Link } from 'react-router-dom';
import { SurveyResponse } from '@/api/survey/survey-schema.ts';
import { showToast } from '@/shared/ui/toast/toast.tsx';
import { Copy, BarChart3, PenSquare } from 'lucide-react';

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
    status: survey.status === 'in_progress' ? 'Completed' : 'In process',
  };

  const createdDate = survey.createdAt
    ? formatDate(survey.createdAt)
    : 'Recently';

  // Функция копирования URL опроса в буфер обмена
  const copySurveyUrl = () => {
    const baseUrl = window.location.origin;
    // Добавляем '?id=' к URL, чтобы SurveyPage мог использовать идентификатор для Firebase
    const surveyUrl = `${baseUrl}/survey/1`;

    navigator.clipboard
      .writeText(surveyUrl)
      .then(() => {
        showToast({
          type: 'success',
          title: 'Link copied!',
          description: 'Survey URL has been copied to clipboard',
        });
      })
      .catch((error) => {
        console.error('Error copying URL:', error);
        showToast({
          type: 'error',
          title: 'Copy failed',
          description: 'Failed to copy survey URL',
        });
      });
  };

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
          <div className='survey-card__actions-group'>
            <Link to={`/dashboard/survey/results/${survey.id}`}>
              <UiButton design='outline' title='View survey results'>
                <BarChart3 size={18} />
                <span>Results</span>
              </UiButton>
            </Link>
            <div className='survey-card__edit-actions'>
              <Link to={`/dashboard/survey/create/${survey.id}`}>
                <UiButton design='outline' title='Edit survey'>
                  <PenSquare size={18} />
                </UiButton>
              </Link>
              <UiButton
                design='black'
                onClick={copySurveyUrl}
                title='Copy survey link'
                className='copy-button'>
                <Copy size={18} />
              </UiButton>
            </div>
          </div>
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
