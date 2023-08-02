import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';
import { CartProduct, Product } from '../product';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css'],
})
export class SearchPageComponent {
  productService: ProductService = inject(ProductService);

  constructor(private router: Router) {
    this.productService.parsedProducts().then((productList: CartProduct[]) => {
      this.productService.allProducts = productList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.productService.filteredProducts = this.productService.allProducts;
    }

    this.productService.filterProducts(
      this.productService.allProducts.filter((product: CartProduct) =>
        product.description.toLowerCase().includes(text.toLowerCase())
      )
    );

    this.router.navigate(['/store']);
  }
}
