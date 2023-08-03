import { CartProduct } from './product';

export type Order = {
  id: string;
  amount: number;
  products: CartProduct[];
};
