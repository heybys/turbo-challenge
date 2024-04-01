import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProductStore } from '@stores/useProductStore.ts';
import { Product } from '@apis/product/product.ts';

const ProductDetailPage = () => {
  const { productId } = useParams();
  const { products, findById } = useProductStore();
  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    if (productId) {
      const found = findById(+productId);
      setProduct(found);
    }
  }, [products, productId]);

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

export default ProductDetailPage;
