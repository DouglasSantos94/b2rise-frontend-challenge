import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent {
  history = this.storageService.getData('Cart');
  constructor(private storageService: StorageService) {}
  ngOnInit() {
    console.log(history);
  }
}
