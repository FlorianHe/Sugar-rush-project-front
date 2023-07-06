import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../shared/interfaces/article';
import { Observable } from 'rxjs';
import { ArticleDisplayed } from '../shared/interfaces/articleDisplayed';

@Injectable({
  providedIn: 'root'
})
export class ArticleApiService {

  private apiUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  getArticles(): Observable<ArticleDisplayed[]> {
    const url = `${this.apiUrl}/articles?limit=9&offset=0`;
    return this.http.get<ArticleDisplayed[]>(url);
  }

  getArticleById(id: number): Observable<Article> {
    const url = `${this.apiUrl}/articles/${id}`;
    return this.http.get<Article>(url);
  }
}
