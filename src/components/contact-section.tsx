import { UiButton } from '@/shared/ui/button/button.tsx';
import { ArrowRight } from 'lucide-react';
import '../components/ui/contact_section.scss';

export const ContactSection = () => {
  return (
    <section className='cta'>
      <div className='cta__content'>
        <h2 className='cta__title'>
          Ready to Start Collecting Valuable Insights?
        </h2>
        <p className='cta__text text-caption'>
          Join thousands of organizations that use SurveyPro to make better
          decisions with data.
        </p>

        <div className='cta__buttons'>
          <UiButton className='cta-button__black' size='lg'>
            Get Started for Free
            <ArrowRight />
          </UiButton>

          <UiButton className='cta-button__white' size='lg'>
            Contact Sales
          </UiButton>
        </div>
      </div>
    </section>
  );
};
