import { Injectable } from '@angular/core';
import { ARTICLES } from '../shared/datas/articles';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArticlesApiService {

  articles = ARTICLES;

  constructor() { }



}
