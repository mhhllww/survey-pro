import { AnswerResponse, AnswerSchema } from '@/api/answer/answer-schema.ts';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/shared/lib/firebase/firebase.ts';
import { SurveyResponse } from '@/api/survey/survey-schema.ts';
import { QuestionsSchema } from '@/api/question/question-schema.ts';

export type CreateAnswerDto = AnswerResponse & {
  surveyId: string;
  questionId: string;
};

export type DeleteAnswerDto = {
  surveyId: string;
  questionId: string;
  answerId: string;
};

export type ChangeAnswerDto = {
  surveyId: string;
  questionId: string;
  answerId: string;
  title: string;
};

async function createAnswer(dto: CreateAnswerDto) {
  const { surveyId, questionId, ...answerData } = dto;

  const surveyRef = doc(db, 'surveys', surveyId);
  const snap = await getDoc(surveyRef);

  const survey = snap.data() as SurveyResponse | undefined;
  if (!survey) throw new Error('Survey not found!');

  const updatedQuestions = [...survey.questions];
  const questionIndex = updatedQuestions.findIndex((q) => q.id === questionId);
  const question = updatedQuestions[questionIndex];

  updatedQuestions[questionIndex] = {
    ...question,
    answers: [...(question.answers || []), answerData],
  };

  await updateDoc(surveyRef, {
    questions: updatedQuestions,
  });

  const updateSnap = await getDoc(surveyRef);
  const updatedSurvey = updateSnap.data() as SurveyResponse;
  if (!updatedSurvey) throw new Error('Survey is not updated');

  const updatedQuestion = updatedSurvey.questions.find(
    (q) => q.id === questionId
  );
  if (!updatedQuestion) throw new Error('Question is not found');

  const newAnswer = updatedQuestion.answers.slice(-1)[0];

  return await AnswerSchema.parseAsync(newAnswer);
}

async function deleteAnswer(dto: DeleteAnswerDto) {
  const { surveyId, questionId, answerId } = dto;

  const surveyRef = doc(db, 'surveys', surveyId);
  const snap = await getDoc(surveyRef);

  const survey = snap.data() as SurveyResponse | undefined;
  if (!survey) throw new Error('Survey not found!');

  const updatedQuestions = [...survey.questions];
  const questionIndex = updatedQuestions.findIndex((q) => q.id === questionId);
  const question = updatedQuestions[questionIndex];
  const updatedAnswers = question.answers.filter(
    (answer) => answer.id !== answerId
  );

  updatedQuestions[questionIndex] = {
    ...question,
    answers: updatedAnswers,
  };

  await updateDoc(surveyRef, {
    questions: updatedQuestions,
  });

  const updateSnap = await getDoc(surveyRef);
  const updatedSurvey = updateSnap.data() as SurveyResponse;

  if (!updatedSurvey) throw new Error('Survey is not updated');

  return await QuestionsSchema.parseAsync(updatedSurvey.questions);
}

async function changeAnswer(dto: ChangeAnswerDto) {
  const { surveyId, questionId, ...answerData } = dto;

  const surveyRef = doc(db, 'surveys', surveyId);
  const snap = await getDoc(surveyRef);

  const survey = snap.data() as SurveyResponse | undefined;
  if (!survey) throw new Error('Survey not found!');

  const questions = survey.questions;
  const question = questions.find((question) => question.id === questionId);
  if (!question) throw new Error('Question is not found!');

  const answer = question.answers.find(
    (answer) => answer.id === answerData.answerId
  );
  if (!answer) throw new Error('Answer is not found!');

  if (!answerData.title.trim()) throw new Error('Title is empty');

  answer.title = answerData.title;

  updateDoc(surveyRef, {
    questions: questions,
  });

  const updatedSnap = await getDoc(surveyRef);
  const updatedSurvey = updatedSnap.data() as SurveyResponse;

  if (!updatedSurvey) throw new Error('Survey is not updated');

  const updatedQuestion = updatedSurvey.questions.find(
    (q) => q.id === questionId
  );
  if (!updatedQuestion) throw new Error('Question is not found');

  const changedAnswer = updatedQuestion.answers.find(
    (a) => a.id === answerData.answerId
  );

  return await AnswerSchema.parseAsync(changedAnswer);
}

export { createAnswer, deleteAnswer, changeAnswer };
