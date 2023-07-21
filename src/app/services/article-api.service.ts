import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../shared/interfaces/article';
import { Observable } from 'rxjs';
import { ArticleDisplayed } from '../shared/interfaces/articleDisplayed';
import { SUGAR_RUSH_API } from '../shared/globals/api';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {

  constructor(private http: HttpClient) {}

  getArticles(limit: number, offset: number): Observable<ArticleDisplayed[]> {
    const url = `${SUGAR_RUSH_API.baseArticles}?limit=${limit}&offset=${offset}`;
    return this.http.get<ArticleDisplayed[]>(url);
  }

  getArticleMain(): Observable<ArticleDisplayed> {
    return this.http.get<Article>(`${SUGAR_RUSH_API.baseArticles}/main`)
  }

  getArticleById(id: number): Observable<Article> {
    const url = `${SUGAR_RUSH_API.baseArticles}/${id}`;
    return this.http.get<Article>(url);
  }

  searchArticle(keyword: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${SUGAR_RUSH_API.baseArticles}/search?keyword=${keyword}`)
  }
}
