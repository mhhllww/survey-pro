import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/home/home.tsx';
import { Login } from '@/pages/auth/ui/login.tsx';
import { Register } from '@/pages/auth/ui/register.tsx';
import { RouterPaths } from '@/app/consts/RouterPaths.ts';
import { CreateSurvey } from '@/pages/create-survey/create-survey.tsx';
import { Dashboard } from '@/pages/dashboard/dashboard.tsx';
import { GuardForAuthentication } from '@/components/guard-for-authentication.tsx';
import { Analytics } from '@/pages/analytics/analytics.tsx';

export const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.HOME} element={<Home />} />
        <Route path={RouterPaths.LOGIN} element={<Login />} />
        <Route path={RouterPaths.REGISTER} element={<Register />} />
        <Route
          element={<GuardForAuthentication fallbackUrl={RouterPaths.LOGIN} />}>
          <Route path={RouterPaths.DASHBOARD} element={<Dashboard />} />
          <Route path={RouterPaths.ANALYTICS} element={<Analytics />} />
        </Route>
        <Route path={RouterPaths.CREATE} element={<CreateSurvey />} />
        <Route
          path={'/dashboard/survey/create/:surveyId'}
          element={<CreateSurvey />}
        />
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
