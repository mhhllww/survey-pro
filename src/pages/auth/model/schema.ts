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
    .min(1, { message: 'This field is required' })
    .refine(
      (value) => {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

        return regex.test(value);
      },
      {
        message:
          'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.',
      }
    ),
});

export type RegisterFields = z.infer<typeof RegisterSchema>;

export const LoginSchema = BaseAuthSchema.extend({
  password: z.string().min(1, { message: 'This field is required' }),
});

export type LoginFields = z.infer<typeof LoginSchema>;
