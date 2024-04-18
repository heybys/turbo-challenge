import { Product } from '@apis/product/product.ts';
import httpClient from '@apis/utils/httpClient.ts';
import { AxiosResponse } from 'axios';

class ProductService {
  getProducts = async (): Promise<AxiosResponse<Product[]>> => {
    return await httpClient.get('/products');
  };
}
const productService = new ProductService();
export default productService;
