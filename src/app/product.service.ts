import { Injectable } from '@angular/core';
import { CartProduct, Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  allProducts: CartProduct[] = [];
  filteredProducts: CartProduct[] = [];

  constructor() {}

  url = 'http://localhost:3000/products';

  async getAllProducts(): Promise<Product[]> {
    const data = await fetch(this.url);
    const products: Product[] = await data
      .json()
      .then((products: Product[]) => products);

    return products ?? [];
  }

  async parsedProducts(): Promise<CartProduct[]> {
    const parsedProducts = await this.getAllProducts().then(
      (products: Product[]) =>
        products.map((product: Product) =>
          Object.defineProperty(product, 'count', { value: 1, writable: true })
        )
    );

    return parsedProducts as CartProduct[];
  }

  filterProducts(products: CartProduct[]) {
    this.filteredProducts = products;
  }
}
