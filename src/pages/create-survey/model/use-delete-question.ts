import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';

import {
  deleteQuestion,
  DeleteQuestionDto,
} from '../api/questions-repository.ts';
import { getItemOptions } from '@/api/survey/get.ts';
import { queryClient } from '@/shared/api/query-client.ts';

export function useDeleteQuestion(surveyId: string, questionId: string) {
  const mutation = useMutation({
    mutationFn: (dto: DeleteQuestionDto) => deleteQuestion(dto),
  });

  const deleteQuestionMutation = useCallback(
    (dto: DeleteQuestionDto) => {
      mutation.mutate(dto);

      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !dto) return data;

        const updatedQuestions = data.questions.filter(
          (question) => question.id !== questionId
        );

        return {
          ...data,
          questions: updatedQuestions,
        };
      });
    },
    [mutation]
  );

  return { deleteQuestionMutation };
}
