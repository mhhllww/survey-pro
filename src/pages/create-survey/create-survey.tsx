// import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ChevronLeft,
  // Plus,
  // Trash2,
  // GripVertical,
  // Type,
  // ListChecks,
  // CheckSquare,
  // AlignLeft,
} from 'lucide-react';

import { DesignSection } from './ui/design-section';

import {
  UiTabs,
  UiTabsContent,
  UiTabsList,
  UiTabsTrigger,
} from '@/shared/ui/tabs/tabs';

import { UiButton } from '@/shared/ui/button/button';
import './create-survey.scss';

export const CreateSurvey = () => {
  const navigate = useNavigate();

  return (
    <>
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
          <UiTabsContent value='preview'></UiTabsContent>
        </UiTabs>
      </main>
    </>
  );
};
