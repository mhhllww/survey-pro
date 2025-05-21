import { DashBoardHeader } from '@/components/dashboard-header/dashboard-header.tsx';
import { UiScrollArea } from '@/shared/ui/scroll-area/scroll-area.tsx';
import {
  SurveysMainSection
} from '@/components/surveys-main-section/surveys-main-section.tsx';

export const Surveys = () => {
  return (
    <>
      <UiScrollArea>
        <DashBoardHeader />
        <SurveysMainSection />
      </UiScrollArea>
    </>
  );
};
