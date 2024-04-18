import { Product } from '@apis/product/product.ts';
import httpClient from '@apis/utils/httpClient.ts';

class ProductService {
  getProducts = async (): Promise<Product[]> => {
    return await httpClient.get('/products').then((value) => value.data);
  };
}
const productService = new ProductService();
export default productService;
