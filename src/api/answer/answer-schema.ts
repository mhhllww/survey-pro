import { z } from 'zod';

export const AnswerSchema = z.object({
  title: z.string(),
  respondents: z.array(z.string()),
});

export type AnswerResponse = z.infer<typeof AnswerSchema>;
