import { useMutation } from '@tanstack/react-query';
import {
  changeAnswer,
  ChangeAnswerDto,
} from '@/pages/create-survey/api/answers-repository.ts';
import { useCallback } from 'react';
import { queryClient } from '@/shared/api/query-client.ts';
import { getItemOptions } from '@/api/survey/get.ts';
import { showToast } from '@/shared/ui/toast/toast.tsx';

export function useChangeAnswer(surveyId: string) {
  const mutation = useMutation({
    mutationFn: (dto: ChangeAnswerDto) => changeAnswer(dto),
    onSuccess: () => {
      showToast({
        type: 'success',
        title: 'Answer was changed!',
        description: 'Title was changed successfully!',
      });
    },
    onError: (e) => {
      showToast({
        type: 'error',
        title: e.name,
        description: e.message,
      });
    },
  });

  const changeAnswerMutation = useCallback(
    (dto: ChangeAnswerDto) => {
      // TODO: Сделать проверку с предыдущим значением
      // const data = queryClient.getQueryData(
      //   surveyApi.getItemOptions(surveyId).queryKey
      // );

      if (!dto.title.trim()) {
        showToast({
          type: 'warning',
          title: 'Title is required!',
          description: 'Please enter Title and try again!',
        });

        return;
      }

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
