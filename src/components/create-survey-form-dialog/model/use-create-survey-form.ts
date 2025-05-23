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
import { useAuth } from '@/hooks/use-auth.ts';
import { toast } from 'sonner';

type ReturnType = {
  form: UseFormReturn<CreateSurveyDto>;
  onSubmit: (dto: CreateSurveyDto) => Promise<void>;
  isLoading: boolean;
};

export function useCreateSurveyForm(): ReturnType {
  const navigate = useNavigate();

  const { user, loading } = useAuth();

  if (!user && !loading) throw new Error('Unauthorized!');

  const mutation = useMutation({
    mutationFn: (dto: CreateSurveyDto) => createSurvey(dto, user!.uid),
    onSuccess: (data) => navigate(`/dashboard/survey/create/${data.id}`),
    onError: (err) => toast.error(err.message),
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
