import './survey-page.scss';
import { fullSurveyData } from '@/pages/analytics/full-survey-data.ts';
import { UiScrollArea } from '@/shared/ui/scroll-area/scroll-area.tsx';
import { useNavigate, useParams } from 'react-router-dom';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { formatQuestions } from '@/components/ui/questions-table/model/format-questions.ts';
import { UiInput } from '@/shared/ui/input/input.tsx';
import { useState } from 'react';
import {
  QuestionType,
  useSurveyValidation,
} from '@/pages/survey/hooks/use-survey-validation.ts';
import { ChevronRightIcon } from 'lucide-react';
import { ChevronLeftIcon } from 'lucide-react';
import { showToast } from '@/shared/ui/toast/toast.tsx';

export const SurveyPage = () => {
  const { surveyId } = useParams<{ surveyId: string }>();
  const searchParams = new URLSearchParams(window.location.search);
  const source = searchParams.get('source');

  // Проверяем источник данных (тестовые или Firebase)
  const isFirebaseSource = source === 'firebase';
  console.log(
    `Survey source: ${isFirebaseSource ? 'Firebase' : 'Test data'}, ID: ${surveyId}`
  );

  // Если используем тестовые данные
  const surveyIndex = surveyId ? parseInt(surveyId, 10) - 1 : NaN;
  const surveyNames = Object.keys(fullSurveyData);
  const surveyName = surveyNames[surveyIndex];
  const survey = fullSurveyData[surveyName];
  const questions = formatQuestions(surveyName);

  // Если источник Firebase, но пока используем тестовые данные
  // В будущем здесь будет запрос к Firebase по surveyId

  if (!questions || questions.length === 0 || !survey) {
    return <span>Survey not found. Please check the URL and try again.</span>;
  }

  const [selectedQuestion, setSelectedQuestion] = useState(0);
  const currentQuestion = questions[selectedQuestion];

  const prcBar = Math.round(100 / questions.length);

  const { answers, handleInputChange, validateAnswer } = useSurveyValidation();

  const navigate = useNavigate();

  return (
    <UiScrollArea>
      <div className={'survey'}>
        <div className={'survey__container'}>
          <div className={'survey__survey-name survey-name'}>
            <header className={'survey-name__header'}>
              <span className={'survey-name__header-title'}>{surveyName}</span>
              <span className={'survey-name__header-subtitle'}>
                Survey ID: {surveyId} (from{' '}
                {new URLSearchParams(window.location.search).get('source') ||
                  'test data'}
                )
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
                  placeholder={'Enter your answer...'}
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
                  placeholder={'Enter your answer...'}
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
                <ChevronLeftIcon className={'survey-question__buttons-arrow'} />
                <span>Previous</span>
              </UiButton>
              {selectedQuestion === questions.length - 1 ? (
                <UiButton
                  design='foreground'
                  size='lg'
                  onClick={() => {
                    if (
                      validateAnswer(
                        currentQuestion.question,
                        currentQuestion.type as QuestionType
                      )
                    ) {
                      setSelectedQuestion(selectedQuestion + 1);
                      navigate('/');
                    } else {
                      if (currentQuestion.type === 'radio') {
                        showToast({
                          type: 'warning',
                          title: 'Warning!',
                          description:
                            'Please select one of the suggested answers.',
                        });
                      } else if (currentQuestion.type === 'checkbox') {
                        showToast({
                          type: 'warning',
                          title: 'Warning!',
                          description:
                            'Please select at least one of the suggested answers.',
                        });
                      } else {
                        showToast({
                          type: 'warning',
                          title: 'Warning!',
                          description: 'Please write your answer.',
                        });
                      }
                    }
                  }}>
                  <span>Submit</span>
                </UiButton>
              ) : (
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
                      if (currentQuestion.type === 'radio') {
                        showToast({
                          type: 'warning',
                          title: 'Warning!',
                          description:
                            'Please select one of the suggested answers.',
                        });
                      } else if (currentQuestion.type === 'checkbox') {
                        showToast({
                          type: 'warning',
                          title: 'Warning!',
                          description:
                            'Please select at least one of the suggested answers.',
                        });
                      } else {
                        showToast({
                          type: 'warning',
                          title: 'Warning!',
                          description: 'Please write your answer.',
                        });
                      }
                    }
                  }}>
                  <span>Next</span>
                  <ChevronRightIcon
                    className={'survey-question__buttons-arrow'}
                  />
                </UiButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </UiScrollArea>
  );
};
