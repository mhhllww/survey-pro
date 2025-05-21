import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/home/home.tsx';
import { Login } from '@/pages/auth/ui/login.tsx';
import { Register } from '@/pages/auth/ui/register.tsx';
import { RouterPaths } from '@/app/consts/RouterPaths.ts';
import { Dashboard } from '@/pages/dashboard/dashboard.tsx';
import { Analytics } from '@/pages/analytics/analytics.tsx';
import { Surveys } from '@/pages/surveys/surveys.tsx';

export const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.HOME} element={<Home />} />
        <Route path={RouterPaths.ANALYTICS} element={<Analytics />} />
        <Route path={RouterPaths.LOGIN} element={<Login />} />
        <Route path={RouterPaths.REGISTER} element={<Register />} />
        <Route path={RouterPaths.DASHBOARD} element={<Dashboard />} />
        <Route path={RouterPaths.SURVEYS} element={<Surveys />} />
        <Route path={RouterPaths.SURVEY} element={<div>Waiting page</div>} />
        <Route path={RouterPaths.RESULT} element={<div>Waiting page</div>} />
      </Routes>
    </BrowserRouter>
  );
};

// const layoutTransition = {
//   initial: { opacity: 0 },
//   animate: { opacity: 1 },
//   exit: { opacity: 0 },
//   transition: { duration: 0.5 },
// };
//
// function AnimatedRoute({ children }: { children: ReactNode }) {
//   return (
//     <AnimatePresence mode={'wait'}>
//       <motion.div {...layoutTransition}>{children}</motion.div>
//     </AnimatePresence>
//   );
// }
//
// function ProtectedRoute({ children }: { children: React.ReactNode }) {
//   const { user, loading } = useAuth();
//
//   // TODO: LOADING COMPONENT
//   if (loading) return <div>Loading...</div>;
//   if (!user) return <Navigate to='/login' />;
//
//   return children;
// }
