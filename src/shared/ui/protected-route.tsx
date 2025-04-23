import { Navigate } from 'react-router-dom';

import { useAuth } from '@/shared/hooks/useAuth';
import { ReactNode } from 'react';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();

  // TODO: LOADING COMPONENT
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to='/login' />;

  return children;
};
