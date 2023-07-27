import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { CartService } from '../cart.service';

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
  selectedProducts: Product[] = [];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }

  selectItem(product: Product) {
    let prod = this.selectedProducts.find((p: Product) => p.id === product.id);
    console.log(prod);

    if (prod) {
      this.selectedProducts = this.selectedProducts.filter(
        (p: Product) => p !== product
      );
    } else {
      this.selectedProducts.push(product);
    }
    console.log(this.selectedProducts);
  }
}
