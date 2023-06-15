import { Component } from '@angular/core';
import { Category } from 'src/temp-models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent {

  categories: Category[] = [
    { id: 0, name: "Food" }, { id: 1, name: "Health" }, { id: 2, name: "Economy" }, { id: 3, name: "Sport" }, { id: 4, name: "Fun" }];

}
