import { useForm, UseFormReturn } from 'react-hook-form';
import {
  createSurvey,
  CreateSurveyDto,
  CreateSurveySchema,
} from '@/components/create-survey-form-dialog/api/survey-repository.ts';
import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

type ReturnType = {
  form: UseFormReturn<CreateSurveyDto>;
  onSubmit: (dto: CreateSurveyDto) => Promise<void>;
  isLoading: boolean;
};

export function useCreateSurveyForm(): ReturnType {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (dto: CreateSurveyDto) => createSurvey(dto),
    onSuccess: (data) => navigate(`/dashboard/survey/create/${data.id}`),
  });

  const form = useForm<CreateSurveyDto>({
    resolver: zodResolver(CreateSurveySchema),
  });

  const onSubmit = useCallback(async (dto: CreateSurveyDto) => {
    try {
      mutation.mutate(dto);
    } catch (e) {
      console.log(e);
    }
  }, []);

  return {
    form,
    onSubmit,
    isLoading: mutation.isPending,
  };
}
