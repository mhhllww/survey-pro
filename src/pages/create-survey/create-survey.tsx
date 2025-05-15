import { useNavigate, useParams } from 'react-router-dom';

import { ChevronLeft } from 'lucide-react';

import { DesignSection } from './ui/design-section';

import {
  UiTabs,
  UiTabsContent,
  UiTabsList,
  UiTabsTrigger,
} from '@/shared/ui/tabs/tabs';

import { UiButton } from '@/shared/ui/button/button';
import './create-survey.scss';
import { SurveyContextProvider } from '@/pages/create-survey/model/use-survey-context.tsx';
import { PreviewSection } from '@/pages/create-survey/ui/preview-section.tsx';

export const CreateSurvey = () => {
  const navigate = useNavigate();

  const { surveyId } = useParams();

  if (!surveyId) return null;

  return (
    <SurveyContextProvider surveyId={surveyId}>
      <header className={'header-create-survey'}>
        <UiButton design={'link'} onClick={() => navigate('/')}>
          <ChevronLeft />
          Back to Dashboard
        </UiButton>
      </header>
      <main className={'main-create-survey'}>
        <h2>Create New Survey</h2>
        <UiTabs defaultValue='design' className={'create-survey-tabs'}>
          <UiTabsList>
            <UiTabsTrigger value='design'>Design Survey</UiTabsTrigger>
            <UiTabsTrigger value='preview'>Preview</UiTabsTrigger>
          </UiTabsList>
          <UiTabsContent value='design'>
            <DesignSection />
          </UiTabsContent>
          <UiTabsContent value='preview'>
            <PreviewSection />
          </UiTabsContent>
        </UiTabs>
      </main>
    </SurveyContextProvider>
  );
};
