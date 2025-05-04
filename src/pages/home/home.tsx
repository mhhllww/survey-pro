// import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect, useRef } from 'react';
// import { useToast } from '@/shared/ui/toast/toast.tsx';

export const Home = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  // const params = new URLSearchParams(location.search);
  //
  // const toastType = params.get('toast');
  // const toastTitle = params.get('title');
  // const toastDescription = params.get('description');
  //
  // const shownRef = useRef(false);
  //
  // useEffect(() => {
  //   if (toastType && toastTitle && toastDescription && !shownRef.current) {
  //     useToast({
  //       type: toastType as 'success' | 'error' | 'warning' | 'info',
  //       title: toastTitle,
  //       description: toastDescription,
  //     });
  //   }
  //
  //   shownRef.current = true;
  //   navigate(location.pathname, { replace: true });
  // }, [location.pathname]);

  return <div>Home</div>;
};
