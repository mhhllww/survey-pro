import '../features-section/features_section.scss';
import { PencilLineIcon, UsersIcon, ChartColumnIcon } from 'lucide-react';
import FeaturePhoto from '../../assets/FeaturePhoto.png';

export const FeaturesSection = () => {
  return (
    <section id='features' className='features-container'>
      <div className='features'>
        <div className='features__heading'>
          <span className='features__label'>Features</span>
          <h2 className='features__title'>
            Everything You Need for Professional Surveys
          </h2>
          <p className='features__subtitle'>
            SurveyPro provides all the tools you need to create, distribute, and
            analyze surveys with ease.
          </p>
        </div>

        <div className='features__body'>
          <ul className='features__list'>
            <li className='features__item'>
              <PencilLineIcon className='features__icon' />
              <div>
                <h3>Intuitive Survey Builder</h3>
                <p className='features__item-text'>
                  Create professional surveys in minutes with our drag-and-drop
                  builder. Choose from multiple question types and customize to
                  match your brand.
                </p>
              </div>
            </li>
            <li className='features__item'>
              <UsersIcon className='features__icon' />
              <div>
                <h3>Multiple Distribution Channels</h3>
                <p className='features__item-text'>
                  Share your surveys via email, social media, QR codes, or embed
                  them directly on your website to reach your audience wherever
                  they are.
                </p>
              </div>
            </li>
            <li className='features__item'>
              <ChartColumnIcon className='features__icon' />
              <div>
                <h3>Advanced Analytics</h3>
                <p className='features__item-text'>
                  Gain valuable insights with real-time reporting and
                  visualization tools. Filter, segment, and export data to make
                  informed decisions.
                </p>
              </div>
            </li>
          </ul>
          <img src={FeaturePhoto} alt='Feature' className='features__image' />
        </div>
      </div>
    </section>
  );
};
