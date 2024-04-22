import useFetchProducts from '@apis/product/queries/useFetchProducts.ts';
import useFetchProductById from '@apis/product/queries/useFetchProductById.ts';
import useCreateProduct from '@apis/product/queries/useCreateProduct.ts';
import { ProductsQueryParams } from '@apis/product/model/productsQueryParams.ts';

const useProductApi = (params?: ProductsQueryParams) => {
  return {
    useFetchProducts: () => useFetchProducts(params),
    useFetchProductById: useFetchProductById,
    useCreateProduct: () => useCreateProduct(params),
  };
};

export default useProductApi;
