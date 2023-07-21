import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public APP_ROUTES = APP_ROUTES;
  public searchResults!: ArticleDisplayed[];

  constructor(public articleApiService: ArticleApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.articleApiService.searchArticle(params["keyword"]).subscribe((searchResults) => {
        this.searchResults = searchResults;
      });
    });
  }
  
}
