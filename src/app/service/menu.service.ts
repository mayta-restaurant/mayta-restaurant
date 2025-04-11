import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  private dataUrl = 'assets/data/menu-en.json';
  isGeo = new Subject<string>();
  isGeo$ = this.isGeo.asObservable();

  constructor(private http: HttpClient) {}

  getMenyData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  setLanguage(lang: string): void {
    this.isGeo.next(lang);
    localStorage.setItem('lang', lang);
  }
  getLanguage(): string {
    return localStorage.getItem('lang') || 'geo';
  }
}
