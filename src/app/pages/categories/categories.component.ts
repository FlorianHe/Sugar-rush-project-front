import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { Article } from 'src/app/shared/interfaces/article';
import { Category } from 'src/app/shared/interfaces/category';
import { APP_ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  private _categories!: Category[];
  private _articles!: Article[];
  public APP_ROUTES = APP_ROUTES;

  constructor(public categoriesService: CategoriesApiService, private router: Router) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this._categories = categories;
      });
    this.categoriesService.getArticlesByCategorySlug("").subscribe((articles) => {
      this._articles = articles;
    });
  }

  get categories(): Category[] {
    return this._categories;
  }

  get articles(): Article[] {
    return this._articles;
  }

}
