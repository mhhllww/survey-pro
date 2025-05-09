import { CircleCheckBigIcon, ChartColumnIcon, UsersIcon } from 'lucide-react';
import '../capabilities-section/capabilities_section.scss';

export const CapabilitiesSection = () => {
  return (
    <section id='capabilities' className='capabilities'>
      <div className='capabilities__heading'>
        <h2 className='capabilities__title'>Perfect For Every Need</h2>
        <p className='capabilities__subtitle text-caption'>
          SurveyPro is versatile enough to handle any type of feedback
          collection
        </p>
      </div>

      <div className='capabilities__container'>
        <div className='capability-card'>
          <div className='capability-card__icon'>
            <UsersIcon />
          </div>
          <h3 className='capability-card__title'>Customer Feedback</h3>
          <p className='capability-card__text'>
            Collect valuable insights from your customers to improve products
            and services
          </p>
        </div>

        <div className='capability-card'>
          <div className='capability-card__icon'>
            <CircleCheckBigIcon />
          </div>
          <h3 className='capability-card__title'>Market Research</h3>
          <p className='capability-card__text'>
            Understand market trends and consumer preferences to guide your
            business strategy
          </p>
        </div>

        <div className='capability-card'>
          <div className='capability-card__icon'>
            <ChartColumnIcon />
          </div>
          <h3 className='capability-card__title'>Employee Engagement</h3>
          <p className='capability-card__text'>
            Measure and improve workplace satisfaction and organizational
            culture
          </p>
        </div>
      </div>
    </section>
  );
};
