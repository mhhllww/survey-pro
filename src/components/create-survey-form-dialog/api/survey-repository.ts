import { z } from 'zod';

export const CreateSurveySchema = z.object({
  title: z.string().min(1, { message: 'Title is required!' }),
  description: z.string().min(1, { message: 'Description is required!' }),
});

export type CreateSurveyDto = z.infer<typeof CreateSurveySchema>;

async function createSurvey(dto: CreateSurveyDto) {
  // TODO: create form request
  console.log(dto);
}

export { createSurvey };
