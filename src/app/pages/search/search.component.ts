import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';
import { ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public APP_ROUTES = APP_ROUTES;
  public searchResults!: ArticleDisplayed[];
  private _imageRoute = ROUTES.imageFolder;

  constructor(public articleApiService: ArticleApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.articleApiService.searchArticle(params["keyword"]).subscribe((searchResults) => {
        this.searchResults = searchResults;
      });
    });
  }

  public get pictureRoute(): string {
    return this._imageRoute;
  }
  
}
