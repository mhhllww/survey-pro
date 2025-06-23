import { z } from 'zod';

import { addDoc, collection, getDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/firebase.ts';
import { SurveySchema } from '@/api/survey/survey-schema.ts';

export const CreateSurveySchema = z.object({
  title: z.string().min(1, { message: 'Title is required!' }),
  description: z.string().min(1, { message: 'Description is required!' }),
});

export type CreateSurveyDto = z.infer<typeof CreateSurveySchema>;

async function createSurvey(dto: CreateSurveyDto, userId: string) {
  const surveyData = {
    ...dto,
    userId,
    status: 'in_progress',
    questions: [],
    respondents: [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  const res = await addDoc(collection(db, 'surveys'), surveyData);

  const doc = await getDoc(res);

  return SurveySchema.parseAsync({
    id: res.id,
    ...doc.data(),
  });
}

export { createSurvey };
