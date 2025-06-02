import { useMutation } from '@tanstack/react-query';
import {
  createAnswer,
  CreateAnswerDto,
} from '@/pages/create-survey/api/answers-repository.ts';
import { queryClient } from '@/shared/api/query-client.ts';
import { getItemOptions } from '@/api/survey/get.ts';
import { useCallback } from 'react';
import { surveyApi } from '@/api/survey';

export function useCreateAnswer(surveyId: string, questionId: string) {
  const mutation = useMutation({
    mutationFn: (dto: CreateAnswerDto) => createAnswer(dto),
  });

  const createAnswerMutation = useCallback(
    (dto: CreateAnswerDto) => {
      const data = queryClient.getQueryData(
        surveyApi.getItemOptions(surveyId).queryKey
      );

      const question = data?.questions.find(
        (question) => question.id === questionId
      );

      switch (question?.type) {
        case 'text':
          if (question.answers.length > 0) return;
          break;
        case 'paragraph':
          if (question.answers.length > 0) return;
          break;
        case 'radio':
          if (question.answers.length > 7) return;
          break;
        case 'checkbox':
          if (question.answers.length > 7) return;
          break;
      }

      mutation.mutate(dto);

      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !dto) return data;

        const questions = data.questions;
        const question = questions.find(
          (question) => question.id === questionId
        );
        const answers = question?.answers;

        answers?.push({ id: dto.id, title: dto.title, respondents: [] });

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
