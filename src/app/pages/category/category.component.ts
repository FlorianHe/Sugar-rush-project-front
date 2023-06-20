import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
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

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.categoryID = parseInt(params.get('categoryID') || "");
    })
    this.titleService.setTitle('Sugar Rush : ' + this.categories[this.categoryID - 1].name);
  };
}
