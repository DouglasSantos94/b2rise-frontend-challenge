import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../services/storage.service';
import { Order } from '../order';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, TopBarComponent],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent {
  orders: Order[] = [];

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    this.orders = this.storageService.get('Orders');
  }
}
