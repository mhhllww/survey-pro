import { z } from 'zod';

const BaseAuthSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'This field is required' })
    .email({ message: 'Please enter a valid email address.' }),
});

export const RegisterSchema = BaseAuthSchema.extend({
  password: z
    .string()
    .min(1, { message: 'This field is required.' })
    .min(8, { message: 'Password must be at least 8 characters.' })
    .refine(
      (value) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

        return regex.test(value);
      },
      {
        message:
          'The password is not strong enough. Try a combination of letters, numbers, and symbols.',
      }
    ),
});

export const LoginSchema = BaseAuthSchema.extend({
  password: z.string().min(1, { message: 'This field is required' }),
});
