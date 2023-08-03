import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../services/product.service';
import { Product } from '../product';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  productService: ProductService = inject(ProductService);
  cartService: CartService = inject(CartService);
  constructor(private router: Router) {}

  filterResults(text: string) {
    if (!text) {
      this.productService.filteredProducts = this.productService.allProducts;
    }

    this.productService.filterProducts(
      this.productService.allProducts.filter((product: Product) =>
        product.description.toLowerCase().includes(text.toLowerCase())
      )
    );

    this.router.navigate(['/store']);
  }
}
