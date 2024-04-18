import React, { useEffect } from 'react';
import useCurrentTime from '@hooks/useCurrentTime.ts';
import styled from 'styled-components';
import { useQuery } from '@tanstack/react-query';
import productService from '@apis/product/productService.ts';

const StyledMainPage = styled.div`
  ${() => ({
    // backgroundColor: theme.colors.gray100,
  })}
`;

const useFetchProductsQuery = () => {
  return useQuery({
    queryKey: ['products', { id: 3 }],
    queryFn: () => productService.getProducts().then((value) => value.data),
  });
};

const useProductsViewModel = () => {
  // const todos: string[] = ['asdf'];

  const { data, isPending, isError, isLoading } = useFetchProductsQuery();
  return {
    products: data,
  };
};

const MainPage = () => {
  const currentTime = useCurrentTime();
  // const [todos, setTodos] = useState<string[]>([]);
  const { products } = useProductsViewModel();

  // const fetch = async () => {
  //   const response = await authService.test();
  //   setTodos(response.data);
  // };

  useEffect(() => {
    // fetch();
    console.log(products);
  }, [products]);

  return (
    <StyledMainPage>
      <h3>This is MainPage.</h3>
      <p>{currentTime}</p>
      {/*{products?.map((todo, index) => <div key={index}>{todo}</div>)}*/}
    </StyledMainPage>
  );
};

export default MainPage;
