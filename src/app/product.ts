export interface Product {
  id: number;
  description: string;
  longDescription: string;
  price: number;
}

export type CartProduct = {
  count: number;
} & Product;
