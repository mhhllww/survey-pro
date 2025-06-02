import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { queryClient } from '@/shared/api/query-client.ts';
import { getItemOptions } from '@/api/survey/get.ts';
import {
  changeQuestion,
  ChangeQuestionDto,
} from '@/pages/create-survey/api/questions-repository.ts';
import { showToast } from '@/shared/ui/toast/toast.tsx';

export function useChangeQuestion(surveyId: string) {
  const mutation = useMutation({
    mutationFn: (dto: ChangeQuestionDto) => changeQuestion(dto),
    onSuccess: () => {
      showToast({
        type: 'success',
        title: 'Question was changed!',
        description: 'Title and Description was changed successfully!',
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

  const changeQuestionMutation = useCallback(
    (dto: ChangeQuestionDto) => {
      // TODO: Сделать проверку с предыдущим значением
      // const data = queryClient.getQueryData(
      //   surveyApi.getItemOptions(surveyId).queryKey
      // );

      if (!dto.title.trim() || !dto.description.trim()) {
        showToast({
          type: 'warning',
          title: 'Title and Description is required!',
          description: 'Please enter Title and Description and try again!',
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
