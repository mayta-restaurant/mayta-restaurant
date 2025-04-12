import { Component, Inject, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuService } from '../../service/menu.service';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { MenuItemDetailComponent } from '../menu-item-detail/menu-item-detail.component';

@Component({
  selector: 'app-menu-category-items',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './menu-category-items.component.html',
  styleUrl: './menu-category-items.component.scss',
})
export class MenuCategoryItemsComponent {
  dataById: any;
  isGeo: string = 'geo';

  constructor(
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.isGeo = this.menuService.getLanguage();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('categoryId');
      if (id) {
        const numericId = parseInt(id, 10);
        this.getMenuDataById(numericId);
      }
    });

    this.menuService.isGeo$.subscribe(lang => {
      this.isGeo = lang;
    });
  }

  getMenuDataById(id: number) {
    this.menuService.getMenyData().subscribe(data => {
      this.dataById = data.categories.find(
        (category: any) => category.id === id
      );
    });
  }

  navigateCategories() {
    this.router.navigate(['categories']);
  }

  openMenuItemDetails(item: any) {
    console.log(item);

    const dialogRef = this.dialog.open(MenuItemDetailComponent, {
      data: {
        item: item,
        isGeo: this.isGeo,
      },
    });
  }
}
