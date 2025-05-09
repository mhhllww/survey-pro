import { UiButton } from '@/shared/ui/button/button.tsx';
import { ArrowRightIcon } from 'lucide-react';
import '../contact-section/contact_section.scss';

export const ContactSection = () => {
  return (
    <section id='contact' className='cta'>
      <div className='cta__content'>
        <h2 className='cta__title'>
          Ready to Start Collecting Valuable Insights?
        </h2>
        <p className='cta__text text-caption'>
          Join thousands of organizations that use SurveyPro to make better
          decisions with data.
        </p>

        <div className='cta__buttons'>
          <UiButton size='lg'>
            Get Started for Free
            <ArrowRightIcon />
          </UiButton>

          <UiButton design='outline' size='lg'>
            Contact Sales
          </UiButton>
        </div>
      </div>
    </section>
  );
};
