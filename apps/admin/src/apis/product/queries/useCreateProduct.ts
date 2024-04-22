import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Product } from '@apis/product/model/product.ts';
import useHttpClient from '@apis/utils/useHttpClient.ts';
import { ProductsQueryParams } from '@apis/product/model/productsQueryParams.ts';
import useQueryKey from '@apis/product/key/useQueryKey.ts';

const useCreateProduct = (queryParams?: ProductsQueryParams) => {
  const { httpClient } = useHttpClient();
  const queryKey = useQueryKey(queryParams);
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: Product) => {
      const value = await httpClient.post(`/products`, { item: data });
      return value.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey });
    },
  });
};

export default useCreateProduct;
