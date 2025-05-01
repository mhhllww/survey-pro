import { z } from 'zod';
import { LoginFormProps } from '@/pages/auth/ui/form/login-form.tsx';

export const getFormSchema = ({ action }: LoginFormProps) => {
  return z.object({
    email: z
      .string()
      .min(1, { message: 'This field is required' })
      .email({ message: 'Please enter a valid email address.' }),

    password:
      action === 'register'
        ? z
            .string()
            .min(1, { message: 'This field is required' })
            .min(6, {
              message: 'The password must be at least 6 characters long.',
            })
            .refine(
              (value) => {
                const latinChars = 'A-Za-z';
                const numbers = '0-9';
                const specialChars =
                  '!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?';
                const regexPattern = new RegExp(
                  `^[${latinChars}${numbers}${specialChars}]*$`
                );
                return regexPattern.test(value);
              },
              {
                message: 'The password must be in Latin keyboard layout.',
              }
            )
        : z.string().min(1, { message: 'This field is required' }),
  });
};
