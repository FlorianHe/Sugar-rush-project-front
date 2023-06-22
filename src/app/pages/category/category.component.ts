import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoriesApiService } from 'src/app/services/categories-api.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent {

  private categorySlug!: string;
  private _category!: any;
  arr = Array;

  constructor(private route: ActivatedRoute, private titleService: Title, public categoriesService: CategoriesApiService) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categorySlug = params['categorySlug'];
    });
    this.categoriesService.getCategoryById(this.categorySlug).subscribe((category) => {
      this._category = category;
      this.titleService.setTitle('Sugar Rush : ' + this._category.name);
    });
  };

  get category(): any {
    return this._category;
  }
}
