import { z } from 'zod';

export const BaseSurveySchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
});