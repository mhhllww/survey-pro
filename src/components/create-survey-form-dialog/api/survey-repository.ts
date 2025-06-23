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
  const res = await addDoc(collection(db, 'surveys'), dto);

  const doc = await getDoc(res);

  return SurveySchema.parseAsync({
    id: res.id,
    userId,
    status: 'in_progress',
    questions: [],
    respondents: [],
    ...doc.data(),
  });
}

export { createSurvey };
