import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { ARTICLE } from 'src/app/shared/datas/article';
import { Article } from 'src/app/shared/interfaces/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  private _article!: Article;

  constructor(public articleService: ArticleApiService) {}

  ngOnInit(): void {
    this.articleService.getArticleById(1)
      .subscribe(article => {
        this._article = article;
      });
  }

  get article(): Article {
    return this._article;
  }
}
