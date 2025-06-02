import { z } from 'zod';

export const AnswerSchema = z.object({
  id: z.string(),
  title: z.string(),
  respondents: z.array(z.string()),
});

export type AnswerResponse = z.infer<typeof AnswerSchema>;
