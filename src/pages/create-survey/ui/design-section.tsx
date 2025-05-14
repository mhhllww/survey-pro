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

export const DesignSection = () => {
  const form = useForm();

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
