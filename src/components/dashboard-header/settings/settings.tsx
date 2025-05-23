import {
  UiSheet,
  UiSheetContent,
  UiSheetDescription,
  UiSheetHeader,
  UiSheetTitle,
  UiSheetTrigger,
} from '@/shared/ui/sheet/sheet.tsx';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { LockIcon, LogOutIcon, SettingsIcon } from 'lucide-react';
import { UiInput } from '@/shared/ui/input/input.tsx';
import '../settings/settings.scss';
import { signOutUser } from '@/shared/api/auth/firebase-auth.ts';
import {
  UiForm,
  UiFormControl,
  UiFormField,
  UiFormItem,
  UiFormLabel,
  UiFormMessage,
} from '@/shared/ui/form/form.tsx';
import { useSettingsForm } from '@/components/dashboard-header/settings/model/use-form-settings.ts';
import { useState } from 'react';
import { HidePasswordIcon, ShowPasswordIcon } from '@/assets/icons/icons.tsx';

export const Settings = () => {
  const { form, onSubmit } = useSettingsForm();
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <UiSheet>
      <UiSheetTrigger asChild>
        <UiButton design='outline'>
          <SettingsIcon /> Settings
        </UiButton>
      </UiSheetTrigger>
      <UiSheetContent>
        <UiSheetHeader>
          <UiSheetTitle>Account Settings</UiSheetTitle>
          <UiSheetDescription>Manage your account security.</UiSheetDescription>
        </UiSheetHeader>
        <div className='sheet-subtitle'>
          <LockIcon className='sheet-icon' />
          Change Password
        </div>
        <UiForm {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='sheet-form'>
            <UiFormField
              control={form.control}
              name='currentPassword'
              render={({ field }) => (
                <UiFormControl>
                  <UiFormItem>
                    <UiFormLabel>Current Password</UiFormLabel>
                    <UiInput
                      {...field}
                      type={showCurrentPassword ? 'text' : 'password'}
                    />
                    <button
                      type='button'
                      className='sheet-form__password-toggle-button__currentPassword'
                      onClick={() =>
                        setShowCurrentPassword(!showCurrentPassword)
                      }>
                      {showCurrentPassword ? (
                        <ShowPasswordIcon />
                      ) : (
                        <HidePasswordIcon />
                      )}
                    </button>
                    {form.formState.errors.currentPassword && (
                      <UiFormMessage>
                        {form.formState.errors.currentPassword.message}
                      </UiFormMessage>
                    )}
                  </UiFormItem>
                </UiFormControl>
              )}
            />

            <UiFormField
              control={form.control}
              name='newPassword'
              render={({ field }) => (
                <UiFormControl>
                  <UiFormItem>
                    <UiFormLabel>New Password</UiFormLabel>
                    <UiInput
                      {...field}
                      type={showNewPassword ? 'text' : 'password'}
                    />
                    <button
                      type='button'
                      className='sheet-form__password-toggle-button__newPassword'
                      onClick={() => setShowNewPassword(!showNewPassword)}>
                      {showNewPassword ? (
                        <ShowPasswordIcon />
                      ) : (
                        <HidePasswordIcon />
                      )}
                    </button>
                    {form.formState.errors.newPassword && (
                      <UiFormMessage>
                        {form.formState.errors.newPassword.message}
                      </UiFormMessage>
                    )}
                  </UiFormItem>
                </UiFormControl>
              )}
            />

            <UiFormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <UiFormControl>
                  <UiFormItem>
                    <UiFormLabel>Confirm Password</UiFormLabel>
                    <UiInput
                      {...field}
                      type={showConfirmPassword ? 'text' : 'password'}
                    />
                    <button
                      type='button'
                      className='sheet-form__password-toggle-button__confirmPassword'
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }>
                      {showConfirmPassword ? (
                        <ShowPasswordIcon />
                      ) : (
                        <HidePasswordIcon />
                      )}
                    </button>
                    {form.formState.errors.confirmPassword && (
                      <UiFormMessage>
                        {form.formState.errors.confirmPassword.message}
                      </UiFormMessage>
                    )}
                  </UiFormItem>
                </UiFormControl>
              )}
            />

            <div className='sheet-form-actions'>
              <UiButton size='lg' type='submit'>
                Update Password
              </UiButton>
              <UiButton design='outline' size='lg' onClick={signOutUser}>
                <LogOutIcon /> Sign Out
              </UiButton>
            </div>
          </form>
        </UiForm>
      </UiSheetContent>
    </UiSheet>
  );
};
