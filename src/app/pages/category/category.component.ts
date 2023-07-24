import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { INFINITE_SCROLL_PARAMS } from 'src/app/shared/globals/api';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent {

  private _category!: Category;

  private _articles!: ArticleDisplayed[];

  private limit = INFINITE_SCROLL_PARAMS.limitArticles;
  private offset = INFINITE_SCROLL_PARAMS.offsetArticles;

  constructor(private route: ActivatedRoute, private titleService: Title, public categoriesService: CategoriesApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this._category = params as Category;
      this.titleService.setTitle('Sugar Rush : ' + params['name']);
      this.categoriesService.getArticlesByCategorySlug(this._category.slug, this.limit, this.offset).subscribe((articles) => {
        this._articles = articles;
        this.offset = INFINITE_SCROLL_PARAMS.offsetArticles + INFINITE_SCROLL_PARAMS.limitArticles;
      });
    });
  };

  onScroll(): void {
    this.categoriesService.getArticlesByCategorySlug(this._category.slug, this.limit, this.offset)
      .subscribe(articles => {
        this._articles = this.articles.concat(articles);
        this.offset += INFINITE_SCROLL_PARAMS.limitArticles;
      });
  }

  get category(): Category {
    return this._category;
  }

  get articles(): ArticleDisplayed[] {
    return this._articles;
  }
}
