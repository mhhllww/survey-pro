import '../footer/footer.scss';
import { useAppDispatch } from '@/shared/lib/redux/hooks.ts';
import { systemSlice } from '@/store/system-slice.ts';
import { CONTACT_DIALOG_KEY } from '@/components/dialog-contact/consts/key.ts';

export const Footer = () => {
  const dispatch = useAppDispatch();

  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p className='footer__copyright'>
          © 2025 SurveyPro. All rights reserved.
        </p>
        <div className='footer__links text-caption'>
          {/* TODO: terms & privacy policy links to pdfs*/}
          <a href='/' className='footer__link'>
            Terms
          </a>
          <a href='/' className='footer__link'>
            Privacy
          </a>
          <button
            className='footer__link'
            onClick={() =>
              dispatch(
                systemSlice.actions.openModal({ key: CONTACT_DIALOG_KEY })
              )
            }>
            Contact
          </button>
        </div>
      </div>
    </footer>
  );
};
