import './questions-table.scss';
import { fullSurveyData } from '@/pages/analytics/full-survey-data.ts';

type Props = {
  surveyName: string;
};

export const QuestionTable = ({ surveyName }: Props) => {
  const survey = fullSurveyData[surveyName];
  if (!survey)
    return (
      <span className={'question-table-warning'}>No survey data available</span>
    );

  const totals: { [question: string]: { [answer: string]: number } } = {};

  Object.values(survey).forEach((monthlyData) => {
    Object.entries(monthlyData).forEach(([question, answers]) => {
      if (!totals[question]) totals[question] = {};
      Object.entries(answers).forEach(([answer, count]) => {
        totals[question][answer] = (totals[question][answer] || 0) + count;
      });
    });
  });

  const questionsList = Object.entries(totals).map(([question, answers]) => {
    const total = Object.values(answers).reduce((sum, val) => sum + val, 0);
    const items = Object.entries(answers).map(([answer, count]) => ({
      answer,
      count,
      pct: total > 0 ? Math.round((count / total) * 100) : 0,
    }));
    return { question, items };
  });

  return (
    <div className={'question-table'}>
      <header className={'question-table__header'}>
        <span className={'question-table__title'}>Question Analysis</span>
        <span className={'question-table__subtitle'}>
          Detailed breakdown of responses by question
        </span>
      </header>
      <div className={'question-table__content'}>
        {questionsList.map(({ question, items }) => (
          <div key={question} className={'question-table__question'}>
            <h4>{question}</h4>
            <div className={'question-table__answers-container'}>
              {items.map(({ answer, pct }) => (
                <div key={answer} className={'question-table__answer'}>
                  <div className={'question-table__answer-label'}>
                    <span className={'question-table__answer-text'}>
                      {answer}
                    </span>
                    <span className={'question-table__answer-percent'}>
                      {pct}%
                    </span>
                  </div>
                  <div className={'question-table__bar-container'}>
                    <div
                      className={'question-table__bar-fill'}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
