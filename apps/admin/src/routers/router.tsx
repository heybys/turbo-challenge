import { createBrowserRouter } from 'react-router-dom';
import MainPage from '@pages/MainPage.tsx';
import ProductPage from '@pages/product/ProductPage.tsx';
import ProductDetailPage from '@pages/product/[id]/ProductDetailPage.tsx';
import MoviePage from '@pages/movie/MoviePage.tsx';
import MovieDetailPage from '@pages/movie/[movieCd]/MovieDetailPage.tsx';
import Layout from '@pages/Layout.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
        errorElement: <div>error</div>,
      },
      {
        path: '/movies',
        element: <MoviePage />,
        errorElement: <div>error</div>,
        children: [
          {
            path: ':movieCd',
            index: true,
            element: <MovieDetailPage />,
          },
        ],
      },
      {
        path: '/products',
        element: <ProductPage />,
        errorElement: <div>error</div>,
        children: [
          {
            path: ':productId',
            index: true,
            element: <ProductDetailPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
