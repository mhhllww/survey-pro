import './survey-page.scss';
import { fullSurveyData } from '@/pages/analytics/full-survey-data.ts';
import { UiScrollArea } from '@/shared/ui/scroll-area/scroll-area.tsx';
import { useParams } from 'react-router-dom';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { formatQuestions } from '@/components/ui/questions-table/modal/format-questions.ts';
import { UiInput } from '@/shared/ui/input/input.tsx';
import { useState } from 'react';

export const SurveyPage = () => {
  const { surveyName } = useParams();
  const decodedName = decodeURIComponent(surveyName || '');
  const survey = fullSurveyData[decodedName];
  const questions = formatQuestions(decodedName);

  if (!questions || questions.length === 0 || !survey) {
    return <span>Survey not found</span>;
  }

  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const currentQuestion = questions[selectedQuestion];

  return (
    <UiScrollArea>
      <div className={'survey'}>
        <div className={'survey__container'}>
          <div className={'survey__survey-name survey-name'}>
            <header className={'survey-name__header'}>
              <span className={'survey-name__header-title'}>{decodedName}</span>
              <span className={'survey-name__header-subtitle'}>
                Survey Temporary Description
              </span>
            </header>
            <div className={'survey-name__content'}>
              <div className={'survey-name__content-label'}>
                <span className={'survey-name__content-label-text'}>
                  Question 1 of 5
                </span>
                <span className={'survey-name__content-label-percent'}>
                  40% complete
                </span>
              </div>
              <div className={'survey-name__content-bar-container'}>
                <div
                  className={'survey-name__content-bar-fill'}
                  style={{ width: `${40}%` }}
                />
              </div>
            </div>
          </div>
          <div className={'survey__survey-question survey-question'}>
            <header className={'survey-question__header'}>
              <h3 className={'survey-question__title'}>
                1. {currentQuestion.question}
              </h3>
              <span className={'survey-name__header-subtitle'}>
                {currentQuestion.description}
              </span>
            </header>
            <div className={'survey-question__content'}>
              {currentQuestion.items.map((item, index) => (
                <label key={index} className={'survey-question__option'}>
                  <UiInput
                    type='radio'
                    name={`question_${currentQuestion.question}`}
                    value={item.answer}
                    className={'survey-question__option-inner'}
                  />
                  <span className={'survey-question__option-answer'}>
                    {item.answer}
                  </span>
                </label>
              ))}
            </div>
            <div className={'survey-question__buttons'}>
              <UiButton
                design='outline'
                size='lg'
                disabled={selectedQuestion === 0}
                onClick={() => {
                  if (selectedQuestion !== 0) {
                    setSelectedQuestion(selectedQuestion - 1);
                  }
                }}>
                <span>Previous</span>
              </UiButton>
              <UiButton
                design='foreground'
                size='lg'
                disabled={selectedQuestion === questions.length - 1}
                onClick={() => {
                  if (selectedQuestion !== questions.length - 1) {
                    setSelectedQuestion(selectedQuestion + 1);
                  }
                }}>
                <span>Next</span>
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </UiScrollArea>
  );
};
