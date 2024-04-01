import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getProducts } from '@apis/product/productService.ts';
import { useProductStore } from '@stores/useProductStore.ts';

const ProductPage = () => {
  const { products, setProducts } = useProductStore();

  const fetchProducts = async () => {
    const response = await getProducts();
    setProducts(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <div className={'nav'}>
        <Link className={'link'} to={'/'}>
          Back
        </Link>
      </div>
      <h1>This is my ProductPage</h1>
      ---
      <div className={'items'}>
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            {product.name}
          </Link>
        ))}
      </div>
      ---
      <Outlet />
    </div>
  );
};

export default ProductPage;
