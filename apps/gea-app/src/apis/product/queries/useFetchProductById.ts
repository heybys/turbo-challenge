import useHttpClient from '@apis/utils/useHttpClient.ts';
import { AxiosResponse } from 'axios';
import { Product } from '@apis/product/model/product.ts';
import { useQuery } from '@tanstack/react-query';

const useFetchProductById = (productId: number) => {
  const { httpClient } = useHttpClient();

  const fetch = async (): Promise<AxiosResponse<Product>> => {
    return await httpClient.get(`/products/${productId}`);
  };

  return useQuery({
    queryKey: [`products/${productId}`],
    queryFn: fetch,
    select: (response) => response.data,
  });
};

export default useFetchProductById;
