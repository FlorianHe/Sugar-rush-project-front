import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CATEGORIES } from 'src/app/shared/datas/categories';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent {
  public categoryID: number = 0;

  arr = Array;
  public categories = CATEGORIES;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryID = parseInt(params.get('categoryID') || "");
    })
  };
}
