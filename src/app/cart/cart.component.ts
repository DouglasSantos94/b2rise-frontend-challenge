import { Component, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { CartService } from '../services/cart.service';
import { CartProduct } from '../product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, TopBarComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  products = this.cartService.getProducts();
  constructor(private cartService: CartService) {}

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
}
