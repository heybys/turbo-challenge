import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import useHttpClient from '@apis/utils/useHttpClient.ts';
import { Product } from '@apis/product/model/product.ts';
import { ProductsQueryParams } from '@apis/product/model/productsQueryParams.ts';
import useQueryKey from '@apis/product/key/useQueryKey.ts';

const useFetchProducts = (queryParams?: ProductsQueryParams) => {
  const { httpClient } = useHttpClient();
  const queryKey = useQueryKey(queryParams);

  const fetch = async (): Promise<AxiosResponse<Product[]>> => {
    const searchParams = new URLSearchParams({
      name: queryParams?.name || '',
      cost: queryParams?.cost ? String(queryParams?.cost) : '',
    });
    return await httpClient.get(`/products?${searchParams}`);
  };

  return useQuery({
    queryKey,
    queryFn: fetch,
    select: (response) => response.data,
    // staleTime: 1000 * 60 * 5,
    // gcTime: 1000 * 60 * 10,
  });
};

export default useFetchProducts;
