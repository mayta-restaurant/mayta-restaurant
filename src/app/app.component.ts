import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainComponent } from './core/main/main.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'MAYTA';

  ngOnInit() {
    const lang = localStorage.getItem('lang');
    if (!lang) {
      localStorage.setItem('lang', 'geo');
    }
  }
}
