import { Injectable } from '@angular/core';
import { CartProduct, Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: CartProduct[] = [];

  constructor() {}

  addToCart(products: CartProduct[]) {
    this.products.push(...products);
  }

  getProducts() {
    return this.products;
  }

  clearCart() {
    this.products = [];
    return this.products;
  }

  deleteProduct(productToDelete: CartProduct) {
    this.products = this.products.filter(
      (product: CartProduct) => product.id !== productToDelete.id
    );
  }
}
