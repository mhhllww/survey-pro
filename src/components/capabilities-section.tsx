import { CircleCheckBig } from 'lucide-react';
import { ChartColumn } from 'lucide-react';
import { Users } from 'lucide-react';
import '../components/ui/capabilities_section.scss';

export const CapabilitiesSection = () => {
  return (
    <section className='capabilities'>
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
            <Users />
          </div>
          <h3 className='capability-card__title'>Customer Feedback</h3>
          <p className='capability-card__text'>
            Collect valuable insights from your customers to improve products
            and services
          </p>
        </div>

        <div className='capability-card'>
          <div className='capability-card__icon'>
            <CircleCheckBig />
          </div>
          <h3 className='capability-card__title'>Market Research</h3>
          <p className='capability-card__text'>
            Understand market trends and consumer preferences to guide your
            business strategy
          </p>
        </div>

        <div className='capability-card'>
          <div className='capability-card__icon'>
            <ChartColumn />
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
