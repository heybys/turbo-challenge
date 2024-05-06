import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchProductById from '@apis/product/queries/useFetchProductById.ts';

const ProductDetail = () => {
  const { productId } = useParams();
  const { data: product } = useFetchProductById(Number(productId));

  if (!product) return null;

  return (
    <div>
      <h1>ProductID : {productId}</h1>
      <div>name : {product.name}</div>
      <div>cost : {product.cost}</div>
      <div>category : {product.category}</div>
    </div>
  );
};

export default ProductDetail;
