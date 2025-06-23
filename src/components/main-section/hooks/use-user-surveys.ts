import { useQuery } from '@tanstack/react-query';
import { getUserSurveys } from '@/api/survey/get-user-surveys.ts';
import { useAuth } from '@/hooks/use-auth.ts';
import { SurveyResponse } from '@/api/survey/survey-schema.ts';

/**
 * Hook for fetching current user's surveys
 */
export function useUserSurveys(limit: number = 50) {
  const { user, loading } = useAuth();

  return useQuery<SurveyResponse[], Error>({
    queryKey: ['userSurveys', user?.uid],
    queryFn: async () => {
      if (!user) return [];
      return getUserSurveys(user.uid, limit);
    },
    enabled: !!user && !loading,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}
