import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { queryClient } from '@/shared/api/query-client.ts';
import { getItemOptions } from '@/api/survey/get.ts';
import {
  changeSurvey,
  ChangeSurveyDto,
} from '@/pages/create-survey/api/survey-repository.ts';
import { showToast } from '@/shared/ui/toast/toast.tsx';

export function useChangeSurvey(surveyId: string) {
  const mutation = useMutation({
    mutationFn: (dto: ChangeSurveyDto) => changeSurvey(dto),
    onSuccess: () => {
      showToast({
        type: 'success',
        title: 'Survey Information was changed!',
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

  const changeSurveyMutation = useCallback(
    (dto: ChangeSurveyDto) => {
      // TODO: Сделать проверку с предыдущим значением
      // const data = queryClient.getQueryData(
      //   surveyApi.getItemOptions(surveyId).queryKey
      // );

      if (!dto.title.trim() || !dto.description.trim()) {
        showToast({
          type: 'warning',
          title: 'Title and Description is required!',
          description: 'Please, enter Title and Description and try again.',
        });

        return;
      }

      mutation.mutate(dto);

      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !dto) return data;

        return {
          ...data,
          title: dto.title,
          description: dto.description,
        };
      });
    },
    [mutation]
  );

  return { changeSurveyMutation };
}
