import { RouteObject } from 'react-router-dom';
import productPageRoutes from '@router/productPageRoutes.tsx';
import ProductPage from '@pages/products/ProductPage.tsx';
import moviePageRoutes from '@router/moviePageRoutes.tsx';
import MoviePage from '@pages/movies/MoviePage.tsx';
import UiPage from '@pages/ui/UiPage.tsx';

const samplePageRoutes: RouteObject[] = [
  {
    path: '/movies',
    element: <MoviePage />,
    children: [...moviePageRoutes],
  },
  {
    // element: <AuthGuardLayout />,
    children: [
      {
        path: '/products',
        element: <ProductPage />,
        children: [...productPageRoutes],
      },
    ],
  },
  {
    path: '/ui',
    element: <UiPage />,
  },
];

export default samplePageRoutes;
