import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Category } from '../shared/interfaces/category';
import { ArticleDisplayed } from '../shared/interfaces/articleDisplayed';
import { SUGAR_RUSH_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    const url = `${SUGAR_RUSH_API.baseCategories}`;
    return this.http.get<Category[]>(url);
  }

  getArticlesByCategorySlug(slug: string, limit : number, offset: number): Observable<ArticleDisplayed[]> {
    const url = `${SUGAR_RUSH_API.baseCategories}/${slug}/articles?limit=${limit}&offset=${offset}`;
    return this.http.get<ArticleDisplayed[]>(url);
  }

  getArticlesSideByCategorySlug(slug: string, id: number, limit : number, offset: number): Observable<ArticleDisplayed[]> {
    const url = `${SUGAR_RUSH_API.baseCategories}/${slug}/articles/side?id=${id}&limit=${limit}&offset=${offset}`;
    return this.http.get<ArticleDisplayed[]>(url);
  }
}
