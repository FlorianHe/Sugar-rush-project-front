import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
import { CategoriesApiService } from 'src/app/services/categories-api.service';
import { Article } from 'src/app/shared/interfaces/article';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';
import { Category } from 'src/app/shared/interfaces/category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent {

  private _category!: Category;
  private _articles!: ArticleDisplayed[];
  arr = Array;

  constructor(private route: ActivatedRoute, private titleService: Title, public categoriesService: CategoriesApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this._category = params as Category;
      this.titleService.setTitle('Sugar Rush : ' + params['name']);
    });
    this.categoriesService.getArticlesByCategorySlug('fun').subscribe((articles) => {
      this._articles = articles;
      console.log(this._articles);
    }
    );
  };

  get category(): Category {
    return this._category;
  }

  get articles(): ArticleDisplayed[] {
    return this._articles;
  }
}
