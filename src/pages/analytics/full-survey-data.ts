export type FullSurveyData = {
  [surveyName: string]: {
    [month: string]: {
      [question: string]: {
        description: string;
        answers: {
          [answer: string]: number;
        };
      };
    };
  };
};

export const fullSurveyData: FullSurveyData = {
  'Graph with first survey': {
    Jan: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 20, b: 25, c: 15, d: 254 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 20, c: 10 },
      },
    },
    Feb: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 40, b: 35, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 5 },
      },
    },
    Mar: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 50, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 40, b: 20, c: 10 },
      },
    },
    Apr: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 20, b: 10, c: 5 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 15, c: 10 },
      },
    },
    May: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 30, c: 15 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 10, c: 5 },
      },
    },
    Jun: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 35, b: 20, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 25, c: 15 },
      },
    },
    Jul: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 15 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 15, b: 10, c: 10 },
      },
    },
    Aug: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 30, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 25, c: 10 },
      },
    },
    Sep: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 10, b: 5, c: 5 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 10, b: 5, c: 5 },
      },
    },
    Oct: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 15, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 20, c: 10 },
      },
    },
    Nov: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 20, b: 25, c: 5 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 15, c: 10 },
      },
    },
    Dec: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 40, b: 30, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 50, b: 20, c: 10 },
      },
    },
  },

  'Graph with the second survey': {
    Jan: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 20, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 25, c: 10 },
      },
    },
    Feb: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 40, b: 30, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 20, c: 10 },
      },
    },
    Mar: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 50, b: 20, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 10, c: 5 },
      },
    },
    Apr: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 20, b: 25, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 5 },
      },
    },
    May: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 25, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 15, c: 5 },
      },
    },
    Jun: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 35, b: 20, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 25, c: 10 },
      },
    },
    Jul: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 25, c: 5 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 10 },
      },
    },
    Aug: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 40, b: 30, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 35, b: 25, c: 10 },
      },
    },
    Sep: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 10, b: 10, c: 5 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 5, b: 5, c: 5 },
      },
    },
    Oct: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 5 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 20, c: 5 },
      },
    },
    Nov: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 15, c: 10 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 25, c: 10 },
      },
    },
    Dec: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 50, b: 30, c: 20 },
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 40, b: 20, c: 10 },
      },
    },
  },
};
