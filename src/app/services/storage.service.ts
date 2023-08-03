import { Injectable } from '@angular/core';
import { Order } from '../order';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storage: Storage;
  constructor() {
    this.storage = window.localStorage;
  }

  set(data: Order) {
    let orders = this.get('Orders');
    if (this.storage) {
      this.storage.setItem('Orders', JSON.stringify([orders, data]));
      return true;
    }

    return false;
  }

  get(key: string): any {
    if (this.storage) {
      return JSON.parse(this.storage.getItem(key) || '[]');
    }
    return null;
  }
}
