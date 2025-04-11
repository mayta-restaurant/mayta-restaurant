import { Component, inject, OnInit } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MenuService } from '../../service/menu.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonToggleModule, MatSlideToggleModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isDarkMode = false;
  langValue = 'geo';
  logoUrl = 'assets/images/white-logo.jpg';

  private menu = inject(MenuService);

  ngOnInit(): void {
    const stored = localStorage.getItem('darkMode');
    this.isDarkMode = stored === 'true';
    this.applyTheme();
    this.langValue = this.menu.getLanguage();
  }

  toggleDarkMode(event: any): void {
    this.isDarkMode = event.checked;
    this.applyTheme();
  }

  applyTheme(): void {
    if (this.isDarkMode) {
      document.body.classList.add('dark-theme');
      this.logoUrl = 'assets/images/logo.png';
    } else {
      document.body.classList.remove('dark-theme');
      this.logoUrl = 'assets/images/white-logo.jpg';
    }

    localStorage.setItem('darkMode', this.isDarkMode.toString());
  }

  onLanguageChange(lang: string): void {
    this.menu.setLanguage(lang);
  }
}
