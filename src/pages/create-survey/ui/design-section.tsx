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
  Plus,
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
import { useCreateQuestion } from '@/pages/create-survey/model/use-create-question.ts';
import { QuestionResponse } from '@/api/question/question-schema';
import { useCreateAnswer } from '@/pages/create-survey/model/use-create-answer.ts';
import {
  UiRadioGroup,
  UiRadioGroupItem,
} from '@/shared/ui/radio/radio-group.tsx';
import { UiLabel } from '@/shared/ui/label/label.tsx';
import { UiCheckbox } from '@/shared/ui/checkbox/checkbox';
import { SurveyContext } from '@/pages/create-survey/model/use-survey-context.tsx';
import { useContext } from 'react';

export const DesignSection = () => {
  const form = useForm();

  const { surveyId } = useContext(SurveyContext);

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
        <ul className={'questions__list'}>
          {!data?.questions.length && <span>Create your first question</span>}
          {data?.questions.map((question, index) => (
            <QuestionBody
              key={index}
              index={index}
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

interface QuestionBodyProps extends QuestionResponse {
  index: number;
}

const QuestionBody = ({
  title,
  description,
  answers,
  type,
  index,
}: QuestionBodyProps) => {
  const { surveyId } = useContext(SurveyContext);

  // FIXME: ID
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
          {/*FIXME: ID*/}
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
            Add Option
          </UiButton>
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
            Add Option
          </UiButton>
        </div>
      )}
      {type === 'checkbox' && (
        <div>
          {answers.map((answer, index) => (
            <div key={index} className={'radio-answer'}>
              <UiCheckbox value={`value-${index}`} />
              <UiLabel htmlFor={`value-${index}`}>{answer.title}</UiLabel>
            </div>
          ))}
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
            Add Option
          </UiButton>
        </div>
      )}
    </li>
  );
};
