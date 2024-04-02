import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/MainPage.tsx';
import ProductPage from '@pages/product/ProductPage.tsx';
import MoviePage from '@pages/movie/MoviePage.tsx';
import AppContainer from '@/AppContainer.tsx';
import movieRoutes from '@/routers/movies/movieRoutes.tsx';
import productRoutes from '@/routers/products/productRoutes.tsx';
import OktaProtectedRoute from '@pages/utils/OktaProtectedRoute.tsx';
import { LoginCallback } from '@okta/okta-react';

const router = createBrowserRouter([
  {
    element: <AppContainer />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'login/callback',
        element: <LoginCallback />,
      },
      {
        element: <OktaProtectedRoute />,
        children: [
          {
            path: '/movies',
            element: <MoviePage />,
            children: movieRoutes,
          },
        ],
      },
      {
        path: '/products',
        element: <ProductPage />,
        children: productRoutes,
      },
    ],
  },
]);

export default router;
