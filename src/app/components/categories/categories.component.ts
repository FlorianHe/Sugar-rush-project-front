import { Component } from '@angular/core';
import { CATEGORIES } from 'src/app/shared/datas/categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  public categories = CATEGORIES

}
