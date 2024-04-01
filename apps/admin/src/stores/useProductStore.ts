import { create } from 'zustand';
import { Product } from '@apis/product/product.ts';

interface ProductState {
  products: Product[];
  setProducts: (products: Product[]) => void;
  findById: (productId: number) => Product | undefined;
}

export const useProductStore = create<ProductState>((setState, getState) => ({
  products: [],
  setProducts: (products: Product[]) => setState({ products }),
  findById: (productId: number) =>
    getState().products.find((value) => value.id === productId),
}));
