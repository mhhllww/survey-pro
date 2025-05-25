import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/firebase.ts';
import { SurveyResponse } from '@/api/survey/survey-schema.ts';

export type ChangeSurveyDto = {
  surveyId: string;
  title: string;
  description: string;
};

async function changeSurvey(dto: ChangeSurveyDto) {
  const { surveyId, ...surveyData } = dto;

  const surveyRef = doc(db, 'surveys', surveyId);
  const snap = await getDoc(surveyRef);

  const survey = snap.data() as SurveyResponse | undefined;
  if (!survey) return undefined;

  await updateDoc(surveyRef, {
    title: surveyData.title,
    description: surveyData.description,
  });

  const updatedSnap = await getDoc(surveyRef);
  const updatedSurvey = updatedSnap.data() as SurveyResponse;

  if (!updatedSurvey) return undefined;

  return updatedSurvey;
}

export { changeSurvey };
