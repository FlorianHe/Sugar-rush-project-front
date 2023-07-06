import { Component } from '@angular/core';
import { APP_ROUTES } from '../shared/globals/routes';
import { Category } from '../shared/interfaces/category';
import { CategoriesApiService } from '../services/categories-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public APP_ROUTES = APP_ROUTES;
  private _categories!: Category[];

  constructor(public categoriesService: CategoriesApiService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this._categories = categories;
      });
  }

  get categories(): Category[] {
    return this._categories;
  }
}
