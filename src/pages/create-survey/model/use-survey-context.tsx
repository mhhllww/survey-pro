import { createContext, ReactNode } from 'react';

export const SurveyContext = createContext<{
  surveyId: string;
}>({ surveyId: '' });

export const SurveyContextProvider = ({
  surveyId,
  children,
}: {
  surveyId: string;
  children: ReactNode;
}) => {
  return (
    <SurveyContext.Provider value={{ surveyId }}>
      {children}
    </SurveyContext.Provider>
  );
};
