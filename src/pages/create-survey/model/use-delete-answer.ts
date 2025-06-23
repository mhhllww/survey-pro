import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';

import { getItemOptions } from '@/api/survey/get.ts';
import { queryClient } from '@/shared/api/query-client.ts';
import {
  deleteAnswer,
  DeleteAnswerDto,
} from '@/pages/create-survey/api/answers-repository.ts';

export function useDeleteAnswer(
  surveyId: string,
  questionId: string,
  answerId: string
) {
  const mutation = useMutation({
    mutationFn: (dto: DeleteAnswerDto) => deleteAnswer(dto),
  });

  const deleteAnswerMutation = useCallback(
    (dto: DeleteAnswerDto) => {
      mutation.mutate(dto);

      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !dto.questionId) return data;

        const updatedQuestions = [...data.questions];
        const questionIndex = updatedQuestions.findIndex(
          (q) => q.id === questionId
        );
        const question = updatedQuestions[questionIndex];
        const updatedAnswers = question.answers.filter(
          (answer) => answer.id !== answerId
        );

        updatedQuestions[questionIndex] = {
          ...question,
          answers: updatedAnswers,
        };

        return {
          ...data,
          questions: updatedQuestions,
        };
      });
    },
    [mutation]
  );

  return { deleteAnswerMutation };
}
