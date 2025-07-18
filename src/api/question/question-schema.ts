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
  id: z.string(),
  title: z.string(),
  description: z.string(),
  answers: z.array(AnswerSchema),
  type: QuestionTypeSchema,
});

export type QuestionResponse = z.infer<typeof QuestionSchema>;

export const QuestionsSchema = z.array(QuestionSchema);

export type QuestionsResponse = z.infer<typeof QuestionsSchema>;
