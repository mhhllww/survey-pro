import './analytics-card.scss';
import { ArrowUpRightIcon, ArrowDownLeftIcon } from 'lucide-react';

type AnalyticsCardProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  change?: {
    direction: 'up' | 'down';
    percent: string;
    caption: string;
  };
};

export const AnalyticsCard = ({
  title,
  value,
  icon,
  change,
}: AnalyticsCardProps) => {
  const isPositive = change?.direction === 'up';

  return (
    <div className={'analytics-card'}>
      <div className={'analytics-card__header'}>
        <span className={'analytics-card__title'}>{title}</span>
        <div className={'analytics-card__icon-container'}>{icon}</div>
      </div>
      <div className={'analytics-card__value'}>{value}</div>
      {change && (
        <div className={'analytics-card__change'}>
          {isPositive ? (
            <div className={'analytics-card__change-content'}>
              <ArrowUpRightIcon size={12} />
              <span className={'analytics-card__percent'}>
                +{change.percent}%
              </span>
              <span className={'analytics-card__caption'}>
                {change.caption}
              </span>
            </div>
          ) : (
            <div className={'analytics-card__change-content'}>
              <ArrowDownLeftIcon size={12} />
              <span className={'analytics-card__percent'}>
                -{change.percent}%
              </span>
              <span className={'analytics-card__caption'}>
                {change.caption}
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
