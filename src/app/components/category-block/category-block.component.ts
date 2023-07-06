import { Component, Input } from '@angular/core';
import { Category } from 'src/app/shared/interfaces/category';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';

@Component({
  selector: 'app-category-block',
  templateUrl: './category-block.component.html',
  styleUrls: ['./category-block.component.scss']
})
export class CategoryBlockComponent {

  @Input()
  category!: Category;

  private _articles!: ArticleDisplayed[];

  public APP_ROUTES = APP_ROUTES;

  constructor(public categoriesService: CategoriesApiService) {}

  ngOnInit() {
    this.categoriesService.getArticlesByCategorySlug(this.category.slug, 3, 0).subscribe((articles) => {
      this._articles = articles;
    });
  };

  get articles(): ArticleDisplayed[] {
    return this._articles;
  }
}
