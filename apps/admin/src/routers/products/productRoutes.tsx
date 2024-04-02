import { RouteObject } from 'react-router-dom';
import ProductDetailPage from '@pages/product/[id]/ProductDetailPage.tsx';

const productRoutes: RouteObject[] = [
  {
    path: ':productId',
    index: true,
    element: <ProductDetailPage />,
  },
];

export default productRoutes;
