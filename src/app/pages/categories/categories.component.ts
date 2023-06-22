import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { Article } from 'src/app/shared/interfaces/article';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  private _categories!: Category[];
  private _articles!: Article[];

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

  public navigate(category: Category): void {
    this.router.navigate(["/categories/" + category.slug, { id: category.id, name: category.name }]);
  }
}
