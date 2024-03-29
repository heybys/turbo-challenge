// import MainPage from '@pages/MainPage.tsx';
// import MainPage from '@pages/MainPage';
// import Page from '../'

// const ProductPage = lazy(() => import('@pages/product/ProductPage'));

import { createBrowserRouter, RouteObject } from 'react-router-dom';
// import MainPage from '@pages/MainPage.tsx';

const object: RouteObject = {
  path: '/',
  // element: <MainPage />,
  // index: true
};

const router = createBrowserRouter([object]);

export default router;
