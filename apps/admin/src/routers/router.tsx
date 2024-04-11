import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/MainPage.tsx';
import ProductPage from '@pages/product/ProductPage.tsx';
import MoviePage from '@pages/movie/MoviePage.tsx';
import RootLayout from '@pages/layout/RootLayout.tsx';
import movieRoutes from '@/routers/movies/movieRoutes.tsx';
import productRoutes from '@/routers/products/productRoutes.tsx';
import { LoginCallback } from '@okta/okta-react';
import AuthGuardLayout from '@pages/layout/AuthGuardLayout.tsx';
import NotFoundPage from '@pages/layout/NotFoundPage.tsx';
import SignInPage from '@pages/sign-in/SignInPage.tsx';
import { SpinnerCenter } from '@repo/ui';

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
        element: <LoginCallback loadingElement={<SpinnerCenter />} />,
      },
      {
        element: <AuthGuardLayout />,
        children: [
          {
            path: '/movies',
            element: <MoviePage />,
            children: movieRoutes,
          },
          {
            path: '/products',
            element: <ProductPage />,
            children: productRoutes,
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
