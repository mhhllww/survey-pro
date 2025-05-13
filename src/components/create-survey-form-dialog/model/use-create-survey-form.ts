import { useForm, UseFormReturn } from 'react-hook-form';
import {
  createSurvey,
  CreateSurveyDto,
  CreateSurveySchema,
} from '@/components/create-survey-form-dialog/api/survey-repository.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';

type ReturnType = {
  form: UseFormReturn<CreateSurveyDto>;
  onSubmit: (dto: CreateSurveyDto) => Promise<void>;
  isLoading: boolean;
};

export function useCreateSurveyForm(): ReturnType {
  const mutation = useMutation({
    mutationFn: createSurvey,
  });

  const form = useForm<CreateSurveyDto>({
    resolver: zodResolver(CreateSurveySchema),
  });

  const onSubmit = useCallback(async (dto: CreateSurveyDto) => {
    mutation.mutate(dto);
  }, []);

  return {
    form,
    onSubmit,
    isLoading: mutation.isPending,
  };
}
