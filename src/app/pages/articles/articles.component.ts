import { Component, OnInit } from '@angular/core';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { INFINITE_SCROLL_PARAMS } from 'src/app/shared/globals/api';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';
import { CategoriesApiService } from 'src/app/services/categories-api.service';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent implements OnInit {

  public APP_ROUTES = APP_ROUTES;
  public mainArticle! : ArticleDisplayed;
  public articles!: ArticleDisplayed[];
  public articlesSide!: ArticleDisplayed[];
  private limit = INFINITE_SCROLL_PARAMS.limitArticles;
  private offset = INFINITE_SCROLL_PARAMS.offsetArticles;

  constructor(public articlesService: ArticleApiService, private categoriesService: CategoriesApiService) {}

  ngOnInit(): void {
    this.articlesService.getArticleMain().subscribe((mainArticle) =>{
      this.mainArticle = mainArticle
      this.articlesService.getArticles(this.limit, this.offset)
      .subscribe(articles => {
        this.articles = articles;
        this.limit += INFINITE_SCROLL_PARAMS.limitArticles;
        this.offset += INFINITE_SCROLL_PARAMS.limitArticles;
        this.categoriesService.getArticlesSideByCategorySlug(this.mainArticle.category.slug, this.mainArticle.id, INFINITE_SCROLL_PARAMS.limitSide, INFINITE_SCROLL_PARAMS.offsetArticles+1).subscribe((articles) => {
          this.articlesSide = articles;
        });
      });
    });
  }

  onScroll(): void {
    this.articlesService.getArticles(this.limit, this.offset)
      .subscribe(articles => {
        console.log(articles)
        this.articles = this.articles.concat(articles);
        this.limit += INFINITE_SCROLL_PARAMS.limitArticles;
        this.offset += INFINITE_SCROLL_PARAMS.limitArticles;
      });
  }

}
