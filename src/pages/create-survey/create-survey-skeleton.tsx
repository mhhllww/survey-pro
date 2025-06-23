import './create-survey-skeleton.scss';
import { Skeleton } from '@/shared/ui/skeleton/skeleton.tsx';

export const CreateSurveySkeleton = () => {
  return (
    <>
      <header className={'skeleton-header'}>
        <Skeleton className={'link'} />
      </header>

      <main className={'skeleton-main'}>
        <Skeleton className={'title'} />

        <Skeleton className={'tab-block'} />

        <Skeleton className={'info-block'} />

        <div className={'questions-header'}>
          <Skeleton className={'text'} />

          <Skeleton className={'dropdown'} />
        </div>

        <Skeleton className={'question-block'} />
      </main>
    </>
  );
};
