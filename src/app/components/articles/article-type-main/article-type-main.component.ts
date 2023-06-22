import { Component, Input } from '@angular/core';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';

@Component({
  selector: 'app-article-type-main',
  templateUrl: './article-type-main.component.html',
  styleUrls: ['./article-type-main.component.scss']
})
export class ArticleTypeMainComponent {
  @Input() article!:ArticleDisplayed
  public APP_ROUTES=APP_ROUTES;
}
