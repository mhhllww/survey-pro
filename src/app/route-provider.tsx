import * as React from 'react';
import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAuth } from '@/hooks/use-auth.ts';
import { Navigate } from 'react-router-dom';

export const RouteProvider = () => {
  return <></>;
};

const layoutTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.5 },
};

function AnimatedRoute({ children }: { children: ReactNode }) {
  return (
    <AnimatePresence mode={'wait'}>
      <motion.div {...layoutTransition}>{children}</motion.div>
    </AnimatePresence>
  );
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  // TODO: LOADING COMPONENT
  if (loading) return <div>Loading...</div>;
  if (!user) return <Navigate to='/login' />;

  return children;
}
