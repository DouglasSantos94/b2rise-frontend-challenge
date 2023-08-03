import { Injectable } from '@angular/core';
import { Order } from '../order';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  set(data: Order) {
    let orders = this.get('Orders');
    if (orders) {
      localStorage.setItem('Orders', JSON.stringify([...orders, { ...data }]));
      return true;
    }

    return false;
  }

  get(key: string): any {
    return JSON.parse(localStorage.getItem(key) || '[]');
  }
}
