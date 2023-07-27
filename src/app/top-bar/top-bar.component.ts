import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-top-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent {
  productService: ProductService = inject(ProductService);

  filterResults(text: string) {
    if (!text) {
      this.productService.filteredProducts = this.productService.allProducts;
    }

    this.productService.filterProducts(
      this.productService.allProducts.filter((product: Product) =>
        product.description.toLowerCase().includes(text.toLowerCase())
      )
    );
  }
}
