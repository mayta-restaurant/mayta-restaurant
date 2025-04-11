import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  isGeo: string = 'geo';

  constructor(private router: Router, private menuServise: MenuService) {
    this.isGeo = this.menuServise.getLanguage();
  }

  ngOnInit() {
    this.menuServise.isGeo$.subscribe((lang) => {
      this.isGeo = lang;
    });
  }

  goMain() {
    this.router.navigate(['/categories']);
  }

  goAboutUs() {
    this.router.navigate(['/aboutUs']);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
