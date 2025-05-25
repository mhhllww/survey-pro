import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/firebase.ts';
import {
  QuestionResponse,
  QuestionSchema,
} from '@/api/question/question-schema.ts';
import { SurveyResponse } from '@/api/survey/survey-schema.ts';

export type CreateQuestionDto = Omit<QuestionResponse, 'answers'> & {
  surveyId: string;
};

export type DeleteQuestionDto = {
  surveyId: string;
  questionId: string;
};

export type ChangeQuestionDto = {
  surveyId: string;
  questionId: string;
  title: string;
  description: string;
};

async function createQuestion(dto: CreateQuestionDto) {
  const { surveyId, ...questionData } = dto;

  const surveyRef = doc(db, 'surveys', surveyId);
  const snap = await getDoc(surveyRef);

  const survey = snap.data() as SurveyResponse | undefined;
  if (!survey) return undefined;

  const questions = survey.questions;
  questions.push({ ...questionData, answers: [] });

  await updateDoc(surveyRef, { questions });

  const updatedSnap = await getDoc(surveyRef);
  const updatedSurvey = updatedSnap.data() as SurveyResponse;

  if (!updatedSurvey) return undefined;

  const newQuestion = updatedSurvey.questions.slice(-1)[0];

  return await QuestionSchema.parseAsync(newQuestion);
}

async function deleteQuestion(dto: DeleteQuestionDto) {
  const { surveyId, questionId } = dto;

  const surveyRef = doc(db, 'surveys', surveyId);
  const snap = await getDoc(surveyRef);

  const survey = snap.data() as SurveyResponse | undefined;
  if (!survey) return undefined;

  const updatedQuestions = survey.questions.filter(
    (question) => question.id !== questionId
  );

  await updateDoc(surveyRef, { questions: updatedQuestions });

  const updatedSnap = await getDoc(surveyRef);
  const updatedSurvey = updatedSnap.data() as SurveyResponse;

  if (!updatedSurvey) return undefined;

  return updatedSurvey.questions;
}

async function changeQuestion(dto: ChangeQuestionDto) {
  const { surveyId, ...questionData } = dto;

  const surveyRef = doc(db, 'surveys', surveyId);
  const snap = await getDoc(surveyRef);

  const survey = snap.data() as SurveyResponse | undefined;
  if (!survey) return undefined;

  const questions = survey.questions;
  const question = questions.find(
    (question) => question.id === questionData.questionId
  );

  if (!question) return undefined;

  question.title = questionData.title;
  question.description = questionData.description;

  await updateDoc(surveyRef, { questions: questions });

  const updatedSnap = await getDoc(surveyRef);
  const updatedSurvey = updatedSnap.data() as SurveyResponse;

  if (!updatedSurvey) return undefined;

  return updatedSurvey;
}

export { createQuestion, deleteQuestion, changeQuestion };
