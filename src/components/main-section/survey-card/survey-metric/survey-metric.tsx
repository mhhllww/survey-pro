import '../survey-metric/survey_metric.scss';
interface SurveyMetricsProps {
  responses: number;
  completionRate: number;
  status: string;
}

export const SurveyMetrics = ({
  responses,
  completionRate,
  status,
}: SurveyMetricsProps) => {
  return (
    <div className='survey-metrics'>
      <div className='survey-metrics__item'>
        <span className='survey-metrics__label'>Responses</span>
        <span className='survey-metrics__value'>{responses}</span>
      </div>
      <div className='survey-metrics__item'>
        <span className='survey-metrics__label'>Completion Rate</span>
        <span className='survey-metrics__value'>{completionRate}%</span>
      </div>
      <div className='survey-metrics__item'>
        <span className='survey-metrics__label'>Status</span>
        <span className='survey-metrics__value'>{status}</span>
      </div>
    </div>
  );
};
