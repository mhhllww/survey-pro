import { useMutation } from '@tanstack/react-query';
import {
  createQuestion,
  CreateQuestionDto,
} from '@/pages/create-survey/api/questions-repository.ts';
import { queryClient } from '@/shared/api/query-client.ts';
import { getItemOptions } from '@/api/survey/get.ts';
import { useCallback } from 'react';

export function useCreateQuestion(surveyId: string) {
  const mutation = useMutation({
    mutationFn: (dto: CreateQuestionDto) => createQuestion(dto),
    onSuccess: (result) => {
      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !result) return data;

        const questions = data.questions;
        questions.push(result);

        return {
          ...data,
          questions,
        };
      });
    },
  });

  const createQuestionMutation = useCallback(
    (dto: CreateQuestionDto) => {
      mutation.mutate(dto);
    },
    [mutation]
  );

  return { createQuestionMutation };
}
