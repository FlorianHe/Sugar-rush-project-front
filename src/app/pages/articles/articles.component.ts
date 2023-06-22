import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { Article } from 'src/app/shared/interfaces/article';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  public APP_ROUTES = APP_ROUTES;
  public articles!: Article[];

  constructor(public articlesService: ArticleApiService) {}

  ngOnInit(): void {
    this.articlesService.getArticles()
      .subscribe(articles => {
        this.articles = articles;
      });
    }


  getSideArticles():ArticleDisplayed[]{
    return this.articles.slice(0,4);
  }
}
