import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { getProducts } from '@apis/product/productService.ts';
import { useProductStore } from '@stores/useProductStore.ts';
import styles from '@pages/mainPage.module.css';
import { Table } from 'react-bootstrap';
import RealGrid from '@components/RealGrid.tsx';

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
    <div className={styles.page}>
      <h3>Products</h3>
      <RealGrid />
      <Table striped bordered hover width={500}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>
                <Link to={`/products/${product.id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Outlet />
    </div>
  );
};

export default ProductPage;
