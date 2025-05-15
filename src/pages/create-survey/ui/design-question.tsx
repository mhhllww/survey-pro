import { QuestionResponse } from '@/api/question/question-schema.ts';
import { useContext } from 'react';
import { SurveyContext } from '@/pages/create-survey/model/use-survey-context.tsx';
import { useCreateAnswer } from '@/pages/create-survey/model/use-create-answer.ts';
import { UiInput } from '@/shared/ui/input/input.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { Plus } from 'lucide-react';
import { UiTextarea } from '@/shared/ui/textarea/textarea.tsx';
import {
  UiRadioGroup,
  UiRadioGroupItem,
} from '@/shared/ui/radio/radio-group.tsx';
import { UiLabel } from '@/shared/ui/label/label.tsx';
import { UiCheckbox } from '@/shared/ui/checkbox/checkbox.tsx';

type QuestionBodyProps = QuestionResponse & {
  index: number;
};

export const QuestionBody = ({
  title,
  description,
  answers,
  type,
  index,
}: QuestionBodyProps) => {
  const { surveyId } = useContext(SurveyContext);

  const { createAnswerMutation } = useCreateAnswer(surveyId, index);

  return (
    <li className={'questions__item'}>
      <div className={'question-number'}>{index + 1}</div>
      <h4>{title}</h4>
      <p>{description}</p>
      {type === 'text' && (
        <div>
          {answers.map((answer, index) => (
            <div key={index}>
              {answer.title}
              <UiInput placeholder={'Enter your answer'} />
            </div>
          ))}
          {answers.length < 1 && (
            <UiButton
              className={'add-button'}
              design={'outline'}
              size={'sm'}
              onClick={() => {
                createAnswerMutation({
                  title: '',
                  respondents: [],
                  questionId: index,
                  surveyId,
                });
              }}>
              <Plus />
              Add Option
            </UiButton>
          )}
        </div>
      )}
      {type === 'paragraph' && (
        <div>
          {answers.map((answer, index) => (
            <div key={index}>
              {answer.title}
              <UiTextarea placeholder={'Enter your answer'} />
            </div>
          ))}
          {answers.length < 1 && (
            <UiButton
              className={'add-button'}
              design={'outline'}
              onClick={() => {
                createAnswerMutation({
                  title: '',
                  respondents: [],
                  questionId: index,
                  surveyId,
                });
              }}>
              <Plus />
              Add Option
            </UiButton>
          )}
        </div>
      )}
      {type === 'radio' && (
        <div>
          <UiRadioGroup className={'radio-group-question'}>
            {answers.map((answer, index) => (
              <div key={index} className={'radio-answer'}>
                <UiRadioGroupItem value={`value-${index}`} />
                <UiLabel htmlFor={`value-${index}`}>{answer.title}</UiLabel>
              </div>
            ))}
          </UiRadioGroup>
          {answers.length < 8 && (
            <UiButton
              className={'add-button'}
              design={'outline'}
              onClick={() => {
                createAnswerMutation({
                  title: 'New Radio Answer',
                  respondents: [],
                  questionId: index,
                  surveyId,
                });
              }}>
              <Plus />
              Add Option
            </UiButton>
          )}
        </div>
      )}
      {type === 'checkbox' && (
        <div>
          <div className={'checkbox-group-question'}>
            {answers.map((answer, index) => (
              <div key={index} className={'checkbox-answer'}>
                <UiCheckbox value={`value-${index}`} />
                <UiLabel htmlFor={`value-${index}`}>{answer.title}</UiLabel>
              </div>
            ))}
          </div>
          {answers.length < 8 && (
            <UiButton
              className={'add-button'}
              design={'outline'}
              onClick={() => {
                createAnswerMutation({
                  title: 'New Checkbox Answer',
                  respondents: [],
                  questionId: index,
                  surveyId,
                });
              }}>
              <Plus />
              Add Option
            </UiButton>
          )}
        </div>
      )}
    </li>
  );
};
