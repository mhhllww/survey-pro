import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogTitle,
} from '@/shared/ui/dialog/dialog.tsx';
import './styles/create-survey-form-dialog.scss';
import {
  UiForm,
  UiFormControl,
  UiFormField,
  UiFormItem,
  UiFormLabel,
  UiFormMessage,
} from '@/shared/ui/form/form.tsx';
import { useCreateSurveyForm } from '@/components/create-survey-form-dialog/model/use-create-survey-form.ts';
import { UiInput } from '@/shared/ui/input/input.tsx';
import { UiTextarea } from '@/shared/ui/textarea/textarea.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { CirclePlusIcon } from 'lucide-react';
import { useCallback, useState } from 'react';

export function CreateSurveyFormDialog() {
  const [isDialogOpened, setIsDialogOpened] = useState(false);

  const onDialogClose = useCallback(() => {
    setIsDialogOpened(false);
  }, [setIsDialogOpened]);

  return (
    <UiDialog open={isDialogOpened} onOpenChange={setIsDialogOpened}>
      <UiButton onClick={() => setIsDialogOpened(true)}>
        <CirclePlusIcon /> Create new survey
      </UiButton>
      <UiDialogContent className='survey-form-dialog'>
        <UiDialogTitle>Create new survey</UiDialogTitle>
        <UiDialogDescription>
          Enter the basic information for your survey. You can add questions in
          the next step.
        </UiDialogDescription>
        <CreateSurveyForm onClose={onDialogClose} />
      </UiDialogContent>
    </UiDialog>
  );
}

function CreateSurveyForm({ onClose }: { onClose: () => void }) {
  const { form, onSubmit } = useCreateSurveyForm();

  return (
    <UiForm {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='survey-form'>
        <UiFormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <UiFormControl>
              <UiFormItem className='survey-form-item'>
                <UiFormLabel>Survey title</UiFormLabel>
                <div>
                  <UiInput
                    placeholder='e.g., Customer Satisfaction Survey'
                    error={!!form.formState.errors.title}
                    {...field}
                  />
                  {form.formState.errors.title && (
                    <UiFormMessage>
                      {form.formState.errors.title.message}
                    </UiFormMessage>
                  )}
                </div>
              </UiFormItem>
            </UiFormControl>
          )}
        />
        <UiFormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <UiFormControl>
              <UiFormItem className='survey-form-item'>
                <UiFormLabel>Description</UiFormLabel>
                <div>
                  <UiTextarea
                    placeholder='Briefly describe the purpose of your survey'
                    error={!!form.formState.errors.description}
                    {...field}
                  />
                  {form.formState.errors.description && (
                    <UiFormMessage>
                      {form.formState.errors.description.message}
                    </UiFormMessage>
                  )}
                </div>
              </UiFormItem>
            </UiFormControl>
          )}
        />
        <div className='btn-row'>
          <UiButton type='button' design='outline' onClick={onClose}>
            Cancel
          </UiButton>
          <UiButton type='submit'>Continue</UiButton>
        </div>
      </form>
    </UiForm>
  );
}
