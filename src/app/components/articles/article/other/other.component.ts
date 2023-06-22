import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { Article } from 'src/app/shared/interfaces/article';


@Component({
  selector: 'app-article-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  private _articles!: Article[];

  constructor(private articleService: ArticleApiService) {}

  ngOnInit(): void {
    this.articleService.getArticles()
      .subscribe(articles => {
        this._articles = articles;
      });
  }

  get articles(): Article[] {
    return this._articles;
  }

}
