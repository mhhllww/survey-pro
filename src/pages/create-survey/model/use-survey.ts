import { QueryObserverBaseResult, useQuery } from '@tanstack/react-query';
import { SurveyResponse } from '@/api/survey/survey-schema.ts';
import { getItemOptions } from '@/api/survey/get.ts';

type ReturnedType<T> = {
  isLoading: boolean;
  error: Error | null;
  refetch: QueryObserverBaseResult['refetch'];
} & ({ isSuccess: true; data: T } | { isSuccess: false; data: undefined });

export function useSurvey(id: string): ReturnedType<SurveyResponse> {
  const surveysQuery = useQuery(getItemOptions(id));

  if (surveysQuery.isSuccess === false) {
    return {
      isSuccess: false,
      data: undefined,
      error: surveysQuery.error,
      refetch: surveysQuery.refetch,
      isLoading: surveysQuery.isLoading,
    };
  }
  return {
    isSuccess: surveysQuery.isSuccess,
    data: surveysQuery.data,
    error: surveysQuery.error,
    refetch: surveysQuery.refetch,
    isLoading: surveysQuery.isLoading,
  };
}
