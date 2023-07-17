import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { Article } from 'src/app/shared/interfaces/article';


@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  private _article!: Article;

  constructor(public articleService: ArticleApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.articleService.getArticleById(params['id'])
        .subscribe(article => {
          this._article = article;
          // Temporaire le temps de merge les users pour éviter une erreur
          this._article.author = {id: 1, firstname: "test", lastname: "test"}
        });
    });

  }

  get article(): Article {
    return this._article;
  }
}
