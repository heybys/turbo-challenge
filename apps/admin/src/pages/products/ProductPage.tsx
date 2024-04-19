import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import useFetchProducts from '@apis/product/useFetchProducts.ts';

const StyledProductPage = styled.div`
  font-size: 1rem;
  color: #333;
  padding: 1rem;
`;

const ProductPage = () => {
  const { data: products } = useFetchProducts({});

  return (
    <StyledProductPage>
      <h3>Products</h3>
      <Table striped bordered hover width={500}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
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
    </StyledProductPage>
  );
};

export default ProductPage;
