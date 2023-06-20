import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ARTICLES } from 'src/app/shared/datas/articles';
import { APP_ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  constructor(public articlesService : HttpClient ) {}
  //articles!:any
  public articles=ARTICLES;
  public APP_ROUTES = APP_ROUTES;
  
  ngOnInit(): void {
   }
}
