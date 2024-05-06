import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/MainPage.tsx';
import RootLayout from '@layout/RootLayout.tsx';
import NotFoundPage from '@pages/NotFoundPage.tsx';
import SignInPage from '@pages/sign-in/SignInPage.tsx';
import LoginCallbackPage from '@pages/login/callback/LoginCallbackPage.tsx';
import tlmPageRoutes from '@router/tlmPageRoutes.tsx';
import geaPageRoutes from '@router/geaPageRoutes.tsx';
import samplePageRoutes from '@router/samplePageRoutes.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      ...tlmPageRoutes,
      ...geaPageRoutes,
      ...samplePageRoutes,
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/login/callback',
        element: <LoginCallbackPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
