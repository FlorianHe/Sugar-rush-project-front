import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ArticleApiService } from 'src/app/services/article-api.service';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';
import { APP_ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {

  public searchForm: FormGroup;
  public searchResults!: ArticleDisplayed[];
  public APP_ROUTES = APP_ROUTES;

  constructor(private formBuilder: FormBuilder, private articleApiService: ArticleApiService) {
    this.searchForm = this.formBuilder.group({
      searchTerm: [''],
    });
  }

  getQueryParams() {
    return { keyword: this.searchForm.value.searchTerm };
  }
}
