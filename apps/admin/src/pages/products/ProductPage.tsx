import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Table } from 'react-bootstrap';
import styled from 'styled-components';
import { Product } from '@apis/product/model/product.ts';
import useProductApi from '@apis/product/useProductApi.ts';
import { SpinnerCenter } from '@repo/ui';

const StyledProductPage = styled.div`
  font-size: 1rem;
  color: #333;
  padding: 1rem;
`;

const ProductPage = () => {
  const { useFetchProducts, useCreateProduct } = useProductApi({ cost: 10000 });

  const {
    data: products,
    isFetching,
    isPending: isFetchPending,
  } = useFetchProducts();
  const { mutate, isPending: isCreatePending } = useCreateProduct();

  if (isFetching || isFetchPending || isCreatePending) return <SpinnerCenter />;

  return (
    <StyledProductPage>
      <h3>Products</h3>
      <div>
        <button
          onClick={() => {
            const product: Product = {
              name: 'hello',
              cost: 99,
              category: 'ghost',
            };
            mutate(product);
          }}
        >
          add
        </button>
        <button
          onClick={() => {
            const product: Product = {
              name: 'hello',
              cost: 11199,
              category: 'ghost',
            };
            mutate(product);
          }}
        >
          add
        </button>
      </div>
      <Table striped bordered hover width={500}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Product Name</th>
            <th>Product Cost</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.cost}</td>
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
