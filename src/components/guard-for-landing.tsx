import { useAuth } from '@/hooks/use-auth.ts';
import { Navigate, Outlet } from 'react-router-dom';
import '@/scss/main.scss';
import { Loader2Icon } from 'lucide-react';

export const GuardForLanding = ({
  fallbackUrl,
}: {
  fallbackUrl: string;
}) => {
  const { user, loading } = useAuth();

  if (loading)
    return (
      <main className='load-full-page'>
        <Loader2Icon />
      </main>
    );

  if (!user) return <Outlet />;

  return <Navigate to={fallbackUrl} />;
};
