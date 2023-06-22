import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../shared/interfaces/category';
import { Article } from '../shared/interfaces/article';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {
  private apiUrl: string = "http://json.helaine.eu/api/";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const url = `${this.apiUrl}/categories.php`;
    return this.http.get<Category[]>(url);
  }

  getCategoryById(slug: string): Observable<Article[]> {
    const url = `${this.apiUrl}/articles.php`;
    return this.http.get<Article[]>(url);
  }
}
