import { useContext, useState } from 'react';
import { Check, Edit, PlusCircle, Trash } from 'lucide-react';
import { v4 as uuid } from 'uuid';

import { UiInput } from '@/shared/ui/input/input';
import { UiButton } from '@/shared/ui/button/button';

import { QuestionResponse } from '@/api/question/question-schema';

import { SurveyContext } from '@/pages/create-survey/model/use-survey-context';
import { useDeleteQuestion } from '@/pages/create-survey/model/use-delete-question';
import { DesignAnswer } from '@/pages/create-survey/ui/design-answer';
import { useCreateAnswer } from '@/pages/create-survey/model/use-create-answer';
import { useChangeQuestion } from '@/pages/create-survey/model/use-change-question.ts';
import { showToast } from '@/shared/ui/toast/toast.tsx';

type QuestionBodyProps = QuestionResponse & {
  index: number;
};

export const QuestionBody = ({ index, ...question }: QuestionBodyProps) => {
  const { surveyId } = useContext(SurveyContext);

  const { deleteQuestionMutation } = useDeleteQuestion(surveyId, question.id);

  const { createAnswerMutation } = useCreateAnswer(surveyId, question.id);

  const answersLimit = ['text', 'paragraph'].includes(question.type) ? 1 : 8;

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState(question.title);
  const [description, setDescription] = useState(question.description);

  const { changeQuestionMutation } = useChangeQuestion(surveyId);

  const onSubmit = () => {
    if (title.trim() && description.trim()) {
      changeQuestionMutation({
        title: title,
        description: description,
        questionId: question.id,
        surveyId,
      });
      setIsEditing(false);
      showToast({
        type: 'success',
        title: 'Question was changed!',
        description: 'Title and Description was changed successfully!',
      });
    } else {
      showToast({
        type: 'warning',
        title: 'Title and Description is required!',
        description: 'Please enter Title and Description and try again!',
      });
    }
  };

  return (
    <li className={'questions__item'}>
      <div className={'item-buttons'}>
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
            deleteQuestionMutation({
              questionId: question.id,
              surveyId,
            });
          }}>
          <Trash />
        </UiButton>
      </div>
      <div className={'item-index'}>{index + 1}</div>
      <div>
        <UiInput
          className={'title-input'}
          disabled={!isEditing}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <UiInput
          className={'description-input'}
          disabled={!isEditing}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div className={'answers-group'}>
        {question.answers.map((answer) => (
          <DesignAnswer
            key={answer.id}
            questionId={question.id}
            questionType={question.type}
            answer={answer}
          />
        ))}
      </div>

      {question.answers.length < answersLimit && (
        <UiButton
          className={'add-button'}
          design={'foreground'}
          size={'sm'}
          onClick={() => {
            createAnswerMutation({
              id: uuid(),
              title: 'New answer',
              respondents: [],
              questionId: question.id,
              surveyId,
            });
          }}>
          <PlusCircle />
          Add Option
        </UiButton>
      )}
    </li>
  );
};
