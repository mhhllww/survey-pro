import { SurveyMetrics } from '@/components/main-section/survey-card/survey-metric/survey-metric.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import '../survey-card/survey_card.scss';

type SurveyCardProps = {
  title: string;
  date: string;
  metrics: {
    responses: number;
    completionRate: number;
    status: string;
  };
};

export const SurveyCard = ({ title, date, metrics }: SurveyCardProps) => {
  return (
    <div className='survey-card'>
      <div className='survey-card__header'>
        <h3 className='survey-card__title'>{title}</h3>
        <p className='survey-card__date'>Created on {date}</p>
      </div>

      <SurveyMetrics {...metrics} />

      <div className='survey-card__actions'>
        <UiButton design='outline'>View Results</UiButton>
        <UiButton design='outline'>Edit Survey</UiButton>
      </div>
    </div>
  );
};
