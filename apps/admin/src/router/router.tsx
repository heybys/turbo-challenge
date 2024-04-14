import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/MainPage.tsx';
import ProductPage from '@pages/products/ProductPage.tsx';
import MoviePage from '@pages/movies/MoviePage.tsx';
import RootLayout from '@layout/RootLayout.tsx';
import moviePageRoutes from '@router/moviePageRoutes.tsx';
import productPageRoutes from '@router/productPageRoutes.tsx';
import AuthGuardLayout from '@layout/AuthGuardLayout.tsx';
import NotFoundPage from '@pages/*/NotFoundPage.tsx';
import SignInPage from '@pages/sign-in/SignInPage.tsx';
import LoginCallbackPage from '@pages/login/callback/LoginCallbackPage.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/sign-in',
        element: <SignInPage />,
      },
      {
        path: '/login/callback',
        element: <LoginCallbackPage />,
      },
      {
        element: <AuthGuardLayout />,
        children: [
          {
            path: '/movies',
            element: <MoviePage />,
            children: moviePageRoutes,
          },
          {
            path: '/products',
            element: <ProductPage />,
            children: productPageRoutes,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default router;
