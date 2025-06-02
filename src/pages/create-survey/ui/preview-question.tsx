import { UiRadioGroup, UiRadioGroupItem } from '@/shared/ui/radio/radio-group';
import { UiInput } from '@/shared/ui/input/input';
import { UiTextarea } from '@/shared/ui/textarea/textarea';
import { UiLabel } from '@/shared/ui/label/label';
import { UiCheckbox } from '@/shared/ui/checkbox/checkbox';

import { QuestionResponse } from '@/api/question/question-schema';

import './editor-section.scss';

type PreviewQuestionProps = Omit<QuestionResponse, 'id'> & {
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
      <div className={'item-index'}>{index + 1}</div>
      <h4>{title}</h4>
      <p>{description}</p>
      {type === 'text' && (
        <UiInput disabled placeholder={'Enter your answer'} />
      )}

      {type === 'paragraph' && (
        <UiTextarea disabled placeholder={'Enter your answer'} />
      )}

      {type === 'radio' && (
        <UiRadioGroup>
          {answers.map((answer, index) => (
            <div key={index} className={'radio-answer'}>
              <UiRadioGroupItem disabled value={`value-${index}`} />
              <UiLabel htmlFor={`value-${index}`}>{answer.title}</UiLabel>
            </div>
          ))}
        </UiRadioGroup>
      )}
      {type === 'checkbox' && (
        <div className={'checkbox-group-question'}>
          {answers.map((answer, index) => (
            <div key={index} className={'checkbox-answer'}>
              <UiCheckbox disabled value={`value-${index}`} />
              <UiLabel htmlFor={`value-${index}`}>{answer.title}</UiLabel>
            </div>
          ))}
        </div>
      )}
    </li>
  );
};
