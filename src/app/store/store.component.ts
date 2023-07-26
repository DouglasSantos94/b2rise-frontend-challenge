import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, TopBarComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {
  productService: ProductService = inject(ProductService);
  productList: Product[] = [];

  constructor() {
    this.productService.getAllProducts().then((productList: Product[]) => {
      this.productList = productList;
    });
  }
}
