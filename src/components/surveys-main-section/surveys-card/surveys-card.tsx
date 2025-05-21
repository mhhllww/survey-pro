import '@/components/surveys-main-section/surveys-card/surveys-card.scss';
import { SurveysCardMetrics } from '@/components/surveys-main-section/surveys-card/surveys-card-metrics/surveys-card-metrics.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { useNavigate } from 'react-router-dom';
import {
  ChartColumnIcon,
  EyeIcon,
  Trash2Icon,
  SquarePenIcon,
} from 'lucide-react';

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
            <div className='survey-card-title_group'>
              <h3 className='survey-card__title'>{card.title}</h3>
              <p className='survey-card__description'>{card.description}</p>
            </div>
            <div
              className={`surveys-card__status surveys-card__status--${card.status.toLowerCase().replace(' ', '-')}`}>
              <span>{card.status}</span>
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
              <EyeIcon />
              Preview
            </UiButton>
            <UiButton
              design='outline'
              onClick={() => handleButtonClick(card.id, 'edit')}>
              <SquarePenIcon />
              Edit
            </UiButton>
            <UiButton
              design='outline'
              onClick={() => handleButtonClick(card.id, 'results')}>
              <ChartColumnIcon />
              Results
            </UiButton>
            <UiButton
              design='outline'
              onClick={() => {
                <div>Coming soon Delete modal</div>;
              }}>
              <Trash2Icon color='red' />
              <span className='red-btn-delete'>Delete</span>
            </UiButton>
          </div>
        </div>
      ))}
    </div>
  );
};
