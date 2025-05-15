import { AnswerResponse, AnswerSchema } from '@/api/answer/answer-schema.ts';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/firebase.ts';
import { SurveyResponse } from '@/api/survey/survey-schema.ts';

export interface CreateAnswerDto extends AnswerResponse {
  surveyId: string;
  questionId: number;
}

// FIXME: Придумать, что сделать с ID у ответа и вопросов
async function createAnswer(dto: CreateAnswerDto) {
  const { surveyId, questionId, ...answerData } = dto;

  const surveyRef = doc(db, 'surveys', surveyId);
  const snap = await getDoc(surveyRef);

  const survey = snap.data() as SurveyResponse | undefined;
  if (!survey) return undefined;

  const updatedQuestions = [...survey.questions];
  const question = updatedQuestions[questionId];

  switch (question.type) {
    case 'text':
      if (question.answers.length > 0) return;
      break;
    case 'paragraph':
      if (question.answers.length > 0) return;
      break;
    case 'radio':
      if (question.answers.length > 7) return;
      break;
    case 'checkbox':
      if (question.answers.length > 7) return;
      break;
  }

  updatedQuestions[questionId] = {
    ...question,
    answers: [...(question.answers || []), answerData],
  };

  await updateDoc(surveyRef, {
    questions: updatedQuestions,
  });

  const updateSnap = await getDoc(surveyRef);

  const updatedSurvey = updateSnap.data() as SurveyResponse;
  if (!updatedSurvey) return undefined;

  const newAnswer = updatedSurvey.questions[questionId].answers.slice(-1)[0];

  return await AnswerSchema.parseAsync(newAnswer);
}

export { createAnswer };
