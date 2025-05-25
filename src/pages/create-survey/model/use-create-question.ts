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
  });

  const createQuestionMutation = useCallback(
    (dto: CreateQuestionDto) => {
      mutation.mutate(dto);

      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !dto) return data;

        const questions = data.questions;
        questions.push({
          id: dto.id,
          title: dto.title,
          description: dto.description,
          type: dto.type,
          answers: [],
        });

        return {
          ...data,
          questions,
        };
      });
    },
    [mutation]
  );

  return { createQuestionMutation };
}
