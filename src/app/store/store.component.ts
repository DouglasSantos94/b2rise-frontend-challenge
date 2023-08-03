import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ProductService } from '../services/product.service';
import { CartProduct, Product } from '../product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, TopBarComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  productService: ProductService = inject(ProductService);
  filteredProductList: Product[] = this.productService.filteredProducts;
  selectedProducts: CartProduct[] = [];

  constructor(private cartService: CartService) {}

  addToCart(products: CartProduct[]) {
    this.cartService.addToCart(products);
  }

  selectItem(product: CartProduct) {
    let prod = this.selectedProducts.find(
      (p: CartProduct) => p.id === product.id
    );

    if (prod) {
      this.selectedProducts = this.selectedProducts.filter(
        (p: CartProduct) => p !== product
      );
    } else {
      this.selectedProducts.push(product);
    }
  }

  isSelected(product: CartProduct) {
    return (
      this.selectedProducts.find((p: CartProduct) => p === product) !==
      undefined
    );
  }
}
