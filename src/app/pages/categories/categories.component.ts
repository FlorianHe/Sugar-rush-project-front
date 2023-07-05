import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { Article } from 'src/app/shared/interfaces/article';
import { Category } from 'src/app/shared/interfaces/category';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  private _categories!: Category[];
  private _articles!: ArticleDisplayed[];
  public APP_ROUTES = APP_ROUTES;

  constructor(public categoriesService: CategoriesApiService, private router: Router) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this._categories = categories;
      });
    this.categoriesService.getArticlesByCategorySlug("fun").subscribe((articles) => {
      this._articles = articles;
    });
  }

  get categories(): Category[] {
    return this._categories;
  }

  get articles(): ArticleDisplayed[] {
    return this._articles;
  }

}
