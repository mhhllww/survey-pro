import { z } from 'zod';
import { AnswerSchema } from '@/api/answer/answer-schema.ts';

export const QuestionTypeSchema = z.enum([
  'checkbox',
  'radio',
  'text',
  'paragraph',
]);

export type QuestionType = z.infer<typeof QuestionTypeSchema>;

export const QuestionSchema = z.object({
  title: z.string(),
  description: z.string(),
  answers: z.array(AnswerSchema),
  type: QuestionTypeSchema,
});

export type QuestionResponse = z.infer<typeof QuestionSchema>;
