import { Component } from '@angular/core';
import { APP_ROUTES } from '../shared/globals/routes';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public APP_ROUTES = APP_ROUTES;
}
