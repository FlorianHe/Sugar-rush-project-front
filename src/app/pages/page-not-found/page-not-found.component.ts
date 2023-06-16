import { Component } from '@angular/core';
import { ROUTES } from 'src/app/shared/globals/routes';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss']
})
export class PageNotFoundComponent {
  private _imageRoute = ROUTES.imageFolder;

  public get pictureRoute(): string {
    return this._imageRoute;
  }
}
