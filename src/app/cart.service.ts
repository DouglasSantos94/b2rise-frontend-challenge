import { Injectable } from '@angular/core';
import { CartProduct, Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: CartProduct[] = [
    // {
    //   id: 1,
    //   description: 'LightGray T-shirt',
    //   longDescription:
    //     'LemonChiffon T-shirt Repellendus eligendi assumenda corrupti optio omnis ut. At distinctio quam illum incidunt suscipit dolorem. Porro dolores vel harum praesentium perferendis impedit dolor repellendus.',
    //   price: 330.96,
    //   count: 1,
    // },
    // {
    //   id: 2,
    //   description: 'Aqua T-shirt',
    //   longDescription:
    //     'DarkGreen T-shirt Vitae omnis neque consequatur illo repellat quaerat doloribus. At ab iure modi et autem. Dolor ex eveniet architecto aut est. Est veritatis nostrum incidunt dolorum et eum. Culpa et voluptatem accusamus id debitis voluptates magnam molestiae.',
    //   price: 386.22,
    //   count: 1,
    // },
    // {
    //   id: 3,
    //   description: 'Cornsilk T-shirt',
    //   longDescription:
    //     'HoneyDew T-shirt Voluptatem nihil assumenda ut. Optio labore consequatur iusto qui nam corporis. Assumenda neque molestias voluptatem doloribus molestias ut quibusdam velit. Omnis quia occaecati officiis non laborum quo unde. Voluptatem ut consequatur consequatur dolore praesentium fugit.',
    //   price: 293.42,
    //   count: 1,
    // },
  ];

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
