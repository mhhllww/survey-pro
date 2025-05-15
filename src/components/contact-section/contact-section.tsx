import { UiButton } from '@/shared/ui/button/button.tsx';
import { ArrowRightIcon } from 'lucide-react';
import '../contact-section/contact_section.scss';
import { Link } from 'react-router-dom';
import { RouterPaths } from '@/app/consts/RouterPaths.ts';

export const ContactSection = () => {
  return (
    <section id='contact' className='cta-container'>
      <div className='cta'>
        <h2 className='cta__title'>
          Ready to Start Collecting Valuable Insights?
        </h2>
        <p className='cta__text text-caption'>
          Join thousands of organizations that use SurveyPro to make better
          decisions with data.
        </p>

        <div className='cta__buttons'>
          <UiButton size='lg' asChild>
            <Link to={RouterPaths.DASHBOARD}>
              Get Started for Free
              <ArrowRightIcon />
            </Link>
          </UiButton>
          <UiButton design='outline' size='lg'>
            Contact Sales
          </UiButton>
        </div>
      </div>
    </section>
  );
};
