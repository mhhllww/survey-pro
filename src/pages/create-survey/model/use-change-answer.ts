import { useMutation } from '@tanstack/react-query';
import {
  changeAnswer,
  ChangeAnswerDto,
} from '@/pages/create-survey/api/answers-repository.ts';
import { useCallback } from 'react';
import { queryClient } from '@/shared/api/query-client.ts';
import { getItemOptions } from '@/api/survey/get.ts';

export function useChangeAnswer(surveyId: string) {
  const mutation = useMutation({
    mutationFn: (dto: ChangeAnswerDto) => changeAnswer(dto),
  });

  const changeAnswerMutation = useCallback(
    (dto: ChangeAnswerDto) => {
      mutation.mutate(dto);

      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !dto) return data;

        const questions = data.questions;
        const question = questions.find(
          (question) => question.id === dto.questionId
        );
        if (!question) return undefined;

        const answer = question.answers.find(
          (answer) => answer.id === dto.answerId
        );
        if (!answer) return undefined;

        answer.title = dto.title;

        return {
          ...data,
          questions: questions,
        };
      });
    },
    [mutation]
  );

  return { changeAnswerMutation };
}
