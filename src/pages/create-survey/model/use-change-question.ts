import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { queryClient } from '@/shared/api/query-client.ts';
import { getItemOptions } from '@/api/survey/get.ts';
import {
  changeQuestion,
  ChangeQuestionDto,
} from '@/pages/create-survey/api/questions-repository.ts';

export function useChangeQuestion(surveyId: string) {
  const mutation = useMutation({
    mutationFn: (dto: ChangeQuestionDto) => changeQuestion(dto),
  });

  const changeQuestionMutation = useCallback(
    (dto: ChangeQuestionDto) => {
      mutation.mutate(dto);

      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !dto) return data;

        const questions = data.questions;
        const question = questions.find(
          (question) => question.id === dto.questionId
        );

        if (!question) return undefined;

        question.title = dto.title;
        question.description = dto.description;

        return {
          ...data,
          questions: questions,
        };
      });
    },
    [mutation]
  );

  return { changeQuestionMutation };
}
