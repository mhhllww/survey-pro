import { useContext, useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';

import {
  Type,
  ListChecks,
  CheckSquare,
  AlignLeft,
  ChevronDown,
  Check,
  Edit,
} from 'lucide-react';
import { UiInput } from '@/shared/ui/input/input';
import { UiTextarea } from '@/shared/ui/textarea/textarea';
import {
  UiDropdownMenu,
  UiDropdownMenuContent,
  UiDropdownMenuGroup,
  UiDropdownMenuItem,
  UiDropdownMenuTrigger,
} from '@/shared/ui/dropdown-menu/dropdown-menu.tsx';

import { UiButton } from '@/shared/ui/button/button';
import { useSurvey } from '@/pages/create-survey/model/use-survey.ts';

import { useCreateQuestion } from '@/pages/create-survey/model/use-create-question.ts';
import { SurveyContext } from '@/pages/create-survey/model/use-survey-context.tsx';
import { QuestionBody } from './design-question';

import './editor-section.scss';
import { useChangeSurvey } from '@/pages/create-survey/model/use-change-survey.ts';
import { showToast } from '@/shared/ui/toast/toast.tsx';

export const DesignSection = () => {
  const { surveyId } = useContext(SurveyContext);
  if (!surveyId) return;

  const { data } = useSurvey(surveyId);

  const [isEditing, setIsEditing] = useState(false);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { changeSurveyMutation } = useChangeSurvey(surveyId);

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
    }
  }, [data]);

  const onSubmit = () => {
    if (title.trim() && description.trim()) {
      changeSurveyMutation({
        title: title,
        description: description,
        surveyId,
      });
      setIsEditing(false);
      showToast({
        type: 'success',
        title: 'Survey Information was changed!',
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

  const { createQuestionMutation } = useCreateQuestion(surveyId);

  return (
    <section>
      <article className={'design-section__details'}>
        <div>
          <h3>Survey Details</h3>
          <p>Set the basic information for your survey</p>
        </div>

        <UiInput
          placeholder='Enter survey title'
          disabled={!isEditing}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <UiTextarea
          placeholder='Enter survey description'
          disabled={!isEditing}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <UiButton
          className={'edit-button'}
          design={'outline'}
          size={'icon'}
          onClick={isEditing ? () => onSubmit() : () => setIsEditing(true)}>
          {isEditing ? <Check /> : <Edit />}
        </UiButton>
      </article>

      <article>
        <div className={'questions__header'}>
          <h3>Questions</h3>
          <UiDropdownMenu>
            <UiDropdownMenuTrigger asChild>
              <UiButton design={'outline'} size={'md'}>
                <ChevronDown />
                Add Question
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent>
              <UiDropdownMenuGroup>
                <UiDropdownMenuItem
                  onClick={() => {
                    createQuestionMutation({
                      id: uuid(),
                      title: 'New Radio Question',
                      description: 'Your Description here',
                      type: 'radio',
                      surveyId,
                    });
                  }}>
                  <CheckSquare /> One Choice
                </UiDropdownMenuItem>

                <UiDropdownMenuItem
                  onClick={() => {
                    createQuestionMutation({
                      id: uuid(),
                      title: 'New Checkbox Question',
                      description: 'Your Description here',
                      type: 'checkbox',
                      surveyId,
                    });
                  }}>
                  <ListChecks /> Multiple Choice
                </UiDropdownMenuItem>

                <UiDropdownMenuItem
                  onClick={() => {
                    createQuestionMutation({
                      id: uuid(),
                      title: 'New Text Question',
                      description: 'Your Description here',
                      type: 'text',
                      surveyId,
                    });
                  }}>
                  <Type /> Text
                </UiDropdownMenuItem>

                <UiDropdownMenuItem
                  onClick={() => {
                    createQuestionMutation({
                      id: uuid(),
                      title: 'New Paragraph Question',
                      description: 'Your Description here',
                      type: 'paragraph',
                      surveyId,
                    });
                  }}>
                  <AlignLeft /> Paragraph
                </UiDropdownMenuItem>
              </UiDropdownMenuGroup>
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </div>
        <ul>
          {!data?.questions.length && <span>Create your first question</span>}

          {data?.questions.map((question, index) => (
            <QuestionBody key={question.id} index={index} {...question} />
          ))}
        </ul>
      </article>
    </section>
  );
};
