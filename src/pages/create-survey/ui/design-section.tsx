import { useForm } from 'react-hook-form';

import {
  // ChevronLeft,
  // Plus,
  // Trash2,
  // GripVertical,
  Type,
  ListChecks,
  CheckSquare,
  AlignLeft,
  ChevronDown,
} from 'lucide-react';

import {
  UiForm,
  UiFormControl,
  UiFormField,
  UiFormItem,
  UiFormLabel,
  UiFormMessage,
} from '@/shared/ui/form/form';
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

import './design-section.scss';
import { useSurvey } from '@/pages/create-survey/model/use-survey.ts';
import { useParams } from 'react-router-dom';
import { useCreateQuestion } from '@/pages/create-survey/model/use-create-question.ts';
import { QuestionResponse } from '@/api/question/question-schema';
import { useCreateAnswer } from '@/pages/create-survey/model/use-create-answer.ts';

export const DesignSection = () => {
  const form = useForm();
  const { surveyId } = useParams();

  if (!surveyId) return;

  const { data } = useSurvey(surveyId);

  const { createQuestionMutation } = useCreateQuestion(surveyId);

  return (
    <section className={'design-section'}>
      <article className={'design-section__details'}>
        <div>
          <h3>Survey Details</h3>
          <p>Set the basic information for your survey</p>
        </div>
        <UiForm {...form}>
          <form className={'details__form'}>
            <UiFormField
              name='survey-title'
              render={({ field }) => (
                <UiFormItem>
                  <UiFormLabel>Survey Title</UiFormLabel>
                  <UiFormControl>
                    <UiInput placeholder='Enter survey title' {...field} />
                  </UiFormControl>
                  <UiFormMessage />
                </UiFormItem>
              )}
            />
            <UiFormField
              name='survey-decription'
              render={({ field }) => (
                <UiFormItem>
                  <UiFormLabel>Description</UiFormLabel>
                  <UiFormControl>
                    <UiTextarea
                      placeholder='Enter survey description'
                      {...field}
                    />
                  </UiFormControl>
                  <UiFormMessage />
                </UiFormItem>
              )}
            />
          </form>
        </UiForm>
      </article>
      <article className={'design-section__questions'}>
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
                      title: 'New question',
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
                      title: 'New question',
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
                      title: 'New question',
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
                      title: 'New question',
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
        <ul className={'questions__list'}>
          {!data?.questions.length && <span>Create your first question</span>}
          {data?.questions.map((question, index) => (
            <QuestionBody
              key={index}
              type={question.type}
              title={question.title}
              description={question.description}
              answers={question.answers}
            />
          ))}
        </ul>
      </article>
    </section>
  );
};

const QuestionBody = ({
  title,
  description,
  answers,
  type,
}: QuestionResponse) => {
  const { surveyId } = useParams();

  if (!surveyId) return;

  // FIXME: ID
  const { createAnswerMutation } = useCreateAnswer(surveyId, 0);

  return (
    <li>
      {type}
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
          {/*FIXME: ID*/}
          <UiButton
            design={'outline'}
            onClick={() => {
              createAnswerMutation({
                title: 'New Text answer',
                respondents: [],
                questionId: 0,
                surveyId,
              });
            }}>
            Add Answer
          </UiButton>
        </div>
      )}
      {type === 'paragraph' && (
        <div>
          <UiButton
            design={'outline'}
            onClick={() => {
              createAnswerMutation({
                title: 'New Paragraph Answer',
                respondents: [],
                questionId: 0,
                surveyId,
              });
            }}>
            Add Answer
          </UiButton>
        </div>
      )}
      {type === 'radio' && (
        <div>
          <UiButton
            design={'outline'}
            onClick={() => {
              createAnswerMutation({
                title: 'New Radio Answer',
                respondents: [],
                questionId: 0,
                surveyId,
              });
            }}>
            Add Answer
          </UiButton>
        </div>
      )}
      {type === 'checkbox' && (
        <div>
          <UiButton
            design={'outline'}
            onClick={() => {
              createAnswerMutation({
                title: 'New Checkbox Answer',
                respondents: [],
                questionId: 0,
                surveyId,
              });
            }}>
            Add Answer
          </UiButton>
        </div>
      )}
    </li>
  );
};
