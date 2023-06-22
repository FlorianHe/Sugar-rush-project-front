import { Component } from '@angular/core';
import { CategoriesApiService } from 'src/app/services/categories-api.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  private _categories!: any;

  constructor(public categoriesService: CategoriesApiService) {}

  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this._categories = categories;
      });
  }

  get categories(): any {
    return this._categories;
  }
}
