import '../footer/footer.scss';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__content'>
        <p className='footer__copyright'>
          © 2025 SurveyPro. All rights reserved.
        </p>
        <div className='footer__links text-caption'>
          <a href='/' className='footer__link'>
            Terms
          </a>
          <a href='/' className='footer__link'>
            Privacy
          </a>
          <a href='/' className='footer__link'>
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};
