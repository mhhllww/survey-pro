import { z } from 'zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { resetPassword } from '@/shared/api/auth/firebase-auth.ts';
import { showToast } from '@/shared/ui/toast/toast.tsx';

const SettingsFormSchema = z
  .object({
    currentPassword: z.string().min(1, { message: 'Password is required' }),
    newPassword: z
      .string()
      .min(8, { message: 'Password must be at least 8 symbol' }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: 'Passwords are not equals',
    path: ['confirmPassword'],
  });

export type SettingsFormDto = z.infer<typeof SettingsFormSchema>;

type ReturnedType = {
  form: UseFormReturn<SettingsFormDto>;
  onSubmit: (data: SettingsFormDto) => void;
};

export function useSettingsForm(): ReturnedType {
  const form = useForm<SettingsFormDto>({
    resolver: zodResolver(SettingsFormSchema),
  });

  const onSubmit = useCallback(
    async (data: SettingsFormDto) => {
      const res = await resetPassword(data.currentPassword, data.newPassword);

      if (!res?.success) {
        showToast({
          type: 'warning',
          title: 'Wrong password',
          description: 'Please, try again!',
        });
        return;
      } else {
        showToast({
          type: 'success',
          title: 'Password was changed successfully',
          description: 'Remember new Password!',
        });
      }

      form.reset({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    },
    [resetPassword, form.reset]
  );

  return {
    form,
    onSubmit,
  };
}
