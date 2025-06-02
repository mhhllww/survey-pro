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
import { NotFoundSurvey } from '@/pages/create-survey/not-found-survey.tsx';
import { useSurvey } from '@/pages/create-survey/model/use-survey.ts';
import { CreateSurveySkeleton } from '@/pages/create-survey/create-survey-skeleton.tsx';
import { UiScrollArea } from '@/shared/ui/scroll-area/scroll-area';

export const CreateSurvey = () => {
  const navigate = useNavigate();

  const { surveyId } = useParams();

  if (!surveyId) return;

  const { data, isLoading } = useSurvey(surveyId);

  if (isLoading) return <CreateSurveySkeleton />;

  if (surveyId !== data?.id) return <NotFoundSurvey />;

  return (
    <UiScrollArea>
      <SurveyContextProvider surveyId={surveyId}>
        <header className={'header-create-survey'}>
          <nav className={'header-create-survey__content'}>
            <UiButton design={'link'} onClick={() => navigate('/dashboard')}>
              <ChevronLeft />
              Back to Dashboard
            </UiButton>
          </nav>
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
    </UiScrollArea>
  );
};
