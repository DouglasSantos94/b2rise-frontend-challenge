import { CartProduct } from './product';

export type Order = {
  id: number;
  totalPrice: number;
  products: CartProduct[];
};
