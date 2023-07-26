import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from '../top-bar/top-bar.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [CommonModule, TopBarComponent],
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css'],
})
export class StoreComponent {}
