import './questions-table.scss';
import { formatQuestions } from '@/components/ui/questions-table/model/format-questions.ts';

export const QuestionTable = ({ surveyName }: { surveyName: string }) => {
  const questionsList = formatQuestions(surveyName);

  if (!questionsList)
    return (
      <span className={'question-table-warning'}>No survey data available</span>
    );

  return (
    <div className={'question-table'}>
      <header className={'question-table__header'}>
        <span className={'question-table__title'}>Question Analysis</span>
        <span className={'question-table__subtitle'}>
          Detailed breakdown of responses by question
        </span>
      </header>
      <div className={'question-table__content'}>
        {questionsList.map(({ question, description, items }, index) => (
          <div
            key={`${question}-${index}`}
            className={'question-table__question'}>
            <div className={'question-table__questions-container'}>
              <h3>{question}</h3>
              {description && (
                <span className={'question-table__description'}>
                  {description}
                </span>
              )}
            </div>

            <div className={'question-table__answers-container'}>
              {items.map(({ answer, pct }, index) => (
                <div
                  key={`${answer}-${index}`}
                  className={'question-table__answer'}>
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
