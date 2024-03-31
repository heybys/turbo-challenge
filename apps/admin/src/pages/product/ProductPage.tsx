import React from 'react';
import { Outlet } from 'react-router-dom';

const ProductPage = () => {
  return (
    <div>
      <h1>This is my ProductPage</h1>
      ---
      <Outlet />
    </div>
  );
};

export default ProductPage;
