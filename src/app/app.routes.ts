import { Routes } from '@angular/router';
import { MenuCategoriesComponent } from './menu/menu-categories/menu-categories.component';
import { MenuCategoryItemsComponent } from './menu/menu-category-items/menu-category-items.component';
import { MenuItemDetailComponent } from './menu/menu-item-detail/menu-item-detail.component';
import { AboutUsComponent } from './about-us/about-us/about-us.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'categories',
    pathMatch: 'full',
  },
  {
    path: 'categories',
    component: MenuCategoriesComponent,
  },
  {
    path: 'categories/:categoryId',
    component: MenuCategoryItemsComponent,
  },
  {
    path: 'categories/:categoryId/:itemId',
    component: MenuItemDetailComponent,
  },
  {
    path: 'aboutUs',
    component: AboutUsComponent,
  },
];
