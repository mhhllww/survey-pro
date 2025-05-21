import '@/components/surveys-main-section/surveys-card/surveys-card.scss';
import { SurveysCardMetrics } from '@/components/surveys-main-section/surveys-card/surveys-card-metrics/surveys-card-metrics.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { useNavigate } from 'react-router-dom';

interface Card {
  id: number;
  title: string;
  description: string;
  status: string;
  metrics: {
    responses: number;
    date: string;
  };
}

type CardProps = {
  cards: Card[];
};

export const SurveysCard = ({ cards }: CardProps) => {
  const navigate = useNavigate();

  const handleButtonClick = (
    id: number,
    mode: 'preview' | 'edit' | 'results'
  ) => {
    if (mode === 'results') {
      navigate(`/dashboard/analytics?survey=survey-${id}`);
    } else {
      navigate(`/surveys/survey-${id}/${mode}`);
    }
  };
  return (
    <div className='surveys-card-list'>
      {cards.map((card) => (
        <div key={card.id} className='surveys-card'>
          <div className='surveys-card-header'>
            <div>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
            <div>
              <span
                className={`status-badge ${card.status.toLowerCase().replace(' ', '-')}`}>
                {card.status}
              </span>
            </div>
          </div>
          <SurveysCardMetrics
            responses={card.metrics.responses}
            date={card.metrics.date}
          />
          <div className='surveys-card-actions'>
            <UiButton
              design='outline'
              onClick={() => handleButtonClick(card.id, 'preview')}>
              Preview
            </UiButton>
            <UiButton
              design='outline'
              onClick={() => handleButtonClick(card.id, 'edit')}>
              Edit
            </UiButton>
            <UiButton
              design='outline'
              onClick={() => handleButtonClick(card.id, 'results')}>
              Results
            </UiButton>
            <UiButton
              design='outline'
              onClick={() => {
                <div>Coming soon Delete modal</div>;
              }}>
              Delete
            </UiButton>
          </div>
        </div>
      ))}
    </div>
  );
};
