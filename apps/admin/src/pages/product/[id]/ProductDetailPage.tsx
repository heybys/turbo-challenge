import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>item {productId}</h1>
    </div>
  );
};

export default ProductDetailPage;
