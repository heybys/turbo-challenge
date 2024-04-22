import { ProductsQueryParams } from '@apis/product/model/productsQueryParams.ts';
import { QueryKey } from '@tanstack/react-query';

const useQueryKey = (queryParams?: ProductsQueryParams): QueryKey => {
  const key: (string | ProductsQueryParams)[] = ['products'];
  queryParams && key.push({ ...queryParams });

  return key;
};

export default useQueryKey;
