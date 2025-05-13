import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/home/home.tsx';
import { Login } from '@/pages/auth/ui/login.tsx';
import { Register } from '@/pages/auth/ui/register.tsx';
import { RouterPaths } from '@/app/consts/RouterPaths.ts';
import { UiButton } from '@/shared/ui/button/button.tsx';
import { CreateSurveyFormDialog } from '@/components/create-survey-form-dialog/create-survey-form-dialog.tsx';
import { useState } from 'react';

export const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouterPaths.HOME} element={<Home />} />
        <Route path={RouterPaths.LOGIN} element={<Login />} />
        <Route path={RouterPaths.REGISTER} element={<Register />} />
        {/* TODO: временная заглушка */}
        <Route path='/dashboard' element={<Page />} />
      </Routes>
    </BrowserRouter>
  );
};

const Page = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <UiButton onClick={() => setOpen(true)}>create survey</UiButton>
      {open && (
        <CreateSurveyFormDialog onClose={() => setOpen(false)} open={open} />
      )}
    </>
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
