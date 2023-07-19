import { Component, OnInit } from '@angular/core';
import { APP_ROUTES } from '../shared/globals/routes';
import { Category } from '../shared/interfaces/category';
import { CategoriesApiService } from '../services/categories-api.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public APP_ROUTES = APP_ROUTES;

  private _categories!: Category[];

  constructor(public categoriesService: CategoriesApiService, private userService: UserService) {}
  ngOnInit(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => {
        this._categories = categories;
      });
  }

  get categories(): Category[] {
    return this._categories;
  }

  deleteToken() {
    this.userService.deleteToken();
    console.log("plus de token");
    console.log(this.userService.getToken())
  }
}
