import { RouteObject } from 'react-router-dom';
import ProductDetail from '@pages/products/[productId]/ProductDetail.tsx';

const productPageRoutes: RouteObject[] = [
  {
    path: ':productId',
    index: true,
    element: <ProductDetail />,
  },
];

export default productPageRoutes;
