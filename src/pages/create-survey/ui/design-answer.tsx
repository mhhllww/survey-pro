import { useContext, useState } from 'react';
import { Check, Edit, Trash } from 'lucide-react';

import { SurveyContext } from '@/pages/create-survey/model/use-survey-context';
import { UiInput } from '@/shared/ui/input/input';
import { UiButton } from '@/shared/ui/button/button';
import { UiTextarea } from '@/shared/ui/textarea/textarea';
import { UiRadioGroup, UiRadioGroupItem } from '@/shared/ui/radio/radio-group';
import { UiCheckbox } from '@/shared/ui/checkbox/checkbox';

import { AnswerResponse } from '@/api/answer/answer-schema';

import { useDeleteAnswer } from '@/pages/create-survey/model/use-delete-answer';
import { useChangeAnswer } from '@/pages/create-survey/model/use-change-answer.ts';
import { showToast } from '@/shared/ui/toast/toast.tsx';

type DesignAnswerProps = {
  questionId: string;
  questionType: string;
  answer: AnswerResponse;
};

export const DesignAnswer = ({
  questionId,
  questionType,
  answer,
}: DesignAnswerProps) => {
  const { surveyId } = useContext(SurveyContext);

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(answer.title);

  const { changeAnswerMutation } = useChangeAnswer(surveyId);

  const { deleteAnswerMutation } = useDeleteAnswer(
    surveyId,
    questionId,
    answer.id
  );

  const onSubmit = () => {
    if (title.trim()) {
      changeAnswerMutation({
        title: title,
        questionId: questionId,
        answerId: answer.id,
        surveyId,
      });
      setIsEditing(false);
      showToast({
        type: 'success',
        title: 'Answer was changed!',
        description: 'Title was changed successfully!',
      });
    } else {
      showToast({
        type: 'warning',
        title: 'Title is required!',
        description: 'Please enter Title and try again!',
      });
    }
  };

  return (
    <div className={'answer-container'}>
      {questionType === 'text' && (
        <UiInput disabled placeholder={'Enter your answer'} />
      )}

      {questionType === 'paragraph' && (
        <UiTextarea disabled placeholder={'Enter your answer'} />
      )}

      {questionType === 'radio' && (
        <UiRadioGroup>
          <div className={'radio-answer'}>
            <UiRadioGroupItem disabled value={`value-${answer.id}`} />
            <UiInput
              className={'answer-title'}
              disabled={!isEditing}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className={'answer-buttons'}>
              <UiButton
                design={'outline'}
                size={'icon'}
                onClick={
                  isEditing ? () => onSubmit() : () => setIsEditing(true)
                }>
                {isEditing ? <Check /> : <Edit />}
              </UiButton>

              <UiButton
                design={'foreground'}
                onClick={() => {
                  deleteAnswerMutation({
                    questionId: questionId,
                    answerId: answer.id,
                    surveyId,
                  });
                }}>
                <Trash />
              </UiButton>
            </div>
          </div>
        </UiRadioGroup>
      )}

      {questionType === 'checkbox' && (
        <div key={answer.id} className={'checkbox-answer'}>
          <UiCheckbox disabled />
          <UiInput
            className={'answer-title'}
            disabled={!isEditing}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <div className={'answer-buttons'}>
            <UiButton
              design={'outline'}
              size={'icon'}
              onClick={isEditing ? () => onSubmit() : () => setIsEditing(true)}>
              {isEditing ? <Check /> : <Edit />}
            </UiButton>

            <UiButton
              design={'foreground'}
              size={'icon'}
              onClick={() => {
                deleteAnswerMutation({
                  questionId: questionId,
                  answerId: answer.id,
                  surveyId,
                });
              }}>
              <Trash />
            </UiButton>
          </div>
        </div>
      )}
    </div>
  );
};
