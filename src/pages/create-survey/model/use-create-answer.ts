import { useMutation } from '@tanstack/react-query';
import {
  createAnswer,
  CreateAnswerDto,
} from '@/pages/create-survey/api/answers-repository.ts';
import { queryClient } from '@/shared/api/query-client.ts';
import { getItemOptions } from '@/api/survey/get.ts';
import { useCallback } from 'react';

export function useCreateAnswer(surveyId: string, questionId: number) {
  const mutation = useMutation({
    mutationFn: (dto: CreateAnswerDto) => createAnswer(dto),
  });

  const createAnswerMutation = useCallback(
    (dto: CreateAnswerDto) => {
      mutation.mutate(dto);

      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !dto) return data;

        const questions = data.questions;
        const question = questions[questionId];
        const answers = question.answers;

        answers.push({ title: dto.title, respondents: [] });

        return {
          ...data,
          questions,
        };
      });
    },
    [mutation]
  );

  return { createAnswerMutation };
}
