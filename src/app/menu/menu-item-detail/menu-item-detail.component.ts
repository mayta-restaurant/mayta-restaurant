import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-menu-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './menu-item-detail.component.html',
  styleUrl: './menu-item-detail.component.scss',
})
export class MenuItemDetailComponent {
  item: any;
  isGeo: string = 'geo';
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit() {
    this.item = this.data.item;
    this.isGeo = this.data.isGeo;
  }
}
