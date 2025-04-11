import { Component } from '@angular/core';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  isGeo: string = 'geo';

  constructor(private menuService: MenuService) {
    this.isGeo = this.menuService.getLanguage();
  }

  ngOnInit() {
    this.menuService.isGeo$.subscribe((lang) => {
      this.isGeo = lang;
    });
  }
}
