import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchPageComponent } from './search-page/search-page.component';
import { StoreComponent } from './store/store.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartComponent },
  { path: 'history', component: OrdersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
