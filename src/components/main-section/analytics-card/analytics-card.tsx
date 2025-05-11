import { LucideIcon } from 'lucide-react';
import '../analytics-card/analytics_card.scss';

interface AnalyticsCardProps {
  title: string;
  icon: LucideIcon;
  value: number;
  text: string;
}

export const AnalyticCard = ({
  title,
  icon: Icon,
  value,
  text,
}: AnalyticsCardProps) => {
  return (
    <div className='analytic-card'>
      <div className='analytic-card__header'>
        <h5 className='analytic-card__title'>{title}</h5>
        <Icon size={16} />
      </div>
      <div className='analytic-card__content'>
        <div className='analytic-card__value'>{value}</div>
        <div className='analytic-card__text'>{text}</div>
      </div>
    </div>
  );
};
