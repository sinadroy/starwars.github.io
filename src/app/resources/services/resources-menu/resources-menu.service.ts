import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Menu } from '../../types/menu';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ResourcesMenuService {
  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseUrl as string;
  }

  list(): Observable<Menu> {
    return this.http.get<Menu>(this.baseUrl);
  }
}
