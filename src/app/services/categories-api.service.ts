import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../shared/interfaces/category';
import { Article } from '../shared/interfaces/article';
import { ArticleDisplayed } from '../shared/interfaces/articleDisplayed';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {
  private apiUrl: string = "http://localhost:8080";

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const url = `${this.apiUrl}/categories`;
    return this.http.get<Category[]>(url);
  }

  getArticlesByCategorySlug(slug: string, limit : number, offset: number): Observable<ArticleDisplayed[]> {
    const url = `${this.apiUrl}/categories/${slug}/articles?limit=${limit}&offset=${offset}`;
    return this.http.get<ArticleDisplayed[]>(url);
  }
}
