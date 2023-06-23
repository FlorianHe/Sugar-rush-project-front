import { Component, Input } from '@angular/core';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';

@Component({
  selector: 'app-article-type-small',
  templateUrl: './article-type-small.component.html',
  styleUrls: ['./article-type-small.component.scss']
})
export class ArticleTypeSmallComponent {
  @Input() article!:ArticleDisplayed

  public APP_ROUTES=APP_ROUTES;
}
