import { useSurvey } from '@/pages/create-survey/model/use-survey.ts';
import { useContext } from 'react';
import { SurveyContext } from '@/pages/create-survey/model/use-survey-context.tsx';
import { PreviewQuestion } from '@/pages/create-survey/ui/preview-question.tsx';

import './editor-section.scss';

export const PreviewSection = () => {
  const { surveyId } = useContext(SurveyContext);

  const { data } = useSurvey(surveyId);

  return (
    <section>
      <div className={'survey-info'}>
        <h3>{data?.title}</h3>
        <p>{data?.description}</p>
      </div>
      <ol>
        {data?.questions.map((question, index) => (
          <PreviewQuestion
            key={index}
            title={question.title}
            description={question.description}
            answers={question.answers}
            index={index}
            type={question.type}
          />
        ))}
      </ol>
    </section>
  );
};
