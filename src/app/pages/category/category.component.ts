import { Component, Input } from '@angular/core';
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

  @Input()
  inputCategory!: Category;

  private _category!: Category;

  private _articles!: ArticleDisplayed[];

  constructor(private route: ActivatedRoute, private titleService: Title, public categoriesService: CategoriesApiService) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      if (this.inputCategory == null)
        this._category = params as Category;
      else
        this._category = this.inputCategory;
      this.titleService.setTitle('Sugar Rush : ' + params['name']);
    });
    this.categoriesService.getArticlesByCategorySlug(this._category.slug, 3, 0).subscribe((articles) => {
      this._articles = articles;
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
