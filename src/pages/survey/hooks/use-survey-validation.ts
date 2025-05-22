import { useState } from 'react';

export type QuestionType = 'radio' | 'checkbox' | 'text' | 'textArea';

export const useSurveyValidation = () => {
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const handleInputChange = (
    questionKey: string,
    value: string | boolean,
    checked: boolean | null,
    type: QuestionType
  ) => {
    if (type === 'radio') {
      setAnswers((prev) => ({ ...prev, [questionKey]: value as string }));
    } else if (type === 'checkbox') {
      setAnswers((prev) => {
        const prevArr = Array.isArray(prev[questionKey])
          ? (prev[questionKey] as string[])
          : [];
        if (checked) {
          return { ...prev, [questionKey]: [...prevArr, value as string] };
        } else {
          return { ...prev, [questionKey]: prevArr.filter((a) => a !== value) };
        }
      });
    } else if (type === 'text' || type === 'textArea') {
      setAnswers((prev) => ({ ...prev, [questionKey]: value as string }));
    }
  };

  const validateAnswer = (questionKey: string, type: QuestionType) => {
    if (type === 'radio') {
      return !!answers[questionKey];
    }
    if (type === 'checkbox') {
      const arr = answers[questionKey];
      return Array.isArray(arr) && arr.length > 0;
    }

    return true;
  };

  return {
    answers,
    handleInputChange,
    validateAnswer,
  };
};
