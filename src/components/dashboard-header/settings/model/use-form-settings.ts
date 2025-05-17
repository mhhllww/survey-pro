import { z } from 'zod';
import { useForm, UseFormReturn } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { resetPassword } from '@/shared/api/auth/firebase-auth.ts';

const SettingsFormSchema = z
  .object({
    currentPassword: z.string().min(1, { message: 'Password is required' }),
    newPassword: z
      .string()
      .min(1, { message: 'Password must be at least 1 symbol' }),
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
    (data: SettingsFormDto) => {
      console.log('data: ', data);

      resetPassword(data.currentPassword, data.newPassword);
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
