import { Component } from '@angular/core';
import { ARTICLES } from 'src/app/shared/datas/articles';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent {
  public articles = ARTICLES;
  public APP_ROUTES = APP_ROUTES;

  getSideArticles():ArticleDisplayed[]{
    return this.articles.slice(0,4);
  }
}
