import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../shared/interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {
  private apiUrl: string = "http://json.helaine.eu/api/categories.php";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const url = `${this.apiUrl}/categories`;
    return this.http.get<Category[]>(url);
  }

  getCategoryById(slug: string): Observable<Category> {
    return this.http.get<Category[]>(this.apiUrl).pipe(
      map((categories: Category[]) => {
        return categories.find((category) => category.slug === slug) as Category;
      })
    );
  }
}
