import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { INFINITE_SCROLL_PARAMS } from 'src/app/shared/globals/api';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';


@Component({
  selector: 'app-article-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.scss']
})
export class OtherComponent implements OnInit {

  @Input() categorySlug!: string
  @Input() id!: number
  private _articles!: ArticleDisplayed[];

  private limit = INFINITE_SCROLL_PARAMS.limitOther;
  private offset = INFINITE_SCROLL_PARAMS.offsetArticles;

  constructor(private categoriesService: CategoriesApiService) {}

  ngOnInit(): void {
    this.getArticlesSide()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id'] && this.id) {
      this.getArticlesSide();
    }
  }

  getArticlesSide(): void {
    this.categoriesService.getArticlesSideByCategorySlug(this.categorySlug, this.id, this.limit, this.offset).subscribe((articles) => {
      this._articles = articles;
    });
  }

  get articles(): ArticleDisplayed[] {
    return this._articles;
  }

}
