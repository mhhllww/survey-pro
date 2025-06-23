import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '@/pages/home/home.tsx';
import { Login } from '@/pages/auth/ui/login.tsx';
import { Register } from '@/pages/auth/ui/register.tsx';
import { RouterPaths } from '@/app/consts/RouterPaths.ts';
import { CreateSurvey } from '@/pages/create-survey/create-survey.tsx';
import { Dashboard } from '@/pages/dashboard/dashboard.tsx';
import { GuardForAuthentication } from '@/components/guard-for-authentication.tsx';
import { Analytics } from '@/pages/analytics/analytics.tsx';
import { SurveyPage } from '@/pages/survey/survey-page.tsx';
import { GuardForLanding } from '@/components/guard-for-landing.tsx';

export const RouteProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<GuardForLanding fallbackUrl={RouterPaths.DASHBOARD} />}>
          <Route path={RouterPaths.HOME} element={<Home />} />
        </Route>

        <Route path={RouterPaths.LOGIN} element={<Login />} />

        <Route path={RouterPaths.REGISTER} element={<Register />} />

        <Route
          element={<GuardForAuthentication fallbackUrl={RouterPaths.LOGIN} />}>
          <Route path={RouterPaths.DASHBOARD} element={<Dashboard />} />
          <Route path={RouterPaths.ANALYTICS} element={<Analytics />} />
          <Route path={RouterPaths.SURVEY} element={<SurveyPage />} />
          <Route path={RouterPaths.ANALYTICS} element={<Analytics />} />
          <Route path={RouterPaths.CREATE} element={<CreateSurvey />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
