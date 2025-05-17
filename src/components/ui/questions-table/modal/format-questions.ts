import { fullSurveyData } from '@/pages/analytics/full-survey-data.ts';

export const formatQuestions = (surveyName: string) => {
  const survey = fullSurveyData[surveyName];
  if (!survey) return null;

  const totals: {
    [question: string]: {
      description: string;
      answers: { [answer: string]: number };
    };
  } = {};

  Object.values(survey).forEach((monthlyData) => {
    Object.entries(monthlyData).forEach(
      ([question, { description, answers }]) => {
        if (!totals[question]) totals[question] = { description, answers: {} };
        Object.entries(answers).forEach(([answer, count]) => {
          totals[question].answers[answer] =
            (totals[question].answers[answer] || 0) + count;
        });
      }
    );
  });

  return Object.entries(totals).map(([question, { description, answers }]) => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const items = Object.entries(answers).map(([answer, count]) => ({
      answer,
      count,
      pct: total > 0 ? Math.round((count / total) * 100) : 0,
    }));

    return { question, description, items };
  });
};
