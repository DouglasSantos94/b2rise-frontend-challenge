import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageService } from '../services/storage.service';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, TopBarComponent],
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
