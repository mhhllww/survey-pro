import { useMutation } from '@tanstack/react-query';
import { useCallback } from 'react';
import { queryClient } from '@/shared/api/query-client.ts';
import { getItemOptions } from '@/api/survey/get.ts';
import {
  changeSurvey,
  ChangeSurveyDto,
} from '@/pages/create-survey/api/survey-repository.ts';

export function useChangeSurvey(surveyId: string) {
  const mutation = useMutation({
    mutationFn: (dto: ChangeSurveyDto) => changeSurvey(dto),
  });

  const changeSurveyMutation = useCallback(
    (dto: ChangeSurveyDto) => {
      mutation.mutate(dto);

      queryClient.setQueryData(getItemOptions(surveyId).queryKey, (data) => {
        if (!data || !dto) return data;

        data.title = dto.title;
        data.description = dto.description;

        return {
          ...data,
        };
      });
    },
    [mutation]
  );

  return { changeSurveyMutation };
}
