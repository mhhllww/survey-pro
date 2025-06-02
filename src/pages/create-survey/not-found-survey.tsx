import { UiButton } from '@/shared/ui/button/button.tsx';
import { ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import './create-survey.scss';

export const NotFoundSurvey = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className={'header-create-survey'}>
        <UiButton design={'link'} onClick={() => navigate('/dashboard')}>
          <ChevronLeft />
          Back to Dashboard
        </UiButton>
      </header>
      <main className={'not-found-survey-main'}>
        <h2>
          The Survey was not found! <br /> <p>Please, back to Dashboard</p>
        </h2>
      </main>
    </>
  );
};
