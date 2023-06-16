import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Category } from 'src/temp-models/Category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent {
  public categoryID: number = 0;

  Arr = Array;
  categories: Category[] = [{ id: 0, name: "Food" }, { id: 1, name: "Health" }, { id: 2, name: "Economy" }, { id: 3, name: "Sport" }, { id: 4, name: "Fun" }];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryID = parseInt(params.get('categoryID') || "");
    })
  };
}
