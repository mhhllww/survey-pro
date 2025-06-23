export type FullSurveyData = {
  [surveyName: string]: {
    [month: string]: {
      [question: string]: {
        description: string;
        answers: {
          [answer: string]: number;
        };
        type: string;
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
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 20, c: 10 },
        type: 'checkbox',
      },
      Question3: {
        description: 'Sample question description',
        answers: { yes: 30, no: 20 },
        type: 'radio',
      },
      Question4: {
        description: 'Sample question description',
        answers: {},
        type: 'textArea',
      },
      Question5: {
        description: 'Sample question description',
        answers: { '': 24 },
        type: 'text',
      },
    },
    Feb: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 40, b: 35, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 5 },
        type: 'checkbox',
      },
    },
    Mar: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 50, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 40, b: 20, c: 10 },
        type: 'checkbox',
      },
    },
    Apr: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 20, b: 10, c: 5 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 15, c: 10 },
        type: 'checkbox',
      },
    },
    May: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 30, c: 15 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 10, c: 5 },
        type: 'checkbox',
      },
    },
    Jun: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 35, b: 20, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 25, c: 15 },
        type: 'checkbox',
      },
    },
    Jul: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 15 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 15, b: 10, c: 10 },
        type: 'checkbox',
      },
    },
    Aug: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 30, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 25, c: 10 },
        type: 'checkbox',
      },
    },
    Sep: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 10, b: 5, c: 5 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 10, b: 5, c: 5 },
        type: 'checkbox',
      },
    },
    Oct: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 15, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 20, c: 10 },
        type: 'checkbox',
      },
    },
    Nov: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 20, b: 25, c: 5 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 15, c: 10 },
        type: 'checkbox',
      },
    },
    Dec: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 40, b: 30, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 50, b: 20, c: 10 },
        type: 'checkbox',
      },
    },
  },

  'Graph with the second survey': {
    Jan: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 20, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 25, c: 10 },
        type: 'checkbox',
      },
    },
    Feb: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 40, b: 30, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 20, c: 10 },
        type: 'checkbox',
      },
    },
    Mar: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 50, b: 20, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 10, c: 5 },
        type: 'checkbox',
      },
    },
    Apr: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 20, b: 25, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 5 },
        type: 'checkbox',
      },
    },
    May: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 25, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 15, c: 5 },
        type: 'checkbox',
      },
    },
    Jun: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 35, b: 20, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 30, b: 25, c: 10 },
        type: 'checkbox',
      },
    },
    Jul: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 30, b: 25, c: 5 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 10 },
        type: 'checkbox',
      },
    },
    Aug: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 40, b: 30, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 35, b: 25, c: 10 },
        type: 'checkbox',
      },
    },
    Sep: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 10, b: 10, c: 5 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 5, b: 5, c: 5 },
        type: 'checkbox',
      },
    },
    Oct: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 20, c: 5 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 20, c: 5 },
        type: 'checkbox',
      },
    },
    Nov: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 25, b: 15, c: 10 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 20, b: 25, c: 10 },
        type: 'checkbox',
      },
    },
    Dec: {
      Question1: {
        description: 'Sample question description',
        answers: { a: 50, b: 30, c: 20 },
        type: 'radio',
      },
      Question2: {
        description: 'Sample question description',
        answers: { a: 40, b: 20, c: 10 },
        type: 'checkbox',
      },
    },
  },
};
