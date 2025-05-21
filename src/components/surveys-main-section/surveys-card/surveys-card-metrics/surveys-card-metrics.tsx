import '../surveys-card-metrics/surveys-card-metrics.scss';
type CardMetrics = {
  responses: number;
  date: string;
};

export const SurveysCardMetrics = ({ responses, date }: CardMetrics) => {
  return (
    <div className='surveys-metrics'>
      <div className='surveys-metrics__item'>
        <span className='surveys-metrics__label'>Responses</span>
        <span className='surveys-metrics__value'>{responses}</span>
      </div>
      <div className='surveys-metrics__item'>
        <span className='surveys-metrics__label'>Created</span>
        <span className='surveys-metrics__value'>{date}</span>
      </div>
    </div>
  );
};
