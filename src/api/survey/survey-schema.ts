import { z } from 'zod';
import { QuestionSchema } from '@/api/question/question-schema.ts';

export const SurveyStatusSchema = z.enum(['finished', 'in_progress']);

export type SurveyStatus = z.infer<typeof SurveyStatusSchema>;

export const SurveySchema = z.object({
  id: z.string(),
  userId: z.string(),
  title: z.string(),
  description: z.string(),
  status: SurveyStatusSchema,
  questions: z.array(QuestionSchema),
  respondents: z.array(z.string()),
});

export type SurveyResponse = z.infer<typeof SurveySchema>;
