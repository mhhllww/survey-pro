import { UiButton } from '@/shared/ui/button/button.tsx';
import { ArrowRightIcon } from 'lucide-react';
import '../contact-section/contact_section.scss';
import { Link } from 'react-router-dom';
import { RouterPaths } from '@/app/consts/RouterPaths.ts';
import { useAppDispatch } from '@/shared/lib/redux/hooks.ts';
import { systemSlice } from '@/store/system-slice.ts';
import { CONTACT_DIALOG_KEY } from '@/components/dialog-contact/consts/key.ts';

export const ContactSection = () => {
  const dispatch = useAppDispatch();

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
          <UiButton
            design='outline'
            size='lg'
            onClick={() =>
              dispatch(
                systemSlice.actions.openModal({ key: CONTACT_DIALOG_KEY })
              )
            }>
            Contact Sales
          </UiButton>
        </div>
      </div>
    </section>
  );
};
