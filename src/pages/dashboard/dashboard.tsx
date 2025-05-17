import { DashBoardHeader } from '@/components/dashboard-header/dashboard-header.tsx';
import { MainSection } from '@/components/main-section/main-section.tsx';
import { UiScrollArea } from '@/shared/ui/scroll-area/scroll-area.tsx';

export const Dashboard = () => {
  return (
    <>
      <UiScrollArea>
        <DashBoardHeader />
        <MainSection />
      </UiScrollArea>
    </>
  );
};
