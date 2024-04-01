import { Product } from '@apis/product/product.ts';

export const getProducts = async (): Promise<Product[]> => {
  return await fetch('/api/products').then((value) => value.json());
};
