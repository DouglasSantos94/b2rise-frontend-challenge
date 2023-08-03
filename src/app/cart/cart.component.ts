import { Component, SimpleChanges, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../product';
import { StorageService } from '../services/storage.service';
import { Router, RouterModule } from '@angular/router';
import { Order } from '../order';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, TopBarComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products: CartProduct[] = this.cartService.getProducts();
  storageService: StorageService = inject(StorageService);

  constructor(private cartService: CartService, private router: Router) {}

  totalPrice = this.products.reduce(
    (acc, product: CartProduct) => acc + product.price * product.count,
    0
  );

  increase(product: CartProduct) {
    product.count += 1;
    this.totalPrice += product.price;
  }

  decrease(product: CartProduct) {
    product.count = product.count > 1 ? product.count - 1 : 1;
    this.totalPrice -= product.price;
  }

  deleteProduct(productToDelete: CartProduct) {
    this.products = this.products.filter(
      (product: CartProduct) => product.id !== productToDelete.id
    );

    this.totalPrice =
      this.totalPrice - productToDelete.price * productToDelete.count;

    this.cartService.deleteProduct(productToDelete);
  }

  finishPurchase() {
    const order: Order = {
      id: this.generateRandomId(),
      products: this.products,
      amount: this.totalPrice,
    };
    this.storageService.set(order);
    this.router.navigate(['/history']);
  }

  generateRandomId = function (length = 6) {
    return Math.random()
      .toString(36)
      .substring(2, length + 2);
  };
}
