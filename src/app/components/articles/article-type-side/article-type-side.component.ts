import { Component, Input } from '@angular/core';
import { APP_ROUTES } from 'src/app/shared/globals/routes';
import { ArticleDisplayed } from 'src/app/shared/interfaces/articleDisplayed';

@Component({
  selector: 'app-article-type-side',
  templateUrl: './article-type-side.component.html',
  styleUrls: ['./article-type-side.component.scss']
})
export class ArticleTypeSideComponent {
  @Input() article!:ArticleDisplayed

  public APP_ROUTES=APP_ROUTES;
}
