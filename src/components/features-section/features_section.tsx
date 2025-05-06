import '../features-section/features_section.scss';
import { PencilLine } from 'lucide-react';
import { Users } from 'lucide-react';
import { ChartColumn } from 'lucide-react';
import FeaturePhoto from '../../assets/FeaturePhoto.png';

export const FeaturesSection = () => {
  return (
    <section id='features' className='features'>
      <div className='features__heading'>
        <span className='features__label'>Features</span>
        <h2 className='features__title'>
          Everything You Need for Professional Surveys
        </h2>
        <p className='features__subtitle text-caption'>
          SurveyPro provides all the tools you need to create, distribute, and
          analyze surveys with ease.
        </p>
      </div>

      <div className='features__body'>
        <ul className='features__list'>
          <li className='features__item'>
            <span className='features__icon'>
              <PencilLine />
            </span>
            <div className='features__item-content'>
              <h3 className='features__item-title'>Intuitive Survey Builder</h3>
              <p className='features__item-text text-caption'>
                Create professional surveys in minutes with our drag-and-drop
                builder. Choose from multiple question types and customize to
                match your brand.
              </p>
            </div>
          </li>

          <li className='features__item'>
            <span className='features__icon'>
              <Users />
            </span>
            <div className='features__item-content'>
              <h3 className='features__item-title'>
                Multiple Distribution Channels
              </h3>
              <p className='features__item-text text-caption'>
                Share your surveys via email, social media, QR codes, or embed
                them directly on your website to reach your audience wherever
                they are.
              </p>
            </div>
          </li>

          <li className='features__item'>
            <span className='features__icon'>
              <ChartColumn />
            </span>
            <div className='features__item-content'>
              <h3 className='features__item-title'>Advanced Analytics</h3>
              <p className='features__item-text text-caption'>
                Gain valuable insights with real-time reporting and
                visualization tools. Filter, segment, and export data to make
                informed decisions.
              </p>
            </div>
          </li>
        </ul>
        <div className='features__image-container'>
          <img src={FeaturePhoto} alt='Feature' className='features__image' />
        </div>
      </div>
    </section>
  );
};
