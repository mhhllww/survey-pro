import { QuestionResponse } from '@/api/question/question-schema.ts';
import { UiInput } from '@/shared/ui/input/input.tsx';
import { UiTextarea } from '@/shared/ui/textarea/textarea.tsx';
import {
  UiRadioGroup,
  UiRadioGroupItem,
} from '@/shared/ui/radio/radio-group.tsx';
import { UiLabel } from '@/shared/ui/label/label.tsx';
import { UiCheckbox } from '@/shared/ui/checkbox/checkbox.tsx';

import './design-section.scss';

type PreviewQuestionProps = QuestionResponse & {
  index: number;
};

export const PreviewQuestion = ({
  title,
  description,
  answers,
  type,
  index,
}: PreviewQuestionProps) => {
  return (
    <li className={'questions__item'}>
      <h4>
        {index + 1}) {title}
      </h4>
      <p>{description}</p>
      {type === 'text' && (
        <div>
          {answers.map((answer, index) => (
            <div key={index}>
              {answer.title}
              <UiInput placeholder={'Enter your answer'} />
            </div>
          ))}
        </div>
      )}
      {type === 'paragraph' && (
        <div>
          {answers.map((answer, index) => (
            <div key={index}>
              {answer.title}
              <UiTextarea placeholder={'Enter your answer'} />
            </div>
          ))}
        </div>
      )}
      {type === 'radio' && (
        <div>
          <UiRadioGroup className={'radio-group-question'}>
            {answers.map((answer, index) => (
              <div key={index} className={'radio-answer'}>
                <UiRadioGroupItem value={`value-${index}`} />
                <UiLabel htmlFor={`value-${index}`}>{answer.title}</UiLabel>
              </div>
            ))}
          </UiRadioGroup>
        </div>
      )}
      {type === 'checkbox' && (
        <div>
          <div className={'checkbox-group-question'}>
            {answers.map((answer, index) => (
              <div key={index} className={'checkbox-answer'}>
                <UiCheckbox value={`value-${index}`} />
                <UiLabel htmlFor={`value-${index}`}>{answer.title}</UiLabel>
              </div>
            ))}
          </div>
        </div>
      )}
    </li>
  );
};
