import { Injectable } from '@angular/core';
import { CartProduct, Product } from '../product';
import { StorageService } from './storage.service';

const cartStorageKey = 'Cart';
const defaultProducts: CartProduct[] = [];

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: CartProduct[] = [];

  constructor(private storageService: StorageService) {
    this.products = storageService.getData(cartStorageKey) || defaultProducts;
  }

  addToCart(products: CartProduct[]) {
    this.products.push(...products);
    this.storageService.setData(cartStorageKey, this.products);
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
