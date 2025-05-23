import '../analytics-card/analytics_card.scss';

type AnalyticsCardProps = {
  title: string;
  icon: React.ReactNode;
  value: number;
  text: string;
};

export const AnalyticCard = ({
  title,
  icon,
  value,
  text,
}: AnalyticsCardProps) => {
  return (
    <div className='analytic-card'>
      <div className='analytic-card__header'>
        <h5 className='analytic-card__title'>{title}</h5>
        {icon}
      </div>
      <div className='analytic-card__content'>
        <div className='analytic-card__value'>{value}</div>
        <div className='analytic-card__text'>{text}</div>
      </div>
    </div>
  );
};
