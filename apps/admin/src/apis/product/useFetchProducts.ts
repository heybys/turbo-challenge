import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import useHttpClient from '@apis/utils/useHttpClient.ts';
import { Product } from '@apis/product/model/product.ts';

export interface FetchProductsQueryParams {
  name?: string;
  cost?: number;
}

const useFetchProducts = (queryPrams?: FetchProductsQueryParams) => {
  const { httpClient } = useHttpClient();
  const searchParams = new URLSearchParams({
    name: queryPrams?.name || '',
    cost: queryPrams?.cost ? String(queryPrams?.cost) : '',
  });

  const fetch = async (): Promise<AxiosResponse<Product[]>> => {
    return await httpClient.get(`/products?${searchParams}`);
  };

  return useQuery({
    queryKey: ['products', { ...queryPrams }],
    queryFn: fetch,
    staleTime: 1000 * 10,
    gcTime: 1000 * 20,
    select: (response) => response.data,
  });
};

export default useFetchProducts;
