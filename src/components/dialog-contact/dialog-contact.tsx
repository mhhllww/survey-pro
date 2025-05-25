import {
  UiDialog,
  UiDialogContent,
  UiDialogDescription,
  UiDialogTitle,
} from '@/shared/ui/dialog/dialog.tsx';
import './styles/dialog-contact.scss';
import {
  UiForm,
  UiFormControl,
  UiFormField,
  UiFormItem,
  UiFormLabel,
  UiFormMessage,
} from '@/shared/ui/form/form.tsx';
import { useContactDialog } from '@/components/dialog-contact/model/use-dialog-contact.ts';
import { UiInput } from '@/shared/ui/input/input.tsx';
import { UiTextarea } from '@/shared/ui/textarea/textarea.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';

export const ContactDialog = () => {
  const { dialogClose, dialogOpened, form, onSubmit } = useContactDialog();

  return (
    <UiDialog
      open={dialogOpened}
      onOpenChange={() => {
        if (dialogOpened) dialogClose();
      }}>
      <UiDialogContent className='contact-dialog__content'>
        <UiDialogTitle>Contact Sales</UiDialogTitle>
        <UiDialogDescription>
          Fill out the form bellow to send an email to our sales team
        </UiDialogDescription>
        <UiForm {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='contact-dialog__form'>
            <UiFormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <UiFormControl>
                  <UiFormItem className='contact-dialog__form-item'>
                    <UiFormLabel>Your Email</UiFormLabel>
                    <UiInput placeholder='your.email@example.com' {...field} />
                    {form.formState.errors.email && (
                      <UiFormMessage>
                        {form.formState.errors.email.message}
                      </UiFormMessage>
                    )}
                  </UiFormItem>
                </UiFormControl>
              )}
            />
            <UiFormField
              control={form.control}
              name='subject'
              render={({ field }) => (
                <UiFormControl>
                  <UiFormItem className='contact-dialog__form-item'>
                    <UiFormLabel>Subject</UiFormLabel>
                    <UiInput placeholder='SurveyPro Sales Inquiry' {...field} />
                    {form.formState.errors.subject && (
                      <UiFormMessage>
                        {form.formState.errors.subject.message}
                      </UiFormMessage>
                    )}
                  </UiFormItem>
                </UiFormControl>
              )}
            />
            <UiFormField
              control={form.control}
              name='message'
              render={({ field }) => (
                <UiFormControl>
                  <UiFormItem className='contact-dialog__form-item'>
                    <UiFormLabel>Message</UiFormLabel>
                    <UiTextarea
                      placeholder='Tell us about your needs...'
                      {...field}
                    />
                    {form.formState.errors.message && (
                      <UiFormMessage>
                        {form.formState.errors.message.message}
                      </UiFormMessage>
                    )}
                  </UiFormItem>
                </UiFormControl>
              )}
            />
            <div className='contact-dialog__form-actions'>
              <UiButton
                type='button'
                design='outline'
                size='lg'
                onClick={dialogClose}>
                Cancel
              </UiButton>
              <UiButton type='submit' size='lg'>
                Send Email
              </UiButton>
            </div>
          </form>
        </UiForm>
      </UiDialogContent>
    </UiDialog>
  );
};
