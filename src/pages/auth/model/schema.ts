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
    .min(8, { message: 'Password must be at least 8 characters.' }),
});

export const LoginSchema = BaseAuthSchema.extend({
  password: z.string().min(1, { message: 'This field is required' }),
});
