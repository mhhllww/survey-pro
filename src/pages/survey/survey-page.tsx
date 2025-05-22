import './survey-page.scss';
import { fullSurveyData } from '@/pages/analytics/full-survey-data.ts';
import { UiScrollArea } from '@/shared/ui/scroll-area/scroll-area.tsx';
import { useParams } from 'react-router-dom';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { formatQuestions } from '@/components/ui/questions-table/modal/format-questions.ts';
import { UiInput } from '@/shared/ui/input/input.tsx';
import { useState } from 'react';
import {
  QuestionType,
  useSurveyValidation,
} from '@/pages/survey/hooks/use-survey-validation.ts';
import { ChevronRightIcon } from 'lucide-react';
import { ChevronLeftIcon } from 'lucide-react';

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

  const prcBar = Math.round(100 / questions.length);

  const { answers, handleInputChange, validateAnswer } = useSurveyValidation();

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
                  Question {selectedQuestion + 1} of {questions.length}
                </span>
                <span className={'survey-name__content-label-percent'}>
                  {Math.round(prcBar * (selectedQuestion + 1))}% complete
                </span>
              </div>
              <div className={'survey-name__content-bar-container'}>
                <div
                  className={'survey-name__content-bar-fill'}
                  style={{
                    width: `${Math.round(prcBar * (selectedQuestion + 1))}%`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className={'survey__survey-question survey-question'}>
            <header className={'survey-question__header'}>
              <h3 className={'survey-question__title'}>
                {selectedQuestion + 1}. {currentQuestion.question}
              </h3>
              <span className={'survey-name__header-subtitle'}>
                {currentQuestion.description}
              </span>
            </header>
            <div className={'survey-question__content'}>
              {currentQuestion.type === 'textArea' ? (
                <textarea
                  key={`${currentQuestion.question}-${selectedQuestion + 1}`}
                  rows={8}
                  className={'survey-question__textarea'}
                  value={(answers[currentQuestion.question] as string) || ''}
                  onChange={(e) =>
                    handleInputChange(
                      currentQuestion.question,
                      e.target.value,
                      null,
                      'textArea'
                    )
                  }
                />
              ) : currentQuestion.type === 'text' ? (
                <UiInput
                  type='text'
                  className={'survey-question__option-inner-text'}
                  value={(answers[currentQuestion.question] as string) || ''}
                  onChange={(e) =>
                    handleInputChange(
                      currentQuestion.question,
                      e.target.value,
                      null,
                      'text'
                    )
                  }
                />
              ) : (
                currentQuestion.items.map((item, index) => (
                  <label
                    key={`${currentQuestion.question}-${index}`}
                    className={'survey-question__option'}>
                    <UiInput
                      type={currentQuestion.type}
                      name={`question_${currentQuestion.question}`}
                      checked={
                        currentQuestion.type === 'radio'
                          ? answers[currentQuestion.question] === item.answer
                          : Array.isArray(answers[currentQuestion.question]) &&
                            (
                              answers[currentQuestion.question] as string[]
                            ).includes(item.answer)
                      }
                      onChange={(e) =>
                        handleInputChange(
                          currentQuestion.question,
                          item.answer,
                          e.target.checked,
                          currentQuestion.type as QuestionType
                        )
                      }
                      className={'survey-question__option-inner'}
                    />
                    <span className={'survey-question__option-answer'}>
                      {item.answer}
                    </span>
                  </label>
                ))
              )}
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
                <ChevronLeftIcon />
                <span>Previous</span>
              </UiButton>
              <UiButton
                design='foreground'
                size='lg'
                disabled={selectedQuestion === questions.length - 1}
                onClick={() => {
                  if (
                    validateAnswer(
                      currentQuestion.question,
                      currentQuestion.type as QuestionType
                    )
                  ) {
                    setSelectedQuestion(selectedQuestion + 1);
                  } else {
                    alert(
                      'Please select at least one answer before continuing'
                    );
                  }
                }}>
                <span>Next</span>
                <ChevronRightIcon />
              </UiButton>
            </div>
          </div>
        </div>
      </div>
    </UiScrollArea>
  );
};
