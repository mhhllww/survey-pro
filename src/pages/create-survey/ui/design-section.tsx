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

export const DesignSection = () => {
  const form = useForm();
  const { surveyId } = useParams();

  if (!surveyId) return;

  const { data } = useSurvey(surveyId);

  const { createQuestionMutation } = useCreateQuestion(surveyId);

  console.log('data', data);

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
          <Dropdown />
        </div>
      </article>
      <UiButton
        onClick={() => {
          createQuestionMutation({
            title: 'test q from client 5',
            description: 'desc',
            type: 'text',
            surveyId,
          });
        }}>
        create question
      </UiButton>
    </section>
  );
};

const Dropdown = () => {
  return (
    <UiDropdownMenu>
      <UiDropdownMenuTrigger asChild>
        <UiButton design={'outline'} size={'md'}>
          <ChevronDown />
          Add Question
        </UiButton>
      </UiDropdownMenuTrigger>
      <UiDropdownMenuContent>
        <UiDropdownMenuGroup>
          <UiDropdownMenuItem>
            <ListChecks /> Multiple Choice
          </UiDropdownMenuItem>
          <UiDropdownMenuItem>
            <CheckSquare /> Checkbox
          </UiDropdownMenuItem>
          <UiDropdownMenuItem>
            <Type /> Text
          </UiDropdownMenuItem>
          <UiDropdownMenuItem>
            <AlignLeft /> Paragraph
          </UiDropdownMenuItem>
        </UiDropdownMenuGroup>
      </UiDropdownMenuContent>
    </UiDropdownMenu>
  );
};
