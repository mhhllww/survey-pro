export type FullSurveyData = {
  [surveyName: string]: {
    [month: string]: {
      [question: string]: {
        [answer: string]: number;
      };
    };
  };
};

export const fullSurveyData: FullSurveyData = {
  'Graph with first survey': {
    Jan: {
      question1: { a: 20, b: 25, c: 15, d: 254 },
      question2: { a: 30, b: 20, c: 10 },
    },
    Feb: {
      question1: { a: 40, b: 35, c: 10 },
      question2: { a: 25, b: 20, c: 5 },
    },
    Mar: {
      question1: { a: 30, b: 50, c: 10 },
      question2: { a: 40, b: 20, c: 10 },
    },
    Apr: {
      question1: { a: 20, b: 10, c: 5 },
      question2: { a: 30, b: 15, c: 10 },
    },
    May: {
      question1: { a: 25, b: 30, c: 15 },
      question2: { a: 20, b: 10, c: 5 },
    },
    Jun: {
      question1: { a: 35, b: 20, c: 10 },
      question2: { a: 30, b: 25, c: 15 },
    },
    Jul: {
      question1: { a: 25, b: 20, c: 15 },
      question2: { a: 15, b: 10, c: 10 },
    },
    Aug: {
      question1: { a: 30, b: 30, c: 10 },
      question2: { a: 25, b: 25, c: 10 },
    },
    Sep: {
      question1: { a: 10, b: 5, c: 5 },
      question2: { a: 10, b: 5, c: 5 },
    },
    Oct: {
      question1: { a: 25, b: 15, c: 10 },
      question2: { a: 20, b: 20, c: 10 },
    },
    Nov: {
      question1: { a: 20, b: 25, c: 5 },
      question2: { a: 25, b: 15, c: 10 },
    },
    Dec: {
      question1: { a: 40, b: 30, c: 10 },
      question2: { a: 50, b: 20, c: 10 },
    },
  },

  'Graph with the second survey': {
    Jan: {
      question1: { a: 30, b: 20, c: 10 },
      question2: { a: 25, b: 25, c: 10 },
    },
    Feb: {
      question1: { a: 40, b: 30, c: 10 },
      question2: { a: 30, b: 20, c: 10 },
    },
    Mar: {
      question1: { a: 50, b: 20, c: 10 },
      question2: { a: 30, b: 10, c: 5 },
    },
    Apr: {
      question1: { a: 20, b: 25, c: 10 },
      question2: { a: 25, b: 20, c: 5 },
    },
    May: {
      question1: { a: 30, b: 25, c: 10 },
      question2: { a: 20, b: 15, c: 5 },
    },
    Jun: {
      question1: { a: 35, b: 20, c: 10 },
      question2: { a: 30, b: 25, c: 10 },
    },
    Jul: {
      question1: { a: 30, b: 25, c: 5 },
      question2: { a: 25, b: 20, c: 10 },
    },
    Aug: {
      question1: { a: 40, b: 30, c: 10 },
      question2: { a: 35, b: 25, c: 10 },
    },
    Sep: {
      question1: { a: 10, b: 10, c: 5 },
      question2: { a: 5, b: 5, c: 5 },
    },
    Oct: {
      question1: { a: 25, b: 20, c: 5 },
      question2: { a: 20, b: 20, c: 5 },
    },
    Nov: {
      question1: { a: 25, b: 15, c: 10 },
      question2: { a: 20, b: 25, c: 10 },
    },
    Dec: {
      question1: { a: 50, b: 30, c: 20 },
      question2: { a: 40, b: 20, c: 10 },
    },
  },
};
