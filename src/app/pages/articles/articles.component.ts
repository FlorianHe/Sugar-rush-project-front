import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { ARTICLES } from 'src/app/shared/datas/articles';
import { APP_ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  public articles! : any;
  public APP_ROUTES = APP_ROUTES;

  constructor(public articleService: ArticleApiService) {}

  ngOnInit(): void {
    this.articleService.getArticles()
      .subscribe(articles => {
        this.articles = articles;
      });
  }
}
