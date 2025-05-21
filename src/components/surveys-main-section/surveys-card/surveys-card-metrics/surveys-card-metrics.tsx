import '../../../dashboard-main-section/survey-card/survey-metric/survey_metric.scss';
type CardMetrics = {
  responses: number;
  date: string;
};

export const SurveysCardMetrics = ({ responses, date }: CardMetrics) => {
  return (
    <div className='survey-metrics'>
      <div className='survey-metrics__item'>
        <span className='survey-metrics__label'>Responses</span>
        <span className='survey-metrics__value'>{responses}</span>
      </div>
      <div className='survey-metrics__item'>
        <span className='survey-metrics__label'>Created</span>
        <span className='survey-metrics__value'>{date}</span>
      </div>
    </div>
  );
};
