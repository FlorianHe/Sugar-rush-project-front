import { Component, Input, OnInit } from '@angular/core';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { Article } from 'src/app/shared/interfaces/article';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';


@Component({
  selector: 'app-article-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  @Input() categorySlug!: string
  private _articles!: ArticleDisplayed[];

  constructor(private categoriesService: CategoriesApiService) {}

  ngOnInit(): void {
    this.categoriesService.getArticlesByCategorySlug(this.categorySlug, 3, 0).subscribe((articles) => {
      this._articles = articles;
    }
    );
  }

  get articles(): ArticleDisplayed[] {
    return this._articles;
  }

}
